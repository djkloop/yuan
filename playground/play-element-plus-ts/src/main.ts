import "uno.css"
import { createApp, App as VueApp } from 'vue'
import * as Vue from "vue"
import YuanPlugins from "./plugins"
import YuanRegister from "./register"
import { loadScript } from "./utils"
import App from './App.vue'
import { materialList } from "@/data"


// 全局注册Vue
window['Vue'] = Vue


// YuanLoadMicroComponents.load()

function runApp(app: VueApp) {
  YuanPlugins.use(app)
  YuanRegister.init()
  app.mount('#app')
}

const mSources = Array.from(new Set(materialList.map(m => m.source))).filter(m => m)
Promise.all(mSources.map(ms => loadScript(ms))).then(() => {
  const app = createApp(App)
  const mapSourceName: { [key: string]: boolean } = {}
  materialList.forEach(m => {
    if (window.YuanMicroComponents && m.source) {
      const { render } = window.YuanMicroComponents[m.sourceName]
      if (!mapSourceName[m.sourceName]) {
        app.component(m.sourceName, render)
        mapSourceName[m.sourceName] = true
      }
    }
  })
  runApp(app)
})
