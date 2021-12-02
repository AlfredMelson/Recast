import IconButton from '@mui/material/IconButton'
import { styled } from '@mui/system'
import Tooltip from '@mui/material/Tooltip'
import { TransitionProps } from '@mui/material/transitions'

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

export const SxTTIconButton = styled(IconButton)(({ theme }) => ({
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

interface SxToolTipIconButtonProps {
  children: React.ReactElement
  tooltipTitle?: string
  id?: string
  disabled?: boolean
  onClick?: any
  transitionProps?: TransitionProps
}

export function SxToolTipIconButton({
  tooltipTitle,
  children,
  id,
  disabled,
  onClick,
  transitionProps,
}: SxToolTipIconButtonProps) {
  return (
    <Tooltip
      arrow
      title={tooltipTitle}
      TransitionProps={transitionProps}
      disableFocusListener={disabled}
      disableHoverListener={disabled}
      disableInteractive={disabled}
      disableTouchListener={disabled}>
      <SxTTIconButton id={id} disabled={disabled} onClick={onClick}>
        {children}
      </SxTTIconButton>
    </Tooltip>
  )
}

export const SxDataIconButton = styled(IconButton)(({ theme }) => ({
  color: theme.palette.text.secondary,
  textDecoration: 'none',
  padding: theme.spacing(0.25),
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
