import { resolve } from 'path'
import { defineConfig } from 'vite'
import pkg from './package.json'

export default defineConfig({
  root: resolve(__dirname, 'demo'),
  resolve: {
    alias: {
      'smooth-scrollbar': resolve(__dirname, 'src'),
    }
  },
  define: {
    __SCROLLBAR_VERSION__: JSON.stringify(pkg.version),
  },
  css: {
    devSourcemap: true
  }
})
