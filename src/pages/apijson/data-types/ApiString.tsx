import * as React from 'react'
import DeleteIcon from '@mui/icons-material/Delete'
import CancelIcon from '@mui/icons-material/Cancel'
import EditIcon from '@mui/icons-material/Edit'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import TextField from '@mui/material/TextField'
import { green } from '@mui/material/colors'
import { SxIconButton } from '../../../components/sx'
import ApiDataTypeLabel from './ApiDataTypeLabel'
import { ApiStringAlias } from './typeAliases'

export function ApiString({ value, dataKey, dataType, onEdit, onDelete }: ApiStringAlias) {
  const [currentValue, setCurrentValue] = React.useState<ApiStringAlias['value'] | any>()
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
    <Stack direction='row' sx={{ ml: 4.8 }}>
      <Typography variant='code'>&#34;{dataKey}&#34;&#58;&nbsp;</Typography>
      <ApiDataTypeLabel type={dataType} variant='edit' />
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
