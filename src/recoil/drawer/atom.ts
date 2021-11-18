import { atom } from 'recoil'

export const dataDrawerOpenAtom = atom<boolean>({
  key: 'dataDrawerOpen',
  default: false,
})

// const [dataDrawerOpen, setDataDrawerOpen] = useRecoilState(dataDrawerOpenAtom)
// const setDataDrawerOpen  = useSetRecoilState(dataDrawerOpenAtom)
// const dataDrawerOpen  = useRecoilValue(dataDrawerOpenAtom)
