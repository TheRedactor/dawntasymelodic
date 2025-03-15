// RegisterView.vue - LEGENDARY COSMIC AUTHENTICATION 🚀
<template>
  <div class="cosmic-register">
    <!-- ANIMATED BACKGROUND PARTICLES -->
    <div class="particle-container">
      <div v-for="n in 50" :key="n" class="particle" 
           :style="{ 
             '--size': `${Math.random() * 6 + 1}px`,
             '--left': `${Math.random() * 100}%`,
             '--top': `${Math.random() * 100}%`,
             '--animation-delay': `${Math.random() * 5}s`,
           }">
      </div>
    </div>
    
    <!-- ANIMATED NEBULA EFFECT -->
    <div class="nebula-effect"></div>
    
    <!-- PULSATING RINGS -->
    <div class="cosmic-rings">
      <div class="ring ring1"></div>
      <div class="ring ring2"></div>
      <div class="ring ring3"></div>
    </div>

    <!-- MAIN CONTAINER -->
    <div class="register-container" :class="{ 'container-activated': formActive }">
      <!-- COSMIC LOGO -->
      <div class="logo-section">
        <div class="cosmic-logo">
          <div class="logo-star"></div>
          <div class="logo-orbit"></div>
        </div>
        <h1 class="logo-text">COSMIC VOYAGER</h1>
      </div>
      
      <!-- AUTH FORM -->
      <div class="register-card">
        <h2 class="register-title">{{ isLogin ? 'ACCESS THE COSMOS' : 'CREATE DIMENSIONAL ACCOUNT' }}</h2>
        
        <form @submit.prevent="handleRegister" class="register-form">
          <!-- Email Field -->
          <div class="form-group" :class="{ 'field-error': errors.email }">
            <label for="email">QUANTUM EMAIL</label>
            <div class="input-wrapper">
              <input 
                id="email"
                v-model="email" 
                type="email" 
                required
                autocomplete="email"
                @focus="focusField('email')"
                @blur="validateEmail"
                class="cosmic-input"
                :class="{ 'input-active': activeField === 'email', 'input-filled': email }"
              />
              <div class="input-glow"></div>
              <span class="input-icon">📡</span>
            </div>
            <p v-if="errors.email" class="error-message">{{ errors.email }}</p>
          </div>
          
          <!-- Password Field -->
          <div class="form-group" :class="{ 'field-error': errors.password }">
            <label for="password">STELLAR PASSWORD</label>
            <div class="input-wrapper">
              <input 
                id="password"
                v-model="password" 
                :type="showPassword ? 'text' : 'password'" 
                required
                autocomplete="new-password"
                @focus="focusField('password')"
                @blur="validatePassword"
                class="cosmic-input"
                :class="{ 'input-active': activeField === 'password', 'input-filled': password }"
              />
              <div class="input-glow"></div>
              <span class="toggle-password" @click="showPassword = !showPassword">
                {{ showPassword ? '👁️' : '🔒' }}
              </span>
            </div>
            
            <!-- Password Strength Meter -->
            <div v-if="!isLogin && password" class="password-strength">
              <div class="strength-meter">
                <div class="strength-fill" :style="{ width: `${passwordStrength.score * 25}%`, 
                                                   backgroundColor: strengthColor }"></div>
              </div>
              <span class="strength-text">{{ passwordStrength.message }}</span>
            </div>
            
            <p v-if="errors.password" class="error-message">{{ errors.password }}</p>
          </div>
          
          <!-- Confirm Password Field (Sign up only) -->
          <div v-if="!isLogin" class="form-group" :class="{ 'field-error': errors.confirmPassword }">
            <label for="confirmPassword">CONFIRM PASSWORD</label>
            <div class="input-wrapper">
              <input 
                id="confirmPassword"
                v-model="confirmPassword" 
                :type="showPassword ? 'text' : 'password'" 
                required
                autocomplete="new-password"
                @focus="focusField('confirmPassword')"
                @blur="validateConfirmPassword"
                class="cosmic-input"
                :class="{ 'input-active': activeField === 'confirmPassword', 'input-filled': confirmPassword }"
              />
              <div class="input-glow"></div>
            </div>
            <p v-if="errors.confirmPassword" class="error-message">{{ errors.confirmPassword }}</p>
          </div>
          
          <!-- Terms Checkbox (Sign up only) -->
          <div v-if="!isLogin" class="form-group terms-group" :class="{ 'field-error': errors.terms }">
            <div class="cosmic-checkbox">
              <input 
                id="terms" 
                v-model="agreeToTerms" 
                type="checkbox" 
                required
                @change="validateTerms"
              />
              <label for="terms">
                I agree to the <span class="terms-link" @click.prevent="showTerms = true">Cosmic Terms</span>
              </label>
            </div>
            <p v-if="errors.terms" class="error-message">{{ errors.terms }}</p>
          </div>
          
          <!-- Auth Error Message -->
          <div v-if="authError" class="auth-error">
            <div class="error-icon">⚠️</div>
            <p>{{ authError }}</p>
          </div>
          
          <!-- Submit Button -->
          <button 
            type="submit" 
            class="cosmic-btn register-btn"
            :class="{ 'btn-loading': isLoading }"
            :disabled="isLoading"
          >
            <span v-if="!isLoading">{{ isLogin ? 'ENTER THE COSMOS' : 'INITIATE JOURNEY' }}</span>
            <span v-else class="loader"></span>
          </button>
        </form>
        
        <!-- Toggle Login/Register -->
        <div class="auth-toggle">
          <p>
            {{ isLogin ? "Don't have a cosmic account?" : "Already have dimensional access?" }}
            <span @click="toggleAuthMode" class="toggle-link">
              {{ isLogin ? 'CREATE ONE' : 'ACCESS NOW' }}
            </span>
          </p>
        </div>
      </div>
    </div>
    
    <!-- Terms Modal -->
    <div v-if="showTerms" class="terms-modal">
      <div class="terms-content">
        <h3>COSMIC VOYAGER TERMS</h3>
        <div class="terms-body">
          <p>Welcome to the Cosmic Voyager experience! By creating an account, you agree to:</p>
          <ul>
            <li>Respect the universal laws of cosmic exploration</li>
            <li>Maintain the confidentiality of your dimensional access credentials</li>
            <li>Share your discoveries with the cosmic community</li>
            <li>Never attempt to disrupt the quantum fabric of our platform</li>
            <li>Accept that interdimensional travel carries inherent risks</li>
          </ul>
          <p>All account data is stored securely in our quantum-encrypted database. Your privacy across all dimensions is our priority.</p>
        </div>
        <button @click="showTerms = false" class="cosmic-btn close-terms-btn">ACKNOWLEDGE</button>
      </div>
    </div>
    
    <!-- Success Animation Container -->
    <div v-if="showSuccess" class="success-container">
      <div class="success-animation">
        <div class="checkmark-circle">
          <div class="checkmark"></div>
        </div>
        <h2>ACCOUNT CREATED!</h2>
        <p>Preparing your cosmic journey...</p>
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
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword,
  sendEmailVerification
} from 'firebase/auth';
import { 
  getFirestore, 
  doc, 
  setDoc, 
  serverTimestamp 
} from 'firebase/firestore';
import gsap from 'gsap';

