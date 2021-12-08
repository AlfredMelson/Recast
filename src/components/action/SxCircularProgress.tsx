import CircularProgress from '@mui/material/CircularProgress'
import { blue, green } from '@mui/material/colors'

interface SxCircularProgressProps {
  size: '16px' | '20px'
  color: 'blue' | 'green'
}

export function SxCircularProgress({ size, color }: SxCircularProgressProps) {
  return (
    <CircularProgress
      size={size}
      sx={{
        color: color === 'green' ? green[500] : blue[500],
        position: 'absolute',
        top: '50%',
        left: '50%',
        marginTop: size === '16px' ? '-8px' : '-12px',
        marginLeft: size === '16px' ? '-8px' : '-12px',
      }}
    />
  )
}
