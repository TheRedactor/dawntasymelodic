import { createRouter, createWebHistory } from 'vue-router';
import { useAuthStore } from '../stores/auth';

// Import all components with proper paths
import Home from '../views/Home.vue';
import Register from '../views/Register.vue';
import Login from '../views/Login.vue';
import Chat from '../views/Chat.vue';
import Settings from '../views/Settings.vue';
import AIComponent from '../components/AIComponent.vue';

const routes = [
  {
    path: '/',
    redirect: '/home',
  },
  {
    path: '/register',
    name: 'Register',
    component: Register,
    meta: { requiresGuest: true },
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
    meta: { requiresGuest: true },
  },
  {
    path: '/home',
    name: 'Home',
    component: Home,
    meta: { requiresAuth: true },
  },
  {
    path: '/chat/:id?',
    name: 'Chat',
    component: Chat,
    meta: { requiresAuth: true },
  },
  {
    path: '/settings',
    name: 'Settings',
    component: Settings,
    meta: { requiresAuth: true },
  },
  {
    path: '/ai',
    name: 'AIComponent',
    component: AIComponent,
    meta: { requiresAuth: true },
  },
  { 
    path: '/:pathMatch(.*)*', 
    redirect: '/' 
  }
];

const router = createRouter({
  // Fix the history to handle paths with or without the app.html prefix
  history: createWebHistory('/'),
  routes,
});

// Auth Guard Logic
router.beforeEach(async (to, from, next) => {
  const authStore = useAuthStore();
  
  // Wait for auth initialization if not done yet
  if (!authStore.authInitialized) {
    try {
      await authStore.initAuth();
    } catch (error) {
      console.error('Auth initialization failed:', error);
    }
  }
  
  // Handle auth routes
  if (to.meta.requiresAuth && !authStore.isAuthenticated) {
    return next('/login');
  }
  
  if (to.meta.requiresGuest && authStore.isAuthenticated) {
    return next('/home');
  }
  
  next();
});

export default router;