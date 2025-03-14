<template>
    <div class="onboarding-container" ref="container">
      <!-- THREE.JS STARFIELD BACKGROUND -->
      <canvas ref="threeCanvas" class="cosmic-canvas"></canvas>
      
      <!-- Onboarding Step 1: Welcome + Typewriter Effect -->
      <div v-if="step === 1" class="onboarding-step step-1">
        <div class="typewriter-text" ref="typewriterText"></div>
        <div class="comet-effect" ref="cometEffect"></div>
        <transition name="fade">
          <button v-if="showContinue" class="continue-button" @click="goToNextStep">Continue</button>
        </transition>
        <div class="progress-bar">
          <div class="progress" :style="{ width: progress + '%' }"></div>
        </div>
      </div>
      
      <!-- Onboarding Step 2: Cosmic Cards -->
      <div v-if="step === 2" class="onboarding-step step-2" @click="goToNextStep">
        <div class="nebula-background" ref="nebulaBackground"></div>
        <div class="cards-container">
          <div v-for="(card, index) in cards" :key="index" class="onboarding-card">
            <h2 class="card-title">{{ card.title }}</h2>
            <p class="card-description">{{ card.description }}</p>
          </div>
        </div>
        <div class="click-anywhere">Click anywhere to continue</div>
      </div>
      
      <!-- Onboarding Step 3: Username Entry -->
      <div v-if="step === 3" class="onboarding-step step-3">
        <div class="type-prompt" ref="typePrompt">What should we call you?</div>
        <input type="text" v-model="username" class="username-input" placeholder="Enter your name" />
        <button class="chat-button" @click="finishOnboarding">Let's get chatting!</button>
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
    name: 'OnboardingView',
    setup() {
      const router = useRouter();
      const authStore = useAuthStore();
  
      // Onboarding steps: 1 = Welcome, 2 = Cosmic Cards, 3 = Username Entry
      const step = ref(1);
      const progress = ref(0);
      const username = ref('');
      const showContinue = ref(false);
      
      // Cards data for Step 2
      const cards = [
        {
          title: "Smart Conversations",
          description: "Ask anything, get deep insights!"
        },
        {
          title: "Memory & Context",
          description: "We remember key details for better replies."
        },
        {
          title: "Multi-Mode Thinking",
          description: "Choose from logical, creative or technical responses."
        }
      ];
  
      // Element refs
      const container = ref(null);
      const threeCanvas = ref(null);
      const typewriterText = ref(null);
      const cometEffect = ref(null);
      const nebulaBackground = ref(null);
  
      // THREE.JS variables
      let scene, camera, renderer;
      let starField, nebulaParticles;
      let mousePosNormalized = { x: 0, y: 0 };
  
      // Firebase onboarding: when finished, register user (or update username)
      const finishOnboarding = async () => {
        try {
          // If user not logged in, create account with username as display name.
          // This demo uses authStore.register to create a new user.
          await authStore.register({ name: username.value, email: '', password: '' });
          // After successful registration, redirect to ChatView
          router.push('/chat');
        } catch (err) {
          console.error("Onboarding error:", err);
        }
      };
  
      // ---------------------------
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
        const nebulaCount = 300;
        const geometry = new THREE.BufferGeometry();
        const positions = [];
        const sizes = [];
        const colors = [];
        for (let i = 0; i < nebulaCount; i++) {
          const angle = Math.random() * Math.PI * 2;
          const radius = 100 + Math.random() * 150;
          const height = (Math.random() - 0.5) * 100;
          const x = Math.cos(angle) * radius;
          const y = height;
          const z = Math.sin(angle) * radius;
          positions.push(x, y, z);
          sizes.push(Math.random() * 20 + 10);
          const blueIntensity = Math.random() * 0.5 + 0.5;
          const purpleIntensity = Math.random() * 0.5 + 0.5;
          colors.push(purpleIntensity * 0.6, 0.2, blueIntensity);
        }
        geometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
        geometry.setAttribute('size', new THREE.Float32BufferAttribute(sizes, 1));
        geometry.setAttribute('color', new THREE.Float32BufferAttribute(colors, 3));
        const material = new THREE.ShaderMaterial({
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
              float dist = length(gl_PointCoord - vec2(0.5));
              float strength = 1.0 - dist * 2.0;
              if(strength < 0.0) discard;
              gl_FragColor = vec4(vColor, strength * 0.3);
            }
          `,
          transparent: true,
          depthWrite: false,
          blending: THREE.AdditiveBlending
        });
        nebulaParticles = new THREE.Points(geometry, material);
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
          // Animate dust layers
          if (dustLayer1.value && dustLayer2.value && dustLayer3.value) {
            gsap.to(dustLayer1.value, { x: mousePosNormalized.x * 20, y: mousePosNormalized.y * 20, duration: 1, ease: "power2.out" });
            gsap.to(dustLayer2.value, { x: mousePosNormalized.x * 40, y: mousePosNormalized.y * 40, duration: 1, ease: "power2.out" });
            gsap.to(dustLayer3.value, { x: mousePosNormalized.x * 60, y: mousePosNormalized.y * 60, duration: 1, ease: "power2.out" });
          }
          // Animate tesseract
          if (tesseractContainer.value) {
            gsap.to(tesseractContainer.value, { x: mousePosNormalized.x * -30, y: mousePosNormalized.y * -30, duration: 1.5, ease: "power2.out" });
          }
        });
      };
  
      // Onboarding Step 1: Typewriter effect & comet animation
      const runTypewriter = () => {
        const text = "Welcome to DawntasyAI, where intelligence meets imagination!";
        let currentText = "";
        anime({
          targets: { val: 0 },
          val: text.length,
          duration: 5000,
          easing: 'linear',
          update: (anim) => {
            const count = Math.floor(anim.animations[0].currentValue);
            currentText = text.slice(0, count);
            if(typewriterText.value) typewriterText.value.innerText = currentText;
          },
          complete: () => {
            showContinue.value = true;
          }
        });
        // Comet animation (a simple GSAP effect on cometEffect)
        gsap.fromTo(cometEffect.value, 
          { opacity: 0, x: -100, y: -100 }, 
          { opacity: 1, x: 100, y: 100, duration: 1, ease: "power2.inOut", delay: 4.5 }
        );
      };
  
      // Transition to next onboarding step with progress animation
      const goToNextStep = () => {
        progress.value = 100; // animate progress bar to full for step completion
        gsap.to(progress, { value: 100, duration: 0.5, ease: "power2.out", onComplete: () => {
          step.value++;
          // Reset progress for subsequent steps if needed
          progress.value = 0;
        }});
      };
  
      // Onboarding Step 3: Type-in effect for username prompt (using Anime.js)
      const runTypePrompt = () => {
        anime({
          targets: typePrompt.value,
          opacity: [0, 1],
          translateY: [-20, 0],
          duration: 1000,
          easing: 'easeOutQuad'
        });
      };
  
      // Initialize onboarding animations for Step 1
      onMounted(() => {
        initThreeJsScene();
        initParallaxEffects();
        if(step.value === 1) runTypewriter();
      });
  
      return {
        step,
        progress,
        username,
        showContinue,
        cards,
        container,
        threeCanvas,
        typewriterText,
        cometEffect,
        nebulaBackground,
        goToNextStep,
        runTypePrompt,
        finishOnboarding
      };
    }
  };
  </script>
  
  <style scoped>
  /* Onboarding Container & Cosmic Canvas */
  .onboarding-container {
    position: relative;
    width: 100%;
    height: 100vh;
    background-color: #000;
    overflow: hidden;
  }
  .cosmic-canvas {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
  
  /* Onboarding Steps */
  .onboarding-step {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 2;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: #fff;
    text-align: center;
  }
  
  /* Step 1: Welcome */
  .typewriter-text {
    font-family: 'Orbitron', sans-serif;
    font-size: 2rem;
    white-space: pre-wrap;
    margin-bottom: 20px;
    opacity: 1;
    text-shadow: 0 0 10px #00c8ff;
  }
  .comet-effect {
    position: absolute;
    width: 50px;
    height: 50px;
    background: radial-gradient(circle, #ff9900, transparent);
    border-radius: 50%;
    opacity: 0;
  }
  .continue-button {
    margin-top: 20px;
    padding: 12px 24px;
    background: linear-gradient(45deg, #00c8ff, #ff00c8);
    border: none;
    border-radius: 25px;
    color: #000;
    font-weight: bold;
    cursor: pointer;
    opacity: 0;
    animation: fadeIn 1s ease forwards;
  }
  .progress-bar {
    position: absolute;
    bottom: 20px;
    width: 80%;
    height: 8px;
    background: #333;
    border-radius: 4px;
    overflow: hidden;
    margin: 0 auto;
  }
  .progress {
    height: 100%;
    background: #00c8ff;
    width: 0%;
    transition: width 0.5s ease;
  }
  
  /* Step 2: Cosmic Cards */
  .step-2 {
    cursor: pointer;
  }
  .nebula-background {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: radial-gradient(circle at center, rgba(20,20,30,0.8), rgba(0,0,0,0.9));
    z-index: -1;
    animation: nebulaPulse 5s ease-in-out infinite;
  }
  .cards-container {
    display: flex;
    gap: 20px;
    flex-wrap: wrap;
    justify-content: center;
    margin-bottom: 20px;
  }
  .onboarding-card {
    background: rgba(0,0,0,0.8);
    padding: 20px;
    border-radius: 15px;
    width: 280px;
    box-shadow: 0 0 20px rgba(0,200,255,0.5);
    opacity: 0;
    transform: translateY(20px);
    animation: cardEntrance 1s forwards;
  }
  .onboarding-card:nth-child(1) { animation-delay: 0.2s; }
  .onboarding-card:nth-child(2) { animation-delay: 0.4s; }
  .onboarding-card:nth-child(3) { animation-delay: 0.6s; }
  .card-title {
    font-size: 1.5rem;
    margin-bottom: 10px;
    text-shadow: 0 0 5px #00c8ff;
  }
  .card-description {
    font-size: 1rem;
    color: #ccc;
  }
  .click-anywhere {
    font-size: 1rem;
    color: #aaa;
    margin-top: 20px;
  }
  
  /* Step 3: Username Entry */
  .step-3 {
    flex-direction: column;
    gap: 20px;
  }
  .type-prompt {
    font-size: 1.8rem;
    opacity: 0;
  }
  .username-input {
    padding: 12px;
    width: 300px;
    font-size: 1rem;
    border: none;
    border-radius: 5px;
    outline: none;
    box-shadow: 0 0 10px #00c8ff;
    text-align: center;
  }
  .chat-button {
    padding: 12px 24px;
    background: linear-gradient(45deg, #00c8ff, #ff00c8);
    border: none;
    border-radius: 25px;
    color: #000;
    font-weight: bold;
    cursor: pointer;
    box-shadow: 0 0 15px rgba(0,200,255,0.7);
  }
  
  /* Fade Transition */
  .fade-enter-active, .fade-leave-active {
    transition: opacity 1s;
  }
  .fade-enter-from, .fade-leave-to {
    opacity: 0;
  }
  
  /* Animations */
  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }
  @keyframes nebulaPulse {
    0%, 100% { opacity: 0.8; }
    50% { opacity: 1; }
  }
  @keyframes cardEntrance {
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
  }
  </style>
  