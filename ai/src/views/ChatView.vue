<template>
  <div class="chat-container">
    <div class="chat-messages" ref="chatMessages">
      <div v-for="message in messages" :key="message.id" class="message" :class="{ 'sent': message.sentByUser }">
        <span>{{ message.username }}: </span>
        <span>{{ message.content }}</span>
      </div>
    </div>
    <div class="chat-input">
      <input v-model="newMessage" @keyup.enter="sendMessage" placeholder="Type your message..." />
      <button @click="sendMessage">Send</button>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { getAuth } from 'firebase/auth';
import { getFirestore, collection, addDoc, onSnapshot } from 'firebase/firestore';
import axios from 'axios';

const messages = ref([]);
const newMessage = ref('');
const auth = getAuth();
const db = getFirestore();

// Firebase Authentication
const user = auth.currentUser;
const username = user ? user.displayName : 'Guest';

// Fetch messages from Firebase
onMounted(() => {
  const chatCollection = collection(db, 'chats');
  onSnapshot(chatCollection, (snapshot) => {
    messages.value = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    scrollToBottom();
  });
});

// Send message
const sendMessage = async () => {
  if (!newMessage.value.trim()) return;

  // Add message to Firestore
  await addDoc(collection(db, 'chats'), {
    username,
    content: newMessage.value,
    sentByUser: true
  });

  // Clear input
  newMessage.value = '';

  // API call to OpenAI
  try {
    const response = await axios.post('https://api.openai.com/v1/chat/completions', {
      headers: {
        'Authorization': `Bearer ${import.meta.env.VITE_OPENAI_API_KEY}`,
        'Content-Type': 'application/json'
      },
      data: {
        model: 'gpt-3.5-turbo',
        messages: [{ role: 'user', content: newMessage.value }],
        max_tokens: 150
      }
    });

    // Add AI response to Firestore
    await addDoc(collection(db, 'chats'), {
      username: 'AI',
      content: response.data.choices[0].message.content,
      sentByUser: false
    });
  } catch (error) {
    console.error('Error sending message:', error);
  }
};

// Scroll to the bottom of the chat
const scrollToBottom = () => {
  const chatMessages = ref('chatMessages');
  chatMessages.value.scrollTop = chatMessages.value.scrollHeight;
};
</script>

<style scoped>
.chat-container {
  display: flex;
  flex-direction: column;
  height: 100vh;
  background: linear-gradient(135deg, #6e8efb, #a777e3);
  font-family: Arial, sans-serif;
}
.chat-messages {
  flex-grow: 1;
  overflow-y: auto;
  padding: 20px;
}
.message {
  margin-bottom: 10px;
  padding: 10px;
  border-radius: 5px;
  background-color: white;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}
.message.sent {
  background-color: #e0ffe0;
  text-align: right;
}
.chat-input {
  display: flex;
  padding: 10px;
  border-top: 1px solid #ccc;
}
.chat-input input {
  flex-grow: 1;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-right: 10px;
}
.chat-input button {
  padding: 10px;
  background-color: #6e8efb;
  border: none;
  border-radius: 5px;
  color: white;
  cursor: pointer;
  transition: background-color 0.3s ease;
}
.chat-input button:hover {
  background-color: #a777e3;
}
</style>