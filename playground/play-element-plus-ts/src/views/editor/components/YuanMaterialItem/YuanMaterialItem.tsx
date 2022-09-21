import { ImageFiles } from "@icon-park/vue-next";
import { ElPopover } from "element-plus";
import { defineComponent } from "vue";

const YuanMaterialItem = defineComponent({
  name: 'YuanMaterialItem',
  props: {
    title: {
      type: String,
    },
    description: {
      type: String
    },
    thumbnail: {
      type: String
    }
  },
  setup(props) {
    return () => {
      return (
        <span>
          <ElPopover showAfter={1000} placement={"right"}>
            {{
              reference: () => (
                <div class="border cursor-pointer h-32px items-center flex px-1 rounded border-#e3e6eb hover:border-sky-400">
                  <div><ImageFiles theme="outline" class="mr-6px vertical-text-top" size="14" fill="#000000e6" /></div>
                  <div class="color-#000000e6 font-mono">{props.title}</div>
                </div>
              ),
              default: () => (
                <div class="flex flex-col">
                  <div class="font-bold text-14px py-2 color-black">{props.title}</div>
                  <div class="text-12px">{props.description}</div>
                </div>
              )
            }}
          </ElPopover>
        </span>
      )
    }
  }
})


export default YuanMaterialItem
