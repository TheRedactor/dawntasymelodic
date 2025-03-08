import { defineStore } from 'pinia';
import { ref, computed } from 'vue';
import { 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  updateProfile
} from 'firebase/auth';
import { auth, db } from '../firebase';
import { doc, setDoc, getDoc } from 'firebase/firestore';

export const useAuthStore = defineStore('auth', () => {
  const user = ref(null);
  const authInitialized = ref(false);
  const isLoading = ref(false);
  const error = ref(null);

  // Computed properties
  const isAuthenticated = computed(() => !!user.value);
  const currentUser = computed(() => user.value);

  // Initialize auth state
  async function initAuth() {
    return new Promise((resolve) => {
      // Only set up the observer once
      if (!authInitialized.value) {
        const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
          if (currentUser) {
            try {
              // Get additional user data from Firestore
              const userDoc = await getDoc(doc(db, 'users', currentUser.uid));
              if (userDoc.exists()) {
                // Combine auth user with Firestore data
                user.value = {
                  ...currentUser,
                  ...userDoc.data()
                };
              } else {
                user.value = currentUser;
              }
            } catch (err) {
              console.error('Error fetching user data:', err);
              user.value = currentUser;
            }
          } else {
            user.value = null;
          }
          
          authInitialized.value = true;
          resolve(user.value);
        });
      } else {
        resolve(user.value);
      }
    });
  }

  // Register user
  async function register(email, password, name) {
    isLoading.value = true;
    error.value = null;
    
    try {
      // Create user in Firebase Auth
      const userCred = await createUserWithEmailAndPassword(auth, email, password);
      
      // Update the user profile with display name
      await updateProfile(userCred.user, {
        displayName: name
      });
      
      // Store additional user data in Firestore
      await setDoc(doc(db, 'users', userCred.user.uid), {
        name: name,
        email: email,
        createdAt: new Date().toISOString(),
        lastLogin: new Date().toISOString()
      });
      
      // Update user in store
      user.value = {
        ...userCred.user,
        name: name
      };
      
      return userCred.user;
    } catch (err) {
      error.value = err.message || 'Registration failed';
      throw err;
    } finally {
      isLoading.value = false;
    }
  }

  // Login user
  async function login(email, password) {
    isLoading.value = true;
    error.value = null;
    
    try {
      const userCred = await signInWithEmailAndPassword(auth, email, password);
      
      // Update last login
      await setDoc(doc(db, 'users', userCred.user.uid), {
        lastLogin: new Date().toISOString()
      }, { merge: true });
      
      // Get user data from Firestore
      const userDoc = await getDoc(doc(db, 'users', userCred.user.uid));
      if (userDoc.exists()) {
        user.value = {
          ...userCred.user,
          ...userDoc.data()
        };
      } else {
        user.value = userCred.user;
      }
      
      return userCred.user;
    } catch (err) {
      error.value = err.message || 'Login failed';
      throw err;
    } finally {
      isLoading.value = false;
    }
  }

  // Logout user
  async function logout() {
    try {
      await signOut(auth);
      user.value = null;
    } catch (err) {
      error.value = err.message || 'Logout failed';
      throw err;
    }
  }

  return {
    user,
    authInitialized,
    isLoading,
    error,
    isAuthenticated,
    currentUser,
    initAuth,
    register,
    login,
    logout
  };
});