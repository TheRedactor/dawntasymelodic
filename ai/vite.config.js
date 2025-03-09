import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';
import { VitePWA } from 'vite-plugin-pwa';
import viteCompression from 'vite-plugin-compression';

export default defineConfig({
  base: '/ai/', // Ensures correct asset paths for subdomain
  plugins: [
    vue(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.ico', 'robots.txt', 'images/*.svg'],
      manifest: {
        name: 'DawntasyAI',
        short_name: 'DawntasyAI',
        description: 'Your cosmic AI companion from the Dawntasy universe',
        theme_color: '#8b5cf6',
        background_color: '#0f172a',
        display: 'standalone',
        icons: [
          {
            src: '/ai/pwa-192x192.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: '/ai/pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png'
          }
        ]
      }
    }),
    viteCompression({
      algorithm: 'gzip',
      ext: '.gz',
    })
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
        drop_console: true,
        drop_debugger: true
      }
    }
  },
  optimizeDeps: {
    include: ['vue', 'vue-router', 'pinia', 'firebase/app', 'firebase/auth', 'gsap', 'three']
  }
});