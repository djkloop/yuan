export interface ISchema {
  type: string,
  uiTypePrefix?: string
  data?: object
  api?: string
  body?: ISchema[] | string | ISchema
  tpl?: string
  name?: string
  [key: string]: any
}
