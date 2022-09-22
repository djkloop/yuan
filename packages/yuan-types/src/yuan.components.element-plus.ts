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

export interface IGlobalOptions {
  globalWidgetsMaps?: IGlobalWidgetsMaps
}
