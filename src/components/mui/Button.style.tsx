import Button, { ButtonProps } from '@mui/material/Button'
import { styled } from '@mui/material'
import { BrandSwatch } from '../../style/BrandSwatch'

/**
 * @name ButtonSxUserJsonDataToggle
 * @description
 * @param {Button} mui Button
 * @param {styled} mui styled
 * @userActionPseudoClasses {hover}	:hover, {active}	:active, {focus}	:focus
 * {focus visible}	:focus-visible, {focus within}	:focus-within
 * @globalClassNames {active}	.Mui-active, {checked}	.Mui-checked, {completed}	.Mui-completed
 * {disabled}	.Mui-disabled, {expanded}	.Mui-expanded, {focus visible}	.Mui-focusVisible
 * {focused}	.Mui-focused. {required}	.Mui-required, {selected}	.Mui-selected
 * @return
 */
export const ButtonSxUserJsonDataToggle = styled((props: ButtonProps) => (
  <Button size='medium' variant='outlined' {...props} />
))(({ theme }) => ({
  minWidth: 128,
  margin: theme.spacing(10),
  fontWeight: theme.palette.mode === 'dark' ? 400 : 600,
  borderWidth: theme.palette.mode === 'dark' ? 1 : 2,
  borderColor:
    theme.palette.mode === 'dark' ? BrandSwatch.Dark.Blue[800] : BrandSwatch.Light.Blue[500],
  color: theme.palette.mode === 'dark' ? BrandSwatch.Dark.Blue[300] : BrandSwatch.Light.Blue[600],
  '&:hover': {
    borderColor: 'transparent',
    borderWidth: theme.palette.mode === 'dark' ? 1 : 2,
    backgroundColor:
      theme.palette.mode === 'dark' ? BrandSwatch.Dark.Blue[700] : BrandSwatch.Light.Blue[500],
    color: theme.palette.mode === 'dark' ? BrandSwatch.Dark.Grey[50] : BrandSwatch.Light.Grey[50],
  },
  '&.Mui-focused': {
    color: '#007FFF',
    backgroundColor:
      theme.palette.mode === 'dark' ? BrandSwatch.Dark.Blue[800] : BrandSwatch.Light.Blue[500],
  },
  '&.Mui-disabled': {
    color: 'transparent',
    borderColor: 'transparent',
    backgroundColor: 'transparent',
  },
  '& > div': {
    cursor: 'default',
  },
}))

/**
 * @name ButtonSxApiJsonEditItem
 * @description styles api item button container
 * @param {Button} mui Button
 * @param {styled} mui styled
 * @userActionPseudoClasses {hover}	:hover, {active}	:active, {focus}	:focus
 * {focus visible}	:focus-visible, {focus within}	:focus-within
 * @globalClassNames {active}	.Mui-active, {checked}	.Mui-checked, {completed}	.Mui-completed
 * {disabled}	.Mui-disabled, {expanded}	.Mui-expanded, {focus visible}	.Mui-focusVisible
 * {focused}	.Mui-focused. {required}	.Mui-required, {selected}	.Mui-selected
 * @return
 */
export const ButtonSxApiJsonEditItem = styled((props: ButtonProps) => (
  <Button size='small' variant='text' {...props} />
))(({ theme }) => ({
  '&.MuiButton-root': {
    textTransform: 'none',
    padding: theme.spacing(0, 8),
    borderRadius: 3,
  },
  '&:hover': {
    backgroundColor:
      theme.palette.mode === 'dark' ? BrandSwatch.Dark.Grey[900] : BrandSwatch.Light.Grey[100],
  },
}))
