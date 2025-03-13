// src/main.js
import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from './App.vue';
import router from './router';
import { getFirebaseServices } from '@/firebase/init';

// Import icons
import 'remixicon/fonts/remixicon.css';

// Session handling for subdomain
document.cookie = "SameSite=None; Secure";

// Enhanced error handling
const errorHandler = (err, vm, info) => {
  console.error('🚨 Application Error:', err);
  console.error('Component:', vm?.$options?.name || 'Unknown component');
  console.error('Error Info:', info);

  // In production, capture error details for monitoring
  if (process.env.NODE_ENV === 'production') {
    try {
      // Send to error monitoring service or server
      fetch('/api/log-error', { 
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          error: err.message, 
          stack: err.stack,
          component: vm?.$options?.name,
          info 
        })
      }).catch(e => console.error('Failed to report error:', e));
    } catch (e) {
      console.error('Error reporting failed:', e);
    }
  }
};

// Register global directives (simplified version)
function registerGlobalDirectives(app) {
  // v-click-outside directive
  app.directive('click-outside', {
    mounted(el, binding) {
      el._clickOutsideHandler = (event) => {
        // Check if clicking outside the element
        if (!(el === event.target || el.contains(event.target))) {
          binding.value(event);
        }
      };
      document.addEventListener('click', el._clickOutsideHandler);
    },
    unmounted(el) {
      document.removeEventListener('click', el._clickOutsideHandler);
    }
  });

  // v-focus directive
  app.directive('focus', {
    mounted(el) {
      el.focus();
    }
  });
}

// ASYNC APP INITIALIZATION WITH PROGRESSIVE ENHANCEMENT
(async () => {
  try {
    // Show loading indicator
    const appLoader = document.getElementById('app-loader');
    if (appLoader) {
      appLoader.style.display = 'flex';
    }
    
    // ⚡ PERFORMANCE OPTIMIZATION
    // Create app instance early while other async tasks complete
    const app = createApp(App);
    
    // ⚡ PARALLEL INITIALIZATION
    // Initialize Firebase and router in parallel for speed
    const [firebaseServices] = await Promise.all([
      getFirebaseServices(), // FIXED: Using proper Firebase initialization
      router.isReady()
    ]);
    
    // Configure app error handling
    app.config.errorHandler = errorHandler;
    app.config.warnHandler = (msg, vm, trace) => {
      console.warn('⚠️ Vue Warning:', msg);
      if (process.env.NODE_ENV === 'development') {
        console.warn('Component:', vm);
        console.warn('Trace:', trace);
      }
    };
    
    // Mount essential plugins
    app.use(createPinia());
    app.use(router);
    
    // Apply global directives
    registerGlobalDirectives(app);
    
    // Provide Firebase globally
    app.provide('firebase', firebaseServices);
    
    // Mount app
    app.mount('#app');
    
    // Fade out loader with smooth transition
    if (appLoader) {
      setTimeout(() => {
        appLoader.style.opacity = '0';
        appLoader.style.transition = 'opacity 0.5s ease-out';
        setTimeout(() => {
          appLoader.style.display = 'none';
        }, 500);
      }, 500); // Allow some time for app initialization
    }
    
    // Register service worker for PWA support
    if ('serviceWorker' in navigator && process.env.NODE_ENV === 'production') {
      window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
          .then(registration => {
            console.log('✅ Service Worker registered:', registration.scope);
          })
          .catch(error => {
            console.error('❌ Service Worker registration failed:', error);
          });
      });
    }
    
    // Performance metrics tracking in production
    if (process.env.NODE_ENV === 'production') {
      // Report performance metrics when idle
      window.requestIdleCallback?.(() => {
        if (window.performance && window.performance.timing) {
          // Calculate and report key metrics
          const timing = window.performance.timing;
          const loadTime = timing.loadEventEnd - timing.navigationStart;
          const interactiveTime = timing.domInteractive - timing.navigationStart;
          
          console.log(`⚡ App Ready! Time to interactive: ${interactiveTime}ms`);
          console.log(`📊 Total load time: ${loadTime}ms`);
        }
      });
    }
    
  } catch (initError) {
    console.error('🔥 CRITICAL: App initialization failed!', initError);
    
    // Show error message to user
    const appDiv = document.getElementById('app');
    if (appDiv) {
      appDiv.innerHTML = `
        <div style="padding: 20px; text-align: center; color: white;">
          <h2>Application failed to load</h2>
          <p>Please refresh the page or try again later.</p>
          <button onclick="window.location.reload()" 
                  style="background: #8B5CF6; border: none; color: white; padding: 10px 20px; margin-top: 20px; border-radius: 4px; cursor: pointer;">
            Refresh Page
          </button>
        </div>
      `;
    }
    
    // Hide loader
    const appLoader = document.getElementById('app-loader');
    if (appLoader) {
      appLoader.style.display = 'none';
    }
  }
})();