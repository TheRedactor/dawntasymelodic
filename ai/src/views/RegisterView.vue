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
            <svg class="input-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
              <circle cx="12" cy="7" r="4"></circle>
            </svg>
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
            <svg class="input-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
              <polyline points="22,6 12,13 2,6"></polyline>
            </svg>
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
            <svg class="input-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
              <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
            </svg>
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
              <svg v-if="showPassword" class="eye-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path>
                <line x1="1" y1="1" x2="23" y2="23"></line>
              </svg>
              <svg v-else class="eye-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                <circle cx="12" cy="12" r="3"></circle>
              </svg>
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
      console.log('✅ Registration successful!');
      
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
            // Navigate to onboarding (or chat if no onboarding)
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

<style lang="scss">
.auth-container {
  @apply min-h-screen flex items-center justify-center px-4 py-12;
  background: radial-gradient(ellipse at center, theme('colors.void.800'), theme('colors.void.950'));
  
  &::before {
    content: '';
    @apply fixed inset-0 z-0;
    background-size: cover;
    opacity: 0.1;
    animation: subtle-shift 60s linear infinite alternate;
  }
}

@keyframes subtle-shift {
  0% { transform: scale(1) rotate(0); }
  100% { transform: scale(1.1) rotate(1deg); }
}

.auth-card {
  @apply bg-void-800 rounded-xl p-8 w-full max-w-md relative overflow-hidden;
  border: 1px solid theme('colors.void.700');
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.6);
  
  &::before {
    content: '';
    @apply absolute inset-0 z-0;
    background: linear-gradient(
      to bottom right,
      transparent 0%,
      theme('colors.void.700') 100%
    );
    opacity: 0.3;
  }
}

/* ✨ COSMIC PARTICLES ✨ */
.cosmic-particles {
  @apply absolute inset-0 pointer-events-none;
  z-index: 1;
}

.particle {
  @apply absolute rounded-full;
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
  @apply absolute inset-0 flex items-center justify-center pointer-events-none z-50 opacity-0;
}

.portal-rings {
  @apply relative w-64 h-64 flex items-center justify-center;
}

.portal-ring {
  @apply absolute rounded-full border-4 opacity-60;
}

.portal-ring:nth-child(1) {
  @apply w-full h-full;
  border-color: #8b5cf6;
}

.portal-ring:nth-child(2) {
  @apply w-3/4 h-3/4;
  border-color: #06a6ee;
}

.portal-ring:nth-child(3) {
  @apply w-1/2 h-1/2;
  border-color: #ff3a70;
}

.portal-core {
  @apply absolute w-16 h-16 rounded-full bg-gradient-to-br from-rift-500 to-time-500 opacity-80;
  box-shadow: 
    0 0 30px #8b5cf6,
    0 0 60px rgba(139, 92, 246, 0.4),
    inset 0 0 20px rgba(255, 255, 255, 0.4);
  z-index: 10;
}

