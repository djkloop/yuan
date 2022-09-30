import { PropType } from "vue"
import { falseProp, IFormFooterProps, IFormProps, makeObjectProp, TObjectAny } from "yuan-types"

const schemaFieldProps = {
  formProps: {
    type: null
  },
  // 全局的配置，用于 初始化差异，适配不同的ui框架
  globalOptions: {
    type: null
  },
  // 当前节点schema
  schema: {
    type: Object,
    default: () => ({})
  },
  // 当前节点Ui Schema
  uiSchema: {
    type: Object,
    default: () => ({})
  },
  // 当前节点Error Schema
  errorSchema: {
    type: Object,
    default: () => ({})
  },
  // 自定义校验
  customRule: {
    type: Function,
    default: null
  },
  // 自定义校验规则
  customFormats: {
    type: Object,
    default: () => ({})
  },
  // 根节点 Schema
  rootSchema: {
    type: Object,
    default: () => ({})
  },
  // 根节点的数据
  rootFormData: {
    type: null,
    default: () => ({})
  },
  // 当前节点路径
  curNodePath: {
    type: String,
    default: ''
  },
  // 是否必填
  required: {
    type: Boolean,
    default: false
  },
  // 是否需要校验数据组
  // object array 类型默认会最后追加一个校验组件校验整体数据
  needValidFieldGroup: {
    type: Boolean,
    default: true
  }
}

const formProps = {
  /**
   * 底部按钮相关的属性
   */
  formFooter: {
    type: Object as PropType<IFormFooterProps>,
    default: () => ({
      show: true,
      okBtnText: '保存',
      cancelBtnText: '取消'
    })
  },
  /**
   * v-model
   */
  modelValue: makeObjectProp<TObjectAny>(true),
  /**
   * 是否开启key作为label
   */
  fallbackLabel: falseProp,
  /**
   * 严格模式
   */
  strictMode: falseProp,
  /**
   * form相关的属性
   */
  formProps: makeObjectProp<IFormProps>(),
  /**
   * schema
   */
  schema: makeObjectProp<TObjectAny>(true),
  /**
   * 重置ui样式
   */
  uiSchema: makeObjectProp<TObjectAny>(),
  /**
   * 自定义校验规则
   */
  customFormats: makeObjectProp<TObjectAny>(),
  /**
   * 自定义校验
   */
  customRule: {
    type: Function,
    default: null
  },
  /**
   * 重置自定义错误
   */
  errorSchema: makeObjectProp<TObjectAny>()
}


export {
  formProps,
  schemaFieldProps
}
