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
        <button type="submit" ref="submitButton">Create Account</button>
      </form>
      <p v-if="error" class="error">{{ error }}</p>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { getFirestore, doc, setDoc } from "firebase/firestore";
import gsap from "gsap";
import * as THREE from "three";
import anime from "animejs/lib/anime.es.js";

// Firebase configuration - replace with your own project's config
const firebaseConfig = {
  apiKey: "VITE_FIREBASE_API_KEY",
  authDomain: "VITE_FIREBASE_AUTH_DOMAIN",
  projectId: "VITE_FIREBASE_PROJECT_ID",
  storageBucket: "VITE_FIREBASE_STORAGE_BUCKET",
  messagingSenderId: "VITE_FIREBASE_MESSAGING_SENDER_ID",
  appId: "VITE_FIREBASE_APP_ID"
};

// Initialize Firebase services
const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp);
const db = getFirestore(firebaseApp);

// Reactive form data and error handling
const email = ref('');
const password = ref('');
const username = ref('');
const error = ref('');

// DOM refs for animations
const title = ref(null);
const submitButton = ref(null);
const starCanvas = ref(null);

const register = async () => {
  error.value = '';
  try {
    // Create the Firebase Authentication user
    const userCredential = await createUserWithEmailAndPassword(auth, email.value, password.value);
    const user = userCredential.user;
    
    // Update the user's display name with the username
    await updateProfile(user, { displayName: username.value });
    
    // Save user data to Firestore in a new document
    await setDoc(doc(db, "users", user.uid), {
      username: username.value,
      email: email.value,
      createdAt: new Date().toISOString()
    });
    
    console.log("Cosmic registration successful:", user);
  } catch (err) {
    error.value = err.message;
    console.error("Registration error:", err);
  }
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
}

.epic-title {
  color: #fff;
  font-family: 'Orbitron', sans-serif;
  margin-bottom: 1rem;
  font-size: 2rem;
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
}

button {
  padding: 0.75rem;
  border: none;
  border-radius: 5px;
  background: linear-gradient(45deg, #00dbde, #fc00ff);
  color: #fff;
  font-size: 1rem;
  cursor: pointer;
  transition: transform 0.3s ease;
}

button:hover {
  transform: scale(1.05);
}

.error {
  color: #ff5555;
  font-size: 0.9rem;
}
</style>
