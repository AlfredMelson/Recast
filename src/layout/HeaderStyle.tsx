import { grey } from '@mui/material/colors'
import { styled } from '@mui/material/styles'

export const HeaderStyle = styled('header')(({ theme }) => ({
  position: 'sticky',
  top: 0,
  transition: theme.transitions.create('top'),
  zIndex: theme.zIndex.drawer + 1,
  boxShadow: `inset 0px -1px 1px ${
    theme.palette.mode === 'dark' ? theme.palette.grey[700] : theme.palette.grey[500]
  }`,
  backgroundColor: theme.palette.mode === 'dark' ? '#0D0D0D' : grey[100],
}))
