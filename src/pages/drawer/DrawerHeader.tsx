import { useEffect } from 'react'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import { useRecoilValue, useSetRecoilState } from 'recoil'
import { Link as MuiLink } from '@mui/material'
import { HeaderStyle } from '../../layout'
import { DrawerHeaderNavBar, ThemeModeToggle } from '../../components/header'
import SvgJsonLogo from '../../components/icons/SvgJsonLogo'
import { appColorModeAtom, monacoThemeAtom, dataDrawerOpenAtom } from '../../recoil'
import { EditorTheme } from '../../components/monaco-editor'
import { DrawerIcons } from './DrawerIcons'

export function DrawerHeader() {
  const appColorMode = useRecoilValue(appColorModeAtom)
  const setMonacoTheme = useSetRecoilState(monacoThemeAtom)
  const setDataDrawerOpen = useSetRecoilState(dataDrawerOpenAtom)

  useEffect(() => {
    const theme = appColorMode === 'dark' ? 'cobalt' : 'katzenmilch'
    EditorTheme(theme).then(() => setMonacoTheme(theme))
  }, [appColorMode, setMonacoTheme])

  return (
    <HeaderStyle>
      <Container maxWidth='xl' sx={{ display: 'flex', alignItems: 'center', minHeight: 64 }}>
        <Box aria-label='Go to homepage' sx={{ lineHeight: 0, mr: 2, cursor: 'pointer' }}>
          <MuiLink onClick={() => setDataDrawerOpen(false)}>
            <SvgJsonLogo width={120} />
          </MuiLink>
        </Box>
        <Box sx={{ display: { xs: 'none', md: 'initial' } }}>
          <DrawerHeaderNavBar />
        </Box>
        <Box
          sx={{
            ml: { xs: 'auto' },
            mx: { md: 'auto' },
          }}>
          <DrawerIcons />
        </Box>
        <Box sx={{ ml: 'auto' }} />
        <ThemeModeToggle />
      </Container>
    </HeaderStyle>
  )
}
