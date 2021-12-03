import CircularProgress from '@mui/material/CircularProgress'
import { green } from '@mui/material/colors'

interface GreenCircularProgressProps {
  size: '16px' | '20px'
}

export function GreenCircularProgress({ size }: GreenCircularProgressProps) {
  return (
    <CircularProgress
      size={size}
      sx={{
        color: green[500],
        position: 'absolute',
        top: '50%',
        left: '50%',
        marginTop: size === '16px' ? '-8px' : '-12px',
        marginLeft: size === '16px' ? '-8px' : '-12px',
      }}
    />
  )
}
