import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { resolve } from 'path';
import postCssPxToRem from 'postcss-pxtorem';
import { createStyleImportPlugin, VantResolve } from 'vite-plugin-style-import';

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
      '#': resolve(__dirname, './src/types'),
      // utils: resolve(__dirname, './src/utils'),
      // api: resolve(__dirname, './src/api'),
    },
  },
  css: {
    postcss: {
      plugins: [
        postCssPxToRem({
          rootValue: 37.5,
          propList: ['*'],
        }),
      ],
    },
  },
  plugins: [
    vue(),
    createStyleImportPlugin({
      resolves: [VantResolve()],
    }),
  ],
});
