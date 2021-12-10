import { motion } from 'framer-motion'
import { ApiDataSortAlias } from './typeAliases'
import { ApiNumber, ApiString, ApiBoolean, ApiArray, ApiFunction, ApiObject } from '.'

export default function ApiDataSort({
  i,
  dataType,
  dataValue,
  dataKey,
  onEdit,
  onDelete,
}: ApiDataSortAlias) {
  const renderValue = () => {
    switch (dataType) {
      case 'number':
        return (
          <ApiNumber
            key={i}
            value={dataValue}
            dataKey={dataKey}
            dataType={dataType}
            onEdit={onEdit}
            onDelete={onDelete}
          />
        )
      case 'string':
        return (
          <ApiString
            key={i}
            value={dataValue}
            dataKey={dataKey}
            dataType={dataType}
            onEdit={onEdit}
            onDelete={onDelete}
          />
        )
      case 'object':
        return (
          <ApiObject
            key={i}
            value={dataValue}
            dataKey={dataKey}
            dataType={dataType}
            onDelete={onDelete}
            onEdit={onEdit}
          />
        )
      case 'boolean':
        return <ApiBoolean key={i} value={dataValue} dataKey={dataKey} dataType={dataType} />
      case 'array':
        return <ApiArray value={dataValue} dataKey={dataKey} dataType={dataType} />
      case 'function':
        return <ApiFunction key={i} value={dataValue} dataKey={dataKey} dataType={dataType} />
      default:
        return null
    }
  }
  return (
    <motion.div
      initial={{ opacity: 0, translateX: 4 }}
      animate={{ opacity: 1, translateX: 0 }}
      transition={{ duration: 0.3, delay: i * 0.02 }}
      exit='removed'
      custom={i}>
      {renderValue()}
    </motion.div>
  )
}
