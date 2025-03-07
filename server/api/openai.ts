import axios from 'axios';
import { ref } from 'vue';
import { collection, addDoc, serverTimestamp, doc, updateDoc, arrayUnion } from 'firebase/firestore';
import { firestore } from '../firebase'; // Ensure Firebase is correctly imported

// 🌌 OpenAI API Configuration
const apiKey = import.meta.env.VITE_OPENAI_API_KEY;
const baseURL = 'https://api.openai.com/v1';

// 🌟 Create OpenAI Axios Instance
const openaiClient = axios.create({
  baseURL,
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${apiKey}`
  }
});

// 🌍 Define Chat Message Interface
interface Message {
  role: 'system' | 'user' | 'assistant';
  content: string;
  timestamp?: any;
}

// 🌍 Define OpenAI Chat Request & Response Types
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

  // 🚀 **Send a Chat Completion Request to OpenAI API**
  async function sendChatMessage(chatId: string, messages: Message[], model = 'gpt-4o-mini') {
    isLoading.value = true;
    error.value = null;
    
    try {
      console.log("🚀 Sending message to OpenAI...");
      const requestData: ChatCompletionRequest = {
        model,
        messages,
        temperature: 0.7,
        max_tokens: 1000
      };

      const response = await autoRetry(async () =>
        openaiClient.post<ChatCompletionResponse>('/chat/completions', requestData)
      );

      // 📩 Get AI Response
      const aiMessage: Message = {
        role: 'assistant',
        content: response.data.choices[0].message.content,
        timestamp: new Date()
      };

      // 📌 Add AI Response to Messages
      messages.push(aiMessage);

      // 📝 Save Updated Chat to Firestore
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

  // 🌟 **Save Chat History to Firestore**
  async function saveChatToFirestore(chatId: string, messages: Message[]) {
    try {
      if (!chatId) throw new Error("⚠️ Chat ID is missing!");

      // 📌 Get Firestore Document Reference
      const chatRef = doc(firestore, 'chats', chatId);

      // 🚀 Efficient Firestore Write (Prevents Overwrites & Duplicates)
      await updateDoc(chatRef, {
        messages: arrayUnion(...messages), // Append only new messages
        updatedAt: serverTimestamp() // Keep last update time
      });

      console.log("🔥 Chat history successfully saved to Firestore!");
    } catch (error) {
      console.error("🔥 Error saving chat history:", error);
    }
  }

  // ⚡ **Auto-Retry Function (Handles Failed Requests)**
  async function autoRetry(fn: () => Promise<any>, retries = 3, delay = 1000) {
    for (let i = 0; i < retries; i++) {
      try {
        return await fn();
      } catch (error) {
        console.warn(`⚠️ Attempt ${i + 1} failed. Retrying in ${delay}ms...`);
        await new Promise((res) => setTimeout(res, delay));
      }
    }
    throw new Error("🔥 All retries failed.");
  }

  return {
    sendChatMessage,
    saveChatToFirestore,
    isLoading,
    error
  };
}