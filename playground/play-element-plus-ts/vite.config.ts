import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJSX from "@vitejs/plugin-vue-jsx"
import UnoCSS from 'unocss/vite'
import presetAttributify from '@unocss/preset-attributify'
import presetIcons from '@unocss/preset-icons'
import presetUno from '@unocss/preset-uno'
import { presetScrollbar } from 'unocss-preset-scrollbar'
import tsconfigPaths from 'vite-tsconfig-paths'
import Pages from 'vite-plugin-pages'

// https://vitejs.dev/config/
export default defineConfig({

  build: {
    cssCodeSplit: true,
    rollupOptions: {
      output: {
        manualChunks: {
          vue: ['vue'],
          'vue-use': ['@vueuse/core'],
          'element-plus': ['element-plus'],
        },
      },
    },
    chunkSizeWarningLimit: 2000,
  },
  plugins: [
    vue(),
    UnoCSS({
      shortcuts: [
        { logo: 'i-logos-vue w-6em h-6em transform transition-800' },
      ],
      presets: [
        presetUno(),
        presetAttributify(),
        presetScrollbar(),
        presetIcons({
          extraProperties: {
            'display': 'inline-block',
            'vertical-align': 'middle',
          },
        }),
      ],
    }),
    vueJSX(),
    Pages({
      exclude: ['**/components/**/*'],
      dirs: "src/views",
      extensions: ['vue', 'tsx'] // .tsx, .vue file
    }),
    tsconfigPaths({
      loose: true
    })]
})
