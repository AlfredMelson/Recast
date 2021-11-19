import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import { Link } from 'react-router-dom'
import SvgJsonLogo from '../components/icons/SvgJsonLogo'
import { HeaderNavBar, MobileHeaderNavDropdown, ThemeModeToggle } from '../components/header'
import { HeaderStyle } from './HeaderStyle'

export function AppHeader() {
  return (
    <HeaderStyle>
      <Container maxWidth='xl' sx={{ display: 'flex', alignItems: 'center', minHeight: 64 }}>
        <Box aria-label='Go to homepage' sx={{ lineHeight: 0, mr: 2 }}>
          <Link to='/'>
            <SvgJsonLogo width={120} />
          </Link>
        </Box>
        <Box sx={{ display: { xs: 'none', md: 'initial' } }}>
          <HeaderNavBar />
        </Box>
        <Box sx={{ ml: 'auto' }} />
        <Box sx={{ display: { md: 'none' }, mr: 1 }}>
          <MobileHeaderNavDropdown />
        </Box>
        <Box sx={{ display: { xs: 'none', md: 'initial' } }}>
          <ThemeModeToggle />
        </Box>
      </Container>
    </HeaderStyle>
  )
}
