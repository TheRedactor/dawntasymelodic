import { createRouter, createWebHistory } from 'vue-router';
import { useAuthStore } from '../stores/auth';
import Home from '../views/Home.vue';
import Register from '../views/Register.vue';
import Chat from '../views/Chat.vue';
import ChatList from '../views/ChatList.vue';
import Settings from '../views/Settings.vue';
import Profile from '../views/Profile.vue';

const routes = [
  {
    path: '/',
    redirect: () => {
      const authStore = useAuthStore();
      return authStore.isAuthenticated ? '/home' : '/register';
    },
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
    component: () => import('../views/Login.vue'),
    meta: { guestOnly: true },
  },
  {
    path: '/home',
    component: Home,
    meta: { requiresAuth: true },
    children: [
      { path: '', name: 'Home', component: Home },
      { path: 'chats', name: 'ChatList', component: ChatList },
      { path: 'chat/:id', name: 'Chat', component: Chat },
      { path: 'settings', name: 'Settings', component: Settings },
      { path: 'profile', name: 'Profile', component: Profile },
    ],
  },
  { path: '/:pathMatch(.*)*', redirect: '/home' }, // Catch-all redirect to /home
];

const router = createRouter({
  history: createWebHistory('/app.html'), // ✅ FINAL FIX: Vue app runs inside app.html
  routes,
  scrollBehavior() {
    return { top: 0 };
  },
});

// 🔐 Auth Guard Logic
router.beforeEach(async (to, from, next) => {
  const authStore = useAuthStore();

  if (!authStore.authInitialized) {
    await authStore.initAuth();
  }

  if (to.meta.requiresAuth && !authStore.isAuthenticated) {
    return next('/register');
  }

  if (to.meta.guestOnly && authStore.isAuthenticated) {
    return next('/home');
  }

  next();
});

export default router;