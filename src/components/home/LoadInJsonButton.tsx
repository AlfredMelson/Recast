import Box, { BoxProps } from '@mui/material/Box'
import { Button, Link } from '@mui/material'
import { useSetRecoilState } from 'recoil'
import { dataDrawerOpenAtom } from '../../recoil'
import { BrandSwatch } from '../../style/BrandSwatch'

type LoadInJsonButtonAlias = {
  size: 'small' | 'medium' | 'large'
  variant: 'contained' | 'outlined' | 'text'
}

export default function LoadInJsonButton({
  size,
  variant,
  ...props
}: LoadInJsonButtonAlias & BoxProps) {
  // visability of drawer containing user json
  const setDataDrawerOpen = useSetRecoilState(dataDrawerOpenAtom)

  return (
    <Box
      {...props}
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        '&& > *': { minWidth: 'clamp(0px, (492px - 100%) * 999 ,100%)' },
        ...props.sx,
      }}>
      <Link onClick={() => setDataDrawerOpen(true)}>
        <Button
          size={size}
          variant={variant}
          sx={{
            borderWidth: 2,
            borderColor: theme =>
              theme.palette.mode === 'dark'
                ? BrandSwatch.Dark.Blue[500]
                : BrandSwatch.Light.Blue[400],
            color: theme =>
              theme.palette.mode === 'dark'
                ? BrandSwatch.Dark.Blue[300]
                : BrandSwatch.Light.Blue[600],
            '&:hover': {
              borderColor: 'transparent',
              borderWidth: 2,
              backgroundColor: theme =>
                theme.palette.mode === 'dark'
                  ? BrandSwatch.Dark.Blue[500]
                  : BrandSwatch.Light.Blue[400],
              color: theme =>
                theme.palette.mode === 'dark'
                  ? BrandSwatch.Dark.Grey[50]
                  : BrandSwatch.Light.Grey[50],
            },
          }}>
          Load-in JSON
        </Button>
      </Link>
    </Box>
  )
}
