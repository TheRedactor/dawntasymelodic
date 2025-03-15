<template>
    <div class="chat-toolbar-input-container" :class="{ 'is-typing': isTyping }">
      <!-- Main input area -->
      <div class="input-wrapper" :class="{ 'active': isFocused }">
        <textarea
          ref="messageInput"
          v-model="message"
          placeholder="Ask DawntasyAI anything..."
          @focus="isFocused = true"
          @blur="isFocused = false"
          @keydown.enter.prevent="handleEnterPress"
          @input="autoResize"
          :disabled="isTyping"
        ></textarea>
        
        <!-- Send button - Always visible -->
        <button 
          class="send-button" 
          @click="sendMessage" 
          :disabled="!message.trim() || isTyping"
          :class="{ 'glow': message.trim().length > 0 }"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <line x1="22" y1="2" x2="11" y2="13"></line>
            <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
          </svg>
        </button>
      </div>
  
      <!-- Expandable toolbar -->
      <div class="toolbar" :class="{ 'expanded': isToolbarExpanded }">
        <div class="toolbar-toggle" @click="toggleToolbar">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="12" cy="12" r="1"></circle>
            <circle cx="19" cy="12" r="1"></circle>
            <circle cx="5" cy="12" r="1"></circle>
          </svg>
        </div>
        
        <div class="toolbar-items">
          <!-- File attachment -->
          <button class="toolbar-item" @click="triggerFileUpload">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48"></path>
            </svg>
            <span class="tooltip">Attach Files</span>
          </button>
          <input type="file" ref="fileInput" @change="handleFileUpload" multiple class="hidden-file-input" />
          
          <!-- CollabAI Mode -->
          <button class="toolbar-item">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M17 16l4-4-4-4"></path>
              <path d="M7 8l-4 4 4 4"></path>
              <line x1="13" y1="5" x2="11" y2="19"></line>
            </svg>
            <span class="tooltip">CollabAI Mode</span>
          </button>
          
          <!-- Think Button -->
          <button class="toolbar-item">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <circle cx="12" cy="12" r="10"></circle>
              <line x1="12" y1="8" x2="12" y2="12"></line>
              <line x1="12" y1="16" x2="12.01" y2="16"></line>
            </svg>
            <span class="tooltip">Deep Thinking Mode</span>
          </button>
          
          <!-- Model Selector -->
          <div class="toolbar-item model-selector">
            <select v-model="selectedModel">
              <option v-for="model in availableModels" :key="model.id" :value="model.id">
                {{ model.name }}
              </option>
            </select>
            <span class="tooltip">Select AI Model</span>
          </div>
          
          <!-- Premium Toolbox -->
          <button class="toolbar-item premium" :class="{ 'locked': !isPremiumUser }">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
              <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
            </svg>
            <span class="tooltip">Premium Tools</span>
          </button>
        </div>
      </div>
      
      <!-- Typing indicator -->
      <div class="typing-indicator" v-if="isTyping">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'ChatToolbarInput',
    
    props: {
      isPremiumUser: {
        type: Boolean,
        default: false
      }
    },
    
    data() {
      return {
        message: '',
        isTyping: false,
        isFocused: false,
        isToolbarExpanded: false,
        selectedModel: 'dawntasy-default',
        attachedFiles: [],
        availableModels: [
          { id: 'dawntasy-default', name: 'DawntasyAI Standard' },
          { id: 'dawntasy-pro', name: 'DawntasyAI Pro' },
          { id: 'dawntasy-cosmic', name: 'DawntasyAI Cosmic' }
        ]
      }
    },
    
    methods: {
      toggleToolbar() {
        this.isToolbarExpanded = !this.isToolbarExpanded;
      },
      
      autoResize() {
        const textarea = this.$refs.messageInput;
        textarea.style.height = 'auto';
        textarea.style.height = textarea.scrollHeight + 'px';
      },
      
      handleEnterPress(e) {
        // If shift+enter, allow new line
        if (e.shiftKey) {
          return true;
        }
        
        // Otherwise send the message
        this.sendMessage();
      },
      
      async sendMessage() {
        if (!this.message.trim() && this.attachedFiles.length === 0) {
          // Don't send empty messages without attachments
          return;
        }
        
        try {
          this.isTyping = true;
          
          // Prepare message data
          const messageData = {
            text: this.message.trim(),
            model: this.selectedModel,
            files: this.attachedFiles,
            timestamp: new Date().toISOString()
          };
          
          // Emit event for parent component to display user message
          this.$emit('user-message', messageData);
          
          // Make API call to AI service
          const response = await this.callAIAPI(messageData);
          
          // Process AI response
          this.$emit('ai-response', {
            text: response.text,
            timestamp: new Date().toISOString(),
            model: this.selectedModel
          });
          
          // Clear input after successful send
          this.message = '';
          this.attachedFiles = [];
          this.$refs.messageInput.style.height = 'auto';
          
        } catch (error) {
          console.error('Error sending message:', error);
          this.$emit('error', 'Failed to get response from AI. Please try again.');
        } finally {
          this.isTyping = false;
        }
      },
      
      async callAIAPI(messageData) {
        // API integration
        try {
          const response = await fetch('https://api.dawntasy.ai/chat', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${this.$store.state.userToken}` // Assuming token stored in Vuex
            },
            body: JSON.stringify({
              message: messageData.text,
              model: messageData.model,
              files: messageData.files.map(f => f.id) // Assuming files are uploaded separately and we store IDs
            })
          });
          
          if (!response.ok) {
            throw new Error(`API responded with status: ${response.status}`);
          }
          
          return await response.json();
        } catch (error) {
          console.error('API call failed:', error);
          throw error;
        }
      },
      
      triggerFileUpload() {
        this.$refs.fileInput.click();
      },
      
      async handleFileUpload(event) {
        const files = Array.from(event.target.files);
        
        if (!files.length) return;
        
        // Process each file
        for (const file of files) {
          try {
            // Upload file to server
            const formData = new FormData();
            formData.append('file', file);
            
            const response = await fetch('https://api.dawntasy.ai/upload', {
              method: 'POST',
              headers: {
                'Authorization': `Bearer ${this.$store.state.userToken}`
              },
              body: formData
            });
            
            if (!response.ok) {
              throw new Error(`File upload failed: ${response.status}`);
            }
            
            const result = await response.json();
            
            // Add file to attachments
            this.attachedFiles.push({
              id: result.fileId,
              name: file.name,
              type: file.type,
              size: file.size
            });
            
          } catch (error) {
            console.error('Error uploading file:', error);
            this.$emit('error', `Failed to upload ${file.name}`);
          }
        }
        
        // Reset file input
        event.target.value = '';
      }
    },
    
    mounted() {
      // Focus the input when component mounts
      this.$refs.messageInput.focus();
    }
  }
  </script>
  
  <style scoped>
  .chat-toolbar-input-container {
    position: relative;
    width: 100%;
    border-radius: 12px;
    background: rgba(0, 0, 0, 0.6); /* Cosmic black background */
    box-shadow: 0 4px 20px rgba(30, 77, 217, 0.15);
    transition: all 0.3s ease;
  }
  
  .input-wrapper {
    display: flex;
    align-items: center;
    border: 1px solid rgba(30, 77, 217, 0.3);
    border-radius: 12px;
    overflow: hidden;
    transition: all 0.3s ease;
    background: rgba(10, 10, 15, 0.7);
  }
  
  .input-wrapper.active {
    border: 1px solid #1e4dd9;
    box-shadow: 0 0 10px rgba(30, 77, 217, 0.4);
  }
  
  textarea {
    flex: 1;
    min-height: 50px;
    max-height: 150px;
    padding: 15px;
    background: transparent;
    border: none;
    outline: none;
    color: white;
    font-size: 16px;
    resize: none;
    line-height: 1.5;
  }
  
  textarea::placeholder {
    color: rgba(255, 255, 255, 0.5);
  }
  
  .send-button {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 50px;
    height: 50px;
    background: transparent;
    border: none;
    cursor: pointer;
    color: rgba(255, 255, 255, 0.7);
    transition: all 0.3s ease;
    border-radius: 50%;
    margin-right: 5px;
  }
  
  .send-button.glow {
    color: #1e4dd9;
  }
  
  .send-button:hover {
    background: rgba(30, 77, 217, 0.2);
    color: white;
    box-shadow: 0 0 15px rgba(30, 77, 217, 0.5);
  }
  
  .send-button:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    box-shadow: none;
  }
  
  /* Toolbar styles */
  .toolbar {
    display: flex;
    align-items: center;
    height: 0;
    overflow: hidden;
    transition: height 0.5s ease;
    background: rgba(15, 15, 25, 0.85);
    border-bottom-left-radius: 12px;
    border-bottom-right-radius: 12px;
  }
  
  .toolbar.expanded {
    height: 50px;
    border-top: 1px solid rgba(30, 77, 217, 0.2);
  }
  
  .toolbar-toggle {
    position: absolute;
    bottom: 55px;
    left: 10px;
    width: 30px;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: rgba(255, 255, 255, 0.6);
    cursor: pointer;
    transition: all 0.3s ease;
    z-index: 2;
  }
  
  .toolbar-toggle:hover {
    color: #1e4dd9;
  }
  
  .toolbar-items {
    display: flex;
    align-items: center;
    width: 100%;
    padding: 0 15px;
    justify-content: space-around;
  }
  
  .toolbar-item {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    border-radius: 8px;
    background: transparent;
    border: none;
    color: rgba(255, 255, 255, 0.7);
    cursor: pointer;
    transition: all 0.3s ease;
    position: relative;
  }
  
  .toolbar-item:hover {
    background: rgba(30, 77, 217, 0.2);
    color: white;
  }
  
  .toolbar-item.premium.locked {
    color: rgba(255, 255, 255, 0.4);
    cursor: not-allowed;
  }
  
  .model-selector {
    width: auto;
    padding: 0 10px;
  }
  
  .model-selector select {
    background: rgba(15, 15, 25, 0.85);
    border: 1px solid rgba(30, 77, 217, 0.3);
    color: white;
    padding: 5px 10px;
    border-radius: 6px;
    outline: none;
    cursor: pointer;
  }
  
  .tooltip {
    position: absolute;
    bottom: 45px;
    left: 50%;
    transform: translateX(-50%) scale(0);
    background: rgba(15, 15, 25, 0.95);
    color: white;
    padding: 5px 10px;
    border-radius: 4px;
    font-size: 12px;
    white-space: nowrap;
    transition: transform 0.2s ease;
    pointer-events: none;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
    border: 1px solid rgba(30, 77, 217, 0.3);
  }
  
  .toolbar-item:hover .tooltip {
    transform: translateX(-50%) scale(1);
  }
  
  /* Typing indicator */
  .typing-indicator {
    position: absolute;
    top: -30px;
    left: 15px;
    display: flex;
    align-items: center;
  }
  
  .typing-indicator span {
    display: inline-block;
    width: 8px;
    height: 8px;
    margin-right: 5px;
    background: #1e4dd9;
    border-radius: 50%;
    opacity: 0.7;
    animation: typing 1s infinite ease-in-out;
  }
  
  .typing-indicator span:nth-child(1) {
    animation-delay: 0s;
  }
  
  .typing-indicator span:nth-child(2) {
    animation-delay: 0.2s;
  }
  
  .typing-indicator span:nth-child(3) {
    animation-delay: 0.4s;
  }
  
  @keyframes typing {
    0%, 60%, 100% {
      transform: translateY(0);
    }
    30% {
      transform: translateY(-5px);
    }
  }
  
  .hidden-file-input {
    display: none;
  }
  
  /* When typing */
  .is-typing textarea {
    opacity: 0.7;
  }
  </style>