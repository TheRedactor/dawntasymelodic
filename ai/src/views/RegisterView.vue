// CosmicApp.vue
<template>
  <div class="cosmic-container">
    <!-- THREE.JS CANVAS -->
    <div id="cosmic-canvas" ref="cosmicCanvas"></div>
    
    <!-- NAVIGATION -->
    <nav class="cosmic-nav" :class="{ 'nav-authenticated': isAuthenticated }">
      <div class="brand">
        <span class="cosmic-title">COSMIC VOYAGER</span>
      </div>
      <div class="nav-links">
        <button @click="currentView = 'home'" class="nav-btn" :class="{ active: currentView === 'home' }">
          <i class="fas fa-galaxy"></i> Home
        </button>
        <button @click="currentView = 'explore'" class="nav-btn" :class="{ active: currentView === 'explore' }">
          <i class="fas fa-telescope"></i> Explore
        </button>
        <button v-if="!isAuthenticated" @click="currentView = 'auth'" class="nav-btn auth-btn">
          <i class="fas fa-user-astronaut"></i> Login
        </button>
        <button v-else @click="handleLogout" class="nav-btn logout-btn">
          <i class="fas fa-door-open"></i> Logout
        </button>
      </div>
    </nav>

    <!-- MAIN CONTENT -->
    <main class="cosmic-content">
      <!-- HOME VIEW -->
      <div v-if="currentView === 'home'" class="home-view">
        <div class="cosmic-hero">
          <h1 class="hero-title">COSMIC VOYAGER</h1>
          <h2 class="hero-subtitle">EXPLORE THE QUANTUM UNIVERSE</h2>
          <button @click="currentView = 'explore'" class="cosmic-btn pulse-btn">
            BEGIN JOURNEY
          </button>
        </div>
      </div>

      <!-- EXPLORE VIEW -->
      <div v-else-if="currentView === 'explore'" class="explore-view">
        <div class="dimension-cards">
          <div v-for="(dimension, index) in dimensions" :key="index" 
               class="dimension-card" 
               @click="selectDimension(dimension)"
               :class="{ 'selected': selectedDimension === dimension }">
            <h3>{{ dimension.name }}</h3>
            <p>{{ dimension.description }}</p>
            <div class="dimension-energy-meter">
              <div class="energy-fill" :style="{ width: dimension.energyLevel + '%' }"></div>
            </div>
          </div>
        </div>

        <div v-if="selectedDimension" class="dimension-detail">
          <h2>{{ selectedDimension.name }}</h2>
          <p>{{ selectedDimension.fullDescription }}</p>
          <button @click="saveFavorite(selectedDimension)" 
                  :disabled="!isAuthenticated" 
                  class="cosmic-btn">
            {{ isAuthenticated ? 'SAVE TO FAVORITES' : 'LOGIN TO SAVE' }}
          </button>
        </div>
      </div>

      <!-- AUTH VIEW -->
      <div v-else-if="currentView === 'auth'" class="auth-view">
        <div class="auth-container">
          <h2>{{ isLogin ? 'LOGIN TO CONTINUE' : 'CREATE NEW ACCOUNT' }}</h2>
          
          <form @submit.prevent="handleAuth" class="auth-form">
            <div class="form-group">
              <label>EMAIL</label>
              <input v-model="authForm.email" type="email" required class="cosmic-input" />
            </div>
            
            <div class="form-group">
              <label>PASSWORD</label>
              <input v-model="authForm.password" type="password" required class="cosmic-input" />
            </div>

            <div v-if="!isLogin" class="form-group">
              <label>CONFIRM PASSWORD</label>
              <input v-model="authForm.confirmPassword" type="password" class="cosmic-input" />
            </div>

            <div v-if="authError" class="auth-error">
              {{ authError }}
            </div>

            <button type="submit" class="cosmic-btn auth-submit-btn">
              {{ isLogin ? 'LOGIN' : 'CREATE ACCOUNT' }}
            </button>
          </form>

          <p class="auth-toggle">
            {{ isLogin ? "Don't have an account?" : "Already have an account?" }}
            <span @click="isLogin = !isLogin" class="toggle-link">
              {{ isLogin ? 'CREATE ONE' : 'LOGIN' }}
            </span>
          </p>
        </div>
      </div>
    </main>

    <!-- USER PROFILE -->
    <div v-if="isAuthenticated" class="user-profile">
      <div class="profile-badge">
        <div class="user-avatar">
          <img :src="userProfile.photoURL || 'https://via.placeholder.com/40'" alt="User" />
        </div>
        <div class="user-info">
          <span class="user-name">{{ userProfile.displayName || 'Cosmic Explorer' }}</span>
          <span class="user-level">Level: {{ userProfile.level || 1 }}</span>
        </div>
      </div>

      <div v-if="currentView === 'explore' && userFavorites.length > 0" class="favorites-panel">
        <h3>YOUR COSMIC FAVORITES</h3>
        <div class="favorites-list">
          <div v-for="(fav, index) in userFavorites" :key="index" 
               class="favorite-item"
               @click="selectDimension(fav)">
            {{ fav.name }}
          </div>
        </div>
      </div>
    </div>

    <!-- NOTIFICATIONS -->
    <div class="notification-container">
      <div v-for="(notification, index) in notifications" 
           :key="index" 
           class="notification" 
           :class="notification.type">
        {{ notification.message }}
      </div>
    </div>
  </div>
