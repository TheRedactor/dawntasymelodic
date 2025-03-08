<template>
    <div class="container mx-auto px-4 py-8 max-w-4xl">
      <div class="flex justify-between items-center mb-6">
        <h1 class="text-2xl font-bold">Your Conversations</h1>
        <button @click="createNewChat" class="btn btn-primary">
          <i class="ri-add-line mr-2"></i> New Chat
        </button>
      </div>
      
      <div v-if="chatStore.isLoading" class="flex justify-center p-8">
        <div class="animate-spin rounded-full h-8 w-8 border-b-2 border-cosmic-accent"></div>
      </div>
      
      <div v-else-if="!chatStore.chats.length" class="card p-8 text-center">
        <p class="text-gray-500 dark:text-gray-400 mb-4">
          You don't have any conversations yet.
        </p>
        <button @click="createNewChat" class="btn btn-primary">
          <i class="ri-chat-new-line mr-2"></i> Start a New Conversation
        </button>
      </div>
      
      <div v-else class="grid gap-4">
        <router-link
          v-for="chat in chatStore.sortedChats"
          :key="chat.id"
          :to="`/chat/${chat.id}`"
          class="card p-4 hover:shadow-cosmic transition-all duration-300 flex justify-between items-center"
        >
          <div class="flex items-center">
            <div class="w-10 h-10 rounded-full bg-cosmic-accent flex items-center justify-center text-white mr-4">
              <i class="ri-chat-3-line"></i>
            </div>
            <div>
              <h3 class="font-medium">{{ chat.title }}</h3>
              <p class="text-sm text-gray-500 dark:text-gray-400">
                {{ formatDate(chat.updatedAt) }}
              </p>
            </div>
          </div>
          <i class="ri-arrow-right-line text-gray-400"></i>
        </router-link>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { onMounted } from 'vue';
  import { useRouter } from 'vue-router';
  import { useChatStore } from '../stores/chat';
  import { format } from 'date-fns';
  
  const router = useRouter();
  const chatStore = useChatStore();
  
  onMounted(() => {
    chatStore.fetchChats();
  });
  
  function formatDate(timestamp: any) {
    if (!timestamp) return '';
    
    const date = timestamp instanceof Date 
      ? timestamp 
      : new Date(timestamp.seconds ? timestamp.seconds * 1000 : timestamp);
    
    return format(date, 'MMM d, yyyy h:mm a');
  }
  
  async function createNewChat() {
    const chatId = await chatStore.createChat();
    if (chatId) {
      router.push(`/chat/${chatId}`);
    }
  }
  </script>