import { defineComponent } from "vue";
import { ElButton } from "element-plus"
import { SaveOne } from "@icon-park/vue-next"

const YuanHeaderEnd = defineComponent({
  name: "YuanHeaderEnd",
  setup() {
    return () => {
      return (
        <div>
          <ElButton text>
            <SaveOne theme="outline" size="16" class="mr-1 mt-1.26px" fill="#333" />
            保存
          </ElButton>
        </div>
      )
    }
  }
})


export default YuanHeaderEnd
