<template>
  <div 
    :class="[isDarkMode ? 'dark' : '', 'min-h-screen transition-colors duration-700 ease-in-out bg-gradient-to-br from-cosmic-dark via-indigo-900 to-purple-900 text-white overflow-hidden']"
  >
    <Header 
      v-if="authStore.isAuthenticated" 
      class="opacity-100 transition-opacity duration-700 ease-in-out"
    />
    <div class="flex-grow flex transition-transform duration-700 ease-in-out">
      <Sidebar v-if="authStore.isAuthenticated" />
      <main class="flex-grow overflow-auto w-full">
        <div v-if="isLoading" class="flex justify-center items-center h-screen">
          <div class="cosmic-loader">
            <div class="cosmic-spinner"></div>
            <p class="mt-4 text-xl text-cosmic-glow animate-pulse">Loading DawntasyAI...</p>
            <p v-if="authStore.error" class="mt-2 text-red-400 animate-fade-in">
              {{ authStore.error }} 
              <button @click="retryAuth" class="ml-2 underline hover:text-cosmic-glow">Retry</button>
            </p>
          </div>
        </div>
        <keep-alive v-else>
          <router-view v-slot="{ Component }">
            <transition name="page-slide" mode="out-in">
              <component :is="Component" :key="$route.fullPath" />
            </transition>
          </router-view>
        </keep-alive>
      </main>
    </div>
    <footer v-if="authStore.isAuthenticated" class="footer">
      Made with 💜 for the Dawntasy Universe
    </footer>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useHead } from '@vueuse/head';
import { useAuthStore } from './stores/auth';
import Header from './components/Header.vue';
import Sidebar from './components/Sidebar.vue';

const authStore = useAuthStore();
const isDarkMode = ref(true);
const isLoading = ref(true); // Managed by router/auth now

// Retry authentication
const retryAuth = () => {
  authStore.error = null;
  authStore.initAuth();
};

useHead({
  title: 'Dawntasy AI | Ultimate Legendary Chatbot Experience',
  meta: [
    { name: 'description', content: 'Legendary AI-powered chatbot built for Dawntasy fans.' },
    { property: 'og:title', content: 'Dawntasy AI – Epic Chatbot for Dawntasy Fans!' },
    { property: 'og:description', content: 'Chat with your favorite Dawntasy characters.' },
    { property: 'og:image', content: '/images/dawntasy-ai-banner.png' },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1.0' },
  ],
});
</script>

<style scoped>
@tailwind base;
@tailwind components;
@tailwind utilities;

.page-slide-enter-active, .page-slide-leave-active {
  transition: opacity 0.5s ease, transform 0.5s ease;
}
.page-slide-enter-from { opacity: 0; transform: translateY(20px); }
.page-slide-leave-to { opacity: 0; transform: translateY(-20px); }

.footer {
  text-align: center;
  padding: 1rem;
  background: rgba(0, 0, 0, 0.2);
  font-size: 0.9rem;
}

.cosmic-loader {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.cosmic-spinner {
  width: 60px;
  height: 60px;
  border: 5px solid rgba(139, 92, 246, 0.4);
  border-top-color: #8b5cf6;
  border-radius: 50%;
  animation: cosmic-spin 1.2s ease-in-out infinite, glow 2s infinite;
  box-shadow: 0 0 20px rgba(139, 92, 246, 0.8);
}

@keyframes cosmic-spin { to { transform: rotate(360deg); } }
@keyframes glow { 50% { box-shadow: 0 0 30px rgba(139, 92, 246, 1); } }
.animate-fade-in { animation: fadeIn 0.5s ease-in; }
@keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
</style>