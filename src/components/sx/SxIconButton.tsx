import IconButton from '@mui/material/IconButton'
import { styled } from '@mui/system'
import Tooltip from '@mui/material/Tooltip'

export const SxIconButton = styled(IconButton)(({ theme }) => ({
  color: theme.palette.text.secondary,
  textDecoration: 'none',
  padding: theme.spacing(1),
  borderRadius: theme.shape.borderRadius,
  '&:hover, &:focus': {
    color: '#007FFF',
    // color: theme.palette.text.primary,
    backgroundColor: 'transparent',
    // backgroundColor:
    //   theme.palette.mode === 'dark' ? theme.palette.primaryDark[900] : theme.palette.grey[50],
  },
  '& > div': {
    cursor: 'default',
  },
}))

export function SxToolTip(tooltipTitle, transitionProps, children) {
  return (
    <Tooltip title={tooltipTitle} TransitionProps={transitionProps}>
      <SxIconButton>{children}</SxIconButton>
    </Tooltip>
  )
}
