<!-- src/views/ChatView.vue -->
<template>
  <div class="chat-container">
    <!-- Cosmic header -->
    <div class="chat-header">
      <h1 class="chat-title">
        <span class="title-text">DawntasyAI</span>
        <span class="badge" :class="mode">{{ modeName }}</span>
      </h1>
      <div class="mode-selector">
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
    
    <!-- Chat messages -->
    <div class="messages-container" ref="messagesContainer">
      <!-- Welcome message -->
      <div v-if="messages.length === 0" class="welcome-message">
        <div class="welcome-title">
          <span class="welcome-icon">✦</span>
          Welcome to DawntasyAI
          <span class="welcome-icon">✦</span>
        </div>
        <p class="welcome-text">
          Your gateway to the Dawntasy universe. Ask me anything about "Time's True Name",
          or just chat about whatever's on your mind!
        </p>
        <div class="suggestion-chips">
          <button 
            v-for="suggestion in suggestions" 
            :key="suggestion"
            class="suggestion-chip"
            @click="sendMessage(suggestion)"
          >
            {{ suggestion }}
          </button>
        </div>
      </div>
      
      <!-- Message bubbles -->
      <div 
        v-for="(message, index) in messages" 
        :key="index"
        class="message-bubble"
        :class="{ 'user': message.role === 'user', 'assistant': message.role === 'assistant' }"
      >
        <!-- User avatar -->
        <div v-if="message.role === 'user'" class="avatar user-avatar">
          <span class="avatar-letter">{{ userInitial }}</span>
        </div>
        
        <!-- Assistant avatar -->
        <div v-else class="avatar assistant-avatar">
          <div class="assistant-avatar-inner">
            <span class="cosmic-symbol">⟁</span>
          </div>
        </div>
        
        <!-- Message content -->
        <div class="message-content">
          <div class="message-sender">
            {{ message.role === 'user' ? authStore.displayName : 'DawntasyAI' }}
          </div>
          <div class="message-text" v-html="formatMessage(message.content)"></div>
          <div class="message-time">{{ formatTime(message.timestamp) }}</div>
        </div>
      </div>
      
      <!-- Thinking indicator -->
      <div v-if="isLoading" class="thinking-indicator">
        <div class="cosmic-thinking">
          <div class="dot"></div>
          <div class="dot"></div>
          <div class="dot"></div>
        </div>
        <div class="thinking-text">Consulting The Rift...</div>
      </div>
    </div>
    
    <!-- Input area -->
    <div class="input-container">
      <textarea 
        ref="inputField"
        v-model="userInput"
        @keydown.enter.prevent="onEnterPress"
        placeholder="Enter your message..."
        class="message-input"
        :disabled="isLoading"
      ></textarea>
      <button 
        class="send-button" 
        @click="sendMessage()"
        :disabled="!canSend || isLoading"
      >
        <span class="send-icon">➔</span>
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, watch, nextTick } from 'vue';
import { marked } from 'marked';
import { useAuthStore } from '@/store/auth';
import { useOpenAI } from '@/services/openaiService';
import { format } from 'date-fns';
import hljs from 'highlight.js';

// Initialize services
const authStore = useAuthStore();
const openai = useOpenAI();

// Refs
const inputField = ref<HTMLTextAreaElement | null>(null);
const messagesContainer = ref<HTMLDivElement | null>(null);
const userInput = ref('');
const isLoading = ref(false);
const messages = ref<Array<{
  role: 'user' | 'assistant',
  content: string,
  timestamp: number
}>>([]);

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

// Computed values
const userInitial = computed(() => {
  return authStore.displayName?.charAt(0).toUpperCase() || 'U';
});

const canSend = computed(() => userInput.value.trim().length > 0);

// Methods
const setMode = (newMode: 'default' | 'archmage' | 'creative') => {
  // Check if user has access to premium modes
  if (newMode !== 'default') {
    const plan = authStore.userProfile?.plan;
    if (plan === 'free') {
      // Show upgrade modal or message
      alert('This mode is available with premium plans only. Upgrade to access advanced AI modes!');
      return;
    }
  }
  
  mode.value = newMode;
};

