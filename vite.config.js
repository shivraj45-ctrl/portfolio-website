import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    tailwindcss(),
    react(),
    ViteImageOptimizer({
      dir: 'public',
      outDir: 'dist',
      jpg: { quality: 70 },
      jpeg: { quality: 70 },
      png: { quality: 70 },
    })
  ],
  server: {
    allowedHosts: true,
  },
})
