import * as React from 'react'
import Drawer from '@mui/material/Drawer'
import { useRecoilValue, useSetRecoilState } from 'recoil'
import { Container } from '@mui/material'
import { appColorModeAtom, dataDrawerOpenAtom, monacoThemeAtom } from '../../recoil'
import { Editor, EditorTheme } from '../monaco-editor'
import toggleDrawer from '../action/KeyboardToggleDrawer'
import { MinifyDialog } from './MinifyDialog'

export function EditorDrawer() {
  const appColorMode = useRecoilValue(appColorModeAtom)
  // set editor theme value
  const setMonacoTheme = useSetRecoilState(monacoThemeAtom)

  React.useEffect(() => {
    const theme = appColorMode === 'dark' ? 'cobalt' : 'katzenmilch'
    EditorTheme(theme).then(() => setMonacoTheme(theme))
  }, [appColorMode, setMonacoTheme])
  // set visability of user json drawer
  const dataDrawerOpen = useRecoilValue(dataDrawerOpenAtom)

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
