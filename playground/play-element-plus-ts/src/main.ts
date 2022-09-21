import "uno.css"
import { createApp, App as VueApp } from 'vue'
import * as Vue from "vue"
import YuanPlugins from "./plugins"
import YuanRegister from "./register"
import { loadScript } from "./utils"
import App from './App.vue'
import { IMaterial } from "yuan-types"
import { materialList } from "@/data"


// 全局注册Vue
window['Vue'] = Vue


// YuanLoadMicroComponents.load()

function runApp(app: VueApp) {
  YuanPlugins.use(app)
  YuanRegister.init()
  app.mount('#app')
}

const mSources = materialList.map(m => m.source)
Promise.all(mSources.map(ms => loadScript(ms))).then(() => {
  const app = createApp(App)
  materialList.forEach(m => {
    if (window.YuanMicroComponents) {
      const { render } = window.YuanMicroComponents[m.name]
      app.component(m.name, render)
    }
  })
  runApp(app)
})
