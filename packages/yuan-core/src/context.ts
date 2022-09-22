import { InjectionKey, Ref } from "vue"

// 全局注入属性
export const GlobalFormSymbol: InjectionKey<Ref<any>> = Symbol('GlobalFormSymbol')
