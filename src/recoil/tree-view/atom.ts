import { atom } from 'recoil'

export const processedUserDataAtom = atom({
  key: 'processedUserData',
  default: {},
})

// const [processedUserData, setProcessedUserData] = useRecoilState(processedUserDataAtom)
// const setProcessedUserData  = useSetRecoilState(processedUserDataAtom)
// const processedUserData  = useRecoilValue(processedUserDataAtom)

export const processedDataIdsAtom = atom<string[]>({
  key: 'processedDataIds',
  default: [],
})

// const [processedDataIds, setProcessedDataIds] = useRecoilState(processedDataIdsAtom)
// const setProcessedDataIds  = useSetRecoilState(processedDataIdsAtom)
// const processedDataIds  = useRecoilValue(processedDataIdsAtom)

export const treeViewExpansionAtom = atom<string[]>({
  key: 'treeViewExpansion',
  default: [],
})

// const [treeViewExpansion, setTreeViewExpansion] = useRecoilState(treeViewExpansionAtom)
// const setTreeViewExpansion  = useSetRecoilState(treeViewExpansionAtom)
// const treeViewExpansion  = useRecoilValue(treeViewExpansionAtom)
