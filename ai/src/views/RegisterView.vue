<template>
  <div class="auth-container">
    <div class="auth-card" data-aos="fade-up" data-aos-duration="800">
      <!-- ✨ COSMIC PARTICLES ✨ -->
      <div class="cosmic-particles">
        <div v-for="n in 30" :key="`particle-${n}`" 
             class="particle"
             :style="{
               '--size': `${Math.random() * 4 + 1}px`,
               '--x': `${Math.random() * 100}%`,
               '--y': `${Math.random() * 100}%`,
               '--duration': `${Math.random() * 5 + 3}s`,
               '--delay': `${Math.random() * -5}s`,
               '--rotation': `${Math.random() * 360}deg`,
               '--color': `hsl(${Math.random() * 60 + 240}, 70%, 60%)`
             }"
        ></div>
      </div>
      
      <!-- 🚀 COSMIC PORTAL 🚀 -->
      <div class="cosmic-portal" ref="cosmicPortal">
        <div class="portal-rings">
          <div class="portal-ring"></div>
          <div class="portal-ring"></div>
          <div class="portal-ring"></div>
        </div>
        <div class="portal-core"></div>
      </div>
      
      <!-- 🔮 REGISTER FORM HEADER 🔮 -->
      <h1 class="auth-title" ref="authTitle">
        <span class="title-text">Begin Your Cosmic Journey</span>
        <div class="title-underline"></div>
      </h1>
      
      <!-- ⚡ REGISTER FORM CONTAINER ⚡ -->
      <form @submit.prevent="handleRegister" class="auth-form" ref="authForm">
        <!-- 🔔 ERROR ALERT 🔔 -->
        <div v-if="error" class="error-alert">
          <div class="alert-icon">!</div>
          <p class="alert-message">{{ error }}</p>
        </div>
        
        <!-- 👤 USERNAME FIELD 👤 -->
        <div class="form-group" :class="{ 'focused': focusedField === 'name' }">
          <label for="name" class="form-label">Your Name</label>
          <div class="input-wrapper">
            <div class="input-icon">👤</div>
            <input
              id="name"
              v-model="name"
              type="text"
              class="form-input"
              placeholder="Enter your cosmic identity"
              required
              @focus="focusField('name')"
              @blur="blurField"
              ref="nameInput"
            />
            <div class="input-glow"></div>
          </div>
        </div>
        
        <!-- 📧 EMAIL FIELD 📧 -->
        <div class="form-group" :class="{ 'focused': focusedField === 'email' }">
          <label for="email" class="form-label">Email Address</label>
          <div class="input-wrapper">
            <div class="input-icon">📧</div>
            <input
              id="email"
              v-model="email"
              type="email"
              class="form-input"
              placeholder="your.email@example.com"
              required
              @focus="focusField('email')"
              @blur="blurField"
            />
            <div class="input-glow"></div>
          </div>
        </div>
        
        <!-- 🔒 PASSWORD FIELD 🔒 -->
        <div class="form-group" :class="{ 'focused': focusedField === 'password' }">
          <label for="password" class="form-label">Password</label>
          <div class="input-wrapper">
            <div class="input-icon">🔒</div>
            <input
              id="password"
              v-model="password"
              :type="showPassword ? 'text' : 'password'"
              class="form-input"
              placeholder="Create a strong password"
              required
              @focus="focusField('password')"
              @blur="blurField"
            />
            <button 
              type="button" 
              class="password-toggle"
              @click="showPassword = !showPassword"
            >
              <span class="eye-icon">{{ showPassword ? '👁️' : '👁️‍🗨️' }}</span>
            </button>
            <div class="input-glow"></div>
          </div>
          
          <!-- ⚡ PASSWORD STRENGTH INDICATOR ⚡ -->
          <div class="password-strength" v-if="password">
            <div class="strength-bars">
              <div 
                v-for="n in 4" 
                :key="`strength-${n}`" 
                class="strength-bar"
                :class="{ 'active': passwordStrength >= n }"
              ></div>
            </div>
            <span class="strength-text">{{ passwordStrengthText }}</span>
          </div>
        </div>
        
        <!-- 📜 TERMS AND CONDITIONS 📜 -->
        <div class="terms-check">
          <label class="terms-label">
            <input type="checkbox" v-model="agreeToTerms" required>
            <span class="checkmark"></span>
            <span class="label-text">
              I agree to the <a href="#" class="terms-link" @click.prevent="showTerms = true">Terms of Service</a>
              and <a href="#" class="terms-link" @click.prevent="showTerms = true">Privacy Policy</a>
            </span>
          </label>
        </div>
        
        <!-- 🚀 REGISTER BUTTON 🚀 -->
        <button 
          type="submit" 
          class="register-button" 
          :disabled="isLoading || !agreeToTerms"
          @mouseenter="animateParticles"
        >
          <span v-if="isLoading" class="loading-spinner"></span>
          <span v-else class="button-text">Create Account</span>
          <span class="button-glow"></span>
        </button>
      </form>
      
      <!-- 🔄 LOGIN LINK 🔄 -->
      <div class="auth-footer">
        <p>Already have an account?</p>
        <router-link to="/login" class="login-link">Sign In</router-link>
      </div>
      
      <!-- 📜 TERMS MODAL 📜 -->
      <div v-if="showTerms" class="terms-modal">
        <div class="modal-content" data-aos="zoom-in" data-aos-duration="300">
          <div class="modal-header">
            <h2 class="modal-title">Terms of Service</h2>
            <button class="close-button" @click="showTerms = false">×</button>
          </div>
          <div class="modal-body">
            <h3 class="section-header">Welcome to DawntasyAI</h3>
            <p>By using our AI companion service, you agree to the following terms:</p>
            
            <h4 class="subsection-header">1. Privacy & Data</h4>
            <p>We respect your privacy and commit to protecting your personal data. Chat conversations may be stored to improve service quality and maintain context between sessions.</p>
            
            <h4 class="subsection-header">2. Account Usage</h4>
            <p>You agree to use DawntasyAI in accordance with all applicable laws and regulations. Prohibited uses include generating harmful, unlawful, or unethical content.</p>
            
            <h4 class="subsection-header">3. Service Limitations</h4>
            <p>DawntasyAI strives for accuracy but may occasionally provide incomplete or incorrect information. Use critical judgment when acting on information provided.</p>
            
            <div class="modal-actions">
              <button class="action-button" @click="showTerms = false">I Understand</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, nextTick } from 'vue';
