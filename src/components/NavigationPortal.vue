<template>
    <div 
      ref="portalRef"
      :class="['quantum-portal', { 'portal-active': isActive }]"
      :style="portalStyles"
    >
      <div class="portal-core" :style="coreStyles"></div>
      <div class="portal-ripple" v-for="n in 3" :key="n"></div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref, computed, onMounted } from 'vue';
  import { gsap } from 'gsap';
  
  interface PortalProps {
    isActive: boolean;
    transitionColor?: string;
  }
  
  const props = withDefaults(defineProps<PortalProps>(), {
    transitionColor: '#8B5CF6'
  });
  
  const portalRef = ref<HTMLElement | null>(null);
  
  const portalStyles = computed(() => ({
    background: `radial-gradient(circle, ${props.transitionColor} 0%, transparent 70%)`,
    mixBlendMode: 'screen'
  }));
  
  const coreStyles = computed(() => ({
    background: props.transitionColor,
    boxShadow: `0 0 50px 20px ${props.transitionColor}`
  }));
  
  // 🌀 QUANTUM TRANSITION ANIMATIONS
  onMounted(() => {
    if (portalRef.value) {
      const portal = portalRef.value;
      
      gsap.timeline({ repeat: -1, yoyo: true })
        .to(portal, {
          scale: 1.05,
          opacity: 0.9,
          duration: 2,
          ease: 'power1.inOut'
        });
    }
  });
  </script>
  
  <style scoped lang="scss">
  .quantum-portal {
    position: fixed;
    top: 50%;
    left: 50%;
    width: 100px;
    height: 100px;
    border-radius: 50%;
    transform: translate(-50%, -50%) scale(0);
    opacity: 0;
    z-index: 9999;
    pointer-events: none;
    transition: 
      transform 1.2s cubic-bezier(0.165, 0.84, 0.44, 1),
      opacity 1.2s ease-in-out;
  
    &.portal-active {
      transform: translate(-50%, -50%) scale(20);
      opacity: 1;
    }
  
    .portal-core {
      position: absolute;
      top: 50%;
      left: 50%;
      width: 50px;
      height: 50px;
      border-radius: 50%;
      transform: translate(-50%, -50%);
      opacity: 0.8;
      animation: pulse 2s infinite alternate;
    }
  
    .portal-ripple {
      position: absolute;
      top: 50%;
      left: 50%;
      border-radius: 50%;
      transform: translate(-50%, -50%);
      opacity: 0.3;
      animation: ripple 3s infinite;
    }
  
    @for $i from 1 through 3 {
      .portal-ripple:nth-child(#{$i}) {
        animation-delay: #{$i * 0.5}s;
      }
    }
  }
  
  @keyframes pulse {
    0% { transform: translate(-50%, -50%) scale(0.9); }
    100% { transform: translate(-50%, -50%) scale(1.1); }
  }
  
  @keyframes ripple {
    0% { 
      width: 0;
      height: 0;
      opacity: 0.6;
    }
    100% { 
      width: 300px;
      height: 300px;
      opacity: 0;
    }
  }
  </style>