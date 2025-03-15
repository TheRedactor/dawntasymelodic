// src/stores/user.ts
import { defineStore } from 'pinia';
import { ref, computed } from 'vue';
import { 
  getAuth, 
  signInWithEmailAndPassword, 
  createUserWithEmailAndPassword,
  signOut,
  updateProfile,
  onAuthStateChanged,
  sendPasswordResetEmail,
  sendEmailVerification,
  User as FirebaseUser
} from 'firebase/auth';
import {
  getFirestore,
  doc,
  setDoc,
  getDoc,
  updateDoc,
  collection,
  query,
  where,
  getDocs,
  serverTimestamp,
  Timestamp,
  increment
} from 'firebase/firestore';
import { getStorage, ref as storageRef, uploadBytes, getDownloadURL } from 'firebase/storage';
import { useRouter } from 'vue-router';

// User profile interface
export interface UserProfile {
  uid: string;
  displayName: string;
  email: string | null;
  photoURL: string | null;
  createdAt: Timestamp | null;
  lastLogin: Timestamp | null;
  preferences: {
    theme: 'light' | 'dark' | 'cosmic' | 'custom';
    notificationsEnabled: boolean;
    aiMode: 'default' | 'creative' | 'archmage';
  };
  stats: {
    messageCount: number;
    chatCount: number;
    streakDays: number;
    lastActive: Timestamp | null;
  };
  status: 'active' | 'inactive' | 'banned';
  plan: 'free' | 'premium' | 'rift';
  customization: {
    colorScheme: string;
    avatarStyle: string;
  };
}

