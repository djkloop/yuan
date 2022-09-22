import { App } from "vue"
import createVueJsonSchemaForm from "./Form"
import { IGlobalOptions } from "yuan-types"


const createSchemaCore = (globalOptions: IGlobalOptions = {}) => {
  const VueJsonSchemaForm = createVueJsonSchemaForm(globalOptions)
  // 注册install方法
  VueJsonSchemaForm.install = (app: App, options: any = {}) => {
    app.component(options.name || VueJsonSchemaForm.name, VueJsonSchemaForm)
  }

  return VueJsonSchemaForm
}

export default createSchemaCore
