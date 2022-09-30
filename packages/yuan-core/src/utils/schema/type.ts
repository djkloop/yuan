export const guessType = function guessType(value: any) {
  if (Array.isArray(value)) {
    return 'array';
  } if (typeof value === 'string') {
    return 'string';
  } if (value == null) {
    return 'null';
  } if (typeof value === 'boolean') {
    return 'boolean';
    // eslint-disable-next-line no-restricted-globals
  } if (!isNaN(value)) {
    return 'number';
  } if (typeof value === 'object') {
    return 'object';
  }
  // Default to string if we can't figure it out
  return 'string';
};
// 获取给定 schema 类型。
export function getSchemaType(schema: any) {
  const { type } = schema;

  // 通过const 申明的常量 做类型推断
  if (!type && schema.const) {
    return guessType(schema.const);
  }

  // 枚举默认字符串
  if (!type && schema.enum) {
    return 'string';
  }

  // items 推断为 array 类型
  if (!type && (schema.items)) {
    return 'array';
  }

  // anyOf oneOf 不申明 type 字段
  if (!type && (schema.properties || schema.additionalProperties)) {
    return 'object';
  }

  if (type instanceof Array && type.length === 2 && type.includes('null')) {
    return type.find(curType => curType !== 'null');
  }

  return type;
}
