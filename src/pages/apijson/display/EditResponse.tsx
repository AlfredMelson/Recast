import * as React from 'react'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp'
import { Box } from '@mui/system'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import { SxIBApiInteraction } from '../../../components/sx/SxIconButton'
import DataSort from '../data-types/DataSort'
import { getType } from '../data-types/getProps'

interface EditResponseProps {
  onEdit: (newValue: any, key: string | number) => void
  onDelete: (key: number | string) => void
  data?: { [key: string]: any } | undefined
}
export default function EditResponse({ data, onDelete, onEdit }: EditResponseProps) {
  const [col, setCol] = React.useState(false)

  const [keys, setKeys] = React.useState<string[]>([])

  const [currentData, setCurrentData] = React.useState<EditResponseProps['data']>({})

  React.useEffect(() => {
    const newkeys: string[] | undefined = Object.getOwnPropertyNames(data)
    setKeys(newkeys)
    setCurrentData(data)
  }, [data])

  const toggleJsonView = (): void => {
    setCol(!col)
  }

  const renderData = () => {
    return keys.map(key => {
      return (
        <DataSort
          key={key}
          dataType={currentData ? getType(currentData[key]) : ''}
          dataValue={currentData ? currentData[key] : ''}
          dataKey={key}
          onEdit={onEdit}
          onDelete={onDelete}
        />
      )
    })
  }
  return (
    <Box>
      <Stack direction='row'>
        <SxIBApiInteraction onClick={toggleJsonView}>
          {col ? <KeyboardArrowDownIcon /> : <KeyboardArrowUpIcon />}
        </SxIBApiInteraction>
        {col ? (
          <Typography variant='code'>
            {'data : {'} {col && currentData ? Object.keys(currentData).length : ''}
            {Object.keys(currentData).length === 1 ? 'item' : 'items'}&nbsp;{'}'}
          </Typography>
        ) : (
          <Typography variant='code'>{'data : {'}</Typography>
        )}
      </Stack>
      {!col && (
        <Box>
          {renderData()}
          <Typography variant='code' sx={{ ml: 9 }}>
            {'}'}
          </Typography>
        </Box>
      )}
    </Box>
  )
}
