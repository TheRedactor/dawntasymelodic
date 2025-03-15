<template>
  <div id="register-page">
    <!-- THREE.js Cosmic Starfield Background -->
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
      <p class="login-link">
        Already have an account?
        <router-link to="/login">Login here</router-link>
      </p>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { getApp, getApps, initializeApp } from 'firebase/app';
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
  setPersistence,
  browserLocalPersistence,
  browserSessionPersistence
} from 'firebase/auth';
import { getFirestore, setDoc, doc, serverTimestamp } from 'firebase/firestore';
import gsap from 'gsap';
import * as THREE from 'three';
import anime from 'animejs/lib/anime.es.js';

// Firebase configuration (replace with your actual config)
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_PROJECT_ID.appspot.com",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID"
};

// Prevent duplicate initialization
let app;
try {
  if (getApps().length === 0) {
    app = initializeApp(firebaseConfig);
  } else {
    app = getApp();
  }
} catch (error) {
  console.error("Firebase initialization error:", error);
}

const auth = getAuth(app);
const db = getFirestore(app);
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

// Registration function using Firebase Auth and Firestore
const register = async () => {
  if (isLoading.value) return;
  
  error.value = '';
  isLoading.value = true;
  
  try {
    // Set persistence based on your desired option (local in this case)
    await setPersistence(auth, browserLocalPersistence);
    
    // Create the user with email and password
    const userCredential = await createUserWithEmailAndPassword(auth, email.value, password.value);
    const user = userCredential.user;
    
    // Update the user's display name with the provided username
    await updateProfile(user, { displayName: username.value });
    
    // Create a Firestore document in 'users' collection for the user
    await setDoc(doc(db, 'users', user.uid), {
      username: username.value,
      email: email.value,
      createdAt: serverTimestamp()
    });
    
    console.log("🎉 Cosmic registration successful!", user);
    
    // Redirect to the onboarding page
    window.location.href = 'https://ai.dawntasy.com/onboarding';
  } catch (err) {
    console.error("Registration error:", err);
    // Handle errors based on error codes
    if (err.code === 'auth/email-already-in-use') {
      error.value = 'This quantum ID is already in use.';
    } else if (err.code === 'auth/invalid-email') {
      error.value = 'The provided quantum ID is invalid.';
    } else if (err.code === 'auth/weak-password') {
      error.value = 'Dimensional key too weak. Must be at least 6 characters.';
    } else {
      error.value = err.message || 'An unknown error occurred during registration';
    }
  } finally {
    isLoading.value = false;
  }
};

onMounted(() => {
  // Animate title and submit button using GSAP for a legendary entrance
  gsap.from(title.value, { duration: 1.5, opacity: 0, y: -50, ease: "power2.out" });
  gsap.from(submitButton.value, { duration: 1, opacity: 0, delay: 0.5, scale: 0.5, ease: "elastic.out(1, 0.3)" });
  
  // Staggered sliding-in effect for input fields using AnimeJS
  anime({
    targets: 'input',
    translateX: [-50, 0],
    opacity: [0, 1],
    delay: anime.stagger(100)
  });
  
  // THREE.js cosmic starfield background setup
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
  const renderer = new THREE.WebGLRenderer({ canvas: starCanvas.value, alpha: true });
  renderer.setSize(window.innerWidth, window.innerHeight);
  
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
    transparent: true
  });
  
  const stars = new THREE.Points(starGeometry, starMaterial);
  scene.add(stars);
  camera.position.z = 1;
  
  const animate = () => {
    requestAnimationFrame(animate);
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
  box-shadow: 0 0 20px rgba(255, 255, 255, 0.2);
  text-align: center;
  backdrop-filter: blur(8px);
  max-width: 400px;
  width: 90%;
}

.epic-title {
  color: #fff;
  font-family: 'Orbitron', sans-serif;
  margin-bottom: 1.5rem;
  font-size: 2rem;
  text-shadow: 0 0 10px rgba(139,92,246,0.8);
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
  border: 1px solid rgba(139,92,246,0.3);
  transition: box-shadow 0.3s ease;
}

input::placeholder {
  color: rgba(255, 255, 255, 0.5);
}

input:focus {
  outline: none;
  border-color: #8b5cf6;
  box-shadow: 0 0 10px rgba(139,92,246,0.8);
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
  box-shadow: 0 0 15px rgba(139,92,246,0.7);
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
  text-shadow: 0 0 5px rgba(139,92,246,0.5);
}
</style>
