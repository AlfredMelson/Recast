import * as React from 'react'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import { useRecoilValue } from 'recoil'
import { deepmerge } from '@mui/utils'
import { appColorModeAtom } from '../recoil'
import { muiDesignTokens, muiThemedComponents } from './MuiBrandingTheme'

type MuiThemeProviderRootAlias = {
  children?: React.ReactNode
}

export default function MuiThemeProviderRoot({ children }: MuiThemeProviderRootAlias) {
  // color mode value managed globally via recoil
  const appColorMode = useRecoilValue(appColorModeAtom)
  // color mode value passed as string
  const mode = appColorMode === 'light' ? 'light' : 'dark'
  // user defiend color palette (theme) object constructed based on color mode
  const designTokens = muiDesignTokens(mode)
  // create a predefined theme object; components set as {}
  const appTheme = createTheme(designTokens)
  // merge predefined mui components into appTheme
  const theme = createTheme(deepmerge(appTheme, muiThemedComponents(appTheme)))

  // note: ThemeProvider provides theme prop down the React tree via context
  // note: CssBaseline is a css reset component similar to normalize.css

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}
