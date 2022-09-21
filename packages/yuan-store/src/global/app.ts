// Types
import type { ISchema } from "../types";
// Libs
import { defineStore } from "pinia";
import { reactive } from "vue";


export const useAppGlobalStore = defineStore('__yuan__app__store__', () => {
  // 全局描述协议
  const schema = reactive<ISchema>({
    "type": "form",
    "api": "/amis/api/mock2/form/saveForm",
    "body": [
      {
        "type": "input-text",
        "name": "name",
        "label": "姓名："
      },
      {
        "type": "input-email",
        "name": "email",
        "label": "邮箱："
      }
    ]
  })


  return {
    schema
  }
})

// 注册全局store
export const RegisterAppGlobalStore = () => {
  return useAppGlobalStore()
}
