import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { VitePWA } from 'vite-plugin-pwa';
import path from 'path';

export default defineConfig({
  base: '/ai/', // Ensures correct asset paths
  plugins: [
    vue(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.ico', 'robots.txt', 'apple-touch-icon.png'],
      manifest: {
        name: 'DawntasyAI',
        short_name: 'DawntasyAI',
        description: 'The AI that makes you think - from the Dawntasy universe',
        theme_color: '#0f172a',
        background_color: '#0f172a',
        icons: [
          { src: 'pwa-192x192.png', sizes: '192x192', type: 'image/png' },
          { src: 'pwa-512x512.png', sizes: '512x512', type: 'image/png' }
        ]
      }
    })
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'ai/src') // 🔥 Ensure correct alias for AI project
    }
  },
  server: {
    port: 5173
  },
  build: {
    outDir: 'ai/dist-ai',  // 🔥 Ensures build files go inside dist-ai
    emptyOutDir: true,
    chunkSizeWarningLimit: 1600,
    rollupOptions: {
      input: path.resolve(__dirname, 'ai/index.html'), // 🔥 Correct entry point
      output: {
        entryFileNames: 'assets/[name].js', // 🔥 Ensures main.js goes inside assets/
        chunkFileNames: 'assets/[name]-[hash].js',
        assetFileNames: 'assets/[name]-[hash].[ext]'
      }
    }
  }
});
