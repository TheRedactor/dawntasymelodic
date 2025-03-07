import axios from 'axios';
import { ref } from 'vue';
import { collection, addDoc, serverTimestamp, doc, updateDoc, arrayUnion } from 'firebase/firestore';
import { firestore } from '@/firebase/index'; // Fixed path to src/firebase/index.ts!!

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

// 🌍 Define OpenAI Chat Request Type
interface ChatCompletionRequest {
  model: string;
  messages: Message[];
  temperature?: number;
  max_tokens?: number;
  stream?: boolean; // ✅ Enables Streaming
}

export function useOpenAI() {
  const isLoading = ref(false);
  const error = ref<string | null>(null);

  /**
   * 🚀 **Streaming Chat Request** (Real-time AI replies)
   */
  async function sendChatMessage(chatId: string, messages: Message[], model = 'gpt-4o-mini'): Promise<Message> {
    isLoading.value = true;
    error.value = null;

    try {
      console.log("🚀 Sending message to OpenAI... (Streaming Enabled)");

      const requestData: ChatCompletionRequest = {
        model,
        messages,
        temperature: 0.7,
        max_tokens: 1000,
        stream: true // ✅ Enables token streaming
      };

      const response = await openaiClient.post('/chat/completions', requestData, {
        responseType: 'stream'
      });

      // Initialize assistant message
      const assistantMessage: Message = { role: 'assistant', content: '', timestamp: new Date() };

      // Return a Promise that resolves when the stream ends
      return new Promise((resolve, reject) => {
        response.data.on('data', (chunk: Buffer) => {
          const text = chunk.toString();
          const parsedData = parseOpenAIResponse(text);
          if (parsedData) {
            assistantMessage.content += parsedData;
            console.log("📥 Streaming: ", parsedData);
          }
        });

        response.data.on('end', async () => {
          console.log("✅ AI Response Completed: ", assistantMessage.content);
          
          // 📌 Add AI Response to Messages
          messages.push(assistantMessage);

          // 📝 Save Updated Chat to Firestore
          await saveChatToFirestore(chatId, messages);

          isLoading.value = false;
          resolve(assistantMessage); // Resolve with the complete message
        });

        response.data.on('error', (err: any) => {
          console.error('🔥 Stream error:', err);
          error.value = 'Streaming failed';
          isLoading.value = false;
          reject(err);
        });
      });
    } catch (err: any) {
      console.error('🔥 OpenAI API error:', err);
      error.value = err.response?.data?.error?.message || 'Error connecting to AI service';
      isLoading.value = false;
      throw new Error(error.value);
    }
  }

  /**
   * 🔥 **Save Chat History to Firestore**
   */
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

  /**
   * 🔄 **Parse Streaming Data from OpenAI**
   */
  function parseOpenAIResponse(text: string) {
    try {
      const jsonParts = text.split('data: ').filter(Boolean);
      const messages = jsonParts.map(part => {
        if (part.trim() === '[DONE]') return null; // Handle stream end
        return JSON.parse(part.trim());
      }).filter(Boolean);
      return messages.map(msg => msg.choices?.[0]?.delta?.content || '').join('');
    } catch (error) {
      console.warn("⚠️ Error parsing OpenAI stream response:", error);
      return null;
    }
  }

  return {
    sendChatMessage,
    saveChatToFirestore,
    isLoading,
    error
  };
}