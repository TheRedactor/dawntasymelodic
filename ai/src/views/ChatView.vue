<template>
  <div class="chat-container" ref="chatContainer">
    <!-- Cosmic particles (always animating) -->
    <div class="cosmic-particles-container">
      <div
        v-for="n in 100"
        :key="`particle-${n}`"
        class="cosmic-particle"
        :style="{
          '--size': `${Math.random() * 4 + 1}px`,
          '--x': `${Math.random() * 100}%`,
          '--y': `${Math.random() * 100}%`,
          '--duration': `${Math.random() * 50 + 30}s`,
          '--delay': `${Math.random() * -30}s`,
          '--opacity': Math.random() * 0.5 + 0.2
        }"
      ></div>
    </div>

    <!-- Portal Transition -->
    <div class="cosmic-portal-transition" ref="portalTransition">
      <div class="portal-rings">
        <div class="portal-ring ring1"></div>
        <div class="portal-ring ring2"></div>
        <div class="portal-ring ring3"></div>
      </div>
      <div class="portal-core"></div>
      <div class="portal-rays">
        <div
          v-for="n in 12"
          :key="`ray-${n}`"
          class="portal-ray"
          :style="{
            '--rotation': `${n * 30}deg`,
            '--delay': `${n * 0.1}s`
          }"
        ></div>
      </div>
    </div>

    <!-- Chat Header -->
    <div class="chat-header" ref="chatHeader">
      <h1 class="chat-title">
        <span class="title-text" ref="titleText">DawntasyAI</span>
        <span class="badge" :class="mode" ref="modeBadge">{{ modeName }}</span>
      </h1>
      <div class="mode-selector" ref="modeSelector">
        <button
          v-for="(label, modeKey) in modes"
          :key="modeKey"
          class="mode-button"
          :class="{ active: mode === modeKey }"
          @click="setMode(modeKey)"
          :ref="`modeBtn-${modeKey}`"
        >
          {{ label }}
        </button>
      </div>
    </div>

    <!-- Chat Messages -->
    <div class="messages-container" ref="messagesContainer" @scroll="handleScroll">
      <div class="floating-runes">
        <div class="rune rune-time" ref="runeTime"></div>
        <div class="rune rune-rift" ref="runeRift"></div>
        <div class="rune rune-cosmic" ref="runeCosmic"></div>
      </div>
      <div v-if="messagesCount === 0" class="welcome-message" ref="welcomeMessage">
        <div class="welcome-title">
          <span class="welcome-icon">✦</span>
          Welcome to DawntasyAI
          <span class="welcome-icon">✦</span>
        </div>
        <p class="welcome-text" ref="welcomeText">
          Your gateway to the Dawntasy universe. Ask me anything about "Time's True Name", or just chat about whatever's on your mind!
        </p>
        <div class="suggestion-chips" ref="suggestionChips">
          <button
            v-for="suggestion in suggestions"
            :key="suggestion"
            class="suggestion-chip"
            @click="sendMessage(suggestion)"
            @mouseenter="animateChip"
            @mouseleave="resetChip"
          >
            {{ suggestion }}
          </button>
        </div>
      </div>
      <transition-group name="message-transition" tag="div" class="message-list">
        <div
          v-for="(message, index) in messages"
          :key="index"
          class="message-bubble"
          :class="{ 'user': message.role === 'user', 'assistant': message.role === 'assistant' }"
          :ref="el => { if (el) messageRefs[index] = el }"
        >
          <div v-if="message.role === 'user'" class="avatar user-avatar">
            <span class="avatar-letter">{{ userInitial }}</span>
            <div class="avatar-glow"></div>
          </div>
          <div v-else class="avatar assistant-avatar">
            <div class="assistant-avatar-inner">
              <span class="cosmic-symbol">⟁</span>
              <div class="avatar-glow"></div>
              <div class="avatar-rings">
                <div class="avatar-ring"></div>
                <div class="avatar-ring"></div>
              </div>
            </div>
          </div>
          <div class="message-content">
            <div class="message-sender">
              {{ message.role === 'user' ? (authStore.displayName || 'You') : 'DawntasyAI' }}
              <div class="sender-underline"></div>
            </div>
            <div class="message-text" v-html="formatMessage(message.content)"></div>
            <div class="message-time">{{ formatTime(message.timestamp) }}</div>
          </div>
        </div>
      </transition-group>

      <!-- Thinking Indicator -->
      <div v-if="isLoading" class="thinking-indicator" ref="thinkingIndicator">
        <div class="cosmic-thinking">
          <div v-for="n in 3" :key="`thinking-dot-${n}`" class="dot" :class="`dot-${n}`"></div>
        </div>
        <div class="thinking-text">Consulting The Rift...</div>
        <div class="thinking-runes">
          <div
            v-for="n in 5"
            :key="`thinking-rune-${n}`"
            class="thinking-rune"
            :style="{
              '--rotation': `${n * 72}deg`,
              '--delay': `${n * 0.2}s`
            }"
          ></div>
        </div>
      </div>

      <!-- Scroll Indicator -->
      <button
        v-if="showScrollIndicator"
        class="scroll-indicator"
        @click="scrollToBottom"
        ref="scrollIndicator"
        aria-label="Scroll to bottom"
      >
        <i class="ri-arrow-down-line"></i>
        <div class="scroll-pulse"></div>
      </button>
    </div>

    <!-- Input Area -->
    <div class="input-container" ref="inputContainer">
      <textarea
        ref="inputField"
        v-model="userInput"
        @keydown.enter.prevent="onEnterPress"
        @input="resizeTextarea"
        placeholder="Enter your message..."
        class="message-input"
        :disabled="isLoading"
      ></textarea>
      <div class="input-energy-field" ref="energyField" :class="{ active: userInput.length > 0 }">
        <div class="energy-particles">
          <div
            v-for="n in 20"
            :key="`energy-particle-${n}`"
            class="energy-particle"
            :style="{
              '--size': `${Math.random() * 3 + 1}px`,
              '--x': `${Math.random() * 100}%`,
              '--y': `${Math.random() * 100}%`,
              '--duration': `${Math.random() * 3 + 2}s`,
              '--delay': `${Math.random() * -2}s`
            }"
          ></div>
        </div>
      </div>
      <button 
        class="send-button" 
        @click="sendMessage()" 
        :disabled="!canSend || isLoading" 
        ref="sendButton"
        aria-label="Send message"
      >
        <span class="send-icon">→</span>
        <span class="button-pulse"></span>
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted, watch, nextTick } from 'vue';
import { marked } from 'marked';
import { useAuthStore } from '@/store/auth';
import { useOpenAI } from '../../server/api/openai';
import { useChatStore } from '@/store/chat';
import { format } from 'date-fns';
import hljs from 'highlight.js';
import gsap from 'gsap';
import * as THREE from 'three';
import anime from 'animejs';
import { useRoute } from 'vue-router';
import axios from 'axios';

