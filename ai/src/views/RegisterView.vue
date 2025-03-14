<template>
  <div class="auth-container" ref="authContainer">
    <canvas ref="galaxyCanvas" class="galaxy-canvas"></canvas>
    
    <div class="auth-card">
      <div class="hyperspace-portal" ref="hyperspacePortal">
        <div class="quantum-rings"></div>
        <div class="singularity-core"></div>
      </div>

      <h1 class="auth-title">Begin Your Cosmic Journey</h1>
      
      <form @submit.prevent="handleRegister" class="auth-form">
        <div v-if="error" class="error-alert">
          <div class="alert-icon">!</div>
          <p class="alert-message">{{ error }}</p>
        </div>

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
              @focus="focusField('name')"
              @blur="blurField"
            />
            <div class="input-glow"></div>
          </div>
        </div>

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
              @focus="focusField('email')"
              @blur="blurField"
            />
            <div class="input-glow"></div>
          </div>
        </div>

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
        </div>

        <div class="terms-check">
          <label class="terms-label">
            <input type="checkbox" v-model="agreeToTerms" required>
            <span class="checkmark"></span>
            <span class="label-text">
              I agree to the <a href="#" class="terms-link" @click.prevent="showTerms = true">Terms of Service</a>
            </span>
          </label>
        </div>

        <button 
          type="submit" 
          class="register-button"
          :disabled="isLoading || !agreeToTerms"
        >
          <span v-if="isLoading" class="loading-spinner"></span>
          <span v-else>Create Account</span>
        </button>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import * as THREE from 'three';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import anime from 'animejs';

// Reactive State
const name = ref('');
const email = ref('');
const password = ref('');
const showPassword = ref(false);
const focusedField = ref('');
const isLoading = ref(false);
const error = ref('');
const agreeToTerms = ref(false);
const showTerms = ref(false);

// Three.js Setup
const authContainer = ref<HTMLElement>();
const galaxyCanvas = ref<HTMLCanvasElement>();
let scene: THREE.Scene, camera: THREE.PerspectiveCamera, renderer: THREE.WebGLRenderer;
let geometry: THREE.BufferGeometry, material: THREE.PointsMaterial, stars: THREE.Points;

const initGalaxy = () => {
  scene = new THREE.Scene();
  camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);
  renderer = new THREE.WebGLRenderer({ 
    canvas: galaxyCanvas.value!,
    alpha: true,
    antialias: true
  });
  renderer.setSize(window.innerWidth, window.innerHeight);

  // Create star particles
  const positions = new Float32Array(5000 * 3);
  const colors = new Float32Array(5000 * 3);
  
  for(let i = 0; i < 15000; i += 3) {
    positions[i] = (Math.random() - 0.5) * 10;
    positions[i+1] = (Math.random() - 0.5) * 10;
    positions[i+2] = (Math.random() - 0.5) * 10;
    
    colors[i] = Math.random();
    colors[i+1] = Math.random();
    colors[i+2] = Math.random();
  }

  geometry = new THREE.BufferGeometry();
  geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
  geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

  material = new THREE.PointsMaterial({
    size: 0.05,
    vertexColors: true,
    transparent: true,
    blending: THREE.AdditiveBlending
  });

  stars = new THREE.Points(geometry, material);
  scene.add(stars);

  camera.position.z = 15;
};

// Animations
const initAnimations = () => {
  // GSAP Scroll Effects
  gsap.from(".auth-card", {
    opacity: 0,
    y: 100,
    duration: 2,
    ease: "power4.out",
    scrollTrigger: {
      trigger: ".auth-container",
      start: "top center"
    }
  });

  // Anime.js Portal Animation
  anime({
    targets: '.quantum-rings',
    rotate: '+=360',
    duration: 12000,
    loop: true,
    easing: 'linear'
  });

  // Hover Effects
  document.querySelectorAll('.form-group').forEach((group) => {
    group.addEventListener('mouseenter', () => {
      gsap.to(group, {
        y: -5,
        scale: 1.02,
        duration: 0.3
      });
    });
    group.addEventListener('mouseleave', () => {
      gsap.to(group, {
        y: 0,
        scale: 1,
        duration: 0.3
      });
    });
  });
};

