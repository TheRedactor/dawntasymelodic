import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';
import fs from 'fs';

export default defineConfig({
  base: '/ai/',
  plugins: [
    vue(),
    // Custom plugin to copy _redirects file to output directory
    {
      name: 'copy-netlify-redirects',
      closeBundle() {
        const redirectsContent = '/*    /ai/index.html   200'; // Fixed path
        const outputDir = 'dist-ai/ai/dist-ai'; // Match Netlify publish dir
        
        // Ensure output directory exists
        if (!fs.existsSync(outputDir)) {
          fs.mkdirSync(outputDir, { recursive: true });
        }
        
        // Write _redirects file to output directory
        fs.writeFileSync(path.resolve(outputDir, '_redirects'), redirectsContent);
        console.log('✅ Created _redirects file in output directory');
      }
    }
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      '@firebase/app': path.resolve(__dirname, 'node_modules/@firebase/app/dist/index.esm2017.js'),
      '@firebase/auth': path.resolve(__dirname, 'node_modules/@firebase/auth/dist/index.esm2017.js')
    }
  },
  server: {
    port: 5173,
    fs: {
      allow: ['.'],
      strict: true
    }
  },
  build: {
    outDir: 'dist-ai',
    emptyOutDir: true,
    chunkSizeWarningLimit: 3000,
    sourcemap: process.env.NODE_ENV === 'development',
    rollupOptions: {
      onwarn(warning, warn) {
        if (warning.code === 'SOURCEMAP_ERROR' || warning.code === 'CIRCULAR_DEPENDENCY') return;
        warn(warning);
      },
      input: {
        main: path.resolve(__dirname, 'index.html'),
      },
      output: {
        manualChunks(id) {
          if (id.includes('firebase')) return 'firebase';
          if (id.includes('vue')) return 'vue';
          if (id.includes('openai')) return 'openai';
        },
        entryFileNames: 'assets/[name]-[hash].js',
        chunkFileNames: 'assets/[name]-[hash].js',
        assetFileNames: 'assets/[name]-[hash].[ext]'
      },
      treeshake: {
        moduleSideEffects: (id) => {
          if (id.includes('Dawntasy_System_Prompt') || id.includes('firebase')) return true;
          return false;
        }
      }
    },
    cssCodeSplit: true,
    minify: 'terser',
    terserOptions: {
      compress: {
        keep_fnames: true,
        drop_console: false,
        drop_debugger: true
      }
    }
  },
  optimizeDeps: {
    include: [
      'vue',
      'vue-router',
      'pinia',
      '@firebase/app',
      '@firebase/auth',
      'gsap',
      'three',
      'axios'
    ],
    exclude: ['@rollup/plugin-alias']
  },
  define: {
    'process.env': process.env
  }
});