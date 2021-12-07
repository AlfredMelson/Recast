import Typography from '@mui/material/Typography'

interface DataLabelProps {
  type: string
}
export default function DataLabel({ type }: DataLabelProps) {
  return (
    <Typography variant='code' sx={{ mr: 1, color: 'gray' }}>
      {type}
    </Typography>
  )
}
