import createSchemaCore from "yuan-core"
import globalWidgetsMaps from "./globalWidgets"
import { IGlobalOptions } from "yuan-types"
import { defineComponent, h, onMounted, ref } from "vue"

const Form = defineComponent({
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    const formRef = ref(null);
    if (attrs.setFormRef) {
      onMounted(() => {
        (attrs.setFormRef as any)(formRef.value);
      });
    }
    return () => {
      const { setFormRef, ...otherAttrs } = attrs;
      return h('el-form', {
        ref: formRef,
        ...otherAttrs
      }, slots);
    };
  }
}) as any



const globalOptions: IGlobalOptions = {
  globalWidgetsMaps,
  componentMaps: {
    Form,
    formItem: 'el-form-item',
    button: 'el-button',
    popover: 'el-popover'
  }
}

const VueJsonSchemaForm = createSchemaCore(globalOptions)


export default VueJsonSchemaForm
