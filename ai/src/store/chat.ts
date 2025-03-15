// src/store/chat.ts
import { defineStore } from 'pinia';
import { ref, computed } from 'vue';
import { db } from '../firebase/init';  // FIXED: Using proper Firebase import
import { 
  collection, 
  addDoc, 
  getDocs, 
  getDoc,
  doc, 
  updateDoc, 
  serverTimestamp, 
  query, 
  where, 
  orderBy,
  onSnapshot,
  Timestamp,
  arrayUnion
} from 'firebase/firestore';
import { openaiService } from '../../server/api/openai';

export interface Message {
  id?: string;
  content: string;
  role: 'user' | 'assistant';
  timestamp: Timestamp | Date;
}

export interface Chat {
  id: string;
  title: string;
  createdAt: Timestamp | Date;
  updatedAt: Timestamp | Date;
  userId: string;
  messages: Message[];
}

export const useChatStore = defineStore('chat', () => {
  const chats = ref<Chat[]>([]);
  const currentChat = ref<Chat | null>(null);
  const isLoading = ref(false);
  const error = ref<string | null>(null);
  const currentUserId = ref<string | null>(null);
  
  // 📌 **Sorted Chats by Most Recent**
  const sortedChats = computed(() => {
    return [...chats.value].sort((a, b) => {
      const dateA = a.updatedAt instanceof Timestamp ? a.updatedAt.toDate() : new Date(a.updatedAt);
      const dateB = b.updatedAt instanceof Timestamp ? b.updatedAt.toDate() : new Date(b.updatedAt);
      return dateB.getTime() - dateA.getTime();
    });
  });

  // Set current user ID (call this after auth is initialized)
  function setUserId(userId: string | null) {
    currentUserId.value = userId;
  }
  
  // 🚀 **Fetch User's Chats from Firestore**
  async function fetchChats() {
    if (!currentUserId.value) return;
    
    isLoading.value = true;
    error.value = null;
    
    try {
      const q = query(
        collection(db(), 'chats'),  // FIXED: Using db() function
        where('userId', '==', currentUserId.value),
        orderBy('updatedAt', 'desc')
      );
      
      const querySnapshot = await getDocs(q);
      chats.value = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      })) as Chat[];
      
    } catch (err: any) {
      console.error('🔥 Error fetching chats:', err);
      error.value = 'Failed to load chats. Please try again later.';
    } finally {
      isLoading.value = false;
    }
  }
  
  // 🔄 **Fetch & Subscribe to Chat (Real-Time Updates)**
  async function fetchChat(chatId: string) {
    if (!currentUserId.value) return;
    
    isLoading.value = true;
    error.value = null;
    
    try {
      const docRef = doc(db(), 'chats', chatId);  // FIXED: Using db() function
      const docSnap = await getDoc(docRef);
      
      if (docSnap.exists() && docSnap.data().userId === currentUserId.value) {
        currentChat.value = {
          id: docSnap.id,
          ...docSnap.data()
        } as Chat;
        
        // ✅ Subscribe to real-time updates
        subscribeToChat(chatId);
      } else {
        error.value = '⚠️ Chat not found or access denied.';
        currentChat.value = null;
      }
    } catch (err: any) {
      console.error('🔥 Error fetching chat:', err);
      error.value = 'Failed to load the chat. Please try again later.';
    } finally {
      isLoading.value = false;
    }
  }
  
  // 🔄 **Real-time Chat Sync**
  let unsubscribe: (() => void) | null = null;
  
  function subscribeToChat(chatId: string) {
    if (unsubscribe) {
      unsubscribe(); // Clean up previous listener
    }
    
    const docRef = doc(db(), 'chats', chatId);  // FIXED: Using db() function
    unsubscribe = onSnapshot(docRef, (doc) => {
      if (doc.exists()) {
        currentChat.value = {
          id: doc.id,
          ...doc.data()
        } as Chat;
      }
    });
  }
  
  // 🆕 **Create a New Chat**
  async function createChat(options?: { initialPrompt?: string }) {
    if (!currentUserId.value) return null;
    
    isLoading.value = true;
    error.value = null;
    
    try {
      const newChat = {
        title: options?.initialPrompt?.slice(0, 30) + '...' || 'New Conversation',
        createdAt: serverTimestamp(),
        updatedAt: serverTimestamp(),
        userId: currentUserId.value,
        messages: []
      };
      
      const docRef = await addDoc(collection(db(), 'chats'), newChat);  // FIXED: Using db() function
      
      // ✅ Add new chat to local state
      const chatWithId = { id: docRef.id, ...newChat, messages: [] } as Chat;
      chats.value.unshift(chatWithId);
      
      // If there's an initial prompt, send it right away
      if (options?.initialPrompt) {
        currentChat.value = chatWithId;
        await sendMessage(options.initialPrompt);
      }
      
      return docRef.id;
    } catch (err: any) {
      console.error('🔥 Error creating chat:', err);
      error.value = 'Failed to create a new chat.';
      return null;
    } finally {
      isLoading.value = false;
    }
  }
  
  // 💬 **Send Message with AI Response Streaming**
  async function sendMessage(content: string) {
    if (!currentUserId.value || !currentChat.value) return;

    isLoading.value = true;
    error.value = null;

    try {
      const chatRef = doc(db(), 'chats', currentChat.value.id);  // FIXED: Using db() function

      // ✅ Add user message instantly to Firestore
      const userMessage: Message = {
        content,
        role: 'user',
        timestamp: new Date()
      };
      await updateDoc(chatRef, {
        messages: arrayUnion(userMessage),
        updatedAt: serverTimestamp()
      });

      // Add message to local state for immediate display
      if (!currentChat.value.messages) {
        currentChat.value.messages = [];
      }
      currentChat.value.messages.push(userMessage);

      // ✅ Get AI Response
      const messages = currentChat.value.messages.map(msg => ({
        role: msg.role,
        content: msg.content
      }));

      // Use streaming for better UX
      let aiResponse = '';
      await openaiService.streamCompletion(
        content,
        messages.slice(0, -1),
        {
          mode: 'default',
          temperature: 0.7,
          maxTokens: 1000,
          userPlan: 'free', // Default to free plan
          onChunk: (chunk) => {
            aiResponse += chunk;
            
            // If we're already displaying a partial response, update it
            const lastMessage = currentChat.value?.messages[currentChat.value.messages.length - 1];
            if (lastMessage && lastMessage.role === 'assistant') {
              lastMessage.content = aiResponse;
            } else if (currentChat.value) {
              // Add a new message for the assistant's response
              currentChat.value.messages.push({
                content: aiResponse,
                role: 'assistant',
                timestamp: new Date()
              });
            }
          }
        }
      );

      // Once complete, save the final AI response to Firestore
      const aiMessage: Message = {
        content: aiResponse,
        role: 'assistant',
        timestamp: new Date()
      };
      
      await updateDoc(chatRef, {
        messages: arrayUnion(aiMessage),
        updatedAt: serverTimestamp()
      });

      // ✅ Auto-update chat title on first message
      if (currentChat.value.messages.length <= 2) {
        const title = content.length > 30 ? content.substring(0, 30) + '...' : content;
        await updateDoc(chatRef, { title });
        if (currentChat.value) {
          currentChat.value.title = title;
        }
      }

    } catch (err: any) {
      console.error('🔥 Error sending message:', err);
      error.value = 'Failed to send the message. Please try again later.';
      
      // Add error message to chat for better UX
      if (currentChat.value && currentChat.value.messages) {
        currentChat.value.messages.push({
          content: "Sorry, I'm having trouble connecting. Please try again.",
          role: 'assistant',
          timestamp: new Date()
        });
      }
    } finally {
      isLoading.value = false;
    }
  }

  return {
    chats,
    currentChat,
    isLoading,
    error,
    sortedChats,
    setUserId,
    fetchChats,
    fetchChat,
    createChat,
    sendMessage
  };
});