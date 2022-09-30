import { isObject } from "yuan-shared"
import { retrieveSchema } from "./retrieveSchema"
import { getSchemaType } from "./type";

export function isFixedItems(schema: any) {
  return (
    Array.isArray(schema.items)
    && schema.items.length > 0
    && schema.items.every((item: any) => isObject(item))
  );
}

export const mergeDefaultsWithFormData = (defaults: any, formData: any) => {
  if (isObject(formData)) {
    const acc = Object.assign({}, defaults);
    return Object.keys(formData).reduce((preAcc, key) => {
      preAcc[key] = mergeDefaultsWithFormData(
        defaults ? defaults[key] : {},
        formData[key]
      )
      return preAcc
    }, acc)
  }
}

const computeDefaults = (
  _schema: any,
  parentDefaults: any,
  rootSchema: any,
  rawFormData = {},
  includeUndefinedValues = false,
  haveAllFields = false
) => {
  let schema = isObject(_schema) ? _schema : {};
  const formData = isObject(rawFormData) ? rawFormData : {};
  console.log(schema, ' schema ')

  if ('allOf' in schema) {
    // TODO: computeDefaults allOf
  }

  let defaults = parentDefaults
  if (isObject(defaults) && isObject(schema.default)) { }
  else if (isFixedItems(schema)) { }


  if (typeof defaults === 'undefined') {
    defaults = schema.default;
  }

  // 在这里拿到schema的type
  switch (getSchemaType(schema)) {
    case 'null':
      return null;
    case 'object':
      return Object.keys(schema.properties || {}).reduce((acc, key) => {
        // Compute the defaults for this node, with the parent defaults we might
        // have from a previous run: defaults[key].
        const computedDefault = computeDefaults(
          schema.properties[key],
          (defaults || {})[key],
          rootSchema,
          (formData || {})[key],
          includeUndefinedValues,
          haveAllFields
        );
        if (includeUndefinedValues || computedDefault !== undefined) {
          (acc as any)[key] = computedDefault;
        }
        return acc;
      }, {});
  }
  console.log(defaults)
}



export const getDefaultFormState = (
  _schema: any,
  formData: any,
  rootSchema = {},
  includeUndefinedValues = true,
  haveAllFields = false
) => {
  if (!isObject) {
    throw Error(`schema 格式不正确: ${_schema}`)
  }

  const schema = retrieveSchema(_schema, rootSchema, formData)

  console.log('schema', schema)


  const defaults = computeDefaults(
    schema,
    _schema.default,
    rootSchema,
    formData,
    includeUndefinedValues,
    haveAllFields
  )

  if (typeof formData === 'undefined') {
    return defaults
  }


  if (isObject(formData) || Array.isArray(formData)) {
    return mergeDefaultsWithFormData(defaults, formData)
  }
}