</template>

<script>
import { ref, reactive, onMounted, watch } from 'vue';
import * as THREE from 'three';
import { initializeApp } from 'firebase/app';
import { 
  getAuth, 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword, 
  signOut, 
  onAuthStateChanged 
} from 'firebase/auth';
import { 
  getFirestore, 
  doc, 
  setDoc, 
  getDoc, 
  updateDoc, 
  collection, 
  addDoc, 
  query, 
  where, 
  getDocs 
} from 'firebase/firestore';
import gsap from 'gsap';
import anime from 'animejs';

export default {
  name: 'CosmicApp',
  setup() {
    // Firebase configuration
    const firebaseConfig = {
      apiKey: "YOUR_API_KEY",
      authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
      projectId: "YOUR_PROJECT_ID",
      storageBucket: "YOUR_PROJECT_ID.appspot.com",
      messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
      appId: "YOUR_APP_ID"
    };

    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    const auth = getAuth(app);
    const db = getFirestore(app);

    // State variables
    const currentView = ref('home');
    const isAuthenticated = ref(false);
    const isLogin = ref(true);
    const cosmicCanvas = ref(null);
    const authForm = reactive({
      email: '',
      password: '',
      confirmPassword: ''
    });
    const authError = ref('');
    const userProfile = reactive({
      uid: '',
      displayName: '',
      photoURL: '',
      level: 1,
      experience: 0
    });
    const userFavorites = ref([]);
    const notifications = ref([]);
    const stars = ref([]);
    const scene = ref(null);
    const camera = ref(null);
    const renderer = ref(null);
    const dimensions = ref([
      {
        id: 1,
        name: "QUANTUM NEBULA",
        description: "A cosmic cloud of extraordinary particles.",
        fullDescription: "The Quantum Nebula represents the most extraordinary collection of subatomic particles in our known universe. Its vibrant colors and energy signatures reveal patterns of quantum entanglement that defy conventional physics. Scientists believe this nebula could be the birthplace of entirely new elements and perhaps even new forms of matter.",
        energyLevel: 85
      },
      {
        id: 2,
        name: "DIMENSIONAL RIFT",
        description: "A tear in the fabric of spacetime.",
        fullDescription: "The Dimensional Rift is a mysterious phenomenon where our dimension intersects with others. Strange energy signatures and time dilation effects have been observed in its vicinity. Theoretical physicists suggest that through this rift, we might glimpse parallel universes or even establish contact with other dimensional beings. Approach with extreme caution.",
        energyLevel: 92
      },
      {
        id: 3,
        name: "CELESTIAL HARMONIC",
        description: "Where cosmic forces create universal music.",
        fullDescription: "The Celestial Harmonic is where the fundamental forces of the universe - gravity, electromagnetism, and the strong and weak nuclear forces - align in perfect harmony. This creates cosmic vibrations that, when translated to our audible spectrum, produce the most hauntingly beautiful music ever recorded. It's believed that these harmonics contain mathematical patterns that could unlock deeper understanding of the universe's structure.",
        energyLevel: 78
      },
      {
        id: 4,
        name: "HYPERSPACE GATEWAY",
        description: "The threshold to instantaneous cosmic travel.",
        fullDescription: "The Hyperspace Gateway represents a theoretical point where spacetime can be folded, allowing for instantaneous travel between distant points in the universe. Advanced civilizations may have already mastered this technology, creating a network of these gateways. Current research focuses on detecting the unique gravitational wave signatures these gateways would produce across the cosmos.",
        energyLevel: 88
      }
    ]);
    const selectedDimension = ref(null);

    // Animation controllers
    let animationFrame = null;
    const starfieldParams = {
      count: 5000,
      size: 0.015,
      speed: 0.02,
      distance: 100
    };

    // THREE.js setup
    const initThreeJs = () => {
      // Create scene
      scene.value = new THREE.Scene();
      
      // Create camera
      camera.value = new THREE.PerspectiveCamera(
        75, 
        window.innerWidth / window.innerHeight, 
        0.1, 
        1000
      );
      camera.value.position.z = 5;
      
      // Create renderer
      renderer.value = new THREE.WebGLRenderer({ alpha: true, antialias: true });
      renderer.value.setSize(window.innerWidth, window.innerHeight);
      renderer.value.setPixelRatio(window.devicePixelRatio);
      
      // Append to DOM
      if (cosmicCanvas.value) {
        cosmicCanvas.value.appendChild(renderer.value.domElement);
      }
      
      // Create stars
      const starGeometry = new THREE.BufferGeometry();
      const starMaterial = new THREE.PointsMaterial({
        color: 0xFFFFFF,
        size: starfieldParams.size,
        transparent: true,
      });
      
      const starPositions = [];
      const starColors = [];
      
      for (let i = 0; i < starfieldParams.count; i++) {
        const x = (Math.random() - 0.5) * starfieldParams.distance;
        const y = (Math.random() - 0.5) * starfieldParams.distance;
        const z = (Math.random() - 0.5) * starfieldParams.distance;
        
        starPositions.push(x, y, z);
        
        // Give some stars color variation
        if (Math.random() > 0.8) {
          const r = Math.random();
          const g = Math.random();
          const b = Math.random();
          starColors.push(r, g, b, 1);
        } else {
          starColors.push(1, 1, 1, 1); // White stars
        }
      }
      
      starGeometry.setAttribute('position', new THREE.Float32BufferAttribute(starPositions, 3));
      starGeometry.setAttribute('color', new THREE.Float32BufferAttribute(starColors, 4));
      
      const starPoints = new THREE.Points(starGeometry, starMaterial);
      scene.value.add(starPoints);
      stars.value.push(starPoints);
      
      // Add nebula clouds (particles with different colors)
      const nebulaGeometry = new THREE.BufferGeometry();
      const nebulaMaterial = new THREE.PointsMaterial({
        size: 0.05,
        transparent: true,
        opacity: 0.6,
        vertexColors: true,
      });
      
      const nebulaPositions = [];
      const nebulaColors = [];
      
      for (let i = 0; i < 1000; i++) {
        // Create clusters of particles
        const angle = Math.random() * Math.PI * 2;
        const radius = 5 + Math.random() * 10;
        const x = Math.cos(angle) * radius;
        const y = Math.sin(angle) * radius;
        const z = (Math.random() - 0.5) * 10;
        
        nebulaPositions.push(x, y, z);
        
        // Pink/purple nebula colors
        const r = 0.5 + Math.random() * 0.5;
        const g = 0.2 + Math.random() * 0.3;
        const b = 0.5 + Math.random() * 0.5;
        nebulaColors.push(r, g, b, 1);
      }
      
      nebulaGeometry.setAttribute('position', new THREE.Float32BufferAttribute(nebulaPositions, 3));
      nebulaGeometry.setAttribute('color', new THREE.Float32BufferAttribute(nebulaColors, 4));
      
      const nebula = new THREE.Points(nebulaGeometry, nebulaMaterial);
      nebula.position.z = -20;
      scene.value.add(nebula);
      
      // Animation function
      const animate = () => {
        animationFrame = requestAnimationFrame(animate);
        
        // Rotate stars
        stars.value.forEach(star => {
          star.rotation.x += 0.0003;
          star.rotation.y += 0.0002;
        });
        
        // Make nebula move
        nebula.rotation.z += 0.001;
        
        // Update renderer
        renderer.value.render(scene.value, camera.value);
      };
      
      // Start animation
      animate();
      
      // Handle window resize
      window.addEventListener('resize', () => {
        camera.value.aspect = window.innerWidth / window.innerHeight;
        camera.value.updateProjectionMatrix();
        renderer.value.setSize(window.innerWidth, window.innerHeight);
      });
    };

    // Handle authentication
    const handleAuth = async () => {
      try {
        authError.value = '';
        
        if (!isLogin.value && authForm.password !== authForm.confirmPassword) {
          authError.value = 'Passwords do not match';
          return;
        }
        
        if (isLogin.value) {
          // Login process
          const userCredential = await signInWithEmailAndPassword(
            auth, 
            authForm.email, 
            authForm.password
          );
          const user = userCredential.user;
          
          // Get user profile
          const docRef = doc(db, "users", user.uid);
          const docSnap = await getDoc(docRef);
          
          if (docSnap.exists()) {
            const userData = docSnap.data();
            Object.assign(userProfile, userData);
          }
          
          showNotification('LOGIN SUCCESSFUL! Welcome back, explorer!', 'success');
        } else {
          // Sign up process
          const userCredential = await createUserWithEmailAndPassword(
            auth, 
            authForm.email, 
            authForm.password
          );
          const user = userCredential.user;
          
          // Create user profile
          const newUser = {
            uid: user.uid,
            email: user.email,
            displayName: 'Cosmic Explorer',
            level: 1,
            experience: 0,
            createdAt: new Date().toISOString(),
            favorites: []
          };
          
          // Save to Firestore
          await setDoc(doc(db, "users", user.uid), newUser);
          Object.assign(userProfile, newUser);
          
          showNotification('ACCOUNT CREATED! Welcome to the cosmic journey!', 'success');
        }
        
        // Reset form
        authForm.email = '';
        authForm.password = '';
        authForm.confirmPassword = '';
        
        // Navigate to home
        currentView.value = 'home';
        
        // Load user favorites
        loadUserFavorites();
        
      } catch (error) {
        console.error("Auth error:", error);
        authError.value = error.message;
        showNotification('AUTHENTICATION ERROR', 'error');
      }
    };

    // Handle logout
    const handleLogout = async () => {
      try {
        await signOut(auth);
        isAuthenticated.value = false;
        
        // Reset user data
        Object.assign(userProfile, {
          uid: '',
          displayName: '',
          photoURL: '',
          level: 1,
          experience: 0
        });
        
        userFavorites.value = [];
        showNotification('LOGGED OUT. Until next time, explorer!', 'info');
        
      } catch (error) {
        console.error("Logout error:", error);
        showNotification('LOGOUT FAILED', 'error');
      }
    };

    // Load user favorites
    const loadUserFavorites = async () => {
      if (!isAuthenticated.value || !userProfile.uid) return;
      
      try {
        const q = query(
          collection(db, "favorites"),
          where("userId", "==", userProfile.uid)
        );
        
        const querySnapshot = await getDocs(q);
        const favs = [];
        
        querySnapshot.forEach((doc) => {
          favs.push(doc.data().dimension);
        });
        
        userFavorites.value = favs;
        
      } catch (error) {
        console.error("Error loading favorites:", error);
      }
    };

    // Save favorite dimension
    const saveFavorite = async (dimension) => {
      if (!isAuthenticated.value) {
        showNotification('LOGIN REQUIRED to save favorites', 'warning');
        return;
      }
      
      try {
        // Check if already favorited
        const isDuplicate = userFavorites.value.some(fav => fav.id === dimension.id);
        
        if (isDuplicate) {
          showNotification('This dimension is already in your favorites!', 'info');
          return;
        }
        
        // Add to favorites collection
        await addDoc(collection(db, "favorites"), {
          userId: userProfile.uid,
          dimension: dimension,
          addedAt: new Date().toISOString()
        });
        
        // Update local state
        userFavorites.value.push(dimension);
        
        // Add experience points
        userProfile.experience += 50;
        if (userProfile.experience >= 1000) {
          userProfile.level += 1;
          userProfile.experience -= 1000;
          showNotification(`LEVEL UP! You are now level ${userProfile.level}!`, 'success');
        }
        
        // Update user profile
        await updateDoc(doc(db, "users", userProfile.uid), {
          level: userProfile.level,
          experience: userProfile.experience
        });
        
        // Show notification
        showNotification('DIMENSION SAVED to your favorites!', 'success');
        
        // Animate favorite button
        gsap.to(".cosmic-btn", {
          scale: 1.2,
          duration: 0.3,
          yoyo: true,
          repeat: 1
        });
        
      } catch (error) {
        console.error("Error saving favorite:", error);
        showNotification('ERROR saving favorite', 'error');
      }
    };

    // Select dimension
    const selectDimension = (dimension) => {
      selectedDimension.value = dimension;
      
      // Animate selection
      anime({
        targets: '.dimension-card',
        scale: 0.95,
        duration: 200,
        easing: 'easeInOutQuad'
      });
      
      anime({
        targets: '.dimension-card.selected',
        scale: 1.05,
        duration: 300,
        easing: 'easeInOutQuad'
      });
      
      // Animate detail panel appearance
      gsap.from(".dimension-detail", {
        y: 50,
        opacity: 0,
        duration: 0.5,
        ease: "power2.out"
      });
    };

    // Notification system
    const showNotification = (message, type = 'info') => {
      const notification = {
        message,
        type,
        id: Date.now()
      };
      
      notifications.value.push(notification);
      
      // Auto remove after 4 seconds
      setTimeout(() => {
        notifications.value = notifications.value.filter(n => n.id !== notification.id);
      }, 4000);
    };

    // Lifecycle hooks
    onMounted(() => {
      // Initialize THREE.js
      initThreeJs();
      
      // Initialize UI animations
      anime({
        targets: '.cosmic-title',
        opacity: [0, 1],
        translateY: [20, 0],
        delay: 300,
        duration: 1000,
        easing: 'easeOutExpo'
      });
      
      gsap.from(".hero-title", {
        y: -50,
        opacity: 0,
        duration: 1,
        delay: 0.5
      });
      
      gsap.from(".hero-subtitle", {
        y: 50,
        opacity: 0,
        duration: 1,
        delay: 0.8
      });
      
      gsap.from(".cosmic-btn", {
        scale: 0,
        opacity: 0,
        duration: 0.5,
        delay: 1.2,
        ease: "back.out(1.7)"
      });
      
      // Setup auth state listener
      onAuthStateChanged(auth, (user) => {
        isAuthenticated.value = !!user;
        
        if (user) {
          userProfile.uid = user.uid;
          
          // Load user data
          const docRef = doc(db, "users", user.uid);
          getDoc(docRef).then((docSnap) => {
            if (docSnap.exists()) {
              const userData = docSnap.data();
              Object.assign(userProfile, userData);
            }
          });
          
          // Load favorites
          loadUserFavorites();
        }
      });
    });
    
    // Cleanup function
    const cleanup = () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
      
      if (renderer.value) {
        renderer.value.dispose();
      }
    };

    // Watch for view changes to animate transitions
    watch(currentView, (newView, oldView) => {
      // Fade out old view
      const oldViewElement = document.querySelector(`.${oldView}-view`);
      const newViewElement = document.querySelector(`.${newView}-view`);
      
      if (oldViewElement) {
        gsap.to(oldViewElement, {
          opacity: 0,
          y: -30,
          duration: 0.3,
          onComplete: () => {
            // Fade in new view
            if (newViewElement) {
              gsap.fromTo(newViewElement, 
                { opacity: 0, y: 30 },
                { opacity: 1, y: 0, duration: 0.3 }
              );
            }
          }
        });
      } else if (newViewElement) {
        // Just fade in new view if no old view
        gsap.fromTo(newViewElement, 
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 0.3 }
        );
      }
    });

    return {
      // State
      currentView,
      isAuthenticated,
      isLogin,
      cosmicCanvas,
      authForm,
      authError,
      userProfile,
      userFavorites,
      notifications,
      dimensions,
      selectedDimension,
      
      // Methods
      handleAuth,
      handleLogout,
      saveFavorite,
      selectDimension,
      showNotification
    };
  }
};
</script>

