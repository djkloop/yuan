import { ISchema } from "@formily/vue"

export interface IMaterialHistory {
  /**
   * 每个物料的历史cdn地址
   */
  source: string
  /**
   * 每个物料的历史版本号
   */
  version: string
  /**
   * 每个物料对应的cdn导出name [umd模式] 对应的name名称
   */
  sourceName: string
  /**
   * 每个物料的icon
   */
  icon: string
}

/**
 * 每个物料的属性
 */
export interface IMaterial extends ISchema {
  /**
   * 每个物料的id
   */
  id: string
  /**
   * 每个物料的来源cdn地址，有些组件是远程加载过来的
   */
  source: string
  /**
   * 每个物料对应的cdn导出name [umd模式] 对应的name名称
   * 
   * example: window['YuanMicroComponent'][material.sourceName]
   */
  sourceName: string
  /**
   * 每个物料的默认版本号
   */
  version: string,
  /**
   * 每个物料的icon
   */
  icon: string
  /**
   * 对应无聊的分类id
   */
  categoryId: string
  /**
   * 物料历史记录
   */
  materialHistory?: IMaterialHistory[]
}
