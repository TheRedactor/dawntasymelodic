import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';
// Remove the PWA plugin that's causing issues
// import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  base: '/ai/', // Ensures correct asset paths for subfolder
  plugins: [
    vue(),
    // Remove the PWA plugin for now
    // VitePWA({...})
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src') // Fixed alias path
    }
  },
  server: {
    port: 5173
  },
  build: {
    outDir: 'dist-ai',
    emptyOutDir: true,
    chunkSizeWarningLimit: 2000,
    sourcemap: process.env.NODE_ENV === 'development',
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, 'index.html'),
      },
      output: {
        manualChunks: {
          'vendor': ['vue', 'vue-router', 'pinia'],
          'firebase': ['firebase/app', 'firebase/auth', 'firebase/firestore'],
          'animations': ['gsap', 'three', 'animejs', 'aos']
        },
        entryFileNames: 'assets/[name]-[hash].js',
        chunkFileNames: 'assets/[name]-[hash].js',
        assetFileNames: 'assets/[name]-[hash].[ext]'
      }
    },
    cssCodeSplit: true,
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: false, // Keep console for debugging
        drop_debugger: true
      }
    }
  },
  optimizeDeps: {
    include: ['vue', 'vue-router', 'pinia', 'firebase/app', 'firebase/auth', 'gsap', 'three']
  }
});