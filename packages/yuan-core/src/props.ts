import { PropType } from "vue"
import { falseProp, IFormFooterProps, IFormProps, makeObjectProp, TObjectAny } from "yuan-types"

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
  formProps: makeObjectProp<IFormProps>(true),
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
  formProps
}
