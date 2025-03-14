<template>
  <div 
    class="chat-container"
    ref="chatContainer"
  >
    <!-- Cosmic particles background effect -->
    <div class="cosmic-particles-container">
      <div v-for="n in 100" :key="`particle-${n}`" 
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

    <!-- ENHANCED Cosmic Portal Transition Effect -->
    <div class="cosmic-portal-transition" ref="portalTransition">
      <div class="portal-rings">
        <div class="portal-ring ring1"></div>
        <div class="portal-ring ring2"></div>
        <div class="portal-ring ring3"></div>
      </div>
      <div class="portal-core"></div>
      <div class="portal-rays">
        <div v-for="n in 12" :key="`ray-${n}`" 
             class="portal-ray"
             :style="{
               '--rotation': `${n * 30}deg`,
               '--delay': `${n * 0.1}s`
             }"
        ></div>
      </div>
    </div>

    <!-- LEGENDARY Cosmic header with Quantum Transitions -->
    <div class="chat-header" ref="chatHeader">
      <h1 class="chat-title">
        <span class="title-text" ref="titleText">DawntasyAI</span>
        <span 
          class="badge" 
          :class="mode"
          ref="modeBadge"
        >
          {{ modeName }}
        </span>
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
    
    <!-- ENHANCED Messages Container with Cosmic Flow -->
    <div 
      ref="messagesContainer"
      class="messages-container"
      @scroll="handleScroll"
    >
      <!-- LEGENDARY Floating Runes -->
      <div class="floating-runes">
        <div class="rune rune-time" ref="runeTime"></div>
        <div class="rune rune-rift" ref="runeRift"></div>
        <div class="rune rune-cosmic" ref="runeCosmic"></div>
      </div>
      
      <!-- MAGNIFICENT Welcome Message with Quantum Entrance -->
      <div 
        v-if="messages.length === 0" 
        class="welcome-message"
        ref="welcomeMessage"
      >
        <div class="welcome-title">
          <span class="welcome-icon">✦</span>
          Welcome to DawntasyAI
          <span class="welcome-icon">✦</span>
        </div>
        <p class="welcome-text" ref="welcomeText">
          Your gateway to the Dawntasy universe. Ask me anything about "Time's True Name",
          or just chat about whatever's on your mind!
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
      
      <!-- COSMIC Message Bubbles with Quantum Animations -->
      <transition-group 
        name="message-transition"
        tag="div"
        class="message-list"
      >
        <div 
          v-for="(message, index) in messages"
          :key="index"
          class="message-bubble"
          :class="{ 'user': message.role === 'user', 'assistant': message.role === 'assistant' }"
          :ref="`message-${index}`"
        >
          <!-- LEGENDARY User Avatar -->
          <div v-if="message.role === 'user'" class="avatar user-avatar">
            <span class="avatar-letter">{{ userInitial }}</span>
            <div class="avatar-glow"></div>
          </div>
          
          <!-- ENHANCED Assistant Avatar -->
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
          
          <!-- ENHANCED Message Content -->
          <div class="message-content">
            <div class="message-sender">
              {{ message.role === 'user' ? authStore.displayName || 'You' : 'DawntasyAI' }}
              <div class="sender-underline"></div>
            </div>
            <div 
              class="message-text" 
              v-html="formatMessage(message.content)"
            ></div>
            <div class="message-time">{{ formatTime(message.timestamp) }}</div>
          </div>
        </div>
      </transition-group>
      
      <!-- ENHANCED Thinking Indicator with Quantum Pulse -->
      <div 
        v-if="isLoading"
        class="thinking-indicator"
        ref="thinkingIndicator"
      >
        <div class="cosmic-thinking">
          <div v-for="n in 3" :key="`thinking-dot-${n}`" class="dot" :class="`dot-${n}`"></div>
        </div>
        <div class="thinking-text">Consulting The Rift...</div>
        <div class="thinking-runes">
          <div v-for="n in 5" :key="`thinking-rune-${n}`" 
               class="thinking-rune"
               :style="{
                 '--rotation': `${n * 72}deg`,
                 '--delay': `${n * 0.2}s`
               }"
          ></div>
        </div>
      </div>
      
      <!-- LEGENDARY Scroll indicator -->
      <div 
        v-if="showScrollIndicator" 
        class="scroll-indicator"
        @click="scrollToBottom"
        ref="scrollIndicator"
      >
        <i class="ri-arrow-down-line"></i>
        <div class="scroll-pulse"></div>
      </div>
    </div>
    
    <!-- ENHANCED Input Area with Energy Field -->
    <div 
      class="input-container"
      ref="inputContainer"
    >
      <textarea 
        ref="inputField"
        v-model="userInput"
        @keydown.enter.prevent="onEnterPress"
        @input="resizeTextarea"
        placeholder="Enter your message..."
        class="message-input"
        :disabled="isLoading"
      ></textarea>
      
      <div class="input-energy-field" ref="energyField" :class="{ 'active': userInput.length > 0 }">
        <div class="energy-particles">
          <div v-for="n in 20" :key="`energy-particle-${n}`" 
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
import { useOpenAI } from '@/server/api/openai';
import { useChatStore } from '@/store/chat';
import { format } from 'date-fns';
import hljs from 'highlight.js';
import gsap from 'gsap';
import * as THREE from 'three';
import anime from 'animejs';
import { useRoute } from 'vue-router';

