import IconButton from '@mui/material/Button'
import Tooltip from '@mui/material/Tooltip'
import * as React from 'react'

type CIconButtonAlias = {
  size: any
  onClick: any
  children: React.ReactNode
  tooltiptitle?: string
  dataValue?: any
  style?: any
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
}: CIconButtonAlias) {
  return (
    <Tooltip title={`${tooltiptitle}`} placement={toolplacement}>
      <IconButton size={size} onClick={onClick} sx={style} data-value={dataValue}>
        {children}
      </IconButton>
    </Tooltip>
  )
}
