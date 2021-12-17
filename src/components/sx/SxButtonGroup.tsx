import ButtonGroup from '@mui/material/ToggleButtonGroup'
import { styled } from '@mui/material'
import { blue } from '@mui/material/colors'

/**
 * @name SxTIButtonGroup
 * @description styles TsInterface ButtonGroup
 * @param {ButtonGroup} mui ButtonGroup
 * @param {styled} mui styled
 * @param {theme} MuiBrandingTheme
 * @return styled ButtonGroup
 */
export const SxTIButtonGroup = styled(ButtonGroup)(({ theme }) => ({
  '& .MuiButtonGroup-root': {
    background: theme.palette.mode === 'dark' ? blue[900] : theme.palette.grey[100],
  },
}))

/**
 * @name SxButtonGroup
 * @description styles default ButtonGroup
 * @param {ButtonGroup} mui ButtonGroup
 * @param {styled} mui styled
 * @param {theme} MuiBrandingTheme
 * @return styled ButtonGroup
 */
export const SxButtonGroup = styled(ButtonGroup)(({ theme }) => ({
  '& .MuiButtonGroup-root': {
    background: theme.palette.mode === 'dark' ? blue[900] : theme.palette.grey[100],
  },
}))
