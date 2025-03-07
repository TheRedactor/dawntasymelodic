<template>
  <div v-if="authStore.authInitialized" :class="{ 'dark': isDarkMode }" class="min-h-screen flex flex-col" lang="en">
    <Header v-if="authStore.isAuthenticated" class="transition-all duration-500 ease-in-out opacity-100" />
    <div class="flex-grow flex">
      <Sidebar v-if="authStore.isAuthenticated" class="transition-transform duration-500 ease-in-out transform translate-x-0" />
      <main class="flex-grow">
        <router-view />
      </main>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, watchEffect, computed } from 'vue';
import { useMeta } from 'vue-meta';
import Header from './components/Header.vue';
import Sidebar from './components/Sidebar.vue';
import { useAuthStore } from './stores/auth';
import { useRouter } from 'vue-router';

const authStore = useAuthStore();
const router = useRouter();

// 🌟 Dynamic Meta for SEO
useMeta({
  title: 'Dawntasy AI - The Ultimate Chat Experience',
  meta: [
    { name: 'description', content: 'An AI-powered chat experience with real-time interaction and advanced OpenAI integration.' },
    { property: 'og:title', content: 'Dawntasy AI' },
    { property: 'og:description', content: 'The most advanced AI chat for Dawntasy fans!' },
    { property: 'og:image', content: '/images/dawntasy-ai-banner.png' }
  ]
});

// 🌙 Detect Dark Mode
const isDarkMode = computed(() => window.matchMedia('(prefers-color-scheme: dark)').matches);

onMounted(() => {
  authStore.initAuth();
});

watchEffect(() => {
  if (!authStore.isAuthenticated && router.currentRoute.value.meta.requiresAuth) {
    router.push('/login');
  }
});
</script>