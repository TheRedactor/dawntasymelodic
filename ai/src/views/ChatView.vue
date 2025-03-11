<template>
  <div 
    class="chat-container"
    ref="chatContainer"
  >
    <!-- Cosmic particles background effect -->
    <div class="cosmic-particles-container">
      <div v-for="n in 50" :key="`particle-${n}`" 
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

    <!-- Cosmic Portal Transition Effect -->
    <div class="cosmic-portal-transition" ref="portalTransition">
      <div class="portal-rings">
        <div class="portal-ring ring1"></div>
        <div class="portal-ring ring2"></div>
        <div class="portal-ring ring3"></div>
      </div>
      <div class="portal-core"></div>
    </div>

    <!-- Cosmic header with Quantum Transitions -->
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
    
    <!-- Messages Container with Cosmic Flow -->
    <div 
      ref="messagesContainer"
      class="messages-container"
      @scroll="handleScroll"
    >
      <!-- Floating Runes -->
      <div class="floating-runes">
        <div class="rune rune-time" ref="runeTime"></div>
        <div class="rune rune-rift" ref="runeRift"></div>
      </div>
      
      <!-- Welcome Message with Quantum Entrance -->
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
      
      <!-- Message Bubbles with Quantum Animations -->
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
          <!-- User Avatar -->
          <div v-if="message.role === 'user'" class="avatar user-avatar">
            <span class="avatar-letter">{{ userInitial }}</span>
          </div>
          
          <!-- Assistant Avatar -->
          <div v-else class="avatar assistant-avatar">
            <div class="assistant-avatar-inner">
              <span class="cosmic-symbol">⟁</span>
              <div class="avatar-glow"></div>
            </div>
          </div>
          
          <!-- Message Content -->
          <div class="message-content">
            <div class="message-sender">
              {{ message.role === 'user' ? authStore.displayName || 'You' : 'DawntasyAI' }}
            </div>
            <div 
              class="message-text" 
              v-html="formatMessage(message.content)"
            ></div>
            <div class="message-time">{{ formatTime(message.timestamp) }}</div>
          </div>
        </div>
      </transition-group>
      
      <!-- Thinking Indicator with Quantum Pulse -->
      <div 
        v-if="isLoading"
        class="thinking-indicator"
        ref="thinkingIndicator"
      >
        <div class="cosmic-thinking">
          <div v-for="n in 3" :key="`thinking-dot-${n}`" class="dot" :class="`dot-${n}`"></div>
        </div>
        <div class="thinking-text">Consulting The Rift...</div>
      </div>
      
      <!-- Scroll indicator -->
      <div 
        v-if="showScrollIndicator" 
        class="scroll-indicator"
        @click="scrollToBottom"
        ref="scrollIndicator"
      >
        <i class="ri-arrow-down-line"></i>
      </div>
    </div>
    
    <!-- Input Area with Energy Field -->
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
      
      <div class="input-energy-field" ref="energyField" :class="{ 'active': userInput.length > 0 }"></div>
      
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
import { useOpenAI } from '../../server/api/openai';
import { format } from 'date-fns';
import hljs from 'highlight.js';
import gsap from 'gsap';
import * as THREE from 'three';
import anime from 'animejs';

// Initialize services
const authStore = useAuthStore();
const openai = useOpenAI();

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

// Sample suggestions
const suggestions = [
  "Tell me about Time Smith and The Rift",
  "What is Dawntasy about?",
  "How does the Plain and Pale Clock relate to the story?", 
  "Who is Ursa Minor in the Dawntasy universe?",
  "What themes does Dawntasy explore?"
];

// Three.js objects for animated background
let scene: THREE.Scene;
let camera: THREE.PerspectiveCamera;
let renderer: THREE.WebGLRenderer;
let backgroundCanvas: HTMLCanvasElement;
let animationFrameId: number;

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
        alert('This mode is available with premium plans only. Upgrade to access advanced AI modes!');
      });
      return;
    }
  }
  
  // Animate mode change
  animatePortalTransition(() => {
    mode.value = newMode;
  });
};

