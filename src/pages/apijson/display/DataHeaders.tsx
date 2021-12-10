import * as React from 'react'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import { green } from '@mui/material/colors'
import { motion } from 'framer-motion'
import Paper from '@mui/material/Paper'
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
    return keys.map((key, i) => {
      return (
        <ApiDataSort
          key={i}
          i={i}
          dataType={currentData && getType(currentData[key])}
          dataValue={currentData && currentData[key]}
          dataKey={key}
        />
      )
    })
  }

  return (
    <motion.div animate={{ y: 0, opacity: 1 }} transition={{ ease: 'easeOut', duration: 2 }}>
      <Paper
        sx={{
          pt: 3,
          pl: 5,
          pb: 4,
          borderRadius: '0  4px 4px 4px',
          background: theme => (theme.palette.mode === 'dark' ? '#0D0D0D' : '#ffffff'),
        }}>
        {renderData()}
      </Paper>
    </motion.div>
  )
}

function ApiDataSort({ i, dataType, dataValue, dataKey }: ApiDataSortAlias) {
  const renderValue = () => {
    switch (dataType) {
      case 'array':
        return <JsonArray value={dataValue} dataKey={dataKey} />
      case 'boolean':
        return <JsonBoolean key={i} value={dataValue} dataKey={dataKey} />
      case 'function':
        return <JsonFunction key={i} value={dataValue} dataKey={dataKey} />
      case 'number':
        return <JsonNumber key={i} value={dataValue} dataKey={dataKey} />
      case 'object':
        return <JsonObject key={i} value={dataValue} dataKey={dataKey} />
      case 'string':
        return <JsonString key={i} value={dataValue} dataKey={dataKey} />
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

function JsonArray({ value, dataKey }: ApiArrayAlias) {
  const renderArrayContent = () => {
    return value.map((v: any, i: number) => {
      const type: string = getType(v)
      return <ApiDataSort key={i} i={i} dataValue={v} dataType={type} dataKey={i} />
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
    return keys.map((k: string, i: number) => {
      return (
        <ApiDataSort
          key={i}
          i={i}
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
