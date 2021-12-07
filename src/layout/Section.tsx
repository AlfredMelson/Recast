import Container from '@mui/material/Container'
import Box, { BoxProps } from '@mui/material/Box'

export default function Section({
  bg = 'white',
  ...props
}: { bg?: 'white' | 'comfort' | 'dim' | 'gradient' } & BoxProps) {
  const map = {
    white: {
      light: 'common.white',
      dark: 'grey.800',
    },
    comfort: {
      light: 'grey.50',
      dark: 'grey.900',
    },
    dim: {
      light: 'grey.700',
      dark: 'grey.700',
    },
  }
  return (
    <Box
      {...props}
      sx={{
        ...(bg === 'gradient'
          ? {
              background: theme =>
                theme.palette.mode === 'dark'
                  ? `linear-gradient(180deg, ${theme.palette.grey[900]} 0%, #001E3C 100%)`
                  : `linear-gradient(180deg, ${theme.palette.grey[50]} 0%, #FFFFFF 100%)`,
            }
          : {
              bgcolor: theme => map[bg][theme.palette.mode],
            }),
        py: { xs: 4, sm: 6, md: 8 },
        overflow: 'hidden',
        ...props.sx,
      }}>
      <Container>{props.children}</Container>
    </Box>
  )
}
