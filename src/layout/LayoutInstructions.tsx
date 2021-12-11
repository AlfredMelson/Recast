import { Box } from '@mui/material'
import * as React from 'react'
import { Outlet } from 'react-router-dom'
import { EditorDrawer } from '../components/drawer/EditorDrawer'
import { AppHeader } from './AppHeader'

export function LayoutInstructions() {
  return (
    <React.Fragment>
      <Box sx={{ height: '100vh', overflowY: 'hidden' }}>
        <AppHeader />
        <Outlet />
        <EditorDrawer />
      </Box>
    </React.Fragment>
  )
}
