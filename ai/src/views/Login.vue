<template>
  <div class="cosmic-login">
    <!-- DYNAMIC STAR FIELD BACKGROUND -->
    <div class="star-field">
      <div v-for="n in 100" :key="`star-${n}`" class="star"
           :style="{
              '--size': `${Math.random() * 3 + 1}px`,
              '--x': `${Math.random() * 100}%`,
              '--y': `${Math.random() * 100}%`,
              '--duration': `${Math.random() * 50 + 20}s`
           }">
      </div>
    </div>

    <!-- ANIMATED GALAXY EFFECT -->
    <div class="galaxy-spiral"></div>

    <!-- ENERGY WAVES -->
    <div class="energy-field">
      <div class="energy-wave wave1"></div>
      <div class="energy-wave wave2"></div>
      <div class="energy-wave wave3"></div>
    </div>

    <!-- MAIN LOGIN PORTAL -->
    <div class="login-portal" :class="{ 'portal-active': portalActive }">
      <!-- PORTAL HEADER -->
      <div class="portal-header">
        <div class="cosmic-emblem">
          <div class="emblem-core"></div>
          <div class="emblem-ring"></div>
          <div class="emblem-particles"></div>
        </div>
        <h1 class="portal-title">COSMIC VOYAGER</h1>
        <p class="portal-subtitle">INTERDIMENSIONAL ACCESS PORTAL</p>
      </div>

      <!-- AUTHENTICATION INTERFACE -->
      <div class="portal-interface">
        <div class="interface-screen">
          <div class="screen-scanner" :class="{ 'scanning': isScanning }"></div>

          <!-- STATUS INDICATORS -->
          <div class="status-indicators">
            <div class="status-light" :class="{ 'active': loginStep >= 1 }"></div>
            <div class="status-light" :class="{ 'active': loginStep >= 2 }"></div>
            <div class="status-light" :class="{ 'active': loginStep >= 3 }"></div>
          </div>

          <!-- LOGIN FORM -->
          <form @submit.prevent="handleLogin" class="login-form">
            <div class="form-group" :class="{ 'error': errors.email }">
              <label for="email">QUANTUM IDENTIFIER</label>
              <div class="input-container">
                <input
                  id="email"
                  v-model="credentials.email"
                  type="email"
                  required
                  placeholder="your-id@cosmic-realm.com"
                  autocomplete="email"
                  @focus="activateField('email')"
                  @blur="validateEmail"
                  class="cosmic-input"
                />
                <div class="input-effects">
                  <div class="glow-effect"></div>
                  <div class="scan-line"></div>
                </div>
                <div class="field-icon">🌠</div>
              </div>
              <p v-if="errors.email" class="error-message">{{ errors.email }}</p>
            </div>

            <div class="form-group" :class="{ 'error': errors.password }">
              <label for="password">DIMENSIONAL KEY</label>
              <div class="input-container">
                <input
                  id="password"
                  v-model="credentials.password"
                  :type="showPassword ? 'text' : 'password'"
                  required
                  placeholder="••••••••••••"
                  autocomplete="current-password"
                  @focus="activateField('password')"
                  @blur="validatePassword"
                  class="cosmic-input"
                />
                <div class="input-effects">
                  <div class="glow-effect"></div>
                  <div class="scan-line"></div>
                </div>
                <div class="field-icon password-toggle" @click="showPassword = !showPassword">
                  {{ showPassword ? '👁️' : '🔒' }}
                </div>
              </div>
              <p v-if="errors.password" class="error-message">{{ errors.password }}</p>
            </div>

            <!-- REMEMBER ME & FORGOT PASSWORD -->
            <div class="form-options">
              <div class="remember-option">
                <input id="remember" v-model="rememberMe" type="checkbox" class="cosmic-checkbox">
                <label for="remember">REMEMBER COORDINATES</label>
              </div>
              <button type="button" @click="forgotPassword" class="forgot-btn">LOST KEY?</button>
            </div>

            <!-- LOGIN ERROR MESSAGE -->
            <div v-if="loginError" class="login-error">
              <div class="error-icon">⚠️</div>
              <p>{{ loginError }}</p>
            </div>

            <!-- LOGIN BUTTON -->
            <button
              type="submit"
              class="login-btn"
              :class="{ 'btn-loading': isLoading, 'btn-activated': isActivated }"
              :disabled="isLoading"
            >
              <span v-if="!isLoading">{{ isLoading ? 'ACTIVATING...' : 'ACTIVATE PORTAL' }}</span>
              <div v-else class="btn-loader"></div>
            </button>

            <!-- CREATE ACCOUNT LINK -->
            <div class="create-account">
              <p>NEED DIMENSIONAL ACCESS? <span @click="navigateToRegister" class="register-link">CREATE ACCOUNT</span></p>
            </div>
          </form>
        </div>
      </div>
    </div>

    <!-- SUCCESS PORTAL EFFECT -->
    <div v-if="loginSuccess" class="portal-success">
      <div class="warp-tunnel"></div>
      <div class="success-message">
        <h2>DIMENSION UNLOCKED</h2>
        <p>Preparing for quantum transport...</p>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, reactive, computed, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { getApp, getApps, initializeApp } from 'firebase/app';
