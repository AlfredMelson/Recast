import { atom } from 'recoil'

export enum KeyCodeType {
  Enter = 13,
  Escape = 27,
}

export const keyCodeAtom = atom<KeyCodeType | null>({
  key: 'keyCode',
  default: null,
})

// const [keyCode, setKeyCode] = useRecoilState(keyCodeAtom)
// const setKeyCode = useSetRecoilState(keyCodeAtom)
// const keyCode  = useRecoilValue(keyCodeAtom)
