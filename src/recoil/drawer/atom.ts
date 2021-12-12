import { atom } from 'recoil'

/**
 * @name dataDrawerOpenAtom
 * @description state representing visability of drawer containing user json
 * @param {Boolean}
 * @type {Boolean}
 * @return {Object} a writeable RecoilState object
 * @bug Objects stored in atoms will freeze in development mode when bugs are detected
 *
 * Hooks to manage state changes and notify components subscribing to re-render:
 * const [dataDrawerOpen, setDataDrawerOpen] = useRecoilState(dataDrawerOpenAtom)
 * const setDataDrawerOpen  = useSetRecoilState(dataDrawerOpenAtom)
 * const dataDrawerOpen  = useRecoilValue(dataDrawerOpenAtom)
 * const resetDataDrawerOpen = useResetRecoilState(dataDrawerOpenAtom)
 */

export const dataDrawerOpenAtom = atom<boolean>({
  key: 'dataDrawerOpen',
  default: false,
})
