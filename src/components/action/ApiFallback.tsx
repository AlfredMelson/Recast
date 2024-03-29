import Box from '@mui/material/Box'
import Skeleton from '@mui/material/Skeleton'

export default function ApiFallback() {
  return (
    <Box sx={{ width: 300 }}>
      <Skeleton animation='wave' />
    </Box>
  )
}