import { useRouter } from 'vue-router';
import { useAuthStore } from '@/store/auth';
import gsap from 'gsap';
import AOS from 'aos';
import 'aos/dist/aos.css';

// 🔄 Initialize router and auth store
const router = useRouter();
const authStore = useAuthStore();

// 🚀 Form state
const name = ref('');
const email = ref('');
const password = ref('');
const showPassword = ref(false);
const focusedField = ref('');
const isLoading = ref(false);
const error = ref('');
const agreeToTerms = ref(false);
const showTerms = ref(false);
const cosmicPortal = ref<HTMLElement | null>(null);
const authTitle = ref<HTMLElement | null>(null);
const authForm = ref<HTMLElement | null>(null);
const nameInput = ref<HTMLElement | null>(null);

// 🔒 Password strength
const passwordStrength = computed(() => {
  if (!password.value) return 0;
  
  let score = 0;
  
  // Length check
  if (password.value.length >= 8) score++;
  
  // Complexity checks
  if (/[A-Z]/.test(password.value)) score++;
  if (/[0-9]/.test(password.value)) score++;
  if (/[^A-Za-z0-9]/.test(password.value)) score++;
  
  return score;
});

const passwordStrengthText = computed(() => {
  const strength = passwordStrength.value;
  if (strength === 0) return 'Weak';
  if (strength === 1) return 'Fair';
  if (strength === 2) return 'Good';
  if (strength === 3) return 'Strong';
  return 'Very Strong';
});

// ⚡ Form field methods
const focusField = (field: string) => {
  focusedField.value = field;
  
  // Get the input wrapper element
  const inputWrapper = document.querySelector(`.form-group.focused .input-wrapper`);
  
  if (inputWrapper) {
    // Animate the glow effect
    gsap.to(inputWrapper.querySelector('.input-glow'), {
      opacity: 0.7,
      width: '100%',
      duration: 0.5
    });
  }
};

const blurField = () => {
  // Animate the glow effect out
  const inputWrapper = document.querySelector(`.form-group.focused .input-wrapper`);
  
  if (inputWrapper) {
    gsap.to(inputWrapper.querySelector('.input-glow'), {
      opacity: 0,
      width: '0%',
      duration: 0.3,
      onComplete: () => {
        focusedField.value = '';
      }
    });
  } else {
    focusedField.value = '';
  }
};

