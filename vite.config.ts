import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],

  // GitHub Pages Repository Name
  base: '/Website-Project_Agent/',

  server: {
    host: '0.0.0.0',
    port: 5173,
    open: false
  }
})