import { createRouter, createWebHistory } from 'vue-router';
import { useAuthStore } from '../stores/auth'; // 🆕 Import authentication store
import Home from '../views/Home.vue';
import Login from '../views/Login.vue';
import Register from '../views/Register.vue';
import Chat from '../views/Chat.vue';
import Settings from '../views/Settings.vue';
import AIComponent from '../views/AIComponent.vue'; // ✅ Added AIComponent
import Header from '../components/Header.vue'; // ✅ Added Header
import Sidebar from '../components/Sidebar.vue'; // ✅ Added Sidebar

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
    path: '/settings',
    name: 'Settings',
    component: Settings,
    meta: { requiresAuth: true }, // Requires login
  },
  {
    path: '/ai',
    name: 'AIComponent',
    component: AIComponent,
    meta: { requiresAuth: true }, // Requires login
  },
  {
    path: '/:pathMatch(.*)*', // 🚨 Catch-all for unknown routes (404)
    redirect: '/',
  },
];

const router = createRouter({
  history: createWebHistory(), // ✅ Uses clean URL paths
  routes,
});

// 🛡️ AUTH GUARD: Prevents unauthorized access
router.beforeEach(async (to, from, next) => {
  const authStore = useAuthStore();
  await authStore.initAuth(); // Ensure auth state is loaded before checking

  if (to.meta.requiresAuth && !authStore.isAuthenticated) {
    next('/login'); // Redirect to login if not authenticated
  } else {
    next(); // Proceed normally
  }
});

export default router;
