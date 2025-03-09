import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';

export default defineConfig({
  base: '/', // Ensures correct asset paths
  plugins: [
    vue()
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
