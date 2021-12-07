import * as React from 'react'
import DeleteIcon from '@mui/icons-material/Delete'
import CancelIcon from '@mui/icons-material/Cancel'
import EditIcon from '@mui/icons-material/Edit'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import TextField from '@mui/material/TextField'
import { green } from '@mui/material/colors'
import { SxIconButton } from '../../../components/sx'
import { DataLabel } from '.'

interface JsonStringProps {
  value: number
  dataKey: string | number
  dataType: string
  onEdit: (newVale: any, key: string | number) => void
  onDelete: (dataKey: string | number) => void
}
export function JsonString({ value, dataKey, dataType, onEdit, onDelete }: JsonStringProps) {
  const [currentValue, setCurrentValue] = React.useState<JsonStringProps['value'] | any>()
  const [showInput, setShowInput] = React.useState(false)
  React.useEffect(() => {
    setCurrentValue(value)
  }, [value])
  const showEditInput = () => {
    setShowInput(true)
  }
  const editString = () => {
    onEdit(currentValue, dataKey)
    setShowInput(false)
  }
  const deleteString = () => {
    onDelete(dataKey)
    setShowInput(false)
  }
  const cancelStringEdit = () => {
    setShowInput(false)
  }

  return (
    <Stack direction='row' sx={{ ml: 6 }}>
      <Typography variant='code' sx={{ mr: 1 }}>
        {`"${dataKey}": `}
      </Typography>
      <DataLabel type={dataType} />
      {showInput ? (
        <Stack direction='row'>
          <TextField
            variant='standard'
            sx={{ mx: 1 }}
            defaultValue={currentValue}
            onChange={e => setCurrentValue(e.target.value)}
          />
          <SxIconButton onClick={editString}>
            <EditIcon />
          </SxIconButton>
          <SxIconButton onClick={deleteString}>
            <DeleteIcon />
          </SxIconButton>
          <SxIconButton onClick={cancelStringEdit}>
            <CancelIcon />
          </SxIconButton>
        </Stack>
      ) : (
        <Stack direction='row' sx={{ color: green[400] }} onClick={showEditInput}>
          <Typography variant='code'>{`"${currentValue}"`}</Typography>
        </Stack>
      )}
    </Stack>
  )
}
