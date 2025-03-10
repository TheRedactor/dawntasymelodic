<template>
  <div 
    :class="{ 'dark': isDarkMode }" 
    class="dawntasy-app-container"
    @mousemove="handleMouseMove"
  >
    <!-- Cosmic Background -->
    <CosmicBackground 
      :intensity="backgroundIntensity" 
      :mouse-position="mousePosition"
    />

    <!-- Page Transition Portal -->
    <NavigationPortal 
      :is-active="isNavigating" 
      :transition-color="portalColor"
    />

    <!-- App Layout -->
    <div class="quantum-layout">
      <!-- App Header -->
      <AppHeader 
        v-if="authStore.isAuthenticated" 
        :user-profile="authStore.userProfile"
      />

      <!-- Sidebar -->
      <AppSidebar 
        v-if="authStore.isAuthenticated && showSidebar" 
        :active-route="currentRoute"
      />

      <!-- Main Content Transition -->
      <main class="quantum-content" :class="{ 'with-sidebar': authStore.isAuthenticated && showSidebar }">
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
    />
    
    <!-- Loading Overlay -->
    <div v-if="isLoading" class="loading-overlay">
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

// Component imports
import CosmicBackground from '@/components/CosmicBackground.vue';
import NavigationPortal from '@/components/NavigationPortal.vue';
import AppHeader from '@/components/AppHeader.vue'; // Using enhanced header
import AppSidebar from '@/components/AppSidebar.vue';
import NotificationCenter from '@/components/NotificationCenter.vue';

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
const componentKey = ref(0);
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
let mouseMoveTimeout: number;
const handleMouseMove = (event: MouseEvent) => {
  if (mouseMoveTimeout) return;
  
  mouseMoveTimeout = window.setTimeout(() => {
    mousePosition.value = { 
      x: event.clientX / window.innerWidth, 
      y: event.clientY / window.innerHeight 
    };
    mouseMoveTimeout = 0;
  }, 16); // ~60fps
};

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
    clearProps: 'all'
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
  // Don't animate on initial load
  if (!oldPath) return;
  
  isNavigating.value = true;
  
  // Change portal color based on destination
  if (router.currentRoute.value.name === 'Chat') {
    portalColor.value = '#06a6ee'; // Rift color
  } else if (router.currentRoute.value.path.includes('/settings')) {
    portalColor.value = '#ff3a70'; // Time color
  } else {
    portalColor.value = '#8B5CF6'; // Default cosmic color
  }
  
  // Reset navigation state after transition
  setTimeout(() => {
    isNavigating.value = false;
    componentKey.value++; // Force component refresh
  }, 800);
}, { immediate: false });

// Auth state watcher for special animations
watch(() => authStore.isAuthenticated, (isAuthenticated) => {
  if (isAuthenticated) {
    // Show welcome back notification on login
    addNotification({
      message: `Welcome back, ${authStore.displayName || 'Explorer'}!`,
      type: 'success'
    });
    
    // Increase background intensity briefly
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
  
  // Auto-remove after 5 seconds
  setTimeout(() => {
    removeNotification(id);
  }, 5000);
};

const removeNotification = (id: number) => {
  activeNotifications.value = activeNotifications.value.filter(
    notification => notification.id !== id
  );
};

// Lifecycle hooks
onMounted(async () => {
  // Show initial loading
  isLoading.value = true;
  
  try {
    // Initialize auth
    await authStore.initAuth();
    
    // Animate loading completion
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
    
    // Still hide after delay even on error
    setTimeout(() => {
      isLoading.value = false;
    }, 3000);
  }
});

// Provide global context
provide('darkMode', isDarkMode);
provide('addNotification', addNotification);
</script>

<style lang="scss">
/* Global styles */
@import '@/assets/css/main.css';

/* Base app container */
.dawntasy-app-container {
  @apply w-full min-h-screen overflow-hidden;
  background: linear-gradient(145deg, #0f172a, #1e1b4b, #0f172a);
  color: white;
}

/* Layout structure */
.quantum-layout {
  @apply flex flex-col min-h-screen relative;
}

/* Main content area */
.quantum-content {
  @apply flex-1 w-full p-4 md:p-6 overflow-x-hidden;
  
  &.with-sidebar {
    @apply ml-16;
  }
}

/* Page transitions */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.slide-up-enter-active,
.slide-up-leave-active {
  transition: opacity 0.3s ease, transform 0.4s ease;
}
.slide-up-enter-from {
  opacity: 0;
  transform: translateY(30px);
}
.slide-up-leave-to {
  opacity: 0;
  transform: translateY(-30px);
}

.slide-left-enter-active,
.slide-left-leave-active {
  transition: opacity 0.3s ease, transform 0.4s ease;
}
.slide-left-enter-from {
  opacity: 0;
  transform: translateX(30px);
}
.slide-left-leave-to {
  opacity: 0;
  transform: translateX(-30px);
}

.cosmic-fade-enter-active,
.cosmic-fade-leave-active {
  transition: opacity 0.5s cubic-bezier(0.4, 0, 0.2, 1);
}
.cosmic-fade-enter-from,
.cosmic-fade-leave-to {
  opacity: 0;
}

/* Portal animation */
.navigation-portal {
  @apply fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 pointer-events-none;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background: radial-gradient(circle, var(--portal-color, #8B5CF6) 0%, transparent 70%);
  opacity: 0;
  scale: 0;
  transition: all 0.8s cubic-bezier(0.16, 1, 0.3, 1);
  
  &.active {
    opacity: 1;
    scale: 20;
  }
}

/* Loading overlay */
.loading-overlay {
  @apply fixed inset-0 flex flex-col items-center justify-center z-50 bg-void-950;
  
  .loader {
    @apply relative w-20 h-20;
    
    .loader-ring {
      @apply absolute w-full h-full rounded-full border-4 border-rift-500 opacity-70;
      animation: spin 2s linear infinite;
    }
    
    .loader-core {
      @apply absolute top-1/2 left-1/2 w-10 h-10 -ml-5 -mt-5 rounded-full bg-rift-600;
      box-shadow: 0 0 20px theme('colors.rift.500');
      animation: pulse 1.5s ease-in-out infinite alternate;
    }
  }
  
  .loading-text {
    @apply mt-6 text-lg font-display text-starlight-300;
  }
}

@keyframes spin {
  to { transform: rotate(360deg); }
}

@keyframes pulse {
  from { transform: scale(0.8); opacity: 0.7; }
  to { transform: scale(1.1); opacity: 1; }
}

/* Global utility classes for transitions */
.page-transitioning {
  /* Prevents scrolling during transition */
  overflow: hidden;
}
</style>