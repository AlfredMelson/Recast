/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
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

export function TypeDetermination(value: any): DataType {
  if (isNumber(value)) {
    return DataType.Number
  } else if (isString(value)) {
    return DataType.String
  } else if (isBoolean(value)) {
    return DataType.Boolean
  } else if (isNull(value)) {
    return DataType.Null
  } else if (isArray(value)) {
    return DataType.Array
  } else {
    return DataType.Object
  }
}

export function TypeCast(type: DataType, value: any): any {
  const currentType = TypeDetermination(value)
  switch (currentType) {
    case DataType.String:
      switch (type) {
        case DataType.Number:
          return parseInt(value) || 0
        case DataType.Boolean:
          return value.length > 0
        case DataType.Null:
          return null
        case DataType.Array:
          return [value]
        case DataType.Object:
          return { string: value }
        default:
          return value
      }
    case DataType.Number:
      switch (type) {
        case DataType.String:
          return `${value}`
        case DataType.Boolean:
          return Boolean(value)
        case DataType.Null:
          return null
        case DataType.Array:
          return [value]
        case DataType.Object:
          return { number: value }
        default:
          return value
      }
    case DataType.Boolean:
      switch (type) {
        case DataType.String:
          return value ? 'true' : 'false'
        case DataType.Number:
          return value ? 1 : 0
        case DataType.Null:
          return null
        case DataType.Array:
          return [value]
        case DataType.Object:
          return { boolean: value }
        default:
          return value
      }
    case DataType.Null:
      switch (type) {
        case DataType.String:
          return ''
        case DataType.Number:
          return 0
        case DataType.Boolean:
          return false
        case DataType.Array:
          return [null]
        case DataType.Object:
          return { null: null }
        default:
          return value
      }
    case DataType.Object:
      switch (type) {
        case DataType.String:
          return ''
        case DataType.Number:
          return 0
        case DataType.Boolean:
          return false
        case DataType.Null:
          return null
        case DataType.Array:
          return Object.values(value)
        default:
          return value
      }
    case DataType.Array:
      switch (type) {
        case DataType.String:
          return ''
        case DataType.Number:
          return 0
        case DataType.Boolean:
          return false
        case DataType.Null:
          return null
        case DataType.Object:
          return { ...value }
        default:
          return value
      }
    default:
      return value
  }
}
