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

// 🆕 ADVANCED USER ROLE ENUM
enum UserRole {
  GUEST = 'guest',
  USER = 'user',
  PREMIUM = 'premium',
  ADMIN = 'admin'
}

// 🆕 ENHANCED USER PROFILE INTERFACE
interface UserProfile {
  uid: string;
  displayName: string;
  email: string;
  role: UserRole;
  credits: number;
  lastLogin: Date;
  preferences: {
    theme: 'dark' | 'light';
    notifications: boolean;
  };
}

export const useAuthStore = defineStore('auth', () => {
  // 🔥 STATE MANAGEMENT WITH COSMIC PRECISION
  const user = ref<User | null>(null);
  const userProfile = ref<UserProfile | null>(null);
  const authState = ref({
    isInitialized: false,
    isLoading: false,
    error: null as string | null
  });

  // 🚀 COMPUTED COSMIC PROPERTIES
  const authStatus = computed(() => ({
    isAuthenticated: !!user.value,
    userRole: userProfile.value?.role || UserRole.GUEST,
    availableCredits: userProfile.value?.credits || 0
  }));

  // 🌈 GOOGLE AUTH PROVIDER
  const googleProvider = new GoogleAuthProvider();

  // 🔮 MULTI-STRATEGY AUTHENTICATION
  const loginStrategies = {
    async email(email: string, password: string) {
      return signInWithEmailAndPassword(auth, email, password);
    },
    async google() {
      return signInWithPopup(auth, googleProvider);
    }
  };

  // 💫 INIT AUTH WITH COSMIC INTELLIGENCE
  const initAuth = async () => {
    return new Promise<void>((resolve) => {
      const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
        if (currentUser) {
          user.value = currentUser;
          await fetchOrCreateUserProfile(currentUser);
        }
        
        authState.value.isInitialized = true;
        unsubscribe();
        resolve();
      });
    });
  };

  // 🛡️ INTELLIGENT PROFILE MANAGEMENT
  const fetchOrCreateUserProfile = async (firebaseUser: User) => {
    try {
      const userDoc = await getDoc(doc(db, 'users', firebaseUser.uid));
      
      if (!userDoc.exists()) {
        await createUserProfile(firebaseUser);
      } else {
        userProfile.value = userDoc.data() as UserProfile;
      }
    } catch (error) {
      console.error('🚨 Profile Sync Failed', error);
    }
  };

  // 🌟 CREATE NEW USER PROFILE
  const createUserProfile = async (firebaseUser: User) => {
    try {
      const userData: UserProfile = {
        uid: firebaseUser.uid,
        displayName: firebaseUser.displayName || 'Dawntasy Explorer',
        email: firebaseUser.email || '',
        role: UserRole.USER,
        credits: 100,
        lastLogin: new Date(),
        preferences: {
          theme: 'dark',
          notifications: true
        }
      };

      await setDoc(doc(db, 'users', firebaseUser.uid), userData);
      userProfile.value = userData;
    } catch (error) {
      console.error('🚨 Failed to create user profile:', error);
    }
  };

  // 🌟 REGISTER A NEW USER
  const registerUser = async (email: string, password: string, displayName: string) => {
    try {
      authState.value.isLoading = true;
      authState.value.error = null;

      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      
      if (auth.currentUser) {
        await updateProfile(auth.currentUser, { displayName });
      }

      await createUserProfile(userCredential.user);
      user.value = userCredential.user;

      return userCredential;
    } catch (err: any) {
      console.error('🚨 Registration error:', err);
      authState.value.error = err.message || 'Failed to register';
      throw err;
    } finally {
      authState.value.isLoading = false;
    }
  };

  // 🌟 LOGIN
  const login = async (email: string, password: string) => {
    try {
      authState.value.isLoading = true;
      authState.value.error = null;

      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      user.value = userCredential.user;
      await fetchOrCreateUserProfile(userCredential.user);

      await updateDoc(doc(db, 'users', userCredential.user.uid), {
        lastLogin: serverTimestamp()
      });

      return userCredential;
    } catch (err: any) {
      console.error('🚨 Login error:', err);
      authState.value.error = err.message || 'Failed to login';
      throw err;
    } finally {
      authState.value.isLoading = false;
    }
  };

  // 🌟 LOGOUT
  const logout = async () => {
    try {
      authState.value.isLoading = true;
      authState.value.error = null;

      await signOut(auth);
      user.value = null;
      userProfile.value = null;
      
      return true;
    } catch (err: any) {
      console.error('🚨 Logout error:', err);
      authState.value.error = err.message || 'Failed to logout';
      throw err;
    } finally {
      authState.value.isLoading = false;
    }
  };

  // 🌟 RESET PASSWORD
  const resetPassword = async (email: string) => {
    try {
      authState.value.isLoading = true;
      authState.value.error = null;

      await sendPasswordResetEmail(auth, email);
      return true;
    } catch (err: any) {
      console.error('🚨 Password reset error:', err);
      authState.value.error = err.message || 'Failed to send password reset email';
      throw err;
    } finally {
      authState.value.isLoading = false;
    }
  };

  // 🌠 WATCH FOR CRITICAL STATE CHANGES
  watch(user, (newUser) => {
    if (newUser) {
      console.log('User state updated:', newUser);
      // Future analytics/logging can go here
    }
  });

  return {
    user,
    userProfile,
    authState,
    authStatus,
    loginStrategies,
    initAuth,
    registerUser,
    login,
    logout,
    resetPassword,
    fetchOrCreateUserProfile
  };
});
