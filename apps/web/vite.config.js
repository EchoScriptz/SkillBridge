import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    port: 5173, // Frontend Port
    proxy: {
      '/api': {
        target: 'http://localhost:5000', // Changed from 5001 to 5000 to match index.js
        changeOrigin: true,
        // Optional: rewrite path if your server routes don't start with /api
        // rewrite: (path) => path.replace(/^\/api/, '') 
      },
    },
  },
})