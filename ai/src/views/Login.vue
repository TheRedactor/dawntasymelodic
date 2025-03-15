// LoginView.vue - ULTRA LEGENDARY COSMIC LOGIN 🌌
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
    
    // VALIDATION STATE
    const errors = reactive({
      email: '',
      password: ''
    });

    // ANIMATIONS & EFFECTS
    const activateField = (field) => {
      isScanning.value = true;
      
      // Update login steps for animation
      if (field === 'email') loginStep.value = 1;
      if (field === 'password') loginStep.value = 2;
      
      // Play scanning sound effect
      playSound('scan');
    };
    
    // Sound Effects System
    const playSound = (soundType) => {
      // Implement audio if needed
      console.log(`Playing sound: ${soundType}`);
    };

    // VALIDATION METHODS
    const validateEmail = () => {
      isScanning.value = false;
      errors.email = '';
      
      if (!credentials.email) {
        errors.email = 'Quantum Identifier required for dimensional access';
        return false;
      }
      
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(credentials.email)) {
        errors.email = 'Invalid Quantum Identifier format';
        return false;
      }
      
      return true;
    };

    const validatePassword = () => {
      isScanning.value = false;
      errors.password = '';
      
      if (!credentials.password) {
        errors.password = 'Dimensional Key required for portal activation';
        return false;
      }
      
      if (credentials.password.length < 6) {
        errors.password = 'Dimensional Key must be at least 6 characters';
        return false;
      }
      
      return true;
    };
    
    // "Forgot Password" flow
    const forgotPassword = async () => {
      if (!credentials.email) {
        errors.email = 'Enter your Quantum Identifier to reset your key';
        return;
      }
      
      if (!validateEmail()) return;
      
      try {
        isLoading.value = true;
        await sendPasswordResetEmail(auth, credentials.email);
        loginError.value = '';
        
        // Display success message
        const originalButtonText = document.querySelector('.login-btn').textContent;
        document.querySelector('.login-btn').textContent = 'RESET LINK SENT ✓';
        
        setTimeout(() => {
          document.querySelector('.login-btn').textContent = originalButtonText;
          isLoading.value = false;
        }, 3000);
        
      } catch (error) {
        console.error('Error sending reset email:', error);
        loginError.value = 'Unable to send reset link. Verify your Quantum Identifier.';
        isLoading.value = false;
      }
    };
    
    // HANDLE LOGIN SUBMISSION
    const handleLogin = async () => {
      // Validate inputs
      const isEmailValid = validateEmail();
      const isPasswordValid = validatePassword();
      
      if (!isEmailValid || !isPasswordValid) {
        return;
      }
      
      isLoading.value = true;
      loginError.value = '';
      loginStep.value = 3;
      
      try {
        // Set persistence based on "remember me" option
        await setPersistence(auth, rememberMe.value ? browserLocalPersistence : browserSessionPersistence);
        
        // Activate button effect
        isActivated.value = true;
        
        // Play activation sound
        playSound('activate');
        
        // Login with Firebase
        const userCredential = await signInWithEmailAndPassword(
          auth, 
          credentials.email, 
          credentials.password
        );
        
        const user = userCredential.user;
        
        // Update last login time in Firestore
        try {
          const userRef = doc(db, "users", user.uid);
          const userSnap = await getDoc(userRef);
          
          if (userSnap.exists()) {
            await updateDoc(userRef, {
              lastLogin: serverTimestamp()
            });
          }
        } catch (dbError) {
          console.error("Error updating last login:", dbError);
          // Non-critical error, continue login process
        }
        
        // Show success animation
        loginSuccess.value = true;
        
        // Redirect after animation completes
        setTimeout(() => {
          router.push('/dashboard');
        }, 2500);
        
      } catch (error) {
        console.error('Login error:', error);
        isLoading.value = false;
        isActivated.value = false;
        
        // Handle specific Firebase auth errors
        if (error.code === 'auth/user-not-found' || error.code === 'auth/wrong-password') {
          loginError.value = 'Invalid Quantum Identifier or Dimensional Key';
          playSound('error');
        } else if (error.code === 'auth/too-many-requests') {
          loginError.value = 'Access temporarily disabled. Too many failed attempts.';
        } else {
          loginError.value = 'Portal activation failed. Try again.';
        }
      }
    };
    
    const navigateToRegister = () => {
      router.push('/register');
    };
    
    // Initialize animations on component mount
    onMounted(() => {
      // Activate portal with slight delay for dramatic effect
      setTimeout(() => {
        portalActive.value = true;
        
        // Intro animation sequence
        gsap.fromTo(".portal-title", 
          { opacity: 0, y: -50 },
          { opacity: 1, y: 0, duration: 1.2, ease: "power3.out" }
        );
        
        gsap.fromTo(".portal-subtitle", 
          { opacity: 0 },
          { opacity: 1, duration: 1.5, delay: 0.3 }
        );
        
        gsap.fromTo(".cosmic-emblem", 
          { scale: 0, rotation: -180 },
          { scale: 1, rotation: 0, duration: 1.8, ease: "elastic.out(1, 0.5)" }
        );
        
        gsap.fromTo(".interface-screen", 
          { opacity: 0, scale: 0.9 },
          { opacity: 1, scale: 1, duration: 1, delay: 0.7, ease: "power2.out" }
        );
        
        // Play portal activation sound
        playSound('portal');
      }, 300);
    });

    return {
      credentials,
      rememberMe,
      showPassword,
      isLoading,
      loginError,
      errors,
      portalActive,
      isScanning,
      isActivated,
      loginSuccess,
      loginStep,
      activateField,
      validateEmail,
      validatePassword,
      handleLogin,
      forgotPassword,
      navigateToRegister
    };
  }
};
</script>

