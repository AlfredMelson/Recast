import * as React from 'react'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp'
import { SxIconButton } from '../../../components/sx'
import { DataLabel, DataType, getType } from '.'

type ValueProp = {
  [index: number]: any
}
interface JsonArrayProps {
  value: Array<ValueProp>
  dataKey: number | string
  dataType: string
  onEdit?: (newvalue: any, key: string | number) => void
  onDelete?: (dataKey: string | number) => void
}

export function JsonArray({ value, dataKey, dataType }: JsonArrayProps) {
  const [col, setCol] = React.useState(false)

  const [currentValue, setCurrentValue] = React.useState<JsonArrayProps['value']>([])

  React.useEffect(() => {
    setCurrentValue(value)
  }, [value])

  const editOneFromArray = (newValue: any, key: number | string): void => {
    const temp_state = [...currentValue]
    if (typeof key === 'number') temp_state[key] = newValue
    setCurrentValue(temp_state)
  }

  const deleteOneFromArray = (key: number | string): void => {
    const tempArray = [...currentValue]
    if (typeof key === 'number') tempArray.splice(key, 1)
    setCurrentValue(tempArray)
  }

  const renderArrayContent = () => {
    return currentValue.map((v: any, i: number) => {
      const type: string = getType(v)
      return (
        <DataType
          key={i}
          dataValue={v}
          dataType={type}
          dataKey={i}
          onEdit={editOneFromArray}
          onDelete={deleteOneFromArray}
        />
      )
    })
  }

  const renderContent = () => {
    if (col) {
      return (
        <Stack direction='row'>
          <SxIconButton onClick={toggleArray}>
            <KeyboardArrowUpIcon />
          </SxIconButton>
          <Typography variant='body1' sx={{ mr: 1 }}>
            {`"${dataKey}" :`}
          </Typography>
          <DataLabel type={dataType} />
          <Typography
            variant='body1'
            sx={{ color: '#ffffff' }}>{`[ ${currentValue.length} ]`}</Typography>
        </Stack>
      )
    }
    return (
      <Stack direction='row'>
        <SxIconButton onClick={toggleArray}>
          <KeyboardArrowDownIcon />
        </SxIconButton>
        <Typography variant='body1' sx={{ mr: 1 }}>
          {`"${dataKey}" :`}
        </Typography>
        <DataLabel type={dataType} />
        <Stack direction='row'>
          <Typography variant='body1' sx={{ color: '#ffffff' }}>
            {'['}
          </Typography>
          <Typography variant='body1'>{renderArrayContent()}</Typography>
          <Typography variant='body1' sx={{ color: '#ffffff' }}>
            {']'}
          </Typography>
        </Stack>
      </Stack>
    )
  }

  const toggleArray = () => {
    setCol(!col)
  }

  return renderContent()
}
