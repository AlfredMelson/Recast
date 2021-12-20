import Tab from '@mui/material/Tab'
import { styled } from '@mui/material'
import { grey } from '@mui/material/colors'
import * as React from 'react'

/**
 * @name SxTab
 * @description styles API Tab
 * @param {Tab} mui Tab
 * @param {styled} mui styled
 * @param {theme} MuiBrandingTheme
 * @alias SxTabAlias
 * @return styled Tab
 */
type SxTabAlias = {
  label: string
  disabled?: any
  icon?: JSX.Element
  iconPosition?: 'bottom' | 'top' | 'end' | 'start'
  onClick?: React.MouseEventHandler
}

export const SxTab = styled(
  ({ label, disabled, onClick, icon, iconPosition, ...props }: SxTabAlias) => (
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
  textTransform: 'none',
  fontWeight: theme.palette.mode === 'dark' ? 400 : 500,
  fontSize: 'clamp(0.88rem, 0.83rem + 0.24vw, 1rem)',
  minWidth: '130px',
  height: '50px',
  minHeight: '50px',
  paddingLeft: theme.spacing(1),
  paddingRight: theme.spacing(1),
  paddingBottom: theme.spacing(0),
  paddingTop: theme.spacing(0),
  color: theme.palette.mode === 'dark' ? grey[400] : grey[700],
  '&:hover, &.Mui-selected': {
    color: theme.palette.mode === 'dark' ? grey[50] : '#000000',
  },
}))
