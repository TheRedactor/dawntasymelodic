<!-- src/components/CosmicBackground.vue -->
<template>
    <div class="cosmic-background">
      <canvas ref="starfieldCanvas" class="starfield-canvas"></canvas>
      <div class="cosmic-overlay"></div>
    </div>
  </template>
  
  <script setup lang="ts">
  import type { Ref } from '@vue/runtime-core'
  import { ref, onMounted, onUnmounted, watch } from '@vue/runtime-core';
  import { useWindowSize } from '@vueuse/core';
  import { useRouter } from 'vue-router';
  import * as THREE from 'three';

  // Extend Window interface to include mouseX and mouseY
  declare global {
    interface Window {
      mouseX: number;
      mouseY: number;
    }
  }
  
  // Refs
  const starfieldCanvas = ref<HTMLCanvasElement | null>(null);
  const { width, height } = useWindowSize();
  const router = useRouter();
  
  // Three.js objects
  let scene: THREE.Scene;
  let camera: THREE.PerspectiveCamera;
  let renderer: THREE.WebGLRenderer;
  let stars: THREE.Points;
  let animationFrameId: number;
  let clock: THREE.Clock;
  
  // Star field settings
  const STAR_COUNT = 5000;
  const STAR_FIELD_DEPTH = 500;
  const MAX_STAR_SIZE = 3;
  
  // Initialize Three.js scene
  const initThreeJs = () => {
    // Create scene
    scene = new THREE.Scene();
    
    // Create camera
    camera = new THREE.PerspectiveCamera(
      60, 
      window.innerWidth / window.innerHeight, 
      1, 
      STAR_FIELD_DEPTH
    );
    camera.position.z = 200;
    
    // Create renderer
    renderer = new THREE.WebGLRenderer({
      canvas: starfieldCanvas.value!,
      alpha: true,
      antialias: true
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    
    // Add stars
    createStars();
    
    // Initialize clock
    clock = new THREE.Clock();
    
    // Start animation
    animate();
  };
  
  // Create star particles
  const createStars = () => {
    // Create geometry for stars
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(STAR_COUNT * 3); // x, y, z for each star
    const sizes = new Float32Array(STAR_COUNT);
    const colors = new Float32Array(STAR_COUNT * 3); // r, g, b for each star
    
    for (let i = 0; i < STAR_COUNT; i++) {
      // Position
      const i3 = i * 3;
      positions[i3] = (Math.random() - 0.5) * 2000; // x
      positions[i3 + 1] = (Math.random() - 0.5) * 2000; // y
      positions[i3 + 2] = -Math.random() * STAR_FIELD_DEPTH; // z
      
      // Size
      sizes[i] = Math.random() * MAX_STAR_SIZE;
      
      // Color - mostly white with occasional blue/purple tints
      colors[i3] = 0.8 + Math.random() * 0.2; // r
      colors[i3 + 1] = 0.8 + Math.random() * 0.2; // g
      colors[i3 + 2] = 0.9 + Math.random() * 0.1; // b
      
      // Occasional cosmic colors
      if (Math.random() > 0.97) {
        // Purple stars
        colors[i3] = 0.6 + Math.random() * 0.4; 
        colors[i3 + 1] = 0.2 + Math.random() * 0.4;
        colors[i3 + 2] = 0.9 + Math.random() * 0.1;
      } else if (Math.random() > 0.96) {
        // Blue stars
        colors[i3] = 0.2 + Math.random() * 0.4;
        colors[i3 + 1] = 0.5 + Math.random() * 0.3;
        colors[i3 + 2] = 0.9 + Math.random() * 0.1;
      }
    }
    
    // Add attributes to geometry
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('size', new THREE.BufferAttribute(sizes, 1));
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
    
    // Create material
    const material = new THREE.PointsMaterial({
      size: 1,
      transparent: true,
      opacity: 1,
      vertexColors: true,
      sizeAttenuation: true,
      blending: THREE.AdditiveBlending
    });
    
    // Create points
    stars = new THREE.Points(geometry, material);
    scene.add(stars);
  };
  
  // Animation loop
  const animate = () => {
    animationFrameId = requestAnimationFrame(animate);
    
    const delta = clock.getDelta();
    
    // Rotate star field slowly
    if (stars) {
      stars.rotation.x += 0.0003;
      stars.rotation.y += 0.0002;
      
      // Get current route for animation adjustments
      const currentRoute = router.currentRoute.value.name?.toString() || '';
      
      // Adjust star field based on route
      if (currentRoute === 'Chat') {
        // More active star movement in chat view
        stars.position.z += delta * 5;
        if (stars.position.z > 20) {
          stars.position.z = 0;
        }
      } else if (currentRoute === 'Landing') {
        // Parallax effect on landing page
        const mouseX = (window.innerWidth / 2 - (window.mouseX || 0)) * 0.001;
        const mouseY = (window.innerHeight / 2 - (window.mouseY || 0)) * 0.001;
        stars.rotation.x += mouseY * 0.01;
        stars.rotation.y += mouseX * 0.01;
      }
    }
    
    // Render scene
    renderer.render(scene, camera);
  };
  
  // Handle window resize
  const handleResize = () => {
    if (!camera || !renderer) return;
    
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  };
  
  // Track mouse for parallax
  const trackMouse = () => {
    window.addEventListener('mousemove', (e) => {
      window.mouseX = e.clientX;
      window.mouseY = e.clientY;
    });
  };
  
  // Lifecycle hooks
  onMounted(() => {
    initThreeJs();
    trackMouse();
    window.addEventListener('resize', handleResize);
  });
  
  onUnmounted(() => {
    if (animationFrameId) {
      cancelAnimationFrame(animationFrameId);
    }
    window.removeEventListener('resize', handleResize);
    
    // Clean up Three.js resources
    if (stars) {
      scene.remove(stars);
      (stars.geometry as THREE.BufferGeometry).dispose();
      (stars.material as THREE.Material).dispose();
    }
    
    renderer?.dispose();
  });
  
  // Watch for window resize
  watch([width, height], () => {
    handleResize();
  });
  </script>
  
  <style lang="scss" scoped>
  .cosmic-background {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    overflow: hidden;
  }
  
  .starfield-canvas {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
  
  .cosmic-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: radial-gradient(ellipse at bottom, rgba(13, 13, 61, 0.2) 0%, rgba(9, 10, 15, 0.4) 80%);
    pointer-events: none;
  }
  </style>