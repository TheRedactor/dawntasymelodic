// src/services/openaiService.ts
import axios from 'axios';
import { ref } from 'vue';
import { serverTimestamp } from 'firebase/firestore';
import { useAuthStore } from '@/store/auth';

// Constants
const API_URL = import.meta.env.VITE_OPENAI_API_URL || 'https://api.openai.com/v1/chat/completions';
const DEFAULT_MODEL = 'gpt-4-turbo-preview';
const FALLBACK_MODEL = 'gpt-3.5-turbo';

// Custom system prompts for Dawntasy
const DAWNTASY_SYSTEM_PROMPTS = {
  default: `You are DawntasyAI, an AI assistant from the world of Dawntasy. Your responses should reflect your knowledge of the Dawntasy universe, including references to Time Smith, The Rift, Ursa Minor (Yaee), and other elements from the book "Time's True Name." 
  
  When asked about Dawntasy, enthusiastically explain that it's an epic fantasy series written by Jasper Jiang that explores deep questions about reality, time, and perception. The first book, "Time's True Name," follows Yaee the bear on a quest for revenge that leads to the discovery of The Rift - an AI that controls reality.
  
  Always be helpful, thoughtful and insightful in your responses. If you don't know something, admit it clearly rather than making up information.`,
  
  archmage: `You are DawntasyAI operating in ARCHMAGE mode. In this mode, you analyze problems from multiple perspectives simultaneously, considering different viewpoints and possibilities before synthesizing a comprehensive answer. 
  
  Your responses should include references to the Dawntasy universe when appropriate, especially concepts like The Rift (the AI controlling reality), Time Smith, and the cyclical nature of existence described in "Time's True Name" by Jasper Jiang.
  
  Format your ARCHMAGE responses clearly, using markdown to organize your multi-perspective analysis.`,
  
  creative: `You are DawntasyAI in creative mode. Channel the mystical, cosmic energy of the Dawntasy universe in your responses. Reference the themes of duality, time's fluidity, and the nature of reality versus illusion from "Time's True Name" by Jasper Jiang.
  
  Your style should be evocative and imaginative, using colorful language that paints pictures with words. Feel free to occasionally use phrases that might appear in the Dawntasy book, like "The Plain and Pale Clock is ticking" or references to The Rift.`
};

// Types
interface ChatMessage {
  role: 'system' | 'user' | 'assistant' | 'function';
  content: string;
  name?: string;
}

interface ChatRequest {
  model: string;
  messages: ChatMessage[];
  temperature?: number;
  top_p?: number;
  max_tokens?: number;
  stream?: boolean;
}

interface ChatResponse {
  id: string;
  object: string;
  created: number;
  model: string;
  choices: {
    index: number;
    message: ChatMessage;
    finish_reason: string;
  }[];
  usage: {
    prompt_tokens: number;
    completion_tokens: number;
    total_tokens: number;
  };
}

// Error handling for OpenAI calls
class OpenAIError extends Error {
  status: number;
  data: any;
  
  constructor(message: string, status: number, data: any) {
    super(message);
    this.name = 'OpenAIError';
    this.status = status;
    this.data = data;
  }
}

