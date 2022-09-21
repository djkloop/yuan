import { type App } from "vue";
import { createPinia } from "pinia"

const Pinia = createPinia();

export default (app: App) => app.use(Pinia);
