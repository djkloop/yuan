import { defineComponent } from "vue";
import { useRouter } from "vue-router"

const Home = defineComponent({
  name: "YuanHome",
  setup() {
    return () => {
      const router = useRouter()
      router.push('/editor')
      return (
        <div>
          Home.tsx
        </div>
      )
    }
  }
})

export default Home