const formatMessage = (content: string) => {
  // Parse markdown
  let html = marked(content, {
    gfm: true,
    breaks: true,
    highlight: function(code, lang) {
      if (lang && hljs.getLanguage(lang)) {
        return hljs.highlight(code, { language: lang }).value;
      }
      return hljs.highlightAuto(code).value;
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

const scrollToBottom = async () => {
  await nextTick();
  if (messagesContainer.value) {
    messagesContainer.value.scrollTop = messagesContainer.value.scrollHeight;
  }
};

const sendMessage = async (text?: string) => {
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
  
  // Scroll to bottom
  await scrollToBottom();
  
  // Start loading state
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
          scrollToBottom();
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
    scrollToBottom();
  }
};

// Focus the input field when component mounts
onMounted(() => {
  inputField.value?.focus();
});
</script>

<style lang="scss" scoped>
.chat-container {
  @apply flex flex-col h-full max-w-4xl mx-auto bg-void-900 bg-opacity-80 rounded-lg backdrop-blur-sm overflow-hidden;
  border: 1px solid theme('colors.void.700');
  height: calc(100vh - 8rem);
}

.chat-header {
  @apply px-6 py-4 flex flex-col sm:flex-row justify-between items-center border-b border-void-700 bg-gradient-to-r from-void-800 to-void-900;
  
  .chat-title {
    @apply font-display text-xl sm:text-2xl text-white flex items-center gap-3;
    
    .title-text {
      @apply bg-clip-text text-transparent bg-gradient-to-r from-rift-400 to-starlight-500;
    }
    
    .badge {
      @apply text-xs py-1 px-2 rounded font-sans uppercase tracking-wider;
      
      &.default {
        @apply bg-void-700 text-starlight-300;
      }
      
      &.archmage {
        @apply bg-time-500 text-white;
      }
      
      &.creative {
        @apply bg-rift-500 text-white;
      }
    }
  }
  
  .mode-selector {
    @apply flex gap-2 mt-2 sm:mt-0;
    
    .mode-button {
      @apply px-3 py-1 text-sm rounded-full transition-all duration-300 ease-in-out;
      @apply border border-void-600 bg-void-800 text-void-300;
      
      &:hover {
        @apply border-void-500 text-white;
      }
      
      &.active {
        @apply border-starlight-700 bg-starlight-900 text-white;
      }
    }
  }
}

.messages-container {
  @apply flex-1 overflow-y-auto p-4 space-y-4;
  
  /* Stylish scrollbar */
  &::-webkit-scrollbar {
    width: 6px;
  }
  
  &::-webkit-scrollbar-track {
    @apply bg-void-800;
  }
  
  &::-webkit-scrollbar-thumb {
    @apply bg-void-600 rounded;
    
    &:hover {
      @apply bg-void-500;
    }
  }
}

.welcome-message {
  @apply flex flex-col items-center justify-center text-center py-8 px-4 rounded-lg bg-void-800 bg-opacity-60 border border-void-700;
  
  .welcome-title {
    @apply text-2xl sm:text-3xl font-display text-white flex items-center gap-2 mb-4;
    
    .welcome-icon {
      @apply text-rift-400;
    }
  }
  
  .welcome-text {
    @apply text-starlight-300 max-w-md mb-6;
  }
  
  .suggestion-chips {
    @apply flex flex-wrap justify-center gap-2;
    
    .suggestion-chip {
      @apply px-4 py-2 rounded-full text-sm bg-void-700 text-white border border-void-600 hover:bg-void-600 transition-all;
      
      &:hover {
        @apply transform scale-105 border-rift-500;
      }
    }
  }
}

.message-bubble {
  @apply flex gap-3 max-w-full animate-fadeIn;
  
  &.user {
    @apply flex-row-reverse;
    
    .message-content {
      @apply bg-gradient-to-r from-time-900 to-time-800 border-time-700;
    }
  }
  
  &.assistant {
    .message-content {
      @apply bg-gradient-to-r from-void-800 to-rift-900 border-void-700;
    }
  }
  
  .avatar {
    @apply w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0;
    
    &.user-avatar {
      @apply bg-time-800 text-white font-semibold;
    }
    
    &.assistant-avatar {
      @apply bg-void-800 border border-rift-600;
      
      .assistant-avatar-inner {
        @apply w-8 h-8 rounded-full bg-gradient-to-br from-rift-500 to-rift-700 flex items-center justify-center;
      }
      
      .cosmic-symbol {
        @apply text-white text-lg;
      }
    }
  }
  
  .message-content {
    @apply py-3 px-4 rounded-lg border max-w-[85%] break-words;
    
    .message-sender {
      @apply text-sm font-semibold mb-1;
    }
    
    .message-text {
      @apply text-white;
      
      ::v-deep(.cosmic-keyword) {
        @apply font-semibold text-rift-300 bg-rift-900 bg-opacity-40 px-1 rounded;
      }
      
      ::v-deep(pre) {
        @apply bg-void-950 p-3 rounded-md overflow-x-auto my-2;
      }
      
      ::v-deep(code) {
        @apply font-mono text-sm;
      }
      
      ::v-deep(p) {
        @apply my-2;
      }
      
      ::v-deep(a) {
        @apply text-rift-400 underline;
      }
      
      ::v-deep(ul, ol) {
        @apply pl-5 my-2;
      }
      
      ::v-deep(li) {
        @apply my-1;
      }
    }
    
    .message-time {
      @apply text-xs text-starlight-400 mt-1;
    }
  }
}

.thinking-indicator {
  @apply flex items-center gap-3 ml-12;
  
  .cosmic-thinking {
    @apply flex gap-1;
    
    .dot {
      @apply w-2 h-2 rounded-full bg-rift-400;
      animation: thinking 1.4s infinite ease-in-out both;
      
      &:nth-child(1) {
        animation-delay: -0.32s;
      }
      
      &:nth-child(2) {
        animation-delay: -0.16s;
      }
    }
  }
  
  .thinking-text {
    @apply text-sm text-starlight-400 italic;
  }
}

@keyframes thinking {
  0%, 80%, 100% { 
    transform: scale(0);
  }
  40% { 
    transform: scale(1);
  }
}

.input-container {
  @apply p-4 border-t border-void-700 bg-void-800;
  
  .message-input {
    @apply w-full p-3 rounded-lg bg-void-700 text-white border border-void-600 resize-none;
    @apply focus:outline-none focus:ring-2 focus:ring-rift-600 focus:border-rift-500;
    min-height: 60px;
    max-height: 150px;
  }
  
  .send-button {
    @apply absolute right-8 bottom-8 w-10 h-10 rounded-full bg-rift-600 text-white flex items-center justify-center;
    @apply hover:bg-rift-500 disabled:opacity-50 disabled:cursor-not-allowed transition-all;
    
    &:hover {
      @apply transform scale-110;
    }
    
    .send-icon {
      @apply text-lg;
    }
  }
}
</style>

<template>
  <motion.div 
    class="chat-container"
    :initial="{ opacity: 0, scale: 0.9 }"
    :animate="{ opacity: 1, scale: 1 }"
    :transition="{ 
      duration: 0.6, 
      type: 'spring', 
      stiffness: 120 
    }"
  >
    <!-- Cosmic Header with Quantum Transitions -->
    <div class="chat-header">
      <h1 class="chat-title">
        <span class="title-text">DawntasyAI</span>
        <motion.span 
          class="badge" 
          :class="mode"
          :initial="{ opacity: 0, scale: 0.8 }"
          :animate="{ opacity: 1, scale: 1 }"
          :transition="{ type: 'spring', stiffness: 300 }"
        >
          {{ modeName }}
        </motion.span>
      </h1>
      
      <div class="mode-selector">
        <AnimatePresence>
          <motion.button 
            v-for="(label, modeKey) in modes" 
            :key="modeKey"
            class="mode-button"
            :class="{ active: mode === modeKey }"
            @click="setMode(modeKey)"
            :initial="{ opacity: 0, x: -20 }"
            :animate="{ opacity: 1, x: 0 }"
            :exit="{ opacity: 0, x: 20 }"
            :whileHover="{ 
              scale: 1.1, 
              rotate: [0, 5, -5, 0],
              transition: { duration: 0.3 }
            }"
            :whileTap="{ scale: 0.95 }"
          >
            {{ label }}
          </motion.button>
        </AnimatePresence>
      </div>
    </div>
    
    <!-- Messages Container with Cosmic Flow -->
    <motion.div 
      ref="messagesContainer"
      class="messages-container"
      :initial="{ opacity: 0 }"
      :animate="{ opacity: 1 }"
      :transition="{ delay: 0.3, duration: 0.5 }"
    >
      <!-- Welcome Message with Quantum Entrance -->
      <motion.div 
        v-if="messages.length === 0" 
        class="welcome-message"
        :initial="{ opacity: 0, y: 50 }"
        :animate="{ opacity: 1, y: 0 }"
        :transition="{ type: 'spring', stiffness: 100 }"
      >
        <div class="welcome-title">
          <span class="welcome-icon">✦</span>
          Welcome to DawntasyAI
          <span class="welcome-icon">✦</span>
        </div>
        <p class="welcome-text">
          Your gateway to the Dawntasy universe. Ask me anything about "Time's True Name",
          or just chat about whatever's on your mind!
        </p>
        <div class="suggestion-chips">
          <motion.button 
            v-for="suggestion in suggestions" 
            :key="suggestion"
            class="suggestion-chip"
            @click="sendMessage(suggestion)"
            :initial="{ opacity: 0, scale: 0.8 }"
            :animate="{ opacity: 1, scale: 1 }"
            :whileHover="{ scale: 1.1 }"
            :whileTap="{ scale: 0.9 }"
          >
            {{ suggestion }}
          </motion.button>
        </div>
      </motion.div>
      
      <!-- Message Bubbles with Quantum Animations -->
      <TransitionGroup 
        name="cosmic-message"
        tag="div"
        class="message-list"
      >
        <motion.div 
          v-for="(message, index) in messages"
          :key="index"
          class="message-bubble"
          :class="{ 'user': message.role === 'user', 'assistant': message.role === 'assistant' }"
          :initial="{ 
            opacity: 0, 
            x: message.role === 'user' ? 50 : -50 
          }"
          :animate="{ 
            opacity: 1, 
            x: 0,
            transition: { 
              type: 'spring', 
              stiffness: 300, 
              damping: 20 
            }
          }"
          :exit="{ 
            opacity: 0, 
            scale: 0.8,
            transition: { duration: 0.3 }
          }"
        >
          <!-- User Avatar -->
          <div v-if="message.role === 'user'" class="avatar user-avatar">
            <span class="avatar-letter">{{ userInitial }}</span>
          </div>
          
          <!-- Assistant Avatar -->
          <div v-else class="avatar assistant-avatar">
            <motion.div 
              class="assistant-avatar-inner"
              :animate="{
                rotate: [0, 5, -5, 0],
                transition: { 
                  repeat: Infinity, 
                  duration: 2,
                  type: 'tween'
                }
              }"
            >
              <span class="cosmic-symbol">⟁</span>
            </motion.div>
          </div>
          
          <!-- Message Content -->
          <div class="message-content">
            <div class="message-sender">
              {{ message.role === 'user' ? authStore.displayName : 'DawntasyAI' }}
            </div>
            <div 
              class="message-text" 
              v-html="formatMessage(message.content)"
            ></div>
            <div class="message-time">{{ formatTime(message.timestamp) }}</div>
          </div>
        </motion.div>
      </TransitionGroup>
      
      <!-- Thinking Indicator with Quantum Pulse -->
      <motion.div 
        v-if="isLoading"
        class="thinking-indicator"
        :animate="{ 
          scale: [1, 1.2, 1],
          opacity: [0.6, 1, 0.6],
          transition: { 
            repeat: Infinity, 
            duration: 1.5 
          }
        }"
      >
        <div class="cosmic-thinking">
          <motion.div 
            v-for="n in 3" 
            :key="n"
            class="dot"
            :animate="{
              scale: [0.5, 1.2, 0.5],
              backgroundColor: ['#8B5CF6', '#FF6B6B', '#4ECDC4'],
              transition: { 
                repeat: Infinity, 
                duration: 1.2,
                delay: n * 0.2
              }
            }"
          ></motion.div>
        </div>
        <div class="thinking-text">Consulting The Rift...</div>
      </motion.div>
    </motion.div>
    
    <!-- Input Area with Energy Field -->
    <motion.div 
      class="input-container"
      :initial="{ y: 50, opacity: 0 }"
      :animate="{ y: 0, opacity: 1 }"
      :transition="{ 
        type: 'spring', 
        stiffness: 100 
      }"
    >
      <motion.textarea 
        ref="inputField"
        v-model="userInput"
        @keydown.enter.prevent="onEnterPress"
        placeholder="Enter your message..."
        class="message-input"
        :disabled="isLoading"
        :initial="{ boxShadow: '0 0 0 transparent' }"
        :animate="userInput.length > 0 ? {
          boxShadow: '0 0 15px rgba(139, 92, 246, 0.5)',
          borderColor: '#8B5CF6'
        } : {}"
        :transition="{ duration: 0.3 }"
      />
      <motion.button 
        class="send-button" 
        @click="sendMessage()"
        :disabled="!canSend || isLoading"
        :initial="{ scale: 1 }"
        :whileHover="{ scale: 1.1, rotate: [0, 5, -5, 0] }"
        :whileTap="{ scale: 0.9 }"
      >
        <span class="send-icon">➔</span>
      </motion.button>
    </motion.div>
  </motion.div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, nextTick } from 'vue';
