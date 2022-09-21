import { defineComponent } from "vue";
import { ElButton } from "element-plus"
import { InternalData, Formula, MoreTwo } from "@icon-park/vue-next"

const YuanHeaderStart = defineComponent({
  name: "YuanHeaderStart",
  setup() {
    return () => {
      return (
        <div>
          <ElButton text size="small">
            <InternalData theme="outline" size="14" class="mr-1 mt-1.2px" fill="#333" />
            <span>数据源</span>
          </ElButton>
          <ElButton text size="small" class="!ml-1">
            <Formula theme="outline" size="14" class="mr-1 mt-1.2px" fill="#333" />
            <span>变量</span>
          </ElButton>
          <ElButton text size="small" class="!ml-1">
            <MoreTwo theme="outline" size="14" class="mr-1 mt-0.1px" fill="#333" />
            <span>更多</span>
          </ElButton>
        </div>
      )
    }
  }
})


export default YuanHeaderStart
