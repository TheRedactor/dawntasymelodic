import { createRouter, createWebHistory } from 'vue-router';
import { useAuthStore } from '../stores/auth';
import Home from '../views/Home.vue';
import Login from '../views/Login.vue';
import Register from '../views/Register.vue';
import Chat from '../views/Chat.vue';
import ChatList from '../views/ChatList.vue';
import Settings from '../views/Settings.vue';
import Profile from '../views/Profile.vue';
import Header from '../components/Header.vue';
import Sidebar from '../components/Sidebar.vue';

const routes = [
  {
    path: '/',
    redirect: '/register' // Default to register; smart redirect handled in guard
  },
  {
    path: '/register',
    name: 'Register',
    component: Register,
    meta: { requiresAuth: false }
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
    meta: { requiresAuth: false }
  },
  {
    path: '/home',
    name: 'Home',
    components: { default: Home, header: Header, sidebar: Sidebar },
    meta: { requiresAuth: true }
  },
  {
    path: '/chats',
    name: 'ChatList',
    component: ChatList,
    meta: { requiresAuth: true }
  },
  {
    path: '/chat/:id',
    name: 'Chat',
    components: { default: Chat, header: Header, sidebar: Sidebar },
    meta: { requiresAuth: true }
  },
  {
    path: '/settings',
    name: 'Settings',
    components: { default: Settings, header: Header, sidebar: Sidebar },
    meta: { requiresAuth: true }
  },
  {
    path: '/profile',
    name: 'Profile',
    components: { default: Profile, header: Header, sidebar: Sidebar },
    meta: { requiresAuth: true }
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

// 🔒 **AUTH GUARD** (Handles authentication & redirects)
router.beforeEach(async (to, from, next) => {
  const authStore = useAuthStore();
  
  // **Ensure authentication state is loaded before proceeding**
  if (!authStore.authInitialized) {
    console.log('⏳ Waiting for authentication state to initialize...');
    await authStore.initAuth();
  }

  if (to.meta.requiresAuth && !authStore.isAuthenticated) {
    console.warn(`🚨 Unauthorized access to ${to.path}. Redirecting to /login.`);
    return next('/login'); // Redirect to login instead of register for better UX
  }

  next(); // 🚀 Proceed as normal
});

export default router;