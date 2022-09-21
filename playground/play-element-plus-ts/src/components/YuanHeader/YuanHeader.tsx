import { defineComponent } from "vue";
import YuanHeaderCenter from "./YuanHeaderCenter";
import YuanHeaderEnd from "./YuanHeaderEnd";
import YuanHeaderStart from "./YuanHeaderStart";


const YuanHeader = defineComponent({
  name: "YuanHeader",
  setup() {
    return () => {
      return (
        <header class="flex justify-between px-4  items-center h-full shadow">
          <YuanHeaderStart />
          <YuanHeaderCenter />
          <YuanHeaderEnd />
        </header>
      )
    }
  }
})


export default YuanHeader
