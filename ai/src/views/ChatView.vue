<template>
  <div class="chat-container">
    <!-- Cosmic Particles Background -->
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

    <!-- Header - Similar to Claude's minimalist header -->
    <div class="chat-header">
      <div class="chat-title">
        <h1 class="title-text">{{ currentChat?.title || 'New Conversation' }}</h1>
        <span class="badge" :class="mode">{{ modes[mode] }}</span>
      </div>
      
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

    <!-- Messages Container - Claude-like message styling -->
    <div 
      ref="messagesContainer" 
      class="messages-container" 
      @scroll="handleScroll"
    >
      <!-- Welcome message for new chats -->
      <div v-if="!messages.length" class="welcome-message">
        <div class="welcome-icon">✨</div>
        <h2 class="welcome-title">Welcome to DawntasyAI</h2>
        <p class="welcome-text">
          I'm your personal AI assistant from the Dawntasy universe. How can I help you today?
        </p>
        
        <!-- Suggestion chips (similar to Claude) -->
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
      <transition-group name="message-transition" tag="div" class="message-list">
        <div 
          v-for="(message, index) in messages"
          :key="`msg-${index}`"
          class="message-bubble"
          :class="{ 'user': message.role === 'user', 'assistant': message.role === 'assistant' }"
        >
          <!-- User avatar (similar to Claude's minimal circle) -->
          <div v-if="message.role === 'user'" class="avatar user-avatar">
            <span class="avatar-letter">{{ userInitials }}</span>
            <div class="avatar-glow"></div>
          </div>
          
          <!-- AI avatar with cosmic styling -->
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
          
          <!-- Message content (Claude-like styling) -->
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
      
      <!-- Thinking indicator (similar to Claude's typing animation) -->
      <div v-if="isLoading" class="thinking-indicator">
        <div class="cosmic-thinking">
          <div class="dot dot-1"></div>
          <div class="dot dot-2"></div>
          <div class="dot dot-3"></div>
        </div>
        <div class="thinking-text">Thinking...</div>
      </div>
    </div>

    <!-- Scroll to bottom button (similar to Claude's) -->
    <div 
      v-if="showScrollIndicator" 
      class="scroll-indicator"
      @click="scrollToBottom"
    >
      <i class="ri-arrow-down-line"></i>
      <div class="scroll-pulse"></div>
    </div>

    <!-- Input container (similar to Claude's clean textarea) -->
    <div class="input-container">
      <textarea 
        ref="inputField"
        v-model="userInput"
        @keydown.enter.exact.prevent="sendMessage"
        @input="resizeTextarea"
        placeholder="Send a message..."
        class="message-input"
        :disabled="isLoading"
      ></textarea>
      
      <!-- Input energy field effect -->
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
      
      <!-- Send button (similar to Claude's) -->
      <button 
        class="send-button" 
        @click="sendMessage()"
        :disabled="!canSend || isLoading"
      >
        <span class="send-icon">→</span>
        <div class="button-pulse"></div>
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, watch, nextTick } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { useAuthStore } from '@/store/auth';
import { useChatStore } from '@/store/chat';
import { format } from 'date-fns';
import markdownit from 'markdown-it';
import markdownitHighlight from 'markdown-it-highlightjs';

// Import stores
const authStore = useAuthStore();
const chatStore = useChatStore();
const route = useRoute();
const router = useRouter();

// State
const userInput = ref('');
const isLoading = ref(false);
const showScrollIndicator = ref(false);
const messagesContainer = ref<HTMLElement | null>(null);
const inputField = ref<HTMLTextAreaElement | null>(null);
const mode = ref('default');

// Modes available (similar to Claude's models)
const modes = {
  default: 'Balanced',
  creative: 'Creative',
  archmage: 'ARCHMAGE'
};

// Sample suggestions (similar to Claude's conversation starters)
const suggestions = [
  "Tell me about the Dawntasy universe",
  "How does The Rift work in Dawntasy?",
  "Write a short story set in Bear Village",
  "Explain the Plain and Pale Clock concept", 
  "What can you help me with today?"
];

// Computed properties
const messages = computed(() => chatStore.currentChat?.messages || []);
const currentChat = computed(() => chatStore.currentChat);
const canSend = computed(() => userInput.value.trim().length > 0);
const userInitials = computed(() => {
  const name = authStore.displayName || '';
  if (!name) return '?';
  
  const parts = name.split(' ');
  if (parts.length === 1) return parts[0].charAt(0).toUpperCase();
  return (parts[0].charAt(0) + parts[parts.length - 1].charAt(0)).toUpperCase();
});

// Markdown parser
const md = markdownit({
  html: false,
  linkify: true,
  typographer: true
}).use(markdownitHighlight);

// Helper functions
const formatMessage = (content: string) => {
  // Handle markdown
  let html = md.render(content);
  
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

const formatTime = (timestamp: Date | number) => {
  if (!timestamp) return '';
  return format(new Date(timestamp), 'h:mm a');
};

// UI interaction methods
const resizeTextarea = () => {
  if (inputField.value) {
    inputField.value.style.height = 'auto';
    inputField.value.style.height = `${Math.min(inputField.value.scrollHeight, 150)}px`;
  }
};

const scrollToBottom = (animate = true) => {
  nextTick(() => {
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
  });
};

const handleScroll = () => {
  if (!messagesContainer.value) return;
  
  const { scrollTop, scrollHeight, clientHeight } = messagesContainer.value;
  const isNearBottom = scrollHeight - scrollTop - clientHeight < 100;
  
  showScrollIndicator.value = !isNearBottom && messages.value.length > 0;
};

// Chat functionality
const setMode = (newMode: string) => {
  mode.value = newMode;
};

const sendMessage = async (text?: string) => {
  const messageText = text || userInput.value.trim();
  if (!messageText || isLoading.value) return;
  
  // Clear input and reset height
  userInput.value = '';
  if (inputField.value) {
    inputField.value.style.height = 'auto';
  }
  
  // Send the message
  await chatStore.sendMessage(messageText);
  
  // Scroll to bottom
  scrollToBottom();
};

// Lifecycle hooks
onMounted(async () => {
  // Focus input field
  if (inputField.value) {
    inputField.value.focus();
  }
  
  // If chat ID provided, load that chat
  const chatId = route.params.id as string;
  if (chatId && chatId !== 'new') {
    await chatStore.fetchChat(chatId);
  } 
  // If no chat exists or explicitly new chat, create one
  else if (chatId === 'new' || !chatStore.currentChat) {
    const newChatId = await chatStore.createChat();
    if (newChatId && chatId !== 'new') {
      router.replace(`/chat/${newChatId}`);
    }
  }
  
  // Scroll to bottom of messages
  scrollToBottom(false);
});

// Watch for changes in messages to scroll to bottom
watch(messages, () => {
  scrollToBottom();
}, { deep: true });

// Watch for changes in route to load different chats
watch(() => route.params.id, async (newId) => {
  if (newId && newId !== 'new') {
    await chatStore.fetchChat(newId as string);
  } else if (newId === 'new') {
    const newChatId = await chatStore.createChat();
    if (newChatId) {
      router.replace(`/chat/${newChatId}`);
    }
  }
});
</script>

<style scoped>
@import '../../ChatView.scss';
</style>