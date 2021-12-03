import Brightness4Icon from '@mui/icons-material/Brightness4'
import Brightness7Icon from '@mui/icons-material/Brightness7'
import { useRecoilState } from 'recoil'
import * as React from 'react'
import Tooltip from '@mui/material/Tooltip'
import { appColorModeAtom } from '../../recoil'
import { SxIBColorMode } from '../sx/SxIconButton'
// import useMediaQuery from '@mui/material/useMediaQuery'

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
    <Tooltip title={appColorMode === 'dark' ? 'Light mode' : 'Dark mode'}>
      <SxIBColorMode onClick={handleChange}>
        {appColorMode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
      </SxIBColorMode>
    </Tooltip>
  )
}
