<!-- src/views/LandingView.vue -->
<template>
    <div class="landing-container">
      <!-- Hero Section with Parallax Stars -->
      <section class="hero-section" ref="heroSection">
        <div class="hero-content" data-aos="fade-up" data-aos-duration="1200">
          <h1 class="hero-title">
            <span class="title-dawn">Dawn</span><span class="title-tasy">tasy</span>
            <span class="title-ai">AI</span>
          </h1>
          <p class="hero-subtitle" ref="heroSubtitle"></p>
          <div class="hero-cta">
            <router-link to="/register" class="cta-button register">
              <span class="button-text">Begin Journey</span>
              <span class="button-icon">→</span>
            </router-link>
            <router-link to="/login" class="cta-button login">
              <span class="button-text">Resume Journey</span>
            </router-link>
          </div>
        </div>
        
        <!-- Floating Elements -->
        <div class="floating-elements">
          <div class="clock-element" ref="clockElement">
            <div class="clock-face"></div>
            <div class="clock-hand hour-hand"></div>
            <div class="clock-hand minute-hand"></div>
          </div>
          <div class="rift-portal" ref="riftPortal"></div>
        </div>
      </section>
      
      <!-- Features Section -->
      <section class="features-section">
        <h2 class="section-title" data-aos="fade-up">Explore The Cosmic Features</h2>
        
        <div class="features-grid">
          <!-- Feature Card 1 -->
          <div class="feature-card" 
               data-aos="fade-up" 
               data-aos-delay="100"
               @mouseenter="animateFeature($event)"
               @mouseleave="resetFeature($event)">
            <div class="feature-icon">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <circle cx="12" cy="12" r="10"></circle>
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"></path>
                <path d="M12 6v6l4 2"></path>
              </svg>
            </div>
            <h3 class="feature-title">The ARCHMAGE Tool</h3>
            <p class="feature-description">
              Experience multifaceted analysis that unlocks new dimensions of understanding, 
              just as Time Smith understood The Rift's true nature.
            </p>
          </div>
          
          <!-- Feature Card 2 -->
          <div class="feature-card" 
               data-aos="fade-up" 
               data-aos-delay="200"
               @mouseenter="animateFeature($event)"
               @mouseleave="resetFeature($event)">
            <div class="feature-icon">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10z"></path>
              </svg>
            </div>
            <h3 class="feature-title">Memory Code</h3>
            <p class="feature-description">
              Your AI companion remembers every interaction, creating a 
              continuous narrative woven through time.
            </p>
          </div>
          
          <!-- Feature Card 3 -->
          <div class="feature-card" 
               data-aos="fade-up" 
               data-aos-delay="300"
               @mouseenter="animateFeature($event)"
               @mouseleave="resetFeature($event)">
            <div class="feature-icon">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
                <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
              </svg>
            </div>
            <h3 class="feature-title">Dawntasy Database</h3>
            <p class="feature-description">
              Access the complete lore of the Dawntasy universe, from Bear Village 
              to the secrets of The Rift.
            </p>
          </div>
        </div>
      </section>
      
      <!-- Call to Action Section -->
      <section class="cta-section" ref="ctaSection">
        <div class="cta-content" data-aos="fade-up">
          <h2 class="cta-title">Begin Your Dawntasy Journey</h2>
          <p class="cta-description">
            The Plain and Pale Clock is ticking. Will you discover the truth behind The Rift?
          </p>
          <router-link to="/register" class="cta-button-large">
            <span class="button-text">Enter The Rift</span>
            <span class="button-glow"></span>
          </router-link>
        </div>
      </section>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref, onMounted, onUnmounted } from 'vue';
  import gsap from 'gsap';
  import { ScrollTrigger } from 'gsap/ScrollTrigger';
  import Typed from 'typed.js';
  import AOS from 'aos';
  import 'aos/dist/aos.css';
  
  // Register GSAP plugins
  gsap.registerPlugin(ScrollTrigger);
  
  // Refs
  const heroSection = ref<HTMLElement | null>(null);
  const heroSubtitle = ref<HTMLElement | null>(null);
  const clockElement = ref<HTMLElement | null>(null);
  const riftPortal = ref<HTMLElement | null>(null);
  const ctaSection = ref<HTMLElement | null>(null);
  
  // Typed.js instance
  let typed: Typed;
  
  // Initialize animations
  onMounted(() => {
    // Initialize AOS
    AOS.init({
      duration: 800,
      easing: 'ease-out',
      once: false,
    });
    
    // Hero title entrance animation
    gsap.from('.hero-title', {
      y: 50,
      opacity: 0,
      duration: 1.2,
      ease: 'power3.out',
    });
    
    // Typed.js for subtitle
    typed = new Typed(heroSubtitle.value!, {
      strings: [
        'Your gateway to the Dawntasy universe',
        'Consult The Rift for cosmic insights',
        'Explore the secrets of Time\'s True Name',
        'Chat with an AI that understands reality\'s fabric'
      ],
      typeSpeed: 40,
      backSpeed: 20,
      backDelay: 1800,
      startDelay: 1000,
      loop: true,
      smartBackspace: true,
    });
    
    // Animate floating elements
    if (clockElement.value) {
      gsap.to(clockElement.value, {
        y: '-20px',
        rotation: 360,
        duration: 25,
        ease: 'none',
        repeat: -1,
        yoyo: true,
      });
    }
    
    if (riftPortal.value) {
      gsap.to(riftPortal.value, {
        scale: 1.1,
        opacity: 0.8,
        duration: 3,
        ease: 'sine.inOut',
        repeat: -1,
        yoyo: true,
      });
    }
    
    // Parallax effect on hero section
    if (heroSection.value) {
      window.addEventListener('mousemove', handleMouseMove);
    }
    
    // Scroll animations
    setupScrollAnimations();
  });
  
  // Clean up
  onUnmounted(() => {
    typed?.destroy();
    window.removeEventListener('mousemove', handleMouseMove);
    ScrollTrigger.getAll().forEach(trigger => trigger.kill());
  });
  
  // Feature card hover animation
  const animateFeature = (event: MouseEvent) => {
    const target = event.currentTarget as HTMLElement;
    gsap.to(target, {
      y: -10,
      scale: 1.03,
      boxShadow: '0 20px 25px -5px rgba(97, 61, 244, 0.25)',
      duration: 0.3,
      ease: 'power2.out',
    });
    
    // Animate icon
    const icon = target.querySelector('.feature-icon') as HTMLElement;
    gsap.to(icon, {
      scale: 1.1,
      rotation: 5,
      duration: 0.5,
      ease: 'back.out',
    });
  };
  
  const resetFeature = (event: MouseEvent) => {
    const target = event.currentTarget as HTMLElement;
    gsap.to(target, {
      y: 0,
      scale: 1,
      boxShadow: '0 10px 15px -3px rgba(97, 61, 244, 0.15)',
      duration: 0.3,
      ease: 'power2.out',
    });
    
    // Reset icon
    const icon = target.querySelector('.feature-icon') as HTMLElement;
    gsap.to(icon, {
      scale: 1,
      rotation: 0,
      duration: 0.5,
      ease: 'back.out',
    });
  };
  
  // Parallax mousemove effect
  const handleMouseMove = (event: MouseEvent) => {
    const { clientX, clientY } = event;
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;
    
    const moveX = (clientX - windowWidth / 2) / 25;
    const moveY = (clientY - windowHeight / 2) / 25;
    
    // Move elements for parallax effect
    gsap.to('.floating-elements', {
      x: moveX,
      y: moveY,
      duration: 1,
      ease: 'power2.out',
    });
  };
  
  // Set up scroll-based animations
  const setupScrollAnimations = () => {
    // Animate features on scroll
    ScrollTrigger.batch('.feature-card', {
      onEnter: batch => {
        gsap.from(batch, {
          y: 50,
          opacity: 0,
          stagger: 0.15,
          duration: 0.8,
          ease: 'power3.out',
        });
      },
      start: 'top 80%',
    });
    
    // Animate CTA section
    if (ctaSection.value) {
      gsap.from(ctaSection.value, {
        backgroundPosition: '0% 0%',
        scrollTrigger: {
          trigger: ctaSection.value,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        },
      });
    }
  };
  </script>
  
  <style lang="scss" scoped>
  .landing-container {
    @apply min-h-screen w-full overflow-x-hidden;
  }
  
  // Hero Section
  .hero-section {
    @apply relative min-h-screen flex items-center justify-center px-4 overflow-hidden;
    background: radial-gradient(ellipse at bottom, theme('colors.void.800'), theme('colors.void.950'));
    
    &::before {
      content: '';
      @apply absolute inset-0 z-0;
      background-image: url('@/assets/images/constellation-bg.svg');
      background-size: cover;
      opacity: 0.15;
    }
  }
  
  .hero-content {
    @apply relative z-10 text-center max-w-4xl mx-auto;
  }
  
  .hero-title {
    @apply text-5xl sm:text-6xl md:text-7xl font-display font-bold mb-4 tracking-tighter;
    
    .title-dawn {
      @apply text-rift-400;
      text-shadow: 0 0 15px theme('colors.rift.500');
    }
    
    .title-tasy {
      @apply text-white;
    }
    
    .title-ai {
      @apply text-time-400 ml-2;
      text-shadow: 0 0 15px theme('colors.time.500');
    }
  }
  
  .hero-subtitle {
    @apply text-xl sm:text-2xl text-starlight-300 mb-8 h-12;
  }
  
  .hero-cta {
    @apply flex flex-col sm:flex-row items-center justify-center gap-4 mt-8;
  }
  
  .cta-button {
    @apply flex items-center justify-center px-6 py-3 rounded-full transition-all duration-300 font-medium;
    
    &.register {
      @apply bg-gradient-to-r from-rift-600 to-time-500 text-white relative overflow-hidden;
      box-shadow: 0 0 20px theme('colors.rift.500');
      
      &:hover {
        @apply transform scale-105;
        box-shadow: 0 0 30px theme('colors.rift.400');
        
        .button-icon {
          @apply translate-x-1;
        }
      }
      
      .button-text {
        @apply relative z-10;
      }
      
      .button-icon {
        @apply ml-2 transition-transform duration-300 relative z-10;
      }
      
      &::before {
        content: '';
        @apply absolute inset-0 opacity-0 transition-opacity duration-300;
        background: linear-gradient(45deg, theme('colors.rift.400'), theme('colors.time.400'));
      }
      
      &:hover::before {
        @apply opacity-100;
      }
    }
    
    &.login {
      @apply bg-transparent border-2 border-starlight-700 text-starlight-300;
      
      &:hover {
        @apply bg-starlight-900 bg-opacity-20 text-white border-starlight-500;
      }
    }
  }
  
  // Floating Elements
  .floating-elements {
    @apply absolute w-full h-full pointer-events-none;
    will-change: transform;
  }
  
  .clock-element {
    @apply absolute w-40 h-40 opacity-60;
    top: 20%;
    right: 10%;
    
    .clock-face {
      @apply w-full h-full rounded-full border-4 border-void-600;
      background: radial-gradient(circle, theme('colors.void.800'), theme('colors.void.900'));
      box-shadow: 0 0 30px theme('colors.void.900');
    }
    
    .clock-hand {
      @apply absolute bg-starlight-400 rounded-full left-1/2 top-1/2 transform -translate-x-1/2 origin-bottom;
      
      &.hour-hand {
        @apply h-12 w-1;
        top: calc(50% - 12px);
      }
      
      &.minute-hand {
        @apply h-16 w-0.5;
        top: calc(50% - 16px);
      }
    }
  }
  
  .rift-portal {
    @apply absolute w-64 h-64 rounded-full;
    bottom: 15%;
    left: 10%;
    background: radial-gradient(circle, theme('colors.rift.500') 0%, transparent 70%);
    filter: blur(20px);
    opacity: 0.5;
  }
  
  // Features Section
  .features-section {
    @apply py-20 px-4 relative z-10 bg-void-900;
    
    &::before {
      content: '';
      @apply absolute inset-0 -z-10;
      background-image: url('@/assets/images/grid-pattern.svg');
      opacity: 0.05;
    }
  }
  
  .section-title {
    @apply text-3xl md:text-4xl font-display text-center mb-16 text-white;
    text-shadow: 0 0 10px theme('colors.rift.500');
    
    &::after {
      content: '';
      @apply block w-24 h-1 mx-auto mt-4 bg-gradient-to-r from-rift-500 to-time-500 rounded-full;
    }
  }
  
  .features-grid {
    @apply grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto;
  }
  
  .feature-card {
    @apply bg-void-800 rounded-xl p-6 border border-void-700 transition-all duration-300;
    box-shadow: 0 10px 15px -3px rgba(97, 61, 244, 0.15);
    
    .feature-icon {
      @apply w-12 h-12 mb-4 text-rift-400;
      filter: drop-shadow(0 0 5px theme('colors.rift.500'));
    }
    
    .feature-title {
      @apply text-xl font-display text-white mb-3;
    }
    
    .feature-description {
      @apply text-starlight-300 text-sm leading-relaxed;
    }
  }
  
  // CTA Section
  .cta-section {
    @apply py-24 px-4 relative z-10 flex items-center justify-center;
    background: linear-gradient(to bottom, theme('colors.void.900'), theme('colors.void.950'));
    background-size: 400% 400%;
  }
  
  .cta-content {
    @apply text-center max-w-3xl mx-auto;
  }
  
  .cta-title {
    @apply text-3xl md:text-4xl font-display text-white mb-4;
    text-shadow: 0 0 15px theme('colors.time.500');
  }
  
  .cta-description {
    @apply text-xl text-starlight-300 mb-8;
  }
  
  .cta-button-large {
    @apply relative inline-block px-8 py-4 text-xl font-display text-white rounded-full overflow-hidden;
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
    
    &::after {
      content: '';
      @apply absolute inset-0 rounded-full;
      background: radial-gradient(circle at center, transparent 30%, theme('colors.rift.500') 100%);
      opacity: 0;
      z-index: 5;
      transition: opacity 0.5s;
    }
    
    &:active::after {
      opacity: 0.3;
    }
  }
  
  // Animation Helper Classes
  .animate-float {
    animation: float 6s ease-in-out infinite;
  }
  
  @keyframes float {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-20px); }
  }
  </style>