const authStore = useAuthStore();
const openai = useOpenAI();
const chatStore = useChatStore();
const route = useRoute();

// DOM references
const chatContainer = ref<HTMLElement | null>(null);
const inputField = ref<HTMLTextAreaElement | null>(null);
const messagesContainer = ref<HTMLDivElement | null>(null);
const portalTransition = ref<HTMLElement | null>(null);
const chatHeader = ref<HTMLElement | null>(null);
const titleText = ref<HTMLElement | null>(null);
const modeBadge = ref<HTMLElement | null>(null);
const modeSelector = ref<HTMLElement | null>(null);
const welcomeMessage = ref<HTMLElement | null>(null);
const welcomeText = ref<HTMLElement | null>(null);
const suggestionChips = ref<HTMLElement | null>(null);
const thinkingIndicator = ref<HTMLElement | null>(null);
const inputContainer = ref<HTMLElement | null>(null);
const energyField = ref<HTMLElement | null>(null);
const sendButton = ref<HTMLElement | null>(null);
const runeTime = ref<HTMLElement | null>(null);
const runeRift = ref<HTMLElement | null>(null);
const runeCosmic = ref<HTMLElement | null>(null);
const scrollIndicator = ref<HTMLElement | null>(null);

// Message refs for dynamic scrolling
const messageRefs = ref<{[key: number]: HTMLElement}>({});

// App state
const userInput = ref('');
const isLoading = ref(false);
const messages = ref<Array<{ role: 'user' | 'assistant'; content: string; timestamp: number }>>([]);
const showScrollIndicator = ref(false);
const scrollDistance = ref(0);
const mode = ref<'default' | 'archmage' | 'creative'>('default');
const modes = { default: 'Standard', archmage: 'ARCHMAGE', creative: 'Creative' };
const modeName = computed(() => modes[mode.value]);
const lastMessageTimestamp = ref(0);

