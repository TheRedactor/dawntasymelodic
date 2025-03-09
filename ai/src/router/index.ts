// src/router/index.ts
import { createRouter, createWebHistory, RouteRecordRaw, NavigationGuardNext, RouteLocationNormalized } from 'vue-router';
import { auth } from '@/firebase/init';
import { onAuthStateChanged, User } from 'firebase/auth';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';

// Make NProgress configuration more elegant
NProgress.configure({ 
  easing: 'ease',
  speed: 500,
  showSpinner: false,
  trickleSpeed: 200,
  minimum: 0.1
});

// Enhanced route metadata
interface EnhancedRouteMetadata {
  requiresAuth: boolean;
  transition: string;
  roleRequired?: 'user' | 'admin' | 'guest';
  analyticsTrack?: boolean;
  title?: string; // For document title
}

const routes: Array<RouteRecordRaw> = [
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
    path: '/about',
    name: 'About',
    component: () => import('@/views/AboutView.vue'),
    meta: { 
      requiresAuth: false, 
      transition: 'fade',
      title: 'About - DawntasyAI'
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

// CRITICAL FIX: Use '/ai/' for subfolder deployment
const router = createRouter({
  history: createWebHistory('/ai/'),
  routes,
  scrollBehavior(to, from, savedPosition) {
    return new Promise((resolve) => {
      // Add subtle delay for transition effect
      setTimeout(() => {
        if (savedPosition) {
          resolve(savedPosition);
        } else if (to.hash) {
          resolve({
            el: to.hash,
            behavior: 'smooth',
            top: 80 // Offset for header
          });
        } else {
          resolve({ 
            top: 0, 
            behavior: 'smooth'
          });
        }
      }, 300);
    });
  }
});

// Enhanced user authentication resolution
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

// Improved navigation guards with progress bar
router.beforeEach(async (
  to: RouteLocationNormalized, 
  from: RouteLocationNormalized, 
  next: NavigationGuardNext
) => {
  // Start progress bar
  NProgress.start();
  
  // Add smooth page transition class
  document.body.classList.add('page-transitioning');

  try {
    // Get current user
    const user = await getCurrentUser();
    const requiresAuth = to.matched.some(record => (record.meta as EnhancedRouteMetadata).requiresAuth);
    
    // Set document title
    const pageTitle = (to.meta as EnhancedRouteMetadata).title || 'DawntasyAI';
    document.title = pageTitle;

    // Auth check
    if (requiresAuth && !user) {
      NProgress.done();
      return next({ 
        name: 'Login', 
        query: { redirect: to.fullPath } 
      });
    }

    // Ready to proceed
    next();
  } catch (error) {
    console.error('Navigation error:', error);
    NProgress.done();
    next({ name: 'Login' });
  }
});

// After route change completion
router.afterEach(() => {
  // Complete progress bar
  NProgress.done();
  
  // Remove transition class with slight delay for smooth effect
  setTimeout(() => {
    document.body.classList.remove('page-transitioning');
  }, 100);
  
  // Scroll to top with smooth behavior
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

export default router;