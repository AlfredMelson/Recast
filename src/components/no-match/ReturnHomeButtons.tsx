import Box, { BoxProps } from '@mui/material/Box'
import Button from '@mui/material/Button'
import KeyboardArrowRightRounded from '@mui/icons-material/KeyboardArrowRightRounded'
import { Link } from 'react-router-dom'

export default function ReturnHomeButtons({ ...props }: BoxProps) {
  return (
    <Box
      {...props}
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        '&& > *': { minWidth: 'clamp(0px, (492px - 100%) * 999 ,100%)' },
        ...props.sx,
      }}>
      <Link to='/' style={{ textDecoration: 'none' }}>
        <Button size='large' variant='text' endIcon={<KeyboardArrowRightRounded />}>
          Head back
        </Button>
      </Link>

      <Box sx={{ width: 16, height: 16 }} />
    </Box>
  )
}
