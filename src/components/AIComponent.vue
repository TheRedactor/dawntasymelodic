<template>
  <section class="ai-component">
    <canvas id="starfield" ref="starfieldCanvas"></canvas>
    <div class="content-wrapper">
      <h1 class="title">✨ DawntasyAI Cosmic Assistant ✨</h1>
      <section class="chat-container">
        <div class="messages" ref="messageContainer">
          <article v-for="(message, index) in messages" :key="index" 
                  :class="['message', message.sender, { 'fade-in': message.animate }]">
            <div class="message-content" v-html="formatMessage(message.text)"></div>
          </article>
          <div v-if="isTyping" class="typing-indicator fade-in">
            DawntasyAI is thinking<span class="dot one">.</span><span class="dot two">.</span><span class="dot three">.</span>
          </div>
        </div>
        <div class="input-area">
          <input v-model="userInput" @keyup.enter="sendMessage"
                placeholder="Ask the cosmos..." class="user-input" />
          <button @click="sendMessage" class="send-button" :disabled="isTyping">
            <i class="fas fa-paper-plane"></i>
          </button>
        </div>
      </section>
    </div>

    <!-- Cosmic particles for enhanced visual effect -->
    <div class="cosmic-particles"></div>
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
      starfield: null,
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
        if (this.$refs.messageContainer) {
          this.$refs.messageContainer.scrollTop = this.$refs.messageContainer.scrollHeight;
        }
      });
    },
    generateAIResponse(userInput) {
      this.isTyping = true;
      
      // Simulate a more realistic typing delay based on response length
      const simulatedResponse = this.getAIResponse(userInput);
      const typingDelay = Math.min(Math.max(simulatedResponse.length * 15, 1000), 3000);
      
      setTimeout(() => {
        this.addMessage('ai', simulatedResponse);
        this.isTyping = false;
      }, typingDelay);
    },
    getAIResponse(input) {
      // Enhanced placeholder responses for more cosmic flavor
      const responses = [
        `The cosmic vibrations suggest: ${input.split('').reverse().join('')}`,
        `As the stars align, I perceive that ${input} relates to the fundamental cosmic harmony. Would you like to explore this further?`,
        `In the grand tapestry of the universe, your query about "${input}" touches on the celestial patterns of creation.`,
        `The nebulae whisper secrets about ${input} that few mortals comprehend. Let me translate their cosmic wisdom...`,
        `Your question resonates with the quantum fabric of reality. The answer lies in the intersection of ${input} and the cosmic consciousness.`
      ];
      return responses[Math.floor(Math.random() * responses.length)];
    },
    formatMessage(text) {
      // Convert URLs to clickable links
      return text.replace(/(https?:\/\/[^\s]+)/g, '<a href="$1" target="_blank" class="message-link">$1</a>');
    },
    initEnhancedStarfield() {
      const canvas = this.$refs.starfieldCanvas;
      if (!canvas) return;
      
      const context = canvas.getContext('2d');
      const resizeCanvas = () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
      };
      
      resizeCanvas();
      window.addEventListener('resize', resizeCanvas);
      
      // Create more realistic stars with different sizes and colors
      const stars = Array(700).fill().map(() => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 1.5 + 0.1,
        color: this.getRandomStarColor(),
        speed: Math.random() * 0.05,
        twinkleSpeed: 0.01 + Math.random() * 0.03,
        twinklePhase: Math.random() * Math.PI * 2,
        opacity: Math.random() * 0.5 + 0.5
      }));
      
      const animate = () => {
        context.clearRect(0, 0, canvas.width, canvas.height);
        
        stars.forEach(star => {
          // Move stars slightly for subtle animation
          star.y += star.speed;
          
          // Reset stars that move off screen
          if (star.y > canvas.height) {
            star.y = 0;
            star.x = Math.random() * canvas.width;
          }
          
          // Twinkle effect
          star.twinklePhase += star.twinkleSpeed;
          const twinkle = Math.sin(star.twinklePhase) * 0.5 + 0.5;
          
          // Draw star with color and opacity
          context.beginPath();
          context.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
          context.fillStyle = star.color;
          context.globalAlpha = star.opacity * twinkle;
          context.fill();
          context.globalAlpha = 1;
        });
        
        requestAnimationFrame(animate);
      };
      
      animate();
    },
    getRandomStarColor() {
      const colors = [
        '#ffffff', // White
        '#fffaf0', // Snow
        '#eee8aa', // Pale gold
        '#87cefa', // Light blue
        '#e6e6fa', // Lavender
        '#ffe4e1'  // Misty rose
      ];
      return colors[Math.floor(Math.random() * colors.length)];
    }
  },
  mounted() {
    this.addMessage('ai', 'Greetings, cosmic traveler! How may I assist you on your celestial journey through the Dawntasy universe?');
    this.$nextTick(() => {
      this.initEnhancedStarfield();
    });
  },
  beforeUnmount() {
    // Clean up event listeners
    window.removeEventListener('resize', this.resizeCanvas);
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
  background: linear-gradient(to bottom, #000000, #0f172a 70%, #1e1b4b);
}

.cosmic-particles {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: 
    radial-gradient(circle at 25% 25%, rgba(138, 43, 226, 0.07) 1%, transparent 5%),
    radial-gradient(circle at 75% 75%, rgba(66, 220, 219, 0.07) 1%, transparent 5%);
  background-size: 120px 120px;
  opacity: 0.8;
  animation: drift 60s linear infinite;
  pointer-events: none;
}

@keyframes drift {
  0% { background-position: 0 0; }
  100% { background-position: 120px 120px; }
}

.content-wrapper {
  background: rgba(15, 23, 42, 0.75);
  border-radius: 20px;
  padding: 2rem;
  width: 90%;
  max-width: 800px;
  box-shadow: 
    0 0 20px rgba(66, 220, 219, 0.3),
    0 0 40px rgba(138, 43, 226, 0.1);
  backdrop-filter: blur(10px);
  position: relative;
  z-index: 1;
  animation: float 6s ease-in-out infinite alternate;
  border: 1px solid rgba(66, 220, 219, 0.2);
}

@keyframes float {
  0% { transform: translateY