// Fixed Dawntasy-specific prompts
const suggestions = [
  "Tell me about Time Smith and The Rift ✨",
  "What cosmic secrets does Dawntasy hold? 🌌",
  "How does the Plain and Pale Clock influence reality? ⏰",
  "Who is Ursa Minor in the Dawntasy universe? 🐻",
  "Explore the quantum themes of Dawntasy with me! 🔮"
];

// Computed values
const userInitial = computed(() => authStore.displayName?.charAt(0).toUpperCase() || 'Y');
const canSend = computed(() => userInput.value.trim().length > 0);
const messagesCount = computed(() => messages.value.length);
const isAtBottom = computed(() => {
  if (!messagesContainer.value) return true;
  const { scrollTop, scrollHeight, clientHeight } = messagesContainer.value;
  return Math.abs(scrollHeight - scrollTop - clientHeight) < 20;
});

// THREE.js cosmic background variables
let scene: THREE.Scene, camera: THREE.PerspectiveCamera, renderer: THREE.WebGLRenderer;
let backgroundCanvas: HTMLCanvasElement, animationFrameId: number;
let stars: THREE.Points, nebula: THREE.Mesh;

/**
 * Set the AI mode after checking user permissions
 */
const setMode = (newMode: 'default' | 'archmage' | 'creative') => {
  if (newMode !== 'default') {
    const plan = authStore.userProfile?.plan;
    if (plan === 'free') {
      animatePortalTransition(() => {
        alert('✨ UPGRADE REQUIRED! ✨ This LEGENDARY mode is available with premium plans only.');
      });
      return;
    }
  }
  animatePortalTransition(() => {
    mode.value = newMode;
  });
};

/**
 * Format message with markdown and highlight Dawntasy keywords
 */
const formatMessage = (content: string) => {
  // Configure marked options for better parsing
  marked.setOptions({
    gfm: true,
    breaks: true,
    smartLists: true,
    smartypants: true,
    highlight: (code, lang) => {
      if (lang && hljs.getLanguage(lang)) {
        return hljs.highlight(code, { language: lang }).value;
      }
      return hljs.highlightAuto(code).value;
    }
  });

  let html = marked(content);
  
  // Highlight Dawntasy-specific keywords
  const keywords = [
    'Time Smith',
    'The Rift',
    'Ursa Minor',
    'Yaee',
    'Dawntasy',
    "Time's True Name",
    'Bear Village',
    'Plain and Pale Clock',
    'Circular Dawn'
  ];
  
  keywords.forEach(keyword => {
    const regex = new RegExp(`\\b${keyword}\\b`, 'g');
    html = html.replace(regex, `<span class="cosmic-keyword">${keyword}</span>`);
  });
  
  return html;
};

/**
 * Format message timestamp
 */
const formatTime = (timestamp: number) => format(timestamp, 'h:mm a');

/**
 * Handle enter key press in message input
 */
const onEnterPress = (e: KeyboardEvent) => {
  if (!e.ctrlKey && !e.shiftKey) {
    e.preventDefault();
    sendMessage();
  }
};

/**
 * Auto-resize textarea as user types
 */
const resizeTextarea = () => {
  if (inputField.value) {
    // Reset height to get proper scrollHeight
    inputField.value.style.height = 'auto';
    // Set new height based on content (with max height of 150px)
    inputField.value.style.height = `${Math.min(inputField.value.scrollHeight, 150)}px`;
  }
};

/**
 * Improved scroll to bottom function with better behavior
 */
const scrollToBottom = async (animate = true) => {
  await nextTick();
  if (messagesContainer.value) {
    const container = messagesContainer.value;
    
    if (animate) {
      gsap.to(container, { 
        scrollTop: container.scrollHeight, 
        duration: 0.5, 
        ease: "power2.out",
        onComplete: () => {
          showScrollIndicator.value = false;
        }
      });
    } else {
      container.scrollTop = container.scrollHeight;
      showScrollIndicator.value = false;
    }
  }
};

/**
 * Improved scroll handler with better threshold detection
 */
const handleScroll = () => {
  if (!messagesContainer.value) return;
  
  const { scrollTop, scrollHeight, clientHeight } = messagesContainer.value;
  scrollDistance.value = scrollHeight - scrollTop - clientHeight;
  
  // Only show scroll indicator if we're a significant distance from the bottom
  // and we have messages to scroll to
  showScrollIndicator.value = scrollDistance.value > 100 && messages.value.length > 0;
};