import {
  getAuth,
  signInWithEmailAndPassword,
  setPersistence,
  browserLocalPersistence,
  browserSessionPersistence,
  sendPasswordResetEmail
} from 'firebase/auth';
import {
  getFirestore,
  doc,
  getDoc,
  updateDoc,
  serverTimestamp
} from 'firebase/firestore';
import gsap from 'gsap';

export default {
  name: 'LoginView',
  setup() {
    // Initialize Firebase with error prevention
    let app;
    const firebaseConfig = {
      apiKey: "YOUR_API_KEY",
      authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
      projectId: "YOUR_PROJECT_ID",
      storageBucket: "YOUR_PROJECT_ID.appspot.com",
      messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
      appId: "YOUR_APP_ID"
    };

    // FIX: Prevent duplicate Firebase initialization
    try {
      if (getApps().length === 0) {
        app = initializeApp(firebaseConfig);
      } else {
        app = getApp(); // Use existing app
      }
    } catch (error) {
      console.error("Firebase initialization error:", error);
    }

    const auth = getAuth(app);
    const db = getFirestore(app);
    const router = useRouter();

    // LOGIN STATE
    const credentials = reactive({
      email: '',
      password: ''
    });
    const rememberMe = ref(false);
    const showPassword = ref(false);
    const isLoading = ref(false);
    const loginError = ref('');
    const loginSuccess = ref(false);
    const portalActive = ref(false);
    const isScanning = ref(false);
    const isActivated = ref(false);
    const loginStep = ref(0);

    // FORM VALIDATION
    const errors = reactive({
      email: '',
      password: ''
    });

    const validateEmail = () => {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      errors.email = emailRegex.test(credentials.email) ? '' : 'INVALID QUANTUM ID FORMAT';
    };

    const validatePassword = () => {
      errors.password = credentials.password.length >= 8 ? '' : 'DIMENSIONAL KEY TOO SHORT (MIN. 8 CHARACTERS)';
    };

    const activateField = (field) => {
      errors[field] = ''; // Clear error when field is focused
      isActivated.value = true; // Activate login button style
    };

    // ANIMATION STATES
    const tunnelTimeline = ref(null);

    // LOGIN FUNCTION
    const handleLogin = async () => {
      validateEmail();
      validatePassword();

      if (errors.email || errors.password) {
        return; // Stop login if there are validation errors
      }

      isLoading.value = true;
      loginError.value = '';
      loginStep.value = 1; // Start login sequence

      try {
        // Set persistence based on "Remember Me"
        await setPersistence(auth, rememberMe.value ? browserLocalPersistence : browserSessionPersistence);
        loginStep.value = 2;

        // Sign in with email and password
        await signInWithEmailAndPassword(auth, credentials.email, credentials.password);
        loginStep.value = 3;

        // Simulate scanning effect before redirecting
        isScanning.value = true;

        // SUCCESSFUL LOGIN: PERFORM ANIMATION AND REDIRECT
        setTimeout(() => {
          isScanning.value = false;
          loginSuccess.value = true;
          portalActive.value = true;

          // Delay the actual redirection to ai.dawntasy.com/chat
          setTimeout(() => {
            window.location.href = 'https://ai.dawntasy.com/chat'; // REDIRECT HERE
          }, 2000); // Adjust delay as needed

        }, 2000); // Adjust the scanning simulation time
      } catch (error) {
        // Handle specific Firebase authentication errors
        switch (error.code) {
          case 'auth/user-not-found':
            loginError.value = 'QUANTUM ID NOT FOUND. ENSURE CORRECT REALM.';
            break;
          case 'auth/wrong-password':
            loginError.value = 'INCORRECT DIMENSIONAL KEY. VERIFY ACCESS CODE.';
            break;
          case 'auth/too-many-requests':
            loginError.value = 'ACCESS PORTAL OVERLOADED. RETRY IN A MOMENT.';
            break;
          default:
            loginError.value = 'FAILED TO ESTABLISH COSMIC CONNECTION. CHECK CREDENTIALS.';
            break;
        }
      } finally {
        isLoading.value = false;
        loginStep.value = 0;
      }
    };

    // FORGOT PASSWORD FUNCTION
    const forgotPassword = async () => {
      try {
        await sendPasswordResetEmail(auth, credentials.email);
        alert('PASSWORD RESET INSTRUCTIONS SENT TO YOUR QUANTUM ID.');
      } catch (error) {
        console.error('Forgot Password Error', error);
        alert('COULD NOT INITIATE PASSWORD RESET. ENSURE QUANTUM ID IS VALID.');
      }
    };

    // NAVIGATION FUNCTION
    const navigateToRegister = () => {
      router.push('/register');
    };

    onMounted(() => {
      // START ANIMATION
      portalActive.value = true;

      // GSAP ANIMATIONS FOR ENERGY WAVES
      gsap.to(".energy-wave", {
        duration: 2,
        x: "100px",
        yoyo: true,
        repeat: -1,
        ease: "sine.inOut",
        stagger: 0.2,
        opacity: 0.5
      });

      // GSAP ANIMATIONS FOR GALAXY SPIRAL
      gsap.to(".galaxy-spiral", {
        duration: 100,
        rotation: 360,
        repeat: -1,
        ease: "linear"
      });

      // TIMELINE FOR WARP TUNNEL
      tunnelTimeline.value = gsap.timeline({ repeat: -1, yoyo: false });
      tunnelTimeline.value.to(".warp-tunnel", {
        duration: 1,
        xPercent: 100,
        ease: "power4.inOut",
      });
    });

    return {
      credentials,
      rememberMe,
      showPassword,
      isLoading,
      loginError,
      loginSuccess,
      portalActive,
      isScanning,
      isActivated,
      loginStep,
      errors,
      validateEmail,
      validatePassword,
      activateField,
      handleLogin,
      forgotPassword,
      navigateToRegister,
      tunnelTimeline
    };
  }
};
</script>