.auth-title {
  @apply text-3xl font-display text-white text-center mb-8 relative z-10;
  
  .title-text {
    background: linear-gradient(to right, #fff 0%, #a78bfa 50%, #fff 100%);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
    text-shadow: 0 0 10px rgba(139, 92, 246, 0.3);
  }
  
  .title-underline {
    @apply w-48 h-px mx-auto mt-2;
    background: linear-gradient(90deg, transparent, rgba(139, 92, 246, 0.7), transparent);
    animation: pulse-underline 3s infinite alternate;
  }
}

@keyframes pulse-underline {
  0% { opacity: 0.5; width: 32%; }
  100% { opacity: 0.9; width: 40%; }
}

.auth-form {
  @apply space-y-5 relative z-10;
}

.error-alert {
  @apply bg-time-900 bg-opacity-70 border border-time-600 rounded-lg p-4 flex gap-3 items-start mb-4;
  box-shadow: 0 10px 15px -3px rgba(255, 58, 112, 0.2);
  animation: alert-pulse 2s infinite alternate;
  
  .alert-icon {
    @apply w-5 h-5 rounded-full bg-time-600 text-white flex items-center justify-center text-xs font-bold flex-shrink-0;
    box-shadow: 0 0 10px rgba(255, 58, 112, 0.7);
  }
  
  .alert-message {
    @apply text-time-200 text-sm;
  }
}

@keyframes alert-pulse {
  0% { box-shadow: 0 10px 15px -3px rgba(255, 58, 112, 0.2); }
  100% { box-shadow: 0 10px 15px -3px rgba(255, 58, 112, 0.4); }
}

.form-group {
  @apply relative transition-all duration-300 transform hover:scale-[1.02];
  
  &.focused {
    @apply transform scale-[1.03];
    
    .form-label {
      @apply text-time-400;
      text-shadow: 0 0 10px theme('colors.time.500');
    }
    
    .input-wrapper {
      @apply border-time-500;
      box-shadow: 0 0 15px rgba(255, 92, 145, 0.3);
    }
    
    .input-icon {
      @apply text-time-400;
      filter: drop-shadow(0 0 5px theme('colors.time.500'));
    }
  }
  
  .form-label {
    @apply block text-sm font-medium text-starlight-300 mb-1.5 transition-colors;
  }
  
  .input-wrapper {
    @apply relative flex items-center bg-void-900 rounded-lg border border-void-600 transition-all duration-300;
    overflow: hidden;
  }
  
  .input-icon {
    @apply w-5 h-5 absolute left-3 text-void-400 transition-colors;
  }
  
  .form-input {
    @apply w-full py-3 pl-10 pr-4 bg-transparent text-white focus:outline-none;
    
    &::placeholder {
      @apply text-void-500;
    }
  }
  
  .password-toggle {
    @apply absolute right-3 p-1 text-void-400 hover:text-starlight-300 transition-colors;
    
    .eye-icon {
      @apply w-5 h-5;
    }
    
    &:hover .eye-icon {
      filter: drop-shadow(0 0 2px theme('colors.time.500'));
    }
  }
  
  .input-glow {
    @apply absolute bottom-0 left-0 h-0.5 w-0 opacity-0;
    background: linear-gradient(90deg, transparent, theme('colors.time.500'), transparent);
  }
}

.password-strength {
  @apply mt-2 flex items-center gap-2;
  
  .strength-bars {
    @apply flex gap-1;
    
    .strength-bar {
      @apply w-6 h-1.5 rounded-full bg-void-600 transition-all duration-300;
      
      &.active {
        @apply bg-time-500;
        box-shadow: 0 0 10px theme('colors.time.500');
        
        &:nth-child(4) {
          @apply bg-green-500;
          box-shadow: 0 0 10px theme('colors.green.500');
        }
      }
    }
  }
  
  .strength-text {
    @apply text-xs text-starlight-400;
  }
}

.terms-check {
  @apply mt-3;
  
  .terms-label {
    @apply flex items-center cursor-pointer;
    
    input {
      @apply absolute opacity-0 h-0 w-0;
    }
    
    .checkmark {
      @apply relative inline-block w-4 h-4 rounded border border-void-600 mr-2 bg-void-900 transition-all duration-300 flex-shrink-0;
      
      &::after {
        content: '';
        @apply absolute hidden w-2 h-2 rounded-sm bg-time-500;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        box-shadow: 0 0 10px theme('colors.time.500');
      }
    }
    
    input:checked ~ .checkmark::after {
      @apply block;
      animation: pulse-check 2s infinite;
    }
    
    input:checked ~ .checkmark {
      @apply border-time-600;
      box-shadow: 0 0 8px rgba(255, 92, 145, 0.3);
    }
    
    .label-text {
      @apply text-xs text-starlight-300;
    }
    
    .terms-link {
      @apply text-time-400 hover:text-time-300 transition-colors;
      
      &:hover {
        text-shadow: 0 0 12px rgba(255, 92, 145, 0.8);
        animation: cosmic-pulse 2s infinite;
      }
    }
  }
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
  @apply w-full py-4 rounded-lg bg-gradient-to-r from-time-600 to-time-700 text-white font-medium mt-6 relative overflow-hidden transition-all duration-500 transform hover:scale-105;
  box-shadow: 0 10px 20px rgba(255, 92, 145, 0.3);
  
  &:hover {
    @apply from-time-500 to-time-600;
    box-shadow: 0 15px 30px rgba(255, 92, 145, 0.5);
    letter-spacing: 1px;
  }
  
  &:disabled {
    @apply opacity-70 cursor-not-allowed;
    
    &:hover {
      @apply from-time-600 to-time-700 transform-none;
      box-shadow: 0 10px 20px rgba(255, 92, 145, 0.3);
      letter-spacing: normal;
    }
  }
  
  .button-text {
    @apply relative z-10 font-bold tracking-wide;
    text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
  }
  
  .loading-spinner {
    @apply inline-block w-6 h-6 border-3 rounded-full;
    border-color: #fff transparent #fff transparent;
    animation: spin 1.2s linear infinite;
  }
  
  .button-glow {
    @apply absolute inset-0 opacity-0;
    background: linear-gradient(45deg, theme('colors.time.400'), theme('colors.rift.500'));
    z-index: 1;
  }
  
  &:hover:not(:disabled) .button-glow {
    @apply opacity-100;
  }
  
  &::after {
    content: '';
    @apply absolute -inset-px rounded-lg opacity-0;
    background: linear-gradient(90deg, theme('colors.time.300'), theme('colors.rift.400'), theme('colors.time.300'));
    animation: border-glow 2s linear infinite;
    z-index: -1;
  }
  
  &:hover::after {
    @apply opacity-100;
  }
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
  @apply mt-8 text-center text-sm text-starlight-400 relative z-10;
  
  p {
    @apply mb-1;
  }
  
  .login-link {
    @apply text-time-400 hover:text-time-300 font-medium transition-colors;
    
    &:hover {
      text-shadow: 0 0 15px rgba(255, 92, 145, 0.8);
      animation: pulse-text 2s infinite alternate;
    }
  }
}

@keyframes pulse-text {
  from { text-shadow: 0 0 5px rgba(255, 92, 145, 0.5); }
  to { text-shadow: 0 0 15px rgba(255, 92, 145, 1); }
}

.terms-modal {
  @apply fixed inset-0 flex items-center justify-center z-50 bg-void-950 bg-opacity-90;
  backdrop-filter: blur(10px);
  
  .modal-content {
    @apply bg-void-800 rounded-xl w-full max-w-2xl mx-4 border border-void-600 overflow-hidden;
    box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.8), 0 0 30px rgba(255, 92, 145, 0.3);
    animation: modal-appear 0.5s cubic-bezier(0.19, 1, 0.22, 1);
  }
  
  .modal-header {
    @apply flex items-center justify-between p-4 border-b border-void-700;
    background: linear-gradient(90deg, theme('colors.void.800'), theme('colors.time.900'), theme('colors.void.800'));
    background-size: 200% 100%;
    animation: gradient-shift 10s linear infinite;
    
    .modal-title {
      @apply text-xl font-display text-white;
      text-shadow: 0 0 10px theme('colors.time.500');
    }
    
    .close-button {
      @apply text-2xl text-void-400 hover:text-white transition-all duration-300;
      
      &:hover {
        text-shadow: 0 0 10px theme('colors.time.500');
        transform: rotate(90deg);
      }
    }
  }
  
  .modal-body {
    @apply p-5 max-h-[70vh] overflow-y-auto;
    
    .section-header {
      @apply text-lg font-display text-starlight-200 mb-3;
      text-shadow: 0 0 8px theme('colors.time.500');
    }
    
    .subsection-header {
      @apply text-base font-semibold text-time-400 mt-4 mb-2;
    }
    
    p {
      @apply text-starlight-300 text-sm leading-relaxed mb-4;
    }
  }
  
  .modal-actions {
    @apply mt-6 flex justify-end;
    
    .action-button {
      @apply px-6 py-2 rounded-lg bg-time-600 text-white font-medium transition-all duration-300;
      
      &:hover {
        @apply bg-time-500 transform scale-105;
        box-shadow: 0 0 15px theme('colors.time.500');
      }
    }
  }
}

@keyframes modal-appear {
  from { opacity: 0; transform: scale(0.9); }
  to { opacity: 1; transform: scale(1); }
}

@keyframes gradient-shift {
  0% { background-position: 0% 50%; }
  100% { background-position: 200% 50%; }
}
</style>