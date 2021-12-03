import Button from '@mui/material/Button'
import { styled } from '@mui/material'

export const SxButton = styled(Button)(({ theme }) => ({
  fontSize: '14px',
  lineHeight: '21px',
  fontWeight: 600,
  minWidth: '110px',
  color: theme.palette.text.secondary,
  textDecoration: 'none',
  padding: theme.spacing(1),
  borderRadius: theme.shape.borderRadius,
  '&:hover, &:focus': {
    color: '#007FFF',
    backgroundColor: 'transparent',
  },
  '& > div': {
    cursor: 'default',
  },
}))
