import Typography from '@mui/material/Typography'

interface TypeState {
  type: string
}
export function DataLabel({ type }: TypeState) {
  return (
    <Typography variant='body1' sx={{ mr: 1, color: 'gray', fontStyle: 'italic' }}>
      {type}
    </Typography>
  )
}