<style>
/* COSMIC STYLING */
@import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700;900&family=Rajdhani:wght@300;400;700&display=swap');

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Rajdhani', sans-serif;
}

:root {
  /* Primary color scheme */
  --cosmic-bg: #070b19;
  --cosmic-primary: #9d4edd;
  --cosmic-secondary: #3a0ca3;
  --cosmic-accent: #4cc9f0;
  --cosmic-highlight: #f72585;
  --cosmic-text: #e2e2e2;
  --cosmic-dark: #0f1642;
  
  /* UI Elements */
  --nav-height: 70px;
  --card-bg: rgba(10, 10, 40, 0.7);
  --card-border: rgba(99, 89, 255, 0.3);
}

body {
  background-color: var(--cosmic-bg);
  color: var(--cosmic-text);
  overflow-x: hidden;
}

/* CONTAINER */
.cosmic-container {
  width: 100%;
  min-height: 100vh;
  position: relative;
}

/* CANVAS */
#cosmic-canvas {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
}

/* NAVIGATION */
.cosmic-nav {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: var(--nav-height);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2rem;
  background: linear-gradient(to bottom, rgba(10, 10, 40, 0.9), rgba(10, 10, 40, 0));
  z-index: 100;
  backdrop-filter: blur(5px);
  transition: all 0.3s ease;
}

