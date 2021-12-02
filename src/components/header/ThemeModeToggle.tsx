import Brightness4Icon from '@mui/icons-material/Brightness4'
import Brightness7Icon from '@mui/icons-material/Brightness7'
import { useRecoilState } from 'recoil'
// import useMediaQuery from '@mui/material/useMediaQuery'
import * as React from 'react'
import { appColorModeAtom } from '../../recoil'
import { SxIconButton } from '../sx/SxIconButton'

export function ThemeModeToggle() {
  const [appColorMode, setAppColorMode] = useRecoilState(appColorModeAtom)
  // const [userPreference, setUserPreference] = useRecoilState(userPreferenceAtom)
  // setUserPreference(useMediaQuery('(prefers-color-scheme: dark)'))

  React.useEffect(() => {
    // const preferredMode = userPreference ? 'dark' : 'light'
    const preferredMode = 'dark'
    setAppColorMode(preferredMode)
  }, [setAppColorMode])

  const handleChange = () => {
    setAppColorMode(appColorMode === 'dark' ? 'light' : 'dark')
  }

  return (
    <SxIconButton onClick={handleChange}>
      {appColorMode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
    </SxIconButton>
  )
}
