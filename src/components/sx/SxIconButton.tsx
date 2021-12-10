import IconButton from '@mui/material/IconButton'
import { styled } from '@mui/material'

/**
 * SxIBColorMode manages the style of the app color mode icon button
 * @param {IconButton} mui IconButton
 * @param {theme} MuiBrandingTheme
 * @param {styled} mui styled
 * @return icon color mode style for light and dark mode
 */
export const SxIBColorMode = styled(IconButton)(({ theme }) => ({
  color: theme.palette.mode === 'dark' ? theme.palette.grey[500] : theme.palette.grey[700],
  padding: theme.spacing(1),
  '&:hover, & .Mui-focused': {
    color: theme.palette.mode === 'dark' ? theme.palette.grey[50] : theme.palette.grey[900],
  },
}))

/**
 * SxIBApiInteraction manages the style of the interactive icons within API Json
 * @param {IconButton} mui IconButton
 * @param {theme} MuiBrandingTheme
 * @param {styled} mui styled
 * @return icon color mode style for light and dark mode
 */
export const SxIBApiInteraction = styled(IconButton)(({ theme }) => ({
  color: theme.palette.mode === 'dark' ? theme.palette.grey[500] : theme.palette.grey[700],
  margin: theme.spacing(0, 1),
  padding: theme.spacing(0, 0.4),
  transitionProperty: 'color',
  msTransitionDuration: 'var(--transition-speed-fastest)',
  '&:hover, & .Mui-focused': {
    color: theme.palette.mode === 'dark' ? theme.palette.grey[50] : theme.palette.grey[900],
  },
}))

/**
 * SxAppBarIconButton manages the style of the interactive app bar icons
 * @param {IconButton} mui IconButton
 * @param {theme} MuiBrandingTheme
 * @param {styled} mui styled
 * @return icon color mode style for light and dark mode
 */
export const SxAppBarIconButton = styled(IconButton)(({ theme }) => ({
  color: theme.palette.text.secondary,
  padding: theme.spacing(1),
  '&:hover, & .Mui-focused': {
    color: '#007FFF',
  },
}))

/**
 * SxTxInterfaceIconButton manages the style of the interactive app bar icons
 * @param {IconButton} mui IconButton
 * @param {theme} MuiBrandingTheme
 * @param {styled} mui styled
 * @return icon color mode style for light and dark mode
 */
export const SxTxInterfaceIconButton = styled(IconButton)(({ theme }) => ({
  color: theme.palette.text.secondary,
  padding: theme.spacing(1),
  backgroundColor: 'primaryDark.500',
  '&:hover, &.Mui-focused': {
    backgroundColor: 'primaryDark.600',
    color: '#007FFF',
  },
}))

export const SxIconButton = styled(IconButton)(({ theme }) => ({
  color: theme.palette.text.secondary,
  padding: theme.spacing(1),
  '&:hover, & .Mui-focused': {
    color: '#007FFF',
  },
  '& > div': {
    cursor: 'default',
  },
}))

export const SxDataIconButton = styled(IconButton)(({ theme }) => ({
  color: theme.palette.text.secondary,
  padding: theme.spacing(0.25),
  '&:hover, & .Mui-focused': {
    color: '#007FFF',
  },
}))
