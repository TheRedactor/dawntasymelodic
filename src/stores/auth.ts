import { defineStore } from 'pinia';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
  onAuthStateChanged
} from 'firebase/auth';
import {
  doc,
  setDoc,
  getDoc,
  serverTimestamp
} from 'firebase/firestore';
import { auth, db } from '../firebase'; 

export const useAuthStore = defineStore('auth', {
  state: () => ({
    user: null,
    isAuthenticated: false,
    isLoading: true,
    authInitialized: false
  }),
  
  actions: {
    async initAuth() {
      if (this.authInitialized) return;

      return new Promise<void>((resolve) => {
        const unsubscribe = onAuthStateChanged(auth, async (user) => {
          try {
            if (user) {
              this.user = {
                uid: user.uid,
                email: user.email,
                displayName: user.displayName || "Anonymous",
                photoURL: user.photoURL || null
              };
              this.isAuthenticated = true;
              
              const userDoc = await getDoc(doc(db, 'users', user.uid));
              if (userDoc.exists()) {
                this.user = { ...this.user, ...userDoc.data() };
              }
            } else {
              this.user = null;
              this.isAuthenticated = false;
            }
          } catch (error) {
            console.error('🔥 Error fetching user data:', error);
          } finally {
            this.isLoading = false;
            this.authInitialized = true;
            unsubscribe(); 
            resolve();
          }
        });
      });
    },

    async register(email: string, password: string, displayName: string) {
      try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;
        
        await updateProfile(user, { displayName });

        await setDoc(doc(db, 'users', user.uid), {
          uid: user.uid,
          email: user.email,
          displayName,
          createdAt: serverTimestamp(),
          lastLogin: serverTimestamp(),
          settings: {
            theme: 'dark',
            notifications: true
          }
        });

        this.user = { uid: user.uid, email: user.email, displayName };
        this.isAuthenticated = true;
        return user;
      } catch (error) {
        console.error('🚨 Registration error:', error);
        throw error;
      }
    },

    async login(email: string, password: string) {
      try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;

        await setDoc(doc(db, 'users', user.uid), {
          lastLogin: serverTimestamp()
        }, { merge: true });

        this.user = {
          uid: user.uid,
          email: user.email,
          displayName: user.displayName || "Anonymous",
          photoURL: user.photoURL || null
        };
        this.isAuthenticated = true;

        return user;
      } catch (error) {
        console.error('❌ Login error:', error);
        throw error;
      }
    },

    async logout() {
      try {
        await signOut(auth);
        this.user = null;
        this.isAuthenticated = false;
      } catch (error) {
        console.error('❌ Logout error:', error);
        throw error;
      }
    },

    async updateUserProfile(profileData: { displayName?: string; photoURL?: string }) {
      try {
        if (!auth.currentUser) throw new Error('No authenticated user');

        if (profileData.displayName || profileData.photoURL) {
          await updateProfile(auth.currentUser, {
            displayName: profileData.displayName || auth.currentUser.displayName,
            photoURL: profileData.photoURL || auth.currentUser.photoURL
          });
        }

        await setDoc(doc(db, 'users', auth.currentUser.uid), {
          ...profileData,
          updatedAt: serverTimestamp()
        }, { merge: true });

        this.user = { ...this.user, ...profileData };
        return this.user;
      } catch (error) {
        console.error('❌ Profile update error:', error);
        throw error;
      }
    }
  }
});