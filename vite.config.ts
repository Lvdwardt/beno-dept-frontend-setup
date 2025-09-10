import { defineConfig } from 'vite'
import { resolve } from 'path'
import { fileURLToPath, URL } from 'node:url'
import tailwindcss from '@tailwindcss/vite'
import tsconfigPaths from 'vite-tsconfig-paths'
import { staticSiteGenerator } from './plugins/static-site-generator'
import { devServerPlugin } from './plugins/dev-server'

export default defineConfig(({ command }) => ({
  plugins: [
    tsconfigPaths(),
    tailwindcss(),
    command === 'build' ? staticSiteGenerator() : devServerPlugin(),
  ],
  build: {
    outDir: 'build',
    emptyOutDir: true,
    rollupOptions: {
      input: {
        styles: resolve(fileURLToPath(new URL('.', import.meta.url)), 'src/assets/styles.css'),
        main: resolve(fileURLToPath(new URL('.', import.meta.url)), 'src/assets/main.ts'),
      },
      output: {
        assetFileNames: 'assets/[name].[ext]',
        entryFileNames: 'assets/[name].js',
        chunkFileNames: 'assets/chunks/[name].[hash].js',
      },
    },
  },
}))
