import dts from 'vite-plugin-dts'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJSX from "@vitejs/plugin-vue-jsx"
// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: 'src/index.ts',
      name: 'stores',
      fileName: format => `yuan.stores.${format}.min.js`,
    },
    rollupOptions: {
      external: ['vue', 'pinia'],
      output: {
        // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
        globals: {
          vue: 'Vue',
        }
      }
    }
  },
  plugins: [vue(), vueJSX(), dts({
    outputDir: ['dist'],
    include: './src',
    insertTypesEntry: true,
    copyDtsFiles: false
  })]
})
