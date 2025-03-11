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
      } catch (e: any) {
        error.value = e.message;
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
    } catch (e: any) {
      error.value = e.message;
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
    } catch (e: any) {
      error.value = e.message;
    }
  };

  // 🌟 REGISTER
  const register = async (email: string, password: string, displayName: string) => {
    loading.value = true;
    error.value = null;
    try {
      const { user: firebaseUser } = await createUserWithEmailAndPassword(auth(), email, password);
      await updateProfile(firebaseUser, { displayName });
      await createUserProfile(firebaseUser, displayName);
      loading.value = false;
    } catch (e: any) {
      error.value = e.message;
      loading.value = false;
      throw e;
    }
  };

  // 🌟 LOGIN
  const login = async (email: string, password: string) => {
    loading.value = true;
    error.value = null;
    try {
      const { user: firebaseUser } = await signInWithEmailAndPassword(auth(), email, password);
      await fetchUserProfile(firebaseUser.uid);
      loading.value = false;
    } catch (e: any) {
      error.value = e.message;
      loading.value = false;
      throw e;
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
    } catch (e: any) {
      error.value = e.message;
      loading.value = false;
      throw e;
    }
  };

  // 🌟 RESET PASSWORD
  const resetPassword = async (email: string) => {
    loading.value = true;
    error.value = null;
    try {
      await sendPasswordResetEmail(auth(), email);
      loading.value = false;
    } catch (e: any) {
      error.value = e.message;
      loading.value = false;
      throw e;
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
    initAuth,
    register,
    login,
    logout,
    resetPassword
  };
});
