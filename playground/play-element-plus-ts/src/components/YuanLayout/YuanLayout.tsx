import { defineComponent } from "vue";
import YuanHeader from "../YuanHeader/YuanHeader"


const YuanBasicLayout = defineComponent({
  name: 'YuanBasicLayout',
  setup(_, { slots }) {

    const renderSlotFooter = () => {
      return slots.footer ? <div>slots.footer()</div> : null
    }

    return () => {

      return (
        <div class="yuan-layout h-full flex flex-col">
          <div class="yuan-header h-[48px]">
            <YuanHeader />
          </div>
          <div class="yuan-content h-[calc(100vh-48px)] overflow-hidden">
            {slots.default?.()}
          </div>
          {renderSlotFooter()}
        </div>
      )
    }
  }
})

export default YuanBasicLayout
