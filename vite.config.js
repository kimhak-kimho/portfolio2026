import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  // Ensure common image extensions (including uppercase .JPG) are treated as assets
  assetsInclude: ['**/*.jpg', '**/*.jpeg', '**/*.JPG', '**/*.JPEG', '**/*.png', '**/*.gif', '**/*.webp'],
  base: '/',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: false,
    minify: 'esbuild',
    rollupOptions: {
      output: {
        manualChunks: {
          'vue-vendor': ['vue', 'vuetify']
        }
      }
    }
  }
})