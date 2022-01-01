import IconButton from '@mui/material/Button'
import Tooltip from '@mui/material/Tooltip'
import * as React from 'react'

type CIconButtonTypes = {
  size: any
  onClick: any
  children: React.ReactNode
  dataValue?: any
  style?: any
  tooltiptitle?: string
  toolplacement?: any
}

export function CIconButton({
  size,
  onClick,
  style,
  children,
  dataValue,
  tooltiptitle,
  toolplacement,
}: CIconButtonTypes) {
  return (
    <Tooltip title={tooltiptitle} placement={toolplacement}>
      <IconButton size={size} onClick={onClick} sx={style} data-value={dataValue}>
        {children}
      </IconButton>
    </Tooltip>
  )
}
