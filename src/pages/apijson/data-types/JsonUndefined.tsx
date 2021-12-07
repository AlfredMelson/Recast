import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import { blue } from '@mui/material/colors'
import DataLabel from './DataLabel'
import { JsonUndefinedTypes } from './getProps'

export function JsonUndefined({ value, dataKey, dataType }: JsonUndefinedTypes) {
  return (
    <Box sx={{ p: 1 }}>
      <Stack direction='row'>
        <Typography variant='code' sx={{ mr: 1 }}>
          {`"${dataKey}": `}
        </Typography>
        <DataLabel type={dataType} />
        <Typography variant='code' sx={{ color: blue[400] }}>{`"${value}"`}</Typography>
      </Stack>
    </Box>
  )
}
