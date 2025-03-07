import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { fileURLToPath, URL } from 'url';
import compression from 'vite-plugin-compression';

export default defineConfig({
  plugins: [
    vue(),
    compression({ algorithm: 'brotliCompress', deleteOriginFile: false })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  server: {
    middlewareMode: true,
    proxy: {
      '/api': {
        target: 'http://localhost:3000',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '')
      }
    }
  },
  build: {
    rollupOptions: {
      input: {
        main: fileURLToPath(new URL('./app.html', import.meta.url))
      }
    },
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true
      },
      format: {
        comments: false
      }
    },
    assetsInlineLimit: 8192
  },
  base: '/app.html/'
});