import { defineComponent, reactive, ref } from "vue";
import { useDrop } from "vue3-dnd"
import { ElForm, ElFormItem } from "element-plus"
import { IMaterial } from "yuan-types";
import { uuid } from "@/utils";

// 参数可以传对象(key 是 field 的属性，value 是组件的属性，如果 value 为 true，代表映射的属性名相同)
// 参数可以传函数，函数可以直接对属性做更复杂的映射
// const FormItem = connect(ElFormItem, mapProps(
//   {
//     title: 'label',
//     required: true,
//   }
// ))

const YuanEditorCenter = defineComponent({
  name: "YuanEditorCenter",
  setup() {
    // TODO: 所有可以通过的类型需要从pinina获取，里面应该包括从远程加载的组件类型
    const accept = ref(['YuanInput', 'YuanImage'])
    let globalSchema = reactive({
      type: 'object',
      properties: {
        name: {
          type: 'string',
          title: '名称',
          required: true,
          "x-decorator": "FormItem",
          "x-component": "YuanInput"
        }
      }
    })


    // const createFieldSchema = (schema: IMaterial) => {
    //   console.log(schema, ' <<<')
    //   const fieldKey = uuid()
    //   globalSchema = Object.assign({}, globalSchema?.properties!, {
    //     [fieldKey]: {
    //       ...schema,
    //       required: true,
    //       default: 'source',
    //       "x-decorator": "ElFormItem",
    //       "x-component": schema.sourceName
    //     }
    //   })

    //   console.log(globalSchema)
    // }



    const [_, drop] = useDrop(() => ({
      accept: accept.value,
      drop: (item) => {
        // 在这里添加 页面的 child json schema
        // createFieldSchema(item)
      }
    }))

    return () => {
      return (
        <section class="h-[calc(100%-4rem)] bg-white m-8 rounded shadow-sm" ref={drop}>
          {
            <div class="w-full h-full flex items-center justify-center">从左侧拖进来组件吧~</div>
          }

        </section>
      )
    }
  }
})


export default YuanEditorCenter