<style scoped>
/* GENERAL COSMIC STYLES */
.cosmic-login {
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(to bottom, #040d21, #00040f);
  font-family: 'Roboto', sans-serif;
}

/* STAR FIELD BACKGROUND */
.star-field {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  z-index: 0;
}

.star {
  position: absolute;
  background: white;
  border-radius: 50%;
  animation: twinkle var(--duration) linear infinite;
  width: var(--size);
  height: var(--size);
  top: var(--y);
  left: var(--x);
  opacity: 0.7;
}

@keyframes twinkle {
  0%, 100% {
    opacity: 0.7;
  }
  50% {
    opacity: 0.3;
  }
}

/* GALAXY SPIRAL */
.galaxy-spiral {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 400px;
  height: 400px;
  background: url('https://i.imgur.com/zKIW3wA.png') center/cover;
  border-radius: 50%;
  opacity: 0.3;
  z-index: 1;
}

/* ENERGY FIELD */
.energy-field {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  z-index: 2;
  pointer-events: none;
}

.energy-wave {
  position: absolute;
  width: 200%;
  height: 200%;
  background: radial-gradient(ellipse at center, rgba(52, 152, 219, 0.2) 0%, rgba(0, 0, 0, 0) 70%);
  border-radius: 50%;
  opacity: 0;
}

.wave1 {
  transform: translate(-50%, -50%) scale(1);
}

.wave2 {
  transform: translate(-50%, -50%) scale(1.2);
}

.wave3 {
  transform: translate(-50%, -50%) scale(1.4);
}

/* MAIN LOGIN PORTAL */
.login-portal {
  position: relative;
  z-index: 3;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 15px;
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.18);
  padding: 3rem;
  width: 100%;
  max-width: 500px;
  text-align: center;
  transition: all 0.3s ease-in-out;
  opacity: 1;
  transform: scale(1);
}

