<template>
  <div 
    :class="{ 'dark': isDarkMode }" 
    class="dawntasy-app"
  >
    <!-- App Header for mobile only (similar to Claude's minimalist header) -->
    <AppHeader v-if="isMobileView" />
    
    <!-- Sidebar with chat navigation (similar to Claude's sidebar) -->
    <AppSidebar v-if="isAuthenticated && !isPublicRoute" />
    
    <!-- Main Content Area -->
    <main 
      class="main-content" 
      :class="{ 
        'with-sidebar': isAuthenticated && !isPublicRoute && !isMobileView,
        'public-route': isPublicRoute
      }"
    >
      <!-- Page transition for smooth navigation -->
      <transition name="page-fade" mode="out-in">
        <router-view />
      </transition>
    </main>
    
    <!-- Mobile Navigation Menu Toggle Button -->
    <button 
      v-if="isAuthenticated && !isPublicRoute && isMobileView"
      @click="toggleMobileMenu"
      class="mobile-menu-toggle"
    >
      <i class="ri-menu-line"></i>
    </button>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, watch } from 'vue';
import { useRoute } from 'vue-router';
import { useAuthStore } from './store/auth';
import { useThemeStore } from './store/theme';
import AppHeader from './components/AppHeader.vue';
import AppSidebar from './components/AppSidebar.vue';

// Store references
const authStore = useAuthStore();
const themeStore = useThemeStore();
const route = useRoute();

// State
const isMobileView = ref(window.innerWidth < 768);
const showMobileMenu = ref(false);

// Computed properties
const isAuthenticated = computed(() => authStore.isAuthenticated);
const isDarkMode = computed(() => {
  const currentTheme = themeStore.currentTheme;
  return currentTheme === 'dark' || currentTheme === 'cosmic';
});

const isPublicRoute = computed(() => {
  const publicRoutes = ['landing', 'login', 'register', 'notFound', 'test'];
  return publicRoutes.includes(route.name);
});

// Methods
function toggleMobileMenu() {
  showMobileMenu.value = !showMobileMenu.value;
  
  // Trigger sidebar expansion/collapse through localStorage
  localStorage.setItem('sidebar-expanded', showMobileMenu.value);
  
  // Force a reload of the sidebar by triggering a custom event
  window.dispatchEvent(new CustomEvent('toggle-sidebar'));
}

function handleResize() {
  isMobileView.value = window.innerWidth < 768;
  
  // Close mobile menu when resizing to desktop
  if (!isMobileView.value) {
    showMobileMenu.value = false;
  }
}

// Lifecycle hooks
onMounted(() => {
  // Initialize auth state
  authStore.initAuth();
  
  // Initialize theme
  themeStore.initTheme();
  
  // Add resize listener
  window.addEventListener('resize', handleResize);
});

// Watch for route changes to close mobile menu
watch(() => route.path, () => {
  showMobileMenu.value = false;
});
</script>

<style>
/* Import base styles and fonts */
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Orbitron:wght@400;500;600;700&display=swap');
@import url('https://cdn.jsdelivr.net/npm/remixicon@2.5.0/fonts/remixicon.css');

/* Base styles */
:root {
  /* Base colors */
  --color-primary: #8b5cf6;
  --color-primary-light: #a78bfa;
  --color-primary-dark: #6d28d9;
  --color-secondary: #4cc9f0;
  --color-accent: #ff3a70;
  
  /* Background colors */
  --bg-default: #f3f4f6;
  --bg-card: #ffffff;
  --bg-dark: #0f172a;
  --bg-dark-lighter: #1e293b;
  
  /* Text colors */
  --text-primary: #111827;
  --text-secondary: #4b5563;
  --text-light: #9ca3af;
  --text-white: #ffffff;
  
  /* Other variables */
  --shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.05);
  --shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  --shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
  --shadow-cosmic: 0 0 15px rgba(139, 92, 246, 0.4);
  
  /* Border radius */
  --radius-sm: 0.25rem;
  --radius-md: 0.5rem;
  --radius-lg: 1rem;
  
  /* Transitions */
  --transition-fast: 0.2s ease;
  --transition-normal: 0.3s ease;
  --transition-slow: 0.5s ease;
}

/* Dark mode variables */
.dark {
  --bg-default: #0f172a;
  --bg-card: #1e293b;
  --text-primary: #f3f4f6;
  --text-secondary: #d1d5db;
  --text-light: #6b7280;
}

/* Reset styles */
*, *::before, *::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html, body {
  height: 100%;
  width: 100%;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
  font-size: 16px;
  line-height: 1.5;
  color: var(--text-primary);
  background-color: var(--bg-default);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.dawntasy-app {
  min-height: 100vh;
  position: relative;
}

/* Main content area */
.main-content {
  min-height: 100vh;
}

.main-content.with-sidebar {
  margin-left: 260px; /* Match sidebar width */
}

.main-content.public-route {
  margin-left: 0;
}

/* Mobile menu toggle button */
.mobile-menu-toggle {
  position: fixed;
  bottom: 1.5rem;
  right: 1.5rem;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: var(--color-primary);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  border: none;
  box-shadow: var(--shadow-lg);
  cursor: pointer;
  z-index: 40;
  transition: transform var(--transition-fast), background-color var(--transition-fast);
}

.mobile-menu-toggle:hover {
  transform: scale(1.05);
  background: var(--color-primary-dark);
}

/* Page transitions */
.page-fade-enter-active,
.page-fade-leave-active {
  transition: opacity 0.3s ease;
}

.page-fade-enter-from,
.page-fade-leave-to {
  opacity: 0;
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .main-content.with-sidebar {
    margin-left: 0;
  }
}
</style>