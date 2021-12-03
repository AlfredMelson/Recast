import * as React from 'react'
import CancelIcon from '@mui/icons-material/Cancel'
import EditIcon from '@mui/icons-material/Edit'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import TextField from '@mui/material/TextField'
import { purple } from '@mui/material/colors'
import DeleteIcon from '@mui/icons-material/Delete'
import { SxIBApiInteraction } from '../../../components/sx/SxIconButton'
import { DataLabel } from '.'

interface JsonNumberProps {
  value: number
  dataKey: string | number
  dataType: string
  onEdit: (newVale: any, key: string | number) => void
  onDelete: (dataKey: string | number) => void
}
export function JsonNumber({ value, dataKey, dataType, onEdit, onDelete }: JsonNumberProps) {
  const [currentValue, setCurrentValue] = React.useState<JsonNumberProps['value'] | any>()
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
    <Stack direction='row' sx={{ ml: 6 }}>
      <Typography variant='body1' sx={{ mr: 1 }}>
        {`"${dataKey}" :`}
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
          <Typography variant='body1'>{currentValue}</Typography>
        </Stack>
      )}
    </Stack>
  )
}
