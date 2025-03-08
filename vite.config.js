import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { fileURLToPath, URL } from 'url';
import compression from 'vite-plugin-compression';

export default defineConfig({
  plugins: [
    vue(),
    compression({ algorithm: 'brotliCompress' }),
  ],
  resolve: {
    alias: {
      '@': new URL('./src', import.meta.url).pathname,
    },
  },
  build: {
    rollupOptions: {
      input: {
        main: new URL('./app.html', import.meta.url).pathname,
      },
    },
    minify: 'terser',
    terserOptions: {
      compress: { drop_console: true },
      format: { comments: false },
    },
  },
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:3000',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  },
});
