import Tabs from '@mui/material/Tabs'
import { styled } from '@mui/material'
import { blue } from '@mui/material/colors'
import * as React from 'react'

/**
 * @name TabsSx
 * @description styles API Tabs
 * @param {Tabs} mui Tabs
 * @param {styled} mui styled
 * @param {theme} MuiBrandingTheme
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
  maxHeight: '40px',
  borderRadius: '4px 4px 0 0',
  background: theme.palette.mode === 'dark' ? '#0D0D0D' : '#ffffff',
  '& .MuiTabs-indicator': {
    background: theme.palette.mode === 'dark' ? blue[900] : blue[400],
  },
}))
