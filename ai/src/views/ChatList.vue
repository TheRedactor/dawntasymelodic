<template>
  <div class="min-h-screen bg-gradient-to-br from-cosmic-dark via-indigo-900 to-purple-900 flex flex-col justify-center items-center p-4">
    <transition name="fade-slide" appear>
      <div class="max-w-3xl w-full space-y-8">
        <!-- Header -->
        <header class="text-center mb-12 animate-headerGlow">
          <h1 class="text-4xl md:text-5xl font-display font-extrabold cosmic-glow mb-4">
            Welcome to DawntasyAI
          </h1>
          <p class="text-lg text-gray-300">
            Your AI companion from the Dawntasy universe
          </p>
        </header>

        <!-- Main Action Card - Similar to Claude's chat focus -->
        <div class="card cosmic-card-animation p-8 text-center">
          <h2 class="text-2xl font-semibold cosmic-glow mb-6">Start a Conversation</h2>
          <p class="text-gray-400 mb-6">Ask me anything about the Dawntasy universe, get creative writing, or just chat about any topic!</p>
          
          <button @click="startNewChat" class="btn btn-primary w-full max-w-md mx-auto mb-8">
            <i class="ri-chat-new-line mr-2"></i> New Chat
          </button>
          
          <!-- Example prompts (similar to Claude's start options) -->
          <div class="mt-8">
            <h3 class="text-lg font-medium mb-4">Try asking about:</h3>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div 
                v-for="(prompt, index) in examplePrompts" 
                :key="index"
                @click="startChatWithPrompt(prompt)"
                class="example-prompt"
              >
                {{ prompt }}
              </div>
            </div>
          </div>
        </div>
        
        <!-- Recent Chats (similar to Claude's chat history) -->
        <div v-if="recentChats.length > 0" class="card p-6">
          <h2 class="text-xl font-semibold mb-4">Recent Conversations</h2>
          <div class="space-y-2">
            <div 
              v-for="chat in recentChats" 
              :key="chat.id"
              @click="goToChat(chat.id)"
              class="chat-history-item"
            >
              <span class="chat-title">{{ chat.title }}</span>
              <span class="chat-date">{{ formatDate(chat.updatedAt) }}</span>
            </div>
          </div>
          
          <div class="mt-4 text-center">
            <button @click="viewAllChats" class="btn btn-secondary">
              View All Conversations
            </button>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { useChatStore } from '../store/chat';
import { format } from 'date-fns';

const router = useRouter();
const chatStore = useChatStore();

// Example prompts (similar to Claude's suggestions)
const examplePrompts = [
  "Tell me about Time Smith and The Rift",
  "What is the Plain and Pale Clock?",
  "Write a short story set in the Dawntasy universe",
  "Explain quantum physics in simple terms",
  "Help me outline an essay on artificial intelligence",
  "Give me a recipe for a creative cocktail"
];

// Computed properties
const recentChats = computed(() => {
  return chatStore.sortedChats.slice(0, 5);
});

// Methods
async function startNewChat() {
  const chatId = await chatStore.createChat();
  if (chatId) {
    router.push(`/chat/${chatId}`);
  }
}

function goToChat(chatId) {
  router.push(`/chat/${chatId}`);
}

function viewAllChats() {
  router.push('/chats');
}

async function startChatWithPrompt(prompt) {
  const chatId = await chatStore.createChat({ initialPrompt: prompt });
  router.push(`/chat/${chatId}`);
}

function formatDate(timestamp) {
  if (!timestamp) return '';
  
  const date = timestamp instanceof Date 
    ? timestamp 
    : new Date(timestamp.seconds ? timestamp.seconds * 1000 : timestamp);
  
  return format(date, 'MMM d, yyyy');
}

// Load chats on mount
onMounted(() => {
  chatStore.fetchChats();
});
</script>

<style scoped>
.cosmic-glow {
  text-shadow: 0 0 15px rgba(139, 92, 246, 0.9), 0 0 30px rgba(192, 132, 252, 0.8);
}

.cosmic-card-animation {
  animation: float-card 6s infinite alternate ease-in-out;
}

@keyframes float-card {
  from { transform: translateY(0px); }
  to { transform: translateY(-15px); }
}

.example-prompt {
  background: rgba(139, 92, 246, 0.2);
  border: 1px solid rgba(139, 92, 246, 0.3);
  padding: 1rem;
  border-radius: 0.5rem;
  cursor: pointer;
  transition: all 0.3s ease;
}

.example-prompt:hover {
  background: rgba(139, 92, 246, 0.3);
  transform: translateY(-3px);
  box-shadow: 0 10px 20px -10px rgba(139, 92, 246, 0.4);
}

.chat-history-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.75rem 1rem;
  background: rgba(15, 23, 42, 0.5);
  border-radius: 0.5rem;
  cursor: pointer;
  transition: all 0.2s ease;
}

.chat-history-item:hover {
  background: rgba(139, 92, 246, 0.2);
}

.chat-title {
  font-weight: 500;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 70%;
}

.chat-date {
  font-size: 0.875rem;
  color: rgba(255, 255, 255, 0.6);
}

.fade-slide-enter-active {
  transition: all 0.5s ease-out;
}

.fade-slide-enter-from {
  opacity: 0;
  transform: translateY(20px);
}
</style>