import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import { createPinia } from 'pinia';
import { initializeFirebase } from '@/firebase/init';
import { setupGlobalComponents } from '@/utils/global-components';
import { registerGlobalDirectives } from '@/utils/global-directives';

// 🔥 Global Error Handling
const errorHandler = (err, vm, info) => {
  console.error('🚨 Global Error:', err);
  console.error('🔍 Component:', vm);
  console.error('📌 Error Info:', info);

  // Optional: Log to an external monitoring service
  if (process.env.NODE_ENV === 'production') {
    fetch('/log-error', { 
      method: 'POST',
      body: JSON.stringify({ error: err.message, component: info })
    });
  }

  alert("An unexpected error occurred. Please refresh or contact support.");
};

// 🚀 **ASYNC APP INITIALIZATION SEQUENCE**
(async () => {
  try {
    // ✅ Initialize Firebase FIRST
    const firebaseApp = await initializeFirebase();

    // ✅ Create Vue App
    const app = createApp(App);

    // ✅ Global Registrations
    setupGlobalComponents(app);
    registerGlobalDirectives(app);

    // ✅ Inject Plugins
    app.config.errorHandler = errorHandler;
    app.use(router);
    app.use(createPinia());

    // ✅ Provide Firebase globally
    app.provide('firebase', firebaseApp);

    // ✅ Wait for Router & Mount App
    await router.isReady();
    app.mount('#app');

    // 🆕 **Smooth Loader Removal**
    setTimeout(() => {
      const loader = document.getElementById('app-loader');
      if (loader) {
        loader.style.opacity = '0';
        setTimeout(() => loader.remove(), 500);
      }
    }, 1500);

  } catch (initError) {
    console.error('🚨 App Initialization Failed:', initError);
    alert('Error loading the app. Please try again.');
  }
})();