// 🚀 Handle registration submission
const handleRegister = async () => {
  try {
    isLoading.value = true;
    error.value = '';
    
    // ✨ Basic validation
    if (password.value.length < 6) {
      error.value = 'Password must be at least 6 characters long.';
      isLoading.value = false;
      return;
    }
    
    console.log('🚀 Registration initiated:', { name: name.value, email: email.value });
    
    // 🔥 REGISTER WITH FIREBASE
    const result = await authStore.registerUser(email.value, password.value, name.value);
    
    if (result.success) {
      console.log('✅ ACCOUNT CREATION SUCCESSFUL!');
      
      // 🌟 Animate cosmic portal for transition effect
      if (cosmicPortal.value) {
        // Make portal visible
        gsap.to(cosmicPortal.value, {
          opacity: 1,
          duration: 0.5
        });
        
        // Animate portal core to expand
        gsap.to(cosmicPortal.value.querySelector('.portal-core'), {
          scale: 30,
          opacity: 0.9,
          duration: 1.5,
          ease: "power3.in",
          onComplete: () => {
            // Navigate to onboarding or home
            router.push('/onboarding');
          }
        });
        
        // Animate portal rings
        gsap.to(cosmicPortal.value.querySelectorAll('.portal-ring'), {
          opacity: 0.9,
          scale: 1.5,
          stagger: 0.1,
          duration: 1
        });
      } else {
        // Fallback navigation if portal animation fails
        router.push('/onboarding');
      }
    } else {
      console.error('❌ Registration failed:', result.error);
      error.value = result.error || 'Registration failed. Please try again.';
      
      // Shake the form on error
      gsap.fromTo(
        authForm.value,
        { x: -10 },
        { x: 0, duration: 0.5, ease: 'elastic.out(1, 0.3)' }
      );
    }
    
  } catch (err: any) {
    console.error('⚠️ Registration error:', err);
    
    // Format user-friendly error message
    if (err.code === 'auth/email-already-in-use') {
      error.value = 'Email already in use. Please use a different email or sign in.';
    } else if (err.code === 'auth/invalid-email') {
      error.value = 'Invalid email address. Please check and try again.';
    } else if (err.code === 'auth/weak-password') {
      error.value = 'Password is too weak. Please choose a stronger password.';
    } else {
      error.value = err.message || 'Failed to create account. Please try again.';
    }
    
    // Animate error appearance
    gsap.fromTo(
      '.error-alert',
      { y: -20, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.5, ease: 'power2.out' }
    );
  } finally {
    isLoading.value = false;
  }
};

// ✨ Animate particles
const animateParticles = () => {
  const particles = document.querySelectorAll('.particle');
  
  particles.forEach(particle => {
    gsap.to(particle, {
      x: `random(-150, 150)`,
      y: `random(-150, 150)`,
      opacity: 0,
      scale: `random(1, 3)`,
      duration: `random(1, 2)`,
      ease: 'power3.out',
      onComplete: () => {
        gsap.set(particle, {
          x: 0,
          y: 0,
          opacity: `random(0.3, 0.7)`,
          scale: `random(0.2, 0.5)`
        });
      }
    });
  });
};

// 🚀 Initialize animations
onMounted(() => {
  // Initialize AOS
  AOS.init();
  
  // Auto-focus the name input
  nextTick(() => {
    if (nameInput.value) {
      nameInput.value.focus();
    }
  });
  
  // 🎨 Animate title
  gsap.from(authTitle.value, {
    y: -30,
    opacity: 0,
    duration: 0.8,
    ease: 'power2.out'
  });
  
  // 🔮 Animate form elements
  gsap.from('.form-group', {
    y: 20,
    opacity: 0,
    stagger: 0.15,
    duration: 0.7,
    delay: 0.3,
    ease: 'power2.out'
  });
  
  // 🚀 Animate register button
  gsap.from('.register-button', {
    y: 20,
    opacity: 0,
    scale: 0.9,
    duration: 0.7,
    delay: 0.9,
    ease: 'back.out(1.7)'
  });
  
  // 🌟 Initialize particles
  const particles = document.querySelectorAll('.particle');
  
  particles.forEach(particle => {
    gsap.set(particle, {
      x: `random(-5, 5)`,
      y: `random(-5, 5)`,
      opacity: `random(0.3, 0.7)`,
      scale: `random(0.2, 0.5)`,
      rotation: `random(-15, 15)`
    });
    
    gsap.to(particle, {
      x: `random(-15, 15)`,
      y: `random(-15, 15)`,
      rotation: `random(-45, 45)`,
      duration: `random(3, 8)`,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut'
    });
  });
  
  // 🌌 Setup cosmic portal
  const portalRings = document.querySelectorAll('.portal-ring');
  gsap.set(portalRings, { opacity: 0, scale: 0.5 });
  gsap.set('.portal-core', { opacity: 0, scale: 0.5 });
  
  // Animate portal rings rotation
  gsap.to(portalRings, {
    rotation: 360,
    duration: 20,
    repeat: -1,
    ease: 'none',
    stagger: 5
  });
  
  // Set up continuous button glow
  gsap.to('.button-glow', {
    opacity: 0.7,
    duration: 1.5,
    repeat: -1,
    yoyo: true,
    ease: 'sine.inOut'
  });
});
</script>