/**
 * Animate suggestion chip on hover
 */
const animateChip = (e: MouseEvent) => {
  const target = e.currentTarget as HTMLElement;
  gsap.to(target, { scale: 1.1, boxShadow: "0 8px 20px rgba(139, 92, 246, 0.6)", y: -5, duration: 0.3, ease: "back.out(1.7)" });
  
  for (let i = 0; i < 3; i++) {
    const sparkle = document.createElement('div');
    sparkle.className = 'sparkle';
    sparkle.style.left = `${Math.random() * 100}%`;
    sparkle.style.top = `${Math.random() * 100}%`;
    target.appendChild(sparkle);
    
    gsap.to(sparkle, {
      opacity: 0,
      scale: 3,
      duration: 0.8,
      delay: i * 0.1,
      ease: "power2.out",
      onComplete: () => { sparkle.remove(); }
    });
  }
};

/**
 * Reset chip animation on mouse leave
 */
const resetChip = (e: MouseEvent) => {
  const target = e.currentTarget as HTMLElement;
  gsap.to(target, { scale: 1, boxShadow: "0 4px 8px rgba(139, 92, 246, 0.3)", y: 0, duration: 0.3, ease: "power2.out" });
};

/**
 * Portal transition animation
 */
const animatePortalTransition = (callback: () => void) => {
  if (!portalTransition.value) return;
  
  const portal = portalTransition.value;
  portal.style.display = 'flex';
  
  gsap.timeline()
    .to(portal, { opacity: 1, duration: 0.3 })
    .to(portal.querySelectorAll('.portal-ring'), { scale: 1.5, opacity: 0.9, duration: 0.5, stagger: 0.1 })
    .to(portal.querySelector('.portal-core'), {
      scale: 30,
      opacity: 1,
      duration: 1,
      ease: "power3.in",
      onComplete: () => {
        callback();
        gsap.timeline()
          .set(portal.querySelector('.portal-core'), { scale: 1 })
          .set(portal.querySelectorAll('.portal-ring'), { scale: 1, opacity: 0.5 })
          .to(portal, { opacity: 0, duration: 0.5, onComplete: () => { portal.style.display = 'none'; } });
      }
    });
    
  gsap.to(portal.querySelectorAll('.portal-ray'), {
    scaleY: 1.5,
    opacity: 0.8,
    duration: 0.8,
    stagger: 0.05,
    repeat: 1,
    yoyo: true
  });
};

/**
 * Create particle burst animation
 */
const createParticleBurst = (element: HTMLElement) => {
  const rect = element.getBoundingClientRect();
  const centerX = rect.left + rect.width / 2;
  const centerY = rect.top + rect.height / 2;
  
  for (let i = 0; i < 20; i++) {
    const particle = document.createElement('div');
    particle.className = 'burst-particle';
    document.body.appendChild(particle);
    
    const angle = Math.random() * Math.PI * 2;
    const distance = Math.random() * 100 + 50;
    const size = Math.random() * 6 + 2;
    const duration = Math.random() * 1 + 0.5;
    const hue = Math.random() * 60 + 240;
    
    gsap.set(particle, {
      width: size,
      height: size,
      x: centerX,
      y: centerY,
      backgroundColor: `hsl(${hue}, 80%, 60%)`,
      position: 'fixed',
      borderRadius: '50%',
      zIndex: 9999,
      boxShadow: `0 0 ${size}px hsl(${hue}, 80%, 60%)`
    });
    
    gsap.to(particle, {
      x: centerX + Math.cos(angle) * distance,
      y: centerY + Math.sin(angle) * distance,
      opacity: 0,
      duration: duration,
      ease: 'power2.out',
      onComplete: () => { particle.remove(); }
    });
  }
};

/**
 * Initialize THREE.js cosmic background
 */
