import { DataType } from './dataType'
import { isNumber, isArray, isBoolean, isNull, isString } from './is'

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
