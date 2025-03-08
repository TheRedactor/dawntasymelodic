// src/store/auth.ts
import { defineStore } from 'pinia';
import { ref, computed } from 'vue';
import { 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
  sendPasswordResetEmail,
  onAuthStateChanged,
  User
} from 'firebase/auth';
import { doc, setDoc, getDoc, updateDoc, serverTimestamp } from 'firebase/firestore';
import { auth, db } from '@/firebase/init';

export const useAuthStore = defineStore('auth', () => {
  const user = ref<User | null>(null);
  const authInitialized = ref(false);
  const userProfile = ref<any>(null);
  const isLoading = ref(false);
  const error = ref<string | null>(null);

  // Computed properties
  const isAuthenticated = computed(() => !!user.value);
  const displayName = computed(() => user.value?.displayName || 'Dawntasy Explorer');
  const email = computed(() => user.value?.email);
  const uid = computed(() => user.value?.uid);

  // Initialize auth state
  const initAuth = async () => {
    return new Promise<void>((resolve) => {
      const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
        user.value = currentUser;
        
        if (currentUser) {
          try {
            await fetchUserProfile(currentUser.uid);
          } catch (err) {
            console.error('Error fetching user profile:', err);
          }
        } else {
          userProfile.value = null;
        }
        
        authInitialized.value = true;
        unsubscribe();
        resolve();
      });
    });
  };

  // Fetch user profile from Firestore
  const fetchUserProfile = async (userId: string) => {
    try {
      const userDoc = await getDoc(doc(db, 'users', userId));
      if (userDoc.exists()) {
        userProfile.value = userDoc.data();
      } else {
        userProfile.value = null;
      }
    } catch (err: any) {
      console.error('Error fetching user profile:', err);
      error.value = 'Failed to load user profile';
    }
  };

  // Register a new user
  const registerUser = async (email: string, password: string, displayName: string) => {
    try {
      isLoading.value = true;
      error.value = null;
      
      // Create the user in Firebase Auth
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      
      // Update display name
      if (auth.currentUser) {
        await updateProfile(auth.currentUser, { displayName });
      }
      
      // Create user profile document in Firestore
      const userData = {
        uid: userCredential.user.uid,
        email,
        displayName,
        createdAt: serverTimestamp(),
        plan: 'free', // Default plan
        credits: 100, // Starting credits
        preferences: {
          theme: 'dark',
          notifications: true
        }
      };
      
      await setDoc(doc(db, 'users', userCredential.user.uid), userData);
      
      // Update local state
      user.value = userCredential.user;
      userProfile.value = userData;
      
      return userCredential;
    } catch (err: any) {
      console.error('Registration error:', err);
      error.value = err.message || 'Failed to register';
      throw err;
    } finally {
      isLoading.value = false;
    }
  };

  // Login
  const login = async (email: string, password: string) => {
    try {
      isLoading.value = true;
      error.value = null;
      
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      user.value = userCredential.user;
      
      await fetchUserProfile(userCredential.user.uid);
      
      // Update last login timestamp
      await updateDoc(doc(db, 'users', userCredential.user.uid), {
        lastLoginAt: serverTimestamp()
      });
      
      return userCredential;
    } catch (err: any) {
      console.error('Login error:', err);
      error.value = err.message || 'Failed to login';
      throw err;
    } finally {
      isLoading.value = false;
    }
  };

  // Logout
  const logout = async () => {
    try {
      isLoading.value = true;
      error.value = null;
      
      await signOut(auth);
      user.value = null;
      userProfile.value = null;
      
      return true;
    } catch (err: any) {
      console.error('Logout error:', err);
      error.value = err.message || 'Failed to logout';
      throw err;
    } finally {
      isLoading.value = false;
    }
  };

  // Reset password
  const resetPassword = async (email: string) => {
    try {
      isLoading.value = true;
      error.value = null;
      
      await sendPasswordResetEmail(auth, email);
      return true;
    } catch (err: any) {
      console.error('Password reset error:', err);
      error.value = err.message || 'Failed to send password reset email';
      throw err;
    } finally {
      isLoading.value = false;
    }
  };

  return {
    user,
    userProfile,
    authInitialized,
    isAuthenticated,
    displayName,
    email,
    uid,
    isLoading,
    error,
    initAuth,
    registerUser,
    login,
    logout,
    resetPassword,
    fetchUserProfile
  };
});