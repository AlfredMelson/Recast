import Tab from '@mui/material/Tab'
import { styled } from '@mui/material'
import { grey } from '@mui/material/colors'
import * as React from 'react'

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
  fontWeight: theme.palette.mode === 'dark' ? 400 : 500,
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
