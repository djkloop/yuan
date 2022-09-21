import { defineComponent } from "vue";
import YuanEditorLayout from "@/views/editor/components/YuanEditorLayout/YuanEditorLayout";


const Editor = defineComponent({
  name: 'YuanEditor',
  setup() {
    return () => {
      return (
        <YuanEditorLayout>

        </YuanEditorLayout>
      )
    }
  }
})

export default Editor
