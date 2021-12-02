import * as React from 'react'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import { green, blue, red } from '@mui/material/colors'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp'
import { SxDataIconButton } from '../../../components/sx'
import { getType } from '.'

interface FullDataTypeProps {
  dataType: string | undefined
  dataValue: any
  dataKey: string | number
}
export function FullDataType({ dataType, dataValue, dataKey }: FullDataTypeProps) {
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
  return renderValue()
}

type ValueProp = {
  [index: number]: any
}
interface JsonArrayProps {
  value: Array<ValueProp>
  dataKey: number | string
}

export function JsonArray({ value, dataKey }: JsonArrayProps) {
  const [col, setCol] = React.useState(false)

  const renderArrayContent = () => {
    return value.map((v: any, i: number) => {
      const type: string = getType(v)
      return <FullDataType key={i} dataValue={v} dataType={type} dataKey={i} />
    })
  }

  const renderContent = () => {
    if (col) {
      return (
        <Stack direction='row'>
          <SxDataIconButton onClick={toggleArray}>
            <KeyboardArrowUpIcon />
          </SxDataIconButton>
          <Typography variant='body1' sx={{ color: blue[500] }}>
            {dataKey}
            <span style={{ color: '#ffffff' }}>&nbsp;&#58;&nbsp;&nbsp;{`[ ${value.length} ]`}</span>
          </Typography>
        </Stack>
      )
    }
    return (
      <Stack direction='row' alignItems='flex-start'>
        <SxDataIconButton onClick={toggleArray}>
          <KeyboardArrowDownIcon />
        </SxDataIconButton>
        <Typography variant='body1' sx={{ color: blue[500] }}>
          {dataKey}
        </Typography>
        <Typography variant='body1'>{renderArrayContent()}</Typography>
      </Stack>
    )
  }

  const toggleArray = () => {
    setCol(!col)
  }

  return renderContent()
}

interface JsonBooleanProps {
  value: true | false
  dataKey: string | number
}

export function JsonBoolean({ value, dataKey }: JsonBooleanProps) {
  return (
    <Typography variant='body1' sx={{ color: blue[400] }}>
      {dataKey}
      <span style={{ color: '#ffffff' }}>
        &nbsp;&#58;&nbsp;&nbsp;
        {value === true ? (
          <span style={{ color: green[400] }}>{`${value}`}</span>
        ) : (
          <span style={{ color: red[400] }}>{`${value}`}</span>
        )}
      </span>
    </Typography>
  )
}

interface JsonFunctionProps {
  dataKey: string | number
  value?: any
}

export function JsonFunction({ dataKey }: JsonFunctionProps) {
  return (
    <Typography variant='body1' sx={{ color: blue[500], ml: '25px' }}>
      {dataKey}
      <span style={{ color: '#ffffff' }}>
        &nbsp;&#58;&nbsp;&nbsp; {'['}&nbsp;&#402;&nbsp;{']'}
      </span>
    </Typography>
  )
}

interface JsonNumberProps {
  value: number
  dataKey: string | number
}

function JsonNumber({ value, dataKey }: JsonNumberProps) {
  return (
    <Typography variant='body1' sx={{ color: blue[500], ml: '25px' }}>
      {dataKey}
      <span style={{ color: '#ffffff' }}>
        &nbsp;&#58;&nbsp;&nbsp;
        <span style={{ color: '#9980FF' }}>{`${value}`}</span>
      </span>
    </Typography>
  )
}

interface JsonObjectProps {
  value?: { [key: string]: any } | undefined
  dataKey: string | number
}

export function JsonObject({ value, dataKey }: JsonObjectProps) {
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
        <FullDataType
          key={i}
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
        <>
          <Stack direction='row'>
            <SxDataIconButton onClick={toggleObj}>
              <KeyboardArrowDownIcon />
            </SxDataIconButton>
            <Typography variant='body1' sx={{ color: blue[500] }}>
              {dataKey}
            </Typography>
          </Stack>
          <Typography variant='body1' sx={{ ml: '25px' }}>
            {renderObject()}
          </Typography>
        </>
      )
    return (
      <Stack direction='row'>
        <SxDataIconButton onClick={toggleObj}>
          <KeyboardArrowUpIcon />
        </SxDataIconButton>
        <Typography variant='body1' sx={{ color: blue[500] }}>
          {dataKey}
          <span style={{ color: '#ffffff' }}>&nbsp;&#58;&nbsp;&nbsp;{`{ ${keys.length} }`}</span>
        </Typography>
      </Stack>
    )
  }
  const toggleObj = () => {
    setCol(!col)
  }
  return renderObjContent()
}

interface JsonStringProps {
  value: number
  dataKey: string | number
}
function JsonString({ value, dataKey }: JsonStringProps) {
  return (
    <Typography variant='body1' sx={{ color: blue[400], ml: '25px' }}>
      {dataKey}
      <span style={{ color: '#ffffff' }}>
        &nbsp;&#58;&nbsp;&nbsp;
        <span style={{ color: green[400] }}>{`"${value}"`}</span>
      </span>
    </Typography>
  )
}
