// src/firebase/init.ts
import { initializeApp, FirebaseApp } from 'firebase/app';
import { 
  getAuth, 
  connectAuthEmulator, 
  Auth,
  setPersistence,
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

// Environment Validation with debugging
const requiredFirebaseVars = [
  "VITE_FIREBASE_API_KEY",
  "VITE_FIREBASE_AUTH_DOMAIN",
  "VITE_FIREBASE_PROJECT_ID",
  "VITE_FIREBASE_STORAGE_BUCKET",
  "VITE_FIREBASE_MESSAGING_SENDER_ID",
  "VITE_FIREBASE_APP_ID"
];

// Actually log the environment variables for debugging
const logEnvironmentVars = () => {
  console.log("🔥 Firebase Environment Variables:");
  requiredFirebaseVars.forEach(key => {
    const isSet = !!import.meta.env[key];
    console.log(`${key}: ${isSet ? '✅ Set' : '❌ Missing'}`);
  });
};

const validateEnvironment = () => {
  logEnvironmentVars();
  
  const missingVars = requiredFirebaseVars.filter(key => !import.meta.env[key]);
  if (missingVars.length > 0) {
    console.warn(`⚠️ Missing Firebase config variables: ${missingVars.join(', ')}`);
    console.warn("⚠️ Environment variables missing! Please check your GitHub secrets are properly configured.");
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

let firebaseApp: FirebaseApp | null = null;
let firebaseAuth: Auth | null = null;
let firebaseDb: Firestore | null = null;
let firebaseFunctions: Functions | null = null;
let firebaseAnalytics: Analytics | null = null;

export function getFirebaseServices(): FirebaseServices {
  if (!firebaseApp) {
    validateEnvironment();
    
    console.log("🔥 Initializing Firebase App");
    
    // Create firebase config from environment variables
    // These will be loaded from GitHub secrets in production
    const firebaseConfig = {
      apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
      authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
      projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
      storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
      messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
      appId: import.meta.env.VITE_FIREBASE_APP_ID
    };

    console.log("Using Firebase config with project:", firebaseConfig.projectId);

    // Create the Firebase app
    firebaseApp = initializeApp(firebaseConfig);
    console.log("✅ Firebase App initialized successfully");
    
    // Initialize Auth
    try {
      console.log("🔑 Initializing Firebase Auth");
      firebaseAuth = getAuth(firebaseApp);
      
      // Set persistence to local (persist between sessions/tabs)
      setPersistence(firebaseAuth, browserLocalPersistence)
        .then(() => console.log("✅ Firebase Auth persistence set to local"))
        .catch(err => console.error("❌ Error setting auth persistence:", err));
        
      console.log("✅ Firebase Auth initialized successfully");
    } catch (err) {
      console.error("❌ Error initializing Firebase Auth:", err);
      firebaseAuth = getAuth(firebaseApp); // Fallback to basic auth
    }

    // Initialize Firestore
    try {
      console.log("📄 Initializing Firestore");
      firebaseDb = getFirestore(firebaseApp);
      
      // Enable persistence with error handling
      enableIndexedDbPersistence(firebaseDb)
        .then(() => console.log("✅ Firestore persistence enabled"))
        .catch(error => {
          if (error.code === 'failed-precondition') {
            console.warn('📚 Multiple tabs open, persistence can only be enabled in one tab at a time');
          } else if (error.code === 'unimplemented') {
            console.warn('📚 Current browser does not support all required features');
          } else {
            console.error('❌ Error enabling Firestore persistence:', error);
          }
        });
        
      console.log("✅ Firestore initialized successfully");
    } catch (err) {
      console.error('❌ Error initializing Firestore:', err);
      firebaseDb = getFirestore(firebaseApp); // Fallback to basic Firestore
    }

    // Initialize Functions
    try {
      console.log("⚡ Initializing Firebase Functions");
      firebaseFunctions = getFunctions(firebaseApp);
      console.log("✅ Firebase Functions initialized successfully");
    } catch (err) {
      console.error('❌ Error initializing Firebase Functions:', err);
      firebaseFunctions = getFunctions(firebaseApp); // Fallback to basic Functions
    }
    
    // Initialize Analytics in production only
    if (typeof window !== 'undefined' && import.meta.env.PROD) {
      try {
        console.log("📊 Initializing Firebase Analytics");
        firebaseAnalytics = getAnalytics(firebaseApp);
        console.log("✅ Firebase Analytics initialized successfully");
      } catch (err) {
        console.warn('⚠️ Analytics initialization failed:', err);
        firebaseAnalytics = null;
      }
    }

    // Connect to emulators in development
    if (import.meta.env.DEV) {
      try {
        if (firebaseAuth) connectAuthEmulator(firebaseAuth, 'http://localhost:9099');
        if (firebaseDb) connectFirestoreEmulator(firebaseDb, 'localhost', 8080);
        if (firebaseFunctions) connectFunctionsEmulator(firebaseFunctions, 'localhost', 5001);
        console.log('🔥 Firebase emulators connected');
      } catch (err) {
        console.error('Error connecting to emulators:', err);
      }
    }
  }
  
  if (!firebaseApp || !firebaseAuth || !firebaseDb || !firebaseFunctions) {
    throw new Error("Firebase services failed to initialize properly");
  }
  
  return { 
    app: firebaseApp, 
    auth: firebaseAuth, 
    db: firebaseDb, 
    functions: firebaseFunctions, 
    analytics: firebaseAnalytics 
  };
}

// Service accessors with improved error handling and logging
export const auth = () => {
  try {
    if (!firebaseAuth) {
      console.log("🔄 Auth service not initialized, initializing Firebase...");
      return getFirebaseServices().auth;
    }
    return firebaseAuth;
  } catch (err) {
    console.error('❌ CRITICAL: Failed to get auth service:', err);
    throw new Error('Firebase authentication service unavailable');
  }
};

export const db = () => {
  try {
    if (!firebaseDb) {
      console.log("🔄 Firestore not initialized, initializing Firebase...");
      return getFirebaseServices().db;
    }
    return firebaseDb;
  } catch (err) {
    console.error('❌ CRITICAL: Failed to get Firestore service:', err);
    throw new Error('Firebase Firestore service unavailable');
  }
};

export const functions = () => {
  try {
    if (!firebaseFunctions) {
      console.log("🔄 Functions not initialized, initializing Firebase...");
      return getFirebaseServices().functions;
    }
    return firebaseFunctions;
  } catch (err) {
    console.error('❌ CRITICAL: Failed to get Functions service:', err);
    throw new Error('Firebase Functions service unavailable');
  }
};

export const analytics = () => {
  if (!firebaseAnalytics && import.meta.env.PROD) {
    try {
      return getFirebaseServices().analytics;
    } catch (err) {
      console.warn('⚠️ Unable to get analytics service:', err);
      return null;
    }
  }
  return firebaseAnalytics;
};