import axios from 'axios';
import { ref } from 'vue';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { firestore } from '../firebase'; // Ensure Firebase is correctly imported

// OpenAI API configuration
const apiKey = import.meta.env.VITE_OPENAI_API_KEY;
const baseURL = 'https://api.openai.com/v1';

// Create axios instance for OpenAI API
const openaiClient = axios.create({
  baseURL,
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${apiKey}`
  }
});

// Define types
interface Message {
  role: 'system' | 'user' | 'assistant';
  content: string;
  timestamp?: any;
}

interface ChatCompletionRequest {
  model: string;
  messages: Message[];
  temperature?: number;
  max_tokens?: number;
}

interface ChatCompletionResponse {
  id: string;
  object: string;
  created: number;
  model: string;
  choices: {
    index: number;
    message: Message;
    finish_reason: string;
  }[];
  usage: {
    prompt_tokens: number;
    completion_tokens: number;
    total_tokens: number;
  };
}

export function useOpenAI() {
  const isLoading = ref(false);
  const error = ref<string | null>(null);

  /**
   * Send a chat completion request to OpenAI API
   */
  async function sendChatMessage(chatId: string, messages: Message[], model = 'gpt-4o-mini') {
    isLoading.value = true;
    error.value = null;
    
    try {
      const requestData: ChatCompletionRequest = {
        model,
        messages,
        temperature: 0.7,
        max_tokens: 1000
      };
      
      const response = await openaiClient.post<ChatCompletionResponse>(
        '/chat/completions', 
        requestData
      );

      // Get AI-generated response
      const aiMessage: Message = {
        role: 'assistant',
        content: response.data.choices[0].message.content,
        timestamp: new Date()
      };

      // Add AI response to message array
      messages.push(aiMessage);

      // Save updated chat history to Firestore
      await saveChatToFirestore(chatId, messages);

      return aiMessage;
    } catch (err: any) {
      console.error('🔥 OpenAI API error:', err);
      error.value = err.response?.data?.error?.message || 'Error connecting to AI service';
      throw new Error(error.value);
    } finally {
      isLoading.value = false;
    }
  }

  /**
   * Save chat history to Firestore
   */
  async function saveChatToFirestore(chatId: string, messages: Message[]) {
    try {
      if (!chatId) throw new Error("⚠️ Chat ID is missing!");

      const chatRef = collection(firestore, 'chats', chatId, 'messages');

      for (const message of messages) {
        await addDoc(chatRef, {
          role: message.role,
          content: message.content,
          timestamp: serverTimestamp() // Ensure timestamp consistency
        });
      }

      console.log("🔥 Chat history successfully saved to Firestore!");
    } catch (error) {
      console.error("🔥 Error saving chat history:", error);
    }
  }

  return {
    sendChatMessage,
    saveChatToFirestore,
    isLoading,
    error
  };
}