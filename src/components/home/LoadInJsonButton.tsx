import Box, { BoxProps } from '@mui/material/Box'
import Button from '@mui/material/Button'
import { Link } from '@mui/material'
import { useSetRecoilState } from 'recoil'
import { dataDrawerOpenAtom } from '../../recoil'

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
        <Button size={size} variant={variant}>
          Load-in JSON
        </Button>
      </Link>
    </Box>
  )
}
