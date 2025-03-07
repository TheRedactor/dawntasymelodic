import { createRouter, createWebHistory } from 'vue-router';
import { useAuthStore } from '../stores/auth';
import Home from '../views/Home.vue';
import Login from '../views/Login.vue';
import Register from '../views/Register.vue';
import Chat from '../views/Chat.vue';
import ChatList from '../views/ChatList.vue';
import Settings from '../views/Settings.vue';
import Profile from '../views/Profile.vue';
import Layout from '../components/Layout.vue';

const routes = [
  {
    path: '/',
    redirect: () => {
      const authStore = useAuthStore();
      return authStore.isAuthenticated ? '/home' : '/register';
    }
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
    component: Layout,
    children: [
      { path: '', component: Home },
      { path: 'chats', component: ChatList },
      { path: 'chat/:id', component: Chat },
      { path: 'settings', component: Settings },
      { path: 'profile', component: Profile }
    ],
    meta: { requiresAuth: true }
  }
];

const router = createRouter({
  history: createWebHistory('/app.html'), // ✅ Fixes the index.html redirect issue
  routes
});

// 🚀 Navigation Guard with Debugging
router.beforeEach((to, from, next) => {
  console.log(`🚦 Navigating from ${from.path} to ${to.path}`);

  const authStore = useAuthStore();
  
  if (!authStore.authInitialized) {
    console.log('⏳ Waiting for authentication state to initialize...');
    authStore.initAuth().then(() => {
      checkAuthGuard(to, next);
    });
  } else {
    checkAuthGuard(to, next);
  }
});

function checkAuthGuard(to, next) {
  const authStore = useAuthStore();

  if (to.meta.requiresAuth && !authStore.isAuthenticated) {
    console.warn(`🚨 Unauthorized access to ${to.path}. Redirecting to /login.`);
    return next('/login');
  }
  
  console.log(`✅ Access granted to ${to.path}`);
  next();
}

export default router;