import * as React from 'react'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import { motion } from 'framer-motion'
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
import { FrMotionPaper } from '../../../components/animation/FrMotion'
import { SxPaper } from '../../../components/sx/SxPaper'
import { TsInterfaceIcons } from '../../../components/api-json/TsInterfaceIcons'

type TsInterfaceAlias = {
  data?: { [key: string]: any } | undefined
}
export const TsInterface: React.FC<TsInterfaceAlias> = ({ data }: TsInterfaceAlias) => {
  const [keys, setKeys] = React.useState<string[]>([])

  const [currentData, setCurrentData] = React.useState<TsInterfaceAlias['data']>({})

  React.useEffect(() => {
    const newkeys: string[] | undefined = Object.getOwnPropertyNames(data)
    setKeys(newkeys)
    setCurrentData(data)
  }, [data])

  const renderData = () => {
    return keys.map((key: string, id: number) => {
      return (
        <ApiDataSort
          key={id}
          id={id}
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
    <FrMotionPaper>
      <SxPaper>
        <Typography variant='code'>
          {`declare module namespace {`}
          <Box sx={{ ml: 3 }}>{renderData()}</Box>
          {'}'}
        </Typography>
        {/* <DownloadInfo appeared={true} title={`${formLastSegment}Props`} /> */}
        <DownloadInfo
          appeared={true}
          content={
            <React.Fragment>
              <Typography fontWeight='bold' color='grey.300' variant='body2'>
                {`${formLastSegment}Props`}
              </Typography>
              <Typography color='grey.600' variant='body2'>
                * .d.ts
              </Typography>
              <Box sx={{ my: 1, textAlign: 'center' }}>
                <TsInterfaceIcons />
              </Box>
            </React.Fragment>
          }
        />
      </SxPaper>
    </FrMotionPaper>
  )
}

function ApiDataSort({ id, dataKey, dataType, dataValue }: ApiDataSortAlias) {
  const renderValue = () => {
    switch (dataType) {
      case 'array':
        return (
          <JsonArray id={id} key={id} dataKey={dataKey} dataType={dataType} value={dataValue} />
        )
      case 'boolean':
        return (
          <JsonBoolean id={id} key={id} dataKey={dataKey} dataType={dataType} value={dataValue} />
        )
      case 'function':
        return (
          <JsonFunction id={id} key={id} dataKey={dataKey} dataType={dataType} value={dataValue} />
        )
      case 'number':
        return (
          <JsonNumber id={id} key={id} dataKey={dataKey} dataType={dataType} value={dataValue} />
        )
      case 'object':
        return (
          <JsonObject id={id} key={id} dataKey={dataKey} dataType={dataType} value={dataValue} />
        )
      case 'string':
        return (
          <JsonString id={id} key={id} dataKey={dataKey} dataType={dataType} value={dataValue} />
        )
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
      return <ApiDataSort key={id} id={id} dataType={type} dataKey={id} />
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
    // {typeof dataKey === }
    // const str: string = dataKey
    // const upperCaseDataKey = str.charAt(0).toUpperCase() + str.slice(1)
    console.log('dataKey', dataKey)
    return (
      <Typography variant='code'>
        export interface&nbsp;{dataKey}&nbsp;&#123;
        <Box sx={{ ml: 3 }}>{renderObject()}</Box>
        &#125;
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
