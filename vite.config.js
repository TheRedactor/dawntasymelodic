import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { resolve } from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    },
  },
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'app.html'),
      },
    },
  },
  server: {
    // This ensures that routes like /register work correctly
    historyApiFallback: {
      rewrites: [
        { from: /^\/.*$/, to: '/app.html' },
      ],
    },
  },
});