<template>
  <section class="ai-component">
    <canvas id="starfield"></canvas>
    <div class="content-wrapper">
      <h1 class="title">✨ DawntasyAI Cosmic Assistant ✨</h1>
      <section class="chat-container">
        <div class="messages" ref="messageContainer">
          <article v-for="(message, index) in messages" :key="index" 
                   :class="['message', message.sender, { 'fade-in': message.animate }]">
            <div class="message-content">{{ message.text }}</div>
          </article>
          <div v-if="isTyping" class="typing-indicator fade-in">
            DawntasyAI is typing<span class="dot one"></span><span class="dot two"></span><span class="dot three"></span>
          </div>
        </div>
        <div class="input-area">
          <input v-model="userInput" @keyup.enter="sendMessage"
                 placeholder="Ask the cosmos..." class="user-input" />
          <button @click="sendMessage" class="send-button">
            <i class="fas fa-paper-plane"></i>
          </button>
        </div>
      </section>
    </div>
  </section>
</template>
<script>
export default {
  name: 'AIComponent',
  data() {
    return {
      messages: [],
      userInput: '',
      isTyping: false,
    };
  },
  methods: {
    sendMessage() {
      if (this.userInput.trim()) {
        this.addMessage('user', this.userInput);
        this.generateAIResponse(this.userInput);
        this.userInput = '';
      }
    },
    addMessage(sender, text) {
      this.messages.push({ sender, text, animate: true });
      this.$nextTick(() => {
        this.$refs.messageContainer.scrollTop = this.$refs.messageContainer.scrollHeight;
      });
    },
    generateAIResponse(userInput) {
      this.isTyping = true;
      setTimeout(() => {
        const aiResponse = `Cosmic wisdom: ${userInput.split('').reverse().join('')}`;
        this.addMessage('ai', aiResponse);
        this.isTyping = false;
      }, 1000);
    },
    initStarfield() {
      const canvas = document.getElementById('starfield');
      const context = canvas.getContext('2d');
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;

      const stars = Array(500).fill().map(() => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 1.2,
      }));

      function animate() {
        context.clearRect(0, 0, canvas.width, canvas.height);
        context.fillStyle = '#ffffff';
        stars.forEach(star => {
          context.beginPath();
          context.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
          context.fill();
        });
        requestAnimationFrame(animate);
      }
      animate();
    }
  },
  mounted() {
    this.addMessage('ai', 'Greetings, cosmic traveler! How may I assist you on your celestial journey?');
    this.initStarfield();
  }
}
</script>
<style scoped>
@import 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css';

.ai-component {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  font-family: 'Orbitron', sans-serif;
  overflow: hidden;
}

#starfield {
  position: absolute;
  top: 0; left: 0; width: 100%; height: 100%;
  background: black;
}

.content-wrapper {
  background: rgba(15, 23, 42, 0.85);
  border-radius: 20px;
  padding: 2rem;
  width: 90%;
  max-width: 800px;
  box-shadow: 0 0 20px rgba(66, 220, 219, 0.5);
  backdrop-filter: blur(10px);
}

.title {
  color: #42dcdb;
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
  text-shadow: 0 0 10px rgba(66, 220, 219, 0.7);
}

.chat-container {
  background: rgba(30, 41, 59, 0.7);
  border-radius: 15px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
}

.messages {
  height: 400px;
  overflow-y: auto;
  padding: 1rem;
  display: flex;
  flex-direction: column;
}

.message {
  display: flex;
  padding: 0.75rem 1rem;
  border-radius: 10px;
  max-width: 80%;
  opacity: 0;
  transition: opacity 0.5s ease, transform 0.5s ease;
}

.message.fade-in {
  opacity: 1;
  transform: translateY(0);
}

.user {
  background: rgba(66, 220, 219, 0.3);
  color: #fff;
  align-self: flex-end;
  transform: translateY(20px);
}

.ai {
  background: rgba(199, 210, 254, 0.3);
  color: #fff;
  align-self: flex-start;
  transform: translateY(20px);
}

.typing-indicator {
  color: #c7d2fe;
  margin-left: 1rem;
  font-style: italic;
}

.dot {
  animation: blink 1.5s infinite;
}

.one { animation-delay: 0.3s; }
.two { animation-delay: 0.6s; }
.three { animation-delay: 0.9s; }

@keyframes blink {
  0%, 100% { opacity: 0.2; }
  50% { opacity: 1; }
}

.input-area {
  display: flex;
  padding: 1rem;
  background: rgba(30, 41, 59, 0.8);
}

.user-input {
  flex: 1;
  background: rgba(51, 65, 85, 0.8);
  border: none;
  padding: 0.75rem;
  color: #fff;
  border-radius: 10px 0 0 10px;
  outline: none;
}

.send-button {
  background: #42dcdb;
  color: #1e293b;
  border: none;
  padding: 0.75rem 1.2rem;
  cursor: pointer;
  border-radius: 0 10px 10px 0;
  transition: background 0.3s ease;
}

.send-button:hover {
  background: #2cc9c8;
}
</style>