<template>
  <div class="cosmic-registration-container" ref="container">
    <!-- THREE.JS COSMIC BACKGROUND -->
    <canvas ref="threeCanvas" class="cosmic-canvas"></canvas>

    <!-- PARALLAX COSMIC DUST LAYERS -->
    <div class="parallax-container" ref="parallaxContainer">
      <div class="dust-layer layer-1" ref="dustLayer1"></div>
      <div class="dust-layer layer-2" ref="dustLayer2"></div>
      <div class="dust-layer layer-3" ref="dustLayer3"></div>
    </div>

    <!-- TESSERACT PORTAL GATE -->
    <div class="tesseract-container" ref="tesseractContainer">
      <div class="tesseract-core"></div>
      <div class="tesseract-ring ring-1"></div>
      <div class="tesseract-ring ring-2"></div>
      <div class="tesseract-ring ring-3"></div>
      <div class="tesseract-glow"></div>
    </div>

    <!-- SHOOTING STARS -->
    <div class="shooting-stars-container">
      <div v-for="n in 5" :key="`star-${n}`" class="shooting-star" :style="{ '--delay': `${n * 3}s` }"></div>
    </div>

    <!-- REGISTRATION CARD WITH COSMIC RIPPLE EFFECT -->
    <div 
      class="cosmic-registration-card"
      ref="registrationCard"
      @mousemove="handleCardMouseMove"
      @mouseleave="handleCardMouseLeave"
    >
      <!-- CARD GLOW EFFECTS -->
      <div class="card-cosmic-glow" ref="cardGlow"></div>
      <div class="card-corner-accents">
        <div class="corner top-left"></div>
        <div class="corner top-right"></div>
        <div class="corner bottom-left"></div>
        <div class="corner bottom-right"></div>
      </div>

      <!-- COSMIC PORTAL HEADER -->
      <div class="portal-header" ref="portalHeader">
        <h1 class="cosmic-title">
          <span class="title-part">Begin Your</span>
          <span class="title-part accent">Cosmic Journey</span>
        </h1>
      </div>

      <!-- REGISTRATION FORM WITH COSMIC INTERACTION -->
      <form @submit.prevent="handleRegister" class="cosmic-form">
        <!-- SERVER ERROR ALERT -->
        <transition name="alert-fade">
          <div v-if="error" class="cosmic-alert" ref="errorAlert">
            <div class="alert-icon-container">
              <div class="alert-icon"></div>
            </div>
            <p class="alert-message">{{ error }}</p>
          </div>
        </transition>

        <!-- NAME FIELD -->
        <div 
          class="cosmic-input-group" 
          :class="{ 'focused': focusedField === 'name', 'filled': name }"
          ref="nameField"
        >
          <label for="name" class="cosmic-label">Your Name</label>
          <div class="input-container">
            <div class="input-icon">
              <div class="icon-pulse"></div>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                <circle cx="12" cy="7" r="4"></circle>
              </svg>
            </div>
            <input
              id="name"
              v-model="name"
              type="text"
              class="cosmic-input"
              placeholder="Enter your name"
              required
              @focus="handleFocus('name')"
              @blur="handleBlur"
              ref="nameInput"
            />
            <div class="input-energy-field" ref="nameEnergy"></div>
          </div>
          <div class="input-underline">
            <div class="underline-track"></div>
            <div class="underline-active" ref="nameUnderline"></div>
          </div>
        </div>

        <!-- EMAIL FIELD -->
        <div 
          class="cosmic-input-group" 
          :class="{ 'focused': focusedField === 'email', 'filled': email }"
          ref="emailField"
        >
          <label for="email" class="cosmic-label">Email Address</label>
          <div class="input-container">
            <div class="input-icon">
              <div class="icon-pulse"></div>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                <polyline points="22,6 12,13 2,6"></polyline>
              </svg>
            </div>
            <input
              id="email"
              v-model="email"
              type="email"
              class="cosmic-input"
              placeholder="your.email@example.com"
              required
              @focus="handleFocus('email')"
              @blur="handleBlur"
              ref="emailInput"
            />
            <div class="input-energy-field" ref="emailEnergy"></div>
          </div>
          <div class="input-underline">
            <div class="underline-track"></div>
            <div class="underline-active" ref="emailUnderline"></div>
          </div>
        </div>

        <!-- PASSWORD FIELD -->
        <div 
          class="cosmic-input-group" 
          :class="{ 'focused': focusedField === 'password', 'filled': password }"
          ref="passwordField"
        >
          <label for="password" class="cosmic-label">Password</label>
          <div class="input-container">
            <div class="input-icon">
              <div class="icon-pulse"></div>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
              </svg>
            </div>
            <input
              id="password"
              v-model="password"
              :type="showPassword ? 'text' : 'password'"
              class="cosmic-input"
              placeholder="Create a strong password"
              required
              @focus="handleFocus('password')"
              @blur="handleBlur"
              ref="passwordInput"
            />
            <button 
              type="button" 
              class="password-toggle"
              @click="togglePassword"
              @mousedown.prevent
            >
              <div class="toggle-glow" ref="toggleGlow"></div>
              <svg v-if="showPassword" class="eye-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path>
                <line x1="1" y1="1" x2="23" y2="23"></line>
              </svg>
              <svg v-else class="eye-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                <circle cx="12" cy="12" r="3"></circle>
              </svg>
            </button>
            <div class="input-energy-field" ref="passwordEnergy"></div>
          </div>
          <div class="input-underline">
            <div class="underline-track"></div>
            <div class="underline-active" ref="passwordUnderline"></div>
          </div>
          
          <!-- PASSWORD STRENGTH INDICATOR -->
          <div class="password-strength" v-if="password" ref="strengthMeter">
            <div class="strength-track">
              <div 
                class="strength-bar" 
                :style="{ width: `${passwordStrength * 25}%` }"
                :class="strengthClass"
              ></div>
            </div>
            <div class="strength-text" :class="strengthClass">{{ passwordStrengthText }}</div>
          </div>
        </div>

        <!-- TERMS AND CONDITIONS -->
        <div class="terms-check" ref="termsCheck">
          <label class="quantum-checkbox">
            <input 
              type="checkbox" 
              v-model="agreeToTerms" 
              required
              @change="handleTermsChange"
            >
            <span class="checkbox-control">
              <span class="checkbox-core"></span>
              <span class="checkbox-ripple"></span>
            </span>
            <span class="checkbox-label">
              I agree to the <a href="#" class="cosmic-link" @click.prevent="showTerms = true">Terms of Service</a>
              and <a href="#" class="cosmic-link" @click.prevent="showTerms = true">Privacy Policy</a>
            </span>
          </label>
        </div>

        <!-- REGISTRATION BUTTON -->
        <button 
          type="submit" 
          class="cosmic-button"
          :disabled="isLoading || !agreeToTerms"
          ref="registerButton"
          @mouseenter="animateButtonHover"
          @mouseleave="resetButtonHover"
        >
          <div class="button-background"></div>
          <div class="button-glow" ref="buttonGlow"></div>
          <span v-if="isLoading" class="loader">
            <span class="loader-orbit"></span>
            <span class="loader-core"></span>
          </span>
          <span v-else class="button-text">Create Account</span>
        </button>
      </form>

      <!-- FOOTER -->
      <div class="cosmic-footer" ref="footer">
        <p>Already have an account?</p>
        <router-link to="/login" class="cosmic-link login-link" ref="loginLink">
          <span class="link-text">Sign In</span>
          <span class="link-underline"></span>
        </router-link>
      </div>
    </div>

    <!-- TERMS MODAL -->
    <div v-if="showTerms" class="cosmic-modal-backdrop" ref="modalBackdrop">
      <div class="cosmic-modal" ref="termsModal">
        <div class="modal-header">
          <h2 class="modal-title">Terms of Service</h2>
          <button class="modal-close" @click="closeTermsModal">
            <div class="close-icon"></div>
          </button>
        </div>
        <div class="modal-body">
          <div class="modal-content">
            <h3 class="section-header">Welcome to DawntasyAI</h3>
            <p>By using our AI companion service, you agree to the following terms:</p>
            <h4 class="subsection-header">1. Privacy & Data</h4>
            <p>We respect your privacy and commit to protecting your personal data. Chat conversations may be stored to improve service quality and maintain context between sessions.</p>
            <h4 class="subsection-header">2. Account Usage</h4>
            <p>You agree to use DawntasyAI in accordance with all applicable laws and regulations. Prohibited uses include generating harmful, unlawful, or unethical content.</p>
            <h4 class="subsection-header">3. Service Limitations</h4>
            <p>DawntasyAI strives for accuracy but may occasionally provide incomplete or incorrect information. Use critical judgment when acting on information provided.</p>
          </div>
        </div>
        <div class="modal-actions">
          <button class="cosmic-button accept-button" @click="acceptTerms">
            <div class="button-background"></div>
            <div class="button-glow"></div>
            <span class="button-text">I Understand</span>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, computed, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { useAuthStore } from '@/store/auth';
