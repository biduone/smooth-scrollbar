import { resolve } from 'path'
import { defineConfig } from 'vite'
import pkg from './package.json'

export default defineConfig({
  root: resolve(__dirname, './specs/fixture'),
  resolve: {
    alias: {
      'smooth-scrollbar': resolve(process.cwd(), 'src'),
    }
  },
  define: {
    __SCROLLBAR_VERSION__: JSON.stringify(pkg.version),
  },
  
  server: {
    host: true,
  }
})
