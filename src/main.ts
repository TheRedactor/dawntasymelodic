import './assets/css/main.css';
import { createApp } from 'vue';
import { createPinia } from 'pinia';
import { createHead } from '@vueuse/head';
import App from './App.vue';
import router from './router';

// Initialize Firebase
import './firebase/index';

// Create Vue application
const app = createApp(App);
const head = createHead();
const pinia = createPinia();

// Install plugins
app.use(pinia);
app.use(router);
app.use(head);

// Mount app to #app div once router is ready
router.isReady().then(() => {
  app.mount('#app');
});

// Add global error handling
app.config.errorHandler = (err, vm, info) => {
  console.error('Vue Error:', err);
  console.error('Component:', vm);
  console.error('Info:', info);
};
// In your main.ts
import { initializeDebugTools } from './debug';
// Initialize at app startup
initializeDebugTools();