export default {
  name: 'RegisterView',
  setup() {
    // Initialize Firebase - WITH ERROR PREVENTION
    let app;
    const firebaseConfig = {
      apiKey: "YOUR_API_KEY",
      authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
      projectId: "YOUR_PROJECT_ID",
      storageBucket: "YOUR_PROJECT_ID.appspot.com",
      messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
      appId: "YOUR_APP_ID"
    };

    // FIX FOR FIREBASE ERROR - Check if app already exists
    try {
      if (getApps().length === 0) {
        app = initializeApp(firebaseConfig);
      } else {
        app = getApp(); // Use existing app if it's already initialized
      }
    } catch (error) {
      console.error("Firebase initialization error:", error);
    }

    const auth = getAuth(app);
    const db = getFirestore(app);
    const router = useRouter();

    // Form state
    const email = ref('');
    const password = ref('');
    const confirmPassword = ref('');
    const agreeToTerms = ref(false);
    const isLogin = ref(false);
    const showPassword = ref(false);
    const isLoading = ref(false);
    const authError = ref('');
    const activeField = ref(null);
    const formActive = ref(false);
    const showTerms = ref(false);
    const showSuccess = ref(false);

    // Validation state
    const errors = reactive({
      email: '',
      password: '',
      confirmPassword: '',
      terms: ''
    });

    // Password strength computation
    const passwordStrength = computed(() => {
      if (!password.value) return { score: 0, message: '' };
      
      let score = 0;
      let message = 'Weak';
      
      // Length check
      if (password.value.length >= 8) score++;
      if (password.value.length >= 12) score++;
      
      // Complexity checks
      if (/[A-Z]/.test(password.value)) score++;
      if (/[0-9]/.test(password.value)) score++;
      if (/[^A-Za-z0-9]/.test(password.value)) score++;
      
      // Determine message
      if (score === 5) message = 'Extraordinary';
      else if (score === 4) message = 'Strong';
      else if (score === 3) message = 'Good';
      else if (score === 2) message = 'Moderate';
      
      return { score, message };
    });

    // Color for strength meter
    const strengthColor = computed(() => {
      const colors = [
        '#e74c3c', // Weak - Red
        '#e67e22', // Moderate - Orange
        '#f1c40f', // Good - Yellow
        '#2ecc71', // Strong - Green
        '#9b59b6'  // Extraordinary - Purple
      ];
      return colors[passwordStrength.value.score - 1] || colors[0];
    });

    // Field focus handler
    const focusField = (field) => {
      activeField.value = field;
    };

    // Validation methods
    const validateEmail = () => {
      activeField.value = null;
      errors.email = '';
      
      if (!email.value) {
        errors.email = 'Email is required';
        return false;
      }
      
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email.value)) {
        errors.email = 'Please enter a valid email address';
        return false;
      }
      
      return true;
    };

    const validatePassword = () => {
      activeField.value = null;
      errors.password = '';
      
      if (!password.value) {
        errors.password = 'Password is required';
        return false;
      }
      
      if (!isLogin.value) {
        if (password.value.length < 8) {
          errors.password = 'Password must be at least 8 characters';
          return false;
        }
        
        if (!/[A-Z]/.test(password.value)) {
          errors.password = 'Password must contain at least one uppercase letter';
          return false;
        }
        
        if (!/[0-9]/.test(password.value)) {
          errors.password = 'Password must contain at least one number';
          return false;
        }
      }
      
      return true;
    };

    const validateConfirmPassword = () => {
      activeField.value = null;
      errors.confirmPassword = '';
      
      if (!confirmPassword.value) {
        errors.confirmPassword = 'Please confirm your password';
        return false;
      }
      
      if (confirmPassword.value !== password.value) {
        errors.confirmPassword = 'Passwords do not match';
        return false;
      }
      
      return true;
    };

    const validateTerms = () => {
      errors.terms = '';
      
      if (!agreeToTerms.value) {
        errors.terms = 'You must agree to the terms';
        return false;
      }
      
      return true;
    };

    // Validate all fields
    const validateAll = () => {
      const emailValid = validateEmail();
      const passwordValid = validatePassword();
      
      if (isLogin.value) {
        return emailValid && passwordValid;
      } else {
        const confirmValid = validateConfirmPassword();
        const termsValid = validateTerms();
        return emailValid && passwordValid && confirmValid && termsValid;
      }
    };

    // Toggle between login and register
    const toggleAuthMode = () => {
      // Reset form state
      isLogin.value = !isLogin.value;
      authError.value = '';
      
      // Clear all errors
      Object.keys(errors).forEach(key => {
        errors[key] = '';
      });
      
      // Reset fields when switching to login
      if (isLogin.value) {
        confirmPassword.value = '';
        agreeToTerms.value = false;
      }
      
      // Animation for mode toggle
      gsap.fromTo(".register-card", 
        { scale: 0.95, opacity: 0.5 },
        { scale: 1, opacity: 1, duration: 0.5, ease: "back.out(1.7)" }
      );
    };

    // Handle form submission
    const handleRegister = async () => {
      // Validate form
      if (!validateAll()) return;
      
      isLoading.value = true;
      authError.value = '';
      
      try {
        if (isLogin.value) {
          // Login
          await signInWithEmailAndPassword(auth, email.value, password.value);
          router.push('/explore');
        } else {
          // Register
          const userCredential = await createUserWithEmailAndPassword(auth, email.value, password.value);
          const user = userCredential.user;
          
          // Send email verification
          await sendEmailVerification(user);
          
          // Create user document in Firestore
          await setDoc(doc(db, "users", user.uid), {
            uid: user.uid,
            email: user.email,
            createdAt: serverTimestamp(),
            lastLogin: serverTimestamp(),
            displayName: "Cosmic Explorer",
            level: 1,
            experience: 0,
            profileComplete: false
          });
          
          // Show success animation
          showSuccess.value = true;
          
          // Wait for animation, then redirect to onboarding
          setTimeout(() => {
            router.push('/onboarding');
          }, 2500);
        }
      } catch (error) {
        console.error("Authentication error:", error);
        
        // Handle specific Firebase errors with user-friendly messages
        if (error.code === 'auth/email-already-in-use') {
          authError.value = 'This email is already registered. Try logging in instead.';
        } else if (error.code === 'auth/invalid-email') {
          authError.value = 'Please enter a valid email address.';
        } else if (error.code === 'auth/weak-password') {
          authError.value = 'Your password is too weak. Please choose a stronger password.';
        } else if (error.code === 'auth/user-not-found' || error.code === 'auth/wrong-password') {
          authError.value = 'Invalid email or password. Please try again.';
        } else if (error.code === 'auth/too-many-requests') {
          authError.value = 'Too many unsuccessful login attempts. Please try again later.';
        } else {
          authError.value = 'An error occurred. Please try again later.';
        }
        
        isLoading.value = false;
      }
    };

    // Animations
    onMounted(() => {
      // Activate form with delay
      setTimeout(() => {
        formActive.value = true;
      }, 300);
      
      // Animate logo
      gsap.from(".cosmic-logo", {
        rotation: 360,
        scale: 0,
        opacity: 0,
        duration: 1.5,
        ease: "elastic.out(1, 0.5)"
      });
      
      // Animate title
      gsap.from(".logo-text", {
        y: -50,
        opacity: 0,
        duration: 1,
        delay: 0.5
      });
      
      // Animate form container
      gsap.from(".register-card", {
        y: 50,
        opacity: 0,
        duration: 1,
        delay: 0.8,
        ease: "power3.out"
      });
    });

    return {
      email,
      password,
      confirmPassword,
      agreeToTerms,
      isLogin,
      showPassword,
      isLoading,
      authError,
      errors,
      activeField,
      formActive,
      showTerms,
      showSuccess,
      passwordStrength,
      strengthColor,
      focusField,
      validateEmail,
      validatePassword,
      validateConfirmPassword,
      validateTerms,
      toggleAuthMode,
      handleRegister
    };
  }
};
</script>

