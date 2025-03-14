// src/main.js
import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from './App.vue';
import router from './router';

// IMPORTANT: Use this format to ensure imports aren't tree-shaken out
import * as firebaseInit from './firebase/init';

// Import styles - make sure CSS is always included
import './assets/css/main.css';

// Import icons - explicitly import to prevent tree-shaking
import 'remixicon/fonts/remixicon.css';

// Create app instance
const app = createApp(App);

// Initialize Pinia store
const pinia = createPinia();
app.use(pinia);

// Initialize router
app.use(router);

// Enhanced error handling
app.config.errorHandler = (err, vm, info) => {
  console.error('🚨 Application Error:', err);
  console.error('Component:', vm?.$options?.name || 'Unknown component');
  console.error('Error Info:', info);

  // Always show errors visibly in production too
  const errorDiv = document.createElement('div');
  errorDiv.style.cssText = 'position:fixed;top:0;left:0;right:0;background:red;color:white;padding:20px;z-index:9999;';
  errorDiv.innerHTML = `<h3>Error:</h3><pre>${err.stack || err.message || err}</pre>`;
  document.body.appendChild(errorDiv);
};

// Force-show all warnings too
app.config.warnHandler = (msg, vm, trace) => {
  console.warn('⚠️ Vue Warning:', msg);
  console.warn('Component:', vm);
  console.warn('Trace:', trace);
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

// Register directives
registerGlobalDirectives(app);

// MOUNT THE APP
try {
  // Initialize Firebase explicitly to ensure it's included
  const firebaseServices = firebaseInit.getFirebaseServices();
  console.log('✅ Firebase initialized');
  
  // Mount app with explicit error handling
  app.mount('#app');
  console.log('✅ App mounted successfully');
  
  // Fade out loader with smooth transition
  const appLoader = document.getElementById('app-loader');
  if (appLoader) {
    setTimeout(() => {
      appLoader.style.opacity = '0';
      appLoader.style.transition = 'opacity 0.5s ease-out';
      setTimeout(() => {
        appLoader.style.display = 'none';
      }, 500);
    }, 500);
  }
} catch (error) {
  console.error('🔥 CRITICAL: App initialization failed!', error);
  
  // Show error message to user
  const appDiv = document.getElementById('app');
  if (appDiv) {
    appDiv.innerHTML = `
      <div style="padding: 20px; text-align: center; color: white;">
        <h2>Application failed to load</h2>
        <p>Error: ${error.message || 'Unknown error'}</p>
        <pre style="text-align:left;background:#111;padding:10px;overflow:auto;max-height:200px">${error.stack || ''}</pre>
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