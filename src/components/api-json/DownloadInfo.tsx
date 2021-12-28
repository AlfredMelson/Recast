import * as React from 'react'
import Box, { BoxProps } from '@mui/material/Box'
import IconButton from '@mui/material/IconButton'
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight'
import { alpha } from '@mui/material'
import { darkBlue } from '../../style/MuiBrandingTheme'

export default function DownloadInfo({
  appeared,
  content,
  ...props
}: { appeared: boolean; content?: React.ReactElement } & BoxProps) {
  const [hidden, setHidden] = React.useState(true)
  return (
    <Box
      {...props}
      sx={{
        position: 'absolute',
        bottom: 0,
        transform: hidden || !appeared ? 'translateX(100%)' : 'translateX(0)',
        transition: '0.3s',
        top: 0,
        right: 0,
        px: 20,
        pt: 10,
        pb: 20,
        bgcolor: alpha(darkBlue[700], 0.5),
        minWidth: '200px',
        zIndex: 1,
        borderLeft: '1px solid',
        borderColor: 'divider',
        borderRadius: '0 0 4px 0',
        ...props.sx,
      }}>
      <Box
        sx={{
          position: 'sticky',
          top: 0,
        }}>
        <IconButton
          aria-label={hidden ? 'show' : 'hide'}
          onClick={() => setHidden(bool => !bool)}
          sx={{
            position: 'sticky',
            zIndex: 2,
            transition: '0.3s',
            left: 10,
            top: 30,
            transform: hidden || !appeared ? 'translateX(-74px)' : 'translateX(20%)',
            opacity: appeared ? 1 : 0,
            bgcolor: 'primaryDark.500',
            '&:hover, &.Mui-focused': {
              bgcolor: 'primaryDark.600',
            },
          }}>
          {hidden ? <KeyboardArrowLeftIcon /> : <KeyboardArrowRightIcon />}
        </IconButton>
        <Box sx={{ pt: 90 }}>{content}</Box>
      </Box>
    </Box>
  )
}
