import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// base: './' makes all asset paths relative, so the same build works at
// ameliaye0708.github.io/test_repository/ AND at ameliaye0708.github.io/
export default defineConfig({
  base: './',
  plugins: [react(), tailwindcss()],
})
