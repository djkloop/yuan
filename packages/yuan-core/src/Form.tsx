import { ElForm } from "element-plus";
import { computed, defineComponent, getCurrentInstance, onMounted, provide, ref, resolveComponent, toRef, watch } from "vue";
import { IGlobalOptions } from "yuan-types";
import { uuid } from "yuan-shared"
import { GlobalFormSymbol } from "./context";
import { formProps } from "./props";
import { getDefaultFormState } from "./utils/schema/getDefaultFormState";
import styles from "./Form.module.scss";

const FormWrapper = defineComponent({
  inheritAttrs: false,
  props: {
    setFormRef: {
      type: Function,
    }
  },
  setup(_, { attrs, slots }) {
    const formRef = ref(null);
    if (attrs.setFormRef) {
      onMounted(() => {
        (attrs.setFormRef as any)(formRef.value);
      });
    }
    return () => {
      const { setFormRef, ...otherAttrs } = attrs;
      return <ElForm ref={formRef} v-slots={slots} {...otherAttrs} />
    };
  }
})

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
        Object.entries(globalOptions.globalWidgetsMaps.widgetsComponents).forEach(
          ([componentName, component]) => formInstance?.appContext.app.component(componentName, component)
        );
        VueJsonSchemaForm.flag_installed = true
      }

      const isFallBackLabel = toRef(props, 'fallbackLabel')
      // provide
      provide(GlobalFormSymbol, {
        isFallBackLabel
      })
      // ???
      const rootFormData = ref(getDefaultFormState(props.schema, props.modelValue, props.schema, props.strictMode));
      const footerParams = computed(() => ({
        ...props.formFooter
      }));

      /// form ref
      let formRef = null

      /// v-model
      watch(rootFormData, (newValue, oldValue) => {
        console.log(newValue, ' watch rootFormData ')
        console.log(oldValue, ' watch rootFormData ')
      }, { deep: true })

      watch(() => props.schema, (newSchema, oldSchema) => {
        console.log(newSchema, ' watch props.schema ')
        console.log(oldSchema, ' watch props.schema ')
      })



      return () => {

        const {
          layoutColumn = 1,
          inlineFooter,
          labelSuffix,
          isMiniDes,
          defaultSelectFirstOption,
          ...uiResetFormProps
        } = props.formProps

        const { inline = false, labelPosition = 'top' } = uiResetFormProps

        const composeSchemaProps = {
          schema: props.schema,
          uiSchema: props.uiSchema,
          errorSchema: props.errorSchema,
          customFormats: props.customFormats,
          customRule: props.customRule,
          rootSchema: props.schema,
          rootFormData: rootFormData.value,
          curNodePath: '',
          globalOptions,
          formProps: Object.assign({}, {
            labelPosition,
            labelSuffix: "",
            defaultSelectFirstOption: true,
            inline,
          }, props.formProps)
        }

        return (
          <FormWrapper
            data-wrapper-id={uuid()}
            class={{
              [styles.genFormComponent]: true,
            }}
            setFormRef={(form: any) => {
              formRef = form
              emit('form-mounted', form, {
                formData: rootFormData.value
              })
            }}
            {...Object.assign({}, uiResetFormProps, { inline, labelPosition })}
          >
            {

            }
          </FormWrapper>
        )
      }
    }
  })

  return VueJsonSchemaForm
}

export default createVueJsonSchemaForm

