import { alpha, styled } from '@mui/material/styles'
import { BrandColor } from '../../style/BrandColor'

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
    theme.palette.mode === 'dark' ? BrandColor.Dark.Grey[800] : BrandColor.Light.Grey[200],
  boxShadow: `inset 0px -1px 1px ${
    theme.palette.mode === 'dark'
      ? alpha(BrandColor.Dark.Blue[600], 0.5)
      : alpha(BrandColor.Light.Grey[400], 0.5)
  }`,
  zIndex: theme.zIndex.drawer + 1,
}))
