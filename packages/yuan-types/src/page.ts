import { IMaterial } from "yuan-types"

export interface IPage {
  /**
   * 每个页面的id
   */
  id: string
  /**
   * 每个页面的名称
   */
  name: string
  /**
   * 每个页面的标题
   */
  title: string
  /**
   * 每个页面的描述
   */
  description: string
  /**
   * 当前页面所有的物料节点
   */
  children: IMaterial[],
}
