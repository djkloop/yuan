// 编辑器引擎的类型
// export interface IEditorEngine {

// }


// // 页面上的组件类型
// export interface IWidgets {

// }


// 每个物料的历史版本信息
export interface IMaterialData {
  /** 物料源 */
  source: string
  /** 物料版本号 */
  version: string
}


export interface ICategory {
  /** 分类id */
  id: string
  /** 分类名称 */
  name: string
}


export interface IMaterial {
  id: number
  /** 名字 */
  name: string
  /** 标题 */
  title: string
  /** 描述 */
  description: string
  /** 缩略图 */
  thumbnail: string
  /** 类型  */
  type: string
  /** 分类  */
  category: ICategory
  /** 每个分类下的物料数据  */
  mData: IMaterialData[],
  /** 默认使用版本  */
  version: string
  /** 默认使用物料源  */
  source: string
}

export interface IMaterialLoader {
  type: string,
  load(material: IMaterial): Promise<any>;
}

export interface IProject {
  name: string
  type: string
  description: string
  pages: IPage[]
}

export interface IPage {
  id: string,
  name: string
  description: string
  elements: IElement[]
}

export interface IElement {
  /** 主区域元素的id */
  id: string
  /**  主区域元素的名称 */
  name: string
  /** 物料id */
  mId: number
  /** 物料版本 */
  mVersion: string
}

