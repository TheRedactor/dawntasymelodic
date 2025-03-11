import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';

export default defineConfig({
  base: '/ai/',
  plugins: [vue()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      'firebase-app': path.resolve(__dirname, 'node_modules/firebase/app/dist/index.cjs')
    }
  },
  server: {
    port: 5173,
    fs: {
      strict: false // Required for large prompt files
    }
  },
  build: {
    outDir: 'dist-ai',
    emptyOutDir: true,
    chunkSizeWarningLimit: 3000, // Increased for AGI prompts
    sourcemap: process.env.NODE_ENV === 'development',
    rollupOptions: {
      onwarn(warning, warn) {
        if (warning.code === 'SOURCEMAP_ERROR' || warning.code === 'CIRCULAR_DEPENDENCY') return
        warn(warning)
      },
      input: {
        main: path.resolve(__dirname, 'index.html'),
      },
      output: {
        manualChunks(id) {
          if (id.includes('firebase')) return 'firebase'
          if (id.includes('vue')) return 'vue'
          if (id.includes('openai')) return 'openai'
        },
        entryFileNames: 'assets/[name]-[hash].js',
        chunkFileNames: 'assets/[name]-[hash].js',
        assetFileNames: 'assets/[name]-[hash].[ext]'
      },
      treeshake: {
        moduleSideEffects: (id) => {
          if (id.includes('Dawntasy_System_Prompt') || id.includes('firebase')) return true
          return false
        }
      }
    },
    cssCodeSplit: true,
    minify: 'terser',
    terserOptions: {
      compress: {
        keep_fnames: true, // Critical for AGI prompt stability
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
      'firebase/app',
      'firebase/auth',
      'gsap',
      'three',
      'axios' // Explicitly include for AGI operations
    ],
    exclude: ['@rollup/plugin-alias'] // Prevent conflicts
  },
  define: {
    'process.env': process.env // Required for Firebase integration
  }
});
