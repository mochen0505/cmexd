import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
const { resolve } = require('path')

export default defineConfig({
  plugins: [svelte()],
  build: {
    rollupOptions: {
      input: resolve(__dirname, './packages/button/src/index.js'),
      output: {
        dir: resolve(__dirname, './packages/button/dist'),
        format: 'es',
        sourcemap: true
      }
    }
  }
})