const formatMessage = (content: string) => {
  // Parse markdown
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
  
  // Add cosmic styling to Dawntasy references
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
  
  // Animate sending effect
  if (sendButton.value && !text) {
    anime({
      targets: sendButton.value,
      scale: [1, 0.8, 1],
      rotate: 15,
      duration: 400,
      easing: 'easeInOutQuad'
    });
  }
  
  // Add user message to chat
  messages.value.push({
    role: 'user',
    content: messageText,
    timestamp: Date.now()
  });
  
  // Clear input field
  userInput.value = '';
  
  // Reset textarea height
  if (inputField.value) {
    inputField.value.style.height = 'auto';
  }
  
  // Scroll to bottom
  await scrollToBottom();
  
  // Start loading state with animation
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
          
          // Update the assistant's response in real-time
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
    
    // Add error message
    messages.value.push({
      role: 'assistant',
      content: "I'm having trouble connecting to The Rift right now. Please try again in a moment.",
      timestamp: Date.now()
    });
  } finally {
    isLoading.value = false;
    await nextTick();
    
    // Animate latest message entrance
    const lastMessageIndex = messages.value.length - 1;
    const messageEl = document.querySelector(`.message-bubble:nth-child(${lastMessageIndex + 1})`);
    
    if (messageEl) {
      gsap.from(messageEl, {
        y: 20,
        opacity: 0,
        duration: 0.5,
        ease: "back.out(1.4)",
        onComplete: () => {
          scrollToBottom();
        }
      });
    }
  }
};

const animateChip = (e: MouseEvent) => {
  const target = e.currentTarget as HTMLElement;
  
  gsap.to(target, {
    scale: 1.05,
    boxShadow: "0 5px 15px rgba(139, 92, 246, 0.4)",
    duration: 0.2
  });
  
  // Add sparkle effect
  const sparkle = document.createElement('div');
  sparkle.className = 'sparkle';
  target.appendChild(sparkle);
  
  gsap.to(sparkle, {
    opacity: 0,
    scale: 3,
    duration: 0.8,
    onComplete: () => {
      sparkle.remove();
    }
  });
};

const resetChip = (e: MouseEvent) => {
  const target = e.currentTarget as HTMLElement;
  
  gsap.to(target, {
    scale: 1,
    boxShadow: "0 2px 5px rgba(139, 92, 246, 0.2)",
    duration: 0.2
  });
};

const animatePortalTransition = (callback: () => void) => {
  if (!portalTransition.value) return;
  
  const portal = portalTransition.value;
  portal.style.display = 'flex';
  
  // Animate portal opening
  gsap.timeline()
    .to(portal, {
      opacity: 1,
      duration: 0.3
    })
    .to(portal.querySelector('.portal-rings'), {
      scale: 1.2,
      opacity: 0.8,
      duration: 0.5
    })
    .to(portal.querySelector('.portal-core'), {
      scale: 20,
      opacity: 1,
      duration: 0.8,
      ease: "power3.in",
      onComplete: () => {
        // Execute the callback
        callback();
        
        // Reset and hide portal
        gsap.timeline()
          .set(portal.querySelector('.portal-core'), {
            scale: 1,
          })
          .set(portal.querySelector('.portal-rings'), {
            scale: 1,
            opacity: 0.5,
          })
          .to(portal, {
            opacity: 0,
            duration: 0.3,
            onComplete: () => {
              portal.style.display = 'none';
            }
          });
      }
    });
};

