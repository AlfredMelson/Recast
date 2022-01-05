import { alpha, styled } from '@mui/material/styles'
import * as React from 'react'
import { BrandSwatch } from '../../style/BrandSwatch'

/**
 * @REVIEW
 * @name PanelStyle
 * @description
 * @param {Div} HTMLElement
 * @param {styled} mui styled
 * @return
 */

const PanelWrapper = styled('div')(({ theme }) => ({
  position: 'relative',
  overflow: 'hidden',
  border: '2px solid',
  borderColor:
    theme.palette.mode === 'dark' ? BrandSwatch.Dark.Grey[800] : BrandSwatch.Light.Grey[200],
  borderTop: 0,
  borderRadius: theme.spacing(0, 0, 3, 3),
}))

type PanelStyleAlias = {
  children: React.ReactNode
}

export function PanelStyle({ children }: PanelStyleAlias) {
  return <PanelWrapper>{children}</PanelWrapper>
}

/**
 * @REVIEW
 * @name TabsStyle
 * @description
 * @param {Div} HTMLElement
 * @param {styled} mui styled
 * @return
 */

const TabsWrapper = styled('div')(({ theme }) => ({
  borderBottom: 1,
  borderColor:
    theme.palette.mode === 'dark'
      ? alpha(BrandSwatch.Dark.Blue[600], 0.5)
      : alpha(BrandSwatch.Light.Grey[400], 0.5),
}))

type TabsStyleAlias = {
  children: React.ReactNode
}

export function TabsStyle({ children }: TabsStyleAlias) {
  return <TabsWrapper>{children}</TabsWrapper>
}
