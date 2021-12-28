import Tab from '@mui/material/Tab'
import { styled } from '@mui/material'
import * as React from 'react'
import { darkGrey, lightGrey } from '../../style/MuiBrandingTheme'

/**
 * @name TabSx
 * @description styles API Tab
 * @param {Tab} mui Tab
 * @param {styled} mui styled
 * @param {theme} MuiBrandingTheme
 * @alias TabSxAlias
 * @return styled Tab
 */

type TabSxAlias = {
  label: string
  disabled?: any
  icon?: JSX.Element
  iconPosition?: 'bottom' | 'top' | 'end' | 'start'
  onClick?: React.MouseEventHandler
}

export const TabSx = styled(
  ({ label, disabled, onClick, icon, iconPosition, ...props }: TabSxAlias) => (
    <Tab
      label={label}
      disabled={disabled}
      onClick={onClick}
      disableRipple
      icon={icon}
      iconPosition={iconPosition}
      {...props}
    />
  )
)(({ theme }) => ({
  ...theme.typography.body2,
  textTransform: 'none',
  minWidth: 130,
  height: 50,
  minHeight: 50,
  paddingLeft: theme.spacing(10),
  paddingRight: theme.spacing(10),
  paddingBottom: theme.spacing(0),
  paddingTop: theme.spacing(0),
  color: theme.palette.mode === 'dark' ? darkGrey[100] : lightGrey[800],
  transition: theme.transitions.create(['color', 'transform'], {
    duration: theme.transitions.duration.standard,
    easing: theme.transitions.easing.easeInOut,
  }),
  '&:hover, &.Mui-selected': {
    color: theme.palette.mode === 'dark' ? darkGrey[50] : lightGrey[900],
  },
}))