<style scoped>
/* COSMIC STYLING FOR LEGENDARY REGISTER */
@import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700;900&family=Rajdhani:wght@300;400;700&display=swap');

.cosmic-register {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: radial-gradient(circle at center, #1a1a2e 0%, #16213e 50%, #0f0f29 100%);
  position: relative;
  overflow: hidden;
  padding: 2rem;
  perspective: 1000px;
}

/* COSMIC BACKGROUND EFFECTS */

/* Particles */
.particle-container {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  z-index: 0;
}

.particle {
  position: absolute;
  width: var(--size);
  height: var(--size);
  background: white;
  border-radius: 50%;
  left: var(--left);
  top: var(--top);
  animation: floatingParticle 20s linear infinite;
  animation-delay: var(--animation-delay);
  opacity: 0.6;
  box-shadow: 0 0 10px 2px rgba(255, 255, 255, 0.8);
}

@keyframes floatingParticle {
  0% {
    transform: translateY(0) translateX(0);
    opacity: 0;
  }
  50% {
    opacity: 0.8;
  }
  100% {
    transform: translateY(-100vh) translateX(50px);
    opacity: 0;
  }
}

/* Nebula Effect */
.nebula-effect {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: 
    radial-gradient(circle at 20% 30%, rgba(76, 201, 240, 0.1) 0%, transparent 50%),
    radial-gradient(circle at 80% 70%, rgba(172, 67, 255, 0.1) 0%, transparent 50%),
    radial-gradient(circle at 50% 50%, rgba(247, 37, 133, 0.05) 0%, transparent 70%);
  filter: blur(10px);
  animation: nebulaFloat 15s ease infinite alternate;
  z-index: 0;
}

@keyframes nebulaFloat {
  0% {
    background-position: 0% 0%;
  }
  100% {
    background-position: 100% 100%;
  }
}

/* Cosmic Rings */
.cosmic-rings {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 0;
}

.ring {
  position: absolute;
  border: 2px solid transparent;
  border-radius: 50%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.ring1 {
  width: 300px;
  height: 300px;
  border-color: rgba(157, 78, 221, 0.3);
  animation: pulsate 4s linear infinite;
}

.ring2 {
  width: 500px;
  height: 500px;
  border-color: rgba(76, 201, 240, 0.2);
  animation: pulsate 6s linear infinite reverse;
}

.ring3 {
  width: 700px;
  height: 700px;
  border-color: rgba(247, 37, 133, 0.1);
  animation: pulsate 8s linear infinite;
}

@keyframes pulsate {
  0% {
    transform: translate(-50%, -50%) scale(0.95);
    opacity: 0.6;
  }
  50% {
    transform: translate(-50%, -50%) scale(1);
    opacity: 1;
  }
  100% {
    transform: translate(-50%, -50%) scale(0.95);
    opacity: 0.6;
  }
}

/* MAIN CONTAINER */
.register-container {
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  max-width: 450px;
  width: 100%;
  transform: scale(0.9);
  opacity: 0;
  transition: all 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

.container-activated {
  transform: scale(1);
  opacity: 1;
}

/* LOGO SECTION */
.logo-section {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
}

.cosmic-logo {
  position: relative;
  width: 80px;
  height: 80px;
}

.logo-star {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 20px;
  height: 20px;
  background: #4cc9f0;
  border-radius: 50%;
  box-shadow: 0 0 20px #4cc9f0;
  animation: starPulse 3s ease-in-out infinite;
}

.logo-orbit {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 60px;
  height: 60px;
  border: 2px solid #9d4edd;
  border-radius: 50%;
  animation: orbitRotate 8s linear infinite;
}

.logo-orbit::before {
  content: '';
  position: absolute;
  width: 12px;
  height: 12px;
  background: #9d4edd;
  border-radius: 50%;
  top: -6px;
  left: 50%;
  transform: translateX(-50%);
  box-shadow: 0 0 10px #9d4edd;
}

@keyframes starPulse {
  0%, 100% {
    transform: translate(-50%, -50%) scale(1);
    box-shadow: 0 0 20px #4cc9f0;
  }
  50% {
    transform: translate(-50%, -50%) scale(1.2);
    box-shadow: 0 0 30px #4cc9f0;
  }
}

@keyframes orbitRotate {
  0% {
    transform: translate(-50%, -50%) rotate(0deg);
  }
  100% {
    transform: translate(-50%, -50%) rotate(360deg);
  }
}

.logo-text {
  font-family: 'Orbitron', sans-serif;
  font-weight: 900;
  font-size: 2rem;
  color: white;
  text-shadow: 0 0 15px rgba(76, 201, 240, 0.7);
  text-align: center;
  letter-spacing: 2px;
  margin: 0;
}

/* REGISTER CARD */
.register-card {
  background: rgba(10, 10, 40, 0.8);
  border: 1px solid rgba(157, 78, 221, 0.3);
  border-radius: 15px;
  padding: 2.5rem;
  width: 100%;
  box-shadow: 
    0 20px 40px rgba(0, 0, 0, 0.4),
    0 0 30px rgba(76, 201, 240, 0.2);
  backdrop-filter: blur(10px);
  transform-style: preserve-3d;
  transition: all 0.5s ease;
}

.register-title {
  font-family: 'Orbitron', sans-serif;
  font-size: 1.5rem;
  color: #4cc9f0;
  text-align: center;
  margin-bottom: 2rem;
  letter-spacing: 1px;
}

/* FORM STYLING */
.register-form {
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
  font-family: 'Rajdhani', sans-serif;
  font-weight: 600;
  font-size: 0.9rem;
  color: #e2e2e2;
  letter-spacing: 1px;
}

.input-wrapper {
  position: relative;
}

.cosmic-input {
  width: 100%;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  padding: 1rem 2.5rem 1rem 1rem;
  color: white;
  font-family: 'Rajdhani', sans-serif;
  font-size: 1rem;
  transition: all 0.3s ease;
}

.cosmic-input:focus {
  outline: none;
  border-color: #4cc9f0;
  box-shadow: 0 0 15px rgba(76, 201, 240, 0.3);
}

.input-active {
  border-color: #4cc9f0;
  box-shadow: 0 0 15px rgba(76, 201, 240, 0.3);
}

.input-filled {
  border-color: rgba(255, 255, 255, 0.3);
}

.input-glow {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 8px;
  pointer-events: none;
  z-index: -1;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.input-active + .input-glow {
  opacity: 1;
  box-shadow: 0 0 20px rgba(76, 201, 240, 0.4);
}

.input-icon, .toggle-password {
  position: absolute;
  right: 1rem;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
  font-size: 1.2rem;
}

/* Error styling */
.field-error .cosmic-input {
  border-color: #e74c3c;
  box-shadow: 0 0 15px rgba(231, 76, 60, 0.3);
}

.error-message {
  color: #e74c3c;
  font-size: 0.85rem;
  margin: 0.3rem 0 0;
  animation: shake 0.5s ease-in-out;
}

@keyframes shake {
  0%, 100% { transform: translateX(0); }
  20%, 60% { transform: translateX(-5px); }
  40%, 80% { transform: translateX(5px); }
}

/* Password strength meter */
.password-strength {
  margin-top: 0.5rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.strength-meter {
  flex-grow: 1;
  height: 4px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 2px;
  overflow: hidden;
}

.strength-fill {
  height: 100%;
  transition: all 0.3s ease;
}
</style>