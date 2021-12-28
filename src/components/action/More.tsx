import Box from '@mui/material/Box'
import ButtonBase, { ButtonBaseProps } from '@mui/material/ButtonBase'
import Typography from '@mui/material/Typography'
import AddCircleOutlineRounded from '@mui/icons-material/AddCircleOutlineRounded'
import KeyboardArrowRightRounded from '@mui/icons-material/KeyboardArrowRightRounded'

export default (function More(props: ButtonBaseProps) {
  return (
    <ButtonBase
      {...props}
      sx={{
        p: 20,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-start',
        cursor: 'pointer',
        borderRadius: 1,
        height: '100%',
        border: '2px dashed',
        transitionProperty: 'all',
        transitionDuration: '150ms',
        borderColor: theme => (theme.palette.mode === 'dark' ? 'grey.500' : 'grey.200'),
        '&:hover, & .Mui-focused': {
          borderColor: 'primary.main',
          bgcolor: theme => (theme.palette.mode === 'dark' ? 'grey.700' : 'primary.50'),
          '@media (hover: none)': {
            bgcolor: 'transparent',
          },
        },
        ...props.sx,
      }}>
      <Box sx={{ mr: 10, px: 30, lineHeight: 0 }}>
        <AddCircleOutlineRounded color='primary' />
      </Box>
      <Typography color='primary.main' variant='body2' fontWeight='bold'>
        Much more <KeyboardArrowRightRounded color='primary' sx={{ verticalAlign: 'middle' }} />
      </Typography>
    </ButtonBase>
  )
} as typeof ButtonBase)
