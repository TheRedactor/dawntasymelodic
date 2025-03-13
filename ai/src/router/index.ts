// src/router/index.ts
import { createRouter, createWebHistory, RouteRecordRaw, NavigationGuardNext, RouteLocationNormalized } from 'vue-router';
import { auth } from '@/firebase/init';
import { onAuthStateChanged, User } from 'firebase/auth';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';

// 🔥 ENHANCED PROGRESS BAR CONFIG
NProgress.configure({ 
  easing: 'ease',
  speed: 500,
  showSpinner: false,
  trickleSpeed: 200,
  minimum: 0.1
});

interface EnhancedRouteMetadata {
  requiresAuth: boolean;
  transition: string;
  roleRequired?: 'user' | 'admin' | 'guest';
  analyticsTrack?: boolean;
  title?: string;
}

const routes: Array<RouteRecordRaw & { meta: EnhancedRouteMetadata }> = [
  {
    path: '/',
    name: 'Landing',
    component: () => import('@/views/LandingView.vue'),
    meta: { 
      requiresAuth: false, 
      transition: 'fade',
      title: 'DawntasyAI - Your Cosmic AI Companion' 
    }
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/Login.vue'),
    meta: { 
      requiresAuth: false, 
      transition: 'slide-left',
      title: 'Login - DawntasyAI' 
    }
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import('@/views/RegisterView.vue'),
    meta: { 
      requiresAuth: false, 
      transition: 'slide-left',
      title: 'Register - DawntasyAI' 
    }
  },
  {
    path: '/chat',
    name: 'Chat',
    component: () => import('@/views/ChatView.vue'),
    meta: {
      requiresAuth: true, 
      transition: 'cosmic-fade',
      roleRequired: 'user',
      analyticsTrack: true,
      title: 'AI Chat - DawntasyAI'
    }
  },
  {
    path: '/chat/:id',
    name: 'ChatDetail',
    component: () => import('@/views/ChatView.vue'),
    meta: {
      requiresAuth: true, 
      transition: 'cosmic-fade',
      roleRequired: 'user',
      analyticsTrack: true,
      title: 'AI Chat - DawntasyAI'
    }
  },
  {
    path: '/chats',
    name: 'ChatList',
    component: () => import('@/views/ChatList.vue'),
    meta: { 
      requiresAuth: true, 
      transition: 'slide-up',
      title: 'Your Conversations - DawntasyAI'
    }
  },
  {
    path: '/profile',
    name: 'Profile',
    component: () => import('@/views/ProfileView.vue'),
    meta: { 
      requiresAuth: true, 
      transition: 'slide-up',
      title: 'Profile - DawntasyAI'
    }
  },
  {
    path: '/settings',
    name: 'Settings',
    component: () => import('@/views/Settings.vue'),
    meta: { 
      requiresAuth: true, 
      transition: 'slide-up',
      title: 'Settings - DawntasyAI'
    }
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: () => import('@/views/NotFoundView.vue'),
    meta: { 
      requiresAuth: false, 
      transition: 'fade',
      title: '404 - Page Not Found'
    }
  }
];

// 🔥 FIXED: Simple root history with NO path prefix
const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth',
        top: 80
      };
    } else {
      return { top: 0, behavior: 'smooth' };
    }
  }
});

// Get current user promise
const getCurrentUser = (): Promise<User | null> => {
  return new Promise((resolve, reject) => {
    const unsubscribe = onAuthStateChanged(
      auth(), 
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

// Route guard with improved error handling
router.beforeEach(async (to, from, next) => {
  // Start progress bar
  NProgress.start();
  document.body.classList.add('page-transitioning');

  try {
    // Update document title
    document.title = to.meta.title || 'DawntasyAI';
    
    // Check authentication
    const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
    
    if (!requiresAuth) {
      // No auth required, proceed
      return next();
    }
    
    // Check if user is logged in
    const user = await getCurrentUser();
    
    if (!user) {
      // User not logged in, redirect to login
      return next({ 
        name: 'Login', 
        query: { redirect: to.fullPath } 
      });
    }
    
    // User is authenticated, proceed
    next();
  } catch (error) {
    console.error('Navigation error:', error);
    NProgress.done();
    next({ name: 'Login' });
  }
});

router.afterEach(() => {
  // Complete progress bar
  NProgress.done();
  document.body.classList.remove('page-transitioning');
});

export default router;