import * as React from 'react'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import { green, blue, red } from '@mui/material/colors'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight'
import { AnimatePresence, motion } from 'framer-motion'
import { Box, Paper } from '@mui/material'
import { SxDataIconButton } from '../../../components/sx'
import {
  DataSortProps,
  getType,
  JsonArrayProps,
  JsonBooleanProps,
  JsonFunctionProps,
  JsonNumberProps,
  JsonObjectProps,
  JsonStringProps,
} from '../data-types/getProps'

interface DataResponseProps {
  data?: { [key: string]: any } | undefined
}
export default function DataResponse({ data }: DataResponseProps) {
  const [keys, setKeys] = React.useState<string[]>([])
  const [currentData, setCurrentData] = React.useState<DataResponseProps['data']>({})

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
        {renderData()}
      </Paper>
    </AnimatePresence>
  )
}

function DataSort({ i, dataType, dataValue, dataKey }: DataSortProps) {
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

export function JsonArray({ value, dataKey }: JsonArrayProps) {
  const [col, setCol] = React.useState(false)

  const renderArrayContent = () => {
    return value.map((v: any, i: number) => {
      const type: string = getType(v)
      return <DataSort key={i} i={i} dataValue={v} dataType={type} dataKey={i} />
    })
  }

  const renderContent = () => {
    if (col) {
      return (
        <Stack direction='row'>
          <SxDataIconButton onClick={toggleArray}>
            <KeyboardArrowRightIcon />
          </SxDataIconButton>
          <Typography variant='code'>
            {dataKey}
            <span style={{ color: '#ffffff' }}>&#58;&nbsp;{`[ ${value.length} ]`}</span>
          </Typography>
        </Stack>
      )
    }
    return (
      <Stack direction='row' alignItems='flex-start'>
        <SxDataIconButton onClick={toggleArray}>
          <KeyboardArrowDownIcon />
        </SxDataIconButton>
        <Typography variant='code'>{dataKey}</Typography>
        {renderArrayContent()}
      </Stack>
    )
  }

  const toggleArray = () => {
    setCol(!col)
  }

  return renderContent()
}

export function JsonBoolean({ value, dataKey }: JsonBooleanProps) {
  return (
    <Typography variant='code' sx={{ color: blue[400] }}>
      {`"${dataKey}"`}&#58;&nbsp;
      <span style={{ color: '#ffffff' }}>
        {value ? (
          <span style={{ color: green[400] }}>{`${value}`}</span>
        ) : (
          <span style={{ color: red[400] }}>{`${value}`}</span>
        )}
      </span>
    </Typography>
  )
}

export function JsonFunction({ dataKey }: JsonFunctionProps) {
  return (
    <Typography variant='code' sx={{ color: blue[500] }}>
      {`"${dataKey}"`}&#58;&nbsp;
      <span style={{ color: '#ffffff' }}>
        {'['}&nbsp;&#402;&nbsp;{']'}
      </span>
    </Typography>
  )
}

function JsonNumber({ value, dataKey }: JsonNumberProps) {
  return (
    <Typography variant='code'>
      {`"${dataKey}"`}&#58;&nbsp;
      <span style={{ color: '#9980FF' }}>{`${value}`}</span>
    </Typography>
  )
}

function JsonObject({ value, dataKey }: JsonObjectProps) {
  const [col, setCol] = React.useState(true)
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
    if (col)
      return (
        <React.Fragment>
          <Stack direction='row' sx={{ ml: '-16px' }}>
            <SxDataIconButton onClick={toggleObj}>
              <KeyboardArrowDownIcon />
            </SxDataIconButton>
            <Typography variant='code'>{dataKey}</Typography>
          </Stack>
          <Box sx={{ ml: '32px' }}>{renderObject()}</Box>
        </React.Fragment>
      )
    return (
      <Stack direction='row' sx={{ ml: '-16px' }}>
        <SxDataIconButton onClick={toggleObj}>
          <KeyboardArrowRightIcon />
        </SxDataIconButton>
        <Typography variant='code'>
          {dataKey}
          {keys.length === 0 ? (
            ''
          ) : (
            <>
              <span style={{ color: '#ffffff' }}>&#58;&nbsp;{`{ ${keys.length}`}</span>
              <span style={{ color: '#ffffff' }}>&nbsp;{keys.length === 1 ? 'item' : 'items'}</span>
              <span style={{ color: '#ffffff' }}>&nbsp;{'}'}</span>
            </>
          )}
        </Typography>
      </Stack>
    )
  }
  const toggleObj = () => {
    setCol(!col)
  }
  return renderObjContent()
}

function JsonString({ value, dataKey }: JsonStringProps) {
  return (
    <Typography variant='code'>
      {`"${dataKey}"`}
      <span style={{ color: '#ffffff' }}>
        &#58;&nbsp;
        <span style={{ color: green[400] }}>{`"${value}"`}</span>
      </span>
    </Typography>
  )
}
