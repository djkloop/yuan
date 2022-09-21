import { defineComponent } from "vue";

const YuanEditorCenter = defineComponent({
  name: "YuanEditorCenter",
  setup() {
    return () => {
      return (
        <section class="h-[calc(100%-4rem)] bg-#f8f8fa p-8">
          YuanEditorCenter
        </section>
      )
    }
  }
})


export default YuanEditorCenter
