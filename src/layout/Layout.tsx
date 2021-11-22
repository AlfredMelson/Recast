import * as React from 'react'
import { Outlet } from 'react-router-dom'
import { EditorDrawer } from '../components/drawer/EditorDrawer'
import { AppHeader } from './AppHeader'

export function Layout() {
  return (
    <React.Fragment>
      <AppHeader />
      <Outlet />
      <EditorDrawer />
    </React.Fragment>
  )
}
