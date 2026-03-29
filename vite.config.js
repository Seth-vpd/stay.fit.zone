import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  // Use relative asset paths so deployment works on project pages and custom domains.
  base: './',
  plugins: [react()],
})
