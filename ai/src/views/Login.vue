<template>
  <div class="sidebar-container" :class="{ expanded: isExpanded }">
    <!-- Close button for mobile -->
    <button v-if="isExpanded" @click="toggleSidebar" class="close-sidebar-btn">
      <i class="ri-close-line"></i>
    </button>

    <!-- Sidebar header with logo -->
    <div class="sidebar-header">
      <div class="sidebar-logo">
        <div class="logo-core"></div>
        <div class="logo-orbit"></div>
      </div>
      <h1 v-if="isExpanded" class="sidebar-title">DawntasyAI</h1>
    </div>

    <!-- New chat button -->
    <button @click="createNewChat" class="new-chat-btn">
      <i class="ri-add-line"></i>
      <span v-if="isExpanded">New Chat</span>
    </button>

    <!-- Chat list -->
    <div class="chats-container">
      <router-link
        v-for="chat in chats"
        :key="chat.id"
        :to="`/chat/${chat.id}`"
        class="chat-item"
        :class="{ active: activeChatId === chat.id }"
        :title="chat.title"
      >
        <i class="ri-chat-3-line chat-icon"></i>
        <span v-if="isExpanded" class="chat-title">{{ chat.title }}</span>
      </router-link>
      <div v-if="chats.length === 0" class="empty-chats">
        <i class="ri-chat-3-line empty-icon"></i>
        <span v-if="isExpanded" class="empty-text">No chats yet</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, watch } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { useChatStore } from '../store/chat';

// Props
const props = defineProps({
  activeRoute: {
    type: String,
    default: ''
  }
});

// Store references
const chatStore = useChatStore();
const route = useRoute();
const router = useRouter();

// State: Check localStorage for sidebar state; default to expanded if none set
const isExpanded = ref(localStorage.getItem('sidebar-expanded') === 'true' || true);

// Computed properties
const chats = computed(() => chatStore.sortedChats);
const activeChatId = computed(() => route.params.id);

// Methods
function toggleSidebar() {
  isExpanded.value = !isExpanded.value;
  localStorage.setItem('sidebar-expanded', isExpanded.value);
}

async function createNewChat() {
  try {
    const chatId = await chatStore.createChat();
    if (chatId) {
      router.push(`/chat/${chatId}`);
    }
  } catch (error) {
    console.error('Failed to create chat:', error);
  }
}

// Lifecycle hooks
onMounted(() => {
  // Fetch chats when component mounts
  chatStore.fetchChats();

  // For mobile: Close sidebar when navigating
  if (window.innerWidth < 768) {
    isExpanded.value = false;
  }
});

// Watch for route changes to close sidebar on mobile
watch(
  () => route.path,
  () => {
    if (window.innerWidth < 768) {
      isExpanded.value = false;
    }
  }
);
</script>

<style scoped>
/* Sidebar container */
.sidebar-container {
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  background: rgba(15, 23, 42, 0.95);
  backdrop-filter: blur(10px);
  display: flex;
  flex-direction: column;
  z-index: 50;
  width: 72px;
  transition: width 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  border-right: 1px solid rgba(139, 92, 246, 0.1);
  box-shadow: 5px 0 20px rgba(0, 0, 0, 0.2);
  overflow: hidden;
}

.sidebar-container.expanded {
  width: 260px;
}

/* Close button for mobile */
.close-sidebar-btn {
  position: absolute;
  top: 1rem;
  right: 1rem;
  width: 28px;
  height: 28px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.1);
  border: none;
  color: white;
  display: none;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 2;
}

@media (max-width: 768px) {
  .close-sidebar-btn {
    display: flex;
  }
}

/* Sidebar header */
.sidebar-header {
  padding: 1.5rem 1rem;
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
}

.sidebar-logo {
  position: relative;
  width: 40px;
  height: 40px;
  flex-shrink: 0;
}

.logo-core {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 16px;
  height: 16px;
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
  width: 30px;
  height: 30px;
  border: 2px solid #8b5cf6;
  border-radius: 50%;
  animation: orbitRotate 10s infinite linear;
}

