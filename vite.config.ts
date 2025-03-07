import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { fileURLToPath, URL } from 'url';

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)), // Shortens import paths
    },
  },
  server: {
    // Ensures Vue Router history mode works without redirecting to index.html
    configureServer(server) {
      server.middlewares.use((req, res, next) => {
        if (req.url.startsWith('/api')) {
          return next(); // API requests should go through as normal
        }
        req.url = '/app.html'; // Ensures all Vue routes go to app.html
        next();
      });
    },
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
        main: fileURLToPath(new URL('./app.html', import.meta.url)), // Uses app.html as entry point
      },
    },
  },
  base: './', // Ensures assets load correctly in all environments
});