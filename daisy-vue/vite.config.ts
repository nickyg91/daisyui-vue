import { fileURLToPath, URL } from 'node:url';
import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueDevTools from 'vite-plugin-vue-devtools';
import { resolve } from 'node:path';

// https://vite.dev/config/
export default defineConfig({
  plugins: [tailwindcss(), vue(), vueDevTools()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'daisy-vue',
      fileName: `daisy-vue.js`,
    },
    rolldownOptions: {
      external: ['vue', 'tailwindcss', 'daisyui', 'uuid'],
      output: {
        globals: {
          vue: 'Vue',
        },
      },
    },
  },
});
