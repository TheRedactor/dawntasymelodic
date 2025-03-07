import './assets/css/main.css';  // Make sure this file exists
import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from './App.vue';
import router from './router';

// Create the Vue app
const app = createApp(App);

// Set up Pinia and Router
const pinia = createPinia();
app.use(pinia);
app.use(router);

// Mount the app
app.mount('#app');