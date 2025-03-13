// src/router/index.ts
import { createRouter, createWebHistory, RouteRecordRaw, NavigationGuardNext, RouteLocationNormalized } from 'vue-router';
import { getAuth } from 'firebase/auth';

const auth = getAuth();
import { onAuthStateChanged, User } from 'firebase/auth';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';

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
const router = createRouter({
  history: createWebHistory('/'), // CHANGED: Root history for subdomain
  routes,
  scrollBehavior(to, from, savedPosition) {
    return new Promise((resolve) => {
      setTimeout(() => {
        if (savedPosition) resolve(savedPosition);
        else if (to.hash) {
          resolve({
            el: to.hash,
            behavior: 'smooth',
            top: 80
          });
        } else {
          resolve({ top: 0, behavior: 'smooth' });
        }
      }, 300);
    });
  }
});

const getCurrentUser = (): Promise<User | null> => {
  return new Promise((resolve, reject) => {
    const unsubscribe = onAuthStateChanged(auth, 
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

router.beforeEach(async (to, from, next) => {
  NProgress.start();
  document.body.classList.add('page-transitioning');

  try {
    const user = await getCurrentUser();
    const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
    document.title = to.meta.title || 'DawntasyAI';

    if (requiresAuth && !user) {
      NProgress.done();
      return next({ 
        name: 'Login', 
        query: { redirect: to.fullPath } 
      });
    }

    next();
  } catch (error) {
    console.error('Navigation error:', error);
    NProgress.done();
    next({ name: 'Login' });
  }
});

router.afterEach(() => {
  NProgress.done();
  document.body.classList.remove('page-transitioning');
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

export default router;