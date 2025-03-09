<!-- src/views/NotFoundView.vue -->
<template>
    <div class="not-found-container">
      <div class="cosmic-anomaly">
        <div class="anomaly-ring"></div>
        <div class="anomaly-core">404</div>
      </div>
      
      <h1 class="title">REALITY DISTORTION DETECTED</h1>
      
      <p class="description">
        The path you seek has been consumed by The Rift. This reality fragment does not exist.
      </p>
      
      <div class="actions">
        <router-link to="/" class="home-button">
          <span class="button-text">Return to Safety</span>
          <span class="button-glow"></span>
        </router-link>
      </div>
      
      <!-- Floating debris -->
      <div class="space-debris">
        <div 
          v-for="n in 15" 
          :key="n" 
          class="debris-item"
          :style="{
            '--delay': `${n * 0.5}s`,
            '--size': `${Math.random() * 2 + 0.5}rem`,
            '--rotation': `${Math.random() * 360}deg`,
            '--top': `${Math.random() * 100}%`,
            '--left': `${Math.random() * 100}%`
          }"
        ></div>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { onMounted } from 'vue';
  import gsap from 'gsap';
  
  onMounted(() => {
    // Animate title and description
    gsap.from('.title', {
      y: -50,
      opacity: 0,
      duration: 1,
      delay: 0.5,
      ease: 'power3.out'
    });
    
    gsap.from('.description', {
      y: 30,
      opacity: 0,
      duration: 1,
      delay: 0.8,
      ease: 'power3.out'
    });
    
    // Animate actions
    gsap.from('.actions', {
      y: 30,
      opacity: 0,
      duration: 1,
      delay: 1.1,
      ease: 'power3.out'
    });
    
    // Animate cosmic anomaly
    gsap.from('.cosmic-anomaly', {
      scale: 0,
      opacity: 0,
      duration: 1.5,
      ease: 'elastic.out(1, 0.5)'
    });
    
    // Continuous animation for anomaly
    gsap.to('.anomaly-ring', {
      rotation: 360,
      duration: 20,
      repeat: -1,
      ease: 'linear'
    });
    
    gsap.to('.anomaly-core', {
      scale: 1.1,
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut'
    });
    
    // Animate debris items
    gsap.to('.debris-item', {
      x: 'random(-100, 100)',
      y: 'random(-100, 100)',
      rotation: 'random(-720, 720)',
      duration: 'random(15, 30)',
      repeat: -1,
      yoyo: true,
      ease: 'none',
      stagger: 0.1
    });
  });
  </script>
  
  <style lang="scss" scoped>
  .not-found-container {
    @apply min-h-screen flex flex-col items-center justify-center px-6 py-12 relative overflow-hidden;
    background: radial-gradient(circle at center, theme('colors.void.800'), theme('colors.void.950'));
    
    &::before {
      content: '';
      @apply absolute inset-0 z-0;
      background-image: url('@/assets/images/stars-bg.svg');
      background-size: cover;
      opacity: 0.3;
    }
  }
  
  .cosmic-anomaly {
    @apply relative flex items-center justify-center w-48 h-48 mb-8;
    
    .anomaly-ring {
      @apply absolute w-full h-full rounded-full border-8 border-rift-500 opacity-70;
      box-shadow: 0 0 30px theme('colors.rift.500'), inset 0 0 20px theme('colors.rift.500');
      animation: pulse 3s infinite alternate ease-in-out;
    }
    
    .anomaly-core {
      @apply font-display text-7xl text-white z-10;
      text-shadow: 0 0 20px theme('colors.rift.500');
    }
  }
  
  .title {
    @apply text-3xl md:text-4xl font-display text-white text-center mb-4 relative z-10;
    text-shadow: 0 0 15px theme('colors.rift.500');
    letter-spacing: 2px;
  }
  
  .description {
    @apply text-lg text-starlight-300 text-center mb-10 max-w-md relative z-10;
  }
  
  .actions {
    @apply relative z-10;
    
    .home-button {
      @apply relative inline-block px-6 py-3 text-lg font-display text-white rounded-full overflow-hidden;
      background: linear-gradient(45deg, theme('colors.rift.600'), theme('colors.time.600'));
      box-shadow: 0 0 20px rgba(97, 61, 244, 0.4);
      
      .button-text {
        @apply relative z-10;
      }
      
      .button-glow {
        @apply absolute inset-0 -z-0;
        background: linear-gradient(45deg, theme('colors.rift.400'), theme('colors.time.400'));
        opacity: 0;
        transition: opacity 0.3s ease-out;
      }
      
      &:hover {
        @apply transform scale-105;
        box-shadow: 0 0 30px rgba(97, 61, 244, 0.6);
        
        .button-glow {
          opacity: 1;
        }
      }
    }
  }
  
  .space-debris {
    @apply absolute inset-0 pointer-events-none;
    
    .debris-item {
      @apply absolute rounded opacity-60;
      width: var(--size);
      height: var(--size);
      top: var(--top);
      left: var(--left);
      transform: rotate(var(--rotation));
      background: linear-gradient(
        45deg,
        theme('colors.rift.500'),
        theme('colors.rift.700')
      );
      box-shadow: 0 0 10px theme('colors.rift.500');
      animation: pulse 3s infinite altern