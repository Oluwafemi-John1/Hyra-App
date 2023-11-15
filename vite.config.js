import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'http://your-api-server',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
    hmr: {
      overlay: false,
    },
    // Add this rewrite rule to handle all routes
    // This is crucial for client-side routing to work correctly
    fs: {
      strict: false,
    },
  },
})
