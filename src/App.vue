<template>
  <div :class="[isDarkMode ? 'dark' : '', 'min-h-screen transition-colors duration-700 ease-in-out bg-gradient-to-br from-cosmic-dark via-indigo-900 to-purple-900 text-white overflow-hidden']">
    <Header v-if="authStore.isAuthenticated" class="opacity-100 transition-opacity duration-700 ease-in-out"/>
    <div class="flex-grow flex transition-transform duration-700 ease-in-out">
      <Sidebar v-if="authStore.isAuthenticated" />
      <main class="flex-grow overflow-auto">
        <router-view v-slot="{ Component }">
          <transition name="page-slide" mode="out-in">
            <component :is="Component" :key="$route.fullPath" />
          </router-view>
        </main>
    </div>
  </div>
  <footer v-if="authStore.isAuthenticated" class="footer">
    Made with 💜 for the Dawntasy Universe
  </footer>
<script setup>
import { computed, watchEffect } from 'vue';
import { useHead } from '@vueuse/head';
import { useAuthStore } from './stores/auth';
import { useRouter } from 'vue-router';
import Header from './components/Header.vue';
import Sidebar from './components/Sidebar.vue';

const authStore = useAuthStore();
const router = useRouter();

// 🧙‍♂️ Dynamic Dark Mode Detection
const isDarkMode = computed(() => window.matchMedia('(prefers-color-scheme: dark)').matches);

// ⚙️ Watch Authentication Status
watchEffect(() => {
  if (!authStore.isAuthenticated) {
    router.push('/login');
  }
});

// 🔍 Ultimate SEO Meta Tags with VueUse
useHead({
  title: 'Dawntasy AI | Ultimate Legendary Chatbot Experience',
  meta: [
    { name: 'description', content: 'Legendary AI-powered chatbot built for Dawntasy fans. Engage, chat, and explore your Dawntasy stories!' },
    { property: 'og:title', content: 'Dawntasy AI – Epic Chatbot for Dawntasy Fans!' },
    { property: 'og:description', content: 'Chat with your favorite Dawntasy universe characters through advanced AI.' },
    { property: 'og:image', content: '/images/dawntasy-ai-banner.png' },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1.0' },
});

// 📌 Stores and Router
import { useAuthStore } from './stores/auth';
import { useRouter } from 'vue-router';

const authStore = useAuthStore();
const router = useRouter();
</script>