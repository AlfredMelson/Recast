import * as React from 'react'
import DeleteIcon from '@mui/icons-material/Delete'
import CancelIcon from '@mui/icons-material/Cancel'
import EditIcon from '@mui/icons-material/Edit'
import { DataLabel } from '.'
interface numberState {
  value: number
  dataKey: string | number
  dataType: string
  onEdit: (newVale: any, key: string | number) => void
  onDelete: (dataKey: string | number) => void
}
export function JsonNumber({ value, dataKey, dataType, onEdit, onDelete }: numberState) {
  const [currentValue, setCurrentValue] = React.useState<numberState['value'] | any>()
  const [showInput, setShowInput] = React.useState(false)
  React.useEffect(() => {
    setCurrentValue(value)
  }, [value])
  const showEditInput = () => {
    setShowInput(true)
  }
  const editValue = () => {
    onEdit(currentValue, dataKey)
    setShowInput(false)
  }
  const deleteValue = () => {
    onDelete(dataKey)
    setShowInput(false)
  }
  const cancelEdit = () => {
    setShowInput(false)
  }
  return (
    <div className='p5'>
      <span>
        <span>"</span>
        <span>{dataKey}</span>
        <span>"</span> : <DataLabel type={dataType} />
        {showInput ? (
          <span>
            <input
              style={{ padding: 5 }}
              className='p5 NumProperty'
              type='number'
              defaultValue={currentValue}
              onChange={e => setCurrentValue(e.target.value)}
            />

            <EditIcon
              style={{
                cursor: 'pointer',
                color: 'rgb(4, 126, 126)',
                padding: '0px 8px',
                height: 15,
                width: 'auto',
              }}
              className='editIcon'
              onClick={editValue}
            />

            <DeleteIcon
              style={{
                cursor: 'pointer',
                color: 'rgb(184, 59, 59)',
                padding: '0px 8px',
                height: 18,
                width: 'auto',
              }}
              className='deleteIcon'
              onClick={deleteValue}
            />

            <CancelIcon
              style={{
                cursor: 'pointer',
                color: '#838383',
                padding: '0px 8px',
                height: 18,
                width: 'auto',
              }}
              className='cancelIcon'
              onClick={cancelEdit}
            />
          </span>
        ) : (
          <span style={{ color: 'blue' }} onClick={showEditInput}>
            {currentValue}
          </span>
        )}
      </span>
    </div>
  )
}
