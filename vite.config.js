import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: { '@': path.resolve(__dirname, './src') },
  },
  build: {
    outDir: 'dist-ai',  // ✅ Build AI into dist-ai
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, 'app.html') // 👈 THIS FORCES VITE TO BUILD AI
      }
    }
  },
  base: '/app.html'  // ✅ AI runs under /ai/
});
