import { YuanSelect } from "./YuanSelect"

// 全局widget
// 需要特殊处理的组件
const widgetsComponents = {
  YuanSelect
}

// types
const widgetsTypes = {
  boolean: 'el-switch',
  string: 'el-input',
  number: 'el-input-number',
  integer: 'el-input-number',
}

// formats
const widgetsFormats = {
  color: 'el-color-picker'
}

export default {
  widgetsTypes,
  widgetsFormats,
  widgetsComponents
}
