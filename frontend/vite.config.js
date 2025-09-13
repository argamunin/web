import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@images': path.resolve(__dirname, './src/images'),
      '@components': path.resolve(__dirname, './src/components'),
      '@styles': path.resolve(__dirname, './src/styles'),
    },
  },
  base: process.env.NODE_ENV === 'production' ? '/web/' : '/',
  build: {
    outDir: 'dist',
  },
  assetsInclude: ['**/*.PNG', '**/*.png', '**/*.jpg', '**/*.jpeg', '**/*.gif', '**/*.svg'],
})