.cosmic-title {
  font-family: 'Orbitron', sans-serif;
  font-weight: 900;
  font-size: 1.8rem;
  color: var(--cosmic-accent);
  text-shadow: 0 0 10px rgba(76, 201, 240, 0.6);
  letter-spacing: 2px;
}

.nav-links {
  display: flex;
  gap: 1rem;
}

.nav-btn {
  background: transparent;
  border: none;
  color: var(--cosmic-text);
  font-size: 1rem;
  font-weight: 600;
  padding: 0.5rem 1rem;
  cursor: pointer;
  transition: all 0.2s ease;
  border-radius: 4px;
  position: relative;
  overflow: hidden;
}

.nav-btn::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 2px;
  background-color: var(--cosmic-accent);
  transition: width 0.3s ease;
}

.nav-btn:hover::after {
  width: 100%;
}

.nav-btn.active {
  color: var(--cosmic-accent);
}

.nav-btn.active::after {
  width: 100%;
}

.auth-btn {
  background: linear-gradient(135deg, var(--cosmic-primary), var(--cosmic-secondary));
  border-radius: 20px;
  padding: 0.5rem 1.5rem;
  font-weight: 700;
  color: white;
  box-shadow: 0 0 15px rgba(157, 78, 221, 0.5);
}

.auth-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 0 20px rgba(157, 78, 221, 0.7);
}

