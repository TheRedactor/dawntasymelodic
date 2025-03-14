// src/firebase/init.ts
import { initializeApp, FirebaseApp } from 'firebase/app';
import { 
  getAuth, 
  connectAuthEmulator, 
  Auth,
  initializeAuth,
  browserLocalPersistence,
  indexedDBLocalPersistence,
  browserSessionPersistence
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

// Environment Validation
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
    console.error(`🚨 Missing Firebase config: ${missingVars.join(', ')}`);
    // Continue anyway in production to avoid breaking the site completely
    if (import.meta.env.DEV) {
      throw new Error(`Missing Firebase config: ${missingVars.join(', ')}`);
    }
  }
};

// Firebase Configuration
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
    
    // Fallback values for production to avoid breaking if env vars are missing
    const firebaseConfig = {
      apiKey: import.meta.env.VITE_FIREBASE_API_KEY || "DEFAULT_FOR_PRODUCTION",
      authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN || "dawntasy.com",
      projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID || "dawntasy-ai",
      storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET || "dawntasy-ai.appspot.com",
      messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID || "000000000000",
      appId: import.meta.env.VITE_FIREBASE_APP_ID || "1:000000000000:web:000000000000"
    };

    // Create the Firebase app
    const app = initializeApp(firebaseConfig);
    
    // Initialize Auth with persistence and cookie options
    // 🔥 CRITICAL FIX: Updated auth initialization for subdomain support
    const auth = initializeAuth(app, {
      persistence: [
        indexedDBLocalPersistence,
        browserLocalPersistence,
        browserSessionPersistence
      ]
    });

    // Initialize Firestore
    const db = getFirestore(app);
    
    // Enable persistence with error handling
    try {
      enableIndexedDbPersistence(db).catch(error => {
        if (error.code === 'failed-precondition') {
          console.warn('📚 Multiple tabs open, persistence can only be enabled in one tab at a time');
        } else if (error.code === 'unimplemented') {
          console.warn('📚 Current browser does not support all required features');
        }
      });
    } catch (err) {
      console.error('Error enabling persistence:', err);
    }

    // Initialize Functions
    const functions = getFunctions(app);
    
    // Initialize Analytics in production only
    let analytics: Analytics | null = null;
    if (typeof window !== 'undefined' && import.meta.env.PROD) {
      try {
        analytics = getAnalytics(app);
      } catch (err) {
        console.warn('Analytics initialization failed:', err);
      }
    }

    // Connect to emulators in development
    if (import.meta.env.DEV) {
      try {
        connectAuthEmulator(auth, 'http://localhost:9099');
        connectFirestoreEmulator(db, 'localhost', 8080);
        connectFunctionsEmulator(functions, 'localhost', 5001);
        console.log('🔥 Firebase emulators connected');
      } catch (err) {
        console.error('Error connecting to emulators:', err);
      }
    }

    // Store and return Firebase services
    firebaseServices = { app, auth, db, functions, analytics };
  }
  
  return firebaseServices;
}

// Service accessors with error handling
export const auth = () => {
  try {
    return getFirebaseServices().auth;
  } catch (err) {
    console.error('Failed to get auth service:', err);
    throw err;
  }
};

export const db = () => {
  try {
    return getFirebaseServices().db;
  } catch (err) {
    console.error('Failed to get db service:', err);
    throw err;
  }
};

export const functions = () => {
  try {
    return getFirebaseServices().functions;
  } catch (err) {
    console.error('Failed to get functions service:', err);
    throw err;
  }
};

export const analytics = () => {
  try {
    return getFirebaseServices().analytics;
  } catch (err) {
    console.error('Failed to get analytics service:', err);
    return null;
  }
};