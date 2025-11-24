import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    minify: 'terser',
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom', 'react-router-dom', 'react-bootstrap', 'bootstrap'],
          particles: ['@tsparticles/react', '@tsparticles/slim'],
          pdf: ['react-pdf', '@react-pdf/renderer']
        }
      }
    }
  }
})
