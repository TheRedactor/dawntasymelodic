<template>
  <div class="chat-container" ref="chatContainer">
    <div class="cosmic-particles-container">
      <div v-for="n in 100" :key="`particle-${n}`" class="cosmic-particle" :style="{
        '--size': `${Math.random() * 4 + 1}px`,
        '--x': `${Math.random() * 100}%`,
        '--y': `${Math.random() * 100}%`,
        '--duration': `${Math.random() * 50 + 30}s`,
        '--delay': `${Math.random() * -30}s`,
        '--opacity': Math.random() * 0.5 + 0.2
      }"></div>
    </div>
    <div class="cosmic-portal-transition" ref="portalTransition">
      <div class="portal-rings">
        <div class="portal-ring ring1"></div>
        <div class="portal-ring ring2"></div>
        <div class="portal-ring ring3"></div>
      </div>
      <div class="portal-core"></div>
      <div class="portal-rays">
        <div v-for="n in 12" :key="`ray-${n}`" class="portal-ray" :style="{
          '--rotation': `${n * 30}deg`,
          '--delay': `${n * 0.1}s`
        }"></div>
      </div>
    </div>
    <div class="chat-header" ref="chatHeader">
      <h1 class="chat-title">
        <span class="title-text" ref="titleText">DawntasyAI</span>
        <span class="badge" :class="mode" ref="modeBadge">{{ modeName }}</span>
      </h1>
      <div class="mode-selector" ref="modeSelector">
        <button v-for="(label, modeKey) in modes" :key="modeKey" class="mode-button" :class="{ active: mode === modeKey }" @click="setMode(modeKey)" :ref="`modeBtn-${modeKey}`">{{ label }}</button>
      </div>
    </div>
    <div ref="messagesContainer" class="messages-container" @scroll="handleScroll">
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
          <button v-for="suggestion in suggestions" :key="suggestion" class="suggestion-chip" @click="sendMessage(suggestion)" @mouseenter="animateChip" @mouseleave="resetChip">{{ suggestion }}</button>
        </div>
      </div>
      <transition-group name="message-transition" tag="div" class="message-list">
        <div v-for="(message, index) in messages" :key="index" class="message-bubble" :class="{ 'user': message.role === 'user', 'assistant': message.role === 'assistant' }" :ref="`message-${index}`">
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
              {{ message.role === 'user' ? authStore.displayName || 'You' : 'DawntasyAI' }}
              <div class="sender-underline"></div>
            </div>
            <div class="message-text" v-html="formatMessage(message.content)"></div>
            <div class="message-time">{{ formatTime(message.timestamp) }}</div>
          </div>
        </div>
      </transition-group>
      <div v-if="isLoading" class="thinking-indicator" ref="thinkingIndicator">
        <div class="cosmic-thinking">
          <div v-for="n in 3" :key="`thinking-dot-${n}`" class="dot" :class="`dot-${n}`"></div>
        </div>
        <div class="thinking-text">Consulting The Rift...</div>
        <div class="thinking-runes">
          <div v-for="n in 5" :key="`thinking-rune-${n}`" class="thinking-rune" :style="{
            '--rotation': `${n * 72}deg`,
            '--delay': `${n * 0.2}s`
          }"></div>
        </div>
      </div>
      <div v-if="showScrollIndicator" class="scroll-indicator" @click="scrollToBottom" ref="scrollIndicator">
        <i class="ri-arrow-down-line"></i>
        <div class="scroll-pulse"></div>
      </div>
    </div>
    <div class="input-container" ref="inputContainer">
      <textarea ref="inputField" v-model="userInput" @keydown.enter.prevent="onEnterPress" @input="resizeTextarea" placeholder="Enter your message..." class="message-input" :disabled="isLoading"></textarea>
      <div class="input-energy-field" ref="energyField" :class="{ 'active': userInput.length > 0 }">
        <div class="energy-particles">
          <div v-for="n in 20" :key="`energy-particle-${n}`" class="energy-particle" :style="{
            '--size': `${Math.random() * 3 + 1}px`,
            '--x': `${Math.random() * 100}%`,
            '--y': `${Math.random() * 100}%`,
            '--duration': `${Math.random() * 3 + 2}s`,
            '--delay': `${Math.random() * -2}s`
          }"></div>
        </div>
      </div>
      <button class="send-button" @click="sendMessage()" :disabled="!canSend || isLoading" ref="sendButton">
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
const authStore = useAuthStore();
const openai = useOpenAI();
const chatStore = useChatStore();
const route = useRoute();
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
const userInput = ref('');
const isLoading = ref(false);
const messages = ref<Array<{ role: 'user' | 'assistant'; content: string; timestamp: number }>>([]);
const showScrollIndicator = ref(false);
const mode = ref<'default' | 'archmage' | 'creative'>('default');
const modes = { default: 'Standard', archmage: 'ARCHMAGE', creative: 'Creative' };
const modeName = computed(() => modes[mode.value]);
const suggestions = ["Tell me about Time Smith and The Rift ✨", "What cosmic secrets does Dawntasy hold? 🌌", "How does the Plain and Pale Clock influence reality? ⏰", "Who is Ursa Minor in the Dawntasy universe? 🐻", "Explore the quantum themes of Dawntasy with me! 🔮"];
const userInitial = computed(() => authStore.displayName?.charAt(0).toUpperCase() || 'Y');
const canSend = computed(() => userInput.value.trim().length > 0);
const messagesCount = computed(() => messages.value?.length || 0);
let scene: THREE.Scene;
let camera: THREE.PerspectiveCamera;
let renderer: THREE.WebGLRenderer;
let backgroundCanvas: HTMLCanvasElement;
let animationFrameId: number;
let stars: THREE.Points;
let nebula: THREE.Mesh;
const setMode = (newMode: 'default' | 'archmage' | 'creative') => {
  if (newMode !== 'default') {
    const plan = authStore.userProfile?.plan;
    if (plan === 'free') {
      animatePortalTransition(() => { alert('✨ UPGRADE REQUIRED! ✨ This LEGENDARY mode is available with premium plans only. Level up your journey to access advanced AI powers!'); });
      return;
    }
  }
  animatePortalTransition(() => { mode.value = newMode; });
};
const formatMessage = (content: string) => {
  let html = marked(content, { gfm: true, breaks: true, hooks: { preprocess(markdown) { return markdown; }, postprocess(html) { return html; }, options: {}, processAllTokens(tokens) { return tokens; }, provideLexer() { return null; }, provideParser() { return null; } }, walkTokens: (token: any) => { if (token.type === 'code') { const code = token.text; const lang = token.lang; if (lang && hljs.getLanguage(lang)) { token.text = hljs.highlight(code, { language: lang }).value; } else { token.text = hljs.highlightAuto(code).value; } } } });
  const keywords = ['Time Smith', 'The Rift', 'Ursa Minor', 'Yaee', 'Dawntasy', "Time's True Name", 'Bear Village', 'Plain and Pale Clock', 'Circular Dawn'];
  keywords.forEach(keyword => { const regex = new RegExp(`\\b${keyword}\\b`, 'g'); html = html.replace(regex, `<span class="cosmic-keyword">${keyword}</span>`); });
  return html;
};
const formatTime = (timestamp: number) => { return format(timestamp, 'h:mm a'); };
const onEnterPress = (e: KeyboardEvent) => { if (!e.ctrlKey && !e.shiftKey) { sendMessage(); } };
const resizeTextarea = () => { if (inputField.value) { inputField.value.style.height = 'auto'; inputField.value.style.height = `${Math.min(inputField.value.scrollHeight, 150)}px`; } };
const scrollToBottom = async (animate = true) => { await nextTick(); if (messagesContainer.value) { const container = messagesContainer.value; if (animate) { gsap.to(container, { scrollTop: container.scrollHeight, duration: 0.5, ease: "power2.out" }); } else { container.scrollTop = container.scrollHeight; } showScrollIndicator.value = false; } };
const handleScroll = () => { if (!messagesContainer.value) return; const { scrollTop, scrollHeight, clientHeight } = messagesContainer.value; const isNearBottom = scrollHeight - scrollTop - clientHeight < 100; showScrollIndicator.value = !isNearBottom && messages.value.length > 0; };
const sendMessage = async (text?: string) => {
  const messageText = text || userInput.value.trim();
  if (!messageText) return;
  if (sendButton.value && !text) {
    anime({ targets: sendButton.value, scale: [1, 0.8, 1.2, 1], rotate: [0, -15, 15, 0], duration: 600, easing: 'easeInOutQuad' });
    createParticleBurst(sendButton.value);
  }
  messages.value.push({ role: 'user', content: messageText, timestamp: Date.now() });
  try {
    if (chatStore.currentChat?.id) { await chatStore.sendMessage(messageText); } else { const chatId = await chatStore.createChat({ initialPrompt: messageText }); if (chatId) { await chatStore.fetchChat(chatId); } }
  } catch (err) { console.error('Error saving message:', err); }
  userInput.value = '';
  if (inputField.value) { inputField.value.style.height = 'auto'; }
  await scrollToBottom();
  isLoading.value = true;
  try {
    const chatHistory = messages.value.map(msg => ({ role: msg.role, content: msg.content }));
    let assistantResponse = '';
    await openai.streamCompletion(messageText, chatHistory.slice(0, -1), { mode: mode.value, temperature: 0.7, maxTokens: 1500, onChunk: (chunk) => {
      assistantResponse += chunk;
      const lastMessage = messages.value[messages.value.length - 1];
      if (lastMessage && lastMessage.role === 'assistant') { lastMessage.content = assistantResponse; } else { messages.value.push({ role: 'assistant', content: assistantResponse, timestamp: Date.now() }); }
      const container = messagesContainer.value;
      if (container && (container.scrollTop + container.clientHeight >= container.scrollHeight - 200)) { scrollToBottom(false); }
    } });
    await openai.recordChatInteraction(messages.value.map(msg => ({ role: msg.role, content: msg.content })));
  } catch (error) {
    console.error('Error sending message:', error);
    messages.value.push({ role: 'assistant', content: "⚠️ *The Rift appears to be unstable at the moment.* I'm having trouble connecting to the cosmic streams. Please try again when the quantum fluctuations stabilize.", timestamp: Date.now() });
  } finally {
    isLoading.value = false;
    await nextTick();
    const lastMessageIndex = messages.value.length - 1;
    const messageEl = document.querySelector(`.message-bubble:nth-child(${lastMessageIndex + 1})`) as HTMLElement;
    if (messageEl) {
      gsap.from(messageEl, { y: 30, opacity: 0, scale: 0.95, duration: 0.7, ease: "back.out(1.7)", onComplete: () => {
        scrollToBottom();
        gsap.to(messageEl.querySelector('.message-content'), { boxShadow: '0 0 20px rgba(139, 92, 246, 0.3)', duration: 1, repeat: 1, yoyo: true });
      } });
    }
  }
};
const animateChip = (e: MouseEvent) => {
  const target = e.currentTarget as HTMLElement;
  gsap.to(target, { scale: 1.1, boxShadow: "0 8px 20px rgba(139, 92, 246, 0.6)", y: -5, duration: 0.3, ease: "back.out(1.7)" });
  for (let i = 0; i < 3; i++) {
    const sparkle = document.createElement('div');
    sparkle.className = 'sparkle';
    sparkle.style.left = `${Math.random() * 100}%`;
    sparkle.style.top = `${Math.random() * 100}%`;
    target.appendChild(sparkle);
    gsap.to(sparkle, { opacity: 0, scale: 3, duration: 0.8, delay: i * 0.1, ease: "power2.out", onComplete: () => { sparkle.remove(); } });
  }
};
const resetChip = (e: MouseEvent) => {
  const target = e.currentTarget as HTMLElement;
  gsap.to(target, { scale: 1, boxShadow: "0 4px 8px rgba(139, 92, 246, 0.3)", y: 0, duration: 0.3, ease: "power2.out" });
};
const animatePortalTransition = (callback: () => void) => {
  if (!portalTransition.value) return;
  const portal = portalTransition.value;
  portal.style.display = 'flex';
  gsap.timeline()
    .to(portal, { opacity: 1, duration: 0.3 })
    .to(portal.querySelectorAll('.portal-ring'), { scale: 1.5, opacity: 0.9, duration: 0.5, stagger: 0.1 })
    .to(portal.querySelector('.portal-core'), { scale: 30, opacity: 1, duration: 1, ease: "power3.in", onComplete: () => {
      callback();
      gsap.timeline()
        .set(portal.querySelector('.portal-core'), { scale: 1 })
        .set(portal.querySelectorAll('.portal-ring'), { scale: 1, opacity: 0.5 })
        .to(portal, { opacity: 0, duration: 0.5, onComplete: () => { portal.style.display = 'none'; } });
    } });
  gsap.to(portal.querySelectorAll('.portal-ray'), { scaleY: 1.5, opacity: 0.8, duration: 0.8, stagger: 0.05, repeat: 1, yoyo: true });
};
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
    gsap.set(particle, { width: size, height: size, x: centerX, y: centerY, backgroundColor: `hsl(${hue}, 80%, 60%)`, position: 'fixed', borderRadius: '50%', zIndex: 9999, boxShadow: `0 0 ${size}px hsl(${hue}, 80%, 60%)` });
    gsap.to(particle, { x: centerX + Math.cos(angle) * distance, y: centerY + Math.sin(angle) * distance, opacity: 0, duration: duration, ease: 'power2.out', onComplete: () => { particle.remove(); } });
  }
};
const initCosmicBackground = () => {
  backgroundCanvas = document.createElement('canvas');
  backgroundCanvas.className = 'cosmic-background-canvas';
  chatContainer.value?.appendChild(backgroundCanvas);
  scene = new THREE.Scene();
  camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
  renderer = new THREE.WebGLRenderer({ canvas: backgroundCanvas, alpha: true, antialias: true });
  renderer.setSize(window.innerWidth, window.innerHeight);
  camera.position.z = 5;
  const starsGeometry = new THREE.BufferGeometry();
  const starsMaterial = new THREE.PointsMaterial({ color: 0xffffff, size: 0.1, transparent: true, opacity: 0.8, sizeAttenuation: true });
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
  const nebulaGeometry = new THREE.SphereGeometry(10, 32, 32);
  const nebulaMaterial = new THREE.MeshBasicMaterial({ color: 0x8B5CF6, transparent: true, opacity: 0.05 });
  nebula = new THREE.Mesh(nebulaGeometry, nebulaMaterial);
  scene.add(nebula);
  const animate = () => {
    animationFrameId = requestAnimationFrame(animate);
    stars.rotation.x += 0.0003;
    stars.rotation.y += 0.0002;
    const time = Date.now() * 0.001;
    nebula.scale.set(1 + Math.sin(time * 0.3) * 0.1, 1 + Math.sin(time * 0.5) * 0.1, 1 + Math.sin(time * 0.4) * 0.1);
    renderer.render(scene, camera);
  };
  animate();
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
const initAnimations = () => {
  if (titleText.value) {
    gsap.to(titleText.value, { textShadow: "0 0 15px #8b5cf6, 0 0 30px #8b5cf6", duration: 2, repeat: -1, yoyo: true });
  }
  if (modeBadge.value) {
    gsap.from(modeBadge.value, { y: -30, opacity: 0, rotation: -5, duration: 0.8, ease: "elastic.out(1, 0.5)" });
  }
  const modeButtons = document.querySelectorAll('.mode-button');
  gsap.from(modeButtons, { opacity: 0, y: 15, stagger: 0.15, duration: 0.6, ease: "back.out(1.7)" });
  if (welcomeMessage.value) {
    gsap.from(welcomeMessage.value, { y: 50, opacity: 0, scale: 0.95, duration: 1, ease: "power3.out" });
  }
  if (welcomeText.value) {
    gsap.from(welcomeText.value, { opacity: 0, duration: 1, delay: 0.5 });
  }
  const chips = document.querySelectorAll('.suggestion-chip');
  gsap.from(chips, { scale: 0, opacity: 0, stagger: 0.1, duration: 0.7, delay: 0.7, ease: "back.out(2)" });
  if (runeTime.value) {
    gsap.to(runeTime.value, { y: "random(-30, 30)", x: "random(-20, 20)", rotation: "random(-20, 20)", duration: "random(7, 10)", repeat: -1, yoyo: true, ease: "sine.inOut" });
  }
  if (runeRift.value) {
    gsap.to(runeRift.value, { y: "random(-25, 25)", x: "random(-15, 15)", rotation: "random(-15, 15)", duration: "random(6, 9)", repeat: -1, yoyo: true, ease: "sine.inOut" });
  }
  if (runeCosmic.value) {
    gsap.to(runeCosmic.value, { y: "random(-20, 20)", x: "random(-25, 25)", rotation: "random(-25, 25)", duration: "random(8, 11)", repeat: -1, yoyo: true, ease: "sine.inOut" });
  }
  if (inputContainer.value) {
    gsap.from(inputContainer.value, { y: 30, opacity: 0, duration: 0.8, delay: 0.7, ease: "power2.out" });
  }
  if (energyField.value) {
    gsap.set(energyField.value, { opacity: 0 });
  }
};
watch(userInput, (newValue) => {
  if (!energyField.value) return;
  if (newValue.length > 0) {
    gsap.to(energyField.value, { opacity: 0.8, duration: 0.5 });
    anime({ targets: energyField.value, boxShadow: ['0 0 5px rgba(139, 92, 246, 0.5)', '0 0 25px rgba(139, 92, 246, 0.8)', '0 0 5px rgba(139, 92, 246, 0.5)'], duration: 2000, easing: 'easeInOutSine', loop: true });
    gsap.to('.energy-particle', { opacity: 0.8, duration: 0.5, stagger: 0.02 });
  } else {
    gsap.to(energyField.value, { opacity: 0, duration: 0.3 });
    gsap.to('.energy-particle', { opacity: 0, duration: 0.3 });
  }
});
watch(messages, async (newMessages, oldMessages) => {
  if (newMessages.length > oldMessages.length) {
    await nextTick();
    const latestIndex = newMessages.length - 1;
    const messageElement = document.querySelector(`.message-bubble:nth-child(${latestIndex + 1})`) as HTMLElement;
    if (messageElement) {
      gsap.from(messageElement, { y: 30, opacity: 0, scale: 0.95, duration: 0.7, ease: "back.out(1.7)", onComplete: () => {
        scrollToBottom();
        gsap.to(messageElement.querySelector('.message-content'), { boxShadow: '0 0 20px rgba(139, 92, 246, 0.3)', duration: 1, repeat: 1, yoyo: true });
      } });
    }
  }
});
watch(mode, () => {
  if (modeBadge.value) {
    gsap.fromTo(modeBadge.value, { scale: 0, rotation: -10, opacity: 0 }, { scale: 1, rotation: 0, opacity: 1, duration: 0.6, ease: "back.out(2)" });
    createParticleBurst(modeBadge.value);
  }
});
const loadChatData = async () => {
  const chatId = route.params.id as string;
  if (chatId) {
    isLoading.value = true;
    try {
      await chatStore.fetchChat(chatId);
      if (chatStore.currentChat?.messages) {
        messages.value = chatStore.currentChat.messages.map(msg => ({ role: msg.role as 'user' | 'assistant', content: msg.content, timestamp: msg.timestamp instanceof Date ? msg.timestamp.getTime() : Date.now() }));
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
onMounted(async () => {
  await nextTick();
  inputField.value?.focus();
  initAnimations();
  initCosmicBackground();
  messagesContainer.value?.addEventListener('scroll', handleScroll);
  await loadChatData();
  if (messages.value.length > 0) {
    const messageElements = document.querySelectorAll('.message-bubble');
    gsap.from(messageElements, { opacity: 0, y: 30, scale: 0.95, stagger: 0.1, duration: 0.7, ease: "back.out(1.7)" });
  }
});
onUnmounted(() => {
  messagesContainer.value?.removeEventListener('scroll', handleScroll);
  if (animationFrameId) { cancelAnimationFrame(animationFrameId); }
  if (renderer) { renderer.dispose(); }
  if (backgroundCanvas && backgroundCanvas.parentNode) { backgroundCanvas.parentNode.removeChild(backgroundCanvas); }
});
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700;900&family=Rajdhani:wght@300;400;700&display=swap');
.cosmic-test-container {
  min-height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: radial-gradient(ellipse at bottom, #1B2735 0%, #090A0F 100%);
  position: relative;
  overflow-x: hidden;
  font-family: 'Inter', sans-serif;
  color: #ffffff;
  padding: 2rem 1rem;
}
.particle-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  z-index: 0;
  pointer-events: none;
}
.cosmic-particle {
  position: absolute;
  width: var(--size);
  height: var(--size);
  background-color: #8b5cf6;
  box-shadow: 0 0 calc(var(--size) * 2) #8b5cf6;
  border-radius: 50%;
  opacity: var(--opacity);
  left: var(--x);
  top: var(--y);
  animation: float-particle var(--duration) linear infinite;
  animation-delay: var(--delay);
  animation-play-state: paused;
  filter: blur(1px);
}
@keyframes float-particle {
  0% { transform: translateY(0) rotate(0deg); opacity: var(--opacity); }
  100% { transform: translateY(-100vh) rotate(360deg); opacity: 0; }
}
.cosmic-rings {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 0;
  pointer-events: none;
}
.cosmic-ring {
  position: absolute;
  border: 2px solid transparent;
  border-radius: 50%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  animation-play-state: paused;
}
.ring1 {
  width: 80vw;
  height: 80vw;
  border-color: rgba(157, 78, 221, 0.15);
  animation: pulsate 15s linear infinite;
}
.ring2 {
  width: 60vw;
  height: 60vw;
  border-color: rgba(76, 201, 240, 0.1);
  animation: pulsate 12s linear infinite reverse;
}
.ring3 {
  width: 40vw;
  height: 40vw;
  border-color: rgba(247, 37, 133, 0.08);
  animation: pulsate 10s linear infinite;
}
@keyframes pulsate {
  0% { transform: translate(-50%, -50%) scale(0.95); opacity: 0.6; }
  50% { transform: translate(-50%, -50%) scale(1); opacity: 1; }
  100% { transform: translate(-50%, -50%) scale(0.95); opacity: 0.6; }
}
.test-header {
  position: relative;
  z-index: 1;
  text-align: center;
  margin-bottom: 2rem;
  max-width: 800px;
}
.logo-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 1rem;
}
.cosmic-logo {
  position: relative;
  width: 80px;
  height: 80px;
  margin-bottom: 1rem;
}
.logo-core {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 24px;
  height: 24px;
  background: #8b5cf6;
  border-radius: 50%;
  box-shadow: 0 0 20px #8b5cf6;
  animation: corePulse 4s infinite ease-in-out;
}
.logo-orbit {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 60px;
  height: 60px;
  border: 2px solid #8b5cf6;
  border-radius: 50%;
  animation: orbitRotate 10s infinite linear;
}
.logo-orbit::before {
  content: '';
  position: absolute;
  width: 10px;
  height: 10px;
  background: #4cc9f0;
  border-radius: 50%;
  top: -5px;
  left: 50%;
  transform: translateX(-50%);
  box-shadow: 0 0 10px #4cc9f0;
}
@keyframes corePulse {
  0%, 100% { transform: translate(-50%, -50%) scale(1); }
  50% { transform: translate(-50%, -50%) scale(1.2); }
}
@keyframes orbitRotate {
  0% { transform: translate(-50%, -50%) rotate(0deg); }
  100% { transform: translate(-50%, -50%) rotate(360deg); }
}
.test-title {
  font-size: 2.5rem;
  font-weight: 700;
  color: white;
  margin: 0;
  font-family: 'Orbitron', sans-serif;
  background: linear-gradient(to right, #fff, #8b5cf6, #fff);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  text-shadow: 0 2px 10px rgba(139, 92, 246, 0.3);
}
.test-description {
  font-size: 1.1rem;
  color: rgba(255, 255, 255, 0.8);
  max-width: 600px;
  margin: 1rem auto;
}
.test-interface {
  position: relative;
  z-index: 1;
  background: rgba(15, 23, 42, 0.6);
  backdrop-filter: blur(10px);
  border-radius: 20px;
  border: 1px solid rgba(139, 92, 246, 0.2);
  width: 100%;
  max-width: 800px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4), 0 0 80px rgba(139, 92, 246, 0.1);
}
.messages-container {
  flex: 1;
  overflow-y: auto;
  padding: 1.5rem;
  min-height: 400px;
  max-height: 60vh;
  scroll-behavior: smooth;
}
.messages-container::-webkit-scrollbar {
  width: 8px;
}
.messages-container::-webkit-scrollbar-track {
  background: rgba(15, 23, 42, 0.3);
  border-radius: 4px;
}
.messages-container::-webkit-scrollbar-thumb {
  background: rgba(139, 92, 246, 0.5);
  border-radius: 4px;
}
.messages-container::-webkit-scrollbar-thumb:hover {
  background: rgba(139, 92, 246, 0.7);
}
.welcome-message {
  text-align: center;
  padding: 2rem;
  margin: 1rem 0;
  background: rgba(15, 23, 42, 0.3);
  border-radius: 16px;
  border: 1px solid rgba(139, 92, 246, 0.2);
  display: flex;
  flex-direction: column;
  align-items: center;
}
.welcome-icon {
  font-size: 3rem;
  margin-bottom: 1rem;
  animation: iconFloat 3s ease-in-out infinite alternate;
}
@keyframes iconFloat {
  0% { transform: translateY(0); }
  100% { transform: translateY(-10px); }
}
.welcome-message h2 {
  font-size: 1.8rem;
  margin-bottom: 0.5rem;
  background: linear-gradient(to right, #fff, #8b5cf6);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}
.welcome-message p {
  color: rgba(255, 255, 255, 0.8);
  margin-bottom: 1.5rem;
}
.suggestion-chips {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0.8rem;
  margin-top: 1rem;
}
.suggestion-chip {
  background: rgba(139, 92, 246, 0.2);
  border: 1px solid rgba(139, 92, 246, 0.3);
  border-radius: 20px;
  padding: 0.6rem 1rem;
  font-size: 0.9rem;
  color: white;
  cursor: pointer;
  transition: all 0.3s ease;
  overflow: hidden;
  position: relative;
}
.suggestion-chip:hover {
  background: rgba(139, 92, 246, 0.3);
}
.sparkle {
  position: absolute;
  width: 4px;
  height: 4px;
  background: white;
  border-radius: 50%;
  opacity: 0.8;
  animation: sparkleAnim 0.8s linear forwards;
}
@keyframes sparkleAnim {
  0% { transform: scale(0); opacity: 0.8; }
  100% { transform: scale(3); opacity: 0; }
}
.message-list {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}
.message-transition-enter-active, .message-transition-leave-active {
  transition: all 0.5s;
}
.message-transition-enter-from, .message-transition-leave-to {
  opacity: 0;
  transform: translateY(20px);
}
.message-bubble {
  display: flex;
  gap: 1rem;
  width: 100%;
}
.user {
  justify-content: flex-end;
}
.avatar {
  flex-shrink: 0;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
}
.user-avatar {
  background: linear-gradient(135deg, #6366f1, #8b5cf6);
  order: 2;
}
.avatar-letter {
  font-weight: bold;
  color: white;
  font-size: 1.2rem;
}
.avatar-glow {
  position: absolute;
  inset: 0;
  border-radius: 50%;
  background: linear-gradient(135deg, rgba(99, 102, 241, 0.5), rgba(139, 92, 246, 0.5));
  filter: blur(4px);
  opacity: 0.5;
  animation: glowPulse 3s infinite alternate;
}
@keyframes glowPulse {
  0% { opacity: 0.3; transform: scale(1); }
  100% { opacity: 0.7; transform: scale(1.1); }
}
.assistant-avatar {
  background: transparent;
}
.assistant-avatar-inner {
  width: 100%;
  height: 100%;
  position: relative;
}
.cosmic-symbol {
  font-size: 1.5rem;
  color: #8b5cf6;
  position: relative;
  z-index: 2;
}
.avatar-rings {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
}
.avatar-ring {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border: 1px solid #8b5cf6;
  border-radius: 50%;
  opacity: 0.7;
}
.avatar-ring:nth-child(1) {
  width: 100%;
  height: 100%;
  animation: ringRotate 10s linear infinite;
}
.avatar-ring:nth-child(2) {
  width: 70%;
  height: 70%;
  animation: ringRotate 7s linear infinite reverse;
}
@keyframes ringRotate {
  0% { transform: translate(-50%, -50%) rotate(0deg); }
  100% { transform: translate(-50%, -50%) rotate(360deg); }
}
.message-content {
  background: rgba(15, 23, 42, 0.5);
  border-radius: 12px;
  padding: 1rem;
  max-width: 80%;
  border: 1px solid rgba(139, 92, 246, 0.2);
  position: relative;
  overflow: hidden;
}
.user .message-content {
  background: rgba(99, 102, 241, 0.15);
  border-color: rgba(99, 102, 241, 0.3);
  order: 1;
}
.message-sender {
  font-weight: 600;
  margin-bottom: 0.5rem;
  font-size: 0.95rem;
  position: relative;
  display: inline-block;
}
.sender-underline {
  position: absolute;
  bottom: -3px;
  left: 0;
  height: 1px;
  width: 100%;
  background: linear-gradient(to right, transparent, currentColor, transparent);
  opacity: 0.5;
}
.message-text {
  line-height: 1.6;
}
.message-time {
  font-size: 0.75rem;
  color: rgba(255, 255, 255, 0.5);
  margin-top: 0.5rem;
  text-align: right;
}
.cosmic-keyword {
  color: #8b5cf6;
  font-weight: 600;
  text-shadow: 0 0 5px rgba(139, 92, 246, 0.5);
}
.message-text pre {
  background: rgba(10, 15, 30, 0.6);
  border-radius: 8px;
  padding: 1rem;
  overflow-x: auto;
  margin: 1rem 0;
  border-left: 3px solid #8b5cf6;
}
.message-text code {
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.9rem;
}
.message-text p code {
  background: rgba(139, 92, 246, 0.2);
  padding: 0.2rem 0.4rem;
  border-radius: 4px;
  font-size: 0.9rem;
}
.thinking-indicator {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 1.5rem 0;
  padding: 1rem;
}
.cosmic-thinking {
  display: flex;
  gap: 0.5rem;
  margin-bottom: 0.5rem;
}
.dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: #8b5cf6;
  opacity: 0.7;
}
.dot-1 {
  animation: dotPulse 1.5s infinite;
}
.dot-2 {
  animation: dotPulse 1.5s infinite 0.2s;
}
.dot-3 {
  animation: dotPulse 1.5s infinite 0.4s;
}
@keyframes dotPulse {
  0%, 100% { transform: scale(1); opacity: 0.7; }
  50% { transform: scale(1.3); opacity: 1; }
}
.thinking-text {
  color: rgba(255, 255, 255, 0.7);
  font-size: 0.9rem;
}
.scroll-indicator {
  position: absolute;
  bottom: 20px;
  right: 20px;
  width: 40px;
  height: 40px;
  background: rgba(139, 92, 246, 0.3);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 10;
  box-shadow: 0 0 15px rgba(139, 92, 246, 0.4);
}
.scroll-indicator i {
  font-size: 1.2rem;
  color: white;
}
.scroll-pulse {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background: rgba(139, 92, 246, 0.2);
  animation: scrollPulse 2s infinite;
}
@keyframes scrollPulse {
  0% { transform: scale(1); opacity: 1; }
  100% { transform: scale(1.5); opacity: 0; }
}
.input-container {
  position: relative;
  padding: 1.2rem;
  border-top: 1px solid rgba(139, 92, 246, 0.2);
  display: flex;
  gap: 1rem;
  align-items: flex-end;
  background: rgba(15, 23, 42, 0.7);
}
.message-input {
  flex: 1;
  min-height: 44px;
  max-height: 150px;
  padding: 0.8rem 1rem;
  background: rgba(15, 23, 42, 0.5);
  border: 1px solid rgba(139, 92, 246, 0.3);
  border-radius: 12px;
  color: white;
  font-family: inherit;
  font-size: 1rem;
  resize: none;
  transition: all 0.3s ease;
}
.message-input:focus {
  outline: none;
  border-color: #8b5cf6;
  box-shadow: 0 0 15px rgba(139, 92, 246, 0.2);
}
.message-input::placeholder {
  color: rgba(255, 255, 255, 0.4);
}
.input-energy-field {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  overflow: hidden;
  opacity: 0;
  transition: opacity 0.3s ease;
}
.input-energy-field.active {
  opacity: 1;
}
.energy-particles {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
.energy-particle {
  position: absolute;
  width: var(--size);
  height: var(--size);
  background: #8b5cf6;
  border-radius: 50%;
  top: var(--y);
  left: var(--x);
  animation: energyFlow var(--duration) infinite linear;
  animation-delay: var(--delay);
  opacity: 0;
}
@keyframes energyFlow {
  0% { transform: translateY(0) translateX(0); opacity: 0; }
  10% { opacity: 0.7; }
  90% { opacity: 0.7; }
  100% { transform: translateY(-40px) translateX(var(--x)); opacity: 0; }
}
.send-button {
  width: 44px;
  height: 44px;
  background: linear-gradient(135deg, #6366f1, #8b5cf6);
  border: none;
  border-radius: 12px;
  color: white;
  font-size: 1.2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  flex-shrink: 0;
}
.send-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 5px 15px rgba(139, 92, 246, 0.4);
}
.send-button:disabled {
  background: rgba(139, 92, 246, 0.3);
  cursor: not-allowed;
  transform: none;
  box-shadow: none;
}
.button-pulse {
  position: absolute;
  width: 100%;
  height: 100%;
  background: radial-gradient(circle, rgba(255, 255, 255, 0.3) 0%, transparent 70%);
  opacity: 0;
  transition: opacity 0.3s ease;
}
.send-button:hover .button-pulse {
  opacity: 1;
  animation: buttonPulse 2s infinite;
}
@keyframes buttonPulse {
  0% { transform: scale(0.9); opacity: 0.5; }
  100% { transform: scale(1.5); opacity: 0; }
}
.mode-selector {
  padding: 1rem;
  border-top: 1px solid rgba(139, 92, 246, 0.2);
  display: flex;
  align-items: center;
  gap: 1rem;
  flex-wrap: wrap;
  background: rgba(15, 23, 42, 0.5);
}
.selector-label {
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.7);
}
.selector-options {
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
}
.mode-button {
  background: rgba(15, 23, 42, 0.6);
  border: 1px solid rgba(139, 92, 246, 0.2);
  border-radius: 20px;
  padding: 0.4rem 1rem;
  color: white;
  font-size: 0.9rem;
  cursor: pointer;
  transition: all 0.3s ease;
}
.mode-button:hover {
  background: rgba(139, 92, 246, 0.2);
  transform: translateY(-2px);
}
.mode-button.active {
  background: linear-gradient(135deg, rgba(99, 102, 241, 0.5), rgba(139, 92, 246, 0.5));
  border-color: #8b5cf6;
  box-shadow: 0 0 10px rgba(139, 92, 246, 0.3);
}
.test-disclaimer {
  padding: 0.8rem;
  text-align: center;
  font-size: 0.85rem;
  color: rgba(255, 255, 255, 0.6);
  background: rgba(15, 23, 42, 0.7);
  border-top: 1px solid rgba(139, 92, 246, 0.2);
}
.mode-transition-portal {
  position: fixed;
  top: 50%;
  left: 50%;
  width: 100vmax;
  height: 100vmax;
  transform: translate(-50%, -50%) scale(0);
  background: radial-gradient(circle, rgba(139, 92, 246, 0.7) 0%, transparent 70%);
  border-radius: 50%;
  pointer-events: none;
  z-index: 1000;
  opacity: 0;
  transition: transform 1s cubic-bezier(0.19, 1, 0.22, 1), opacity 1s cubic-bezier(0.19, 1, 0.22, 1);
}
.mode-transition-portal.portal-active {
  transform: translate(-50%, -50%) scale(1);
  opacity: 1;
}
@media (max-width: 768px) {
  .test-title {
    font-size: 2rem;
  }
  .test-description {
    font-size: 1rem;
  }
  .cosmic-logo {
    width: 60px;
    height: 60px;
  }
  .messages-container {
    padding: 1rem;
  }
  .message-content {
    max-width: 85%;
  }
}
@media (max-width: 576px) {
  .test-title {
    font-size: 1.5rem;
  }
  .cosmic-logo {
    width: 50px;
    height: 50px;
  }
  .mode-selector {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.8rem;
  }
  .message-content {
    max-width: 90%;
  }
  .avatar {
    width: 32px;
    height: 32px;
  }
}
</style>
