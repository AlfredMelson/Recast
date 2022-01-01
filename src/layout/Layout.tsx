import { Box } from '@mui/material'
import { Outlet, useLocation } from 'react-router-dom'
import { EditorDrawer } from '../components/drawer/EditorDrawer'
import { BrandSwatch } from '../style/BrandSwatch'
import { AppHeader } from './AppHeader'

export function Layout() {
  // identify HomePage and enable scroll
  const location = useLocation()
  console.log('location', location)

  return (
    <Box
      sx={{
        height: '100vh',
        // overflowY: location.pathname === '/' ? 'visible' : 'hidden',
        // overflowX: 'hidden',
        overflow: 'hidden',
        background: theme =>
          theme.palette.mode === 'dark' ? BrandSwatch.Dark.Grey[900] : BrandSwatch.Light.Grey[100],
      }}>
      <AppHeader />
      <Outlet />
      <EditorDrawer />
    </Box>
  )
}
