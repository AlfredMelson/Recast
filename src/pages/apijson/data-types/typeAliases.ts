export function getType(
  value: string | undefined
):
  | 'array'
  | 'bigint'
  | 'boolean'
  | 'function'
  | 'number'
  | 'object'
  | 'string'
  | 'symbol'
  | 'undefined' {
  if (Array.isArray(value)) return 'array'
  return typeof value
}

export type ApiDataSortAlias = {
  id: number
  dataType: string | undefined
  dataKey: string | number
  dataValue?: any
  onDelete?: (key: number | string) => void
  onEdit?: (newValue: any, key: string | number) => void
}

type ApiValueProp = {
  [index: number]: any
}

export type ApiArrayAlias = {
  id: number
  dataKey: number | string
  value?: Array<ApiValueProp>
  dataType?: string
  onEdit?: (newvalue: any, key: string | number) => void
  onDelete?: (dataKey: string | number) => void
}

export type ApiObjectAlias = {
  id: number
  dataKey: string | number
  value?: { [key: string]: any } | undefined
  dataType?: string | undefined
  onEdit?: (newVale: any, key: string | number) => void
  onDelete?: (dataKey: string | number) => void
}

export type ApiBooleanAlias = {
  id: number
  dataKey: string | number
  value?: []
  dataType?: string
}

export type ApiFunctionAlias = {
  id: number
  dataKey: string | number
  dataType?: string
  value?: any
}

export type ApiNumberAlias = {
  id: number
  dataKey: string | number
  value?: number
  dataType?: string
  onEdit?: (newVale: any, key: string | number) => void
  onDelete?: (dataKey: string | number) => void
}

export type ApiStringAlias = {
  id: number
  dataKey: string | number
  value?: number
  dataType?: string
  onEdit?: (newVale: any, key: string | number) => void
  onDelete?: (dataKey: string | number) => void
}

export type ApiUndefinedAlias = {
  id: number
  dataKey: string | number
  dataType: string
  value?: []
}