// Form Handlers
const focusField = (field: string) => {
  focusedField.value = field;
  gsap.to(`.form-group.${field} .input-glow`, {
    width: '100%',
    opacity: 0.4,
    duration: 0.3
  });
};

const blurField = () => {
  focusedField.value = '';
  gsap.to('.input-glow', {
    width: '0%',
    opacity: 0,
    duration: 0.3
  });
};

const handleRegister = async () => {
  isLoading.value = true;
  // Simulate API call
  setTimeout(() => {
    isLoading.value = false;
    gsap.to('.auth-card', {
      y: -50,
      opacity: 0,
      duration: 0.5,
      onComplete: () => {
        window.location.href = '/dashboard';
      }
    });
  }, 2000);
};

onMounted(() => {
  initGalaxy();
  initAnimations();
  
  // Animation Loop
  const animate = () => {
    requestAnimationFrame(animate);
    stars.rotation.x += 0.0001;
    stars.rotation.y += 0.0001;
    renderer.render(scene, camera);
  };
  animate();

  // Resize Handler
  window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  });
});
</script>

<style scoped>
.auth-container {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: radial-gradient(ellipse at center, #0a061f, #000000);
  position: relative;
  overflow: hidden;
}

.galaxy-canvas {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 0;
  opacity: 0.6;
}

.auth-card {
  background: rgba(13, 13, 61, 0.95);
  backdrop-filter: blur(20px);
  border-radius: 1.5rem;
  padding: 3rem;
  width: 90%;
  max-width: 500px;
  position: relative;
  z-index: 2;
  border: 2px solid rgba(139, 92, 246, 0.3);
  box-shadow: 0 0 50px rgba(139, 92, 246, 0.2);
}

.hyperspace-portal {
  position: absolute;
  width: 600px;
  height: 600px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  pointer-events: none;
  z-index: 1;
  opacity: 0.2;
}

.quantum-rings {
  position: absolute;
  width: 100%;
  height: 100%;
  border: 3px solid #8b5cf6;
  border-radius: 50%;
  filter: blur(10px);
}

.singularity-core {
  position: absolute;
  width: 100px;
  height: 100px;
  background: radial-gradient(circle, #ff3a70, #06a6ee);
  border-radius: 50%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  filter: blur(30px);
  opacity: 0.3;
}

.auth-title {
  font-size: 2.5rem;
  text-align: center;
  background: linear-gradient(45deg, #fff, #8b5cf6);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  margin-bottom: 2rem;
  text-shadow: 0 0 30px rgba(139, 92, 246, 0.5);
}

.form-group {
  margin-bottom: 1.5rem;
  transition: transform 0.3s ease;
}

.input-wrapper {
  position: relative;
  background: rgba(15, 23, 42, 0.8);
  border-radius: 0.75rem;
  border: 1px solid rgba(139, 92, 246, 0.3);
  transition: all 0.3s ease;
}

.input-icon {
  width: 24px;
  height: 24px;
  position: absolute;
  left: 1rem;
  top: 50%;
  transform: translateY(-50%);
  color: #8b5cf6;
}

.form-input {
  width: 100%;
  padding: 1rem 1rem 1rem 3.5rem;
  background: transparent;
  border: none;
  color: white;
  font-size: 1rem;
  outline: none;
}

.input-glow {
  position: absolute;
  bottom: 0;
  left: 0;
  height: 2px;
  width: 0%;
  background: linear-gradient(90deg, #8b5cf6, #06a6ee);
  opacity: 0;
}

.register-button {
  width: 100%;
  padding: 1.25rem;
  border: none;
  border-radius: 0.75rem;
  background: linear-gradient(45deg, #8b5cf6, #ff3a70);
  color: white;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition: all 0.3s ease;
}

.register-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 20px rgba(139, 92, 246, 0.4);
}

.loading-spinner {
  display: inline-block;
  width: 24px;
  height: 24px;
  border: 3px solid rgba(255, 255, 255, 0.3);
  border-radius: 50%;
  border-top-color: white;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  to { transform: rotate(360deg); }
}

.error-alert {
  background: rgba(255, 58, 112, 0.1);
  border: 1px solid #ff3a70;
  padding: 1rem;
  border-radius: 0.5rem;
  margin-bottom: 1.5rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.alert-icon {
  width: 24px;
  height: 24px;
  background: #ff3a70;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: bold;
}
</style>