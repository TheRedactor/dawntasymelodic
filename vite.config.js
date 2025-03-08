// vite.config.js - COMPLETELY REVISED
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';

export default defineConfig({
  plugins: [vue()],
  base: '/', // CRITICAL CHANGE: Use root for dev, we'll handle path in router
  build: {
    outDir: 'dist', // Changed from dist-ai to dist
    emptyOutDir: true,
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  server: {
    port: 5173, // Set explicit port
    open: true, // Auto-open browser
  }
});