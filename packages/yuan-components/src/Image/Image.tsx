import { defineComponent } from "vue";


const YuanImageProps = {
  src: String
}

export default defineComponent({
  name: 'YuanImage',
  props: YuanImageProps,
  setup(props) {
    return () => {
      return (
        <img src={props.src} />
      )
    }
  }
})
