import { defineStore } from 'pinia';
import { ref, computed } from 'vue';
import { 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  updateProfile
} from 'firebase/auth';
import { doc, setDoc, getDoc } from 'firebase/firestore';
import { auth, db } from '../firebase/index'; // Corrected path

export const useAuthStore = defineStore('auth', () => {
  const user = ref(null);
  const authInitialized = ref(false);
  const isLoading = ref(false);
  const error = ref<string | null>(null);

  const isAuthenticated = computed(() => !!user.value);
  const currentUser = computed(() => user.value);

  async function initAuth() {
    console.log('authStore: initAuth started');
    isLoading.value = true;
    error.value = null;
    return new Promise((resolve, reject) => {
      const timeout = setTimeout(() => {
        error.value = 'Connection to cosmos failed. Check your network.';
        isLoading.value = false;
        reject(new Error('Auth timeout'));
      }, 10000);

      if (!authInitialized.value) {
        console.log('authStore: Setting up onAuthStateChanged');
        const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
          clearTimeout(timeout);
          console.log('authStore: onAuthStateChanged fired, user:', currentUser?.uid || 'none');
          if (currentUser) {
            try {
              const userDoc = await getDoc(doc(db, 'users', currentUser.uid));
              user.value = userDoc.exists() ? { ...currentUser, ...userDoc.data() } : currentUser;
            } catch (err) {
              console.error('Firestore fetch failed:', err);
              user.value = currentUser;
            }
          } else {
            user.value = null;
          }
          authInitialized.value = true;
          isLoading.value = false;
          resolve(user.value);
        }, (err) => {
          clearTimeout(timeout);
          error.value = 'Authentication error: ' + err.message;
          isLoading.value = false;
          reject(err);
        });
      } else {
        clearTimeout(timeout);
        isLoading.value = false;
        resolve(user.value);
      }
    });
  }

  async function register(email: string, password: string, name: string) {
    isLoading.value = true;
    error.value = null;
    try {
      const userCred = await createUserWithEmailAndPassword(auth, email, password);
      await updateProfile(userCred.user, { displayName: name });
      await setDoc(doc(db, 'users', userCred.user.uid), {
        name, email, createdAt: new Date().toISOString(), lastLogin: new Date().toISOString()
      });
      user.value = { ...userCred.user, name };
      return userCred.user;
    } catch (err: any) {
      error.value = err.message || 'Registration failed';
      throw err;
    } finally {
      isLoading.value = false;
    }
  }

  async function login(email: string, password: string) {
    isLoading.value = true;
    error.value = null;
    try {
      const userCred = await signInWithEmailAndPassword(auth, email, password);
      await setDoc(doc(db, 'users', userCred.user.uid), { lastLogin: new Date().toISOString() }, { merge: true });
      const userDoc = await getDoc(doc(db, 'users', userCred.user.uid));
      user.value = userDoc.exists() ? { ...userCred.user, ...userDoc.data() } : userCred.user;
      return userCred.user;
    } catch (err: any) {
      error.value = err.message || 'Login failed';
      throw err;
    } finally {
      isLoading.value = false;
    }
  }

  async function logout() {
    try {
      await signOut(auth);
      user.value = null;
    } catch (err: any) {
      error.value = err.message || 'Logout failed';
      throw err;
    }
  }

  return { user, authInitialized, isLoading, error, isAuthenticated, currentUser, initAuth, register, login, logout };
});