// Initialize services
const authStore = useAuthStore();
const openai = useOpenAI();
const chatStore = useChatStore();
const route = useRoute();

// Refs
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

// State
const userInput = ref('');
const isLoading = ref(false);
const messages = ref<Array<{
  role: 'user' | 'assistant',
  content: string,
  timestamp: number
}>>([]);
const showScrollIndicator = ref(false);

// AI Mode settings
const mode = ref<'default' | 'archmage' | 'creative'>('default');
const modes = {
  default: 'Standard',
  archmage: 'ARCHMAGE',
  creative: 'Creative'
};
const modeName = computed(() => modes[mode.value]);

// Sample suggestions - HYPER LEGENDARY VERSION 🔥
const suggestions = [
  "Tell me about Time Smith and The Rift ✨",
  "What cosmic secrets does Dawntasy hold? 🌌",
  "How does the Plain and Pale Clock influence reality? ⏰", 
  "Who is Ursa Minor in the Dawntasy universe? 🐻",
  "Explore the quantum themes of Dawntasy with me! 🔮"
];

// Three.js objects for LEGENDARY animated background
let scene: THREE.Scene;
let camera: THREE.PerspectiveCamera;
let renderer: THREE.WebGLRenderer;
let backgroundCanvas: HTMLCanvasElement;
let animationFrameId: number;
let stars: THREE.Points;
let nebula: THREE.Mesh;

// Computed values
const userInitial = computed(() => {
  return authStore.displayName?.charAt(0).toUpperCase() || 'Y';
});

const canSend = computed(() => userInput.value.trim().length > 0);

// Methods
const setMode = (newMode: 'default' | 'archmage' | 'creative') => {
  // Check if user has access to premium modes
  if (newMode !== 'default') {
    const plan = authStore.userProfile?.plan;
    if (plan === 'free') {
      // Show upgrade modal or message
      animatePortalTransition(() => {
        alert('✨ UPGRADE REQUIRED! ✨ This LEGENDARY mode is available with premium plans only. Level up your journey to access advanced AI powers!');
      });
      return;
    }
  }
  
  // Animate mode change with COSMIC EFFECTS
  animatePortalTransition(() => {
    mode.value = newMode;
  });
};

const formatMessage = (content: string) => {
  // Parse markdown with ENHANCED formatting
  let html = marked(content, {
    gfm: true,
    breaks: true,
    hooks: {
      preprocess(markdown) { return markdown; },
      postprocess(html) { return html; },
      options: {},
      processAllTokens(tokens) { return tokens; },
      provideLexer() { return null; },
      provideParser() { return null; }
    },
    walkTokens: (token: any) => {
      if (token.type === 'code') {
        const code = token.text;
        const lang = token.lang;
        if (lang && hljs.getLanguage(lang)) {
          token.text = hljs.highlight(code, { language: lang }).value;
        } else {
          token.text = hljs.highlightAuto(code).value;
        }
      }
    }
  });
  
  // Add LEGENDARY cosmic styling to Dawntasy references
  const keywords = [
    'Time Smith', 'The Rift', 'Ursa Minor', 'Yaee', 
    'Dawntasy', "Time's True Name", 'Bear Village',
    'Plain and Pale Clock', 'Circular Dawn'
  ];
  
  keywords.forEach(keyword => {
    const regex = new RegExp(`\\b${keyword}\\b`, 'g');
    html = html.replace(regex, `<span class="cosmic-keyword">${keyword}</span>`);
  });
  
  return html;
};

