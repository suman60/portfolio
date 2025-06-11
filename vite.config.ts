import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { imagetools } from 'vite-imagetools'
import viteCompression from 'vite-plugin-compression'

// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  plugins: [
    react(),
    imagetools(),
    viteCompression({
      algorithm: 'gzip',
      threshold: 10240 // Only compress files > 10KB
    })
  ],
  assetsInclude: ['**/*.JPG', '**/*.jpg', '**/*.png', '**/*.gif', '**/*.svg'],
  server: {
    port: 5173,
    host: true,
    open: true
  },
  preview: {
    port: 8080,
    host: true,
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    chunkSizeWarningLimit: 3000,
    cssCodeSplit: true,
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          if (id.includes('node_modules/react') || 
              id.includes('node_modules/react-dom') || 
              id.includes('node_modules/react-router')) {
            return 'react-vendor';
          }
          if (id.includes('node_modules/@chakra-ui') || 
              id.includes('node_modules/@emotion')) {
            return 'ui-vendor';
          }
          if (id.includes('node_modules/react-icons')) {
            return 'icons-vendor';
          }
          if (id.includes('node_modules')) {
            return 'vendor';
          }
        },
        assetFileNames: (assetInfo: { name?: string }) => {
          const name = assetInfo.name || '';
          if (name.endsWith('.jpg') || name.endsWith('.JPG') || name.endsWith('.png')) {
            return 'assets/images/[name]-[hash][extname]';
          }
          return 'assets/[name]-[hash][extname]';
        }
      }
    },
    // Optimize build settings
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true
      }
    },
    sourcemap: false
  },
  resolve: {
    alias: {
      '@': '/src',
      '@assets': '/src/assets'
    }
  },
  publicDir: 'public'
}) 