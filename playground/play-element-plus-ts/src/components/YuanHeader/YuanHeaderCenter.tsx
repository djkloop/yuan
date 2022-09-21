import { defineComponent } from "vue";
import { Refresh, Copy } from "@icon-park/vue-next"
import { Tippy } from 'vue-tippy'

const YuanHeaderCenter = defineComponent({
  name: "YuanHeaderCenter",
  setup() {
    return () => {
      return (
        <div class="bg-#f0f1f5 color-#0d0c22 w-400px flex items-center justify-between text-14px w-300px px-3 font-mono rounded py-1">
          <Tippy content={"复制标题"}>
            <Copy class="cursor-pointer" theme="outline" size="14" fill="#9f9ea3" />
          </Tippy>
          <span>表单应用0915</span>
          <Tippy content={"刷新表单"}>
            <Refresh class="cursor-pointer" theme="outline" size="14" fill="#9f9ea3" />
          </Tippy>
        </div>
      )
    }
  }
})


export default YuanHeaderCenter