const formatTime = (timestamp: number) => {
  return format(timestamp, 'h:mm a');
};

const onEnterPress = (e: KeyboardEvent) => {
  // Ctrl+Enter for new line, Enter to send
  if (!e.ctrlKey && !e.shiftKey) {
    sendMessage();
  }
};

const resizeTextarea = () => {
  if (inputField.value) {
    inputField.value.style.height = 'auto';
    inputField.value.style.height = `${Math.min(inputField.value.scrollHeight, 150)}px`;
  }
};

const scrollToBottom = async (animate = true) => {
  await nextTick(() => {});
  if (messagesContainer.value) {
    const container = messagesContainer.value;
    
    if (animate) {
      gsap.to(container, {
        scrollTop: container.scrollHeight,
        duration: 0.5,
        ease: "power2.out"
      });
    } else {
      container.scrollTop = container.scrollHeight;
    }
    
    showScrollIndicator.value = false;
  }
};

const handleScroll = () => {
  if (!messagesContainer.value) return;
  
  const { scrollTop, scrollHeight, clientHeight } = messagesContainer.value;
  const isNearBottom = scrollHeight - scrollTop - clientHeight < 100;
  
  showScrollIndicator.value = !isNearBottom && messages.value.length > 0;
};

const sendMessage = async (text?: string) => {
  const messageText = text || userInput.value.trim();
  if (!messageText) return;
  
  // COSMIC LEGENDARY Animation effect when sending!
  if (sendButton.value && !text) {
    anime({
      targets: sendButton.value,
      scale: [1, 0.8, 1.2, 1],
      rotate: [0, -15, 15, 0],
      duration: 600,
      easing: 'easeInOutQuad'
    });
    
    // Add particle burst from send button
    createParticleBurst(sendButton.value);
  }
  
  // Add user message to chat
  messages.value.push({
    role: 'user',
    content: messageText,
    timestamp: Date.now()
  });
  
  // Save to Firebase via chat store
  try {
    if (chatStore.currentChat?.id) {
      // Update existing chat
      await chatStore.sendMessage(messageText);
    } else {
      // Create new chat
      const chatId = await chatStore.createChat({ initialPrompt: messageText });
      if (chatId) {
        await chatStore.fetchChat(chatId);
      }
    }
  } catch (err) {
    console.error('Error saving message:', err);
  }
  
  // Clear input field
  userInput.value = '';
  
  // Reset textarea height
  if (inputField.value) {
    inputField.value.style.height = 'auto';
  }
  
  // Scroll to bottom with COSMIC animation
  await scrollToBottom();
  
  // Start loading state with LEGENDARY animation
  isLoading.value = true;
  
  try {
    // Prepare chat history for API
    const chatHistory = messages.value.map(msg => ({
      role: msg.role,
      content: msg.content
    }));
    
    // Stream the response for realtime updates
    let assistantResponse = '';
    
    // Use streaming for realtime typing effect
    await openai.streamCompletion(
      messageText,
      chatHistory.slice(0, -1), // Exclude the message we just added
      {
        mode: mode.value,
        temperature: 0.7,
        maxTokens: 1500,
        onChunk: (chunk) => {
          assistantResponse += chunk;
          
          // Update the assistant's response in real-time with QUANTUM speed
          const lastMessage = messages.value[messages.value.length - 1];
          if (lastMessage && lastMessage.role === 'assistant') {
            lastMessage.content = assistantResponse;
          } else {
            messages.value.push({
              role: 'assistant',
              content: assistantResponse,
              timestamp: Date.now()
            });
          }
          
          // Keep scrolling to bottom as new content arrives
          const container = messagesContainer.value;
          if (container && (container.scrollTop + container.clientHeight >= container.scrollHeight - 200)) {
            scrollToBottom(false);
          }
        }
      }
    );
    
    // Record the chat interaction in user history
    await openai.recordChatInteraction(
      messages.value.map(msg => ({
        role: msg.role,
        content: msg.content
      }))
    );
  } catch (error) {
    console.error('Error sending message:', error);
    
    // Add error message with COSMIC styling
    messages.value.push({
      role: 'assistant',
      content: "⚠️ *The Rift appears to be unstable at the moment.* I'm having trouble connecting to the cosmic streams. Please try again when the quantum fluctuations stabilize.",
      timestamp: Date.now()
    });
  } finally {
    isLoading.value = false;
    await nextTick();
    
    // Animate latest message entrance with LEGENDARY effects
    const lastMessageIndex = messages.value.length - 1;
    const messageEl = document.querySelector(`.message-bubble:nth-child(${lastMessageIndex + 1})`);
    
    if (messageEl) {
      gsap.from(messageEl, {
        y: 30,
        opacity: 0,
        scale: 0.95,
        duration: 0.7,
        ease: "back.out(1.7)",
        onComplete: () => {
          scrollToBottom();
          
          // Add cosmic glow effect after message appears
          gsap.to(messageEl.querySelector('.message-content'), {
            boxShadow: '0 0 20px rgba(139, 92, 246, 0.3)',
            duration: 1,
            repeat: 1,
            yoyo: true
          });
        }
      });
    }
  }
};

