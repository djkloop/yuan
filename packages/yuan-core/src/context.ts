import { InjectionKey, Ref } from "vue"

export interface IGlobalFormProviderProps {
  isFallBackLabel: Ref<boolean>
}

// 全局注入属性
export const GlobalFormSymbol: InjectionKey<IGlobalFormProviderProps> = Symbol('GlobalFormSymbol')
