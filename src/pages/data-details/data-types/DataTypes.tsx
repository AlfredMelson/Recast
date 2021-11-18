import { JsonObject } from './JsonObject'
import { JsonNumber, JsonString, JsonBool, JsonArray, JsonFunction } from '.'
interface DataTypeState {
  dataType: string | undefined
  dataValue: any
  dataKey: string | number
  onEdit: (newValue: any, key: string | number) => void
  onDelete: (key: number | string) => void
}
export function DataTypes({ dataType, dataValue, dataKey, onEdit, onDelete }: DataTypeState) {
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
        return <JsonBool value={dataValue} dataKey={dataKey} dataType={dataType} />
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
