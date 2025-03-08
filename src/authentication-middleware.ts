import { auth } from './firebase/init';
import { onAuthStateChanged } from 'firebase/auth';

/**
 * 🌟 AUTHENTICATION MIDDLEWARE 🌟
 * - Ensures only authenticated users can proceed.
 * - Blocks unauthorized access before a route loads.
 * - Can be used across both Vue Router & API requests.
 * 
 * @returns {Promise<boolean>} Resolves true if user is authenticated, false otherwise.
 */
export async function checkAuthState(): Promise<boolean> {
  return new Promise((resolve) => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log("✅ User authenticated:", user.email);
        resolve(true);
      } else {
        console.warn("🚨 User not authenticated! Redirecting...");
        resolve(false);
      }
    });
  });
}