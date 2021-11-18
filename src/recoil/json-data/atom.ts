import { atom, DefaultValue, selector, AtomEffect } from 'recoil'

export const localPersist: AtomEffect<any> = ({ onSet, setSelf, node }) => {
  const storedJsonData = localStorage.getItem(node.key)
  if (storedJsonData === 'localJsonText') {
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

export const localEditorTextAtom = atom<string>({
  key: 'localJsonText',
  default: '',
  effects_UNSTABLE: [localPersist],
})
// const [localEditorText, setLocalEditorText] = useRecoilState(localEditorTextAtom)
// const setLocalEditorText = useSetRecoilState(localEditorTextAtom)
// const localEditorText  = useRecoilValue(localEditorTextAtom)

export const editorTextSelector = selector<string>({
  key: 'editedEditorText',
  get: ({ get }) => {
    const editorText = get(localEditorTextAtom)
    return editorText
  },
  set: ({ set }, newEditedEditorText) => {
    const newEditorText = newEditedEditorText
    set(localEditorTextAtom, newEditorText)
  },
})
// const [editedEditorText, setEditedEditorText] = useRecoilState(editorTextSelector)
// const setEditedEditorText = useSetRecoilState(editorTextSelector)
// const editedEditorText  = useRecoilValue(editorTextSelector)

export const parseJsonSelector = selector({
  key: 'parseJson',
  get: async ({ get }) => {
    const editorText = get(localEditorTextAtom)
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
    const editorText = get(localEditorTextAtom)
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
