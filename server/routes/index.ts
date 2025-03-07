import { createRouter, createWebHistory } from 'vue-router';
import { useAuthStore } from '../stores/auth'; // 🆕 Import authentication store
import Home from '../views/Home.vue';
import Login from '../views/Login.vue';
import Register from '../views/Register.vue';
import Chat from '../views/Chat.vue';
import ChatList from '../views/ChatList.vue';
import Settings from '../views/Settings.vue';
import Profile from '../views/Profile.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: { requiresAuth: true }, // Home requires authentication
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
    meta: { requiresAuth: false }, // Open to guests
  },
  {
    path: '/register',
    name: 'Register',
    component: Register,
    meta: { requiresAuth: false }, // Open to guests
  },
  {
    path: '/chat/:id',
    name: 'Chat',
    component: Chat,
    meta: { requiresAuth: true }, // Requires login
  },
  {
    path: '/chats',
    name: 'ChatList',
    component: ChatList,
    meta: { requiresAuth: true }, // Requires login
  },
  {
    path: '/settings',
    name: 'Settings',
    component: Settings,
    meta: { requiresAuth: true }, // Requires login
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile,
    meta: { requiresAuth: true }, // Requires login
  },
];

const router = createRouter({
  history: createWebHistory(), // ✅ Uses clean URL paths
  routes,
});

// 🛡️ AUTH GUARD: Prevents access to pages if not logged in
router.beforeEach(async (to, from, next) => {
  const authStore = useAuthStore();
  await authStore.initAuth(); // Ensure auth state is loaded

  if (to.meta.requiresAuth && !authStore.isAuthenticated) {
    next('/login'); // Redirect to login if not authenticated
  } else {
    next(); // Proceed normally
  }
});

export default router;