.logo-orbit::before {
  content: '';
  position: absolute;
  width: 6px;
  height: 6px;
  background: #4cc9f0;
  border-radius: 50%;
  top: -3px;
  left: 50%;
  transform: translateX(-50%);
  box-shadow: 0 0 10px #4cc9f0;
}

@keyframes corePulse {
  0%, 100% {
    transform: translate(-50%, -50%) scale(1);
  }
  50% {
    transform: translate(-50%, -50%) scale(1.2);
  }
}

@keyframes orbitRotate {
  0% {
    transform: translate(-50%, -50%) rotate(0deg);
  }
  100% {
    transform: translate(-50%, -50%) rotate(360deg);
  }
}

.sidebar-title {
  font-size: 1.25rem;
  font-weight: 700;
  margin-left: 0.75rem;
  color: white;
  white-space: nowrap;
  background: linear-gradient(to right, #fff, #8b5cf6);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}

/* New chat button */
.new-chat-btn {
  margin: 0 0.75rem 1.5rem;
  padding: 0.625rem;
  border-radius: 0.5rem;
  border: none;
  background: #8b5cf6;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.2s ease;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
}

.new-chat-btn i {
  font-size: 1.25rem;
  margin-right: 0.5rem;
}

.sidebar-container:not(.expanded) .new-chat-btn i {
  margin-right: 0;
}

.new-chat-btn:hover {
  background: #9333ea;
  box-shadow: 0 4px 8px rgba(139, 92, 246, 0.5);
}

/* Chats container */
.chats-container {
  flex: 1;
  overflow-y: auto;
  padding: 0 0.75rem;
}

/* Hide scrollbar */
.chats-container::-webkit-scrollbar {
  width: 0px;
}

/* Chat items */
.chat-item {
  display: flex;
  align-items: center;
  padding: 0.75rem 0.5rem;
  border-radius: 0.5rem;
  margin-bottom: 0.5rem;
  color: rgba(255, 255, 255, 0.8);
  text-decoration: none;
  transition: all 0.2s ease;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.chat-item:hover {
  background: rgba(139, 92, 246, 0.1);
}

.chat-item.active {
  background: rgba(139, 92, 246, 0.2);
  color: white;
}

.chat-icon {
  font-size: 1.25rem;
  margin-right: 0.75rem;
  flex-shrink: 0;
}

.chat-title {
  flex: 1;
  overflow: hidden;
  text-overflow: ellipsis;
}

/* Empty chats state */
.empty-chats {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem 0;
  color: rgba(255, 255, 255, 0.4);
  text-align: center;
}

.empty-icon {
  font-size: 2rem;
  margin-bottom: 0.75rem;
}

.empty-text {
  font-size: 0.875rem;
}

/* Sidebar footer */
.sidebar-footer {
  padding: 1rem 0.75rem;
  border-top: 1px solid rgba(139, 92, 246, 0.1);
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.footer-link {
  display: flex;
  align-items: center;
  padding: 0.5rem;
  border-radius: 0.5rem;
  color: rgba(255, 255, 255, 0.7);
  text-decoration: none;
  transition: all 0.2s ease;
  background: none;
  border: none;
  font-size: 1rem;
  text-align: left;
  cursor: pointer;
}

.footer-link:hover {
  background: rgba(139, 92, 246, 0.1);
  color: white;
}

.footer-link i {
  font-size: 1.25rem;
  margin-right: 0.75rem;
}

.sidebar-container:not(.expanded) .footer-link i {
  margin-right: 0;
}

/* Toggle button specific styling */
.toggle-btn {
  color: rgba(255, 255, 255, 0.6);
}

/* Responsive styles */
@media (max-width: 768px) {
  .sidebar-container {
    transform: translateX(-100%);
  }
  .sidebar-container.expanded {
    width: 260px;
    transform: translateX(0);
  }
}
</style>
