import { DefineComponent } from "vue"
import { TObjectAny } from "./props"

export interface IGlobalWidgetsMaps {
  widgetsComponents: TObjectAny
  widgetsTypes: {
    boolean: string
    string: string
    number: string
    integer: string
  }
  widgetsFormats: {
    color: string
  }
}

export interface IComponentMaps {
  Form: DefineComponent
  formItem: string
  button: string
  popover: string
  [key: string]: string | DefineComponent
}

export interface IGlobalOptions {
  globalWidgetsMaps?: IGlobalWidgetsMaps
  componentMaps?: IComponentMaps
}
