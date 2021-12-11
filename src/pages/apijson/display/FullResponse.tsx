import * as React from 'react'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import { green, blue, red, grey } from '@mui/material/colors'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight'
import { motion } from 'framer-motion'
import Box from '@mui/material/Box'
import { SxDataIconButton } from '../../../components/sx'
import {
  ApiArrayAlias,
  ApiBooleanAlias,
  ApiDataSortAlias,
  ApiFunctionAlias,
  ApiNumberAlias,
  ApiObjectAlias,
  ApiStringAlias,
  getType,
} from '../data-types/typeAliases'
import { FrMotionPaper } from '../../../components/animation/FrMotion'
import { SxPaper } from '../../../components/sx/SxPaper'

type FullResponseAlias = {
  data?: { [key: string]: any } | undefined
}
const FullResponse: React.FC<FullResponseAlias> = ({ data }: FullResponseAlias) => {
  const [keys, setKeys] = React.useState<string[]>([])

  const [currentData, setCurrentData] = React.useState<FullResponseAlias['data']>({})

  React.useEffect(() => {
    const newkeys: string[] | undefined = Object.getOwnPropertyNames(data)
    setKeys(newkeys)
    setCurrentData(data)
  }, [data])

  const renderData = () => {
    return keys.map(key => {
      return (
        <ApiDataSort
          key={key}
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
export default FullResponse

function ApiDataSort({ i, dataType, dataValue, dataKey }: ApiDataSortAlias) {
  const renderValue = () => {
    switch (dataType) {
      case 'array':
        return <JsonArray value={dataValue} dataKey={dataKey} />
      case 'boolean':
        return <JsonBoolean value={dataValue} dataKey={dataKey} />
      case 'function':
        return <JsonFunction value={dataValue} dataKey={dataKey} />
      case 'number':
        return <JsonNumber value={dataValue} dataKey={dataKey} />
      case 'object':
        return <JsonObject value={dataValue} dataKey={dataKey} />
      case 'string':
        return <JsonString value={dataValue} dataKey={dataKey} />
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
  const [col, setCol] = React.useState(false)

  const renderArrayContent = () => {
    return value.map((v: any, i: number) => {
      const type: string = getType(v)
      return <ApiDataSort key={i} dataValue={v} dataType={type} dataKey={i} />
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
            <Box>
              {`${dataKey}: {`}&#46;&#46;&#46;{'}'}&nbsp;
              <span style={{ color: grey[500] }}>
                &#47;&#47;&nbsp;
                {col && value ? Object.keys(value).length : ''}&nbsp;
                {Object.keys(value).length === 1 ? 'item' : 'items'}
              </span>
            </Box>
          </Typography>
        </Stack>
      )
    }
    return (
      <Stack direction='row' alignItems='flex-start'>
        <SxDataIconButton onClick={toggleArray}>
          <KeyboardArrowDownIcon />
        </SxDataIconButton>
        <Typography variant='code' sx={{ color: blue[500] }}>
          {dataKey}
        </Typography>
        {renderArrayContent()}
      </Stack>
    )
  }

  const toggleArray = () => {
    setCol(!col)
  }

  return renderContent()
}

function JsonBoolean({ value, dataKey }: ApiBooleanAlias) {
  return (
    <Typography variant='code' sx={{ color: blue[400] }}>
      {`"${dataKey}"`}&#58;&nbsp;
      {value ? (
        <span style={{ color: green[400] }}>{`${value}`}</span>
      ) : (
        <span style={{ color: red[400] }}>{`${value}`}</span>
      )}
    </Typography>
  )
}

function JsonFunction({ dataKey }: ApiFunctionAlias) {
  return (
    <Typography variant='code' sx={{ color: blue[500] }}>
      {`"${dataKey}"`}&#58;&nbsp;
      <span style={{ color: '#ffffff' }}>
        {'['}&nbsp;&#402;&nbsp;{']'}
      </span>
    </Typography>
  )
}

function JsonNumber({ value, dataKey }: ApiNumberAlias) {
  return (
    <Typography variant='code' sx={{ color: blue[500] }}>
      {`"${dataKey}"`}&#58;&nbsp;
      <span style={{ color: '#9980FF' }}>{`${value}`}</span>
    </Typography>
  )
}

function JsonObject({ value, dataKey }: ApiObjectAlias) {
  const [col, setCol] = React.useState(true)
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
        <Typography variant='code' sx={{ color: blue[500] }}>
          {keys.length === 0 ? (
            ''
          ) : (
            <Box>
              {`${dataKey}: {`}&#46;&#46;&#46;{'}'}&nbsp;
              <span style={{ color: grey[500] }}>
                &#47;&#47;&nbsp;
                {keys.length}&nbsp;
                {keys.length === 1 ? 'item' : 'items'}
              </span>
            </Box>
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

function JsonString({ value, dataKey }: ApiStringAlias) {
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
