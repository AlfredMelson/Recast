import { atom } from 'recoil'

export const controlsHiddenAtom = atom<boolean>({
  key: 'controlsHidden',
  default: false,
})

// const [controlsHidden, setControlsHidden] = useRecoilState(controlsHiddenAtom)
// const setControlsHidden = useSetRecoilState(controlsHiddenAtom)
// const controlsHidden  = useRecoilValue(controlsHiddenAtom)

export const minifyDialogOpenAtom = atom<boolean>({
  key: 'minifyDialogOpen',
  default: false,
})

// const [minifyDialogOpen, setMinifyDialogOpen] = useRecoilState(minifyDialogOpenAtom)
// const setMinifyDialogOpen = useSetRecoilState(minifyDialogOpenAtom)
// const minifyDialogOpen  = useRecoilValue(minifyDialogOpenAtom)

export const minifiedTextAtom = atom<string>({
  key: 'minifiedText',
  default: '',
})

// const [minifiedText, setMinifiedText] = useRecoilState(minifiedTextAtom)
// const setMinifiedText = useSetRecoilState(minifiedTextAtom)
// const minifiedText  = useRecoilValue(minifiedTextAtom)
