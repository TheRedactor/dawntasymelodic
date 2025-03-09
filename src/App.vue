<template>
  <div 
    :class="{ 'dark': isDarkMode }" 
    class="dawntasy-app-container"
    @mousemove="handleMouseMove"
  >
    <!-- 🌌 COSMIC BACKGROUND LAYERS -->
    <CosmicBackground 
      :intensity="backgroundIntensity" 
      :mouse-position="mousePosition"
    />

    <!-- 🚀 QUANTUM NAVIGATION WARP -->
    <NavigationPortal 
      :is-active="isNavigating" 
      :transition-color="portalColor"
    />

    <!-- 🔮 INTELLIGENT APP LAYOUT -->
    <div class="quantum-layout">
      <!-- 🛡️ Contextual Header -->
      <AppHeader 
        v-if="authStore.isAuthenticated" 
        :user-profile="authStore.userProfile"
        @toggle-command-palette="toggleCommandPalette"
      />

      <!-- 🌠 Adaptive Sidebar -->
      <AppSidebar 
        v-if="authStore.isAuthenticated" 
        :active-route="currentRoute"
      />

      <!-- 💫 MYTHIC CONTENT TRANSITION -->
      <main class="quantum-content">
        <router-view v-slot="{ Component }">
          <transition 
            name="quantum-portal" 
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

      <!-- 🧠 UNIVERSAL COMMAND PALETTE -->
      <CommandPalette 
        v-if="isCommandPaletteOpen" 
        @close="closeCommandPalette"
      />

      <!-- 🌈 PERFORMANCE & TELEMETRY OVERLAY -->
      <PerformanceMonitor 
        v-if="isDeveloperMode"
        :metrics="performanceMetrics"
      />
    </div>

    <!-- 🔥 SYSTEM NOTIFICATIONS -->
    <NotificationCenter 
      :notifications="activeNotifications"
    />
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, provide } from 'vue';
import { useRouter } from 'vue-router';
import { useAuthStore } from '@/store/auth';
import { usePerformanceStore } from '@/store/performance';
import gsap from 'gsap';

// 🚀 COSMIC COMPONENT IMPORTS
import CosmicBackground from '@/components/CosmicBackground.vue';
import NavigationPortal from '@/components/NavigationPortal.vue';
import AppHeader from '@/components/AppHeader.vue';
import AppSidebar from '@/components/AppSidebar.vue';
import CommandPalette from '@/components/CommandPalette.vue';
import PerformanceMonitor from '@/components/PerformanceMonitor.vue';
import NotificationCenter from '@/components/NotificationCenter.vue';

// 🌌 QUANTUM STATE MANAGEMENT
const authStore = useAuthStore();
const performanceStore = usePerformanceStore();
const router = useRouter();

// 🔮 REACTIVE STATE VARIABLES
const isDarkMode = ref(true);
const isNavigating = ref(false);
const isCommandPaletteOpen = ref(false);
const isDeveloperMode = ref(false);
const mousePosition = ref({ x: 0, y: 0 });
const componentKey = ref(0);
const backgroundIntensity = ref(0.7);
const portalColor = ref('#8B5CF6');

// 🌠 COMPUTED PROPERTIES
const currentRoute = computed(() => router.currentRoute.value.name);
const performanceMetrics = computed(() => performanceStore.getMetrics());
const activeNotifications = computed(() => authStore.getNotifications());

// 💫 MOUSE MOVEMENT HANDLER
const handleMouseMove = (event: MouseEvent) => {
  mousePosition.value = { 
    x: event.clientX, 
    y: event.clientY 
  };
};

// 🚀 LIFECYCLE & INITIALIZATION
onMounted(async () => {
  await authStore.initAuth();
  setupKeyboardShortcuts();
  initPerformanceTracking();
});

// 🔧 ADVANCED INITIALIZATION METHODS
const setupKeyboardShortcuts = () => {
  window.addEventListener('keydown', (e) => {
    // Ctrl + / : Toggle Dark Mode
    if (e.ctrlKey && e.key === '/') {
      isDarkMode.value = !isDarkMode.value;
    }
    
    // Ctrl + K : Toggle Command Palette
    if (e.ctrlKey && e.key === 'k') {
      toggleCommandPalette();
    }
    
    // Ctrl + Shift + D : Toggle Developer Mode
    if (e.ctrlKey && e.shiftKey && e.key === 'D') {
      isDeveloperMode.value = !isDeveloperMode.value;
    }
  });
};

const initPerformanceTracking = () => {
  performanceStore.startTracking();
};

// 🌈 TRANSITION LIFECYCLE HOOKS
const beforeEnter = (el: HTMLElement) => {
  gsap.set(el, { opacity: 0, y: 30 });
};

const afterEnter = (el: HTMLElement) => {
  gsap.to(el, { 
    opacity: 1, 
    y: 0, 
    duration: 0.6, 
    ease: 'power3.out' 
  });
};

const beforeLeave = (el: HTMLElement) => {
  gsap.to(el, { 
    opacity: 0, 
    y: 30, 
    duration: 0.4 
  });
};

// 🔮 COMMAND PALETTE METHODS
const toggleCommandPalette = () => {
  isCommandPaletteOpen.value = !isCommandPaletteOpen.value;
};

const closeCommandPalette = () => {
  isCommandPaletteOpen.value = false;
};

// 🌠 PROVIDE GLOBAL CONTEXT
provide('darkMode', isDarkMode);
provide('developerMode', isDeveloperMode);
</script>

<style lang="scss">
/* 🌌 LEGENDARY QUANTUM STYLES */
.dawntasy-app-container {
  width: 100%;
  min-height: 100vh;
  background: linear-gradient(135deg, #0f172a, #1e1b4b);
  color: white;
  transition: all 0.5s ease-in-out;
  position: relative;
  overflow: hidden;
}

/* 🚀 Dynamic Header */
.quantum-layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

/* ✨ Main Content */
.quantum-content {
  flex: 1;
  width: 100%;
  padding: 2rem;
  display: flex;
  flex-direction: column;
}

/* 🔥 Transition Animations */
.quantum-portal-enter-active,
.quantum-portal-leave-active {
  transition: opacity 0.6s ease, transform 0.5s ease;
}

.quantum-portal-enter-from,
.quantum-portal-leave-to {
  opacity: 0;
  transform: translateY(30px);
}

/* ⚡ Hover Effects */
button, a {
  transition: all 0.3s ease-in-out;
}

button:hover, a:hover {
  transform: scale(1.05);
  filter: brightness(1.2);
}

/* 🌟 NAVIGATION PORTAL EFFECT */
.quantum-portal {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) scale(0);
  width: 100px;
  height: 100px;
  background: radial-gradient(circle, rgba(97, 61, 244, 0.9) 0%, rgba(97, 61, 244, 0.2) 50%, transparent 70%);
  border-radius: 50%;
  z-index: 100;
  opacity: 0;
  transition: transform 0.8s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.8s ease;
}

.quantum-portal.active {
  transform: translate(-50%, -50%) scale(15);
  opacity: 1;
}
</style>