import { motion, AnimatePresence } from 'framer-motion';
import { marked } from 'marked';
import { useAuthStore } from '@/store/auth';
import { useOpenAI } from '@/services/openaiService';
import { format } from 'date-fns';
import hljs from 'highlight.js';
import gsap from 'gsap';
import anime from 'animejs';

// Initialize services
const authStore = useAuthStore();
const openai = useOpenAI();

// Refs
const inputField = ref<HTMLTextAreaElement | null>(null);
const messagesContainer = ref<HTMLDivElement | null>(null);
const userInput = ref('');
const isLoading = ref(false);
const messages = ref<Array<{
  role: 'user' | 'assistant',
  content: string,
  timestamp: number
}>>([]);

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

// Computed values
const userInitial = computed(() => {
  return authStore.displayName?.charAt(0).toUpperCase() || 'U';
});

const canSend = computed(() => userInput.value.trim().length > 0);

// Methods
const setMode = (newMode: 'default' | 'archmage' | 'creative') => {
  if (newMode !== 'default') {
    const plan = authStore.userProfile?.plan;
    if (plan === 'free') {
      alert('This mode is available with premium plans only. Upgrade to access advanced AI modes!');
      return;
    }
  }
  
  mode.value = newMode;
};

const formatMessage = (content: string) => {
  let html = marked(content, {
    gfm: true,
    breaks: true,
    highlight: function(code, lang) {
      if (lang && hljs.getLanguage(lang)) {
        return hljs.highlight(code, { language: lang }).value;
      }
      return hljs.highlightAuto(code).value;
    }
  });
  
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
  if (!e.ctrlKey && !e.shiftKey) {
    sendMessage();
  }
};

