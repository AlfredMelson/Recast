import { alpha, styled } from '@mui/material/styles'
import { darkBlue, darkGrey, lightGrey } from '../../style/MuiBrandingTheme'

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
  background: theme.palette.mode === 'dark' ? darkGrey[800] : lightGrey[200],
  boxShadow: `inset 0px -1px 1px ${
    theme.palette.mode === 'dark' ? alpha(darkBlue[600], 0.5) : alpha(lightGrey[400], 0.5)
  }`,
  zIndex: theme.zIndex.drawer + 1,
}))
