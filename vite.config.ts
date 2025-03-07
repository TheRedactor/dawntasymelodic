import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { fileURLToPath, URL } from 'url';
import compression from 'vite-plugin-compression';

export default defineConfig({
  plugins: [
    vue(),
    compression({ algorithm: 'brotliCompress', deleteOriginFile: false }), // ✅ Enables Brotli compression
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)), // ✅ Shortens import paths
    },
  },
  server: {
    middlewareMode: true, // ✅ Enables proper middleware handling
    proxy: {
      '/api': {
        target: 'http://localhost:3000',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  },
  build: {
    rollupOptions: {
      input: {
        main: fileURLToPath(new URL('./app.html', import.meta.url)), // ✅ Uses app.html as entry point
      },
    },
    minify: 'terser', // ✅ Optimized minification
    terserOptions: {
      compress: {
        drop_console: true, // ✅ Removes console logs
      },
      format: {
        comments: false, // ✅ Removes unnecessary comments
      },
    },
    assetsInlineLimit: 8192, // ✅ Optimizes asset loading
  },
  base: '/app.html/', // ✅ Fixes the routing issue
});