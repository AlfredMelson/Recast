import { alpha, styled } from '@mui/material/styles'
import { BrandColors } from '../../style/BrandColors'

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
    theme.palette.mode === 'dark' ? BrandColors.Dark.Grey[800] : BrandColors.Light.Grey[200],
  boxShadow: `inset 0px -1px 1px ${
    theme.palette.mode === 'dark'
      ? alpha(BrandColors.Dark.Blue[600], 0.5)
      : alpha(BrandColors.Light.Grey[400], 0.5)
  }`,
  zIndex: theme.zIndex.drawer + 1,
}))
