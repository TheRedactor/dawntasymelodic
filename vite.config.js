import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';

export default defineConfig({
  plugins: [vue()],
  root: 'src', // Set src as the root, with index.html as entry
  build: {
    outDir: '../dist-ai', // Output AI files to dist-ai
    emptyOutDir: true, // Clear dist-ai on build
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, 'src/index.html'), // Explicitly set entry point
      },
    },
  },
  base: '/', // Serve from root, matching router history
});