import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import { useAuthStore } from '../stores/auth';

// Use dynamic imports for all routes to improve initial load time
const Home = () => import('../views/Home.vue');
const Login = () => import('../views/Login.vue');
const Register = () => import('../views/Register.vue');
const Chat = () => import('../views/Chat.vue');
const Settings = () => import('../views/Settings.vue');
const AIComponent = () => import('../components/AIComponent.vue');

// Define routes with explicit RouteRecordRaw type
const routes: RouteRecordRaw[] = [
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
  // Catch-all route must be at the end
  {
    path: '/:pathMatch(.*)*',
    redirect: '/home',
  },
];

// Create router instance
const router = createRouter({
  history: createWebHistory(),
  routes, // TypeScript knows this is RouteRecordRaw[] now!!
});

// Auth guard - simplified and more reliable
router.beforeEach(async (to, from, next) => {
  const authStore = useAuthStore();
  
  // Initialize auth first if not done already
  if (!authStore.authInitialized) {
    await authStore.initAuth();
  }
  
  // Now check route permissions after auth is initialized
  if (to.meta.requiresAuth && !authStore.isAuthenticated) {
    next('/login');
  } else if (to.meta.requiresGuest && authStore.isAuthenticated) {
    next('/home');
  } else {
    next();
  }
});

export default router;