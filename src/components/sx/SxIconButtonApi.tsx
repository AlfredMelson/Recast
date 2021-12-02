import IconButton from '@mui/material/IconButton'
import { styled } from '@mui/system'

export const SxIconButtonApi = styled(IconButton)(({ theme }) => ({
  color: theme.palette.text.secondary,
  textDecoration: 'none',
  margin: theme.spacing(0, 1),
  padding: theme.spacing(0, 0.4),
  borderRadius: theme.shape.borderRadius,
  '&:hover, &:focus': {
    color: '#007FFF',
    // color: theme.palette.text.primary,
    // backgroundColor: 'transparent',
    backgroundColor:
      theme.palette.mode === 'dark' ? theme.palette.primaryDark[900] : theme.palette.grey[50],
  },
  '& > div': {
    cursor: 'default',
  },
}))