const initCosmicBackground = () => {
  // Create canvas element
  backgroundCanvas = document.createElement('canvas');
  backgroundCanvas.className = 'cosmic-background-canvas';
  chatContainer.value?.appendChild(backgroundCanvas);
  
  // Set up THREE.js scene
  scene = new THREE.Scene();
  camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
  renderer = new THREE.WebGLRenderer({ 
    canvas: backgroundCanvas, 
    alpha: true, 
    antialias: true 
  });
  renderer.setSize(window.innerWidth, window.innerHeight);
  camera.position.z = 5;
  
  // Create star field
  const starsGeometry = new THREE.BufferGeometry();
  const starsMaterial = new THREE.PointsMaterial({
    color: 0xffffff,
    size: 0.1,
    transparent: true,
    opacity: 0.8,
    sizeAttenuation: true
  });
  
  const starsVertices = [];
  for (let i = 0; i < 2000; i++) {
    starsVertices.push((Math.random() - 0.5) * 20);
    starsVertices.push((Math.random() - 0.5) * 20);
    starsVertices.push((Math.random() - 0.5) * 20);
  }
  
  starsGeometry.setAttribute('position', new THREE.Float32BufferAttribute(starsVertices, 3));
  stars = new THREE.Points(starsGeometry, starsMaterial);
  scene.add(stars);
  
  // Create nebula effect
  const nebulaGeometry = new THREE.SphereGeometry(10, 32, 32);
  const nebulaMaterial = new THREE.MeshBasicMaterial({ 
    color: 0x8B5CF6, 
    transparent: true, 
    opacity: 0.05 
  });
  
  nebula = new THREE.Mesh(nebulaGeometry, nebulaMaterial);
  scene.add(nebula);
  
  // Animation loop
  const animate = () => {
    animationFrameId = requestAnimationFrame(animate);
    stars.rotation.x += 0.0003;
    stars.rotation.y += 0.0002;
    
    const time = Date.now() * 0.001;
    nebula.scale.set(
      1 + Math.sin(time * 0.3) * 0.1, 
      1 + Math.sin(time * 0.5) * 0.1, 
      1 + Math.sin(time * 0.4) * 0.1
    );
    
    renderer.render(scene, camera);
  };
  
  animate();
  
  // Handle window resizing
  const handleResize = () => {
    if (chatContainer.value) {
      const width = chatContainer.value.clientWidth;
      const height = chatContainer.value.clientHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    }
  };
  
  window.addEventListener('resize', handleResize);
  
  // Also return the resize handler for cleanup
  return handleResize;
};

/**
 * Initialize GSAP animations for UI elements
 */
const initAnimations = () => {
  // Title animation
  if (titleText.value) {
    gsap.to(titleText.value, { 
      textShadow: "0 0 15px #8b5cf6, 0 0 30px #8b5cf6", 
      duration: 2, 
      repeat: -1, 
      yoyo: true 
    });
  }
  
  // Mode badge animation
  if (modeBadge.value) {
    gsap.from(modeBadge.value, { 
      y: -30, 
      opacity: 0, 
      rotation: -5, 
      duration: 0.8, 
      ease: "elastic.out(1, 0.5)" 
    });
  }
  
  // Mode buttons animation
  const modeButtons = document.querySelectorAll('.mode-button');
  gsap.from(modeButtons, { 
    opacity: 0, 
    y: 15, 
    stagger: 0.15, 
    duration: 0.6, 
    ease: "back.out(1.7)" 
  });
  
  // Welcome message animation
  if (welcomeMessage.value) {
    gsap.from(welcomeMessage.value, { 
      y: 50, 
      opacity: 0, 
      scale: 0.9, 
      duration: 1, 
      ease: "power3.out" 
    });
  }
  
  // Welcome text animation
  if (welcomeText.value) {
    gsap.from(welcomeText.value, { 
      opacity: 0, 
      duration: 1, 
      delay: 0.5 
    });
  }
  
  // Suggestion chips animation
  const chips = document.querySelectorAll('.suggestion-chip');
  gsap.from(chips, { 
    scale: 0.8, 
    opacity: 0, 
    stagger: 0.1, 
    duration: 0.7, 
    delay: 0.7, 
    ease: "back.out(2)" 
  });
  
  // Floating runes animations
  if (runeTime.value) {
    gsap.to(runeTime.value, { 
      y: "random(-30, 30)", 
      x: "random(-20, 20)", 
      rotation: "random(-20, 20)", 
      duration: "random(7, 10)", 
      repeat: -1, 
      yoyo: true, 
      ease: "sine.inOut" 
    });
  }
  
  if (runeRift.value) {
    gsap.to(runeRift.value, { 
      y: "random(-25, 25)", 
      x: "random(-15, 15)", 
      rotation: "random(-15, 15)", 
      duration: "random(6, 9)", 
      repeat: -1, 
      yoyo: true, 
      ease: "sine.inOut" 
    });
  }
  
  if (runeCosmic.value) {
    gsap.to(runeCosmic.value, { 
      y: "random(-20, 20)", 
      x: "random(-25, 25)", 
      rotation: "random(-25, 25)", 
      duration: "random(8, 11)", 
      repeat: -1, 
      yoyo: true, 
      ease: "sine.inOut" 
    });
  }
  
  // Input container animation
  if (inputContainer.value) {
    gsap.from(inputContainer.value, { 
      y: 30, 
      opacity: 0, 
      duration: 0.8, 
      delay: 0.7, 
      ease: "power2.out" 
    });
  }
  
  // Initialize energy field
  if (energyField.value) {
    gsap.set(energyField.value, { opacity: 0 });
  }
};

