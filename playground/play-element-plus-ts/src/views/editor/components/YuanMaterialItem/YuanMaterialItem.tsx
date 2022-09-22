import { IconPark } from "@icon-park/vue-next/es/all";
import { ElPopover } from "element-plus";
import { defineComponent, ref, useAttrs } from "vue";
import { useDrag } from "vue3-dnd"
import { cloneDeep } from "lodash-es"


export const yuanMaterialItemProps = {
  title: String,
  description: String,
  icon: String,
  sourceName: String
}

const YuanMaterialItem = defineComponent({
  name: 'YuanMaterialItem',
  props: yuanMaterialItemProps,
  setup(props) {
    const elPop = ref<typeof ElPopover | null>(null)
    const attrs = useAttrs()
    const allProps = cloneDeep({ ...props, ...attrs })

    /// 鼠标点击的时候
    const onMousedown = () => {
      elPop.value?.hide()
    }

    const [_, drop] = useDrag(() => ({
      type: props.sourceName!,
      item: allProps,
      end: () => {
        onMousedown()
      },
      collect: monitor => {
        return {
          isDragging: monitor.isDragging(),
          handlerId: monitor.getHandlerId(),
        }
      },
    }))


    return () => {
      return (
        <span>
          <ElPopover showAfter={1000} placement={"right"} ref={elPop}>
            {{
              reference: () => (
                <div role={props.sourceName} ref={drop} onMousedown={onMousedown} class="border cursor-pointer h-32px items-center flex px-1 rounded border-#e3e6eb hover:border-sky-400">
                  <div><IconPark type={props.icon!} theme="outline" class="mr-6px vertical-text-top" size="14" fill="#000000e6" /></div>
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