export const useUserStore = defineStore('user', () => {
  // State
  const user = ref<FirebaseUser | null>(null);
  const userProfile = ref<UserProfile | null>(null);
  const isAuthenticated = ref(false);
  const isLoading = ref(true);
  const error = ref<string | null>(null);
  const lastMessage = ref<string | null>(null);
  
  // Firebase references
  const auth = getAuth();
  const db = getFirestore();
  const storage = getStorage();
  
  // Router for navigation
  const router = useRouter();

  // Computed properties
  const displayName = computed(() => userProfile.value?.displayName || user.value?.displayName || 'User');
  const photoURL = computed(() => userProfile.value?.photoURL || user.value?.photoURL || getDefaultAvatar());
  const userTheme = computed(() => userProfile.value?.preferences.theme || 'cosmic');
  const userPlan = computed(() => userProfile.value?.plan || 'free');
  const isAdmin = computed(() => user.value?.email === 'admin@dawntasy.com'); // Simple admin check
  const isEmailVerified = computed(() => user.value?.emailVerified || false);
  
  /**
   * Generate default avatar URL based on username
   */
  function getDefaultAvatar(): string {
    const name = user.value?.displayName || 'User';
    const initials = name.split(' ').map(n => n[0]).join('').toUpperCase();
    const colors = ['8B5CF6', '6D28D9', '4F46E5', '4338CA', '3730A3'];
    const colorIndex = Math.abs(name.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0) % colors.length);
    const bgColor = colors[colorIndex];
    
    return `https://ui-avatars.com/api/?name=${initials}&background=${bgColor}&color=fff&size=200`;
  }
  
  /**
   * Initialize user authentication state
   */
  function initAuth() {
    isLoading.value = true;
    error.value = null;
    
    return new Promise<void>((resolve) => {
      // Set up auth state listener
      const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
        try {
          if (currentUser) {
            user.value = currentUser;
            isAuthenticated.value = true;
            await fetchUserProfile();
            
            // Update last login time
            if (userProfile.value) {
              await updateDoc(doc(db, 'users', currentUser.uid), {
                'lastLogin': serverTimestamp(),
                'stats.lastActive': serverTimestamp()
              });
            }
            
            // Check if user is on auth page and redirect if needed
            const currentRoute = router.currentRoute.value;
            if (currentRoute.path === '/login' || currentRoute.path === '/register') {
              router.push('/');
            }
          } else {
            user.value = null;
            userProfile.value = null;
            isAuthenticated.value = false;
            
            // Check if current route requires auth
            const currentRoute = router.currentRoute.value;
            if (currentRoute.meta.requiresAuth) {
              router.push('/login');
            }
          }
        } catch (err: any) {
          console.error('Auth state change error:', err);
          error.value = err.message;
        } finally {
          isLoading.value = false;
          resolve();
        }
      });
      
      // Return unsubscribe function for cleanup
      return unsubscribe;
    });
  }
  
  /**
   * Fetch user profile from Firestore
   */
  async function fetchUserProfile() {
    if (!user.value) return null;
    
    try {
      const docRef = doc(db, 'users', user.value.uid);
      const docSnap = await getDoc(docRef);
      
      if (docSnap.exists()) {
        // Existing user - get profile data
        userProfile.value = docSnap.data() as UserProfile;
        return userProfile.value;
      } else {
        // New user - create profile with defaults
        const newProfile: UserProfile = {
          uid: user.value.uid,
          displayName: user.value.displayName || 'New User',
          email: user.value.email,
          photoURL: user.value.photoURL,
          createdAt: Timestamp.now(),
          lastLogin: Timestamp.now(),
          preferences: {
            theme: 'cosmic',
            notificationsEnabled: true,
            aiMode: 'default'
          },
          stats: {
            messageCount: 0,
            chatCount: 0,
            streakDays: 1,
            lastActive: Timestamp.now()
          },
          status: 'active',
          plan: 'free',
          customization: {
            colorScheme: 'default',
            avatarStyle: 'cosmic'
          }
        };
        
        // Save new profile to Firestore
        await setDoc(docRef, newProfile);
        
        // Update local state
        userProfile.value = newProfile;
        return newProfile;
      }
    } catch (err: any) {
      console.error('Error fetching user profile:', err);
      error.value = 'Failed to load user profile';
      return null;
    }
  }
  
  /**
   * Register new user
   */
  async function registerUser(email: string, password: string, username: string) {
    isLoading.value = true;
    error.value = null;
    
    try {
      // Check if username is already taken
      const usernameQuery = query(
        collection(db, 'usernames'),
        where('username', '==', username.toLowerCase())
      );
      
      const usernameSnapshot = await getDocs(usernameQuery);
      if (!usernameSnapshot.empty) {
        throw new Error('Username already taken');
      }
      
      // Create user in Firebase Auth
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const newUser = userCredential.user;
      
      // Update profile with username
      await updateProfile(newUser, {
        displayName: username
      });
      
      // Send email verification
      await sendEmailVerification(newUser);
      
      // Reserve username in Firestore
      await setDoc(doc(db, 'usernames', username.toLowerCase()), {
        uid: newUser.uid,
        username: username.toLowerCase(),
        displayName: username,
        createdAt: serverTimestamp()
      });
      
      // User profile will be created when auth state changes
      
      lastMessage.value = 'Account created successfully! Please verify your email.';
      isLoading.value = false;
      
      return { success: true, user: newUser };
    } catch (err: any) {
      console.error('Registration error:', err);
      error.value = err.message;
      isLoading.value = false;
      return { success: false, error: err.message };
    }
  }
  
  /**
   * Login existing user
   */
  async function loginUser(email: string, password: string, rememberMe: boolean = false) {
    isLoading.value = true;
    error.value = null;
    
    try {
      // Sign in with Firebase Auth
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      
      // Update streak counter
      const userDocRef = doc(db, 'users', userCredential.user.uid);
      const userDoc = await getDoc(userDocRef);
      
      if (userDoc.exists()) {
        const userData = userDoc.data();
        const lastActive = userData.stats?.lastActive;
        const now = new Date();
        
        // Check if it's a new day login
        if (lastActive) {
          const lastActiveDate = lastActive.toDate();
          const isNewDay = 
            now.getDate() !== lastActiveDate.getDate() ||
            now.getMonth() !== lastActiveDate.getMonth() ||
            now.getFullYear() !== lastActiveDate.getFullYear();
          
          // If it's a new day and within 48 hours of last login, increment streak
          const hoursSinceLastActive = (now.getTime() - lastActiveDate.getTime()) / (1000 * 60 * 60);
          
          if (isNewDay && hoursSinceLastActive < 48) {
            await updateDoc(userDocRef, {
              'stats.streakDays': increment(1),
              'stats.lastActive': serverTimestamp()
            });
          } else if (hoursSinceLastActive >= 48) {
            // Reset streak if more than 48 hours
            await updateDoc(userDocRef, {
              'stats.streakDays': 1,
              'stats.lastActive': serverTimestamp()
            });
          }
        }
      }
      
      lastMessage.value = 'Login successful!';
      isLoading.value = false;
      return { success: true, user: userCredential.user };
    } catch (err: any) {
      console.error('Login error:', err);
      error.value = err.message;
      isLoading.value = false;
      return { success: false, error: err.message };
    }
  }
  
  /**
   * Logout current user
   */
  async function logoutUser() {
    isLoading.value = true;
    error.value = null;
    
    try {
      await signOut(auth);
      lastMessage.value = 'Logout successful';
      return { success: true };
    } catch (err: any) {
      console.error('Logout error:', err);
      error.value = err.message;
      return { success: false, error: err.message };
    } finally {
      isLoading.value = false;
    }
  }
  
  /**
   * Reset user password
   */
  async function resetPassword(email: string) {
    isLoading.value = true;
    error.value = null;
    
    try {
      await sendPasswordResetEmail(auth, email);
      lastMessage.value = 'Password reset email sent';
      isLoading.value = false;
      return { success: true };
    } catch (err: any) {
      console.error('Password reset error:', err);
      error.value = err.message;
      isLoading.value = false;
      return { success: false, error: err.message };
    }
  }
  
  /**
   * Update user profile information
   */
  async function updateUserProfile(data: Partial<UserProfile>) {
    if (!user.value || !userProfile.value) {
      error.value = 'User not authenticated';
      return { success: false, error: 'User not authenticated' };
    }
    
    isLoading.value = true;
    error.value = null;
    
    try {
      const userDocRef = doc(db, 'users', user.value.uid);
      
      // Update displayName in Auth profile if it changed
      if (data.displayName && data.displayName !== user.value.displayName) {
        await updateProfile(user.value, {
          displayName: data.displayName
        });
        
        // Also update username reservation if displayName changed
        if (userProfile.value.displayName) {
          // Remove old username
          const oldUsernameRef = doc(db, 'usernames', userProfile.value.displayName.toLowerCase());
          await setDoc(oldUsernameRef, { active: false }, { merge: true });
          
          // Reserve new username
          const newUsernameRef = doc(db, 'usernames', data.displayName.toLowerCase());
          await setDoc(newUsernameRef, {
            uid: user.value.uid,
            username: data.displayName.toLowerCase(),
            displayName: data.displayName,
            createdAt: serverTimestamp(),
            active: true
          });
        }
      }
      
      // Update Firestore document
      await updateDoc(userDocRef, {
        ...data,
        updatedAt: serverTimestamp()
      });
      
      // Update local profile
      userProfile.value = {
        ...userProfile.value,
        ...data
      };
      
      lastMessage.value = 'Profile updated successfully';
      isLoading.value = false;
      return { success: true };
    } catch (err: any) {
      console.error('Profile update error:', err);
      error.value = err.message;
      isLoading.value = false;
      return { success: false, error: err.message };
    }
  }
  
  /**
   * Upload user profile picture
   */
  async function uploadProfilePicture(file: File) {
    if (!user.value) {
      error.value = 'User not authenticated';
      return { success: false, error: 'User not authenticated' };
    }
    
    isLoading.value = true;
    error.value = null;
    
    try {
      // Create storage reference
      const profilePicRef = storageRef(
        storage, 
        `profile_pictures/${user.value.uid}/${Date.now()}_${file.name}`
      );
      
      // Upload file
      await uploadBytes(profilePicRef, file);
      
      // Get download URL
      const downloadURL = await getDownloadURL(profilePicRef);
      
      // Update auth profile
      await updateProfile(user.value, {
        photoURL: downloadURL
      });
      
      // Update Firestore document
      const userDocRef = doc(db, 'users', user.value.uid);
      await updateDoc(userDocRef, {
        photoURL: downloadURL,
        updatedAt: serverTimestamp()
      });
      
      // Update local profile
      if (userProfile.value) {
        userProfile.value.photoURL = downloadURL;
      }
      
      lastMessage.value = 'Profile picture updated successfully';
      isLoading.value = false;
      return { success: true, photoURL: downloadURL };
    } catch (err: any) {
      console.error('Profile picture upload error:', err);
      error.value = err.message;
      isLoading.value = false;
      return { success: false, error: err.message };
    }
  }
  
  /**
   * Update user preferences
   */
  async function updatePreferences(preferences: Partial<UserProfile['preferences']>) {
    if (!user.value || !userProfile.value) {
      error.value = 'User not authenticated';
      return { success: false, error: 'User not authenticated' };
    }
    
    isLoading.value = true;
    error.value = null;
    
    try {
      const userDocRef = doc(db, 'users', user.value.uid);
      
      // Update Firestore document
      await updateDoc(userDocRef, {
        'preferences': {
          ...userProfile.value.preferences,
          ...preferences
        },
        updatedAt: serverTimestamp()
      });
      
      // Update local profile
      userProfile.value.preferences = {
        ...userProfile.value.preferences,
        ...preferences
      };
      
      lastMessage.value = 'Preferences updated successfully';
      isLoading.value = false;
      return { success: true };
    } catch (err: any) {
      console.error('Preferences update error:', err);
      error.value = err.message;
      isLoading.value = false;
      return { success: false, error: err.message };
    }
  }
  
  /**
   * Increment user stats
   */
  async function incrementStat(statName: keyof UserProfile['stats'], amount: number = 1) {
    if (!user.value) return;
    
    try {
      const userDocRef = doc(db, 'users', user.value.uid);
      
      await updateDoc(userDocRef, {
        [`stats.${statName}`]: increment(amount),
        'stats.lastActive': serverTimestamp()
      });
      
      // Update local profile if available
      if (userProfile.value && userProfile.value.stats) {
        const currentValue = userProfile.value.stats[statName];
        if (typeof currentValue === 'number') {
          userProfile.value.stats = {
            ...userProfile.value.stats,
            [statName]: currentValue + amount,
            lastActive: Timestamp.now()
          };
        }
      }
    } catch (err) {
      console.error(`Error incrementing stat ${statName}:`, err);
    }
  }
  
  /**
   * Check if user is Premium or Rift plan
   */
  function isPremiumUser() {
    return userProfile.value?.plan === 'premium' || userProfile.value?.plan === 'rift';
  }
  
  /**
   * Check if user is allowed to use Archmage mode
   */
  function canUseArchmageMode() {
    return userProfile.value?.plan === 'rift';
  }
  
  /**
   * Check user permissions
   */
  function hasPermission(permission: string): boolean {
    // Simple permission system based on user plan
    const basicPermissions = ['chat:create', 'chat:read', 'profile:edit'];
    const premiumPermissions = [...basicPermissions, 'chat:creative', 'chat:export'];
    const riftPermissions = [...premiumPermissions, 'chat:archmage', 'chat:priority'];
    const adminPermissions = [...riftPermissions, 'admin:all', 'users:manage'];
    
    if (isAdmin.value) {
      return adminPermissions.includes(permission);
    }
    
    switch (userProfile.value?.plan) {
      case 'rift':
        return riftPermissions.includes(permission);
      case 'premium':
        return premiumPermissions.includes(permission);
      default:
        return basicPermissions.includes(permission);
    }
  }
  
  // Return store methods and state
  return {
    // State
    user,
    userProfile,
    isAuthenticated,
    isLoading,
    error,
    lastMessage,
    
    // Computed
    displayName,
    photoURL,
    userTheme,
    userPlan,
    isAdmin,
    isEmailVerified,
    
    // Methods
    initAuth,
    fetchUserProfile,
    registerUser,
    loginUser,
    logoutUser,
    resetPassword,
    updateUserProfile,
    uploadProfilePicture,
    updatePreferences,
    incrementStat,
    isPremiumUser,
    canUseArchmageMode,
    hasPermission,
    getDefaultAvatar
  };
});