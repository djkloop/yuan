import { IElement, IProject, IPage } from 'yuan-types'
import { uuid } from "./utils"

export class Project implements IProject {
  name: string = "New Project";
  type: string = "web";
  description: string = "New Project Description";
  pages: Page[] = [];

  constructor() {
  }

  // 
  static create(uProject?: IProject) {
    // 创建一个项目
    const project = new Project();
    if (uProject) {
      project.name = uProject.name
      project.description = uProject.description
      project.pages = uProject.pages.map(up => Page.create(up))
    } else {
      // 创建一个页面
      const page = Page.create();
      // 添加进当前项目
      project.addPage(page)
    }
    return project
  }


  // 添加页面
  addPage(page: Page) {
    this.pages.push(page)
  }

  // 删除页面
  removePage(page: Page) {
    const idx = this.pages.findIndex(p => p.id === page.id)
    if (idx !== -1) {
      this.pages.splice(idx, 1)
    }
  }

  // 插入页面
  insertPage(index: number, page: Page) {
    this.pages.splice(index, 0, page)
  }

  // 获取page json
  getPageJson() {
    return {
      name: this.name,
      description: this.description,
      pages: this.pages.map(page => page.getPageJson())
    }
  }
}

// 项目中的每个页面类
export class Page implements IPage {

  id: string = "PageID"
  name: string = "New Page";
  description: string = "New Page Description";
  elements: PageElement[] = [];

  constructor() {

  }

  static create(uPage?: IPage) {
    const page = new Page()
    if (uPage) {
      page.description = uPage.description
      // 
      page.id = uPage.id
      page.name = uPage.name
      page.elements = uPage.elements.map(element => PageElement.create(element))
    }
    return page
  }

  // 添加一个元素
  addElement(element: PageElement) {
    this.elements.push(element)
  }

  // 删除一个元素
  removeElement(element: PageElement) {
    const idx = this.elements.findIndex(e => e.id === element.id)
    if (idx !== -1) {
      this.elements.splice(idx, 1)
    }
  }

  // 插入一个元素
  insertElement(index: number, element: PageElement) {
    this.elements.splice(index, 0, element)
  }

  public getPageJson() {
    return {
      id: this.id,
      name: this.name,
      description: this.description,
      elements: this.elements.map(element => element.getElementJson())
    }
  }

}

// 页面上的每个元素类
export class PageElement implements IElement {
  id: string = uuid();
  name: string = "Element Name";
  mId: number = 0;
  mVersion: string = "Null Version";
  constructor() { }

  static create(uElement?: IElement) {
    const element = new PageElement()
    if (uElement) {
      element.id = uElement.id
      element.name = uElement.name
      element.mId = uElement?.mId
      element.mVersion = uElement?.mVersion
    }
    return element
  }

  getElementJson() {
    return {
      id: this.id,
      name: this.name,
      mId: this.mId,
      mVersion: this.mVersion
    }
  }
}
