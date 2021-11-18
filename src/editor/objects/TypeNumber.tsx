import Typography from '@mui/material/Typography'
import Box from '@mui/system/Box'

type TypeNumberTypes = {
  data: number
}

export function TypeNumber({ data }: TypeNumberTypes) {
  return (
    <Box component='span'>
      <Typography sx={{ color: '#098658', fontWeight: 'bold' }}>{data}</Typography>
    </Box>
  )
}
