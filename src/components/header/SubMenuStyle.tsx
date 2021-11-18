import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import * as React from 'react'
import { Link as MuiLink } from '@mui/material'

type SubMenuTypes = {
  icon: React.ReactElement
  name: React.ReactNode
  description: React.ReactNode
  href: string
} & Omit<JSX.IntrinsicElements['a'], 'ref'>

export const SubMenu = React.forwardRef<HTMLAnchorElement, SubMenuTypes>(function VisualSubMenu(
  { icon, name, description, href, ...props },
  ref
) {
  return (
    <Box
      component={MuiLink}
      href={href}
      ref={ref}
      sx={{
        display: 'flex',
        alignItems: 'center',
        py: 2,
        '&:hover, &:focus': {
          backgroundColor: theme => (theme.palette.mode === 'dark' ? 'primaryDark.700' : 'grey.50'),
          outline: 'none',
          '@media (hover: none)': {
            backgroundColor: 'initial',
            outline: 'initial',
          },
        },
      }}
      {...props}>
      <Box sx={{ px: 2 }}>{icon}</Box>

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
