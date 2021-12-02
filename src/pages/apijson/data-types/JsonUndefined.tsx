import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import { blue } from '@mui/material/colors'
import { DataLabel } from '.'

interface JsonUndefinedTypes {
  value: []
  dataKey: string | number
  dataType: string
}
export function JsonUndefined({ value, dataKey, dataType }: JsonUndefinedTypes) {
  return (
    <Box sx={{ p: 1 }}>
      <Stack direction='row'>
        <Typography variant='body1' sx={{ mr: 1 }}>
          {`"${dataKey}" :`}
        </Typography>
        <DataLabel type={dataType} />
        <Typography variant='body1' sx={{ color: blue[400] }}>{`"${value}"`}</Typography>
      </Stack>
    </Box>
  )
}
