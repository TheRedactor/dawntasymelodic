import { defineStore } from 'pinia';
import { ref, computed } from 'vue';
import { useAuthStore } from './auth';
import { firestore } from '../firebase/init';
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
import { useOpenAI } from '../../server/api/openai';

const { sendChatMessage } = useOpenAI();

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
  const authStore = useAuthStore();
  
  const chats = ref<Chat[]>([]);
  const currentChat = ref<Chat | null>(null);
  const isLoading = ref(false);
  const error = ref<string | null>(null);
  
  // 📌 **Sorted Chats by Most Recent**
  const sortedChats = computed(() => {
    return [...chats.value].sort((a, b) => {
      const dateA = a.updatedAt instanceof Timestamp ? a.updatedAt.toDate() : new Date(a.updatedAt);
      const dateB = b.updatedAt instanceof Timestamp ? b.updatedAt.toDate() : new Date(b.updatedAt);
      return dateB.getTime() - dateA.getTime();
    });
  });
  
  // 🚀 **Fetch User's Chats from Firestore**
  async function fetchChats() {
    if (!authStore.user?.uid) return;
    
    isLoading.value = true;
    error.value = null;
    
    try {
      const q = query(
        collection(firestore, 'chats'),
        where('userId', '==', authStore.user.uid),
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
    if (!authStore.user?.uid) return;
    
    isLoading.value = true;
    error.value = null;
    
    try {
      const docRef = doc(firestore, 'chats', chatId);
      const docSnap = await getDoc(docRef);
      
      if (docSnap.exists() && docSnap.data().userId === authStore.user.uid) {
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
    
    const docRef = doc(firestore, 'chats', chatId);
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
  async function createChat() {
    if (!authStore.user?.uid) return null;
    
    isLoading.value = true;
    error.value = null;
    
    try {
      const newChat = {
        title: 'New Conversation',
        createdAt: serverTimestamp(),
        updatedAt: serverTimestamp(),
        userId: authStore.user.uid,
        messages: []
      };
      
      const docRef = await addDoc(collection(firestore, 'chats'), newChat);
      
      // ✅ Add new chat to local state
      chats.value.unshift({ id: docRef.id, ...newChat, messages: [] } as Chat);
      
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
    if (!authStore.user?.uid || !currentChat.value) return;

    isLoading.value = true;
    error.value = null;

    try {
      const chatRef = doc(firestore, 'chats', currentChat.value.id);

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

      // ✅ Stream AI Response (No Wait Time!)
      const aiMessage = await sendChatMessage(currentChat.value.id, [
        ...currentChat.value.messages,
        userMessage
      ]);

      await updateDoc(chatRef, {
        messages: arrayUnion(aiMessage),
        updatedAt: serverTimestamp()
      });

      // ✅ Auto-update chat title
      if (currentChat.value.messages.length === 0) {
        const title = content.length > 30 ? content.substring(0, 30) + '...' : content;
        await updateDoc(chatRef, { title });
      }

    } catch (err: any) {
      console.error('🔥 Error sending message:', err);
      error.value = 'Failed to send the message. Please try again later.';
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
    fetchChats,
    fetchChat,
    createChat,
    sendMessage
  };
});
