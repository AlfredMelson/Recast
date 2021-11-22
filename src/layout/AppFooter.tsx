import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Divider from '@mui/material/Divider'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import Stack from '@mui/material/Stack'
import TwitterIcon from '@mui/icons-material/Twitter'
import GitHubIcon from '@mui/icons-material/GitHub'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import SvgJsonLogo from '../components/icons/SvgJsonLogo'

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
          <Typography variant='body2' fontWeight='bold' sx={{ pt: 2 }}>
            This is...
          </Typography>
          <Typography variant='body2' color='text.secondary' sx={{ mb: 2 }}>
            exciting!
          </Typography>
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
              Products
            </Typography>
            <Typography>Product 1</Typography>
            <Typography>Product 2</Typography>
            <Typography>Product 3</Typography>
            <Typography>Product 4</Typography>
          </Box>
          <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <Typography fontWeight='bold' variant='body2'>
              Resources
            </Typography>
            <Typography>Resources 1</Typography>
            <Typography>Resources 2</Typography>
            <Typography>Resources 3</Typography>
          </Box>
          <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <Typography fontWeight='bold' variant='body2'>
              Explore
            </Typography>
            <Typography>Explore 1</Typography>
            <Typography>Explore 2</Typography>
            <Typography>Explore 3</Typography>
          </Box>
          <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <Typography fontWeight='bold' variant='body2'>
              JSON Project
            </Typography>
            <Typography>About</Typography>
            <Typography>Purpose</Typography>
            <Typography>Support</Typography>
          </Box>
        </Box>
      </Box>
      <Divider />
      <Box
        sx={{
          py: 4,
          display: { xs: 'block', sm: 'flex' },
          alignItems: { sm: 'center' },
          justifyContent: { sm: 'space-between' },
        }}>
        <Typography color='text.secondary' variant='body2'>
          Copyright © {new Date().getFullYear()} AVMJr.
        </Typography>
        <Box sx={{ py: { xs: 2, sm: 0 } }}>
          <Stack spacing={2} direction='row'>
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
            <IconButton
              target='_blank'
              rel='noopener noreferrer'
              href=''
              aria-label='linkedin'
              title='LinkedIn'
              size='small'>
              <LinkedInIcon />
            </IconButton>
          </Stack>
        </Box>
      </Box>
    </Container>
  )
}