import * as THREE from 'three';
import gsap from 'gsap';
import anime from 'animejs';

export default {
  name: 'CosmicRegisterView',
  setup() {
    const router = useRouter();
    const authStore = useAuthStore();

    // Form state
    const name = ref('');
    const email = ref('');
    const password = ref('');
    const showPassword = ref(false);
    const focusedField = ref('');
    const agreeToTerms = ref(false);
    const isLoading = ref(false);
    const error = ref('');
    const showTerms = ref(false);

    // Element refs
    const container = ref(null);
    const threeCanvas = ref(null);
    const parallaxContainer = ref(null);
    const dustLayer1 = ref(null);
    const dustLayer2 = ref(null);
    const dustLayer3 = ref(null);
    const tesseractContainer = ref(null);
    const registrationCard = ref(null);
    const cardGlow = ref(null);
    const portalHeader = ref(null);
    const nameField = ref(null);
    const emailField = ref(null);
    const passwordField = ref(null);
    const nameInput = ref(null);
    const emailInput = ref(null);
    const passwordInput = ref(null);
    const nameEnergy = ref(null);
    const emailEnergy = ref(null);
    const passwordEnergy = ref(null);
    const nameUnderline = ref(null);
    const emailUnderline = ref(null);
    const passwordUnderline = ref(null);
    const strengthMeter = ref(null);
    const termsCheck = ref(null);
    const registerButton = ref(null);
    const buttonGlow = ref(null);
    const toggleGlow = ref(null);
    const errorAlert = ref(null);
    const footer = ref(null);
    const loginLink = ref(null);
    const modalBackdrop = ref(null);
    const termsModal = ref(null);

    // Three.js variables
    let scene, camera, renderer;
    let starField, nebulaParticles;
    let mousePosNormalized = { x: 0, y: 0 };

    // Password strength computed values
    const passwordStrength = computed(() => {
      if (!password.value) return 0;
      let score = 0;
      if (password.value.length >= 8) score++;
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
    const strengthClass = computed(() => {
      const strength = passwordStrength.value;
      if (strength === 0) return 'weak';
      if (strength === 1) return 'fair';
      if (strength === 2) return 'good';
      if (strength === 3) return 'strong';
      return 'very-strong';
    });

    // THREE.JS COSMIC BACKGROUND
    const initThreeJsScene = () => {
      if (!threeCanvas.value) return;
      scene = new THREE.Scene();
      const aspectRatio = window.innerWidth / window.innerHeight;
      camera = new THREE.PerspectiveCamera(60, aspectRatio, 1, 1000);
      camera.position.z = 500;
      renderer = new THREE.WebGLRenderer({
        canvas: threeCanvas.value,
        antialias: true,
        alpha: true
      });
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.setPixelRatio(window.devicePixelRatio);
      createStarfield();
      createNebula();
      window.addEventListener('resize', handleResize);
      animateThreeJs();
    };

    const createStarfield = () => {
      const starCount = 2000;
      const geometry = new THREE.BufferGeometry();
      const vertices = [];
      const sizes = [];
      const colors = [];
      for (let i = 0; i < starCount; i++) {
        const radius = 450 + Math.random() * 200;
        const phi = Math.acos(2 * Math.random() - 1);
        const theta = Math.random() * Math.PI * 2;
        const x = radius * Math.sin(phi) * Math.cos(theta);
        const y = radius * Math.sin(phi) * Math.sin(theta);
        const z = radius * Math.cos(phi);
        vertices.push(x, y, z);
        sizes.push(Math.random() * 2 + 0.5);
        const type = Math.random();
        if (type < 0.1) {
          colors.push(0.8, 0.4, 1.0);
        } else if (type < 0.3) {
          colors.push(0.4, 0.5, 1.0);
        } else {
          colors.push(0.8 + Math.random() * 0.2, 0.8 + Math.random() * 0.2, 1.0);
        }
      }
      geometry.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3));
      geometry.setAttribute('size', new THREE.Float32BufferAttribute(sizes, 1));
      geometry.setAttribute('color', new THREE.Float32BufferAttribute(colors, 3));
      const material = new THREE.ShaderMaterial({
        uniforms: {
          pixelRatio: { value: window.devicePixelRatio },
          time: { value: 0 }
        },
        vertexShader: `
          attribute float size;
          attribute vec3 color;
          varying vec3 vColor;
          uniform float time;
          uniform float pixelRatio;
          void main() {
            vColor = color;
            float pulse = sin(time * 0.2 + position.x * 0.02 + position.y * 0.02) * 0.1 + 0.9;
            vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
            gl_PointSize = size * pixelRatio * pulse * (300.0 / -mvPosition.z);
            gl_Position = projectionMatrix * mvPosition;
          }
        `,
        fragmentShader: `
          varying vec3 vColor;
          void main() {
            float distFromCenter = length(gl_PointCoord - vec2(0.5));
            if (distFromCenter > 0.5) discard;
            float glow = 1.0 - distFromCenter * 2.0;
            gl_FragColor = vec4(vColor, glow);
          }
        `,
        transparent: true,
        depthWrite: false,
        blending: THREE.AdditiveBlending
      });
      starField = new THREE.Points(geometry, material);
      scene.add(starField);
    };

    const createNebula = () => {
      const nebulaGeometry = new THREE.BufferGeometry();
      const nebulaCount = 300;
      const nebulaPositions = [];
      const nebulaSizes = [];
      const nebulaColors = [];
      for (let i = 0; i < nebulaCount; i++) {
        const angle = Math.random() * Math.PI * 2;
        const radius = 100 + Math.random() * 150;
        const height = (Math.random() - 0.5) * 100;
        const x = Math.cos(angle) * radius;
        const y = height;
        const z = Math.sin(angle) * radius;
        nebulaPositions.push(x, y, z);
        nebulaSizes.push(Math.random() * 20 + 10);
        const blueIntensity = Math.random() * 0.5 + 0.5;
        const purpleIntensity = Math.random() * 0.5 + 0.5;
        nebulaColors.push(purpleIntensity * 0.6, 0.2, blueIntensity);
      }
      nebulaGeometry.setAttribute('position', new THREE.Float32BufferAttribute(nebulaPositions, 3));
      nebulaGeometry.setAttribute('size', new THREE.Float32BufferAttribute(nebulaSizes, 1));
      nebulaGeometry.setAttribute('color', new THREE.Float32BufferAttribute(nebulaColors, 3));
      const nebulaMaterial = new THREE.ShaderMaterial({
        uniforms: {
          time: { value: 0 },
          pixelRatio: { value: window.devicePixelRatio }
        },
        vertexShader: `
          attribute float size;
          attribute vec3 color;
          varying vec3 vColor;
          uniform float time;
          uniform float pixelRatio;
          void main() {
            vColor = color;
            vec3 pos = position;
            pos.x += sin(time * 0.05 + position.z * 0.01) * 5.0;
            pos.y += cos(time * 0.05 + position.x * 0.01) * 5.0;
            vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);
            gl_PointSize = size * pixelRatio * (150.0 / -mvPosition.z);
            gl_Position = projectionMatrix * mvPosition;
          }
        `,
        fragmentShader: `
          varying vec3 vColor;
          void main() {
            float distFromCenter = length(gl_PointCoord - vec2(0.5));
            float strength = 1.0 - distFromCenter * 2.0;
            if (strength < 0.0) discard;
            gl_FragColor = vec4(vColor, strength * 0.3);
          }
        `,
        transparent: true,
        depthWrite: false,
        blending: THREE.AdditiveBlending
      });
      nebulaParticles = new THREE.Points(nebulaGeometry, nebulaMaterial);
      scene.add(nebulaParticles);
    };

    const animateThreeJs = () => {
      requestAnimationFrame(animateThreeJs);
      const time = performance.now() * 0.001;
      if (starField?.material.uniforms) starField.material.uniforms.time.value = time;
      if (nebulaParticles?.material.uniforms) nebulaParticles.material.uniforms.time.value = time;
      if (starField) starField.rotation.y += 0.0001;
      if (nebulaParticles) nebulaParticles.rotation.y += 0.0002;
      if (camera) {
        camera.position.x += (mousePosNormalized.x * 20 - camera.position.x) * 0.02;
        camera.position.y += (-mousePosNormalized.y * 20 - camera.position.y) * 0.02;
        camera.lookAt(scene.position);
      }
      renderer.render(scene, camera);
    };

    const handleResize = () => {
      if (!camera || !renderer) return;
      const width = window.innerWidth;
      const height = window.innerHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
      renderer.setPixelRatio(window.devicePixelRatio);
      if (starField?.material.uniforms) starField.material.uniforms.pixelRatio.value = window.devicePixelRatio;
      if (nebulaParticles?.material.uniforms) nebulaParticles.material.uniforms.pixelRatio.value = window.devicePixelRatio;
    };

    // PARALLAX EFFECTS
    const initParallaxEffects = () => {
      window.addEventListener('mousemove', (e) => {
        mousePosNormalized.x = (e.clientX / window.innerWidth) * 2 - 1;
        mousePosNormalized.y = (e.clientY / window.innerHeight) * 2 - 1;
        if (dustLayer1.value && dustLayer2.value && dustLayer3.value) {
          gsap.to(dustLayer1.value, { x: mousePosNormalized.x * 20, y: mousePosNormalized.y * 20, duration: 1, ease: "power2.out" });
          gsap.to(dustLayer2.value, { x: mousePosNormalized.x * 40, y: mousePosNormalized.y * 40, duration: 1, ease: "power2.out" });
          gsap.to(dustLayer3.value, { x: mousePosNormalized.x * 60, y: mousePosNormalized.y * 60, duration: 1, ease: "power2.out" });
        }
        if (tesseractContainer.value) {
          gsap.to(tesseractContainer.value, { x: mousePosNormalized.x * -30, y: mousePosNormalized.y * -30, duration: 1.5, ease: "power2.out" });
        }
      });
    };

    // CARD HOVER EFFECTS
    const handleCardMouseMove = (e) => {
      if (!registrationCard.value || !cardGlow.value) return;
      const cardRect = registrationCard.value.getBoundingClientRect();
      const x = e.clientX - cardRect.left;
      const y = e.clientY - cardRect.top;
      const xPercent = x / cardRect.width;
      const yPercent = y / cardRect.height;
      const rotateY = (xPercent - 0.5) * 5;
      const rotateX = (0.5 - yPercent) * 5;
      gsap.to(registrationCard.value, {
        rotateY,
        rotateX,
        transformPerspective: 1000,
        duration: 0.3,
        ease: "power2.out"
      });
      gsap.to(cardGlow.value, {
        opacity: 0.7,
        x,
        y,
        duration: 0.3,
        ease: "power2.out"
      });
    };

    const handleCardMouseLeave = () => {
      if (!registrationCard.value || !cardGlow.value) return;
      gsap.to(registrationCard.value, {
        rotateY: 0,
        rotateX: 0,
        duration: 0.5,
        ease: "power2.out"
      });
      gsap.to(cardGlow.value, {
        opacity: 0,
        duration: 0.5,
        ease: "power2.out"
      });
    };

    // TOGGLE PASSWORD VISIBILITY
    const togglePassword = () => {
      showPassword.value = !showPassword.value;
      gsap.to(toggleGlow.value, {
        scale: showPassword.value ? 1.2 : 1,
        duration: 0.3,
        ease: "power2.out"
      });
    };

    // BUTTON HOVER ANIMATION
    const animateButtonHover = () => {
      gsap.to(registerButton.value, { scale: 1.05, duration: 0.3, ease: "power2.out" });
      gsap.to(buttonGlow.value, { opacity: 0.8, duration: 0.3, ease: "power2.out" });
    };

    const resetButtonHover = () => {
      gsap.to(registerButton.value, { scale: 1, duration: 0.3, ease: "power2.out" });
      gsap.to(buttonGlow.value, { opacity: 0, duration: 0.3, ease: "power2.out" });
    };

    // INPUT FOCUS HANDLERS
    const handleFocus = (field) => {
      focusedField.value = field;
      if (field === 'name' && nameUnderline.value)
        gsap.to(nameUnderline.value, { width: '100%', duration: 0.3, ease: "power2.out" });
      else if (field === 'email' && emailUnderline.value)
        gsap.to(emailUnderline.value, { width: '100%', duration: 0.3, ease: "power2.out" });
      else if (field === 'password' && passwordUnderline.value)
        gsap.to(passwordUnderline.value, { width: '100%', duration: 0.3, ease: "power2.out" });
    };

    const handleBlur = () => {
      focusedField.value = '';
      if (nameUnderline.value) gsap.to(nameUnderline.value, { width: '0%', duration: 0.3, ease: "power2.out" });
      if (emailUnderline.value) gsap.to(emailUnderline.value, { width: '0%', duration: 0.3, ease: "power2.out" });
      if (passwordUnderline.value) gsap.to(passwordUnderline.value, { width: '0%', duration: 0.3, ease: "power2.out" });
    };

    // TERMS CHECKBOX HANDLER
    const handleTermsChange = () => {
      // Optional: add animation for checkbox change.
    };

    // MODAL CONTROLS
    const closeTermsModal = () => {
      showTerms.value = false;
      gsap.to(modalBackdrop.value, { opacity: 0, duration: 0.3, ease: "power2.out" });
    };

    const acceptTerms = () => {
      agreeToTerms.value = true;
      closeTermsModal();
    };

    // HANDLE REGISTRATION (Firebase integration)
    const handleRegister = async () => {
      error.value = '';
      isLoading.value = true;
      try {
        await authStore.register({ name: name.value, email: email.value, password: password.value });
        router.push('/dashboard');
      } catch (err) {
        error.value = err.message || "Registration failed. Please try again.";
      } finally {
        isLoading.value = false;
      }
    };

    onMounted(() => {
      initThreeJsScene();
      initParallaxEffects();
    });

    return {
      name,
      email,
      password,
      showPassword,
      focusedField,
      agreeToTerms,
      isLoading,
      error,
      showTerms,
      passwordStrength,
      passwordStrengthText,
      strengthClass,
      container,
      threeCanvas,
      parallaxContainer,
      dustLayer1,
      dustLayer2,
      dustLayer3,
      tesseractContainer,
      registrationCard,
      cardGlow,
      portalHeader,
      nameField,
      emailField,
      passwordField,
      nameInput,
      emailInput,
      passwordInput,
      nameEnergy,
      emailEnergy,
      passwordEnergy,
      nameUnderline,
      emailUnderline,
      passwordUnderline,
      strengthMeter,
      termsCheck,
      registerButton,
      buttonGlow,
      toggleGlow,
      errorAlert,
      footer,
      loginLink,
      modalBackdrop,
      termsModal,
      handleCardMouseMove,
      handleCardMouseLeave,
      togglePassword,
      animateButtonHover,
      resetButtonHover,
      handleFocus,
      handleBlur,
      handleTermsChange,
      closeTermsModal,
      acceptTerms,
      handleRegister
    };
  }
};
</script>

