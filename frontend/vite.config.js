import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// Vite config: React 19 + Tailwind v4 (CSS-first, no tailwind.config.js).
export default defineConfig({
  plugins: [react(), tailwindcss()],
})
