import * as React from 'react'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import { green } from '@mui/material/colors'
import { motion } from 'framer-motion'
import {
  ApiDataSortAlias,
  getType,
  ApiArrayAlias,
  ApiBooleanAlias,
  ApiFunctionAlias,
  ApiNumberAlias,
  ApiObjectAlias,
  ApiStringAlias,
} from '../data-types/typeAliases'
import { SxPaper } from '../../../components/sx/SxPaper'
import { FrMotionPaper } from '../../../components/animation/FrMotion'

type DataHeadersAlias = {
  data?: { [key: string]: any } | undefined
}
export default function DataHeaders({ data }: DataHeadersAlias) {
  const [keys, setKeys] = React.useState<string[]>([])

  const [currentData, setCurrentData] = React.useState<DataHeadersAlias['data']>({})

  React.useEffect(() => {
    const newkeys: string[] | undefined = Object.getOwnPropertyNames(data)
    setKeys(newkeys)
    setCurrentData(data)
  }, [data])

  const renderData = () => {
    return keys.map((key, id) => {
      return (
        <ApiDataSort
          id={id}
          key={id}
          dataType={currentData && getType(currentData[key])}
          dataValue={currentData && currentData[key]}
          dataKey={key}
        />
      )
    })
  }

  return (
    <FrMotionPaper>
      <SxPaper>{renderData()}</SxPaper>
    </FrMotionPaper>
  )
}

function ApiDataSort({ id, dataType, dataValue, dataKey }: ApiDataSortAlias) {
  const renderValue = () => {
    switch (dataType) {
      case 'array':
        return <JsonArray id={id} key={id} value={dataValue} dataKey={dataKey} />
      case 'boolean':
        return <JsonBoolean id={id} key={id} value={dataValue} dataKey={dataKey} />
      case 'function':
        return <JsonFunction id={id} key={id} value={dataValue} dataKey={dataKey} />
      case 'number':
        return <JsonNumber id={id} key={id} value={dataValue} dataKey={dataKey} />
      case 'object':
        return <JsonObject id={id} key={id} value={dataValue} dataKey={dataKey} />
      case 'string':
        return <JsonString id={id} key={id} value={dataValue} dataKey={dataKey} />
      default:
        return null
    }
  }
  return (
    <motion.div
      initial={{ opacity: 0, translateX: 4 }}
      animate={{ opacity: 1, translateX: 0 }}
      transition={{ duration: 0.3, delay: id * 0.02 }}
      exit='removed'
      custom={id}>
      {renderValue()}
    </motion.div>
  )
}

function JsonArray({ value, dataKey }: ApiArrayAlias) {
  const renderArrayContent = () => {
    return value.map((v: any, id: number) => {
      const type: string = getType(v)
      return <ApiDataSort key={id} id={id} dataValue={v} dataType={type} dataKey={id} />
    })
  }

  const renderContent = () => {
    return (
      <Stack direction='row' alignItems='flex-start'>
        <Typography variant='code'>{dataKey}</Typography>
        {renderArrayContent()}
      </Stack>
    )
  }
  return renderContent()
}

function JsonBoolean({ value, dataKey }: ApiBooleanAlias) {
  return (
    <Typography variant='code'>
      {`"${dataKey}"`}&#58;&nbsp;
      <span style={{ color: green[400] }}>{`${value}`}</span>
    </Typography>
  )
}

function JsonFunction({ dataKey }: ApiFunctionAlias) {
  return (
    <Typography variant='code'>
      {`"${dataKey}"`}&#58;&nbsp;
      <span style={{ color: '#ffffff' }}>
        {'['}&nbsp;&#402;&nbsp;{']'}
      </span>
    </Typography>
  )
}

function JsonNumber({ value, dataKey }: ApiNumberAlias) {
  return (
    <Typography variant='code'>
      {`"${dataKey}"`}&#58;&nbsp;
      <span style={{ color: green[400] }}>{`${value}`}</span>
    </Typography>
  )
}

function JsonObject({ value, dataKey }: ApiObjectAlias) {
  const [keys, setKeys] = React.useState<string[]>([])
  const [currentValue, setCurrentValue] = React.useState<ApiObjectAlias['value']>({})
  React.useEffect(() => {
    setCurrentValue(value)
    setKeys(Object.keys(value ? value : ''))
  }, [value])

  const renderObject = () => {
    return keys.map((k: string, id: number) => {
      return (
        <ApiDataSort
          key={id}
          id={id}
          dataType={currentValue ? getType(currentValue[k]) : ''}
          dataValue={currentValue ? currentValue[k] : ''}
          dataKey={k}
        />
      )
    })
  }
  const renderObjContent = () => {
    return (
      <Typography variant='code'>
        {`${dataKey}: {`}
        <Box sx={{ ml: 3 }}>{renderObject()}</Box>
        {'};'}
      </Typography>
    )
  }
  return renderObjContent()
}

function JsonString({ value, dataKey }: ApiStringAlias) {
  return (
    <Typography variant='code'>
      {`"${dataKey}"`}&#58;&nbsp;
      <span style={{ color: green[400] }}>{`"${value}"`}</span>
    </Typography>
  )
}
