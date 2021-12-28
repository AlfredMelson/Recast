import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import Stack from '@mui/material/Stack'
import TwitterIcon from '@mui/icons-material/Twitter'
import GitHubIcon from '@mui/icons-material/GitHub'
import { SvgJsonLogo } from '../components/icons'

export function AppFooter() {
  return (
    <Container component='footer'>
      <Box
        sx={{
          py: 8,
          display: 'grid',
          gridAutoColumns: '1fr',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: 4,
          gridTemplateColumns: { xs: '1fr', sm: '1fr', md: '1fr 1.75fr', lg: '1fr 1fr' },
          gridTemplateRows: 'auto',
          '& a:not(.MuiIconButton-root)': {
            mt: 1,
            color: 'text.secondary',
            typography: 'body2',
            '&:hover': {
              color: 'primary.main',
              textDecoration: 'underline',
            },
          },
        }}>
        <div>
          <SvgJsonLogo width={160} />
          <Typography gutterBottom variant='body2' fontWeight='bold' sx={{ pt: 20 }}>
            edit and visualize JSON
          </Typography>

          <Box sx={{ py: { xs: 20, sm: 0 } }}>
            <Stack spacing={20} direction='row'>
              <IconButton
                target='_blank'
                rel='noopener noreferrer'
                href='https://github.com/AlfredMelson/recast'
                aria-label='github'
                title='GitHub'
                size='small'>
                <GitHubIcon />
              </IconButton>
              <IconButton
                target='_blank'
                rel='noopener noreferrer'
                href='https://twitter.com/vmelson'
                aria-label='twitter'
                title='Twitter'
                size='small'>
                <TwitterIcon />
              </IconButton>
            </Stack>
          </Box>
        </div>
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr 1fr', md: '1fr 1fr 1fr 1fr' },
            gridAutoColumns: '1fr',
            gap: 2,
          }}>
          <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <Typography fontWeight='bold' variant='body2'>
              About
            </Typography>
          </Box>
          <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <Typography fontWeight='bold' variant='body2'>
              Purpose
            </Typography>
          </Box>
          <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <Typography fontWeight='bold' variant='body2'>
              Explore
            </Typography>
          </Box>
          <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <Typography fontWeight='bold' variant='body2'>
              JSON Project
            </Typography>
          </Box>
        </Box>
      </Box>
    </Container>
  )
}
