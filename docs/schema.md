# Schema 属性文档
```ts
// TS类型不在这里过多解释
// 这里只是把每个字段干啥的打个注释
interface ISchema {
  type: string, // 组件类型 - 不在使用ui库的前缀！有专门的包来抹平差距 example: el-form/a-form/t-form/xx-form -> form
  uiTypePrefix?: string // ui库前缀 防止一个项目多个ui库 类型冲突
  data?: object // 当前组件/页面携带的数据
  api?: string // 请求的接口地址 example: form 的提交数据地址
  body?: ISchema[] // 子集
  [key: string]: any // 额外变量
}
```
