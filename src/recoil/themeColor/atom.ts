import { atom, AtomEffect, DefaultValue } from 'recoil'
// import { getCookie } from '../../style/getCookie'

export const themePersist: AtomEffect<any> = ({ onSet, setSelf, node }) => {
  const storedJsonData = localStorage.getItem(node.key)
  if (storedJsonData === 'themeColor') {
    setSelf(storedJsonData)
  }

  onSet(newItems => {
    if (newItems instanceof DefaultValue) {
      localStorage.removeItem(node.key)
    } else {
      localStorage.setItem(node.key, newItems)
    }
  })
}

/**
 * @name themeColorAtom
 * @description state representing the color mode value
 * @param {String}
 * @type {Object}
 * @return {Object} a writeable RecoilState object
 * @bug Objects stored in atoms will freeze in development mode when bugs are detected
 *
 * @RecoilHooks to manage state changes and notify components subscribing to re-render
 * const [themeColor, setThemeColor] = useRecoilState(themeColorAtom)
 * const setThemeColor  = useSetRecoilState(themeColorAtom)
 * const themeColor  = useRecoilValue(themeColorAtom)
 */
export const themeColorAtom = atom<string>({
  key: 'themeColor',
  default: 'light',
  effects_UNSTABLE: [themePersist],
})

/**
 * @name appPaletteModeAtom
 * @description state representing the user preferred palette mode
 * @param {String}
 * @type {Object}
 * @return {Object} a writeable RecoilState object
 * @bug Objects stored in atoms will freeze in development mode when bugs are detected
 *
 * @RecoilHooks to manage state changes and notify components subscribing to re-render
 * const [appPaletteMode, setAppPaletteMode] = useRecoilState(appPaletteModeAtom)
 * const setAppPaletteMode  = useSetRecoilState(appPaletteModeAtom)
 * const appPaletteMode  = useRecoilValue(appPaletteModeAtom)
 */
// export const appPaletteModeAtom = atom({
//   key: 'appPaletteMode',
//   default: getCookie('paletteMode') || 'system',
// })

/**
 * @name userPreferenceAtom
 * @description state representing the user preference
 * @param {Record<string, unknown>}
 * @type {Object}
 * @return {Object} a writeable RecoilState object
 * @bug Objects stored in atoms will freeze in development mode when bugs are detected
 *
 * @RecoilHooks to manage state changes and notify components subscribing to re-render
 * const [userPreference, setUserPreference] = useRecoilState(userPreferenceAtom)
 * const setUserPreference  = useSetRecoilState(userPreferenceAtom)
 * const userPreference  = useRecoilValue(userPreferenceAtom)
 */
export const userPreferenceAtom = atom<boolean>({
  key: 'userPreference',
  default: false,
})
