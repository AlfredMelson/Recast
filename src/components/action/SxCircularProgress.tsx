import CircularProgress from '@mui/material/CircularProgress'
import { BrandSwatch } from '../../style/BrandSwatch'

interface SxCircularProgressProps {
  size: '16px' | '20px'
  color: 'blue' | 'green'
}

export function SxCircularProgress({ size, color }: SxCircularProgressProps) {
  return (
    <CircularProgress
      size={size}
      sx={{
        color:
          color === 'green'
            ? theme =>
                theme.palette.mode === 'dark'
                  ? BrandSwatch.Dark.Green[300]
                  : BrandSwatch.Light.Green[500]
            : theme =>
                theme.palette.mode === 'dark'
                  ? BrandSwatch.Dark.Blue[400]
                  : BrandSwatch.Light.Blue[500],
        position: 'absolute',
        top: '50%',
        left: '50%',
        marginTop: size === '16px' ? '-8px' : '-12px',
        marginLeft: size === '16px' ? '-8px' : '-12px',
      }}
    />
  )
}