const scrollToBottom = async () => {
  await nextTick();
  if (messagesContainer.value) {
    messagesContainer.value.scrollTop = messagesContainer.value.scrollHeight;
  }
};

const sendMessage = async (text?: string) => {
  const messageText = text || userInput.value.trim();
  if (!messageText) return;
  
  messages.value.push({
    role: 'user',
    content: messageText,
    timestamp: Date.now()
  });
  
  userInput.value = '';
  
  await scrollToBottom();
  
  isLoading.value = true;
  
  try {
    const chatHistory = messages.value.map(msg => ({
      role: msg.role,
      content: msg.content
    }));
    
    let assistantResponse = '';
    
    await openai.streamCompletion(
      messageText,
      chatHistory.slice(0, -1),
      {
        mode: mode.value,
        temperature: 0.7,
        maxTokens: 1500,
        onChunk: (chunk) => {
          assistantResponse += chunk;
          
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
          
          scrollToBottom();
        }
      }
    );
    
    await openai.recordChatInteraction(
      messages.value.map(msg => ({
        role: msg.role,
        content: msg.content
      }))
    );
  } catch (error) {
    console.error('Error sending message:', error);
    
    messages.value.push({
      role: 'assistant',
      content: "I'm having trouble connecting to The Rift right now. Please try again in a moment.",
      timestamp: Date.now()
    });
  } finally {
    isLoading.value = false;
    scrollToBottom();
  }
};

// Advanced Animation Lifecycle Hooks
const animateMessageEntrance = (el: HTMLElement) => {
  gsap.fromTo(el, 
    { opacity: 0, y: 50 },
    { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out' }
  );
};

const createParticleEffect = (element: HTMLElement) => {
  anime({
    targets: element,
    translateX: [-10, 10],
    translateY: [-5, 5],
    rotate: [-5, 5],
    duration: 800,
    easing: 'easeInOutQuad'
  });
};

// Focus input on mount
onMounted(() => {
  inputField.value?.focus();
});
</script>

<style lang="scss" scoped>
// Existing styles with additional quantum animations
.cosmic-message-enter-active,
.cosmic-message-leave-active {
  transition: all 0.5s cubic-bezier(0.55, 0.085, 0.68, 0.53);
}

.cosmic-message-enter-from,
.cosmic-message-leave-to {
  opacity: 0;
  transform: translateX(50px);
}

// Rest of the existing styles...
</style>