import { initializeApp, FirebaseApp } from 'firebase/app';
import { 
  getAuth, 
  connectAuthEmulator, 
  Auth,
  initializeAuth,
  browserLocalPersistence
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

// 🆕 Enhanced Environment Validation
const validateEnvironment = (requiredVars: string[]) => {
  const missingVars = requiredVars.filter(key => !import.meta.env[key]);
  
  if (missingVars.length > 0) {
    throw new Error(`🚨 CRITICAL: Missing environment variables: ${missingVars.join(', ')}`);
  }
};

// 🆕 Centralized Firebase Configuration
interface FirebaseConfiguration {
  app: FirebaseApp;
  auth: Auth;
  db: Firestore;
  functions: Functions;
  analytics: Analytics | null;
}

// 🚀 ULTIMATE FIREBASE INITIALIZER
export function initializeFirebase(): FirebaseConfiguration {
  // Validate environment BEFORE any initialization
  validateEnvironment([
    "VITE_FIREBASE_API_KEY",
    "VITE_FIREBASE_AUTH_DOMAIN",
    // ... other required vars
  ]);

  // Firebase configuration
  const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    // ... other config
  };

  // 🆕 Singleton App Initialization with Enhanced Tracking
  const app = initializeApp(firebaseConfig);

  // 🔥 Enhanced Auth Configuration
  const auth = initializeAuth(app, {
    persistence: browserLocalPersistence
  });

  // 🌟 Database with Offline Persistence
  const db = getFirestore(app);
  enableIndexedDbPersistence(db).catch((err) => {
    console.warn('🚨 Offline persistence failed:', err);
  });

  const functions = getFunctions(app);

  // Conditional Analytics
  let analytics: Analytics | null = null;
  if (import.meta.env.PROD) {
    try {
      analytics = getAnalytics(app);
    } catch (err) {
      console.error('🚨 Analytics Initialization Failed', err);
    }
  }

  // 🔧 Development Emulator Setup
  if (import.meta.env.DEV) {
    connectAuthEmulator(auth, 'http://localhost:9099');
    connectFirestoreEmulator(db, 'localhost', 8080);
    connectFunctionsEmulator(functions, 'localhost', 5001);
    console.log('🔥 DEVELOPMENT MODE: Firebase Emulators Activated!');
  }

  return { app, auth, db, functions, analytics };
}

// 🚀 GLOBAL FIREBASE SERVICES
export const { 
  app, 
  auth, 
  db, 
  functions, 
  analytics 
} = initializeFirebase();