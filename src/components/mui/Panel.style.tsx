import { styled } from '@mui/material/styles'
import * as React from 'react'

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
  // border: '1px solid',
  // borderColor:
  //   theme.palette.mode === 'dark' ? BrandSwatch.Dark.Grey[800] : BrandSwatch.Light.Grey[200],
  borderRadius: theme.spacing(0, 3, 3, 3),
}))

type PanelStyleAlias = {
  children: React.ReactNode
}

export function PanelStyle({ children }: PanelStyleAlias) {
  return <PanelWrapper>{children}</PanelWrapper>
}