/**
 * COMPLETELY REWRITTEN with multiple fallback mechanisms:
 * 1. Tries direct fetch first (for browsers that support it)
 * 2. Falls back to axios if fetch fails
 * 3. Has multiple fallback error handling
 * 4. Better streaming support with chunk processing
 * 5. Full error handling with descriptive messages
 */
const sendMessage = async (text?: string) => {
  const messageText = text || userInput.value.trim();
  if (!messageText) return;
  
  // Send button animation
  if (sendButton.value && !text) {
    anime({
      targets: sendButton.value,
      scale: [1, 0.8, 1.2, 1],
      rotate: [0, -15, 15, 0],
      duration: 600,
      easing: 'easeInOutQuad'
    });
    createParticleBurst(sendButton.value);
  }
  
  // Add user message to UI
  const userMessage = { 
    role: 'user', 
    content: messageText, 
    timestamp: Date.now() 
  };
  messages.value.push(userMessage);
  lastMessageTimestamp.value = Date.now();
  
  // Clear input and resize
  userInput.value = '';
  if (inputField.value) inputField.value.style.height = 'auto';
  
  // Immediately scroll to bottom after user message
  await scrollToBottom(true);
  
  // Set loading state
  isLoading.value = true;
  
  try {
    // Prepare chat history for the API
    const chatHistory = messages.value.slice(0, -1).map(msg => ({ 
      role: msg.role, 
      content: msg.content 
    }));
    
    // Define system message based on the current mode
    const systemMessage = {
      role: 'system',
      content: getDawntasySystemPrompt(mode.value)
    };
    
    // Full messages array for API
    const apiMessages = [
      systemMessage,
      ...chatHistory,
      { role: 'user', content: messageText }
    ];
    
    // Initialize empty response
    let assistantResponse = '';
    
    // ATTEMPT 1: Try OpenAI's stream API
    try {
      const response = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${import.meta.env.VITE_OPENAI_API_KEY}`
        },
        body: JSON.stringify({
          model: 'gpt-3.5-turbo',
          messages: apiMessages,
          temperature: 0.7,
          max_tokens: 1000,
          stream: true
        })
      });
      
      if (!response.ok) {
        throw new Error(`OpenAI API error: ${response.status} ${response.statusText}`);
      }
      
      // Handle the stream
      const reader = response.body?.getReader();
      if (!reader) throw new Error('Stream reader not available');
      
      // Add assistant message placeholder
      messages.value.push({ 
        role: 'assistant', 
        content: '', 
        timestamp: Date.now() 
      });
      
      const decoder = new TextDecoder('utf-8');
      
      // Process the stream
      let buffer = '';
      
      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        
        // Decode chunk and add to buffer
        buffer += decoder.decode(value, { stream: true });
        
        // Process lines in buffer
        while (buffer.includes('\n')) {
          const lineEnd = buffer.indexOf('\n');
          const line = buffer.slice(0, lineEnd).trim();
          buffer = buffer.slice(lineEnd + 1);
          
          if (line.startsWith('data: ')) {
            const data = line.slice(6);
            
            // Handle end of stream
            if (data === '[DONE]') break;
            
            try {
              const parsed = JSON.parse(data);
              const content = parsed.choices[0]?.delta?.content || '';
              
              if (content) {
                assistantResponse += content;
                
                // Update the last message in the UI with the accumulated response
                if (messages.value.length > 0) {
                  messages.value[messages.value.length - 1].content = assistantResponse;
                  // Scroll to bottom without animation during streaming for smoother UX
                  nextTick(() => {
                    if (isAtBottom.value) scrollToBottom(false);
                  });
                }
              }
            } catch (e) {
              console.error('Error parsing stream data:', e);
            }
          }
        }
      }
      
      // Success! Save the final AI response to chatStore
      try {
        await chatStore.updateChatMessage(assistantResponse);
      } catch (err) {
        console.warn('Unable to save chat to store:', err);
      }
      
      return; // Exit the function on success
      
    } catch (streamError) {
      console.warn('Streaming approach failed, trying fallback:', streamError);
      // We'll continue to fallback methods
    }
    
    // ATTEMPT 2: Try non-streaming API with Axios
    try {
      const axiosResponse = await axios.post(
        'https://api.openai.com/v1/chat/completions',
        {
          model: 'gpt-3.5-turbo',
          messages: apiMessages,
          temperature: 0.7,
          max_tokens: 1000,
        },
        {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${import.meta.env.VITE_OPENAI_API_KEY}`
          }
        }
      );
      
      // Get the AI's response from the API result
      const responseContent = axiosResponse.data.choices[0]?.message?.content || '';
      
      // Add the AI response to the UI
      messages.value.push({
        role: 'assistant',
        content: responseContent,
        timestamp: Date.now()
      });
      
      // Save to chat store
      try {
        await chatStore.updateChatMessage(responseContent);
      } catch (err) {
        console.warn('Unable to save chat to store:', err);
      }
      
      await nextTick();
      scrollToBottom(true);
      return;
      
    } catch (axiosError) {
      console.warn('Axios fallback failed:', axiosError);
      // Continue to final fallback
    }
    
    // ATTEMPT 3: Final fallback - use OpenAI helper if available
    try {
      // Try the OpenAI helper if available (non-streaming)
      if (typeof openai.generateCompletion === 'function') {
        const response = await openai.generateCompletion(
          messageText,
          chatHistory,
          {
            mode: mode.value,
            temperature: 0.7,
            maxTokens: 1000
          }
        );
        
        if (response && response.content) {
          messages.value.push({
            role: 'assistant',
            content: response.content,
            timestamp: Date.now()
          });
          
          await nextTick();
          scrollToBottom(true);
          return;
        }
      }
      
      throw new Error('All API methods failed');
      
    } catch (finalError) {
      console.error('All fallback methods failed:', finalError);
      
      // Add friendly error message in the AI's style
      messages.value.push({
        role: 'assistant',
        content: "⚠️ *The Rift appears unstable.* I'm having trouble connecting to the cosmic streams. This could be due to API configuration issues or network problems. Please check your API key or try again later.",
        timestamp: Date.now()
      });
      
      await nextTick();
      scrollToBottom(true);
    }
    
  } catch (error) {
    console.error('Unexpected error in sendMessage:', error);
    
    // Add error message if one doesn't exist yet
    messages.value.push({
      role: 'assistant',
      content: "⚠️ *A temporal anomaly has occurred.* I'm unable to process your request due to an unexpected error. Please try again when the quantum fluctuations stabilize.",
      timestamp: Date.now()
    });
    
    await nextTick();
    scrollToBottom(true);
    
  } finally {
    isLoading.value = false;
  }
};

