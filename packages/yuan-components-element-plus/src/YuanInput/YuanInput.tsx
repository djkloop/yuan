import { defineComponent } from "vue";
import { each, merge } from "@formily/shared"
import { connect, mapProps } from "@formily/vue"
import { ElInput } from "element-plus"

// setup: 1
const transformComponent = (Tag: any, transformRules: any, defaultProps?: any) => {
  return defineComponent({
    setup(_, { attrs, slots }) {
      let data = {
        ...attrs,
      }
      if (transformRules) {
        const listeners = transformRules
        each(listeners, (event, extract) => {
          data[`on${event[0].toUpperCase()}${event.slice(1)}`] =
            attrs[`on${extract[0].toUpperCase()}${extract.slice(1)}`]
        })
      }
      if (defaultProps) {
        data = merge(defaultProps, attrs)
      }
      return () => <Tag {...data} v-slots={slots} />
    }
  })
}

// setup:2
const TInput = transformComponent(ElInput, {
  change: 'update:modelValue',
})

// setup: 3
export const YuanInput = connect(TInput, mapProps({
  value: 'modelValue',
  readOnly: 'readonly',
}))

export default YuanInput
