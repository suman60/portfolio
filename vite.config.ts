import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { imagetools } from 'vite-imagetools'
import viteCompression from 'vite-plugin-compression'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    imagetools(),
    viteCompression({
      algorithm: 'gzip',
      threshold: 10240 // Only compress files > 10KB
    })
  ],
  assetsInclude: ['**/*.svg'],
  server: {
    port: 5173,
    strictPort: true, // Force port 8080 only
    host: true,
    open: true,
    proxy: {
      '/api': {
        target: 'http://localhost:8080',
        changeOrigin: true,
        secure: false,
      }
    }
  },
  preview: {
    port: 8080,
    strictPort: true, // Force port 8080 for preview too
    host: true,
  },
  build: {
    chunkSizeWarningLimit: 3000,
    cssCodeSplit: true,
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom'],
          'router-vendor': ['react-router-dom'],
          'chakra-ui': ['@chakra-ui/react'],
          'emotion': ['@emotion/react', '@emotion/styled'],
          'icons-vendor': ['react-icons'],
          'animation-vendor': ['framer-motion'],
          'utils-vendor': ['axios']
        },
        assetFileNames: (assetInfo: { name?: string }) => {
          const name = assetInfo.name || '';
          if (name.endsWith('.jpg') || name.endsWith('.png')) {
            return 'assets/images/[name]-[hash][extname]';
          }
          return 'assets/[name]-[hash][extname]';
        }
      }
    }
  }
}) 