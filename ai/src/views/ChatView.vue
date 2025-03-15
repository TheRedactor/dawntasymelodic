<template>
  <div class="cosmic-chat" :class="{'dark-mode': darkMode}">
    <!-- Chat Sidebar -->
    <div class="chat-sidebar">
      <div class="user-profile">
        <img :src="user.photoURL" class="profile-image" v-if="user"/>
        <button @click="toggleDarkMode" class="theme-toggle">
          {{ darkMode ? '🌞' : '🌙' }}
        </button>
      </div>
      <button class="new-chat-btn" @click="createNewChat">
        🚀 New Chat
      </button>
      <div class="chat-history">
        <div v-for="chat in userChats" 
             :key="chat.id"
             class="chat-item"
             @click="loadChat(chat.id)">
          {{ chat.title || 'New Chat' }}
        </div>
      </div>
    </div>

    <!-- Main Chat Area -->
    <div class="chat-main">
      <div class="messages-container" ref="messagesContainer">
        <transition-group name="message-fade">
          <div v-for="message in currentMessages" 
               :key="message.id"
               class="message-card"
               :class="{'user-message': message.role === 'user'}">
            <div class="message-header">
              <img v-if="message.role === 'user'" 
                   :src="user.photoURL" 
                   class="message-avatar"/>
              <div class="ai-avatar" v-else>🌌</div>
              <span class="username">{{ message.role === 'user' ? user.displayName : 'Dawntasy AI' }}</span>
            </div>
            <div class="message-content">
              <MarkdownRenderer :content="message.content"/>
            </div>
          </div>
        </transition-group>
        
        <div v-if="isLoading" class="loading-indicator">
          <div class="quantum-loader"></div>
          <div class="typing-indicator">
            <div class="pulse-dot"></div>
            <div class="pulse-dot"></div>
            <div class="pulse-dot"></div>
          </div>
        </div>
      </div>

      <!-- Message Input Area -->
      <div class="message-input-area">
        <div class="tools-row">
          <button class="tool-btn" @click="toggleTools">
            <span class="tool-icon">🛠️</span>
          </button>
          <input type="file" 
                 @change="handleFileUpload" 
                 class="file-input"
                 ref="fileInput"/>
        </div>
        
        <div class="input-wrapper">
          <textarea v-model="userMessage"
                    @keydown.enter.exact.prevent="sendMessage"
                    placeholder="Ask me anything..."
                    class="message-textarea"
                    ref="textarea"
                    rows="1"></textarea>
          <button @click="sendMessage" 
                  class="send-btn"
                  :disabled="isLoading">
            ➤
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, watch, nextTick, onMounted } from 'vue'
import { db, auth } from '@/firebase/init'
import { collection, query, where, getDocs, addDoc, doc, getDoc } from 'firebase/firestore'
import { useUserStore } from '@/store/user'
import MarkdownRenderer from '@/components/MarkdownRenderer.vue'

const userStore = useUserStore()
const user = computed(() => userStore.user)

// Firebase Data
const userChats = ref([])
const currentChat = ref(null)
const currentMessages = ref([])

// OpenAI Configuration
const isLoading = ref(false)
const userMessage = ref('')
const darkMode = ref(false)

// DOM Refs
const messagesContainer = ref(null)
const textarea = ref(null)

// Theme Handling
const toggleDarkMode = () => {
  darkMode.value = !darkMode.value
  localStorage.setItem('darkMode', darkMode.value)
}

// Chat Management
const createNewChat = async () => {
  try {
    const chatRef = await addDoc(collection(db, 'chats'), {
      userId: user.value.uid,
      createdAt: new Date(),
      title: 'New Chat'
    })
    currentChat.value = chatRef.id
    currentMessages.value = []
  } catch (error) {
    console.error('Error creating chat:', error)
  }
}

const loadChat = async (chatId) => {
  try {
    const chatDoc = await getDoc(doc(db, 'chats', chatId))
    const messagesQuery = query(collection(db, 'messages'), 
      where('chatId', '==', chatId))
    const messagesSnapshot = await getDocs(messagesQuery)
    
    currentChat.value = chatId
    currentMessages.value = messagesSnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }))
    
    scrollToBottom()
  } catch (error) {
    console.error('Error loading chat:', error)
  }
}

