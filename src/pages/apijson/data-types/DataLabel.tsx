import Typography from '@mui/material/Typography'

interface TypeState {
  type: string
}
export function DataLabel({ type }: TypeState) {
  return (
    <Typography variant='code' sx={{ mr: 1, color: 'gray' }}>
      {type}
    </Typography>
  )
}
