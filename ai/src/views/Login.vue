<template>
  <div class="auth-card">
    <!-- Cosmic Starfield Background -->
    <canvas ref="starCanvas" class="starfield"></canvas>

    <!-- Portal Animation Container -->
    <div class="portal-container">
      <div class="portal-ring" ref="portalRing"></div>
      <div class="portal-core" ref="portalCore"></div>
    </div>

    <!-- Login Title -->
    <h1 class="auth-title">Login to DawntasyAI</h1>

    <!-- Login Form -->
    <form class="auth-form" @submit.prevent="handleLogin">
      <!-- Error Alert -->
      <div v-if="error" class="error-alert">
        <span class="alert-icon">!</span>
        <span class="alert-message">{{ error }}</span>
      </div>

      <!-- Email Field -->
      <div class="form-group" :class="{ focused: isFocused.email }">
        <label class="form-label" for="email">Email</label>
        <div class="input-wrapper">
          <span class="input-icon">✉️</span>
          <input
            v-model="credentials.email"
            @focus="focusField('email')"
            @blur="blurField('email')"
            type="email"
            id="email"
            class="form-input"
            placeholder="Enter your email"
          />
        </div>
      </div>

      <!-- Password Field -->
      <div class="form-group" :class="{ focused: isFocused.password }">
        <label class="form-label" for="password">Password</label>
        <div class="input-wrapper">
          <span class="input-icon">🔒</span>
          <input
            v-model="credentials.password"
            @focus="focusField('password')"
            @blur="blurField('password')"
            :type="showPassword ? 'text' : 'password'"
            id="password"
            class="form-input"
            placeholder="Enter your password"
          />
          <button type="button" class="password-toggle" @click="togglePassword">
            <span class="eye-icon">{{ showPassword ? '👁️' : '😶' }}</span>
          </button>
        </div>
      </div>

      <!-- Remember Me & Forgot Password -->
      <div class="form-extras">
        <label class="remember-me">
          <input type="checkbox" v-model="rememberMe" />
          <span class="checkmark"></span>
          <span class="label-text">Remember Me</span>
        </label>
        <a href="#" class="forgot-password">Forgot Password?</a>
      </div>

      <!-- Login Button -->
      <button :disabled="loading" class="login-button">
        <span v-if="loading" class="loading-spinner"></span>
        <span v-else class="button-text">Login</span>
      </button>
    </form>

    <!-- Footer with Register Link -->
    <div class="auth-footer">
      <p>Don't have an account?</p>
      <a href="#" class="register-link">Register Now</a>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import { initializeApp } from 'firebase/app';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import * as THREE from 'three';
import anime from 'animejs/lib/anime.es.js';

gsap.registerPlugin(ScrollTrigger);

// Replace with your Firebase configuration
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_PROJECT.appspot.com",
  messagingSenderId: "YOUR_SENDER_ID",
  appId: "YOUR_APP_ID"
};

const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp);

