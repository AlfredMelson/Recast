import { alpha, styled } from '@mui/material/styles'
import { BrandSwatch } from '../../style/BrandSwatch'

/**
 * @REVIEW
 * @name HeaderStyle
 * @description
 * @param {Header} HTMLElement
 * @param {styled} mui styled
 * @return app bar style
 */

export const HeaderStyle = styled('header')(({ theme }) => ({
  top: 0,
  position: 'sticky',
  background:
    theme.palette.mode === 'dark' ? BrandSwatch.Dark.Grey[800] : BrandSwatch.Light.Grey[200],
  boxShadow: `inset 0px -1px 1px ${
    theme.palette.mode === 'dark'
      ? alpha(BrandSwatch.Dark.Blue[600], 0.5)
      : alpha(BrandSwatch.Light.Grey[400], 0.5)
  }`,
  zIndex: theme.zIndex.drawer + 1,
}))
