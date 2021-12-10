import IconButton from '@mui/material/IconButton'
import Button from '@mui/material/Button'
// import { alpha } from '@mui/material/styles'
import { styled } from '@mui/material/styles'
import TextField, { TextFieldProps } from '@mui/material/TextField'
import { OutlinedInputProps } from '@mui/material/OutlinedInput'

/**
 * SxTfAdornmentIcon manages the style of the interactive icons within search bar
 * @param {IconButton} mui IconButton
 * @param {theme} MuiBrandingTheme
 * @param {styled} mui styled
 * @return
 */
export const SxTfAdornmentIcon = styled(IconButton)(({ theme }) => ({
  color: theme.palette.mode === 'dark' ? theme.palette.grey[200] : theme.palette.grey[800],
  padding: theme.spacing(0.5),
  '&:hover, & .Mui-focused': {
    color: theme.palette.mode === 'dark' ? theme.palette.grey[50] : theme.palette.grey[950],
  },
}))

/**
 * SxDisabledIcon manages the style of disabled icons within search bar
 * @param {IconButton} mui IconButton
 * @param {theme} MuiBrandingTheme
 * @param {styled} mui styled
 * @return
 */
export const SxDisabledIcon = styled(IconButton)(({ theme }) => ({
  color: theme.palette.mode === 'dark' ? theme.palette.grey[200] : theme.palette.grey[800],
  padding: theme.spacing(0.5),
}))

/**
 * SxTextfieldButton manages the style of textfield buttons
 * @param {Button} mui Button
 * @param {theme} MuiBrandingTheme
 * @param {styled} mui styled
 * @return
 */
export const SxTextfieldButton = styled(Button)(({ theme }) => ({
  color: theme.palette.mode === 'dark' ? theme.palette.grey[300] : theme.palette.grey[800],
  backgroundColor: 'transparent',
  minWidth: theme.spacing(7),
  transitionDuration: '600ms',
  transitionProperty: 'color',
  '&:hover, & .Mui-focused': {
    color: theme.palette.mode === 'dark' ? theme.palette.grey[50] : theme.palette.grey[950],
    backgroundColor: 'transparent',
  },
}))

/**
 * SxTextField manages the style of the api search bar
 * @param {IconButton} mui IconButton
 * @param {theme} MuiBrandingTheme
 * @param {styled} mui styled
 * @return
 */
export const SxTextField = styled((props: TextFieldProps) => (
  <TextField
    fullWidth
    InputProps={{ disableUnderline: true } as Partial<OutlinedInputProps>}
    {...props}
  />
))(({ theme }) => ({
  '& .MuiFilledInput-root': {
    fontSize: '14px',
    border: '1px solid #e2e2e1',
    overflow: 'hidden',
    borderRadius: 3,
    transition: theme.transitions.create(['border-color', 'background-color', 'box-shadow']),
    '&:hover': { fontSize: '14px' },
    '&.Mui-focused': {
      fontSize: '14px',
    },
  },
}))
