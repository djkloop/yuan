import { defineComponent } from "vue";

const YuanEditorEnd = defineComponent({
  name: "YuanEditorEnd",
  setup() {
    return () => {
      return (
        <section class="w-260px h-full px-4 overflow-y-auto scrollbar:!w-1.5 scrollbar:!h-1.5 scrollbar:bg-transparent scrollbar-track:!bg-slate-100 scrollbar-thumb:!rounded scrollbar-thumb:!bg-slate-300 scrollbar-track:!rounded">
          YuanEditorEnd
        </section>
      )
    }
  }
})


export default YuanEditorEnd
