import React, { useEffect, useState } from 'react'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp'
import { Typography } from '@mui/material'
import { Box } from '@mui/system'
import { SxIconButton } from '../../components/sx/SxIconButton'
import { DataTypes, getTypes } from './data-types'

interface DetailState {
  data?: { [key: string]: any } | undefined
  onEdit: (newValue: any, key: string | number) => void
  onDelete: (key: number | string) => void
}
export const DataDetails: React.FC<DetailState> = ({ data, onDelete, onEdit }: DetailState) => {
  const [col, setCol] = useState(false)

  const [keys, setKeys] = useState<string[]>([])

  const [currentData, setCurrentData] = useState<DetailState['data']>({})

  useEffect(() => {
    const newkeys: string[] | undefined = Object.getOwnPropertyNames(data)
    setKeys(newkeys)
    setCurrentData(data)
  }, [data])

  const toggleJsonView = (): void => {
    setCol(!col)
  }

  const renderData = () => {
    if (col)
      return (
        <div style={{ padding: 5 }}>
          <span style={{ color: 'gray' }}>
            <span>{'{'}</span>
            {currentData ? Object.keys(currentData).length : ''} items<span>{'}'}</span>
          </span>
        </div>
      )
    return keys.map(key => {
      return (
        <div key={key}>
          <DataTypes
            key={key}
            dataType={currentData ? getTypes(currentData[key]) : ''}
            dataValue={currentData ? currentData[key] : ''}
            dataKey={key}
            onEdit={onEdit}
            onDelete={onDelete}
          />
        </div>
      )
    })
  }
  return (
    <div className='JsonTree'>
      <SxIconButton
        onClick={toggleJsonView}
        className='mainCollapseIcon'
        style={{ cursor: 'pointer' }}>
        {col ? <KeyboardArrowDownIcon /> : <KeyboardArrowUpIcon />}
      </SxIconButton>
      <div>
        {col ? (
          <Typography>root : {renderData()} </Typography>
        ) : (
          <Box>
            <Typography>root : </Typography>
            <Typography>
              {'{'}
              {renderData()}
              {'}'}
            </Typography>
          </Box>
        )}
      </div>
    </div>
  )
}
