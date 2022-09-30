import { ElOption, ElSelect } from "element-plus"
import { defineComponent, PropType, useAttrs } from "vue"

export const YuanSelect = defineComponent({
  name: 'YuanSelect',
  props: {
    enumOptions: {
      default: () => [],
      type: Array as PropType<{ value: any, label: string }[]>
    }
  },
  setup(props) {
    const attrs = useAttrs()
    return () => {
      return (
        <ElSelect {...attrs}>
          {
            props.enumOptions.map((option) => (
              <ElOption label={option.label} value={option.value} />
            ))
          }

        </ElSelect>
      )
    }
  }
})
