import { defineComponent, getCurrentInstance } from "vue";
import { IGlobalOptions } from "yuan-types";
import { formProps } from "./props";

// 开始创建vue组件
const createVueJsonSchemaForm = (globalOptions: IGlobalOptions = {}) => {

  const VueJsonSchemaForm = defineComponent({
    name: 'VueJsonSchemaForm',
    props: formProps,
    emits: ['update:modelValue', 'change', 'cancel', 'submit', 'validation-failed', 'form-init', 'form-mounted'],
    setup(props, { slots, emit }) {
      const formInstance = getCurrentInstance()
      // 检查是否是第一次注册
      if (!VueJsonSchemaForm.flag_installed && globalOptions.globalWidgetsMaps?.widgetsComponents) {

      }
    }
  })

  return VueJsonSchemaForm
}

export default createVueJsonSchemaForm

