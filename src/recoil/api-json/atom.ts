import { atom } from 'recoil'

export const userTypedUrlAtom = atom<string | undefined>({
  key: 'userTypedUrl',
  default: undefined,
})

// const [userTypedUrl, setUserTypedUrl] = useRecoilState(userTypedUrlAtom)
// const setUserTypedUrl  = useSetRecoilState(userTypedUrlAtom)
// const userTypedUrl  = useRecoilValue(userTypedUrlAtom)

export const userSubmittedUrlAtom = atom<string | undefined>({
  key: 'userSubmittedUrl',
  default: undefined,
})

// const [userSubmittedUrl, setUserSubmittedUrl] = useRecoilState(userSubmittedUrlAtom)
// const setUserSubmittedUrl  = useSetRecoilState(userSubmittedUrlAtom)
// const userSubmittedUrl  = useRecoilValue(userSubmittedUrlAtom)

export const apiDataAtom = atom({
  key: 'apiData',
  default: {},
})

// const [apiData, setApiData] = useRecoilState(apiDataAtom)
// const setApiData  = useSetRecoilState(apiDataAtom)
// const apiData  = useRecoilValue(apiDataAtom)

export const apiFullAtom = atom({
  key: 'apiFull',
  default: {},
})

// const [apiFull, setApiFull] = useRecoilState(apiFullAtom)
// const setApiFull  = useSetRecoilState(apiFullAtom)
// const apiFull  = useRecoilValue(apiFullAtom)

export const apiSelectorAtom = atom({
  key: 'apiSelector',
  default: 'data',
})

// const [apiSelector, setApiSelector] = useRecoilState(apiSelectorAtom)
// const setApiSelector  = useSetRecoilState(apiSelectorAtom)
// const apiSelector  = useRecoilValue(apiSelectorAtom)
