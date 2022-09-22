import { IProject, IPage, IMaterial, EProjectType } from 'yuan-types'
import { SchemaKey } from "@formily/vue"
import { uuid } from "./utils"


export class Project {

  id: string = uuid();
  name: string = "默认项目名称";
  title: string = '默认项目标题';
  descrption: string = '默认项目描述';
  type: EProjectType = EProjectType.WEB;
  pages: Page[] = [];

  // 创建一个项目
  static create(uProject?: IProject) {
    const project = new Project();
    if (uProject) {
      project.id = uProject.id
      project.name = uProject.name
      project.title = uProject.title
      project.descrption = uProject.descrption
      project.type = uProject.type
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
      id: this.id,
      name: this.name,
      title: this.title,
      description: this.descrption,
      type: this.type,
      pages: this.pages.map(page => page.getPageJson())
    }
  }
}

// 项目中的每个页面类
export class Page {

  id: string = uuid()
  name: string = "New Page Name";
  title: string = "New Page Title";
  description: string = "New Page Description";
  children: PageChildSchema[] = [];

  // 创建一个页面
  static create(uPage?: IPage) {
    const page = new Page()
    if (uPage) {
      page.id = uPage.id
      page.name = uPage.name
      page.title = uPage.title
      page.description = uPage.description
      page.children = uPage.children.map(child => PageChildSchema.create(child))
    }
    return page
  }

  // 添加一个元素
  addChild(child: PageChildSchema) {
    this.children.push(child)
  }

  // 删除一个元素
  removeChild(child: PageChildSchema) {
    const idx = this.children.findIndex(e => e.id === child.id)
    if (idx !== -1) {
      this.children.splice(idx, 1)
    }
  }

  // 插入一个元素
  insertChild(index: number, child: PageChildSchema) {
    this.children.splice(index, 0, child)
  }

  getPageJson() {
    return {
      id: this.id,
      name: this.name,
      description: this.description,
      children: this.children.map(child => child.getPageChildSchemaJson())
    }
  }

}

// 页面上的每个元素类
export class PageChildSchema {

  id: string = uuid();
  name: SchemaKey | undefined = "Child Name";
  version: string = "Null Version";
  categoryId: string = ""
  source: string = ''
  sourceName: string = ''
  icon: string = ''

  static create(uChild?: IMaterial) {
    const child = new PageChildSchema()
    if (uChild) {
      child.id = uChild.id
      child.name = uChild.name
      child.version = uChild.version
      child.categoryId = uChild.categoryId
      child.sourceName = uChild.sourceName
      child.source = uChild.source
      child.icon = uChild.icon
    }
    return child
  }

  getPageChildSchemaJson(): IMaterial {
    return {
      id: this.id,
      name: this.name,
      version: this.version,
      categoryId: this.categoryId,
      source: this.source,
      sourceName: this.sourceName,
      icon: this.icon
    }
  }
}