<style>
.auth-container {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  background: radial-gradient(ellipse at center, #191577, #06061f);
  position: relative;
}

.auth-container::before {
  content: '';
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 0;
  background-size: cover;
  opacity: 0.1;
  animation: subtle-shift 60s linear infinite alternate;
}

@keyframes subtle-shift {
  0% { transform: scale(1) rotate(0); }
  100% { transform: scale(1.1) rotate(1deg); }
}

.auth-card {
  background-color: #0d0d3d;
  border-radius: 0.75rem;
  padding: 2rem;
  width: 100%;
  max-width: 28rem;
  position: relative;
  overflow: hidden;
  border: 1px solid #221e90;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.6);
  z-index: 1;
}

.auth-card::before {
  content: '';
  position: absolute;
  inset: 0;
  z-index: 0;
  background: linear-gradient(
    to bottom right,
    transparent 0%,
    #221e90 100%
  );
  opacity: 0.3;
}

/* ✨ COSMIC PARTICLES ✨ */
.cosmic-particles {
  position: absolute;
  inset: 0;
  pointer-events: none;
  z-index: 1;
}

.particle {
  position: absolute;
  border-radius: 50%;
  width: var(--size);
  height: var(--size);
  background-color: var(--color, #8b5cf6);
  box-shadow: 0 0 calc(var(--size) * 2) var(--color, #8b5cf6);
  top: 50%;
  left: 50%;
  transform: translateX(0) translateY(0) rotate(var(--rotation, 0deg));
  opacity: 0.6;
  filter: blur(1px);
  will-change: transform, opacity;
}

/* 🌌 COSMIC PORTAL 🌌 */
.cosmic-portal {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  pointer-events: none;
  z-index: 50;
  opacity: 0;
}

.portal-rings {
  position: relative;
  width: 16rem;
  height: 16rem;
  display: flex;
  align-items: center;
  justify-content: center;
}

.portal-ring {
  position: absolute;
  border-radius: 50%;
  border: 4px solid;
  opacity: 0.6;
}

.portal-ring:nth-child(1) {
  width: 100%;
  height: 100%;
  border-color: #8b5cf6;
}

.portal-ring:nth-child(2) {
  width: 75%;
  height: 75%;
  border-color: #06a6ee;
}

.portal-ring:nth-child(3) {
  width: 50%;
  height: 50%;
  border-color: #ff3a70;
}

.portal-core {
  position: absolute;
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
  background: linear-gradient(135deg, #06a6ee, #ff3a70);
  opacity: 0.8;
  box-shadow: 
    0 0 30px #8b5cf6,
    0 0 60px rgba(139, 92, 246, 0.4),
    inset 0 0 20px rgba(255, 255, 255, 0.4);
  z-index: 10;
}

.auth-title {
  font-size: 1.875rem;
  line-height: 2.25rem;
  font-weight: 600;
  text-align: center;
  margin-bottom: 2rem;
  position: relative;
  z-index: 10;
  color: white;
}

.title-text {
  background: linear-gradient(to right, #fff 0%, #a78bfa 50%, #fff 100%);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  text-shadow: 0 0 10px rgba(139, 92, 246, 0.3);
}

.title-underline {
  width: 12rem;
  height: 1px;
  margin: 0.5rem auto 0;
  background: linear-gradient(90deg, transparent, rgba(139, 92, 246, 0.7), transparent);
  animation: pulse-underline 3s infinite alternate;
}

@keyframes pulse-underline {
  0% { opacity: 0.5; width: 32%; }
  100% { opacity: 0.9; width: 40%; }
}

.auth-form {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  position: relative;
  z-index: 10;
}

.error-alert {
  background-color: rgba(255, 58, 112, 0.1);
  border: 1px solid #db1932;
  border-radius: 0.5rem;
  padding: 1rem;
  display: flex;
  gap: 0.75rem;
  align-items: flex-start;
  margin-bottom: 1rem;
  box-shadow: 0 10px 15px -3px rgba(255, 58, 112, 0.2);
  animation: alert-pulse 2s infinite alternate;
  color: #ffc6ec;
}

.alert-icon {
  width: 1.25rem;
  height: 1.25rem;
  border-radius: 50%;
  background-color: #db1932;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.75rem;
  font-weight: 700;
  flex-shrink: 0;
  box-shadow: 0 0 10px rgba(255, 58, 112, 0.7);
}

.alert-message {
  color: #ffc6ec;
  font-size: 0.875rem;
}

@keyframes alert-pulse {
  0% { box-shadow: 0 10px 15px -3px rgba(255, 58, 112, 0.2); }
  100% { box-shadow: 0 10px 15px -3px rgba(255, 58, 112, 0.4); }
}

.form-group {
  position: relative;
  transition: all 0.3s;
}

.form-group:hover {
  transform: scale(1.02);
}

.form-group.focused {
  transform: scale(1.03);
}

.form-group.focused .form-label {
  color: #ff3a70;
  text-shadow: 0 0 10px #db1932;
}

.form-group.focused .input-wrapper {
  border-color: #ff3a70;
  box-shadow: 0 0 15px rgba(255, 92, 145, 0.3);
}

.form-group.focused .input-icon {
  filter: drop-shadow(0 0 5px #db1932);
}

.form-label {
  display: block;
  font-size: 0.875rem;
  font-weight: 500;
  color: #c4c5ff;
  margin-bottom: 0.375rem;
  transition: color 0.3s;
}

.input-wrapper {
  position: relative;
  display: flex;
  align-items: center;
  background-color: #0f172a;
  border-radius: 0.5rem;
  border: 1px solid #2b28a9;
  transition: all 0.3s;
  overflow: hidden;
}

.input-icon {
  width: 1.25rem;
  height: 1.25rem;
  position: absolute;
  left: 0.75rem;
  color: #6a6df4;
  transition: color 0.3s;
  font-size: 1.25rem;
}

.form-input {
  width: 100%;
  padding: 0.75rem 1rem 0.75rem 2.5rem;
  background-color: transparent;
  color: white;
  outline: none;
  border: none;
}

.form-input::placeholder {
  color: #4d4fdb;
}

.password-toggle {
  position: absolute;
  right: 0.75rem;
  padding: 0.25rem;
  color: #6a6df4;
  background: none;
  border: none;
  cursor: pointer;
  transition: color 0.3s;
}

.password-toggle:hover {
  color: #c4c5ff;
}

.eye-icon {
  font-size: 1.25rem;
}

.password-toggle:hover .eye-icon {
  filter: drop-shadow(0 0 2px #ff3a70);
}

.input-glow {
  position: absolute;
  bottom: 0;
  left: 0;
  height: 0.125rem;
  width: 0;
  opacity: 0;
  background: linear-gradient(90deg, transparent, #ff3a70, transparent);
}

.password-strength {
  margin-top: 0.5rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.strength-bars {
  display: flex;
  gap: 0.25rem;
}

.strength-bar {
  width: 1.5rem;
  height: 0.375rem;
  border-radius: 9999px;
  background-color: #2b28a9;
  transition: all 0.3s;
}

.strength-bar.active {
  background-color: #ff3a70;
  box-shadow: 0 0 10px #ff3a70;
}

.strength-bar.active:nth-child(4) {
  background-color: #10b981;
  box-shadow: 0 0 10px #10b981;
}

.strength-text {
  font-size: 0.75rem;
  color: #c4c5ff;
}

.terms-check {
  margin-top: 0.75rem;
}

.terms-label {
  display: flex;
  align-items: center;
  cursor: pointer;
}

.terms-label input {
  position: absolute;
  opacity: 0;
  height: 0;
  width: 0;
}

.checkmark {
  position: relative;
  display: inline-block;
  width: 1rem;
  height: 1rem;
  border-radius: 0.25rem;
  border: 1px solid #2b28a9;
  margin-right: 0.5rem;
  background-color: #0f172a;
  transition: all 0.3s;
  flex-shrink: 0;
}

.checkmark::after {
  content: '';
  position: absolute;
  display: none;
  width: 0.5rem;
  height: 0.5rem;
  border-radius: 0.125rem;
  background-color: #ff3a70;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  box-shadow: 0 0 10px #ff3a70;
}

.terms-label input:checked ~ .checkmark::after {
  display: block;
  animation: pulse-check 2s infinite;
}

.terms-label input:checked ~ .checkmark {
  border-color: #db1932;
  box-shadow: 0 0 8px rgba(255, 92, 145, 0.3);
}

.label-text {
  font-size: 0.75rem;
  color: #c4c5ff;
}

.terms-link {
  color: #ff3a70;
  transition: color 0.3s;
}

.terms-link:hover {
  color: #ffc6ec;
  text-shadow: 0 0 12px rgba(255, 92, 145, 0.8);
  animation: cosmic-pulse 2s infinite;
}

@keyframes pulse-check {
  0% { box-shadow: 0 0 0 0 rgba(255, 92, 145, 0.7); }
  70% { box-shadow: 0 0 0 5px rgba(255, 92, 145, 0); }
  100% { box-shadow: 0 0 0 0 rgba(255, 92, 145, 0); }
}

@keyframes cosmic-pulse {
  0% { text-shadow: 0 0 5px rgba(255, 92, 145, 0.8); }
  50% { text-shadow: 0 0 15px rgba(255, 92, 145, 1), 0 0 25px rgba(255, 92, 145, 0.5); }
  100% { text-shadow: 0 0 5px rgba(255, 92, 145, 0.8); }
}

.register-button {
  width: 100%;
  padding: 1rem;
  border-radius: 0.5rem;
  background: linear-gradient(to right, #db1932, #ff3a70);
  color: white;
  font-weight: 500;
  margin-top: 1.5rem;
  position: relative;
  overflow: hidden;
  transition: all 0.5s;
  border: none;
  cursor: pointer;
  box-shadow: 0 10px 20px rgba(255, 92, 145, 0.3);
  z-index: 10;
}

.register-button:hover {
  background: linear-gradient(to right, #ff3a70, #ff5c92);
  box-shadow: 0 15px 30px rgba(255, 92, 145, 0.5);
  letter-spacing: 1px;
  transform: scale(1.05);
}

.register-button:disabled {
  opacity: 0.7;
  cursor: not-allowed;
}

.register-button:disabled:hover {
  background: linear-gradient(to right, #db1932, #ff3a70);
  box-shadow: 0 10px 20px rgba(255, 92, 145, 0.3);
  letter-spacing: normal;
  transform: none;
}

.button-text {
  position: relative;
  z-index: 10;
  font-weight: 700;
  letter-spacing: 0.05em;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
}

.loading-spinner {
  display: inline-block;
  width: 1.5rem;
  height: 1.5rem;
  border: 3px solid;
  border-radius: 50%;
  border-color: #fff transparent #fff transparent;
  animation: spin 1.2s linear infinite;
}

.button-glow {
  position: absolute;
  inset: 0;
  opacity: 0;
  background: linear-gradient(45deg, #ff3a70, #06a6ee);
  z-index: 1;
}

.register-button:hover:not(:disabled) .button-glow {
  opacity: 1;
}

.register-button::after {
  content: '';
  position: absolute;
  inset: -1px;
  border-radius: 0.5rem;
  opacity: 0;
  background: linear-gradient(90deg, #ff3a70, #06a6ee, #ff3a70);
  animation: border-glow 2s linear infinite;
  z-index: -1;
}

.register-button:hover::after {
  opacity: 1;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

@keyframes border-glow {
  0% { background-position: 0% 50%; }
  100% { background-position: 200% 50%; }
}

.auth-footer {
  margin-top: 2rem;
  text-align: center;
  font-size: 0.875rem;
  color: #c4c5ff;
  position: relative;
  z-index: 10;
}

.auth-footer p {
  margin-bottom: 0.25rem;
}

.login-link {
  color: #ff3a70;
  font-weight: 500;
  transition: color 0.3s;
}

.login-link:hover {
  color: #ffc6ec;
  text-shadow: 0 0 15px rgba(255, 92, 145, 0.8);
  animation: pulse-text 2s infinite alternate;
}

@keyframes pulse-text {
  from { text-shadow: 0 0 5px rgba(255, 92, 145, 0.5); }
  to { text-shadow: 0 0 15px rgba(255, 92, 145, 1); }
}

.terms-modal {
  position: fixed;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 50;
  background-color: rgba(6, 6, 31, 0.9);
  backdrop-filter: blur(10px);
}

.modal-content {
  background-color: #0d0d3d;
  border-radius: 0.75rem;
  width: 100%;
  max-width: 36rem;
  margin: 0 1rem;
  border: 1px solid #2b28a9;
  overflow: hidden;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.8), 0 0 30px rgba(255, 92, 145, 0.3);
  animation: modal-appear 0.5s cubic-bezier(0.19, 1, 0.22, 1);
}

.modal-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  border-bottom: 1px solid #221e90;
  background: linear-gradient(90deg, #0d0d3d, #8a1125, #0d0d3d);
  background-size: 200% 100%;
  animation: gradient-shift 10s linear infinite;
}

.modal-title {
  font-size: 1.25rem;
  color: white;
  text-shadow: 0 0 10px #ff3a70;
}

.close-button {
  font-size: 1.5rem;
  color: #6a6df4;
  background: none;
  border: none;
  cursor: pointer;
  transition: all 0.3s;
}

.close-button:hover {
  color: white;
  text-shadow: 0 0 10px #ff3a70;
  transform: rotate(90deg);
}

.modal-body {
  padding: 1.25rem;
  max-height: 70vh;
  overflow-y: auto;
  color: #c4c5ff;
}

.section-header {
  font-size: 1.125rem;
  color: #c4c5ff;
  margin-bottom: 0.75rem;
  text-shadow: 0 0 8px #ff3a70;
}

.subsection-header {
  font-size: 1rem;
  font-weight: 600;
  color: #ff3a70;
  margin-top: 1rem;
  margin-bottom: 0.5rem;
}

.modal-body p {
  color: #c4c5ff;
  font-size: 0.875rem;
  line-height: 1.6;
  margin-bottom: 1rem;
}

.modal-actions {
  margin-top: 1.5rem;
  display: flex;
  justify-content: flex-end;
}

.action-button {
  padding: 0.5rem 1.5rem;
  border-radius: 0.5rem;
  background-color: #db1932;
  color: white;
  font-weight: 500;
  border: none;
  cursor: pointer;
  transition: all 0.3s;
}

.action-button:hover {
  background-color: #ff3a70;
  transform: scale(1.05);
  box-shadow: 0 0 15px #ff3a70;
}

@keyframes modal-appear {
  from { opacity: 0; transform: scale(0.9); }
  to { opacity: 1; transform: scale(1); }
}

@keyframes gradient-shift {
  0% { background-position: 0% 50%; }
  100% { background-position: 200% 50%; }
}

/* 🔥 QUANTUM ENHANCEMENTS 🔥 */
.cosmic-particles::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: radial-gradient(ellipse at center, rgba(139, 92, 246, 0.2), transparent 70%);
  animation: cosmos-pulse 8s infinite alternate;
}

@keyframes cosmos-pulse {
  0% { opacity: 0.1; transform: scale(0.95); }
  100% { opacity: 0.3; transform: scale(1.05); }
}

/* 🌌 QUANTUM STARFIELD EFFECT 🌌 */
.auth-container::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: radial-gradient(white 1px, transparent 1px);
  background-size: 50px 50px;
  background-position: -25px -25px;
  opacity: 0.05;
  animation: starfield-drift 100s linear infinite;
}

@keyframes starfield-drift {
  0% { background-position: 0 0; }
  100% { background-position: -1000px -1000px; }
}

/* 🔥 HYPER-REALISTIC METEOR EFFECTS 🔥 */
@keyframes meteor {
  0% {
    transform: translate(-50vw, -50vh) rotate(215deg) scale(0);
    opacity: 0;
  }
  10% {
    opacity: 1;
  }
  90% {
    opacity: 1;
  }
  100% {
    transform: translate(50vw, 50vh) rotate(215deg) scale(1);
    opacity: 0;
  }
}

.auth-container::before {
  content: '';
  position: fixed;
  width: 300px;
  height: 1px;
  background: linear-gradient(90deg, transparent, #fff, transparent);
  box-shadow: 0 0 15px #fff, 0 0 30px #8b5cf6, 0 0 45px #8b5cf6;
  top: 10%;
  left: 10%;
  animation: meteor 8s linear infinite;
  animation-delay: 2s;
}

/* 🔮 QUANTUM AUTH CARD GLOW EFFECT 🔮 */
.auth-card {
  animation: card-quantum-pulse 4s infinite alternate;
}

@keyframes card-quantum-pulse {
  0% {
    box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.6);
  }
  100% {
    box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.6), 
                0 0 15px rgba(139, 92, 246, 0.3),
                0 0 30px rgba(139, 92, 246, 0.2);
  }
}

/* 🧿 PSYCHEDELIC PORTAL EFFECT 🧿 */
.portal-core::before {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  width: 30%;
  height: 30%;
  background: white;
  border-radius: 50%;
  transform: translate(-50%, -50%);
  filter: blur(5px);
  animation: core-pulse 2s infinite alternate;
}

@keyframes core-pulse {
  0% { 
    opacity: 0.5;
    width: 20%;
    height: 20%;
  }
  100% { 
    opacity: 0.8;
    width: 40%;
    height: 40%;
  }
}

/* 🎯 FORM INPUT FOCUS ENHANCEMENT 🎯 */
.form-input:focus {
  animation: input-focus-pulse 2s infinite alternate;
}

@keyframes input-focus-pulse {
  0% { box-shadow: inset 0 0 5px rgba(139, 92, 246, 0.3); }
  100% { box-shadow: inset 0 0 10px rgba(139, 92, 246, 0.5); }
}

/* 🚀 QUANTUM BUTTON HOVER EFFECT 🚀 */
.register-button::before {
  content: '';
  position: absolute;
  top: -100%;
  left: -100%;
  width: 300%;
  height: 300%;
  background: conic-gradient(
    transparent, 
    rgba(255, 255, 255, 0.3), 
    transparent, 
    transparent
  );
  animation: quantum-rotate 4s linear infinite;
  opacity: 0;
  transition: opacity 0.3s;
  z-index: -1;
}

.register-button:hover::before {
  opacity: 0.3;
}

@keyframes quantum-rotate {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

/* ⚡ QUANTUM RESPONSIVE ENHANCEMENTS ⚡ */
@media (max-width: 640px) {
  .auth-card {
    padding: 1.5rem;
  }
  
  .auth-title {
    font-size: 1.5rem;
  }
  
  .portal-rings {
    width: 12rem;
    height: 12rem;
  }
}

@media (max-width: 480px) {
  .form-group {
    margin-bottom: 1rem;
  }
  
  .cosmic-particle {
    display: none;
  }
  
  .cosmic-particles::before {
    opacity: 0.2;
  }
}
</style>

<script>
// ThreeJS Cosmic Background Enhancement
import * as THREE from 'three';
import { onMounted, onUnmounted } from 'vue';

let scene, camera, renderer, stars, animationFrameId;
const particleCount = 5000;

function initThreeJsBackground() {
  // Create canvas
  const canvas = document.createElement('canvas');
  canvas.style.position = 'fixed';
  canvas.style.top = '0';
  canvas.style.left = '0';
  canvas.style.width = '100%';
  canvas.style.height = '100%';
  canvas.style.pointerEvents = 'none';
  canvas.style.zIndex = '-1';
  document.querySelector('.auth-container').appendChild(canvas);
  
  // Create scene
  scene = new THREE.Scene();
  
  // Create camera
  camera = new THREE.PerspectiveCamera(
    75, window.innerWidth / window.innerHeight, 0.1, 1000
  );
  camera.position.z = 350;
  
  // Create renderer
  renderer = new THREE.WebGLRenderer({ 
    canvas: canvas, 
    alpha: true, 
    antialias: true 
  });
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(window.devicePixelRatio);
  
  // Create stars
  const starsGeometry = new THREE.BufferGeometry();
  const starPositions = [];
  const starColors = [];
  const starSizes = [];
  
  for (let i = 0; i < particleCount; i++) {
    // Position
    const x = (Math.random() - 0.5) * 2000;
    const y = (Math.random() - 0.5) * 2000;
    const z = (Math.random() - 0.5) * 2000;
    starPositions.push(x, y, z);
    
    // Color
    const r = Math.random();
    const g = Math.random() * 0.7 + 0.3; // More blue/purple
    const b = Math.random() * 0.2 + 0.8;
    starColors.push(r, g, b);
    
    // Size
    const size = Math.random() * 2 + 0.5;
    starSizes.push(size);
  }
  
  starsGeometry.setAttribute(
    'position', 
    new THREE.Float32BufferAttribute(starPositions, 3)
  );
  
  starsGeometry.setAttribute(
    'color',
    new THREE.Float32BufferAttribute(starColors, 3)
  );
  
  starsGeometry.setAttribute(
    'size',
    new THREE.Float32BufferAttribute(starSizes, 1)
  );
  
  // Create star material with custom shader
  const starsMaterial = new THREE.ShaderMaterial({
    uniforms: {
      time: { value: 0 }
    },
    vertexShader: `
      attribute float size;
      attribute vec3 color;
      varying vec3 vColor;
      uniform float time;
      
      void main() {
        vColor = color;
        
        // Pulsating size effect
        float pulseFactor = sin(time * 0.5 + position.x * 0.01) * 0.1 + 0.9;
        
        vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
        gl_PointSize = size * pulseFactor * (300.0 / length(mvPosition.xyz));
        gl_Position = projectionMatrix * mvPosition;
      }
    `,
    fragmentShader: `
      varying vec3 vColor;
      
      void main() {
        // Circular point
        float r = distance(gl_PointCoord, vec2(0.5, 0.5));
        if (r > 0.5) discard;
        
        // Add glow effect
        float intensity = 1.0 - r * 2.0;
        vec3 glow = vColor * intensity;
        
        gl_FragColor = vec4(glow, intensity);
      }
    `,
    blending: THREE.AdditiveBlending,
    depthTest: false,
    transparent: true
  });
  
  stars = new THREE.Points(starsGeometry, starsMaterial);
  scene.add(stars);
  
  // Handle resize
  window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  });
  
  // Animation loop
  const clock = new THREE.Clock();
  
  function animate() {
    animationFrameId = requestAnimationFrame(animate);
    
    // Update time uniform for shader
    stars.material.uniforms.time.value = clock.getElapsedTime();
    
    // Rotate star field
    stars.rotation.y += 0.0002;
    stars.rotation.x += 0.0001;
    
    // Mouse parallax effect if available
    if (window.mouseX !== undefined && window.mouseY !== undefined) {
      stars.rotation.y += (window.mouseX * 0.00001);
      stars.rotation.x += (window.mouseY * 0.00001);
    }
    
    renderer.render(scene, camera);
  }
  
  animate();
  
  // Track mouse movement for parallax effect
  document.addEventListener('mousemove', (e) => {
    window.mouseX = e.clientX - window.innerWidth / 2;
    window.mouseY = e.clientY - window.innerHeight / 2;
  });
}

// Cleanup ThreeJS resources
function cleanupThreeJs() {
  if (animationFrameId) {
    cancelAnimationFrame(animationFrameId);
  }
  
  if (stars) {
    scene.remove(stars);
    stars.geometry.dispose();
    stars.material.dispose();
  }
  
  if (renderer) {
    renderer.dispose();
  }
}

// Add to component lifecycle hooks
onMounted(() => {
  // Initialize ThreeJS background
  initThreeJsBackground();
});

onUnmounted(() => {
  // Cleanup ThreeJS
  cleanupThreeJs();
});

// Enhanced Firebase Authentication with Error Handling
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { doc, setDoc, serverTimestamp } from 'firebase/firestore';
import { auth, db } from '@/firebase/init';

async function registerWithFirebase(email, password, displayName) {
  try {
    // Create user with email and password
    const userCredential = await createUserWithEmailAndPassword(auth(), email, password);
    
    // Update profile with display name
    await updateProfile(userCredential.user, {
      displayName: displayName
    });
    
    // Create user document in Firestore
    await setDoc(doc(db(), 'users', userCredential.user.uid), {
      displayName: displayName,
      email: email,
      createdAt: serverTimestamp(),
      role: 'user',
      plan: 'free',
      credits: 100,
      lastLogin: serverTimestamp(),
      chats: [],
      preferences: {
        theme: 'cosmic',
        notifications: true
      }
    });
    
    // Try to create username reservation (not critical)
    try {
      await setDoc(doc(db(), 'usernames', displayName.toLowerCase()), {
        uid: userCredential.user.uid,
        name: displayName.toLowerCase(),
        displayName: displayName,
        createdAt: serverTimestamp()
      });
    } catch (usernameError) {
      console.warn('Username reservation failed (non-critical):', usernameError);
    }
    
    return {
      success: true,
      user: userCredential.user
    };
  } catch (error) {
    console.error('Firebase registration error:', error);
    return {
      success: false,
      error: error.message
    };
  }
}
</script>