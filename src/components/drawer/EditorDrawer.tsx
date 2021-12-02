import * as React from 'react'
import Drawer from '@mui/material/Drawer'
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil'
import { Container } from '@mui/material'
import { appColorModeAtom, dataDrawerOpenAtom, monacoThemeAtom } from '../../recoil'
import { Editor, EditorTheme } from '../monaco-editor'
import { MinifyDialog } from './MinifyDialog'

export function EditorDrawer() {
  const appColorMode = useRecoilValue(appColorModeAtom)
  //set editor theme value
  const setMonacoTheme = useSetRecoilState(monacoThemeAtom)
  React.useEffect(() => {
    const theme = appColorMode === 'dark' ? 'cobalt' : 'katzenmilch'
    EditorTheme(theme).then(() => setMonacoTheme(theme))
  }, [appColorMode, setMonacoTheme])
  //set visability of user json drawer
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
    <Drawer
      transitionDuration={500}
      anchor='top'
      open={dataDrawerOpen}
      onClose={toggleDrawer(false)}>
      <Container maxWidth='xl' sx={{ minHeight: 64, backgroundColor: 'transparent' }} />
      <Editor />
      <MinifyDialog />
    </Drawer>
  )
}
