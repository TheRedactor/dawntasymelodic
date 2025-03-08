import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  // This ensures the app loads correctly when accessing any path
  build: {
    outDir: 'dist',
  },
  // Remove the base path - this is critical for routing to work properly
  base: '/',
})