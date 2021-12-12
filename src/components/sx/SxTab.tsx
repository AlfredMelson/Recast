import Tab from '@mui/material/Tab'
import Tabs from '@mui/material/Tabs'
import { styled } from '@mui/material'
import { blue, grey } from '@mui/material/colors'
import * as React from 'react'

/**
 * @name SxTabs
 * @description styles API Tabs
 * @param {Tabs} mui Tabs
 * @param {styled} mui styled
 * @param {theme} MuiBrandingTheme
 * @return styled Tabs
 */
type SxTabsAlias = {
  value?: number
  onChange?: (event: React.SyntheticEvent, newValue: number) => void
  children?: React.ReactNode
}

export const SxTabs = styled((props: SxTabsAlias) => (
  <Tabs
    allowScrollButtonsMobile
    selectionFollowsFocus
    TabIndicatorProps={{ children: <span className='MuiTabs-indicatorSpan' /> }}
    {...props}
  />
))(({ theme }) => ({
  maxHeight: '40px',
  borderRadius: '4px 4px 0 0',
  background: theme.palette.mode === 'dark' ? '#0D0D0D' : '#ffffff',
  '& .MuiTabs-indicator': {
    background: theme.palette.mode === 'dark' ? blue[900] : blue[400],
  },
}))

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
  fontSize: theme.typography.pxToRem(14),
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
  '&.Mui-selected': {
    color: theme.palette.mode === 'dark' ? grey[50] : '#000000',
  },
  '& .Mui-focusVisible': {
    backgroundColor: 'rgba(100, 95, 228, 0.32)',
  },
}))
