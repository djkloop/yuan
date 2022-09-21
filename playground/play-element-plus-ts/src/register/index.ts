/// 开始注册全局事件/数据
import { App } from "vue";
import StoreRegister from "./store"
let resgiterInstance: Register | null = null
class Register {

  constructor(app?: App) {
    this.initStore()
  }

  initStore() {
    // 注册全局数据
    StoreRegister.initGlobalStore()
  }

  static init(app?: App): Register {
    if (!resgiterInstance) {
      resgiterInstance = new Register(app)
    }
    return resgiterInstance
  }
}


export default Register
