import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJSX from "@vitejs/plugin-vue-jsx"
import dts from 'vite-plugin-dts'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: 'src/index.ts',
      name: 'YuanComponentsElementPlus',
      fileName: format => `yuan.components.element-plus.${format}.production.js`,
    },
    rollupOptions: {
      external: [
        'vue',
        'yuan-types',
        'element-plus',
        '@element-plus/icons-vue'
      ],
      output: {
        // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
        globals: {
          vue: 'Vue',
        }
      }
    }
  },
  plugins: [vue(), dts({
    outputDir: ['dist'],
    include: './src',
    insertTypesEntry: true,
    copyDtsFiles: false
  }), vueJSX()]
})
