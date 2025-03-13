import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';
import fs from 'fs';
import { VitePWA } from 'vite-plugin-pwa';
import viteCompression from 'vite-plugin-compression';

export default defineConfig({
  // 🔥 CRITICAL FIX: Root base path for subdomain deployment
  base: '/',
  plugins: [
    vue(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.ico', 'robots.txt', 'apple-touch-icon.png'],
      manifest: {
        name: 'DawntasyAI',
        short_name: 'DawntasyAI',
        description: 'Your cosmic AI companion',
        theme_color: '#0f172a',
        background_color: '#0f172a',
        icons: [
          {
            src: '/android-chrome-192x192.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: '/android-chrome-512x512.png',
            sizes: '512x512',
            type: 'image/png'
          }
        ]
      }
    }),
    viteCompression({
      algorithm: 'gzip',
      ext: '.gz',
    }),
    // Custom plugin to copy _redirects file to output directory
    {
      name: 'copy-netlify-redirects',
      closeBundle() {
        const redirectsContent = '/* /index.html 200';
        const outputDir = 'dist-ai';

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
    outDir: 'dist-ai', // Ensure this matches Netlify publish dir
    emptyOutDir: true,
    chunkSizeWarningLimit: 3000,
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
        // 🔥 CRITICAL FIX: Ensure assets go to /assets/ folder
        entryFileNames: 'assets/[name].[hash].js',
        chunkFileNames: 'assets/[name].[hash].js',
        assetFileNames: 'assets/[name].[hash].[ext]'
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
      'firebase/app',
      'firebase/auth',
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