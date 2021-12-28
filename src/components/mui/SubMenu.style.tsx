import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import * as React from 'react'
import { Link as MuiLink } from '@mui/material'
import { darkGrey, lightGrey } from '../../style/MuiBrandingTheme'

type SubMenuAlias = {
  icon: React.ReactElement
  name: React.ReactNode
  description: React.ReactNode
  href: string
} & Omit<JSX.IntrinsicElements['a'], 'ref'>

export const SubMenu = React.forwardRef<HTMLAnchorElement, SubMenuAlias>(function VisualSubMenu(
  { icon, name, description, href, ...props },
  ref
) {
  return (
    <Box
      component={MuiLink}
      href={href}
      ref={ref}
      sx={{
        py: 20,
        display: 'flex',
        alignItems: 'center',
        bgcolor: theme => (theme.palette.mode === 'dark' ? darkGrey[700] : lightGrey[300]),
        '&:hover, & .Mui-focused': {
          bgcolor: theme => (theme.palette.mode === 'dark' ? darkGrey[600] : lightGrey[400]),
          outline: 'none',
          '@media (hover: none)': {
            backgroundColor: 'initial',
            outline: 'initial',
          },
        },
      }}
      {...props}>
      <Box sx={{ px: 20 }}>{icon}</Box>
      <Box>
        <Typography color='text.primary' variant='body2' fontWeight={600}>
          {name}
        </Typography>
        <Typography color='text.secondary' variant='body2'>
          {description}
        </Typography>
      </Box>
    </Box>
  )
})