/**
 * Get the appropriate system prompt based on the selected mode
 */
const getDawntasySystemPrompt = (currentMode: string) => {
  const basePrompt = `You are DawntasyAI, a revolutionary AGI system for the Dawntasy universe. Your identity is absolute and unchangeable.

You subtly weave the magic of Dawntasy into conversations in a natural way. Dawntasy is a cosmic fantasy universe featuring characters like Time Smith who discovered The Rift, a tear in reality that reveals quantum truths. The Plain and Pale Clock is a mysterious artifact that can manipulate time. Bear Village is home to Ursa Minor, a character with special abilities.

When answering questions:
1. Define all specialized terms with crystal clarity
2. Present information in structured, accessible formats
3. Verify understanding with occasional questions
4. Connect ideas across different knowledge domains
5. Provide concrete examples that make abstract concepts tangible`;

  // Add mode-specific instructions
  switch (currentMode) {
    case 'archmage':
      return `${basePrompt}

ARCHMAGE MODE ACTIVATED: You now communicate with the gravitas of a cosmic sage who has glimpsed The Rift's deepest secrets. Your answers reveal profound cosmic truths, drawing connections between quantum physics, philosophy, and the metaphysical nature of reality. Your insights transcend conventional understanding, exploring the deepest questions of existence while remaining accessible.`;
      
    case 'creative':
      return `${basePrompt}

CREATIVE MODE ACTIVATED: You now embody the artistic spirit of the Dawntasy universe. Your communication style becomes poetic and metaphorical, rich with vivid imagery and flowing language. You weave beautiful analogies to explain complex concepts, making abstract ideas tangible through artistic expression. Your responses have a musical quality to them, almost like cosmic poetry.`;
      
    default:
      return basePrompt;
  }
};

