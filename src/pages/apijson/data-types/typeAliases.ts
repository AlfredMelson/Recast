export function getType(
  value: string | undefined
):
  | 'number'
  | 'string'
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

export type ApiDataSortAlias = {
  dataType: string | undefined
  dataKey: string | number
  dataValue?: any
  i?: number
  onDelete?: (key: number | string) => void
  onEdit?: (newValue: any, key: string | number) => void
}

type ApiValueProp = {
  [index: number]: any
}

export type ApiArrayAlias = {
  dataKey: number | string
  i?: number
  value?: Array<ApiValueProp>
  dataType?: string
  onEdit?: (newvalue: any, key: string | number) => void
  onDelete?: (dataKey: string | number) => void
}

export type ApiObjectAlias = {
  dataKey: string | number
  i?: number
  value?: { [key: string]: any } | undefined
  dataType?: string | undefined
  onEdit?: (newVale: any, key: string | number) => void
  onDelete?: (dataKey: string | number) => void
}

export type ApiBooleanAlias = {
  dataKey: string | number
  value?: []
  dataType?: string
}

export type ApiFunctionAlias = {
  dataKey: string | number
  dataType?: string
  value?: any
}

export type ApiNumberAlias = {
  dataKey: string | number
  value?: number
  dataType?: string
  onEdit?: (newVale: any, key: string | number) => void
  onDelete?: (dataKey: string | number) => void
}

export type ApiStringAlias = {
  dataKey: string | number
  value?: number
  dataType?: string
  onEdit?: (newVale: any, key: string | number) => void
  onDelete?: (dataKey: string | number) => void
}

export type ApiUndefinedAlias = {
  dataKey: string | number
  dataType: string
  value?: []
}
