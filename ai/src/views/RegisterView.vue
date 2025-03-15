<template>
  <div id="register-page">
    <!-- THREE.js cosmic starfield -->
    <canvas ref="starCanvas" class="starfield"></canvas>
    <div class="form-container">
      <h1 ref="title" class="epic-title">Register Your Cosmic Account</h1>
      <form @submit.prevent="register">
        <input v-model="username" type="text" placeholder="Username" required />
        <input v-model="email" type="email" placeholder="Email" required />
        <input v-model="password" type="password" placeholder="Password" required />
        <button type="submit" ref="submitButton" :disabled="isLoading">
          {{ isLoading ? 'Creating Account...' : 'Create Account' }}
        </button>
      </form>
      <p v-if="error" class="error">{{ error }}</p>
      <p class="login-link">Already have an account? <router-link to="/login">Login here</router-link></p>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { useAuthStore } from '@/store/auth';
import gsap from "gsap";
import * as THREE from "three";
import anime from "animejs/lib/anime.es.js";

// Use the AuthStore instead of direct Firebase calls
const authStore = useAuthStore();
const router = useRouter();

// Reactive form data and state
const email = ref('');
const password = ref('');
const username = ref('');
const error = ref('');
const isLoading = ref(false);

// DOM refs for animations
const title = ref(null);
const submitButton = ref(null);
const starCanvas = ref(null);

// Register function using the auth store - FIXED IMPLEMENTATION
const register = async () => {
  if (isLoading.value) return;
  
  error.value = '';
  isLoading.value = true;
  
  try {
    const { success, error: registrationError, user } = await authStore.registerUser(
      email.value, 
      password.value, 
      username.value
    );
    
    if (success) {
      console.log("🎉 Cosmic registration successful!", user);
      
      // Redirect to the specified URL
      window.location.href = 'https://ai.dawntasy.com/onboarding';

    } else {
      error.value = registrationError || "An unknown error occurred during registration";
      console.error("Registration error:", registrationError);
    }
  } catch (err) {
    error.value = err.message || "Failed to create account";
    console.error("Registration error:", err);
  } finally {
    isLoading.value = false;
  }
};

// Portal effect for transitions
const createPortalEffect = (callback) => {
  // Create portal element
  const portal = document.createElement('div');
  portal.style.cssText = `
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) scale(0);
    width: 100vw;
    height: 100vh;
    background: radial-gradient(circle, rgba(139, 92, 246, 0.8) 0%, transparent 70%);
    border-radius: 50%;
    z-index: 9999;
    opacity: 0;
    transition: transform 1s cubic-bezier(0.19, 1, 0.22, 1), opacity 1s cubic-bezier(0.19, 1, 0.22, 1);
  `;
  document.body.appendChild(portal);
  
  // Animate portal opening
  setTimeout(() => {
    portal.style.opacity = '1';
    portal.style.transform = 'translate(-50%, -50%) scale(5)';
    
    // Execute callback after animation completes
    setTimeout(() => {
      callback();
    }, 1000);
  }, 50);
};

onMounted(() => {
  // GSAP animations for a smooth, epic entry
  gsap.from(title.value, { duration: 1.5, opacity: 0, y: -50, ease: "power2.out" });
  gsap.from(submitButton.value, { duration: 1, opacity: 0, delay: 0.5, scale: 0.5, ease: "elastic.out(1, 0.3)" });
  
  // AnimeJS for input fields; staggered sliding-in effect
  anime({
    targets: 'input',
    translateX: [-50, 0],
    opacity: [0, 1],
    delay: anime.stagger(100)
  });
  
  // Setup THREE.js cosmic starfield background
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
  const renderer = new THREE.WebGLRenderer({ canvas: starCanvas.value, alpha: true });
  renderer.setSize(window.innerWidth, window.innerHeight);
  
  // Create starfield particles
  const starGeometry = new THREE.BufferGeometry();
  const starCount = 10000;
  const starVertices = [];
  for (let i = 0; i < starCount; i++) {
    starVertices.push((Math.random() - 0.5) * 2000);
    starVertices.push((Math.random() - 0.5) * 2000);
    starVertices.push((Math.random() - 0.5) * 2000);
  }
  starGeometry.setAttribute('position', new THREE.Float32BufferAttribute(starVertices, 3));
  
  const starMaterial = new THREE.PointsMaterial({
    color: 0xffffff,
    size: 1,
    transparent: true,
  });
  
  const stars = new THREE.Points(starGeometry, starMaterial);
  scene.add(stars);
  camera.position.z = 1;
  
  const animate = () => {
    requestAnimationFrame(animate);
    // Add parallax rotation to the starfield
    stars.rotation.x += 0.0005;
    stars.rotation.y += 0.0005;
    renderer.render(scene, camera);
  };
  animate();
  
  // Update renderer on window resize for responsiveness
  window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  });
});
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700&display=swap');

#register-page {
  position: relative;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  background: radial-gradient(ellipse at bottom, #1b2735 0%, #090a0f 100%);
  display: flex;
  justify-content: center;
  align-items: center;
}

.starfield {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.form-container {
  position: relative;
  z-index: 2;
  background: rgba(0, 0, 0, 0.75);
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 0 20px rgba(255, 255, 255, 0.1);
  text-align: center;
  backdrop-filter: blur(5px);
  max-width: 400px;
  width: 90%;
}

.epic-title {
  color: #fff;
  font-family: 'Orbitron', sans-serif;
  margin-bottom: 1.5rem;
  font-size: 2rem;
  text-shadow: 0 0 10px rgba(139, 92, 246, 0.7);
}

form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

input {
  padding: 0.75rem;
  border: none;
  border-radius: 5px;
  font-size: 1rem;
  background: rgba(255, 255, 255, 0.1);
  color: white;
  border: 1px solid rgba(139, 92, 246, 0.3);
}

input::placeholder {
  color: rgba(255, 255, 255, 0.5);
}

input:focus {
  outline: none;
  border-color: #8b5cf6;
  box-shadow: 0 0 10px rgba(139, 92, 246, 0.5);
}

button {
  padding: 0.75rem;
  border: none;
  border-radius: 5px;
  background: linear-gradient(45deg, #00dbde, #fc00ff);
  color: #fff;
  font-size: 1rem;
  cursor: pointer;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  font-weight: bold;
  margin-top: 0.5rem;
}

button:not(:disabled):hover {
  transform: scale(1.05);
  box-shadow: 0 0 15px rgba(139, 92, 246, 0.7);
}

button:disabled {
  opacity: 0.7;
  cursor: not-allowed;
  background: linear-gradient(45deg, #666, #999);
}

.error {
  color: #ff5555;
  font-size: 0.9rem;
  margin-top: 1rem;
  background: rgba(255, 0, 0, 0.1);
  padding: 0.5rem;
  border-radius: 5px;
  border-left: 3px solid #ff5555;
}

.login-link {
  margin-top: 1.5rem;
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.7);
}

.login-link a {
  color: #8b5cf6;
  text-decoration: none;
  font-weight: bold;
}

.login-link a:hover {
  text-decoration: underline;
  text-shadow: 0 0 5px rgba(139, 92, 246, 0.5);
}

@media (max-width: 480px) {
  .form-container {
    padding: 1.5rem;
  }
  
  .epic-title {
    font-size: 1.5rem;
  }
  
  input, button {
    padding: 0.6rem;
  }
}
</style>
