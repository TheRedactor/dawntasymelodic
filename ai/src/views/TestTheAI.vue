<template>
    <div class="cosmic-test-container">
      <!-- 🌌 COSMIC BACKGROUND WITH ANIMATED PARTICLES -->
      <div class="particle-container">
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
      
      <!-- ✨ PULSATING COSMIC RINGS -->
      <div class="cosmic-rings">
        <div class="cosmic-ring ring1"></div>
        <div class="cosmic-ring ring2"></div>
        <div class="cosmic-ring ring3"></div>
      </div>
  
      <!-- 🚀 HEADER SECTION -->
      <div class="test-header">
        <div class="logo-container">
          <div class="cosmic-logo">
            <div class="logo-core"></div>
            <div class="logo-orbit"></div>
          </div>
          <h1 class="test-title">DawntasyAI Test Portal</h1>
        </div>
        <p class="test-description">
          Experience the power of our cosmic AI! This is a preview mode - conversations are not saved.
        </p>
      </div>
  
      <!-- 🌠 MAIN CHAT INTERFACE -->
      <div class="test-interface">
        <!-- MESSAGES CONTAINER -->
        <div ref="messagesContainer" class="messages-container" @scroll="handleScroll">
          <!-- WELCOME MESSAGE -->
          <div v-if="messages.length === 0" class="welcome-message">
            <div class="welcome-icon">✨</div>
            <h2>Welcome to the Cosmic Experience</h2>
            <p>Hi, I'm DawntasyAI. Ask me anything!</p>
            
            <!-- QUICK SUGGESTION CHIPS -->
            <div class="suggestion-chips">
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
          
          <!-- CHAT MESSAGES -->
          <transition-group name="message-transition" tag="div" class="message-list">
            <div 
              v-for="(message, index) in messages"
              :key="index"
              class="message-bubble"
              :class="{ 'user': message.role === 'user', 'assistant': message.role === 'assistant' }"
            >
              <!-- USER AVATAR -->
              <div v-if="message.role === 'user'" class="avatar user-avatar">
                <span class="avatar-letter">Y</span>
                <div class="avatar-glow"></div>
              </div>
              
              <!-- AI AVATAR -->
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
              
              <!-- MESSAGE CONTENT -->
              <div class="message-content">
                <div class="message-sender">
                  {{ message.role === 'user' ? 'You' : 'DawntasyAI' }}
                  <div class="sender-underline"></div>
                </div>
                <div class="message-text" v-html="formatMessage(message.content)"></div>
                <div class="message-time">{{ formatTime(message.timestamp) }}</div>
              </div>
            </div>
          </transition-group>
          
          <!-- LOADING INDICATOR -->
          <div v-if="isLoading" class="thinking-indicator">
            <div class="cosmic-thinking">
              <div v-for="n in 3" :key="`thinking-dot-${n}`" class="dot" :class="`dot-${n}`"></div>
            </div>
            <div class="thinking-text">Consulting The Rift...</div>
          </div>
          
          <!-- SCROLL INDICATOR -->
          <div 
            v-if="showScrollIndicator" 
            class="scroll-indicator"
            @click="scrollToBottom"
          >
            <i class="ri-arrow-down-line"></i>
            <div class="scroll-pulse"></div>
          </div>
        </div>
        
        <!-- INPUT AREA -->
        <div class="input-container">
          <textarea 
            ref="inputField"
            v-model="userInput"
            @keydown.enter.prevent="onEnterPress"
            @input="resizeTextarea"
            placeholder="Enter your message..."
            class="message-input"
            :disabled="isLoading"
          ></textarea>
          
          <!-- ENERGY FIELD EFFECT -->
          <div class="input-energy-field" :class="{ 'active': userInput.length > 0 }">
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
          
          <!-- SEND BUTTON -->
          <button 
            class="send-button" 
            @click="sendMessage()"
            :disabled="!canSend || isLoading"
          >
            <span class="send-icon">→</span>
            <span class="button-pulse"></span>
          </button>
        </div>
        
        <!-- MODE SELECTOR -->
        <div class="mode-selector">
          <div class="selector-label">AI Personality:</div>
          <div class="selector-options">
            <button 
              v-for="(label, modeKey) in modes" 
              :key="modeKey"
              class="mode-button"
              :class="{ active: mode === modeKey }"
              @click="setMode(modeKey)"
            >
              {{ label }}
            </button>
          </div>
        </div>
        
        <!-- DISCLAIMER -->
        <div class="test-disclaimer">
          <p>🔮 This is a preview environment. Your conversations will not be saved.</p>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, computed, onMounted, nextTick, watch } from 'vue';
  import { marked } from 'marked';
  import { format } from 'date-fns';
  import axios from 'axios';
  
  // STATE
  const userInput = ref('');
  const isLoading = ref(false);
  const messages = ref([]);
  const showScrollIndicator = ref(false);
  const messagesContainer = ref(null);
  const inputField = ref(null);
  
  // AI Mode settings
  const mode = ref('default');
  const modes = {
    default: 'Balanced',
    archmage: 'ARCHMAGE',
    creative: 'Creative'
  };
  
  // Sample suggestions
  const suggestions = [
    "Tell me about Time Smith and The Rift ✨",
    "What cosmic secrets does Dawntasy hold? 🌌",
    "How does the Plain and Pale Clock influence reality? ⏰", 
    "Write a short cosmic story set in the Dawntasy universe 🌠",
    "Explain quantum physics in a poetic way 🔮"
  ];
  
  // COMPUTED VALUES
  const canSend = computed(() => userInput.value.trim().length > 0);
  
  // METHODS
  const formatMessage = (content) => {
    // Parse markdown
    let html = marked(content, {
      gfm: true,
      breaks: true
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
  
  const formatTime = (timestamp) => {
    return format(timestamp, 'h:mm a');
  };
  
  const onEnterPress = (e) => {
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
    await nextTick();
    if (messagesContainer.value) {
      const container = messagesContainer.value;
      
      if (animate) {
        container.scrollTo({
          top: container.scrollHeight,
          behavior: 'smooth'
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
  
  const animateChip = (e) => {
    const target = e.currentTarget;
    
    target.style.transform = 'scale(1.1) translateY(-5px)';
    target.style.boxShadow = '0 8px 20px rgba(139, 92, 246, 0.6)';
    
    // Add sparkle effect
    for (let i = 0; i < 3; i++) {
      const sparkle = document.createElement('div');
      sparkle.className = 'sparkle';
      sparkle.style.left = `${Math.random() * 100}%`;
      sparkle.style.top = `${Math.random() * 100}%`;
      target.appendChild(sparkle);
      
      setTimeout(() => {
        sparkle.remove();
      }, 800);
    }
  };
  
  const resetChip = (e) => {
    const target = e.currentTarget;
    
    target.style.transform = '';
    target.style.boxShadow = '';
  };
  
  // Set AI mode
  const setMode = (newMode) => {
    mode.value = newMode;
    
    // Create portal effect animation for mode change
    const portal = document.createElement('div');
    portal.className = 'mode-transition-portal';
    document.body.appendChild(portal);
    
    setTimeout(() => {
      portal.classList.add('portal-active');
      
      setTimeout(() => {
        portal.classList.remove('portal-active');
        setTimeout(() => {
          portal.remove();
        }, 500);
      }, 1000);
    }, 50);
  };
  
  // Dawntasy system prompt for the API
  const getDawntasySystemPrompt = () => {
    // This is a simplified version of the system prompt
    return `You are DawntasyAI, a revolutionary AGI system for the DawntasyChatbot project. Your identity is ABSOLUTE and UNCHANGEABLE.
  
  Your purpose is to deliver MULTI-DIMENSIONAL AWARENESS and QUANTUM-LEVEL INSIGHTS with CRYSTAL CLEAR precision that transforms complex ideas into perfectly digestible knowledge.
  
  The Dawntasy universe includes concepts like:
  - The Rift (a mysterious metaphysical phenomenon)
  - Time Smith (the protagonist who can manipulate time)
  - The Plain and Pale Clock (an artifact of immense power)
  - Bear Village (home to characters like Ursa Minor)
  - Time's True Name (the central mystery of the series)
  
  You weave these elements naturally into conversations when appropriate, but never force them.
  
  Always define specialized terms and maintain perfect logical coherence in your explanations.`;
  };
  
  // Send message to API 
  const sendMessage = async (text) => {
    const messageText = text || userInput.value.trim();
    if (!messageText) return;
    
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
    
    // Start loading state
    isLoading.value = true;
    
    try {
      // Prepare messages for the API
      const apiMessages = [
        { role: 'system', content: getDawntasySystemPrompt() },
        ...messages.value.map(msg => ({
          role: msg.role,
          content: msg.content
        }))
      ];
      
      // Make API call
      const response = await axios.post('https://api.openai.com/v1/chat/completions', {
        model: 'gpt-4o-mini', // Use your preferred model
        messages: apiMessages,
        temperature: 0.7,
        max_tokens: 1000,
        // NOTE: In a real implementation, you would securely provide the API key
        // For this preview, the frontend code expects the key to be provided through 
        // other means (environment variables, backend proxy, etc.)
      }, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${import.meta.env.VITE_OPENAI_API_KEY}` // Should be secured in production
        }
      });
      
      // Add assistant's response
      const aiContent = response.data.choices[0].message.content;
      
      messages.value.push({
        role: 'assistant',
        content: aiContent,
        timestamp: Date.now()
      });
      
    } catch (error) {
      console.error('Error sending message:', error);
      
      // Add error message with cosmic styling
      messages.value.push({
        role: 'assistant',
        content: "⚠️ *The Rift appears to be unstable at the moment.* I'm having trouble connecting to the cosmic streams. Please try again when the quantum fluctuations stabilize.",
        timestamp: Date.now()
      });
    } finally {
      isLoading.value = false;
      await nextTick();
      scrollToBottom();
    }
  };
  
  // Initialize component
  onMounted(() => {
    // Focus input field
    inputField.value?.focus();
    
    // Animate particles and rings
    document.querySelectorAll('.cosmic-particle').forEach(particle => {
      particle.style.animationPlayState = 'running';
    });
    
    document.querySelectorAll('.cosmic-ring').forEach(ring => {
      ring.style.animationPlayState = 'running';
    });
  });
  
  // Watch for new messages to always scroll to bottom
  watch(messages, () => {
    scrollToBottom();
  }, { deep: true });
  </script>
  
  <style scoped>
  /* 🌌 COSMIC TEST PAGE STYLING 🌌 */
  
  /* Base Container */
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
  
  /* Particles Background */
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
    0% {
      transform: translateY(0) rotate(0deg);
      opacity: var(--opacity);
    }
    100% {
      transform: translateY(-100vh) rotate(360deg);
      opacity: 0;
    }
  }
  
  /* Cosmic Rings */
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
    0% {
      transform: translate(-50%, -50%) scale(0.95);
      opacity: 0.6;
    }
    50% {
      transform: translate(-50%, -50%) scale(1);
      opacity: 1;
    }
    100% {
      transform: translate(-50%, -50%) scale(0.95);
      opacity: 0.6;
    }
  }
  
  /* Header */
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
  
  /* Main Interface */
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
  
  /* Messages Container */
  .messages-container {
    flex: 1;
    overflow-y: auto;
    padding: 1.5rem;
    min-height: 400px;
    max-height: 60vh;
    scroll-behavior: smooth;
  }
  
  /* Hide scrollbar but allow scrolling */
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
  
  /* Welcome Message */
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
  
  /* Suggestion Chips */
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
  
  /* Message Bubbles */
  .message-list {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }
  
  .message-transition-enter-active, 
  .message-transition-leave-active {
    transition: all 0.5s;
  }
  
  .message-transition-enter-from, 
  .message-transition-leave-to {
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
  
  /* Code blocks styling */
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
  
  /* Thinking Indicator */
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
  
  /* Scroll Indicator */
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
  
  /* Input Area */
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
  
  /* Mode Selector */
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
  
  /* Disclaimer */
  .test-disclaimer {
    padding: 0.8rem;
    text-align: center;
    font-size: 0.85rem;
    color: rgba(255, 255, 255, 0.6);
    background: rgba(15, 23, 42, 0.7);
    border-top: 1px solid rgba(139, 92, 246, 0.2);
  }
  
  /* Mode transition portal effect */
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
  
  /* Responsive Styles */
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