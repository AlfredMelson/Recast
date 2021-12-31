import { Box } from '@mui/material'
import { Outlet, useLocation } from 'react-router-dom'
import { EditorDrawer } from '../components/drawer/EditorDrawer'
import { BrandColors } from '../style/BrandColors'
import { AppHeader } from './AppHeader'

export function Layout() {
  // identify HomePage and enable scroll
  const location = useLocation()

  return (
    <Box
      sx={{
        height: '100vh',
        overflowY: location.pathname === '/' ? 'visible' : 'hidden',
        overflowX: 'hidden',
        background: theme =>
          theme.palette.mode === 'dark' ? BrandColors.Dark.Grey[900] : BrandColors.Light.Grey[100],
      }}>
      <AppHeader />
      <Outlet />
      <EditorDrawer />
    </Box>
  )
}
