import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';

export default defineConfig({
  plugins: [vue()],
  build: {
    outDir: '../dist-ai',
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, 'src/index.html'),
      },
    },
  },
  base: '/ai/', // Fixed: Serve AI app from /ai/ path
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  }
});