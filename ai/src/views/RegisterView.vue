<!-- src/views/RegisterView.vue -->
<template>
  <div class="auth-container">
    <div class="auth-card" data-aos="fade-up" data-aos-duration="800">
      <!-- Cosmic Particles -->
      <div class="cosmic-particles">
        <div v-for="n in 20" :key="n" class="particle"></div>
      </div>
      
      <!-- Register Form -->
      <h1 class="auth-title">Begin Your Journey</h1>
      
      <form @submit.prevent="handleRegister" class="auth-form">
        <!-- Error Alert -->
        <div v-if="error" class="error-alert">
          <div class="alert-icon">!</div>
          <p class="alert-message">{{ error }}</p>
        </div>
        
        <!-- Username Field -->
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
              placeholder="Enter your name"
              required
              @focus="focusedField = 'name'"
              @blur="focusedField = ''"
            />
          </div>
        </div>
        
        <!-- Email Field -->
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
              @focus="focusedField = 'email'"
              @blur="focusedField = ''"
            />
          </div>
        </div>
        
        <!-- Password Field -->
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
              @focus="focusedField = 'password'"
              @blur="focusedField = ''"
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
          </div>
          <!-- Password strength indicator -->
          <div class="password-strength" v-if="password">
            <div class="strength-bars">
              <div 
                v-for="n in 4" 
                :key="n" 
                class="strength-bar"
                :class="{ 'active': passwordStrength >= n }"
              ></div>
            </div>
            <span class="strength-text">{{ passwordStrengthText }}</span>
          </div>
        </div>
        
        <!-- Terms and Conditions -->
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
        
        <!-- Submit Button -->
        <button 
          type="submit" 
          class="register-button" 
          :disabled="isLoading || !agreeToTerms"
          @mouseenter="animateParticles"
        >
          <span v-if="isLoading" class="loading-spinner"></span>
          <span v-else class="button-text">Create Account</span>
        </button>
      </form>
      
      <!-- Login Link -->
      <div class="auth-footer">
        <p>Already have an account?</p>
        <router-link to="/login" class="login-link">Sign In</router-link>
      </div>
      
      <!-- Terms Modal -->
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
import { ref, computed, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { useAuthStore } from '@/store/auth';
import gsap from 'gsap';
import AOS from 'aos';
import 'aos/dist/aos.css';

// Initialize router and auth store
const router = useRouter();
const authStore = useAuthStore();

// Form state
const name = ref('');
const email = ref('');
const password = ref('');
const showPassword = ref(false);
const focusedField = ref('');
const isLoading = ref(false);
const error = ref('');
const agreeToTerms = ref(false);
const showTerms = ref(false);

// Password strength
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

// Handle registration submission
const handleRegister = async () => {
  try {
    isLoading.value = true;
    error.value = '';
    
    // Basic validation
    if (password.value.length < 6) {
      error.value = 'Password must be at least 6 characters long.';
      isLoading.value = false;
      return;
    }
    
    await authStore.registerUser(email.value, password.value, name.value);
    
    // Animate particles for success effect
    animateParticles();
    
    // Redirect with delay for animation
    setTimeout(() => {
      router.push('/chat');
    }, 1500);
    
  } catch (err: any) {
    console.error('Registration error:', err);
    
    // Format user-friendly error message
    if (err.code === 'auth/email-already-in-use') {
      error.value = 'Email already in use. Please use a different email or sign in.';
    } else if (err.code === 'auth/invalid-email') {
      error.value = 'Invalid email address. Please check and try again.';
    } else if (err.code === 'auth/weak-password') {
      error.value = 'Password is too weak. Please choose a stronger password.';
    } else {
      error.value = 'Failed to create account. Please try again.';
    }
  } finally {
    isLoading.value = false;
  }
};

// Animate particles
const animateParticles = () => {
  const particles = document.querySelectorAll('.particle');
  
  particles.forEach(particle => {
    gsap.to(particle, {
      x: 'random(-150, 150)',
      y: 'random(-150, 150)',
      opacity: 0,
      scale: 'random(0.5, 2)',
      duration: 'random(1, 2)',
      ease: 'power3.out',
      onComplete: () => {
        gsap.set(particle, {
          x: 0,
          y: 0,
          opacity: 'random(0.2, 0.7)',
          scale: 'random(0.1, 0.3)'
        });
      }
    });
  });
};

// Initialize animations
onMounted(() => {
  // Initialize AOS
  AOS.init();
  
  // Animate form elements
  gsap.from('.form-group', {
    y: 20,
    opacity: 0,
    stagger: 0.1,
    duration: 0.6,
    ease: 'power2.out',
    delay: 0.4
  });
  
  // Initialize particles
  const particles = document.querySelectorAll('.particle');
  
  particles.forEach(particle => {
    gsap.set(particle, {
      x: 'random(-5, 5)',
      y: 'random(-5, 5)',
      opacity: 'random(0.2, 0.7)',
      scale: 'random(0.1, 0.3)',
      backgroundColor: () => {
        const colors = [
          'rgba(97, 61, 244, 0.8)',  // rift color
          'rgba(255, 60, 120, 0.8)', // time color
          'rgba(51, 197, 255, 0.8)'  // accent color
        ];
        return colors[Math.floor(Math.random() * colors.length)];
      }
    });
    
    gsap.to(particle, {
      x: 'random(-8, 8)',
      y: 'random(-8, 8)',
      rotation: 'random(-360, 360)',
      duration: 'random(3, 8)',
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut'
    });
  });
});
</script>

<style lang="scss" scoped>
.auth-container {
  @apply min-h-screen flex items-center justify-center px-4 py-12;
  background: radial-gradient(ellipse at center, theme('colors.void.800'), theme('colors.void.950'));
  
  &::before {
    content: '';
    @apply fixed inset-0 z-0;
    background-image: url('@/assets/images/cosmic-grid.svg');
    background-size: cover;
    opacity: 0.05;
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

.cosmic-particles {
  @apply absolute inset-0 pointer-events-none;
  z-index: 1;
}

.particle {
  @apply absolute w-2 h-2 rounded-full;
  top: 50%;
  left: 50%;
  filter: blur(1px);
}

.auth-title {
  @apply text-3xl font-display text-white text-center mb-8 relative z-10;
  text-shadow: 0 0 10px theme('colors.time.500');
}

.auth-form {
  @apply space-y-5 relative z-10;
}

.error-alert {
  @apply bg-time-900 bg-opacity-70 border border-time-600 rounded-lg p-4 flex gap-3 items-start mb-4;
  
  .alert-icon {
    @apply w-5 h-5 rounded-full bg-time-600 text-white flex items-center justify-center text-xs font-bold flex-shrink-0;
  }
  
  .alert-message {
    @apply text-time-200 text-sm;
  }
}

.form-group {
  @apply relative transition-all duration-300;
  
  &.focused {
    @apply transform scale-[1.02];
    
    .form-label {
      @apply text-time-400;
    }
    
    .input-wrapper {
      @apply border-time-500;
      box-shadow: 0 0 0 2px rgba(255, 92, 145, 0.1);
    }
    
    .input-icon {
      @apply text-time-400;
    }
  }
  
  .form-label {
    @apply block text-sm font-medium text-starlight-300 mb-1.5 transition-colors;
  }
  
  .input-wrapper {
    @apply relative flex items-center bg-void-900 rounded-lg border border-void-600 transition-all duration-300;
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
        
        &:nth-child(4) {
          @apply bg-green-500;
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
      @apply relative inline-block w-4 h-4 rounded border border-void-600 mr-2 bg-void-900 transition-all duration-200 flex-shrink-0;
      
      &::after {
        content: '';
        @apply absolute hidden w-2 h-2 rounded-sm bg-time-500;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
      }
    }
    
    input:checked ~ .checkmark::after {
      @apply block;
    }
    
    input:checked ~ .checkmark {
      @apply border-time-600;
      box-shadow: 0 0 0 2px rgba(255, 92, 145, 0.1);
    }
    
    .label-text {
      @apply text-xs text-starlight-300;
    }
    
    .terms-link {
      @apply text-time-400 hover:text-time-300 transition-colors;
      
      &:hover {
        text-shadow: 0 0 8px rgba(255, 92, 145, 0.5);
      }
    }
  }
}

.register-button {
  @apply w-full py-3 rounded-lg bg-gradient-to-r from-time-600 to-time-700 text-white font-medium mt-6 relative overflow-hidden transition-all duration-300;
  box-shadow: 0 4px 10px rgba(255, 92, 145, 0.2);
  
  &:hover {
    @apply from-time-500 to-time-600;
    box-shadow: 0 6px 15px rgba(255, 92, 145, 0.3);
  }
  
  &:disabled {
    @apply opacity-70 cursor-not-allowed;
    
    &:hover {
      @apply from-time-600 to-time-700;
      box-shadow: 0 4px 10px rgba(255, 92, 145, 0.2);
    }
  }
  
  .button-text {
    @apply relative z-10;
  }
  
  .loading-spinner {
    @apply inline-block w-5 h-5 border-2 rounded-full;
    border-color: #fff transparent #fff transparent;
    animation: spin 1.2s linear infinite;
  }
  
  &::before {
    content: '';
    @apply absolute inset-0 opacity-0 transition-opacity duration-300;
    background: linear-gradient(45deg, theme('colors.time.400'), theme('colors.rift.500'));
  }
  
  &:hover:not(:disabled)::before {
    @apply opacity-100;
  }
}

.auth-footer {
  @apply mt-8 text-center text-sm text-starlight-400 relative z-10;
  
  p {
    @apply mb-1;
  }
  
  .login-link {
    @apply text-time-400 hover:text-time-300 font-medium transition-colors;
    
    &:hover {
      text-shadow: 0 0 8px rgba(255, 92, 145, 0.5);
    }
  }
}

.terms-modal {
  @apply fixed inset-0 flex items-center justify-center z-50 bg-void-950 bg-opacity-80;
  backdrop-filter: blur(5px);
  
  .modal-content {
    @apply bg-void-800 rounded-xl w-full max-w-2xl mx-4 border border-void-600 overflow-hidden;
    box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.8);
  }
  
  .modal-header {
    @apply flex items-center justify-between p-4 border-b border-void-700 bg-void-800;
    
    .modal-title {
      @apply text-xl font-display text-white;
    }
    
    .close-button {
      @apply text-2xl text-void-400 hover:text-white transition-colors;
    }
  }
  
  .modal-body {
    @apply p-5 max-h-[70vh] overflow-y-auto;
    
    .section-header {
      @apply text-lg font-display text-starlight-200 mb-3;
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
      }
    }
  }
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
</style>