import Button, { ButtonProps } from '@mui/material/Button'
import { Box, styled } from '@mui/material'
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

/**
 * @name ButtonSxStyle
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
export const ButtonSxStyle = styled((props: ButtonProps) => (
  <Button size='small' variant='text' {...props} />
))(({ theme }) => ({
  color: theme.palette.mode === 'dark' ? BrandSwatch.Dark.Grey[100] : BrandSwatch.Light.Grey[800],
  backgroundColor: 'transparent',
  minWidth: theme.spacing(70),
  textTransform: 'none',
  transition: theme.transitions.create(['all'], {
    duration: theme.transitions.duration.standard,
    easing: theme.transitions.easing.easeInOut,
  }),
  // '&.MuiButton-root': {
  //   padding: theme.spacing(0, 8),
  //   borderRadius: 3,
  // },
  '&:hover, &.Mui-focused': {
    color: theme.palette.mode === 'dark' ? BrandSwatch.Dark.Grey[50] : BrandSwatch.Light.Grey[900],
    // backgroundColor: 'transparent',
  },
}))

// const ButtonSxStyle = styled((props?: SelectProps) => (
//   <Select autoWidth disableUnderline={true} {...props} />
// ))(({ theme }) => ({
//   fontSize: 16,
//   height: 50,
//   paddingLeft: 20,
//   display: 'flex',
//   alignItems: 'center',
//   backgroundColor:
//     theme.palette.mode === 'dark'
//       ? alpha(BrandSwatch.Dark.Grey[700], 0.2)
//       : alpha(BrandSwatch.Light.Grey[200], 0.2),
//   border: '1px solid',
//   borderRadius: 3,
//   // borderColor:
//   //   theme.palette.mode === 'dark' ? BrandSwatch.Dark.Grey[900] : BrandSwatch.Light.Grey[200],
//   borderColor: 'transparent',
//   color: theme.palette.mode === 'dark' ? BrandSwatch.Dark.Grey[200] : BrandSwatch.Light.Grey[700],
//   transition: theme.transitions.create(['all'], {
//     duration: theme.transitions.duration.standard,
//     easing: theme.transitions.easing.easeInOut,
//   }),
//   '&:hover, &.Mui-focused ': {
//     color: theme.palette.mode === 'dark' ? BrandSwatch.Dark.Grey[50] : BrandSwatch.Light.Grey[900],
//     backgroundColor:
//       theme.palette.mode === 'dark' ? BrandSwatch.Dark.Grey[700] : BrandSwatch.Light.Grey[200],
//     border: '1px solid transparent',
//     borderRadius: 3,
//   },
//   '&.Mui-selected': {
//     color: theme.palette.mode === 'dark' ? BrandSwatch.Dark.Grey[50] : BrandSwatch.Light.Grey[900],
//     backgroundColor:
//       theme.palette.mode === 'dark' ? BrandSwatch.Dark.Grey[900] : BrandSwatch.Light.Grey[200],
//   },
// }))

/**
 * @name ButtonSxControls
 * @description styles API Tab Panel background motion
 * @param {motion} framer-motion motion
 * @param {children} React.ReactNode
 * @param {paddingLeft} mui
 * @return
 */

type ButtonSxControlsAlias = {
  id: string
  value: string
  children: React.ReactNode
  onChange?: React.FormEventHandler<HTMLButtonElement>
  props?: ButtonProps
}

export const ButtonSxControls = ({
  id,
  value,
  onChange,
  children,
  ...props
}: ButtonSxControlsAlias) => {
  return (
    <Box sx={{ m: 10 }}>
      <ButtonSxStyle id={id} value={value} onChange={onChange} {...props}>
        {children}
      </ButtonSxStyle>
    </Box>
  )
}
