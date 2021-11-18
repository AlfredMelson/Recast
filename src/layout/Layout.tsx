import { Outlet } from 'react-router-dom'
import { EditorDrawer } from '../pages/drawer/EditorDrawer'
import MuiThemeProviderRoot from '../style/MuiThemeProviderRoot'
import { AppHeader } from './AppHeader'

export function Layout() {
  return (
    <MuiThemeProviderRoot>
      <AppHeader />
      <main>
        <Outlet />
      </main>
      <EditorDrawer />
    </MuiThemeProviderRoot>
  )
}
