import { JsonNumber, JsonString, JsonBoolean, JsonArray, JsonFunction, JsonObject } from '.'
interface DataTypeProps {
  dataType: string | undefined
  dataValue: any
  dataKey: string | number
  onDelete?: (key: number | string) => void
  onEdit?: (newValue: any, key: string | number) => void
}
export function DataType({ dataType, dataValue, dataKey, onEdit, onDelete }: DataTypeProps) {
  const renderValue = () => {
    switch (dataType) {
      case 'number':
        return (
          <JsonNumber
            value={dataValue}
            dataKey={dataKey}
            dataType={dataType}
            onEdit={onEdit}
            onDelete={onDelete}
          />
        )
      case 'string':
        return (
          <JsonString
            value={dataValue}
            dataKey={dataKey}
            dataType={dataType}
            onEdit={onEdit}
            onDelete={onDelete}
          />
        )
      case 'object':
        return (
          <JsonObject
            value={dataValue}
            dataKey={dataKey}
            dataType={dataType}
            onDelete={onDelete}
            onEdit={onEdit}
          />
        )
      case 'boolean':
        return <JsonBoolean value={dataValue} dataKey={dataKey} dataType={dataType} />
      case 'array':
        return <JsonArray value={dataValue} dataKey={dataKey} dataType={dataType} />
      case 'function':
        return <JsonFunction value={dataValue} dataKey={dataKey} dataType={dataType} />
      default:
        return null
    }
  }
  return renderValue()
}
