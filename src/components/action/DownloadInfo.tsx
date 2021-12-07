import * as React from 'react'
import { alpha } from '@mui/material/styles'
import Box, { BoxProps } from '@mui/material/Box'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight'

export default function DownloadInfo({
  appeared,
  content,
  ...props
}: { appeared: boolean; content?: React.ReactElement } & BoxProps) {
  const [hidden, setHidden] = React.useState(false)
  const defaultContent = (
    <React.Fragment>
      <Typography fontWeight='bold' color='#fff' variant='body2'>
        TypeScript interface
      </Typography>
      <Typography color='grey.400' variant='body2'>
        Download
      </Typography>
    </React.Fragment>
  )
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
        px: 2,
        pt: 1,
        pb: 2,
        bgcolor: ({ palette }) => alpha(palette.primaryDark[700], 0.5),
        backdropFilter: 'blur(8px)',
        zIndex: 1,
        borderLeft: '1px solid',
        borderColor: 'divider',
        borderRadius: '0 4px 4px 0',
        ...props.sx,
      }}>
      <IconButton
        aria-label={hidden ? 'show' : 'hide'}
        onClick={() => setHidden(bool => !bool)}
        sx={{
          position: 'absolute',
          zIndex: 2,
          transition: '0.3s',
          left: 10,
          top: '80%',
          transform: hidden || !appeared ? 'translateX(-64px)' : 'translateX(20%)',
          opacity: appeared ? 1 : 0,
          bgcolor: 'primaryDark.500',
          '&:hover, &.Mui-focused': {
            bgcolor: 'primaryDark.600',
          },
        }}>
        {hidden ? <KeyboardArrowLeftIcon /> : <KeyboardArrowRightIcon />}
      </IconButton>
      {content || defaultContent}
    </Box>
  )
}
