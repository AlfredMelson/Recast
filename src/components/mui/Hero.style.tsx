import { Box } from '@mui/material'
import { styled } from '@mui/material/styles'
// import { alpha, styled } from '@mui/material/styles'
import * as React from 'react'
import { BrandSwatch } from '../../style/BrandSwatch'

/**
 * @REVIEW
 * @name HeroStyle
 * @description
 * @param {Div} HTMLElement
 * @param {styled} mui styled
 * @return app bar style
 */

const HeroWrapper = styled('div')(({ theme }) => ({
  border: '1px solid transparent',
  borderRadius: 3,
  backgroundColor:
    theme.palette.mode === 'dark' ? BrandSwatch.Dark.Grey[800] : BrandSwatch.Light.Grey[100],
}))

type HeroStyleAlias = {
  children: React.ReactNode
}

export function HeroStyle({ children }: HeroStyleAlias) {
  return (
    <HeroWrapper sx={{ margin: theme => theme.spacing(30, 0, 0) }}>
      <Box sx={{ m: 20 }}>{children}</Box>
    </HeroWrapper>
  )
}
