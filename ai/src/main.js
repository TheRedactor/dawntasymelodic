// src/main.js
import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from './App.vue';
import router from './router';
import { getFirebaseServices } from '@/firebase/init';

// Import styles
import '@/assets/css/main.css';

// Import icons
import 'remixicon/fonts/remixicon.css';

// Session handling for subdomain
document.cookie = "SameSite=None; Secure";

// Enhanced error handling
const errorHandler = (err, vm, info) => {
  console.error('🚨 Application Error:', err);
  console.error('Component:', vm?.$options?.name || 'Unknown component');
  console.error('Error Info:', info);

  // In production, log errors to console but don't break the app
  if (process.env.NODE_ENV === 'production') {
    try {
      // You could send to error monitoring service here
      console.error('Error details:', { 
        error: err.message, 
        stack: err.stack,
        component: vm?.$options?.name,
        info 
      });
    } catch (e) {
      console.error('Error reporting failed:', e);
    }
  }
};

// Register global directives
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
    
    // Create app instance early while other async tasks complete
    const app = createApp(App);
    
    // Initialize Firebase and router with error handling
    try {
      // Initialize both in parallel but handle errors individually
      const firebasePromise = getFirebaseServices();
      const routerPromise = router.isReady();
      
      // Await Firebase initialization
      const [firebaseServices] = await Promise.all([
        firebasePromise,
        routerPromise
      ]);
      
      // Log success
      console.log('✅ Services initialized successfully');
    } catch (initError) {
      console.error('Service initialization error (continuing anyway):', initError);
      // Continue app mounting even if services fail
    }
    
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
    const pinia = createPinia();
    app.use(pinia);
    app.use(router);
    
    // Apply global directives
    registerGlobalDirectives(app);
    
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
    
    // Performance metrics tracking in production
    if (process.env.NODE_ENV === 'production' && window.requestIdleCallback) {
      window.requestIdleCallback(() => {
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
    
  } catch (criticalError) {
    console.error('🔥 CRITICAL: App initialization failed!', criticalError);
    
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