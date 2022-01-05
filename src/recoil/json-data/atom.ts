import { atom, DefaultValue, selector, AtomEffect } from 'recoil'

export const localPersist: AtomEffect<any> = ({ onSet, setSelf, node }) => {
  const storedJsonData = localStorage.getItem(node.key)
  if (storedJsonData === 'userGeneratedJson') {
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

// const idsState = atom<number[]>({
//   key: 'ids',
//   default: [],
//   effects_UNSTABLE: [localPersist],
// })

/**
 * @name userGeneratedJsonAtom
 * @description state representing user provided text
 * @param {String}
 * @type {Object}
 * @return {Object} a writeable RecoilState object
 * @bug Objects stored in atoms will freeze in development mode when bugs are detected
 *
 * @RecoilHooks to manage state changes and notify components subscribing to re-render
 * const [userGeneratedJson, setUserGeneratedJson] = useRecoilState(userGeneratedJsonAtom)
 * const setUserGeneratedJson = useSetRecoilState(userGeneratedJsonAtom)
 * const userGeneratedJson  = useRecoilValue(userGeneratedJsonAtom)
 */

export const userGeneratedJsonAtom = atom<string>({
  key: 'userGeneratedJson',
  default: '',
  effects_UNSTABLE: [localPersist],
})

export const editorTextSelector = selector<string>({
  key: 'editedEditorText',
  get: ({ get }) => {
    const editorText = get(userGeneratedJsonAtom)
    return editorText
  },
  set: ({ set }, newEditedEditorText) => {
    const newEditorText = newEditedEditorText
    set(userGeneratedJsonAtom, newEditorText)
  },
})
// const [editedEditorText, setEditedEditorText] = useRecoilState(editorTextSelector)
// const setEditedEditorText = useSetRecoilState(editorTextSelector)
// const editedEditorText  = useRecoilValue(editorTextSelector)

export const parseJsonSelector = selector({
  key: 'parseJson',
  get: async ({ get }) => {
    const editorText = get(userGeneratedJsonAtom)
    try {
      const parsedJson = await JSON.parse(editorText)
      return parsedJson
      // eslint-disable-next-line no-empty
    } catch {}
  },
})

// const [parseJson, setParseJson] = useRecoilState(parseJsonSelector)
// const parseJson  = useRecoilValue(parseJsonSelector)

export const stringifyJsonSelector = selector({
  key: 'stringifyJson',
  get: ({ get }) => {
    const editorText = get(userGeneratedJsonAtom)
    try {
      const stringifiedJson = JSON.stringify(editorText)
      return stringifiedJson
      // eslint-disable-next-line no-empty
    } catch {}
  },
})

// const [stringifyJson, setStringifyJson] = useRecoilState(stringifyJsonSelector)
// const stringifyJson  = useRecoilValue(stringifyJsonSelector)

export const monacoThemeAtom = atom<string>({
  key: 'monacoTheme',
  default: '',
})

// const [monacoTheme, setMonacoTheme] = useRecoilState(monacoThemeAtom)
// const setMonacoTheme  = useSetRecoilState(monacoThemeAtom)
// const monacoTheme  = useRecoilValue(monacoThemeAtom)
