import { styled } from '@mui/material/styles'

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
  background: theme.palette.mode === 'dark' ? theme.palette.grey[900] : theme.palette.grey[100],
  boxShadow: `inset 0px -1px 1px ${
    theme.palette.mode === 'dark' ? theme.palette.grey[700] : theme.palette.grey[500]
  }`,
  zIndex: theme.zIndex.drawer + 1,
}))
