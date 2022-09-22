import createSchemaCore from "yuan-core"
import globalWidgetsMaps from "./globalWidgets"
import { IGlobalOptions } from "yuan-types"

const globalOptions: IGlobalOptions = {
  globalWidgetsMaps
}

const VueJsonSchemaForm = createSchemaCore(globalOptions)