const animateChip = (e: MouseEvent) => {
  const target = e.currentTarget as HTMLElement;
  
  gsap.to(target, {
    scale: 1.1,
    boxShadow: "0 8px 20px rgba(139, 92, 246, 0.6)",
    y: -5,
    duration: 0.3,
    ease: "back.out(1.7)"
  });
  
  // Add LEGENDARY sparkle effect
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
      onComplete: () => {
        sparkle.remove();
      }
    });
  }
};

const resetChip = (e: MouseEvent) => {
  const target = e.currentTarget as HTMLElement;
  
  gsap.to(target, {
    scale: 1,
    boxShadow: "0 4px 8px rgba(139, 92, 246, 0.3)",
    y: 0,
    duration: 0.3,
    ease: "power2.out"
  });
};

const animatePortalTransition = (callback: () => void) => {
  if (!portalTransition.value) return;
  
  const portal = portalTransition.value;
  portal.style.display = 'flex';
  
  // LEGENDARY portal opening animation
  gsap.timeline()
    .to(portal, {
      opacity: 1,
      duration: 0.3
    })
    .to(portal.querySelectorAll('.portal-ring'), {
      scale: 1.5,
      opacity: 0.9,
      duration: 0.5,
      stagger: 0.1
    })
    .to(portal.querySelector('.portal-core'), {
      scale: 30,
      opacity: 1,
      duration: 1,
      ease: "power3.in",
      onComplete: () => {
        // Execute the callback
        callback();
        
        // Reset and hide portal with COSMIC animation
        gsap.timeline()
          .set(portal.querySelector('.portal-core'), {
            scale: 1,
          })
          .set(portal.querySelectorAll('.portal-ring'), {
            scale: 1,
            opacity: 0.5,
          })
          .to(portal, {
            opacity: 0,
            duration: 0.5,
            onComplete: () => {
              portal.style.display = 'none';
            }
          });
      }
    });
    
  // Animate portal rays during transition
  gsap.to(portal.querySelectorAll('.portal-ray'), {
    scaleY: 1.5,
    opacity: 0.8,
    duration: 0.8,
    stagger: 0.05,
    repeat: 1,
    yoyo: true
  });
};

// Create particle burst effect - SUPER LEGENDARY ADDITION! 🔥
const createParticleBurst = (element: HTMLElement) => {
  const rect = element.getBoundingClientRect();
  const centerX = rect.left + rect.width / 2;
  const centerY = rect.top + rect.height / 2;
  
  for (let i = 0; i < 20; i++) {
    const particle = document.createElement('div');
    particle.className = 'burst-particle';
    document.body.appendChild(particle);
    
    // Random particle properties
    const angle = Math.random() * Math.PI * 2;
    const distance = Math.random() * 100 + 50;
    const size = Math.random() * 6 + 2;
    const duration = Math.random() * 1 + 0.5;
    const hue = Math.random() * 60 + 240; // Blue to purple range
    
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
      onComplete: () => {
        particle.remove();
      }
    });
  }
};

