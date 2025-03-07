// ✅ Import Firebase functions
import { initializeApp, getApps, getApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// 🔥 Firebase configuration (Using secure environment variables)
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID, // Optional, used for analytics
};

// 🛡 Ensure Firebase is not initialized multiple times
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

// 🚀 Firebase Services
const auth = getAuth(app);
const firestore = getFirestore(app);

// 🌟 Export Firebase functions for app-wide use
export { app, auth, firestore };

// ✅ OpenAI API Key (Stored in environment variables)
const openaiApiKey = import.meta.env.VITE_OPENAI_API_KEY;

// 🔥 Function to Retrieve OpenAI API Key
const useOpenAiApiKey = () => openaiApiKey;

export { useOpenAiApiKey };