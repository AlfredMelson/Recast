import IconButton from '@mui/material/IconButton'
import Button from '@mui/material/Button'
import Tooltip from '@mui/material/Tooltip'
import { TransitionProps } from '@mui/material/transitions'
import * as React from 'react'
import { alpha, styled } from '@mui/material/styles'
import TextField, { TextFieldProps } from '@mui/material/TextField'
import { OutlinedInputProps } from '@mui/material/OutlinedInput'

const TextFieldIcon = styled(IconButton)(({ theme }) => ({
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

interface SxTextfieldIconProps {
  tooltipTitle: string
  children: React.ReactElement
  disabled?: boolean
  onClick?: any
  transitionProps?: TransitionProps
}

export function SxTextfieldIcon({
  tooltipTitle,
  children,
  disabled,
  onClick,
  transitionProps,
}: SxTextfieldIconProps) {
  return (
    <Tooltip
      arrow
      title={tooltipTitle}
      TransitionProps={transitionProps}
      disableFocusListener={disabled}
      disableHoverListener={disabled}
      disableInteractive={disabled}
      disableTouchListener={disabled}>
      <TextFieldIcon disabled={disabled} onClick={onClick}>
        {children}
      </TextFieldIcon>
    </Tooltip>
  )
}

export const SxTextFieldButton = styled(Button)(({ theme }) => ({
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

export const SxTextField = styled((props: TextFieldProps) => (
  <TextField InputProps={{ disableUnderline: true } as Partial<OutlinedInputProps>} {...props} />
))(({ theme }) => ({
  '& .MuiFilledInput-root': {
    border: '1px solid #e2e2e1',
    overflow: 'hidden',
    borderRadius: 3,
    backgroundColor: theme.palette.mode === 'light' ? '#fcfcfb' : '#2b2b2b',
    transition: theme.transitions.create(['border-color', 'background-color', 'box-shadow']),
    '&:hover': {
      backgroundColor: 'transparent',
    },
    '&.Mui-focused': {
      backgroundColor: 'transparent',
      boxShadow: `${alpha(theme.palette.primary.main, 0.25)} 0 0 0 1px`,
      borderColor: theme.palette.primary.main,
    },
  },
}))
