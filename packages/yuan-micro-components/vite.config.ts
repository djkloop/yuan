import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJSX from "@vitejs/plugin-vue-jsx"
import dts from 'vite-plugin-dts'
import { viteExternalsPlugin } from "vite-plugin-externals"
const pkg = require("./package.json")

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: 'src/index.ts',
      name: 'YuanMicroComponents',
      fileName: format => `yuan.micro-components.${pkg.version}.${format}.production.js`,
    },
  },
  plugins: [vue(), dts({
    outputDir: ['dist'],
    include: './src',
    insertTypesEntry: true,
    copyDtsFiles: false
  }), vueJSX(), viteExternalsPlugin({
    vue: 'Vue'
  })]
})
