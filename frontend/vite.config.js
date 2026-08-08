import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import fs from 'fs'
import path from 'path'

function copyLogoPlugin() {
  return {
    name: 'copy-logo',
    buildStart() {
      try {
        const src = path.resolve(__dirname, 'public/images/logo.png')
        const destPublic = path.resolve(__dirname, 'public/images/logo.png')
        const destFavicon = path.resolve(__dirname, 'public/favicon.ico')
        const destFaviconPng = path.resolve(__dirname, 'public/favicon.png')
        if (fs.existsSync(src)) {
          fs.copyFileSync(src, destPublic)
          fs.copyFileSync(src, destFavicon)
          fs.copyFileSync(src, destFaviconPng)
        }
      } catch (e) {
        console.error('Error copying logo in Vite plugin:', e)
      }
    }
  }
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), copyLogoPlugin()],
  server: {
    port: 3000,
    open: false
  }
})
