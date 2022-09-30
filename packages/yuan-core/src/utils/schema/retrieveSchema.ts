

export const resolveSchema = (schema: any, rootSchema: any, formData: any) => {
  // TODO: allOf
  // TODO: $ref
  return schema
};


// 循环递归每个节点
export const retrieveSchema = (schema: any, rootSchema: any, formData = {}) => {
  return resolveSchema(schema, rootSchema, formData)
}