.logout-btn {
  background: rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  padding: 0.5rem 1.5rem;
}

.logout-btn:hover {
  background: rgba(255, 77, 77, 0.2);
}

/* MAIN CONTENT */
.cosmic-content {
  padding-top: var(--nav-height);
  min-height: 100vh;
  width: 100%;
  position: relative;
}

/* HOME VIEW */
.home-view {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: calc(100vh - var(--nav-height));
  text-align: center;
  padding: 2rem;
}

.cosmic-hero {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
  max-width: 800px;
}

.hero-title {
  font-family: 'Orbitron', sans-serif;
  font-size: 4rem;
  font-weight: 900;
  color: white;
  text-shadow: 0 0 20px rgba(157, 78, 221, 0.8);
  letter-spacing: 4px;
  margin: 0;
}

.hero-subtitle {
  font-size: 1.5rem;
  font-weight: 300;
  color: var(--cosmic-accent);
  letter-spacing: 2px;
  margin: 0;
  max-width: 600px;
}

.cosmic-btn {
  background: linear-gradient(135deg, var(--cosmic-primary), var(--cosmic-secondary));
  color: white;
  border: none;
  border-radius: 30px;
  padding: 1rem 2.5rem;
  font-family: 'Orbitron', sans-serif;
  font-weight: 700;
  font-size: 1.1rem;
  letter-spacing: 1px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  box-shadow: 0 0 20px rgba(157, 78, 221, 0.5);
  transition: all 0.3s ease;
}

