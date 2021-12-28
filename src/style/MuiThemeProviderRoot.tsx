import * as React from 'react'
import CssBaseline from '@mui/material/CssBaseline'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import { useRecoilValue } from 'recoil'
import { deepmerge } from '@mui/utils'
import { appColorModeAtom } from '../recoil'
import { muiDesignTokens, muiThemedComponents } from './MuiBrandingTheme'

interface MuiThemeProviderRootType {
  children?: React.ReactNode
}

export default function MuiThemeProviderRoot({ children }: MuiThemeProviderRootType) {
  // color mode value managed globally via recoil
  const appColorMode = useRecoilValue(appColorModeAtom)
  // color mode value passed as string
  const mode = appColorMode === 'light' ? 'light' : 'dark'
  // user defiend color palette (theme) object constructed based on color mode
  const designTokens = muiDesignTokens(mode)
  // missing parts added to the incomplete theme object
  const baseTheme = createTheme(designTokens)
  // finally, deep merge the arguments with the returned theme
  const theme = createTheme(deepmerge(baseTheme, muiThemedComponents(baseTheme)))

  // ThemeProvider theme={theme} provides theme prop down the React tree via context
  // CssBaseline is a component similar to normalize.css

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  )
}