export default {
  name: "LoginVue",
  setup() {
    const credentials = ref({
      email: '',
      password: ''
    });
    const rememberMe = ref(false);
    const showPassword = ref(false);
    const loading = ref(false);
    const error = ref('');
    const isFocused = ref({
      email: false,
      password: false
    });

    // Refs for animations and Three.js
    const portalRing = ref(null);
    const portalCore = ref(null);
    const starCanvas = ref(null);

    const focusField = (field) => {
      isFocused.value[field] = true;
    };

    const blurField = (field) => {
      isFocused.value[field] = false;
    };

    const togglePassword = () => {
      showPassword.value = !showPassword.value;
    };

    const handleLogin = async () => {
      loading.value = true;
      error.value = '';
      try {
        const userCredential = await signInWithEmailAndPassword(
          auth,
          credentials.value.email,
          credentials.value.password
        );
        console.log("Logged in:", userCredential.user);
        // For example, navigate to dashboard:
        // this.$router.push('/dashboard');
      } catch (err) {
        error.value = err.message;
        console.error(err);
      } finally {
        loading.value = false;
      }
    };

    // Initialize cosmic starfield using Three.js
    const initStarfield = () => {
      const canvas = starCanvas.value;
      const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
      renderer.setSize(window.innerWidth, window.innerHeight);
      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
      camera.position.z = 30;
      const starsGeometry = new THREE.BufferGeometry();
      const starsMaterial = new THREE.PointsMaterial({ color: 0xffffff, size: 0.1, transparent: true });
      const starVertices = [];
      for (let i = 0; i < 5000; i++) {
        starVertices.push((Math.random()-0.5)*2000, (Math.random()-0.5)*2000, (Math.random()-0.5)*2000);
      }
      starsGeometry.setAttribute('position', new THREE.Float32BufferAttribute(starVertices, 3));
      const stars = new THREE.Points(starsGeometry, starsMaterial);
      scene.add(stars);
      const animateStars = () => {
        requestAnimationFrame(animateStars);
        stars.rotation.x += 0.0001;
        stars.rotation.y += 0.0001;
        renderer.render(scene, camera);
      };
      animateStars();
      window.addEventListener('resize', () => {
        renderer.setSize(window.innerWidth, window.innerHeight);
        camera.aspect = window.innerWidth/window.innerHeight;
        camera.updateProjectionMatrix();
      });
    };

    // GSAP animations and parallax effect
    const initAnimations = () => {
      gsap.from(".auth-card", { duration: 1, opacity: 0, y: -50, ease: "power2.out" });
      gsap.from(".auth-title", { duration: 1, opacity: 0, delay: 0.3, x: -50 });
      gsap.from(".auth-form", { duration: 1, opacity: 0, delay: 0.5, y: 30, stagger: 0.2 });
      // Portal animations
      gsap.to(portalRing.value, { duration: 4, rotation: 360, repeat: -1, ease: "linear" });
      gsap.to(portalCore.value, { duration: 3, scale: 1.2, yoyo: true, repeat: -1, ease: "sine.inOut" });
      // Parallax effect on mouse move
      document.addEventListener('mousemove', (e) => {
        const xMove = (e.clientX - window.innerWidth / 2) * 0.005;
        const yMove = (e.clientY - window.innerHeight / 2) * 0.005;
        gsap.to(".auth-card", { x: xMove, y: yMove, duration: 0.5 });
      });
    };

    // AnimeJS for input field motion
    const initAnime = () => {
      anime({
        targets: '.form-input',
        translateY: [-10, 0],
        opacity: [0, 1],
        delay: anime.stagger(100)
      });
    };

    onMounted(() => {
      initStarfield();
      initAnimations();
      initAnime();
    });

    return {
      credentials,
      rememberMe,
      showPassword,
      loading,
      error,
      isFocused,
      focusField,
      blurField,
      togglePassword,
      handleLogin,
      portalRing,
      portalCore,
      starCanvas
    };
  }
};
</script>

<style scoped>
/* Base Cosmic Colors (assumes Tailwind's @apply is processed) */
:root {
  --void-800: #191577;
  --void-700: #221e90;
  --rift-600: #0086cc;
  --rift-500: #06a6ee;
  --time-500: #ff3a70;
  --starlight-300: #c4c5ff;
  --starlight-400: #a3a5ff;
}

/* Auth Card */
.auth-card {
  @apply bg-void-800 rounded-xl p-8 w-full max-w-md relative overflow-hidden;
  border: 1px solid var(--void-700);
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.6);
  background: radial-gradient(circle, rgba(13,13,61,1) 0%, rgba(6,6,31,1) 100%);
}

/* Cosmic Starfield Background */
.starfield {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -2;
}

/* Portal Animations */
.portal-container {
  @apply absolute -top-20 -right-20 w-40 h-40 opacity-70 pointer-events-none;
  z-index: 1;
}
.portal-ring {
  @apply absolute w-full h-full rounded-full border-4 opacity-60 transition-all duration-500;
  border-color: var(--rift-600);
  border-style: dashed;
}
.portal-core {
  @apply absolute w-1/2 h-1/2 top-1/4 left-1/4 rounded-full transition-all duration-500;
  background: radial-gradient(circle, var(--time-500) 0%, var(--rift-600) 70%);
  opacity: 0.6;
}

