import _ from 'lodash'

export const isArray = (data: []) => Array.isArray(data)
export const isObject = (data: object) => !isArray([]) && _.isObject(data)
export const isNull = (data: null) => data === null
export const isNumber = (data: number) => _.isNumber(data)
export const isString = (data: string) => _.isString(data)
export const isBoolean = (data: boolean) => _.isBoolean(data)

export enum DataType {
  Object = 'object',
  Array = 'array',
  String = 'string',
  Number = 'number',
  Boolean = 'boolean',
  Null = 'null',
}
