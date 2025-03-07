<template>
  <div class="min-h-screen bg-gradient-to-br from-indigo-950 via-cosmic-dark to-purple-900 flex items-center justify-center">
    <form @submit.prevent="register" class="w-full max-w-md bg-white dark:bg-cosmic-dark shadow-2xl rounded-xl p-10 cosmic-card-animation">
      <h1 class="text-3xl font-display font-bold cosmic-glow text-center mb-6">🚀 Join Dawntasy AI 🚀</h1>
      
      <!-- Error Message -->
      <div v-if="error" class="bg-red-500 bg-opacity-20 text-red-300 p-3 rounded-lg shadow-lg mb-4 animate-shake">
        {{ error }}
      </div>
      
      <!-- Name Field -->
      <div class="mb-4">
        <input v-model="name" required placeholder="Your Name" type="text"
               class="input cosmic-input w-full" />
      </div>
      
      <!-- Email Field -->
      <div class="mb-4">
        <input v-model="email" type="email" required placeholder="Email Address" class="input w-full" />
      </div>
      
      <!-- Password Field -->
      <div class="mb-4">
        <input v-model="password" required type="password" placeholder="Create Password" class="input w-full" />
      </div>
      
      <!-- Confirm Password -->
      <div class="mb-4">
        <input v-model="confirmPassword" required type="password" placeholder="Confirm Password" class="input w-full" />
      </div>
      
      <!-- Submit Button -->
      <button type="submit" :disabled="loading"
        class="btn-primary w-full py-3 mt-6 cosmic-btn transition-transform hover:scale-105 shadow-cosmic-glow">
        {{ loading ? "Launching..." : "Create Account 🚀" }}
      </button>
      
      <!-- Redirect to Login -->
      <p class="mt-4 text-center text-gray-400">
        Already cosmic? 
        <router-link to="/login" class="text-indigo-400 hover:text-indigo-200 transition">Log in</router-link>
      </p>
    </form>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { useAuthStore } from '../stores/auth';

const router = useRouter();
const authStore = useAuthStore();

const name = ref('');
const email = ref('');
const password = ref('');
const confirmPassword = ref('');
const error = ref('');
const loading = ref(false);

// 🌟 Registration with Firebase Auth Store
async function register() {
  error.value = '';
  if (password.value !== confirmPassword.value) {
    error.value = 'Passwords must match!';
    return;
  }
  if (password.value.length < 6) {
    error.value = 'Password must be at least 6 characters!';
    return;
  }
  
  loading.value = true;
  try {
    await authStore.register(email.value, password.value, name.value);
    router.push('/chats');
  } catch (err: any) {
    error.value = err.message || 'Oops! Something cosmic went wrong.';
  } finally {
    loading.value = false;
  }
}
</script>

<style scoped>
@tailwind base;
@tailwind components;
@tailwind utilities;

form {
  @apply flex flex-col max-w-md w-full bg-cosmic-light bg-opacity-50 backdrop-blur-lg p-8 rounded-xl shadow-xl;
  animation: floatForm 6s infinite alternate ease-in-out;
}

.input {
  @apply px-4 py-3 rounded-lg bg-gray-50 dark:bg-gray-800 text-white shadow-lg transition duration-300 focus:outline-none focus:ring-2 focus:ring-indigo-500;
}

button {
  @apply bg-indigo-600 text-white py-3 rounded-lg shadow-md hover:bg-indigo-500 transition-all duration-300 cosmic-pulse;
}

@layer utilities {
  .cosmic-pulse {
    @apply text-cosmic-pulse animate-[cosmic-pulse_1.5s_infinite];
  }
}

@keyframes cosmic-pulse {
  0%, 100% { box-shadow: 0 0 10px #8b5cf6; }
  50% { box-shadow: 0 0 25px #c084fc, 0 0 50px #8b5cf6; }
}

@keyframes shake {
  0%, 100% { transform: translateX(0); }
  20%, 60% { transform: translateX(-10px); }
  40%, 80% { transform: translateX(10px); }
}

.animate-shake {
  animation: shake 0.6s ease-in-out;
}

.cosmic-glow {
  text-shadow: 0 0 10px rgba(192, 132, 252, 0.8), 0 0 20px rgba(139, 92, 246, 1);
}
</style>