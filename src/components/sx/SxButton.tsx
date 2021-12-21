import Button, { ButtonProps } from '@mui/material/Button'
import { styled } from '@mui/material'

/**
 * @REVIEW
 * @name SxButton
 * @description
 * @param {Button} mui Button
 * @param {styled} mui styled
 * @return
 */
export const SxButton = styled(Button)(({ theme }) => ({
  fontSize: 'clamp(0.88rem, 0.83rem + 0.24vw, 1rem)',
  lineHeight: '21px',
  fontWeight: 600,
  minWidth: '110px',
  color: theme.palette.text.secondary,
  textDecoration: 'none',
  padding: theme.spacing(1),
  borderRadius: theme.shape.borderRadius,
  '&:hover, & .Mui-focused': {
    color: '#007FFF',
    backgroundColor: 'transparent',
  },
  '& > div': {
    cursor: 'default',
  },
}))

/**
 * @name SxApiItemButton
 * @description styles api item button container
 * @param {Button} mui Button
 * @param {styled} mui styled
 * @return
 */
export const SxApiItemButton = styled((props: ButtonProps) => <Button size='small' {...props} />)(
  () => ({
    '&.MuiButton-root': {
      paddingLeft: 0,
      paddingRight: 0,
      paddingTop: 0,
      paddingBottom: 0,
    },
    fontWeight: 400,
    '&:hover': { borderRadius: '4px', backgroundColor: '#000000' },
  })
)
