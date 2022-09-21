import type { App } from 'vue';
import ElementPlus from 'element-plus'
import 'element-plus/theme-chalk/src/index.scss'
import zhCn from 'element-plus/es/locale/lang/zh-cn'

export default (app: App) => app.use(ElementPlus, { locale: zhCn });
