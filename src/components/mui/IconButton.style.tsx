import IconButton, { IconButtonProps } from '@mui/material/IconButton'
import { styled } from '@mui/material'

/**
 * @name IconButtonSxColorMode
 * @description manage the style of the app color mode icon button
 * @param {IconButton} mui IconButton
 * @param {theme} MuiBrandingTheme
 * @param {styled} mui styled
 * @return icon color mode style for light and dark mode
 */
export const IconButtonSxColorMode = styled(IconButton)(({ theme }) => ({
  color: theme.palette.mode === 'dark' ? theme.palette.grey[500] : theme.palette.grey[700],
  padding: theme.spacing(1),
  '&:hover, & .Mui-focused': {
    color: theme.palette.mode === 'dark' ? theme.palette.grey[50] : theme.palette.grey[900],
  },
}))

/**
 * @name IconButtonSxApiIcons
 * @description manage the style of the interactive icons within API Json
 * @param {IconButton} mui IconButton
 * @param {theme} MuiBrandingTheme
 * @param {styled} mui styled
 * @return icon color mode style for light and dark mode
 */

export const IconButtonSxApiIcons = styled((props: IconButtonProps) => <IconButton {...props} />)(
  ({ theme }) => ({
    color: theme.palette.mode === 'dark' ? theme.palette.grey[500] : theme.palette.grey[700],
    margin: theme.spacing(0, 0.5),
    padding: theme.spacing(0),
    transitionProperty: 'color',
    transitionDuration: '150ms',
    '&:hover, & .Mui-focused': {
      color: theme.palette.mode === 'dark' ? theme.palette.grey[50] : theme.palette.grey[900],
    },
  })
)

/**
 * @name IconButtonSxApiEdit
 * @description manage the style of the edit icons within API Json
 * @param {IconButton} mui IconButton
 * @param {theme} MuiBrandingTheme
 * @param {styled} mui styled
 * @userActionPseudoClasses {hover}	:hover, {active}	:active, {focus}	:focus
 * {focus visible}	:focus-visible, {focus within}	:focus-within
 * @globalClassNames {active}	.Mui-active, {checked}	.Mui-checked, {completed}	.Mui-completed
 * {disabled}	.Mui-disabled, {expanded}	.Mui-expanded, {focus visible}	.Mui-focusVisible
 * {focused}	.Mui-focused. {required}	.Mui-required, {selected}	.Mui-selected
 * @return style for edit icon button
 */

export const IconButtonSxApiEdit = styled(IconButton)(({ theme }) => ({
  '.Mui-disabled': {
    color: theme.palette.mode === 'dark' ? '#000000' : theme.palette.grey[900],
  },
  color: theme.palette.mode === 'dark' ? theme.palette.grey[500] : theme.palette.grey[700],
  padding: theme.spacing(0.5),
  transitionProperty: 'color',
  transitionDuration: '150ms',
  '&:hover, .Mui-focused': {
    color: theme.palette.mode === 'dark' ? theme.palette.grey[50] : theme.palette.grey[900],
  },
}))

/**
 * @name IconButtonSxAppBar
 * @description manage the style of the interactive app bar icons
 * @param {IconButton} mui IconButton
 * @param {theme} MuiBrandingTheme
 * @param {styled} mui styled
 * @return icon color mode style for light and dark mode
 */
export const IconButtonSxAppBar = styled(IconButton)(({ theme }) => ({
  color: theme.palette.text.secondary,
  padding: theme.spacing(1),
  '&:hover, & .Mui-focused': {
    color: '#007FFF',
  },
}))

/**
 * @name IconButtonSxTsInterface
 * @description manage the style of the interactive app bar icons
 * @param {IconButton} mui IconButton
 * @param {theme} MuiBrandingTheme
 * @param {styled} mui styled
 * @return icon color mode style for light and dark mode
 */
export const IconButtonSxTsInterface = styled(IconButton)(({ theme }) => ({
  color: theme.palette.text.secondary,
  padding: theme.spacing(1),
  backgroundColor: 'primaryDark.500',
  '&:hover, &.Mui-focused': {
    backgroundColor: 'primaryDark.600',
    color: '#007FFF',
  },
}))

/**
 * @name IconButtonSx
 * @description manage
 * @param {IconButton} mui IconButton
 * @param {theme} MuiBrandingTheme
 * @param {styled} mui styled
 * @return icon color mode style for light and dark mode
 */
export const IconButtonSx = styled(IconButton)(({ theme }) => ({
  color: theme.palette.text.secondary,
  padding: theme.spacing(1),
  '&:hover, & .Mui-focused': {
    color: '#007FFF',
  },
  '& > div': {
    cursor: 'default',
  },
}))

/**
 * @name IconButtonSxDataIcon
 * @description manage
 * @param {IconButton} mui IconButton
 * @param {theme} MuiBrandingTheme
 * @param {styled} mui styled
 * @return icon color mode style for light and dark mode
 */
export const IconButtonSxDataIcon = styled(IconButton)(({ theme }) => ({
  color: theme.palette.text.secondary,
  padding: theme.spacing(0.25),
  '&:hover, & .Mui-focused': {
    color: '#007FFF',
  },
}))