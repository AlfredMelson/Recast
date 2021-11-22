import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
// import { Link } from 'react-router-dom'
import { useRecoilState } from 'recoil'
import Stack from '@mui/material/Stack'
import SvgJsonLogo from '../components/icons/SvgJsonLogo'
import {
  DrawerHeaderNavBar,
  HeaderNavBar,
  MobileHeaderNavDropdown,
  ThemeModeToggle,
} from '../components/header'
import { dataDrawerOpenAtom } from '../recoil'
import { DrawerIcons } from '../components/drawer/DrawerIcons'
import { HeaderStyle } from './HeaderStyle'

export function AppHeader() {
  const [dataDrawerOpen, setDataDrawerOpen] = useRecoilState(dataDrawerOpenAtom)
  return (
    <HeaderStyle>
      <Box sx={{ display: { xs: 'none', md: 'initial' } }}>
        <Container disableGutters>
          <Stack direction='row'>
            <SvgJsonLogo
              aria-label='Go to homepage'
              width={120}
              sx={{ mr: 2 }}
              onClick={() => setDataDrawerOpen(false)}
            />
            <Box
              sx={{
                minHeight: 64,
                width: '100%',
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
              }}>
              {dataDrawerOpen ? (
                <Stack direction='row' sx={{ gridColumn: 1, placeSelf: 'center start' }}>
                  <DrawerHeaderNavBar />
                </Stack>
              ) : (
                <Stack direction='row' sx={{ gridColumn: 1, placeSelf: 'center start' }}>
                  <HeaderNavBar />
                </Stack>
              )}
              {dataDrawerOpen && (
                <Box sx={{ gridColumn: 2, placeSelf: 'center', mx: { md: 'auto' } }}>
                  <DrawerIcons />
                </Box>
              )}
              <Box
                sx={{
                  display: { xs: 'none', md: 'initial' },
                  gridColumn: 3,
                  alignSelf: 'center',
                  justifySelf: 'end',
                }}>
                <ThemeModeToggle />
              </Box>
            </Box>
          </Stack>
        </Container>
      </Box>

      <Box sx={{ display: { md: 'none' } }}>
        <Container
          disableGutters
          sx={{
            minHeight: 52,
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
          }}>
          <Box sx={{ gridColumn: 2, placeSelf: 'center' }}>
            <SvgJsonLogo width={100} />
          </Box>
          <Box sx={{ gridColumn: 3, alignSelf: 'center', justifySelf: 'end', pr: 3 }}>
            <MobileHeaderNavDropdown />
          </Box>
        </Container>
      </Box>
    </HeaderStyle>
  )
}