// Initialize cosmic background
const initCosmicBackground = () => {
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
  
  // Create stars
  const starsGeometry = new THREE.BufferGeometry();
  const starsMaterial = new THREE.PointsMaterial({
    color: 0xffffff,
    size: 0.1,
    transparent: true,
    opacity: 0.8,
    sizeAttenuation: true
  });
  
  const starsVertices = [];
  for (let i = 0; i < 1000; i++) {
    const x = (Math.random() - 0.5) * 20;
    const y = (Math.random() - 0.5) * 20;
    const z = (Math.random() - 0.5) * 20;
    starsVertices.push(x, y, z);
  }
  
  starsGeometry.setAttribute('position', new THREE.Float32BufferAttribute(starsVertices, 3));
  const stars = new THREE.Points(starsGeometry, starsMaterial);
  scene.add(stars);
  
  // Animation loop
  const animate = () => {
    animationFrameId = requestAnimationFrame(animate);
    
    // Rotate stars
    stars.rotation.x += 0.0003;
    stars.rotation.y += 0.0002;
    
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

// Initialize animations
const initAnimations = () => {
  // Animate the title text glow
  if (titleText.value) {
    gsap.to(titleText.value, {
      textShadow: "0 0 10px #8b5cf6, 0 0 20px #8b5cf6",
      duration: 2,
      repeat: -1,
      yoyo: true
    });
  }
  
  // Animate the mode badge
  if (modeBadge.value) {
    gsap.from(modeBadge.value, {
      y: -20,
      opacity: 0,
      duration: 0.8,
      ease: "elastic.out(1, 0.5)"
    });
  }
  
  // Animate mode buttons
  const modeButtons = document.querySelectorAll('.mode-button');
  gsap.from(modeButtons, {
    opacity: 0,
    y: 10,
    stagger: 0.1,
    duration: 0.5,
    ease: "power2.out"
  });
  
  // Animate welcome message
  if (welcomeMessage.value) {
    gsap.from(welcomeMessage.value, {
      y: 30,
      opacity: 0,
      duration: 0.8,
      ease: "power3.out"
    });
  }
  
  // Animate welcome text
  if (welcomeText.value) {
    gsap.from(welcomeText.value, {
      opacity: 0,
      duration: 0.8,
      delay: 0.3
    });
  }
  
  // Animate suggestion chips
  const chips = document.querySelectorAll('.suggestion-chip');
  gsap.from(chips, {
    scale: 0,
    opacity: 0,
    stagger: 0.1,
    duration: 0.5,
    delay: 0.5,
    ease: "back.out(1.7)"
  });
  
  // Animate floating runes
  if (runeTime.value) {
    gsap.to(runeTime.value, {
      y: "random(-20, 20)",
      x: "random(-10, 10)",
      rotation: "random(-15, 15)",
      duration: "random(5, 8)",
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut"
    });
  }
  
  if (runeRift.value) {
    gsap.to(runeRift.value, {
      y: "random(-15, 15)",
      x: "random(-10, 10)",
      rotation: "random(-10, 10)",
      duration: "random(4, 7)",
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut"
    });
  }
  
  // Animate input container entrance
  if (inputContainer.value) {
    gsap.from(inputContainer.value, {
      y: 20,
      opacity: 0,
      duration: 0.8,
      delay: 0.5,
      ease: "power2.out"
    });
  }
  
  // Setup energy field animation
  if (energyField.value) {
    gsap.set(energyField.value, { opacity: 0 });
  }
};

// Watch for input changes to animate energy field
watch(userInput, (newValue) => {
  if (!energyField.value) return;
  
  if (newValue.length > 0) {
    gsap.to(energyField.value, {
      opacity: 0.6,
      duration: 0.3
    });
    
    anime({
      targets: energyField.value,
      boxShadow: [
        '0 0 5px rgba(139, 92, 246, 0.5)',
        '0 0 20px rgba(139, 92, 246, 0.8)',
        '0 0 5px rgba(139, 92, 246, 0.5)'
      ],
      duration: 2000,
      easing: 'easeInOutSine',
      loop: true
    });
  } else {
    gsap.to(energyField.value, {
      opacity: 0,
      duration: 0.3
    });
  }
});

// Watch for new messages to animate them
watch(messages, async (newMessages, oldMessages) => {
  if (newMessages.length > oldMessages.length) {
    await nextTick();
    
    // Get the newest message element
    const latestIndex = newMessages.length - 1;
    const messageElement = document.querySelector(`.message-bubble:nth-child(${latestIndex + 1})`) as HTMLElement;
    
    if (messageElement) {
      gsap.from(messageElement, {
        opacity: 0,
        y: 20,
        duration: 0.5,
        ease: "back.out(1.4)"
      });
      
      // Add ripple effect for AI messages
      if (newMessages[latestIndex].role === 'assistant') {
        const ripple = document.createElement('div');
        ripple.className = 'message-ripple';
        messageElement.appendChild(ripple);
        
        gsap.to(ripple, {
          scale: 1.5,
          opacity: 0,
          duration: 1,
          onComplete: () => {
            ripple.remove();
          }
        });
      }
    }
  }
});

// Watch mode changes
watch(mode, () => {
  // Animate mode change
  if (modeBadge.value) {
    gsap.fromTo(modeBadge.value,
      { scale: 0.5, opacity: 0 },
      { scale: 1, opacity: 1, duration: 0.5, ease: "back.out(1.7)" }
    );
  }
});

// Lifecycle Hooks
onMounted(async () => {
  await nextTick();
  
  // Focus input field
  inputField.value?.focus();
  
  // Initialize animations
  initAnimations();
  
  // Initialize cosmic background
  initCosmicBackground();
  
  // Add scroll event listener
  messagesContainer.value?.addEventListener('scroll', handleScroll);
  
  // Initial message animation if there are any
  if (messages.value.length > 0) {
    const messageElements = document.querySelectorAll('.message-bubble');
    gsap.from(messageElements, {
      opacity: 0,
      y: 20,
      stagger: 0.1,
      duration: 0.5,
      ease: "power2.out"
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
</script>