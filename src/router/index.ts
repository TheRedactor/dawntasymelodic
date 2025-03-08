// src/router/index.ts - COMPLETELY DIFFERENT APPROACH
import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';
import { useAuthStore } from '../stores/auth';

const routes: RouteRecordRaw[] = [
  { path: '/', redirect: '/home' },
  { path: '/register', component: () => import('../views/Register.vue'), meta: { requiresGuest: true } },
  { path: '/login', component: () => import('../views/Login.vue'), meta: { requiresGuest: true } },
  { path: '/home', component: () => import('../views/Home.vue'), meta: { requiresAuth: true } },
  { path: '/chat/:id?', component: () => import('../views/Chat.vue'), meta: { requiresAuth: true } },
  { path: '/chat-list', component: () => import('../views/ChatList.vue'), meta: { requiresAuth: true } },
  { path: '/settings', component: () => import('../views/Settings.vue'), meta: { requiresAuth: true } },
  { path: '/ai', component: () => import('../components/AIComponent.vue'), meta: { requiresAuth: true } },
  { path: '/:pathMatch(.*)*', redirect: '/home' },
];

// THE BIG CHANGE: Use hash history instead of HTML5 history!
const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

// Debug logging
router.beforeEach((to, from) => {
  console.log('🔍 Route Debug:', {
    to: to.fullPath,
    from: from.fullPath,
    currentUrl: window.location.href
  });
});

// Authentication logic
router.beforeEach(async (to, from, next) => {
  console.log('🚀 Navigating to:', to.path);
  const authStore = useAuthStore();
  if (!authStore.authInitialized) {
    console.log('🔍 Initializing auth...');
    await authStore.initAuth();
    console.log('✅ Auth initialized, authenticated:', authStore.isAuthenticated);
  }
  if (to.meta.requiresAuth && !authStore.isAuthenticated) {
    console.log('🚫 Redirecting to /login due to auth requirement');
    next('/login');
  } else if (to.meta.requiresGuest && authStore.isAuthenticated) {
    console.log('🚫 Redirecting to /home due to guest restriction');
    next('/home');
  } else {
    console.log('✅ Proceeding to:', to.path);
    next();
  }
});

export default router;