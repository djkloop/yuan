import { defineComponent } from "vue";
import YuanEditorStart from "../YuanEditorStart/YuanEditorStart";
import YuanEditorCenter from "../YuanEditorCenter/YuanEditorCenter";
import YuanEditorEnd from "../YuanEditorEnd/YuanEditorEnd";
import { DndProvider } from 'vue3-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'

const YuanEditorLayout = defineComponent({
  name: "YuanEditorLayout",
  setup() {
    return () => {
      return (
        <main class="flex h-full">
          <DndProvider backend={HTML5Backend}>
            <div class="start">
              <YuanEditorStart />
            </div>
            <div class="center bg-#f8f8fa flex-auto">
              <YuanEditorCenter />
            </div>
            <div class="end">
              <YuanEditorEnd />
            </div>
          </DndProvider>
        </main>
      )
    }
  }
})


export default YuanEditorLayout
