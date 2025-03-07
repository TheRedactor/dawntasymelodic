import { initializeApp, getApps, getApp } from 'firebase/app';
import { getAuth, setPersistence, browserLocalPersistence } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// ✅ **Environment-based Config (Security & Scaling)**
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID,
};

// 🔥 **Prevent re-initialization issues in hot-reloads**
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

// 🔒 **Authentication - Persistent Login**
const auth = getAuth(app);
setPersistence(auth, browserLocalPersistence).catch((err) => {
  console.error("⚠️ Firebase Auth Persistence Error:", err);
});

// 🔥 **Optimized Firestore Instance**
const firestore = getFirestore(app);

// 🚀 **Exported for global usage**
export { app, auth, firestore };