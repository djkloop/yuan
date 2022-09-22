import { IMaterial } from "yuan-types";

export const materialList: IMaterial[] = [
  {
    id: '123-456',
    type: 'void',
    description: '用于在表单进行图片的展示。',
    categoryId: '123-456-777',
    version: '0.0.1',
    source: "/yuan.micro-components.0.0.1.umd.production.js",
    sourceName: 'YuanImage',
    title: '图片',
    icon: "ImageFiles",
    materialHistory: [
      {
        icon: 'ImageFiles',
        version: '0.0.0',
        sourceName: 'YuanImage',
        source: '/yuan.micro-components.0.0.1.umd.production.js'
      }
    ]
  },
  {
    id: '123-456-789',
    type: 'string',
    description: '用于输入/查看较短文本内容。',
    categoryId: '123-456-777',
    version: '0.0.1',
    source: "", // 空代表当前组件就是在项目中就有不需要远程加载
    sourceName: 'YuanInput',
    title: '单行输入',
    icon: "AddText",
    materialHistory: [
      {
        icon: 'AddText',
        version: '0.0.0',
        sourceName: 'YuanInput',
        source: ''
      }
    ]
  }
]
