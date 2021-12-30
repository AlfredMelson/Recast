import Button, { ButtonProps } from '@mui/material/Button'
import { styled } from '@mui/material'

/**
 * @REVIEW
 * @name ButtonSxDataToggle
 * @description
 * @param {Button} mui Button
 * @param {styled} mui styled
 * @return
 */
export const ButtonSxDataToggle = styled(Button)(({ theme }) => ({
  ...theme.typography.body2,
  textTransform: 'none',
  fontWeight: theme.palette.mode === 'dark' ? 400 : 500,
  minWidth: 110,
  color: theme.palette.text.secondary,
  textDecoration: 'none',
  padding: theme.spacing(10),
  '&:hover, & .Mui-focused': {
    color: '#007FFF',
    backgroundColor: 'transparent',
  },
  '& > div': {
    cursor: 'default',
  },
}))

/**
 * @name ButtonSxApiItem
 * @description styles api item button container
 * @param {Button} mui Button
 * @param {styled} mui styled
 * @return
 */
export const ButtonSxApiItem = styled((props: ButtonProps) => <Button size='small' {...props} />)(
  () => ({
    '&.MuiButton-root': {
      paddingLeft: 0,
      paddingRight: 0,
      paddingTop: 0,
      paddingBottom: 0,
      textTransform: 'none',
    },
    fontWeight: 400,
    '&:hover': { backgroundColor: '#000000' },
  })
)