.login-portal.portal-active {
  opacity: 1;
  transform: scale(1.05);
  box-shadow: 0 12px 48px 0 rgba(31, 38, 135, 0.5);
}

/* PORTAL HEADER */
.portal-header {
  margin-bottom: 2rem;
  color: #fff;
}

.cosmic-emblem {
  position: relative;
  width: 80px;
  height: 80px;
  margin: 0 auto 1rem;
}

.emblem-core {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 30px;
  height: 30px;
  background: linear-gradient(45deg, #6a5acd, #2e86ab);
  border-radius: 50%;
  box-shadow: 0 0 15px rgba(106, 90, 205, 0.8);
}

.emblem-ring {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  border: 3px dashed rgba(255, 255, 255, 0.3);
  animation: rotateRing 15s linear infinite;
}

@keyframes rotateRing {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

.emblem-particles {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  overflow: hidden;
}

.emblem-particles::before {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 150%;
  height: 150%;
  background: url('https://i.imgur.com/yTj2XyG.png') center/cover;
  opacity: 0.4;
  animation: floatParticles 20s linear infinite;
}

@keyframes floatParticles {
  from {
    transform: translate(-50%, -50%) rotate(0deg);
  }
  to {
    transform: translate(-50%, -50%) rotate(360deg);
  }
}

.portal-title {
  font-size: 2.2rem;
  margin-bottom: 0.5rem;
  text-shadow: 0 0 10px rgba(255, 255, 255, 0.5);
}

.portal-subtitle {
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.7);
}

/* AUTHENTICATION INTERFACE */
.portal-interface {
  position: relative;
  border-radius: 10px;
  overflow: hidden;
  margin-bottom: 2rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.4);
}

.interface-screen {
  position: relative;
  background: rgba(0, 0, 0, 0.8);
  padding: 2rem;
  border-radius: 8px;
}

.screen-scanner {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 5px;
  background: rgba(52, 152, 219, 0.7);
  box-shadow: 0 0 20px rgba(52, 152, 219, 0.8);
  animation: scan 3s linear infinite;
  transform: translateY(-100%);
}

.screen-scanner.scanning {
  transform: translateY(0);
}

@keyframes scan {
  0% {
    top: 0%;
  }
  100% {
    top: 100%;
  }
}

.status-indicators {
  display: flex;
  justify-content: center;
  margin-bottom: 1.5rem;
}

.status-light {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: #333;
  margin: 0 0.5rem;
  box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.5);
}

.status-light.active {
  background: #2ecc71;
  box-shadow: 0 0 10px #2ecc71;
}

/* LOGIN FORM */
.login-form {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
}

.form-group {
  width: 100%;
  margin-bottom: 1.5rem;
  text-align: left;
}

.form-group label {
  display: block;
  font-size: 0.8rem;
  color: rgba(255, 255, 255, 0.8);
  margin-bottom: 0.4rem;
  letter-spacing: 0.5px;
  text-transform: uppercase;
}

.input-container {
  position: relative;
  width: 100%;
}

.cosmic-input {
  width: 100%;
  padding: 0.8rem 1rem;
  background: rgba(0, 0, 0, 0.5);
  border: none;
  border-radius: 5px;
  color: #fff;
  font-size: 1rem;
  transition: box-shadow 0.3s ease;
  box-shadow: inset 0 2px 5px rgba(0, 0, 0, 0.3);
  outline: none;
  position: relative;
  z-index: 2;
}

.cosmic-input::placeholder {
  color: rgba(255, 255, 255, 0.5);
}

.cosmic-input:focus {
  box-shadow: 0 0 10px rgba(52, 152, 219, 0.7);
}

.input-effects {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  border-radius: 5px;
  overflow: hidden;
}

.glow-effect {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(52, 152, 219, 0.3);
  opacity: 0;
  transition: opacity 0.3s ease;
  border-radius: 5px;
}

.cosmic-input:focus + .input-effects .glow-effect {
  opacity: 1;
}

.scan-line {
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  height: 2px;
  background: linear-gradient(to right, transparent, rgba(52, 152, 219, 0.8), transparent);
  transform: translateY(-100%);
  animation: scanLine 4s linear infinite;
  border-radius: 2px;
}