// Initialize EPIC cosmic background
const initCosmicBackground = () => {
  backgroundCanvas = document.createElement('canvas');
  backgroundCanvas.className = 'cosmic-background-canvas';
  chatContainer.value?.appendChild(backgroundCanvas);
  
  // Set up THREE.js scene with LEGENDARY settings
  scene = new THREE.Scene();
  camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
  renderer = new THREE.WebGLRenderer({ 
    canvas: backgroundCanvas,
    alpha: true,
    antialias: true 
  });
  
  renderer.setSize(window.innerWidth, window.innerHeight);
  camera.position.z = 5;
  
  // Create COSMIC stars
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
    const x = (Math.random() - 0.5) * 20;
    const y = (Math.random() - 0.5) * 20;
    const z = (Math.random() - 0.5) * 20;
    starsVertices.push(x, y, z);
  }
  
  starsGeometry.setAttribute('position', new THREE.Float32BufferAttribute(starsVertices, 3));
  stars = new THREE.Points(starsGeometry, starsMaterial);
  scene.add(stars);
  
  // Create LEGENDARY nebula
  const nebulaGeometry = new THREE.SphereGeometry(10, 32, 32);
  const nebulaMaterial = new THREE.MeshBasicMaterial({
    color: 0x8B5CF6,
    transparent: true,
    opacity: 0.05
  });
  nebula = new THREE.Mesh(nebulaGeometry, nebulaMaterial);
  scene.add(nebula);
  
  // Animation loop for COSMIC background
  const animate = () => {
    animationFrameId = requestAnimationFrame(animate);
    
    // Rotate stars with LEGENDARY movement
    stars.rotation.x += 0.0003;
    stars.rotation.y += 0.0002;
    
    // Pulse nebula for COSMIC effect
    const time = Date.now() * 0.001;
    nebula.scale.set(
      1 + Math.sin(time * 0.3) * 0.1,
      1 + Math.sin(time * 0.5) * 0.1,
      1 + Math.sin(time * 0.4) * 0.1
    );
    
    renderer.render(scene, camera);
  };
  
  animate();
  
  // Handle window resize
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
};

// Initialize LEGENDARY animations
const initAnimations = () => {
  // Animate the title text with COSMIC glow
  if (titleText.value) {
    gsap.to(titleText.value, {
      textShadow: "0 0 15px #8b5cf6, 0 0 30px #8b5cf6",
      duration: 2,
      repeat: -1,
      yoyo: true
    });
  }
  
  // Animate the mode badge with QUANTUM effects
  if (modeBadge.value) {
    gsap.from(modeBadge.value, {
      y: -30,
      opacity: 0,
      rotation: -5,
      duration: 0.8,
      ease: "elastic.out(1, 0.5)"
    });
  }
  
  // Animate mode buttons with LEGENDARY effects
  const modeButtons = document.querySelectorAll('.mode-button');
  gsap.from(modeButtons, {
    opacity: 0,
    y: 15,
    stagger: 0.15,
    duration: 0.6,
    ease: "back.out(1.7)"
  });
  
  // Animate welcome message with COSMIC entrance
  if (welcomeMessage.value) {
    gsap.from(welcomeMessage.value, {
      y: 50,
      opacity: 0,
      scale: 0.95,
      duration: 1,
      ease: "power3.out"
    });
  }
  
  // Animate welcome text with QUANTUM fade
  if (welcomeText.value) {
    gsap.from(welcomeText.value, {
      opacity: 0,
      duration: 1,
      delay: 0.5
    });
  }
  
  // Animate suggestion chips with LEGENDARY popping effect
  const chips = document.querySelectorAll('.suggestion-chip');
  gsap.from(chips, {
    scale: 0,
    opacity: 0,
    stagger: 0.1,
    duration: 0.7,
    delay: 0.7,
    ease: "back.out(2)"
  });
  
  // Animate floating runes with COSMIC movement
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
  
  // Animate input container entrance with QUANTUM slide
  if (inputContainer.value) {
    gsap.from(inputContainer.value, {
      y: 30,
      opacity: 0,
      duration: 0.8,
      delay: 0.7,
      ease: "power2.out"
    });
  }
  
  // Setup energy field animation with COSMIC glow
  if (energyField.value) {
    gsap.set(energyField.value, { opacity: 0 });
  }
};

