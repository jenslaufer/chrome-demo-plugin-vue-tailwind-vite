import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { crx } from '@crxjs/vite-plugin'
import manifest from './manifest.json'
import zipPack from "vite-plugin-zip-pack"


export default defineConfig({
  plugins: [
    vue(),
    crx({ manifest }),
    zipPack()
  ],
  build: {
    rollupOptions: {
      input: {
        welcome: 'index.html',
      },
    },
  },
})