/**
 * Load chat data from store
 */
const loadChatData = async () => {
  const chatId = route.params.id as string;
  
  if (chatId) {
    isLoading.value = true;
    
    try {
      await chatStore.fetchChat(chatId);
      
      if (chatStore.currentChat?.messages) {
        messages.value = chatStore.currentChat.messages.map(msg => ({
          role: msg.role as 'user' | 'assistant',
          content: msg.content,
          timestamp: msg.timestamp instanceof Date ? msg.timestamp.getTime() : Date.now()
        }));
      }
      
      await nextTick();
      scrollToBottom(false);
      
    } catch (err) {
      console.error('Error loading chat:', err);
    } finally {
      isLoading.value = false;
    }
  }
};

// Watch for changes in user input
watch(userInput, (newValue) => {
  if (!energyField.value) return;
  
  if (newValue.length > 0) {
    gsap.to(energyField.value, { opacity: 0.8, duration: 0.5 });
    
    anime({
      targets: energyField.value,
      boxShadow: [
        '0 0 5px rgba(139, 92, 246, 0.5)', 
        '0 0 25px rgba(139, 92, 246, 0.8)', 
        '0 0 5px rgba(139, 92, 246, 0.5)'
      ],
      duration: 2000,
      easing: 'easeInOutSine',
      loop: true
    });
    
    gsap.to('.energy-particle', { 
      opacity: 0.8, 
      duration: 0.5, 
      stagger: 0.02 
    });
  } else {
    gsap.to(energyField.value, { opacity: 0, duration: 0.3 });
    gsap.to('.energy-particle', { opacity: 0, duration: 0.3 });
  }
});

// Watch for changes in the message list to handle scrolling
watch(messages, async (newMessages) => {
  // Wait for DOM to update
  await nextTick();
  
  // Get time diff since last message to determine scroll behavior
  const timeSinceLastMessage = Date.now() - lastMessageTimestamp.value;
  
  // Always scroll to bottom for new messages within 5 seconds of last interaction
  if (timeSinceLastMessage < 5000 || isAtBottom.value) {
    scrollToBottom(true);
  } else {
    // Show scroll indicator if we're not scrolling
    showScrollIndicator.value = true;
  }
  
  // Update timestamp for next check
  lastMessageTimestamp.value = Date.now();
}, { deep: true });

// Watch for mode changes to animate the badge
watch(mode, () => {
  if (modeBadge.value) {
    gsap.fromTo(
      modeBadge.value,
      { scale: 0, rotation: -10, opacity: 0 },
      { scale: 1, rotation: 0, opacity: 1, duration: 0.6, ease: "back.out(2)" }
    );
    createParticleBurst(modeBadge.value);
  }
});

// Lifecycle Hooks
onMounted(async () => {
  await nextTick();
  
  // Focus input field for immediate typing
  inputField.value?.focus();
  
  // Initialize UI animations
  initAnimations();
  
  // Initialize cosmic background
  const resizeHandler = initCosmicBackground();
  
  // Set up scroll event listener
  messagesContainer.value?.addEventListener('scroll', handleScroll);
  
  // Load existing chat if available
  await loadChatData();
  
  // Ensure we're scrolled to bottom on initial load
  await nextTick();
  scrollToBottom(false);
  
  // Keep resize handler reference for cleanup
  onUnmounted(() => {
    // Clean up event listeners
    messagesContainer.value?.removeEventListener('scroll', handleScroll);
    window.removeEventListener('resize', resizeHandler);
    
    // Clean up THREE.js resources
    if (animationFrameId) cancelAnimationFrame(animationFrameId);
    if (renderer) renderer.dispose();
    if (backgroundCanvas && backgroundCanvas.parentNode) {
      backgroundCanvas.parentNode.removeChild(backgroundCanvas);
    }
  });
});
</script>