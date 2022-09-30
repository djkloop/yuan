import { uuid } from "@/utils";
import { defineComponent, reactive, ref } from "vue";
import { useDrop } from "vue3-dnd"
import { IMaterial } from "yuan-types";
import VueJsonSchemaForm from "yuan-components-element-plus"

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
      "type": "object",
      "properties": {
        "name": {
          "type": "string",
        }
      }
    })

    const modelValue = reactive({})


    const createFieldSchema = (schema: IMaterial) => {
      const fieldKey = uuid()
      console.log(fieldKey, ' <<<', schema)
      console.log(globalSchema)
    }



    const [_, drop] = useDrop(() => ({
      accept: accept.value,
      drop: (item: IMaterial) => {
        // 在这里添加 页面的 child json schema
        createFieldSchema(item)
      }
    }))

    return () => {
      return (
        <section class="h-[calc(100%-4rem)] bg-white m-8 rounded shadow-sm" ref={drop}>
          {
            <div class="w-full h-full flex items-center justify-center">
              <VueJsonSchemaForm schema={globalSchema} v-model={modelValue} />
            </div>
          }
        </section>
      )
    }
  }
})


export default YuanEditorCenter