<style scoped>
/* COSMIC LOGIN STYLING */
@import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;500;700;900&family=Rajdhani:wght@300;400;500;700&display=swap');

.cosmic-login {
  min-height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: radial-gradient(ellipse at bottom, #1B2735 0%, #090A0F 100%);
  position: relative;
  overflow: hidden;
  font-family: 'Rajdhani', sans-serif;
  color: #e1e6ff;
  perspective: 1000px;
}

/* STAR FIELD BACKGROUND */
.star-field {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
  perspective: 340px;
}

.star {
  position: absolute;
  width: var(--size);
  height: var(--size);
  background: white;
  border-radius: 50%;
  top: var(--y);
  left: var(--x);
  animation: starMovement var(--duration) linear infinite;
  box-shadow: 0 0 4px 1px rgba(255, 255, 255, 0.4);
}

@keyframes starMovement {
  0% {
    transform: rotateZ(0deg) translateZ(0);
    opacity: 0;
  }
  10% {
    opacity: 1;
  }
  90% {
    opacity: 1;
  }
  100% {
    transform: rotateZ(360deg) translateZ(200px);
    opacity: 0;
  }
}

/* GALAXY SPIRAL EFFECT */
.galaxy-spiral {
  position: fixed;
  width: 200vmax;
  height: 200vmax;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: 
    radial-gradient(ellipse at center, transparent 0%, #090A0F 70%),
    conic-gradient(
      from 0deg, 
      rgba(23, 36, 84, 0.2) 0%, 
      rgba(76, 201, 240, 0.1) 25%,
      rgba(142, 45, 226, 0.1) 50%,
      rgba(243, 75, 143, 0.1) 75%, 
      rgba(23, 36, 84, 0.2) 100%
    );
  opacity: 0.5;
  border-radius: 50%;
  animation: galaxyRotate 180s linear infinite;
  z-index: 0;
  filter: blur(30px);
}

@keyframes galaxyRotate {
  0% { transform: translate(-50%, -50%) rotate(0deg); }
  100% { transform: translate(-50%, -50%) rotate(360deg); }
}

/* ENERGY FIELD WAVES */
.energy-field {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 150vmax;
  height: 150vmax;
  z-index: 0;
  opacity: 0.5;
}

.energy-wave {
  position: absolute;
  top: 50%;
  left: 50%;
  border: 1px solid transparent;
  border-radius: 50%;
}

.wave1 {
  width: 100%;
  height: 100%;
  transform: translate(-50%, -50%);
  border-color: rgba(76, 201, 240, 0.3);
  animation: pulseWave 15s linear infinite;
}

.wave2 {
  width: 80%;
  height: 80%;
  transform: translate(-50%, -50%);
  border-color: rgba(148, 0, 211, 0.3);
  animation: pulseWave 12s linear infinite reverse;
}

.wave3 {
  width: 60%;
  height: 60%;
  transform: translate(-50%, -50%);
  border-color: rgba(243, 75, 143, 0.3);
  animation: pulseWave 10s linear infinite;
}

@keyframes pulseWave {
  0% { transform: translate(-50%, -50%) scale(0.8); opacity: 0.2; }
  50% { transform: translate(-50%, -50%) scale(1); opacity: 1; }
  100% { transform: translate(-50%, -50%) scale(0.8); opacity: 0.2; }
}

/* MAIN LOGIN PORTAL */
.login-portal {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 500px;
  z-index: 10;
  transform: perspective(1000px) rotateX(20deg) scale(0.8);
  opacity: 0;
  transition: all 1.2s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.portal-active {
  transform: perspective(1000px) rotateX(0) scale(1);
  opacity: 1;
}

/* PORTAL HEADER */
.portal-header {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 2rem;
  width: 100%;
}

.cosmic-emblem {
  position: relative;
  width: 100px;
  height: 100px;
  margin-bottom: 1rem;
}

.emblem-core {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 30px;
  height: 30px;
  background: #4cc9f0;
  border-radius: 50%;
  box-shadow: 0 0 20px #4cc9f0, 0 0 60px rgba(76, 201, 240, 0.5);
  animation: pulsateCore 4s ease-in-out infinite;
}

.emblem-ring {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 80px;
  height: 80px;
  border: 3px solid transparent;
  border-top-color: #8e2de2;
  border-radius: 50%;
  animation: rotateRing 8s linear infinite;
}

.emblem-ring::before {
  content: '';
  position: absolute;
  top: -10px;
  left: 50%;
  width: 15px;
  height: 15px;
  background: #8e2de2;
  border-radius: 50%;
  box-shadow: 0 0 15px #8e2de2;
}

.emblem-particles {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  animation: rotateParticles 12s linear infinite reverse;
}

.emblem-particles::before,
.emblem-particles::after {
  content: '';
  position: absolute;
  width: 10px;
  height: 10px;
  background: #f34b8f;
  border-radius: 50%;
  box-shadow: 0 0 10px #f34b8f;
}

.emblem-particles::before {
  top: 10px;
  left: 50%;
}

.emblem-particles::after {
  bottom: 10px;
  left: 50%;
}

@keyframes pulsateCore {
  0%, 100% { transform: translate(-50%, -50%) scale(1); box-shadow: 0 0 20px #4cc9f0, 0 0 60px rgba(76, 201, 240, 0.5); }
  50% { transform: translate(-50%, -50%) scale(1.3); box-shadow: 0 0 30px #4cc9f0, 0 0 90px rgba(76, 201, 240, 0.7); }
}

@keyframes rotateRing {
  0% { transform: translate(-50%, -50%) rotate(0); }
  100% { transform: translate(-50%, -50%) rotate(360deg); }
}

@keyframes rotateParticles {
  0% { transform: rotate(0); }
  100% { transform: rotate(360deg); }
}

.portal-title {
  font-family: 'Orbitron', sans-serif;
  font-weight: 900;
  font-size: 2.5rem;
  text-align: center;
  margin: 0;
  background: linear-gradient(to right, #4cc9f0, #8e2de2, #f34b8f);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  text-shadow: 0 0 15px rgba(76, 201, 240, 0.5);
  letter-spacing: 2px;
}

.portal-subtitle {
  font-size: 1rem;
  font-weight: 500;
  text-align: center;
  margin: 0.5rem 0 0;
  color: rgba(225, 230, 255, 0.7);
  letter-spacing: 3px;
}

/* INTERFACE SCREEN */
.portal-interface {
  width: 100%;
  perspective: 800px;
}

.interface-screen {
  background: rgba(10, 15, 30, 0.7);
  border: 1px solid rgba(76, 201, 240, 0.3);
  border-radius: 15px;
  padding: 2.5rem;
  width: 100%;
  position: relative;
  overflow: hidden;
  backdrop-filter: blur(10px);
  box-shadow: 
    0 20px 40px rgba(0, 0, 0, 0.4),
    0 0 80px rgba(76, 201, 240, 0.1),
    inset 0 0 15px rgba(76, 201, 240, 0.1);
}

.screen-scanner {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 4px;
  background: linear-gradient(to right, transparent, #4cc9f0, transparent);
  opacity: 0;
  z-index: 1;
  box-shadow: 0 0 15px #4cc9f0;
}

.scanning {
  opacity: 1;
  animation: scanning 2s ease-in-out infinite;
}

@keyframes scanning {
  0% { top: 0; }
  100% { top: 100%; }
}

/* STATUS INDICATORS */
.status-indicators {
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 2rem;
}

.status-light {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: rgba(225, 230, 255, 0.2);
  position: relative;
  transition: all 0.3s ease;
}

.status-light.active {
  background: #4cc9f0;
  box-shadow: 0 0 10px #4cc9f0;
}

/* LOGIN FORM */
.login-form {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.form-group label {
  font-family: 'Orbitron', sans-serif;
  font-size: 0.8rem;
  font-weight: 500;
  color: rgba(225, 230, 255, 0.7);
  letter-spacing: 1px;
}

.input-container {
  position: relative;
}

.cosmic-input {
  width: 100%;
  background: rgba(10, 20, 40, 0.6);
  border: 1px solid rgba(76, 201, 240, 0.3);
  border-radius: 8px;
  padding: 1rem 2.5rem 1rem 1rem;
  color: #e1e6ff;
  font-family: 'Rajdhani', sans-serif;
  font-size: 1rem;
  transition: all 0.3s ease;
}

.cosmic-input:focus {
  outline: none;
  border-color: #4cc9f0;
  box-shadow: 0 0 15px rgba(76, 201, 240, 0.3);
}

.cosmic-input::placeholder {
  color: rgba(225, 230, 255, 0.3);
}

.input-effects {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
}

.glow-effect {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 8px;
  opacity: 0;
}

.cosmic-input:focus ~ .input-effects .glow-effect {
  opacity: 1;
  box-shadow: 0 0 20px rgba(76, 201, 240, 0.3);
}

.scan-line {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 2px;
  background: linear-gradient(to right, transparent, #4cc9f0, transparent);
  opacity: 0;
  transform: translateY(-10px);
}

.cosmic-input:focus ~ .input-effects .scan-line {
  opacity: 1;
  animation: inputScan 2s ease-in-out infinite;
}

@keyframes inputScan {
  0% { top: 0; opacity: 0; }
  10% { opacity: 1; }
  90% { opacity: 1; }
  100% { top: 100%; opacity: 0; }
}

.field-icon {
  position: absolute;
  right: 1rem;
  top: 50%;
  transform: translateY(-50%);
  font-size: 1.2rem;
}

.password-toggle {
  cursor: pointer;
}

/* Error styling */
.form-group.error .cosmic-input {
  border-color: #f34b8f;
  box-shadow: 0 0 15px rgba(243, 75, 143, 0.3);
}

.error-message {
  color: #f34b8f;
  font-size: 0.85rem;
  margin: 0.3rem 0 0;
  animation: fadeIn 0.3s ease-in-out;
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(-5px); }
  to { opacity: 1; transform: translateY(0); }
}

/* FORM OPTIONS */
.form-options {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 0.5rem;
}

.remember-option {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.cosmic-checkbox {
  appearance: none;
  width: 18px;
  height: 18px;
  border: 2px solid rgba(76, 201, 240, 0.5);
  border-radius: 4px;
  background: rgba(10, 20, 40, 0.6);
  position: relative;
  cursor: pointer;
  vertical-align: middle;
}

.cosmic-checkbox:checked {
  background: #4cc9f0;
  border-color: #4cc9f0;
}

.cosmic-checkbox:checked::after {
  content: '✓';
  position: absolute;
  color: white;
  font-size: 12px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.remember-option label {
  font-size: 0.8rem;
  color: rgba(225, 230, 255, 0.7);
  cursor: pointer;
}

.forgot-btn {
  background: transparent;
  border: none;
  color: #4cc9f0;
  font-size: 0.8rem;
  font-family: 'Rajdhani', sans-serif;
  cursor: pointer;
  transition: all 0.3s ease;
}

.forgot-btn:hover {
  color: #8e2de2;
  text-decoration: underline;
}

/* LOGIN ERROR */
.login-error {
  background: rgba(243, 75, 143, 0.1);
  border-left: 3px solid #f34b8f;
  padding: 1rem;
  border-radius: 5px;
  display: flex;
  align-items: center;
  gap: 1rem;
  animation: fadeIn 0.5s ease-in-out;
}

.error-icon {
  font-size: 1.2rem;
}

.login-error p {
  margin: 0;
  font-size: 0.9rem;
  color: #f34b8f;
}

/* LOGIN BUTTON */
.login-btn {
  width: 100%;
  background: linear-gradient(45deg, #4cc9f0, #8e2de2, #f34b8f);
  background-size: 200% 200%;
  color: white;
  border: none;
  border-radius: 30px;
  padding: 1rem 2rem;
  font-family: 'Orbitron', sans-serif;
  font-size: 1rem;
  font-weight: 700;
  letter-spacing: 1px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition: all 0.3s ease;
  box-shadow: 
    0 10px 20px rgba(0, 0, 0, 0.2), 
    0 0 30px rgba(76, 201, 240, 0.3);
  height: 55px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 1rem;
}

.login-btn::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    90deg, 
    transparent, 
    rgba(255, 255, 255, 0.2), 
    transparent
  );
  transition: all 0.5s ease;
}

.login-btn:hover {
  background-position: right center;
  transform: translateY(-3px);
  box-shadow: 
    0 15px 30px rgba(0, 0, 0, 0.3), 
    0 0 50px rgba(76, 201, 240, 0.5);
}

.login-btn:hover::before {
  left: 100%;
}

.login-btn:active {
  transform: translateY(1px);
}

.btn-loading {
  cursor: not-allowed;
  background: linear-gradient(45deg, #4cc9f0, #8e2de2);
  background-size: 200% 200%;
  animation: gradientFlow 2s ease infinite;
}

.btn-activated {
  animation: btnActivated 1s ease forwards;
}

@keyframes gradientFlow {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}

@keyframes btnActivated {
  0% { box-shadow: 0 0 20px rgba(76, 201, 240, 0.5); }
  50% { box-shadow: 0 0 50px rgba(76, 201, 240, 0.8), 0 0 100px rgba(142, 45, 226, 0.5); }
  100% { box-shadow: 0 0 20px rgba(76, 201, 240, 0.5); }
}

.btn-loader {
  width: 20px;
  height: 20px;
  border: 3px solid rgba(255, 255, 255, 0.3);
  border-radius: 50%;
  border-top-color: white;
  animation: spin 1s ease-in-out infinite;
}

@keyframes spin {
  to { transform: rotate(360deg); }
}

/* CREATE ACCOUNT LINK */
.create-account {
  text-align: center;
  margin-top: 1.5rem;
}

.create-account p {
  font-size: 0.9rem;
  color: rgba(225, 230, 255, 0.7);
}

.register-link {
  color: #4cc9f0;
  font-weight: 700;
  cursor: pointer;
  margin-left: 0.3rem;
  transition: all 0.3s ease;
}

.register-link:hover {
  color: #f34b8f;
  text-decoration: underline;
}

/* SUCCESS PORTAL EFFECT */
.portal-success {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;
  animation: successFadeIn 0.5s ease-in-out forwards;
}

.warp-tunnel {
  position: absolute;
  width: 100vmax;
  height: 100vmax;
  background: 
    radial-gradient(circle at center, rgba(76, 201, 240, 0.8) 0%, transparent 5%),
    repeating-radial-gradient(
      circle at center,
      rgba(142, 45, 226, 0.3) 0%,
      rgba(142, 45, 226, 0.3) 5%,
      transparent 5%,
      transparent 10%
    );
  border-radius: 50%;
  animation: warpEffect 2s linear forwards;
  transform-origin: center;
}

@keyframes warpEffect {
  0% {
    transform: scale(0);
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    transform: scale(5);
    opacity: 0;
  }
}

.success-message {
  position: relative;
  text-align: center;
  z-index: 101;
}

.success-message h2 {
  font-family: 'Orbitron', sans-serif;
  font-size: 2rem;
  color: white;
  margin: 0 0 0.5rem;
  animation: textPulse 2s ease-in-out infinite;
}

.success-message p {
  color: rgba(255, 255, 255, 0.7);
  margin: 0;
}

@keyframes textPulse {
  0%, 100% { text-shadow: 0 0 20px rgba(76, 201, 240, 0.7); }
  50% { text-shadow: 0 0 40px rgba(76, 201, 240, 1), 0 0 80px rgba(142, 45, 226, 0.8); }
}

@keyframes successFadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

/* RESPONSIVE DESIGN */
@media (max-width: 768px) {
  .portal-title {
    font-size: 1.8rem;
  }
  
  .cosmic-emblem {
    width: 80px;
    height: 80px;
  }
  
  .interface-screen {
    padding: 1.5rem;
  }
  
  .login-portal {
    width: 90%;
  }
}

@media (max-width: 480px) {
  .portal-title {
    font-size: 1.5rem;
  }
  
  .cosmic-emblem {
    width: 60px;
    height: 60px;
  }
  
  .form-options {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.8rem;
  }
  
  .interface-screen {
    padding: 1.2rem;
  }
}
</style>