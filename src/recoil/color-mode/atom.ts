import { atom } from 'recoil'
import { getCookie } from '../../style/getCookie'

export const appColorModeAtom = atom<string>({
  key: 'appColorMode',
  default: '',
})

// const [appColorMode, setAppColorMode] = useRecoilState(appColorModeAtom)
// const setAppColorMode  = useSetRecoilState(appColorModeAtom)
// const appColorMode  = useRecoilValue(appColorModeAtom)

export const appPaletteModeAtom = atom({
  key: 'appPaletteMode',
  default: getCookie('paletteMode') || 'system',
})

// const [appPaletteMode, setAppPaletteMode] = useRecoilState(appPaletteModeAtom)
// const setAppPaletteMode  = useSetRecoilState(appPaletteModeAtom)
// const appPaletteMode  = useRecoilValue(appPaletteModeAtom)

export const userPreferenceAtom = atom<boolean>({
  key: 'userPreference',
  default: false,
})

// const [userPreference, setUserPreference] = useRecoilState(userPreferenceAtom)
// const setUserPreference  = useSetRecoilState(userPreferenceAtom)
// const userPreference  = useRecoilValue(userPreferenceAtom)
