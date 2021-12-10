import * as React from 'react'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import { motion } from 'framer-motion'
import Paper from '@mui/material/Paper'
import Box from '@mui/material/Box'
import { useRecoilValue } from 'recoil'
import DownloadInfo from '../../../components/api-json/DownloadInfo'
import {
  getType,
  ApiDataSortAlias,
  ApiArrayAlias,
  ApiBooleanAlias,
  ApiFunctionAlias,
  ApiNumberAlias,
  ApiObjectAlias,
  ApiStringAlias,
} from '../data-types/typeAliases'
import { userSubmittedUrlAtom } from '../../../recoil/api-json/atom'
import ApiDataTypeLabel from '../data-types/ApiDataTypeLabel'

type DTypescriptAlias = {
  data?: { [key: string]: any } | undefined
}
export const DTypescript: React.FC<DTypescriptAlias> = ({ data }: DTypescriptAlias) => {
  const [keys, setKeys] = React.useState<string[]>([])

  const [currentData, setCurrentData] = React.useState<DTypescriptAlias['data']>({})

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

  // state when user submits user entered url
  const userSubmittedUrl = useRecoilValue(userSubmittedUrlAtom)
  // split and pop to isolate d.ts file name
  const lastSegment = userSubmittedUrl.split('/').pop()
  // remove underscore and uppercase following character
  // const formLastSegment = lastSegment.replace(/(^|_)./g, s => s.slice(-1))
  // substring and landIndexOf to verify last segment
  // const lastSegmentVerified = apiUrl.substring(apiUrl.lastIndexOf('/') + 1)

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
        <Typography variant='code'>
          {`declare const ${lastSegment}: {`}
          <Box sx={{ ml: 3 }}>{renderData()}</Box>
          {'};'}
        </Typography>
        <DownloadInfo appeared={true} title={lastSegment} />
      </Paper>
    </motion.div>
  )
}

function ApiDataSort({ i, dataKey, dataType, dataValue }: ApiDataSortAlias) {
  const renderValue = () => {
    switch (dataType) {
      case 'array':
        return <JsonArray key={i} dataKey={dataKey} dataType={dataType} value={dataValue} />
      case 'boolean':
        return <JsonBoolean key={i} dataKey={dataKey} dataType={dataType} value={dataValue} />
      case 'function':
        return <JsonFunction key={i} dataKey={dataKey} dataType={dataType} value={dataValue} />
      case 'number':
        return <JsonNumber key={i} dataKey={dataKey} dataType={dataType} value={dataValue} />
      case 'object':
        return <JsonObject key={i} dataKey={dataKey} dataType={dataType} value={dataValue} />
      case 'string':
        return <JsonString key={i} dataKey={dataKey} dataType={dataType} value={dataValue} />
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
      return <ApiDataSort key={i} i={i} dataType={type} dataKey={i} />
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

function JsonBoolean({ dataKey, dataType }: ApiBooleanAlias) {
  return (
    <Stack direction='row'>
      <Typography variant='code'>{dataKey}&#58;&nbsp;</Typography>
      <ApiDataTypeLabel type={dataType} variant='ts' />
    </Stack>
  )
}

function JsonFunction({ dataKey, dataType }: ApiFunctionAlias) {
  return (
    <Stack direction='row'>
      <Typography variant='code'>{dataKey}&#58;&nbsp;</Typography>
      <ApiDataTypeLabel type={dataType} variant='ts' />
    </Stack>
  )
}

function JsonNumber({ dataKey, dataType }: ApiNumberAlias) {
  return (
    <Stack direction='row'>
      <Typography variant='code'>{dataKey}&#58;&nbsp;</Typography>
      <ApiDataTypeLabel type={dataType} variant='ts' />
    </Stack>
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

function JsonString({ dataKey, dataType }: ApiStringAlias) {
  return (
    <Stack direction='row'>
      <Typography variant='code'>{dataKey}&#58;&nbsp;</Typography>
      <ApiDataTypeLabel type={dataType} variant='ts' />
    </Stack>
  )
}
