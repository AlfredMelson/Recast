import Tabs from '@mui/material/Tabs'
import { styled } from '@mui/material'
import * as React from 'react'
import { BrandColor } from '../../style/BrandColor'

/**
 * @name TabsSx
 * @description styles API Tabs
 * @param {Tabs} mui Tabs
 * @param {styled} mui styled
 * @param {theme} MuiBrandingTheme
 * @userActionPseudoClasses {hover}	:hover, {active}	:active, {focus}	:focus
 * {focus visible}	:focus-visible, {focus within}	:focus-within
 * @globalClassNames {active}	.Mui-active, {checked}	.Mui-checked, {completed}	.Mui-completed
 * {disabled}	.Mui-disabled, {expanded}	.Mui-expanded, {focus visible}	.Mui-focusVisible
 * {focused}	.Mui-focused. {required}	.Mui-required, {selected}	.Mui-selected
 * @return styled Tabs
 */

type TabsSxAlias = {
  value?: number
  onChange?: (event: React.SyntheticEvent, newValue: number) => void
  children?: React.ReactNode
}

export const TabsSx = styled((props: TabsSxAlias) => (
  <Tabs
    allowScrollButtonsMobile
    selectionFollowsFocus
    TabIndicatorProps={{ children: <span className='MuiTabs-indicatorSpan' /> }}
    {...props}
  />
))(({ theme }) => ({
  maxHeight: 40,
  background:
    theme.palette.mode === 'dark' ? BrandColor.Dark.Grey[800] : BrandColor.Light.Grey[200],
  transition: theme.transitions.create(['background'], {
    duration: theme.transitions.duration.standard,
    easing: theme.transitions.easing.easeInOut,
  }),
  '.Mui-selected': {
    borderRadius: '3px 3px 0 0',
    background:
      theme.palette.mode === 'dark' ? BrandColor.Dark.Grey[700] : BrandColor.Light.Grey[300],
  },
  '& .MuiTabs-indicator': {
    background:
      theme.palette.mode === 'dark' ? BrandColor.Dark.Blue[600] : BrandColor.Light.Blue[400],
  },
}))
