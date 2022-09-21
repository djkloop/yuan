import type { App } from 'vue';

import ElementPlusPlugin from './element-plus';
import VueTippyPlugin from './vue-tippy';
import VueRouterPlugin from './vue-router';
import PiniaPlugin from "./pinia";

const YuanPlugins = {
  use(app: App): App {
    app.use(PiniaPlugin)
    app.use(VueRouterPlugin)
    app.use(ElementPlusPlugin)
    app.use(VueTippyPlugin)
    return app
  },
}

export default YuanPlugins;
