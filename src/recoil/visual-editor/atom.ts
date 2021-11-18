import { atom } from 'recoil'

export const controlsHiddenAtom = atom<boolean>({
  key: 'controlsHidden',
  default: false,
})

// const [controlsHidden, setControlsHidden] = useRecoilState(controlsHiddenAtom)
// const setControlsHidden = useSetRecoilState(controlsHiddenAtom)
// const controlsHidden  = useRecoilValue(controlsHiddenAtom)

export const minifyDialogAtom = atom<boolean>({
  key: 'minifyDialog',
  default: false,
})

// const [minifyDialog, setMinifyDialog] = useRecoilState(minifyDialogAtom)
// const setMinifyDialog = useSetRecoilState(minifyDialogAtom)
// const minifyDialog  = useRecoilValue(minifyDialogAtom)

export const minifiedTextAtom = atom<string>({
  key: 'minifiedText',
  default: '',
})

// const [minifiedText, setMinifiedText] = useRecoilState(minifiedTextAtom)
// const setMinifiedText = useSetRecoilState(minifiedTextAtom)
// const minifiedText  = useRecoilValue(minifiedTextAtom)
