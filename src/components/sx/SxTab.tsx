import Tab from '@mui/material/Tab'
import Tabs from '@mui/material/Tabs'
import { styled } from '@mui/material'
import { blue } from '@mui/material/colors'
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
  background: '#000000',
  '& .MuiTabs-indicator': {
    background: theme.palette.mode === 'dark' ? blue[900] : theme.palette.grey[100],
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
  fontWeight: theme.typography.fontWeightRegular,
  fontSize: theme.typography.pxToRem(14),
  minWidth: '130px',
  maxHeight: '40px',
  paddingLeft: theme.spacing(1),
  paddingRight: theme.spacing(1),
  paddingBottom: theme.spacing(0),
  paddingTop: theme.spacing(0),
  color: 'rgba(255, 255, 255, 0.7)',

  '&.Mui-selected': {
    color: '#fff',
  },
  '& .Mui-focusVisible': {
    backgroundColor: 'rgba(100, 95, 228, 0.32)',
  },
}))