// OpenAI API Integration
const sendMessage = async () => {
  if (!userMessage.value.trim() || isLoading.value) return

  try {
    isLoading.value = true
    const userMessageData = {
      content: userMessage.value,
      role: 'user',
      timestamp: new Date(),
      chatId: currentChat.value
    }
    
    // Save user message to Firebase
    const userMsgRef = await addDoc(collection(db, 'messages'), userMessageData)
    currentMessages.value.push({ id: userMsgRef.id, ...userMessageData })
    
    // Generate AI response
    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${import.meta.env.VITE_OPENAI_API_KEY}`
      },
      body: JSON.stringify({
        model: "gpt-4",
        messages: [
          ...currentMessages.value
            .filter(m => m.role !== 'system')
            .map(m => ({ role: m.role, content: m.content })),
          { role: "user", content: userMessage.value }
        ],
        stream: true
      })
    })

    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`)
    
    const reader = response.body.getReader()
    const decoder = new TextDecoder()
    let aiMessage = { content: '', role: 'assistant' }
    
    while (true) {
      const { done, value } = await reader.read()
      if (done) break
      
      const chunk = decoder.decode(value)
      chunk.split('\n').forEach(line => {
        const message = line.replace(/^data: /, '')
        if (message === '[DONE]') return
        if (message) {
          try {
            const parsed = JSON.parse(message)
            aiMessage.content += parsed.choices[0].delta?.content || ''
          } catch (e) {
            console.error('Error parsing chunk:', e)
          }
        }
      })
      
      // Update message in real-time
      if (!currentMessages.value.find(m => m.role === 'assistant' && !m.id)) {
        currentMessages.value.push(aiMessage)
      }
      scrollToBottom()
    }

    // Save final AI response to Firebase
    const aiMsgRef = await addDoc(collection(db, 'messages'), {
      ...aiMessage,
      timestamp: new Date(),
      chatId: currentChat.value
    })
    aiMessage.id = aiMsgRef.id
  } catch (error) {
    console.error('API Error:', error)
    // Auto-retry logic here
  } finally {
    isLoading.value = false
    userMessage.value = ''
    scrollToBottom()
  }
}

// Scroll Handling
const scrollToBottom = () => {
  nextTick(() => {
    if (messagesContainer.value) {
      messagesContainer.value.scrollTo({
        top: messagesContainer.value.scrollHeight,
        behavior: 'smooth'
      })
    }
  })
}

// Initial Setup
onMounted(async () => {
  darkMode.value = localStorage.getItem('darkMode') === 'true'
  if (user.value) {
    const chatsQuery = query(collection(db, 'chats'), 
      where('userId', '==', user.value.uid))
    const querySnapshot = await getDocs(chatsQuery)
    userChats.value = querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }))
  }
})
</script>

<style scoped>
/* Cosmic Theme Variables */
:root {
  --cosmic-primary: #2A2356;
  --star-dust: #E0DAF8;
  --nebula-purple: #7B61FF;
  --dark-matter: #0A0815;
  --supernova: #FFD700;
}

.dark-mode {
  --cosmic-primary: #0A0815;
  --star-dust: #C0B3F0;
  --nebula-purple: #9D8AFF;
  --dark-matter: #1A1730;
  --supernova: #FFE55C;
}

.cosmic-chat {
  display: flex;
  height: 100vh;
  background: var(--dark-matter);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

/* Chat Sidebar Styles */
.chat-sidebar {
  width: 260px;
  background: var(--cosmic-primary);
  padding: 1.5rem;
  border-right: 1px solid rgba(255,255,255,0.1);
}

.new-chat-btn {
  width: 100%;
  padding: 12px;
  background: var(--nebula-purple);
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: transform 0.2s;
}

/* Message Card Animations */
.message-fade-enter-active,
.message-fade-leave-active {
  transition: all 0.4s ease;
}
.message-fade-enter-from,
.message-fade-leave-to {
  opacity: 0;
  transform: translateY(20px);
}

/* Quantum Loader Animation */
@keyframes quantum-pulse {
  0% { transform: scale(0.95); opacity: 0.7; }
  50% { transform: scale(1.05); opacity: 1; }
  100% { transform: scale(0.95); opacity: 0.7; }
}

.quantum-loader {
  width: 40px;
  height: 40px;
  background: var(--nebula-purple);
  border-radius: 50%;
  animation: quantum-pulse 1.5s infinite;
}

/* Typing Indicator */
.typing-indicator {
  display: flex;
  gap: 6px;
}

.pulse-dot {
  width: 8px;
  height: 8px;
  background: var(--supernova);
  border-radius: 50%;
  animation: pulse 1.4s infinite;
}

@keyframes pulse {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.2); }
}

/* Message Input Area */
.message-input-area {
  position: relative;
  padding: 1.5rem;
  background: var(--cosmic-primary);
  border-top: 1px solid rgba(255,255,255,0.1);
}

.message-textarea {
  width: 100%;
  background: var(--dark-matter);
  color: var(--star-dust);
  border: 1px solid var(--nebula-purple);
  border-radius: 12px;
  padding: 1rem;
  resize: none;
  transition: all 0.3s;
}

.send-btn {
  position: absolute;
  right: 30px;
  bottom: 30px;
  background: var(--nebula-purple);
  color: white;
  border: none;
  border-radius: 8px;
  padding: 8px 16px;
  cursor: pointer;
  transition: transform 0.2s;
}

/* Add remaining styles for full cosmic effect... */
</style>