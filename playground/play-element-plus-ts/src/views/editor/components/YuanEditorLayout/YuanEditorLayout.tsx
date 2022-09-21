import { defineComponent } from "vue";
import YuanEditorStart from "../YuanEditorStart/YuanEditorStart";
import YuanEditorCenter from "../YuanEditorCenter/YuanEditorCenter";
import YuanEditorEnd from "../YuanEditorEnd/YuanEditorEnd";

const YuanEditorLayout = defineComponent({
  name: "YuanEditorLayout",
  setup() {
    return () => {
      return (
        <main class="flex h-full">
          <div class="start">
            <YuanEditorStart />
          </div>
          <div class="center flex-auto">
            <YuanEditorCenter />
          </div>
          <div class="end">
            <YuanEditorEnd />
          </div>
        </main>
      )
    }
  }
})


export default YuanEditorLayout
