import * as React from 'react'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import { blue } from '@mui/material/colors'
import { AnimatePresence, motion } from 'framer-motion'
import Paper from '@mui/material/Paper'
import Box from '@mui/material/Box'
import { useRecoilValue } from 'recoil'
import DownloadInfo from '../../../components/action/DownloadInfo'
import {
  getType,
  DataSortProps,
  JsonArrayProps,
  JsonBooleanProps,
  JsonFunctionProps,
  JsonNumberProps,
  JsonObjectProps,
  JsonStringProps,
} from '../data-types/getProps'
import { userSubmittedUrlAtom } from '../../../recoil/api-json/atom'

interface TypeLabelProps {
  type: string
}
export function TypeLabel({ type }: TypeLabelProps) {
  return (
    <Typography variant='code' sx={{ color: blue[500] }}>
      {type}
    </Typography>
  )
}

interface TsInterfaceProps {
  data?: { [key: string]: any } | undefined
}
export const TsInterface: React.FC<TsInterfaceProps> = ({ data }: TsInterfaceProps) => {
  const [keys, setKeys] = React.useState<string[]>([])

  const [currentData, setCurrentData] = React.useState<TsInterfaceProps['data']>({})

  React.useEffect(() => {
    const newkeys: string[] | undefined = Object.getOwnPropertyNames(data)
    setKeys(newkeys)
    setCurrentData(data)
  }, [data])

  const renderData = () => {
    return keys.map((key, i) => {
      return (
        <DataSort
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
  const apiUrl = useRecoilValue(userSubmittedUrlAtom)
  // split and pop to isolate interface name
  const lastSegment = apiUrl.split('/').pop()
  // remove underscore and uppercase following character
  const formLastSegment = lastSegment.replace(/(^|_)./g, s => s.slice(-1).toUpperCase())
  // substring and landIndexOf to verify last segment
  // const lastSegmentVerified = apiUrl.substring(apiUrl.lastIndexOf('/') + 1)

  return (
    <AnimatePresence>
      <Paper
        sx={{
          pt: 3,
          pl: 5,
          pb: 4,
          borderRadius: '0  4px 4px 4px',
          background: theme => (theme.palette.mode === 'dark' ? '#0D0D0D' : '#ffffff'),
        }}>
        <Typography variant='code'>
          {`interface ${formLastSegment}Props {`}
          <Box sx={{ ml: 3 }}>{renderData()}</Box>
          {'}'}
        </Typography>
        <DownloadInfo appeared={true} title={`${formLastSegment}Props`} />
      </Paper>
    </AnimatePresence>
  )
}

function DataSort({ i, dataKey, dataType, dataValue }: DataSortProps) {
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
      variants={{
        hidden: i => ({
          opacity: 0,
          y: -4 * i,
        }),
        visible: i => ({
          opacity: 1,
          y: 0,
          transition: {
            delay: i * 0.1,
            duration: 0.4,
          },
        }),
        removed: {
          opacity: 0,
        },
      }}
      initial='hidden'
      animate='visible'
      exit='removed'
      custom={i}>
      {renderValue()}
    </motion.div>
  )
}

function JsonArray({ value, dataKey }: JsonArrayProps) {
  // const [col, setCol] = React.useState(false)

  const renderArrayContent = () => {
    return value.map((v: any, i: number) => {
      const type: string = getType(v)
      return <DataSort key={i} i={i} dataType={type} dataKey={i} />
    })
  }

  const renderContent = () => {
    return (
      <Stack direction='row' alignItems='flex-start'>
        <Typography variant='body1'>{dataKey}</Typography>
        {renderArrayContent()}
      </Stack>
    )
  }
  return renderContent()
}

function JsonBoolean({ dataKey, dataType }: JsonBooleanProps) {
  return (
    <Stack direction='row'>
      <Typography variant='code'>{dataKey}&#58;&nbsp;</Typography>
      <TypeLabel type={dataType} />
    </Stack>
  )
}

function JsonFunction({ dataKey, dataType }: JsonFunctionProps) {
  return (
    <Stack direction='row'>
      <Typography variant='code'>{dataKey}&#58;&nbsp;</Typography>
      <TypeLabel type={dataType} />
    </Stack>
  )
}

function JsonNumber({ dataKey, dataType }: JsonNumberProps) {
  return (
    <Stack direction='row'>
      <Typography variant='code'>{dataKey}&#58;&nbsp;</Typography>
      <TypeLabel type={dataType} />
    </Stack>
  )
}

function JsonObject({ value, dataKey }: JsonObjectProps) {
  const [keys, setKeys] = React.useState<string[]>([])
  const [currentValue, setCurrentValue] = React.useState<JsonObjectProps['value']>({})
  React.useEffect(() => {
    setCurrentValue(value)
    setKeys(Object.keys(value ? value : ''))
  }, [value])

  const renderObject = () => {
    return keys.map((k: string, i: number) => {
      return (
        <DataSort
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
      <React.Fragment>
        <Typography variant='body1'>{dataKey}</Typography>
        <Box sx={{ ml: 3 }}>{renderObject()}</Box>
      </React.Fragment>
    )
  }
  return renderObjContent()
}

function JsonString({ dataKey, dataType }: JsonStringProps) {
  return (
    <Stack direction='row'>
      <Typography variant='code'>{dataKey}&#58;&nbsp;</Typography>
      <TypeLabel type={dataType} />
    </Stack>
  )
}
