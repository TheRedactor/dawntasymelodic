// src/firebase/init.ts
import { initializeApp, FirebaseApp } from 'firebase/app';
import { 
  getAuth, 
  connectAuthEmulator, 
  Auth,
  initializeAuth,
  browserLocalPersistence,
  inMemoryPersistence,
  browserSessionPersistence,
  indexedDBLocalPersistence
} from 'firebase/auth';
import { 
  getFirestore, 
  connectFirestoreEmulator, 
  Firestore,
  enableIndexedDbPersistence
} from 'firebase/firestore';
import { 
  getFunctions, 
  connectFunctionsEmulator, 
  Functions 
} from 'firebase/functions';
import { getAnalytics, Analytics } from 'firebase/analytics';

// 🔥 Enhanced Environment Validation
const requiredFirebaseVars = [
  "VITE_FIREBASE_API_KEY",
  "VITE_FIREBASE_AUTH_DOMAIN",
  "VITE_FIREBASE_PROJECT_ID",
  "VITE_FIREBASE_STORAGE_BUCKET",
  "VITE_FIREBASE_MESSAGING_SENDER_ID",
  "VITE_FIREBASE_APP_ID"
];

const validateEnvironment = () => {
  const missingVars = requiredFirebaseVars.filter(key => !import.meta.env[key]);
  if (missingVars.length > 0) {
    throw new Error(`🚨 Missing Firebase config: ${missingVars.join(', ')}`);
  }
};

// 🚀 Optimized Firebase Configuration
interface FirebaseServices {
  app: FirebaseApp;
  auth: Auth;
  db: Firestore;
  functions: Functions;
  analytics: Analytics | null;
}

let firebaseServices: FirebaseServices | null = null;

export function getFirebaseServices(): FirebaseServices {
  if (!firebaseServices) {
    validateEnvironment();
    
    const firebaseConfig = {
      apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
      authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
      projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
      storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
      messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
      appId: import.meta.env.VITE_FIREBASE_APP_ID
    };

    const app = initializeApp(firebaseConfig);
    
    // Enhanced Auth with cross-subdomain cookie support
    const auth = initializeAuth(app, {
      persistence: [
        browserLocalPersistence,
        indexedDBLocalPersistence,
        browserSessionPersistence
      ],
      // Add cookieOptions for cross-domain support
      cookieOptions: {
        domain: '.dawntasy.com', // Note the dot prefix for all subdomains
        secure: true,
        sameSite: 'none'
      }
    });

    const db = getFirestore(app);
    enableIndexedDbPersistence(db).catch(error => {
      if (error.code === 'failed-precondition') {
        console.warn('📚 Multiple tabs open, persistence can only be enabled in one tab at a time');
      } else if (error.code === 'unimplemented') {
        console.warn('📚 Current browser does not support all required features');
      }
    });

    const functions = getFunctions(app);
    let analytics: Analytics | null = null;

    if (!import.meta.env.SSR && import.meta.env.PROD) {
      analytics = getAnalytics(app);
    }

    if (import.meta.env.DEV) {
      connectAuthEmulator(auth, 'http://localhost:9099');
      connectFirestoreEmulator(db, 'localhost', 8080);
      connectFunctionsEmulator(functions, 'localhost', 5001);
      console.log('🔥 Firebase emulators connected');
    }

    firebaseServices = { app, auth, db, functions, analytics };
  }
  return firebaseServices;
}

// 🛡️ Safe Service Accessors
export const auth = () => getFirebaseServices().auth;
export const db = () => getFirebaseServices().db;
export const functions = () => getFirebaseServices().functions;
export const analytics = () => getFirebaseServices().analytics;