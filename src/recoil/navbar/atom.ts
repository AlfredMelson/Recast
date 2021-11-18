import { atom } from 'recoil'

export const padVisualDataAtom = atom<boolean>({
  key: 'padVisualData',
  default: false,
})

// const [padVisualData, setPadVisualData] = useRecoilState(padVisualDataAtom)
// const setPadVisualData = useSetRecoilState(padVisualDataAtom)
// const padVisualData  = useRecoilValue(padVisualDataAtom)

export const expandvisualDataAtom = atom<boolean>({
  key: 'expandvisualData',
  default: false,
})

// const [expandvisualData, setExpandvisualData] = useRecoilState(expandvisualDataAtom)
// const setExpandvisualData = useSetRecoilState(expandvisualDataAtom)
// const expandvisualData  = useRecoilValue(expandvisualDataAtom)

export const minifyJsonAtom = atom<boolean>({
  key: 'minifyJson',
  default: false,
})

// const [minifyJson, setMinifyJson] = useRecoilState(minifyJsonAtom)
// const setMinifyJson = useSetRecoilState(minifyJsonAtom)
// const minifyJson  = useRecoilValue(minifyJsonAtom)

export const switchViewsAtom = atom<boolean>({
  key: 'switchViews',
  default: false,
})

// const [switchViews, setSwitchViews] = useRecoilState(switchViewsAtom)
// const setSwitchViews = useSetRecoilState(switchViewsAtom)
// const switchViews  = useRecoilValue(switchViewsAtom)
