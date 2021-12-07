export function getType(
  value: string | undefined
):
  | 'string'
  | 'number'
  | 'bigint'
  | 'boolean'
  | 'symbol'
  | 'undefined'
  | 'object'
  | 'function'
  | 'array' {
  if (Array.isArray(value)) return 'array'
  return typeof value
}

export interface DataSortProps {
  i: number
  dataType: string | undefined
  dataKey: string | number
  dataValue?: any
}

type ValueProp = {
  [index: number]: any
}
export interface JsonArrayProps {
  dataKey: number | string
  value?: Array<ValueProp>
  dataType?: string
  onEdit?: (newvalue: any, key: string | number) => void
  onDelete?: (dataKey: string | number) => void
}

export interface JsonBooleanProps {
  dataKey: string | number
  value?: []
  dataType?: string
}

export interface JsonFunctionProps {
  dataKey: string | number
  dataType?: string
  value?: any
}

export interface JsonNumberProps {
  dataKey: string | number
  value?: number
  dataType?: string
  onEdit?: (newVale: any, key: string | number) => void
  onDelete?: (dataKey: string | number) => void
}

export interface JsonObjectProps {
  dataKey: string | number
  value?: { [key: string]: any } | undefined
  dataType?: string | undefined
  onEdit?: (newVale: any, key: string | number) => void
  onDelete?: (dataKey: string | number) => void
}

export interface JsonStringProps {
  dataKey: string | number
  value?: number
  dataType?: string
  onEdit?: (newVale: any, key: string | number) => void
  onDelete?: (dataKey: string | number) => void
}

export interface JsonUndefinedTypes {
  dataKey: string | number
  dataType: string
  value?: []
}
