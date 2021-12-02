import * as React from 'react'
import DeleteIcon from '@mui/icons-material/Delete'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp'
import { SxIconButton } from '../../../components/sx'
import { DataLabel, getType, DataType } from '.'

interface JsonObjectProps {
  value?: { [key: string]: any } | undefined
  dataKey: string | number
  dataType: string | undefined
  onEdit: (newVale: any, key: string | number) => void
  onDelete: (dataKey: string | number) => void
}

export function JsonObject({ value, dataKey, dataType, onDelete }: JsonObjectProps) {
  const [col, setCol] = React.useState(true)
  const [keys, setKeys] = React.useState<string[]>([])
  const [currentValue, setCurrentValue] = React.useState<JsonObjectProps['value']>({})
  React.useEffect(() => {
    setCurrentValue(value)
    setKeys(Object.keys(value ? value : ''))
  }, [value])
  const EditOneProperty = (newValue: any, key: string | number): void => {
    const newObj: { [key: string]: any } | undefined = { ...currentValue }
    newObj[key] = newValue
    setCurrentValue(newObj)
  }
  const DeleteOneProperty = (key: any): void => {
    const newObj: { [key: string]: any } = { ...currentValue }
    // newObj = _.omit(currentValue, key);
    currentValue ? delete newObj[key] : ''
    newObj ? setCurrentValue(newObj) : ''
    newObj ? setKeys(Object.keys(newObj)) : ''
  }

  const renderObject = () => {
    return keys.map((k: string, i: number) => {
      return (
        <DataType
          key={i}
          dataType={currentValue ? getType(currentValue[k]) : ''}
          dataValue={currentValue ? currentValue[k] : ''}
          dataKey={k}
          onEdit={EditOneProperty}
          onDelete={DeleteOneProperty}
        />
      )
    })
  }
  const renderObjContent = () => {
    if (col)
      return (
        <>
          <Stack direction='row' sx={{ ml: 1 }}>
            <SxIconButton onClick={toggleObj}>
              <KeyboardArrowDownIcon />
            </SxIconButton>
            <Typography variant='body1' sx={{ mr: 1 }}>
              {`"${dataKey}" :`}
            </Typography>
            <SxIconButton
              onClick={() => {
                onDelete(dataKey)
              }}>
              <DeleteIcon />
            </SxIconButton>
            <DataLabel type={dataType ? dataType : ''} />
            <Typography
              variant='body1'
              sx={{ color: '#ffffff' }}>{`[ ${currentValue.length} ]`}</Typography>
          </Stack>
          <Stack direction='row' sx={{ pl: 1 }}>
            <Typography variant='body1'>
              {'{'}
              {renderObject()}
              {'}'}
            </Typography>
          </Stack>
        </>
      )
    return (
      <Stack direction='row' sx={{ ml: 1 }}>
        <SxIconButton onClick={toggleObj}>
          <KeyboardArrowUpIcon />
        </SxIconButton>
        <Typography variant='body1' sx={{ mr: 1 }}>
          {`"${dataKey}" :`}
        </Typography>
        <Stack direction='row' sx={{ pl: 1 }}>
          <DataLabel type={dataType ? dataType : ''} />
          <Typography variant='body1'>{`{ ${keys.length} }`}</Typography>
        </Stack>
      </Stack>
    )
  }
  const toggleObj = () => {
    // setCurrentValue(currentValue);
    setCol(!col)
  }
  return renderObjContent()
}
