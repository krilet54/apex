import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// ESM Vite config (use .mjs to avoid require/ESM issues)
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173
  }
})
