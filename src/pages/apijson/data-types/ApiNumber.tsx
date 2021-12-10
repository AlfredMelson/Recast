import * as React from 'react'
import CancelIcon from '@mui/icons-material/Cancel'
import EditIcon from '@mui/icons-material/Edit'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import TextField from '@mui/material/TextField'
import { purple } from '@mui/material/colors'
import DeleteIcon from '@mui/icons-material/Delete'
import { SxIBApiInteraction } from '../../../components/sx/SxIconButton'
import ApiDataTypeLabel from './ApiDataTypeLabel'
import { ApiNumberAlias } from './typeAliases'

export function ApiNumber({ value, dataKey, dataType, onEdit, onDelete }: ApiNumberAlias) {
  const [currentValue, setCurrentValue] = React.useState<ApiNumberAlias['value'] | any>()
  const [showInput, setShowInput] = React.useState(false)
  React.useEffect(() => {
    setCurrentValue(value)
  }, [value])
  const showEditInput = () => {
    setShowInput(true)
  }
  const editNumber = () => {
    onEdit(currentValue, dataKey)
    setShowInput(false)
  }
  const deleteNumber = () => {
    onDelete(dataKey)
    setShowInput(false)
  }
  const cancelNumberEdit = () => {
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
          <SxIBApiInteraction onClick={editNumber}>
            <EditIcon />
          </SxIBApiInteraction>
          <SxIBApiInteraction onClick={deleteNumber}>
            <DeleteIcon />
          </SxIBApiInteraction>
          <SxIBApiInteraction onClick={cancelNumberEdit}>
            <CancelIcon />
          </SxIBApiInteraction>
        </Stack>
      ) : (
        <Stack direction='row' sx={{ color: purple[400] }} onClick={showEditInput}>
          <Typography variant='code'>{currentValue}</Typography>
        </Stack>
      )}
    </Stack>
  )
}
