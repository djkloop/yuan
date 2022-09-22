import { defineComponent, ref } from "vue";
import { IMaterial } from "yuan-types";
import { ElCollapse, ElCollapseItem } from "element-plus"
import "./YuanEditorStart.scss"
import YuanMaterialItem from "../YuanMaterialItem/YuanMaterialItem";
import { materialList } from "@/data"


const YuanEditorStart = defineComponent({
  name: "YuanEditorStart",
  setup() {
    const materials = ref<IMaterial[]>(materialList)
    /// 出于mock我直接先写死
    const colKeys = ref(['media'])
    /// 注册拖拽相关的逻辑


    return () => {
      return (
        <section class="w-260px h-full px-4 overflow-y-auto scrollbar:!w-1.5 scrollbar:!h-1.5 scrollbar:bg-transparent scrollbar-track:!bg-slate-100 scrollbar-thumb:!rounded scrollbar-thumb:!bg-slate-300 scrollbar-track:!rounded">
          <ElCollapse v-model={colKeys.value}>
            <ElCollapseItem title="多媒体" name="media" class="MaterialItem">
              <div class="grid grid-cols-2 gap-4">
                {
                  materials.value.length && materials.value.map(material => (
                    <YuanMaterialItem {...material} />
                  ))
                }
              </div>
            </ElCollapseItem>
          </ElCollapse>
        </section>
      )
    }
  }
})


export default YuanEditorStart
