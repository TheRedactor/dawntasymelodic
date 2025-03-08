import { createRouter, createWebHistory } from 'vue-router';
import { useAuthStore } from '../stores/auth';

import type { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  { path: '/', redirect: '/home' },
  { path: '/register', component: () => import('../views/Register.vue'), meta: { requiresGuest: true } },
  { path: '/login', component: () => import('../views/Login.vue'), meta: { requiresGuest: true } },
  { path: '/home', component: () => import('../views/Home.vue'), meta: { requiresAuth: true } },
  { path: '/chat/:id?', component: () => import('../views/Chat.vue'), meta: { requiresAuth: true } },
  { path: '/settings', component: () => import('../views/Settings.vue'), meta: { requiresAuth: true } },
  { path: '/ai', component: () => import('../components/AIComponent.vue'), meta: { requiresAuth: true } },
];

const router = createRouter({
  history: createWebHistory('/'), // Ensure the base URL is correctly set
  routes,
});

router.beforeEach(async (to, from, next) => {
  const authStore = useAuthStore();
  if (!authStore.authInitialized) await authStore.initAuth();

  if (to.meta.requiresAuth && !authStore.isAuthenticated) next('/login');
  else if (to.meta.requiresGuest && authStore.isAuthenticated) next('/home');
  else next();
});

export default router;