@keyframes scanLine {
  0% {
    left: -100%;
  }
  100% {
    left: 100%;
  }
}

.field-icon {
  position: absolute;
  top: 50%;
  right: 1rem;
  transform: translateY(-50%);
  color: rgba(255, 255, 255, 0.6);
  font-size: 1.2rem;
  pointer-events: none;
  z-index: 1;
}

.password-toggle {
  cursor: pointer;
  pointer-events: auto;
}

.error-message {
  color: #e74c3c;
  font-size: 0.8rem;
  margin-top: 0.3rem;
}

.form-group.error .cosmic-input {
  border-color: #e74c3c;
  box-shadow: 0 0 8px rgba(231, 76, 60, 0.5);
}

/* FORM OPTIONS */
.form-options {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
  color: rgba(255, 255, 255, 0.7);
  font-size: 0.85rem;
}

.remember-option {
  display: flex;
  align-items: center;
}

.cosmic-checkbox {
  margin-right: 0.5rem;
  appearance: none;
  width: 16px;
  height: 16px;
  background: rgba(0, 0, 0, 0.5);
  border-radius: 3px;
  border: 1px solid rgba(255, 255, 255, 0.3);
  cursor: pointer;
  position: relative;
  outline: none;
}

.cosmic-checkbox:checked {
  background: #3498db;
  border-color: #3498db;
}

.cosmic-checkbox:checked::before {
  content: '✔';
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #fff;
  font-size: 0.8rem;
}

.forgot-btn {
  background: none;
  border: none;
  color: #3498db;
  cursor: pointer;
  padding: 0;
  font-size: inherit;
  outline: none;
  transition: color 0.3s ease;
}

.forgot-btn:hover {
  color: #5dade2;
}

/* LOGIN ERROR */
.login-error {
  background: rgba(231, 76, 60, 0.1);
  color: #e74c3c;
  border-left: 3px solid #e74c3c;
  padding: 1rem;
  margin-bottom: 1.5rem;
  border-radius: 5px;
  display: flex;
  align-items: center;
  font-size: 0.9rem;
}

.error-icon {
  margin-right: 0.8rem;
  font-size: 1.2rem;
}

/* LOGIN BUTTON */
.login-btn {
  padding: 1rem 2rem;
  border: none;
  border-radius: 8px;
  background: linear-gradient(45deg, #3498db, #2980b9);
  color: #fff;
  font-size: 1.1rem;
  cursor: pointer;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  font-weight: bold;
  position: relative;
  overflow: hidden;
  outline: none;
}

.login-btn:hover {
  transform: scale(1.05);
  box-shadow: 0 5px 15px rgba(52, 152, 219, 0.5);
}

.login-btn:disabled {
  opacity: 0.7;
  cursor: not-allowed;
  background: linear-gradient(45deg, #777, #555);
  box-shadow: none;
  transform: none;
}

.btn-loading {
  color: transparent;
}

.btn-loader {
  position: absolute;
  top: 50%;
  left: 50%;
  margin: -12px 0 0 -12px;
  width: 24px;
  height: 24px;
  border: 3px solid rgba(255, 255, 255, 0.3);
  border-radius: 50%;
  border-top-color: #fff;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}

.btn-activated {
  background: linear-gradient(45deg, #2ecc71, #27ae60);
}

/* CREATE ACCOUNT LINK */
.create-account {
  margin-top: 2rem;
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.7);
}

.register-link {
  color: #3498db;
  cursor: pointer;
  font-weight: bold;
  transition: color 0.3s ease;
}

.register-link:hover {
  color: #5dade2;
}

/* SUCCESS PORTAL EFFECT */
.portal-success {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.9);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  z-index: 4;
}

.warp-tunnel {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) translateX(-100%);
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background: url('https://i.imgur.com/5KkK3w1.gif') center/cover;
  z-index: 5;
}

.success-message {
  color: #fff;
  text-align: center;
  margin-top: 2rem;
  z-index: 5;
}

.success-message h2 {
  font-size: 2.5rem;
  margin-bottom: 0.8rem;
}

.success-message p {
  font-size: 1.2rem;
  color: rgba(255, 255, 255, 0.8);
}
</style>
