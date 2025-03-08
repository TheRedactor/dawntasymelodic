// src/router/index.ts
import { createRouter, createWebHistory, RouteRecordRaw, NavigationGuardNext, RouteLocationNormalized } from 'vue-router';
import { auth } from '@/firebase/init';
import { onAuthStateChanged, User } from 'firebase/auth';
import NProgress from 'nprogress'; // 🆕 Added progress bar support
import 'nprogress/nprogress.css'; // 🆕 Import styles

// 🌌 **Enhanced route metadata**
interface EnhancedRouteMetadata {
  requiresAuth: boolean;
  transition: string;
  roleRequired?: 'user' | 'admin' | 'guest';
  analyticsTrack?: boolean;
}

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Landing',
    component: () => import('@/views/LandingView.vue'),
    meta: { requiresAuth: false, transition: 'fade' }
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/LoginView.vue'),
    meta: { requiresAuth: false, transition: 'slide-left' }
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import('@/views/RegisterView.vue'),
    meta: { requiresAuth: false, transition: 'slide-left' }
  },
  {
    path: '/chat',
    name: 'Chat',
    component: () => import('@/views/ChatView.vue'),
    meta: {
      requiresAuth: true, 
      transition: 'cosmic-fade',
      roleRequired: 'user',
      analyticsTrack: true
    }
  },
  {
    path: '/profile',
    name: 'Profile',
    component: () => import('@/views/ProfileView.vue'),
    meta: { requiresAuth: true, transition: 'slide-up' }
  },
  {
    path: '/settings',
    name: 'Settings',
    component: () => import('@/views/SettingsView.vue'),
    meta: { requiresAuth: true, transition: 'slide-up' }
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('@/views/AboutView.vue'),
    meta: { requiresAuth: false, transition: 'fade' }
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: () => import('@/views/NotFoundView.vue'),
    meta: { requiresAuth: false, transition: 'fade' }
  }
];

// 🚀 **Fix: Ensures Netlify routes correctly under `/ai/`**
const router = createRouter({
  history: createWebHistory('/ai/'),
  routes,
  scrollBehavior(to, from, savedPosition) {
    return new Promise((resolve) => {
      setTimeout(() => {
        if (savedPosition) {
          resolve(savedPosition);
        } else {
          resolve({
            top: 0, 
            behavior: 'smooth',
            el: to.hash ? `#${to.hash.slice(1)}` : undefined
          });
        }
      }, 300);
    });
  }
});

// 🌟 **Enhanced user authentication resolution**
const getCurrentUser = (): Promise<User | null> => {
  return new Promise((resolve, reject) => {
    const unsubscribe = onAuthStateChanged(
      auth, 
      (user) => {
        unsubscribe();
        resolve(user);
      },
      (error) => {
        unsubscribe();
        reject(error);
      }
    );
  });
};

// 🔥 **Navigation guards with progress bar & role-based auth**
router.beforeEach(async (
  to: RouteLocationNormalized, 
  from: RouteLocationNormalized, 
  next: NavigationGuardNext
) => {
  NProgress.start(); // ✅ Starts progress bar when route changes begin
  
  document.body.classList.add('page-transitioning');

  try {
    const user = await getCurrentUser();
    const requiresAuth = to.matched.some(record => (record.meta as EnhancedRouteMetadata).requiresAuth);
    const requiredRole = (to.meta as EnhancedRouteMetadata).roleRequired;

    // ✅ Redirect if user isn't authenticated
    if (requiresAuth && !user) {
      NProgress.done();
      return next({ 
        name: 'Login', 
        query: { redirect: to.fullPath } 
      });
    }

    // ✅ Role-based access control (future feature)
    if (requiredRole && user) {
      // Example: if (user.role !== requiredRole) { next('/unauthorized'); }
    }

    // ✅ Analytics tracking (future feature)
    if ((to.meta as EnhancedRouteMetadata).analyticsTrack) {
      // Example: trackPageView(to.path);
    }

    next();
  } catch (error) {
    console.error('Navigation error:', error);
    NProgress.done();
    next({ name: 'Login' });
  } finally {
    requestAnimationFrame(() => {
      document.body.classList.remove('page-transitioning');
      NProgress.done(); // ✅ Ensures progress bar ends after navigation
    });
  }
});

export default router;
