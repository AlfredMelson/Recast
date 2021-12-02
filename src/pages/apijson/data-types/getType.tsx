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