<style scoped>
/* Cosmic Registration Container */
.cosmic-registration-container {
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 100vh;
  background-color: #000;
}

/* THREE.JS Canvas */
.cosmic-canvas {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

/* Parallax Dust Layers */
.parallax-container {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
}
.dust-layer {
  position: absolute;
  width: 200%;
  height: 200%;
  background: url('/assets/dust.png') repeat;
  opacity: 0.15;
}
.layer-1 { transform: translateZ(0); }
.layer-2 { transform: translateZ(-1px) scale(1.05); }
.layer-3 { transform: translateZ(-2px) scale(1.1); }

/* Tesseract Portal Gate */
.tesseract-container {
  position: absolute;
  top: 10%;
  left: 50%;
  transform: translateX(-50%);
  width: 300px;
  height: 300px;
  pointer-events: none;
}
.tesseract-core {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 60px;
  height: 60px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 50%;
  transform: translate(-50%, -50%);
}
.tesseract-ring {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 100%;
  height: 100%;
  border: 2px solid rgba(0, 200, 255, 0.5);
  border-radius: 50%;
  transform: translate(-50%, -50%);
}
.ring-1 { animation: spin 20s linear infinite; }
.ring-2 { animation: spin 30s linear infinite; }
.ring-3 { animation: spin 40s linear infinite; }
.tesseract-glow {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 320px;
  height: 320px;
  background: radial-gradient(circle, rgba(0,200,255,0.5) 0%, rgba(0,0,0,0) 70%);
  transform: translate(-50%, -50%);
  filter: blur(15px);
  opacity: 0.7;
}

/* Shooting Stars */
.shooting-stars-container {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
}
.shooting-star {
  position: absolute;
  top: -10%;
  width: 2px;
  height: 80px;
  background: linear-gradient(45deg, rgba(255,255,255,1), rgba(0,200,255,0));
  opacity: 0.8;
  animation: shootingStar 5s linear infinite;
  animation-delay: var(--delay);
}
@keyframes shootingStar {
  0% { transform: translate(0, 0); opacity: 1; }
  100% { transform: translate(200px, 200px); opacity: 0; }
}

/* Cosmic Registration Card */
.cosmic-registration-card {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 380px;
  padding: 40px;
  background: rgba(0,0,0,0.95);
  border-radius: 20px;
  box-shadow: 0 0 40px rgba(0,200,255,0.7);
  transform: translate(-50%, -50%);
  z-index: 2;
  overflow: hidden;
}
.card-cosmic-glow {
  position: absolute;
  top: 0;
  left: 0;
  width: 150%;
  height: 150%;
  background: radial-gradient(circle, rgba(0,200,255,0.8), transparent);
  transform: translate(-25%, -25%);
  pointer-events: none;
  opacity: 0;
}
.card-corner-accents .corner {
  position: absolute;
  width: 15px;
  height: 15px;
  background: rgba(0,200,255,0.9);
  border-radius: 50%;
}
.corner.top-left { top: 10px; left: 10px; }
.corner.top-right { top: 10px; right: 10px; }
.corner.bottom-left { bottom: 10px; left: 10px; }
.corner.bottom-right { bottom: 10px; right: 10px; }

/* Cosmic Portal Header */
.portal-header {
  text-align: center;
  margin-bottom: 20px;
}
.cosmic-title {
  font-family: 'Orbitron', sans-serif;
  font-size: 2.2rem;
  color: #00c8ff;
  text-shadow: 0 0 10px #00c8ff;
}
.cosmic-title .accent {
  color: #ff00c8;
  text-shadow: 0 0 10px #ff00c8;
}

/* Cosmic Form */
.cosmic-form {
  display: flex;
  flex-direction: column;
  gap: 20px;
}
.cosmic-input-group {
  position: relative;
}
.cosmic-label {
  font-size: 1rem;
  color: #ddd;
  margin-bottom: 5px;
  display: block;
  text-shadow: 0 0 5px rgba(0,200,255,0.7);
}
.input-container {
  position: relative;
  display: flex;
  align-items: center;
}
.input-icon {
  position: absolute;
  left: 10px;
  z-index: 1;
}
.input-icon svg {
  width: 22px;
  height: 22px;
  color: #00c8ff;
  filter: drop-shadow(0 0 5px #00c8ff);
}
.cosmic-input {
  width: 100%;
  padding: 12px 10px 12px 45px;
  border: none;
  border-bottom: 2px solid #666;
  background: rgba(255,255,255,0.05);
  color: #fff;
  font-size: 1rem;
  outline: none;
  border-radius: 4px;
  box-shadow: 0 0 8px rgba(0,200,255,0.3);
}
.input-underline {
  position: relative;
  height: 2px;
  background: #666;
  margin-top: 2px;
  overflow: hidden;
}
.underline-active {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 0%;
  background: #00c8ff;
  transition: width 0.3s ease;
}

/* Password Strength Indicator */
.password-strength {
  margin-top: 5px;
}
.strength-track {
  width: 100%;
  height: 4px;
  background: #666;
  border-radius: 2px;
  overflow: hidden;
}
.strength-bar {
  height: 100%;
  width: 0%;
  background: #00c8ff;
  border-radius: 2px;
  transition: width 0.3s ease;
}
.strength-text {
  font-size: 0.8rem;
  color: #ddd;
  margin-top: 2px;
  text-shadow: 0 0 3px #00c8ff;
}

/* Terms Checkbox */
.terms-check {
  margin-bottom: 20px;
}
.quantum-checkbox {
  display: flex;
  align-items: center;
  cursor: pointer;
  color: #ddd;
}
.quantum-checkbox input[type="checkbox"] {
  display: none;
}
.checkbox-control {
  width: 20px;
  height: 20px;
  border: 2px solid #00c8ff;
  margin-right: 10px;
  position: relative;
  border-radius: 3px;
}
.checkbox-control .checkbox-core {
  position: absolute;
  width: 100%;
  height: 100%;
  background: #00c8ff;
  opacity: 0;
  transition: opacity 0.2s ease;
}
.quantum-checkbox input[type="checkbox"]:checked + .checkbox-control .checkbox-core {
  opacity: 1;
}
.checkbox-label a {
  color: #ff00c8;
  text-decoration: underline;
}

/* Cosmic Registration Button */
.cosmic-button {
  position: relative;
  overflow: hidden;
  padding: 12px 20px;
  background: #00c8ff;
  border: none;
  border-radius: 5px;
  color: #000;
  font-weight: bold;
  cursor: pointer;
  outline: none;
  margin-top: 10px;
  box-shadow: 0 0 10px rgba(0,200,255,0.7);
}
.button-background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: inherit;
  z-index: -2;
}
.button-glow {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 140%;
  height: 140%;
  background: radial-gradient(circle, rgba(0,200,255,0.7), transparent);
  transform: translate(-50%, -50%);
  z-index: -1;
  opacity: 0;
}
.loader {
  display: flex;
  align-items: center;
  justify-content: center;
}
.loader-orbit {
  width: 10px;
  height: 10px;
  border: 2px solid rgba(0,0,0,0.2);
  border-top-color: #000;
  border-radius: 50%;
  animation: spin 1s linear infinite;
}
.loader-core {
  width: 6px;
  height: 6px;
  background: #000;
  border-radius: 50%;
  position: absolute;
}

/* Cosmic Footer */
.cosmic-footer {
  text-align: center;
  margin-top: 20px;
  color: #ddd;
  text-shadow: 0 0 5px #00c8ff;
}
.cosmic-footer .cosmic-link {
  color: #00c8ff;
  text-decoration: none;
  position: relative;
}
.cosmic-footer .cosmic-link .link-underline {
  position: absolute;
  bottom: -2px;
  left: 0;
  width: 0;
  height: 2px;
  background: #00c8ff;
  transition: width 0.3s ease;
}
.cosmic-footer .cosmic-link:hover .link-underline {
  width: 100%;
}

/* Modal Styles */
.cosmic-modal-backdrop {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10;
  animation: fadeIn 0.3s ease forwards;
}
.cosmic-modal {
  background: #111;
  padding: 20px;
  border-radius: 10px;
  width: 90%;
  max-width: 500px;
  color: #fff;
}
.modal-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.modal-title {
  font-size: 1.5rem;
}
.modal-close {
  background: transparent;
  border: none;
  cursor: pointer;
}
.modal-body {
  margin-top: 10px;
  max-height: 300px;
  overflow-y: auto;
}
.modal-actions {
  margin-top: 20px;
  text-align: right;
}

/* Animations */
@keyframes spin {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}
@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}
</style>
