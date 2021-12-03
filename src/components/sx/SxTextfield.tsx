import IconButton from '@mui/material/IconButton'
import Button from '@mui/material/Button'
import { alpha, styled } from '@mui/material/styles'
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
  '&:hover, &:focus': {
    color: theme.palette.mode === 'dark' ? theme.palette.grey[50] : theme.palette.grey[950],
  },
}))

/**
 * SxTfSubmitButton manages the style of the textfield submit button
 * @param {Button} mui Button
 * @param {theme} MuiBrandingTheme
 * @param {styled} mui styled
 * @return
 */
export const SxTfSubmitButton = styled(Button)(({ theme }) => ({
  color: theme.palette.mode === 'dark' ? theme.palette.grey[200] : theme.palette.grey[800],
  padding: theme.spacing(0.25),
  '&:hover, &:focus': {
    color: theme.palette.mode === 'dark' ? theme.palette.grey[50] : theme.palette.grey[950],
  },
}))

export const SxTextField = styled((props: TextFieldProps) => (
  <TextField InputProps={{ disableUnderline: true } as Partial<OutlinedInputProps>} {...props} />
))(({ theme }) => ({
  '& .MuiFilledInput-root': {
    border: '1px solid #e2e2e1',
    overflow: 'hidden',
    borderRadius: 3,
    backgroundColor: theme.palette.mode === 'light' ? '#fcfcfb' : '#2b2b2b',
    transition: theme.transitions.create(['border-color', 'background-color', 'box-shadow']),
    '&:hover': {},
    '&.Mui-focused': {
      boxShadow: `${alpha(theme.palette.primary.main, 0.25)} 0 0 0 1px`,
      borderColor: theme.palette.primary.main,
    },
  },
}))
