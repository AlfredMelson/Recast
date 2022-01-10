import { Box } from '@mui/material'
import { Outlet } from 'react-router-dom'
import { styled } from '@mui/material/styles'
import { EditorDrawer } from '../components/drawer/EditorDrawer'
import { AppHeader } from './AppHeader'
// import { useLocation } from 'react-router-dom'

const LayoutWrapper = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
  height: '100vh',
  overflow: 'hidden',
}))

export function Layout() {
  // useLocation to identify HomePage and enable scroll
  // const location = useLocation()
  // console.log('location from Layout.tsx', location)

  return (
    <LayoutWrapper>
      <AppHeader />
      <Outlet />
      <EditorDrawer />
    </LayoutWrapper>
  )
}
