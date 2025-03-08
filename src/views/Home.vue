<template>
  <div class="min-h-screen bg-gradient-to-br from-cosmic-dark via-indigo-900 to-purple-900 flex flex-col justify-center items-center p-4">
    <transition name="fade-slide" appear>
      <div class="max-w-3xl w-full space-y-8">
        <!-- Legendary Header -->
        <header class="text-center mb-12 animate-headerGlow">
          <h1 class="text-4xl md:text-5xl font-display font-extrabold cosmic-glow mb-4">
            Welcome to DawntasyAI
          </h1>
          <p class="text-lg text-gray-300">
            Your legendary AI companion awaits your command.
          </p>
        </header>

        <!-- Action Cards -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-3xl">
          <!-- New Conversation -->
          <div class="card cosmic-card-animation">
            <div class="flex items-center mb-3">
              <i class="ri-chat-new-line text-4xl text-cosmic-accent mr-2"></i>
              <h2 class="text-2xl font-semibold cosmic-glow">Start Fresh</h2>
            </div>
            <p class="text-gray-400 mb-4">Begin an epic new chat adventure.</p>
            <button @click="startNewChat" class="btn btn-primary w-full">
              <i class="ri-flashlight-line mr-2"></i> New Chat
            </button>
          </div>

          <div class="card hover:shadow-xl hover:scale-[1.02] transition-all duration-500 ease-in-out">
            <div class="flex items-center mb-4">
              <i class="ri-history-line text-2xl text-cosmic-accent mr-2"></i>
              <h2 class="text-2xl font-semibold cosmic-glow">Continue Adventure</h2>
            </div>
            <p class="text-gray-400 mb-4">Return to your existing chats.</p>
            <button @click="goToChats" class="btn btn-primary w-full">
              <i class="ri-chat-3-line mr-2"></i> View Chats
            </button>
          </div>
        </div>

        <!-- Quickstart Magic -->
        <div class="card w-full max-w-4xl bg-cosmic-dark shadow-xl p-8 cosmic-card-animation">
          <div class="mb-4 flex items-center">
            <i class="ri-flashlight-line text-3xl text-cosmic-accent mr-2 cosmic-glow"></i>
            <h2 class="text-2xl font-semibold cosmic-glow">Quick Start</h2>
          </div>
          <p class="text-gray-400 mb-6">
            Need ideas? Try one of these legendary topics:
          </p>
          <div class="grid grid-cols-2 gap-4">
            <button v-for="topic in quickPrompts"
                    :key="topic.label"
                    @click="startChatWithPrompt(topic.prompt)"
                    class="btn btn-secondary transition-all hover:shadow-xl hover:scale-105 cosmic-btn-animation">
              <i :class="topic.icon" class="mr-2"></i>{{ topic.label }}
            </button>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';
import { useChatStore } from '../store/chat';

const router = useRouter();
const chatStore = useChatStore();

// Quick Prompts for Legendary Quickstart
const quickPrompts = [
  { label: 'Cosmic Insight', prompt: 'Share a mind-blowing cosmic fact.', icon: 'ri-star-line' },
  { label: 'Fantasy Story', prompt: 'Write a short epic fantasy story.', icon: 'ri-book-open-line' },
  { label: 'Daily Magic', prompt: 'Plan a magical and productive day for me.', icon: 'ri-calendar-todo-line' },
  { label: 'Quantum Mystery', prompt: 'Explain quantum physics simply.', icon: 'ri-lightbulb-flash-line' },
];

// 🌟 Start a fresh chat adventure
async function startNewChat() {
  const chatId = await chatStore.createChat();
  router.push(`/chat/${chatId}`);
}

// 🌟 Continue previous adventures
function goToChats() {
  router.push('/chats');
}

// 🌟 Quickstart Legendary Prompts
async function startChatWithPrompt(prompt: string) {
  const chatId = await chatStore.createChat({ initialPrompt: prompt });
  router.push(`/chat/${chatId}`);
}
</script>

<style scoped>
.cosmic-glow {
  text-shadow: 0 0 15px rgba(139, 92, 246, 0.9), 0 0 30px rgba(192, 132, 252, 0.8);
}

.cosmic-card-animation {
  animation: cosmicHover 6s infinite alternate;
}

@keyframes cosmic-card-animation {
  0% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
  100% { transform: translateY(0px); }
}

.message-pop-enter-active {
  transition: all 0.3s ease;
}
.message-pop-enter-from {
  opacity: 0;
  transform: scale(0.9);
}

/* Button Cosmic Pulse */
.cosmic-pulse {
  animation: cosmicPulse 3s infinite alternate ease-in-out;
}

@keyframes cosmicPulse {
  from { box-shadow: 0 0 10px #8b5cf6; }
  to { box-shadow: 0 0 20px #c084fc, 0 0 40px #8b5cf6; }
}

/* Dot animation (loading effect) */
.dot {
  width: 8px;
  height: 8px;
  margin: 0 2px;
  background-color: #fff;
  border-radius: 50%;
  animation: typingDots 1.2s infinite;
}

.one { animation-delay: 0.1s; }
.two { animation-delay: 0.3s; }
.three { animation-delay: 0.3s; }

@keyframes typingDots {
  0%, 100% { transform: translateY(0); opacity: 0.2; }
  50% { opacity: 1; transform: translateY(-6px); }
}

@keyframes cosmicPulse {
  from { box-shadow: 0 0 10px #8b5cf6; }
  to { box-shadow: 0 0 25px #c084fc, 0 0 50px #8b5cf6; }
}

@keyframes cosmic-card-animation {
  0% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
  100% { transform: translateY(0); }
}

.cosmic-card-animation {
  animation: floatCard 6s infinite alternate ease-in-out;
}

@keyframes floatCard {
  from { transform: translateY(0px); }
  to { transform: translateY(-15px); }
}
</style>