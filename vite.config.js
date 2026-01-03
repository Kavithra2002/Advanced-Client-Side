import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Use / for local dev, repo name for GitHub Pages
const isProd = process.env.NODE_ENV === 'production';

export default defineConfig({
  plugins: [react()],
  base: isProd ? '/Advanced-Client-Side/' : '/',
  server: {
    port: 3000,
  },
});
