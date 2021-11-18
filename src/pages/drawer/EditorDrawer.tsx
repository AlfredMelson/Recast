import * as React from 'react'
import Drawer from '@mui/material/Drawer'
import { useRecoilState } from 'recoil'
import { dataDrawerOpenAtom } from '../../recoil'
import { Editor } from '../../components/monaco-editor'
import { DrawerHeader } from './DrawerHeader'
import { MinifyDialog } from './MinifyDialog'

export function EditorDrawer() {
  const [dataDrawerOpen, setDataDrawerOpen] = useRecoilState(dataDrawerOpenAtom)
  const toggleDrawer = (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
    if (
      event &&
      event.type === 'keydown' &&
      ((event as React.KeyboardEvent).key === 'Tab' ||
        (event as React.KeyboardEvent).key === 'Shift')
    ) {
      return
    }
    setDataDrawerOpen(open)
  }

  return (
    <Drawer anchor='bottom' open={dataDrawerOpen} onClose={toggleDrawer(false)}>
      <DrawerHeader />
      <Editor />
      <MinifyDialog />
    </Drawer>
  )
}
