<template>
  <div 
    :class="[isDarkMode ? 'dark' : '', 'min-h-screen transition-colors duration-700 ease-in-out bg-gradient-to-br from-cosmic-dark via-indigo-900 to-purple-900 text-white overflow-hidden']"
  >
    <!-- Only show header when authenticated -->
    <Header 
      v-if="authStore.isAuthenticated" 
      class="opacity-100 transition-opacity duration-700 ease-in-out"
    />
    
    <!-- Main Layout -->
    <div class="flex-grow flex transition-transform duration-700 ease-in-out">
      <Sidebar v-if="authStore.isAuthenticated" />
      <main class="flex-grow overflow-auto w-full">
        <div v-if="isLoading" class="flex justify-center items-center h-screen">
          <div class="cosmic-loader">
            <div class="cosmic-spinner"></div>
            <p class="mt-4 text-xl text-cosmic-glow">Loading DawntasyAI...</p>
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
  </div>

  <!-- Footer -->
  <footer v-if="authStore.isAuthenticated" class="footer">
    Made with 💜 for the Dawntasy Universe
  </footer>
</template>

<script setup>
import { ref, onMounted, watchEffect } from 'vue';
import { useHead } from '@vueuse/head';
import { useAuthStore } from './stores/auth';
import { useRouter } from 'vue-router';
import Header from './components/Header.vue';
import Sidebar from './components/Sidebar.vue';

const authStore = useAuthStore();
const router = useRouter();
const isDarkMode = ref(true); // Default to dark mode for cosmic theme
const isLoading = ref(true);

// Dark Mode Detection
onMounted(() => {
  isDarkMode.value = true; // Always use dark mode for cosmic theme
  
  // Initialize auth and handle loading state
  authStore.initAuth().finally(() => {
    isLoading.value = false;
  });
});

// SEO Meta Tags with VueUse
useHead({
  title: 'Dawntasy AI | Ultimate Legendary Chatbot Experience',
  meta: [
    { name: 'description', content: 'Legendary AI-powered chatbot built for Dawntasy fans. Engage, chat, and explore your Dawntasy stories!' },
    { property: 'og:title', content: 'Dawntasy AI – Epic Chatbot for Dawntasy Fans!' },
    { property: 'og:description', content: 'Chat with your favorite Dawntasy universe characters through advanced AI.' },
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

/* Page Transition Animations */
.page-slide-enter-active, .page-slide-leave-active {
  transition: opacity 0.5s ease, transform 0.5s ease;
}
.page-slide-enter-from {
  opacity: 0;
  transform: translateY(20px);
}
.page-slide-leave-to {
  opacity: 0;
  transform: translateY(-20px);
}

/* Footer Styling */
.footer {
  text-align: center;
  padding: 1rem;
  background: rgba(0, 0, 0, 0.2);
  font-size: 0.9rem;
}

/* Cosmic Loader */
.cosmic-loader {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.cosmic-spinner {
  width: 50px;
  height: 50px;
  border: 4px solid rgba(139, 92, 246, 0.3);
  border-radius: 50%;
  border-top-color: #8b5cf6;
  animation: cosmic-spin 1s ease-in-out infinite;
  box-shadow: 0 0 15px rgba(139, 92, 246, 0.7);
}

@keyframes cosmic-spin {
  to { transform: rotate(360deg); }
}

.cosmic-spinner::before {
  content: '';
  position: absolute;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  border: 2px solid rgba(192, 132, 252, 0.5);
  animation: cosmic-pulse 2s ease-in-out infinite;
}

@keyframes cosmic-pulse {
  0% { transform: scale(0.8); opacity: 0.3; }
  50% { transform: scale(1.2); opacity: 0.7; }
  100% { transform: scale(0.8); opacity: 0.3; }
}
</style>