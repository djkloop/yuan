import { IPage } from "./page"

export enum EProjectType {
  WEB,
  H5,
  MINIPROGRAM
}


/**
 * 项目
 */
export interface IProject {
  /**
   * 项目标题
   */
  id: string
  /**
   * 项目名称
   */
  name: string
  /**
   * 项目标题
   */
  title: string
  /**
 * 项目描述
 */
  descrption: string
  /**
   * 项目类型
   */
  type: EProjectType
  /**
   * 项目上的页面
   */
  pages: IPage[]
}
