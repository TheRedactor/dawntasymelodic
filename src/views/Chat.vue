<template>
  <div class="flex flex-col h-screen bg-gradient-to-b from-cosmic-dark to-gray-900">
    <!-- Chat Header -->
    <header class="bg-cosmic-dark text-white shadow-lg px-6 py-3 flex items-center justify-between">
      <button @click="goBack" class="text-gray-300 hover:text-white transition-all duration-300">
        <i class="ri-arrow-left-line text-3xl cosmic-glow"></i>
      </button>
      <h1 class="text-2xl font-display font-extrabold cosmic-glow">
        {{ currentChat?.title || "New Conversation" }}
      </h1>
    </header>

    <!-- Chat Messages -->
    <div ref="chatContainer" class="flex-1 overflow-y-auto px-6 py-4 space-y-4">
      <TransitionGroup name="fade" tag="div">
        <div
          v-for="(message, index) in currentChat?.messages"
          :key="index"
          class="flex"
          :class="{ 'justify-end': message.role === 'user', 'justify-start': message.role === 'assistant' }"
        >
          <div
            class="max-w-[75%] p-4 rounded-lg shadow-md transition-all duration-300"
            :class="message.role === 'user'
              ? 'bg-cosmic-accent text-white shadow-cosmic-glow'
              : 'bg-gray-200 dark:bg-cosmic-light text-gray-900 shadow-md hover:scale-[1.02] hover:shadow-lg'"
          >
            <p class="text-lg leading-relaxed">{{ message.content }}</p>
            <span class="text-xs opacity-75 block mt-1">{{ formatTimestamp(message.timestamp) }}</span>
          </div>
        </div>
      </TransitionGroup>

      <!-- Typing Indicator -->
      <div v-if="isTyping" class="flex items-center gap-2 animate-fade-in">
        <div class="p-3 bg-gray-200 dark:bg-cosmic-light text-gray-800 rounded-lg shadow-md">
          <span class="text-sm flex items-center">
            DawntasyAI is typing <span class="dot one"></span><span class="dot two"></span><span class="dot three"></span>
          </span>
        </div>
      </div>
    </div>

    <!-- Chat Input -->
    <div class="bg-gray-100 dark:bg-cosmic-light p-4 flex items-center border-t border-gray-300 dark:border-gray-700">
      <input
        v-model="newMessage"
        @keydown.enter="sendMessage"
        placeholder="Type a message..."
        class="flex-1 px-4 py-2 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white shadow-md focus:outline-none transition-all duration-200"
      />
      <button @click="sendMessage" class="ml-3 p-3 rounded-full bg-cosmic-accent text-white shadow-md hover:scale-110 transition-all duration-200">
        <i class="ri-send-plane-2-line text-2xl"></i>
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, watch, nextTick } from "vue";
import { useRouter, useRoute } from "vue-router";
import { useChatStore } from "../stores/chat";
import { Timestamp } from "firebase/firestore";
import { useAuthStore } from "../stores/auth";

// Stores & Router
const chatStore = useChatStore();
const authStore = useAuthStore();
const router = useRouter();
const route = useRoute();

// Chat State
const currentChat = ref(chatStore.currentChat);
const newMessage = ref("");
const isTyping = ref(false);
const chatContainer = ref<HTMLElement | null>(null);

// Scroll to bottom on new messages smoothly
watch(
  () => currentChat.value?.messages.length,
  async () => {
    await nextTick();
    if (chatContainer.value) {
      chatContainer.value.scrollTo({ top: chatContainer.value.scrollHeight, behavior: "smooth" });
    }
  },
  { deep: true }
);

// Fetch chat data
onMounted(async () => {
  const chatId = route.params.id as string;
  await chatStore.fetchChat(chatId);
  currentChat.value = chatStore.currentChat;
});

// Send Message with OpenAI Streaming Response
async function sendMessage() {
  if (!newMessage.value.trim()) return;

  const content = newMessage.value.trim();
  newMessage.value = "";
  isTyping.value = true;

  // Add user message to Firestore
  await chatStore.sendMessage(content);

  // AI response streaming - letter by letter effect
  let aiResponse = "";
  const stream = await chatStore.streamChatResponse(content, currentChat.value?.messages || []);

  for await (const chunk of stream) {
    aiResponse += chunk;
    currentChat.value?.messages.push({
      role: "assistant",
      content: aiResponse,
      timestamp: new Date(),
    });
  }

  // Save final AI response
  await chatStore.sendMessage(aiResponse);
  isTyping.value = false;
}

// Format Timestamp
function formatTimestamp(timestamp: Timestamp | Date) {
  return timestamp instanceof Timestamp
    ? timestamp.toDate().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
    : new Date(timestamp).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
}

// Go Back to Chats List
function goBack() {
  router.push("/chats");
}
</script>

<style scoped>
/* Typing dots animation */
.dot {
  display: inline-block;
  width: 6px;
  height: 6px;
  margin-left: 3px;
  background-color: #333;
  border-radius: 50%;
  animation: typing 1.5s infinite;
}

.one { animation-delay: 0s; }
.two { animation-delay: 0.2s; }
.three { animation-delay: 0.4s; }

@keyframes typing {
  0%, 100% { opacity: 0.3; transform: translateY(0); }
  50% { opacity: 1; transform: translateY(-3px); }
}

/* Smooth fade animations */
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}

/* Glowing Effects */
.cosmic-glow {
  text-shadow: 0 0 10px rgba(139, 92, 246, 0.9);
}

.shadow-cosmic-glow {
  box-shadow: 0 0 10px rgba(139, 92, 246, 0.8);
}
</style>