.cosmic-btn:hover {
  transform: translateY(-3px);
  box-shadow: 0 0 30px rgba(157, 78, 221, 0.8);
}

.cosmic-btn:active {
  transform: translateY(1px);
}

.pulse-btn {
  animation: pulse 2s infinite;
}

@keyframes pulse {
  0% {
    box-shadow: 0 0 0 0 rgba(157, 78, 221, 0.7);
  }
  70% {
    box-shadow: 0 0 0 15px rgba(157, 78, 221, 0);
  }
  100% {
    box-shadow: 0 0 0 0 rgba(157, 78, 221, 0);
  }
}

/* EXPLORE VIEW */
.explore-view {
  padding: 2rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

.dimension-cards {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.dimension-card {
  background: var(--card-bg);
  border: 1px solid var(--card-border);
  border-radius: 10px;
  padding: 1.5rem;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.dimension-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, rgba(157, 78, 221, 0.1), rgba(76, 201, 240, 0.1));
  opacity: 0;
  transition: opacity 0.3s ease;
  z-index: -1;
}

.dimension-card:hover::before {
  opacity: 1;
}

.dimension-card h3 {
  font-family: 'Orbitron', sans-serif;
  margin-bottom: 0.5rem;
  font-size: 1.2rem;
  color: var(--cosmic-accent);
}

.dimension-card.selected {
  border-color: var(--cosmic-primary);
  box-shadow: 0 0 20px rgba(157, 78, 221, 0.3);
}

.dimension-energy-meter {
  height: 4px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 2px;
  margin-top: 1rem;
  overflow: hidden;
}

.energy-fill {
  height: 100%;
  background: linear-gradient(90deg, var(--cosmic-accent), var(--cosmic-primary));
  transition: width 1s ease;
}

.dimension-detail {
  background: var(--card-bg);
  border: 1px solid var(--card-border);
  border-radius: 10px;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  align-self: start;
}

.dimension-detail h2 {
  font-family: 'Orbitron', sans-serif;
  color: var(--cosmic-primary);
  font-size: 1.5rem;
  margin-bottom: 1rem;
}

.dimension-detail p {
  line-height: 1.6;
}

/* AUTH VIEW */
.auth-view {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: calc(100vh - var(--nav-height));
  padding: 2rem;
}

.auth-container {
  width: 100%;
  max-width: 450px;
  background: var(--card-bg);
  border: 1px solid var(--card-border);
  border-radius: 10px;
  padding: 2.5rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(10px);
}

.auth-container h2 {
  font-family: 'Orbitron', sans-serif;
  text-align: center;
  margin-bottom: 2rem;
  color: var(--cosmic-accent);
}

.auth-form {
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
  font-size: 0.9rem;
  font-weight: 700;
  letter-spacing: 1px;
}

.cosmic-input {
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  padding: 0.8rem 1rem;
  border-radius: 5px;
  color: white;
  font-size: 1rem;
  transition: all 0.3s ease;
}

.cosmic-input:focus {
  outline: none;
  border-color: var(--cosmic-accent);
  box-shadow: 0 0 10px rgba(76, 201, 240, 0.3);
}

.auth-error {
  color: #ff5555;
  font-size: 0.9rem;
  margin-top: 0.5rem;
  padding: 0.8rem;
  background: rgba(255, 0, 0, 0.1);
  border-radius: 5px;
  text-align: center;
}

.auth-submit-btn {
  margin-top: 1rem;
}

.auth-toggle {
  text-align: center;
  margin-top: 1.5rem;
  font-size: 0.9rem;
}

.toggle-link {
  color: var(--cosmic-accent);
  cursor: pointer;
  font-weight: 700;
  margin-left: 0.5rem;
}

.toggle-link:hover {
  text-decoration: underline;
}

/* USER PROFILE */
.user-profile {
  position: fixed;
  top: var(--nav-height);
  right: 2rem;
  z-index: 90;
  transition: all 0.3s ease;
}

.profile-badge {
  display: flex;
  align-items: center;
  gap: 0.8rem;
  background: var(--card-bg);
  border: 1px solid var(--card-border);
  border-radius: 30px;
  padding: 0.5rem 1rem;
  backdrop-filter: blur(5px);
}

.user-avatar {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  overflow: hidden;
  border: 2px solid var(--cosmic-primary);
}

.user-avatar img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.user-info {
  display: flex;
  flex-direction: column;
}

.user-name {
  font-weight: 700;
  font-size: 0.9rem;
}

.user-level {
  font-size: 0.8rem;
  color: var(--cosmic-accent);
}

.favorites-panel {
  margin-top: 1rem;
  background: var(--card-bg);
  border: 1px solid var(--card-border);
  border-radius: 10px;
  padding: 1.5rem;
  backdrop-filter: blur(5px);
  max-width: 250px;
}

.favorites-panel h3 {
  font-family: 'Orbitron', sans-serif;
  font-size: 0.9rem;
  margin-bottom: 1rem;
  color: var(--cosmic-accent);
}

.favorites-list {
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
}

.favorite-item {
  padding: 0.8rem;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 5px;
  font-size: 0.9rem;
  cursor: pointer;
  transition: all 0.2s ease;
}

.favorite-item:hover {
  background: rgba(157, 78, 221, 0.2);
}

/* NOTIFICATIONS */
.notification-container {
  position: fixed;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1000;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  max-width: 400px;
  width: 100%;
}

.notification {
  padding: 1rem 1.5rem;
  border-radius: 5px;
  backdrop-filter: blur(10px);
  animation: slideUp 0.3s ease forwards;
  font-weight: 600;
  text-align: center;
}

.notification.success {
  background: rgba(39, 174, 96, 0.8);
  border-left: 4px solid #27ae60;
}

.notification.error {
  background: rgba(231, 76, 60, 0.8);
  border-left: 4px solid #e74c3c;
}

.notification.warning {
  background: rgba(241, 196, 15, 0.8);
  border-left: 4px solid #f1c40f;
  color: #333;
}

.notification.info {
  background: rgba(52, 152, 219, 0.8);
  border-left: 4px solid #3498db;
}

@keyframes slideUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* RESPONSIVE DESIGN */
@media (max-width: 768px) {
  .explore-view {
    grid-template-columns: 1fr;
  }
  
  .hero-title {
    font-size: 2.5rem;
  }
  
  .hero-subtitle {
    font-size: 1.2rem;
  }
  
  .cosmic-nav {
    padding: 0 1rem;
  }
  
  .cosmic-title {
    font-size: 1.3rem;
  }
  
  .nav-btn {
    font-size: 0.9rem;
    padding: 0.5rem 0.8rem;
  }
  
  .auth-container {
    padding: 1.5rem;
  }
  
  .user-profile {
    right: 1rem;
  }
}
</style>