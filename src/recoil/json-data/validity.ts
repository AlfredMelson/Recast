import { atom, selector } from 'recoil'
import { localEditorTextAtom } from './atom'

export enum ValidityType {
  Valid = 'valid',
  Invalid = 'invalid',
  None = 'none',
}

export const textAreaDataSelector = selector<ValidityType>({
  key: 'textareaData',
  get: ({ get }) => {
    const localEditorText = get(localEditorTextAtom)
    if (localEditorText === null) {
      try {
        JSON.parse(localEditorText)
        return ValidityType.Valid
      } catch (e) {
        return ValidityType.Invalid
      }
    } else {
      return ValidityType.None
    }
  },
})

// const [textareaData, setTextAreaValidity] = useRecoilState(textAreaDataSelector)
// const setTextareaData = useSetRecoilState(textAreaDataSelector)
// const textareaData  = useRecoilValue(textAreaDataSelector)

export const jsonValiditySelector = selector<boolean>({
  key: 'jsonValidity',
  get: ({ get }) => {
    const textareaData = get(textAreaDataSelector)
    return textareaData === ValidityType.Valid ? true : false
  },
})

// const [jsonValidity, setJsonValidity] = useRecoilState(jsonValiditySelector)
// const setJsonValidity = useSetRecoilState(jsonValiditySelector)
// const jsonValidity  = useRecoilValue(jsonValiditySelector)

export const validJsonAtom = atom<boolean>({
  key: 'validJson',
  default: true,
})

// const [validJson, setValidJson] = useRecoilState(validJsonAtom)
// const setValidJson  = useSetRecoilState(validJsonAtom)
// const validJson  = useRecoilValue(validJsonAtom)