// Watch for input changes to animate energy field with LEGENDARY effects
watch(userInput, (newValue) => {
  if (!energyField.value) return;
  
  if (newValue.length > 0) {
    gsap.to(energyField.value, {
      opacity: 0.8,
      duration: 0.5
    });
    
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
    
    // Animate energy particles for COSMIC effect
    gsap.to('.energy-particle', {
      opacity: 0.8,
      duration: 0.5,
      stagger: 0.02
    });
  } else {
    gsap.to(energyField.value, {
      opacity: 0,
      duration: 0.3
    });
    
    // Hide energy particles
    gsap.to('.energy-particle', {
      opacity: 0,
      duration: 0.3
    });
  }
});

// Watch for new messages to animate them with COSMIC effects
watch(messages, async (newMessages, oldMessages) => {
  if (newMessages.length > oldMessages.length) {
    await nextTick();
    
    // Get the newest message element
    const latestIndex = newMessages.length - 1;
    const messageElement = document.querySelector(`.message-bubble:nth-child(${latestIndex + 1})`) as HTMLElement;
    
    if (messageElement) {
      // LEGENDARY entrance animation
      gsap.from(messageElement, {
        opacity: 0,
        y: 30,
        scale: 0.95,
        duration: 0.7,
        ease: "back.out(1.7)"
      });
      
      // Add COSMIC ripple effect for AI messages
      if (newMessages[latestIndex].role === 'assistant') {
        for (let i = 0; i < 2; i++) {
          const ripple = document.createElement('div');
          ripple.className = 'message-ripple';
          messageElement.appendChild(ripple);
          
          gsap.to(ripple, {
            scale: 2,
            opacity: 0,
            duration: 1.5,
            delay: i * 0.3,
            ease: "power2.out",
            onComplete: () => {
              ripple.remove();
            }
          });
        }
      }
    }
  }
});

// Watch mode changes for LEGENDARY transitions
watch(mode, () => {
  // Animate mode change with COSMIC effects
  if (modeBadge.value) {
    gsap.fromTo(modeBadge.value,
      { scale: 0, rotation: -10, opacity: 0 },
      { scale: 1, rotation: 0, opacity: 1, duration: 0.6, ease: "back.out(2)" }
    );
    
    // Add particle burst around badge
    createParticleBurst(modeBadge.value);
  }
});

// Load chat data if a chat ID is provided
const loadChatData = async () => {
  const chatId = route.params.id as string;
  if (chatId) {
    isLoading.value = true;
    try {
      await chatStore.fetchChat(chatId);
      
      if (chatStore.currentChat?.messages) {
        // Convert the messages to our format
        messages.value = chatStore.currentChat.messages.map(msg => ({
          role: msg.role as 'user' | 'assistant',
          content: msg.content,
          timestamp: msg.timestamp instanceof Date ? msg.timestamp.getTime() : Date.now()
        }));
      }
      
      // Scroll to the bottom once messages are loaded
      await nextTick();
      scrollToBottom(false);
    } catch (err) {
      console.error('Error loading chat:', err);
    } finally {
      isLoading.value = false;
    }
  }
};

// Lifecycle Hooks
onMounted(async () => {
  await nextTick();
  
  // Focus input field for immediate interaction
  inputField.value?.focus();
  
  // Initialize COSMIC animations
  initAnimations();
  
  // Initialize LEGENDARY cosmic background
  initCosmicBackground();
  
  // Add scroll event listener for navigation
  messagesContainer.value?.addEventListener('scroll', handleScroll);
  
  // Load chat data if we have a chat ID
  await loadChatData();
  
  // Initial message animation for LEGENDARY entrance
  if (messages.value.length > 0) {
    const messageElements = document.querySelectorAll('.message-bubble');
    gsap.from(messageElements, {
      opacity: 0,
      y: 30,
      scale: 0.95,
      stagger: 0.1,
      duration: 0.7,
      ease: "back.out(1.7)"
    });
  }
});

onUnmounted(() => {
  // Clean up scroll listener
  messagesContainer.value?.removeEventListener('scroll', handleScroll);
  
  // Clean up animation frame
  if (animationFrameId) {
    cancelAnimationFrame(animationFrameId);
  }
  
  // Clean up THREE.js resources
  if (renderer) {
    renderer.dispose();
  }
  
  // Remove background canvas
  if (backgroundCanvas && backgroundCanvas.parentNode) {
    backgroundCanvas.parentNode.removeChild(backgroundCanvas);
  }
});