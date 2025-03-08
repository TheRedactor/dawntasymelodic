import './assets/css/main.css';
import { createApp } from 'vue';
import { createPinia } from 'pinia';
import { createHead } from '@vueuse/head';
import App from './App.vue';
import router from './router';

// Initialize Firebase (assuming you've set up firebase/index.ts correctly)
import './firebase';

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