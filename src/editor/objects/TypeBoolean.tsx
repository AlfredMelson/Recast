import * as React from 'react'
import { Typography } from '@mui/material'
import Checkbox from '@mui/material/Checkbox'
import Box from '@mui/system/Box'

type TypeBooleanTypes = {
  data: boolean
  readOnly?: boolean
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
}

export function TypeBoolean({ data, readOnly = true, onChange }: TypeBooleanTypes) {
  return (
    <Typography
      variant='body1'
      align='left'
      sx={{
        fontWeight: 'bold',
      }}
    >
      <Checkbox checked={data} readOnly={readOnly} onChange={onChange} />
      <Box component='span'>{data ? 'true' : 'false'}</Box>
    </Typography>
  )
}
