import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
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
}) 