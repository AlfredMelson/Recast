import IconButton from '@mui/material/IconButton'
import { styled } from '@mui/system'

export const SxIconButton = styled(IconButton)(({ theme }) => ({
  color: theme.palette.text.secondary,
  textDecoration: 'none',
  padding: theme.spacing(1),
  borderRadius: theme.shape.borderRadius,
  '&:hover, &:focus': {
    color: theme.palette.text.primary,
    backgroundColor:
      theme.palette.mode === 'dark' ? theme.palette.primaryDark[900] : theme.palette.grey[50],
  },
  '& > div': {
    cursor: 'default',
  },
}))
