// src/store/auth.ts
import { defineStore } from 'pinia';
import { ref, computed, watch } from 'vue';
import { 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
  sendPasswordResetEmail,
  onAuthStateChanged,
  User,
  GoogleAuthProvider,
  signInWithPopup
} from 'firebase/auth';
import { 
  doc, 
  setDoc, 
  getDoc, 
  updateDoc, 
  serverTimestamp,
  enableIndexedDbPersistence 
} from 'firebase/firestore';
import { auth, db } from '@/firebase/init';

// 🚀 USER ROLE ENUM
export enum UserRole {
  GUEST = 'guest',
  USER = 'user',
  PREMIUM = 'premium',
  ADMIN = 'admin'
}

// 🛡️ USER PROFILE INTERFACE
export interface UserProfile {
  uid: string;
  displayName: string;
  email: string | null;
  role: UserRole;
  credits: number;
  lastLogin: Date | null;
  preferences: {
    theme: 'dark' | 'light';
    notifications: boolean;
  };
}

// 🔑 AUTH STORE
export const useAuthStore = defineStore('auth', () => {
  const user = ref<User | null>(null);
  const userProfile = ref<UserProfile | null>(null);
  const loading = ref(false);
  const error = ref<string | null>(null);

  // 🌟 AUTH STATUS
  const isAuthenticated = computed(() => !!user.value);
  const userRole = computed(() => userProfile.value?.role || UserRole.GUEST);
  const availableCredits = computed(() => userProfile.value?.credits || 0);
  const displayName = computed(() => userProfile.value?.displayName || user.value?.displayName || null);
  const uid = computed(() => user.value?.uid || null);

  // 🔑 GOOGLE AUTH PROVIDER
  const googleProvider = new GoogleAuthProvider();

  // 🌟 INIT AUTH
  const initAuth = () => {
    onAuthStateChanged(auth(), async (currentUser) => {
      loading.value = true;
      try {
        if (currentUser) {
          user.value = currentUser;
          await fetchUserProfile(currentUser.uid);
        } else {
          user.value = null;
          userProfile.value = null;
        }
      } catch (err) {
        // 🔥 CRITICAL FIX: Properly reference the error variable
        console.error('Auth initialization error:', err);
        error.value = err instanceof Error ? err.message : 'Unknown error during authentication';
      } finally {
        loading.value = false;
      }
    });
  };

  // 🌟 FETCH USER PROFILE
  const fetchUserProfile = async (uid: string) => {
    try {
      const docRef = doc(db(), "users", uid);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        userProfile.value = {
          uid: uid,
          displayName: docSnap.data().displayName || 'Dawntasy User',
          email: docSnap.data().email || null,
          role: docSnap.data().role || UserRole.USER,
          credits: docSnap.data().credits || 0,
          lastLogin: docSnap.data().lastLogin?.toDate() || null,
          preferences: docSnap.data().preferences || { theme: 'dark', notifications: true }
        };
      } else {
        console.log("No such document!");
      }
    } catch (err) {
      // 🔥 CRITICAL FIX: Properly reference the error variable
      console.error('Error fetching user profile:', err);
      error.value = err instanceof Error ? err.message : 'Error fetching profile';
    }
  };

  // 🌟 CREATE USER PROFILE
  const createUserProfile = async (user: User, displayName: string) => {
    try {
      const profile: UserProfile = {
        uid: user.uid,
        displayName: displayName,
        email: user.email,
        role: UserRole.USER,
        credits: 100,
        lastLogin: new Date(),
        preferences: {
          theme: 'dark',
          notifications: true
        }
      };
      await setDoc(doc(db(), "users", user.uid), profile);
      userProfile.value = profile;
    } catch (err) {
      // 🔥 CRITICAL FIX: Properly reference the error variable
      console.error('Error creating user profile:', err);
      error.value = err instanceof Error ? err.message : 'Error creating profile';
    }
  };

  // 🌟 REGISTER - Enhanced with redirect handling
  const register = async (email: string, password: string, displayName: string) => {
    loading.value = true;
    error.value = null;
    try {
      const { user: firebaseUser } = await createUserWithEmailAndPassword(auth(), email, password);
      await updateProfile(firebaseUser, { displayName });
      await createUserProfile(firebaseUser, displayName);
      
      // Ensure proper redirect on the subdomain
      window.location.href = '/';
      
      loading.value = false;
      return { success: true };
    } catch (err) {
      // 🔥 CRITICAL FIX: Properly reference the error variable
      console.error('Error during registration:', err);
      error.value = err instanceof Error ? err.message : 'Registration failed';
      loading.value = false;
      return { success: false, error: error.value };
    }
  };

  // 🌟 LOGIN - Enhanced with redirect handling
  const login = async (email: string, password: string) => {
    loading.value = true;
    error.value = null;
    try {
      const { user: firebaseUser } = await signInWithEmailAndPassword(auth(), email, password);
      await fetchUserProfile(firebaseUser.uid);
      
      // Update last login
      const userRef = doc(db(), "users", firebaseUser.uid);
      await updateDoc(userRef, {
        lastLogin: serverTimestamp()
      });
      
      // Ensure proper redirect on the subdomain
      window.location.href = '/';
      
      loading.value = false;
      return { success: true };
    } catch (err) {
      // 🔥 CRITICAL FIX: Properly reference the error variable
      console.error('Error during login:', err);
      error.value = err instanceof Error ? err.message : 'Login failed';
      loading.value = false;
      return { success: false, error: error.value };
    }
  };

  // 🌟 LOGOUT
  const logout = async () => {
    loading.value = true;
    error.value = null;
    try {
      await signOut(auth());
      user.value = null;
      userProfile.value = null;
      loading.value = false;
      return { success: true };
    } catch (err) {
      // 🔥 CRITICAL FIX: Properly reference the error variable
      console.error('Error during logout:', err);
      error.value = err instanceof Error ? err.message : 'Logout failed';
      loading.value = false;
      return { success: false, error: error.value };
    }
  };

  // 🌟 RESET PASSWORD
  const resetPassword = async (email: string) => {
    loading.value = true;
    error.value = null;
    try {
      await sendPasswordResetEmail(auth(), email);
      loading.value = false;
      return { success: true };
    } catch (err) {
      // 🔥 CRITICAL FIX: Properly reference the error variable
      console.error('Error resetting password:', err);
      error.value = err instanceof Error ? err.message : 'Password reset failed';
      loading.value = false;
      return { success: false, error: error.value };
    }
  };

  // 🌟 GOOGLE SIGN IN - With subdomain support
  const signInWithGoogle = async () => {
    loading.value = true;
    error.value = null;
    
    try {
      // Configure Google Auth Provider for subdomain
      googleProvider.setCustomParameters({
        'cookie_policy': 'none',
        'prompt': 'select_account'
      });
      
      const result = await signInWithPopup(auth(), googleProvider);
      const firebaseUser = result.user;
      
      // Check if this is a new user
      const userRef = doc(db(), "users", firebaseUser.uid);
      const userDoc = await getDoc(userRef);
      
      if (!userDoc.exists()) {
        // Create profile for new Google users
        await createUserProfile(firebaseUser, firebaseUser.displayName || 'Google User');
      } else {
        // Fetch existing profile
        await fetchUserProfile(firebaseUser.uid);
      }
      
      // Ensure proper redirect
      window.location.href = '/';
      
      loading.value = false;
      return { success: true };
    } catch (err) {
      // 🔥 CRITICAL FIX: Properly reference the error variable
      console.error('Error signing in with Google:', err);
      error.value = err instanceof Error ? err.message : 'Google sign-in failed';
      loading.value = false;
      return { success: false, error: error.value };
    }
  };

  return {
    user,
    userProfile,
    loading,
    error,
    isAuthenticated,
    userRole,
    availableCredits,
    displayName,
    uid,
    initAuth,
    register,
    login,
    logout,
    resetPassword,
    signInWithGoogle
  };
});