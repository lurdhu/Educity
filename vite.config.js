import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/

export default defineConfig({
  plugins: [react()],
  base: '/Educity/', // Use your GitHub repo name here
  build: {
    outDir: 'dist',
  },
})