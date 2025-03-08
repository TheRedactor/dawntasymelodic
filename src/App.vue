<template>
  <div :class="{ 'dark': isDarkMode }" class="app-container">
    <!-- Background starfield component -->
    <CosmicBackground />
    
    <!-- Main app layout -->
    <div class="main-layout">
      <!-- Header only shown when authenticated -->
      <AppHeader v-if="authStore.isAuthenticated" />
      
      <!-- Main content area with router view -->
      <main class="main-content">
        <router-view v-slot="{ Component }">
          <transition name="cosmic-fade" mode="out-in">
            <component :is="Component" />
          </transition>
        </router-view>
      </main>
      
      <!-- Portal animations for transitions -->
      <div class="cosmic-portal" :class="{ 'active': isNavigating }"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { useAuthStore } from './store/auth';
import CosmicBackground from './components/CosmicBackground.vue';
import AppHeader from './components/AppHeader.vue';

// Store references
const authStore = useAuthStore();
const router = useRouter();

// State
const isDarkMode = ref(true);
const isNavigating = ref(false);

// Initialize authentication
onMounted(async () => {
  await authStore.initAuth();
});

// Watch for route changes to trigger animations
watch(
  () => router.currentRoute.value,
  () => {
    isNavigating.value = true;
    setTimeout(() => {
      isNavigating.value = false;
    }, 800);
  }
);

// Add keyboard shortcuts
onMounted(() => {
  window.addEventListener('keydown', (e) => {
    // Ctrl+/ to toggle dark mode
    if (e.ctrlKey && e.key === '/') {
      isDarkMode.value = !isDarkMode.value;
    }
  });
});
</script>

<style lang="scss">
.app-container {
  width: 100%;
  min-height: 100vh;
  background-color: theme('colors.void.900');
  color: theme('colors.starlight.100');
  transition: all 0.5s ease-in-out;
  overflow-x: hidden;
  position: relative;
  
  &.dark {
    background-color: theme('colors.void.900');
    color: theme('colors.starlight.100');
  }
}

.main-layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  max-width: 100vw;
  z-index: 10;
  position: relative;
}

.main-content {
  flex: 1;
  width: 100%;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  z-index: 10;
  
  @media (min-width: 768px) {
    padding: 2rem;
  }
}

// Transition animations
.cosmic-fade-enter-active,
.cosmic-fade-leave-active {
  transition: opacity 0.5s ease, transform 0.5s ease;
}

.cosmic-fade-enter-from,
.cosmic-fade-leave-to {
  opacity: 0;
  transform: translateY(20px);
}

// Portal animation for route changes
.cosmic-portal {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) scale(0);
  width: 100px;
  height: 100px;
  background: radial-gradient(
    circle,
    rgba(97, 61, 244, 0.9) 0%,
    rgba(97, 61, 244, 0.2) 50%,
    transparent 70%
  );
  border-radius: 50%;
  z-index: 100;
  pointer-events: none;
  opacity: 0;
  transition: transform 0.8s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.8s ease;
  
  &.active {
    transform: translate(-50%, -50%) scale(15);
    opacity: 1;
  }
}
</style>