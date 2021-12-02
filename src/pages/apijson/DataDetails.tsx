import React, { useEffect, useState } from 'react'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp'
import { Box } from '@mui/system'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import { TreeView } from '@mui/lab'
import { SxIconButtonApi } from '../../components/sx/SxIconButtonApi'
import { CloseSquare, MinusSquare, PlusSquare } from '../../components/icons'
import { DataType, getType } from './data-types'

interface DataDetailsProps {
  onEdit: (newValue: any, key: string | number) => void
  onDelete: (key: number | string) => void
  data?: { [key: string]: any } | undefined
}
export const DataDetails: React.FC<DataDetailsProps> = ({
  data,
  onDelete,
  onEdit,
}: DataDetailsProps) => {
  const [col, setCol] = useState(false)

  const [keys, setKeys] = useState<string[]>([])

  const [currentData, setCurrentData] = useState<DataDetailsProps['data']>({})

  useEffect(() => {
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
        <DataType
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
        <SxIconButtonApi onClick={toggleJsonView}>
          {col ? <KeyboardArrowDownIcon /> : <KeyboardArrowUpIcon />}
        </SxIconButtonApi>
        {col ? (
          <Typography>
            {'root : {'} {col && currentData ? Object.keys(currentData).length : ''}
            {Object.keys(currentData).length === 1 ? 'item' : 'items'}&nbsp;{'}'}
          </Typography>
        ) : (
          <Typography>{'root : {'}</Typography>
        )}
      </Stack>
      {!col && (
        <Box>
          {/* <Typography>{renderData()}</Typography> */}
          <TreeView
            // defaultExpanded={['1']}
            // expanded={treeViewExpansion}
            // onNodeToggle={handleToggle}
            defaultCollapseIcon={<MinusSquare />}
            defaultExpandIcon={<PlusSquare />}
            defaultEndIcon={<CloseSquare />}>
            {renderData()}
          </TreeView>
          <Typography sx={{ ml: 9 }}>{'}'}</Typography>
        </Box>
      )}
    </Box>
  )
}
