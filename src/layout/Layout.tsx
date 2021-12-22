import { Box } from '@mui/material'
import { Outlet, useLocation } from 'react-router-dom'
import { EditorDrawer } from '../components/drawer/EditorDrawer'
import { AppHeader } from './AppHeader'

export function Layout() {
  // identify HomePage and enable scroll
  const location = useLocation()

  return (
    <Box
      sx={{
        height: '100vh',
        overflowY: location.pathname === '/' ? 'visible' : 'hidden',
        bgcolor: theme => (theme.palette.mode === 'dark' ? '#1F2428' : '#FFFFFF'),
      }}>
      <AppHeader />
      <Outlet />
      <EditorDrawer />
    </Box>
  )
}