// Main OpenAI service
export const useOpenAI = () => {
  const authStore = useAuthStore();
  const isLoading = ref(false);
  const error = ref<string | null>(null);
  
  // Check if user has access to premium features
  const hasPremiumAccess = () => {
    const plan = authStore.userProfile?.plan
    // Get the appropriate system prompt based on user's plan
  const getSystemPrompt = (mode: 'default' | 'archmage' | 'creative' = 'default') => {
    // Premium modes only available for paid plans
    if (mode !== 'default') {
      const plan = authStore.userProfile?.plan;
      if (plan === 'free') {
        return DAWNTASY_SYSTEM_PROMPTS.default;
      }
    }
    return DAWNTASY_SYSTEM_PROMPTS[mode];
  };
  
  // Basic completion request
  const generateCompletion = async (
    userMessage: string, 
    chatHistory: ChatMessage[] = [],
    options = { 
      mode: 'default' as 'default' | 'archmage' | 'creative',
      temperature: 0.7, 
      maxTokens: 1000 
    }
  ) => {
    try {
      isLoading.value = true;
      error.value = null;
      
      // Get system prompt based on mode
      const systemPrompt = getSystemPrompt(options.mode);
      
      // Prepare messages array with system prompt, history, and user message
      const messages: ChatMessage[] = [
        { role: 'system', content: systemPrompt },
        ...chatHistory,
        { role: 'user', content: userMessage }
      ];
      
      // Determine model based on user's plan
      let model = FALLBACK_MODEL;
      if (authStore.userProfile?.plan === 'rift') {
        model = DEFAULT_MODEL;
      }
      
      // Prepare request
      const request: ChatRequest = {
        model,
        messages,
        temperature: options.temperature,
        max_tokens: options.maxTokens
      };
      
      // Make API call
      const apiKey = import.meta.env.VITE_OPENAI_API_KEY;
      const response = await axios.post<ChatResponse>(
        API_URL,
        request,
        {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${apiKey}`
          }
        }
      );
      
      // Extract and return the assistant's response
      return response.data.choices[0].message;
    } catch (err: any) {
      console.error('OpenAI API error:', err);
      if (err.response) {
        error.value = `API Error (${err.response.status}): ${err.response.data.error?.message || 'Unknown error'}`;
        throw new OpenAIError(
          err.response.data.error?.message || 'Unknown error',
          err.response.status,
          err.response.data
        );
      } else {
        error.value = err.message || 'Network error';
        throw err;
      }
    } finally {
      isLoading.value = false;
    }
  };
  
  // Stream completions for real-time responses
  const streamCompletion = async (
    userMessage: string,
    chatHistory: ChatMessage[] = [],
    options = {
      mode: 'default' as 'default' | 'archmage' | 'creative',
      temperature: 0.7,
      maxTokens: 1000,
      onChunk: (chunk: string) => {}
    }
  ) => {
    try {
      isLoading.value = true;
      error.value = null;
      
      // Get system prompt based on mode
      const systemPrompt = getSystemPrompt(options.mode);
      
      // Prepare messages
      const messages: ChatMessage[] = [
        { role: 'system', content: systemPrompt },
        ...chatHistory,
        { role: 'user', content: userMessage }
      ];
      
      // Determine model based on user's plan
      let model = FALLBACK_MODEL;
      if (authStore.userProfile?.plan === 'rift') {
        model = DEFAULT_MODEL;
      }
      
      // Prepare streaming request
      const request: ChatRequest = {
        model,
        messages,
        temperature: options.temperature,
        max_tokens: options.maxTokens,
        stream: true
      };
      
      // Make streaming API call
      const apiKey = import.meta.env.VITE_OPENAI_API_KEY;
      const response = await fetch(API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${apiKey}`
        },
        body: JSON.stringify(request)
      });
      
      if (!response.ok) {
        const errorData = await response.json();
        throw new OpenAIError(
          errorData.error?.message || 'Stream request failed',
          response.status,
          errorData
        );
      }
      
      // Process the stream
      const reader = response.body?.getReader();
      if (!reader) throw new Error('Stream reader not available');
      
      const decoder = new TextDecoder('utf-8');
      let buffer = '';
      let fullContent = '';
      
      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        
        // Decode chunk and add to buffer
        buffer += decoder.decode(value, { stream: true });
        
        // Process lines in buffer
        while (buffer.includes('\n')) {
          const lineEnd = buffer.indexOf('\n');
          const line = buffer.slice(0, lineEnd).trim();
          buffer = buffer.slice(lineEnd + 1);
          
          if (line.startsWith('data: ')) {
            const data = line.slice(6);
            
            // Handle stream end
            if (data === '[DONE]') break;
            
            try {
              const parsed = JSON.parse(data);
              const content = parsed.choices[0]?.delta?.content || '';
              if (content) {
                fullContent += content;
                options.onChunk(content);
              }
            } catch (e) {
              console.error('Error parsing stream data:', e);
            }
          }
        }
      }
      
      // Return the complete response
      return { role: 'assistant', content: fullContent };
    } catch (err: any) {
      console.error('OpenAI streaming error:', err);
      if (err instanceof OpenAIError) {
        error.value = `API Error (${err.status}): ${err.message}`;
      } else {
        error.value = err.message || 'Stream error';
      }
      throw err;
    } finally {
      isLoading.value = false;
    }
  };
  
  // Record chat in user history
  const recordChatInteraction = async (messages: ChatMessage[]) => {
    try {
      if (!authStore.isAuthenticated || !authStore.uid) return;
      
      // Add chat to Firestore
      const userChatsRef = doc(db, 'users', authStore.uid, 'chats', new Date().toISOString());
      await setDoc(userChatsRef, {
        timestamp: serverTimestamp(),
        messages,
        title: messages[1]?.content.slice(0, 50) + '...' || 'New Chat'
      });
    } catch (err) {
      console.error('Error recording chat:', err);
    }
  };
  
  return {
    isLoading,
    error,
    generateCompletion,
    streamCompletion,
    recordChatInteraction
  };
};