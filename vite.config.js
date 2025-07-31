import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  publicDir: ['public', '.well-known'],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        'apple-pay-verification': resolve(__dirname, '.well-known/apple-developer-merchantid-domain-association.txt')
      }
    }
  }
})
