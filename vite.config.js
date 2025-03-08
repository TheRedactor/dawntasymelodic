import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';

export default defineConfig({
  plugins: [vue()],
  build: {
    outDir: 'dist-ai',
    emptyOutDir: true,
  },
  base: '/app/', // CRITICAL: Set base to /app/ to match package.json homepage
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  server: {
    port: 5173,
  }
});