/* Auth Title */
.auth-title {
  @apply text-3xl font-display text-white text-center mb-8 relative z-10;
  text-shadow: 0 0 10px var(--rift-500);
}

/* Form Styles */
.auth-form {
  @apply space-y-5 relative z-10;
}
.error-alert {
  @apply bg-time-500 bg-opacity-70 border border-time-500 rounded-lg p-4 flex gap-3 items-start mb-4;
}
.error-alert .alert-icon {
  @apply w-5 h-5 rounded-full bg-time-500 text-white flex items-center justify-center text-xs font-bold flex-shrink-0;
}
.error-alert .alert-message {
  @apply text-white text-sm;
}
.form-group {
  @apply relative transition-all duration-300;
}
.form-group.focused {
  @apply transform scale-105;
}
.form-label {
  @apply block text-sm font-medium text-starlight-300 mb-1.5 transition-colors;
}
.input-wrapper {
  @apply relative flex items-center bg-void-800 rounded-lg border border-void-700 transition-all duration-300;
}
.input-icon {
  @apply w-5 h-5 absolute left-3 text-void-400 transition-colors;
}
.form-input {
  @apply w-full py-3 pl-10 pr-4 bg-transparent text-white focus:outline-none;
}
.form-input::placeholder {
  @apply text-void-400;
}
.password-toggle {
  @apply absolute right-3 p-1 text-void-400 hover:text-white transition-colors;
}
.password-toggle .eye-icon {
  @apply w-5 h-5;
}

/* Form Extras */
.form-extras {
  @apply flex items-center justify-between mt-2;
}
.remember-me {
  @apply flex items-center cursor-pointer;
}
.remember-me input {
  @apply absolute opacity-0 h-0 w-0;
}
.checkmark {
  @apply relative inline-block w-4 h-4 rounded border border-void-700 mr-2 bg-void-800 transition-all duration-200;
}
.checkmark::after {
  content: '';
  @apply absolute hidden w-2 h-2 rounded-sm bg-rift-600;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
input:checked ~ .checkmark::after {
  @apply block;
}
input:checked ~ .checkmark {
  @apply border-rift-600;
  box-shadow: 0 0 0 2px rgba(51,197,255,0.1);
}
.label-text {
  @apply text-xs text-white;
}
.forgot-password {
  @apply text-xs text-rift-600 hover:text-rift-500 transition-colors;
}

/* Login Button */
.login-button {
  @apply w-full py-3 rounded-lg bg-gradient-to-r from-rift-600 to-time-500 text-white font-medium mt-6 relative overflow-hidden transition-all duration-300;
  box-shadow: 0 4px 10px rgba(51,197,255,0.2);
}
.login-button:hover {
  @apply from-rift-500 to-time-500;
  box-shadow: 0 6px 15px rgba(51,197,255,0.3);
}
.login-button:disabled {
  @apply opacity-70 cursor-not-allowed;
}
.button-text {
  @apply relative z-10;
}
.loading-spinner {
  @apply inline-block w-5 h-5 border-2 rounded-full;
  border-color: #fff transparent #fff transparent;
  animation: spin 1.2s linear infinite;
}
.login-button::before {
  content: '';
  @apply absolute inset-0 opacity-0 transition-opacity duration-300;
  background: linear-gradient(45deg, var(--rift-600), var(--time-500));
}
.login-button:hover::before {
  @apply opacity-100;
}

/* Auth Footer */
.auth-footer {
  @apply mt-8 text-center text-sm text-white relative z-10;
}
.auth-footer p {
  @apply mb-1;
}
.register-link {
  @apply text-rift-600 hover:text-rift-500 font-medium transition-colors;
}
.register-link:hover {
  text-shadow: 0 0 8px rgba(51,197,255,0.5);
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
</style>
