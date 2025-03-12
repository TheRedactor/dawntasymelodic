<template>
  <div 
    :class="{ 'dark': isDarkMode }" 
    class="dawntasy-app-container"
    @mousemove="throttledMouseMove"
    aria-live="polite"
  >
    <!-- Cosmic Background -->
    <CosmicBackground 
      :intensity="backgroundIntensity" 
      :mouse-position="mousePosition"
      aria-hidden="true"
    />

    <!-- Page Transition Portal -->
    <NavigationPortal 
      :is-active="isNavigating" 
      :transition-color="portalColor"
      aria-live="polite"
    />

    <!-- App Layout -->
    <div class="quantum-layout">
      <!-- App Header -->
      <AppHeader 
        v-if="authStore.isAuthenticated" 
        :user-profile="authStore.userProfile"
        aria-labelledby="main-navigation"
      />

      <!-- Sidebar -->
      <AppSidebar 
        v-if="authStore.isAuthenticated && showSidebar" 
        :active-route="currentRoute"
        aria-label="Application Sidebar"
      />

      <!-- Main Content Transition -->
      <main 
        class="quantum-content" 
        :class="{ 'with-sidebar': authStore.isAuthenticated && showSidebar }"
        role="main"
      >
        <router-view v-slot="{ Component, route }">
          <transition 
            :name="getTransitionName(route)" 
            mode="out-in"
            @before-enter="beforeEnter"
            @after-enter="afterEnter"
            @before-leave="beforeLeave"
          >
            <component 
              :is="Component" 
              :key="componentKey"
            />
          </transition>
        </router-view>
      </main>
    </div>

    <!-- System Notifications -->
    <NotificationCenter 
      :notifications="activeNotifications"
      @close="removeNotification"
      aria-live="assertive"
    />
    
    <!-- Loading Overlay -->
    <div v-if="isLoading" class="loading-overlay" aria-busy="true">
      <div class="loader">
        <div class="loader-ring"></div>
        <div class="loader-core"></div>
      </div>
      <p class="loading-text">{{ loadingText }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, provide, watch } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import { useAuthStore } from '@/store/auth';
import gsap from 'gsap';
import throttle from 'lodash/throttle';

// Component imports
import CosmicBackground from '@/components/CosmicBackground.vue';
import NavigationPortal from '@/components/NavigationPortal.vue';
import AppHeader from '@/components/AppHeader.vue';
import AppSidebar from '@/components/AppSidebar.vue';

// Store initialization
const authStore = useAuthStore();
const router = useRouter();
const route = useRoute();

// State
const isDarkMode = ref(true);
const isNavigating = ref(false);
const isLoading = ref(false);
const loadingText = ref('Connecting to The Rift...');
const mousePosition = ref({ x: 0, y: 0 });
const componentKey = ref(Date.now());
const backgroundIntensity = ref(0.7);
const portalColor = ref('#8B5CF6');
const activeNotifications = ref<Array<{id: number; message: string; type: string}>>([]);
const showSidebar = computed(() => {
  const publicRoutes = ['Landing', 'Login', 'Register', 'NotFound'];
  return !publicRoutes.includes(route.name as string);
});

// Computed
const currentRoute = computed(() => route.name);

// Mouse movement handler with throttling
const throttledMouseMove = throttle((event: MouseEvent) => {
  mousePosition.value = { 
    x: event.clientX / window.innerWidth, 
    y: event.clientY / window.innerHeight 
  };
}, 16);

// Custom transition based on route
const getTransitionName = (route: any) => {
  return route.meta.transition || 'fade';
};

// Transition lifecycle hooks with GSAP
const beforeEnter = (el: HTMLElement) => {
  gsap.set(el, { 
    opacity: 0,
    y: route.meta.transition === 'slide-up' ? 30 : 0,
    x: route.meta.transition === 'slide-left' ? 30 : 0
  });
};

const afterEnter = (el: HTMLElement) => {
  gsap.to(el, { 
    opacity: 1, 
    y: 0,
    x: 0,
    duration: 0.6, 
    ease: 'power3.out',
    clearProps: 'y,x'
  });
};

const beforeLeave = (el: HTMLElement) => {
  gsap.to(el, { 
    opacity: 0,
    y: route.meta.transition === 'slide-up' ? -30 : 0,
    x: route.meta.transition === 'slide-left' ? -30 : 0,
    duration: 0.4,
    ease: 'power2.in'
  });
};

// Route change handler
watch(() => router.currentRoute.value.fullPath, (newPath, oldPath) => {
  if (!oldPath) return;
  
  isNavigating.value = true;
  
  if (router.currentRoute.value.name === 'Chat') {
    portalColor.value = '#06a6ee';
  } else if (router.currentRoute.value.path.includes('/settings')) {
    portalColor.value = '#ff3a70';
  } else {
    portalColor.value = '#8B5CF6';
  }
  
  setTimeout(() => {
    isNavigating.value = false;
    componentKey.value = Date.now();
  }, 800);
});

// Auth state watcher with error handling
watch(() => authStore.isAuthenticated, (isAuthenticated) => {
  if (isAuthenticated) {
    addNotification({
      message: `Welcome back, ${authStore.displayName || 'Explorer'}!`,
      type: 'success'
    });
    
    gsap.to(backgroundIntensity, {
      value: 1,
      duration: 2,
      ease: 'power2.out',
      onComplete: () => {
        gsap.to(backgroundIntensity, {
          value: 0.7,
          duration: 3,
          ease: 'power2.in'
        });
      }
    });
  }
});

// Notification methods
let notificationId = 0;
const addNotification = ({ message, type = 'info' }: { message: string, type?: string }) => {
  const id = notificationId++;
  activeNotifications.value.push({ id, message, type });
  
  setTimeout(() => {
    removeNotification(id);
  }, 5000);
};

const removeNotification = (id: number) => {
  activeNotifications.value = activeNotifications.value.filter(
    notification => notification.id !== id
  );
};

// Lifecycle hooks with error handling
onMounted(async () => {
  isLoading.value = true;
  
  try {
    await authStore.initAuth();
    
    gsap.to('.loader-core', {
      scale: 1.5,
      opacity: 0,
      duration: 0.8,
      ease: 'power2.in'
    });
    
    gsap.to('.loader-ring', {
      scale: 2,
      opacity: 0,
      duration: 1,
      ease: 'power3.in',
      onComplete: () => {
        isLoading.value = false;
      }
    });
  } catch (error) {
    console.error('Initialization error:', error);
    loadingText.value = 'Connection failed. Please refresh.';
    
    setTimeout(() => {
      isLoading.value = false;
    }, 3000);
    
    addNotification({
      message: 'Initialization failed. Check console for details.',
      type: 'error'
    });
  }
});

// Provide global context
provide('darkMode', isDarkMode);
provide('addNotification', addNotification);
</script>

<style lang="scss">
/* ... (keep existing styles) ... */

/* Accessibility additions */
[aria-live="polite"] {
  transition: opacity 0.3s ease;
}

[aria-busy="true"] {
  cursor: wait;
}
</style>