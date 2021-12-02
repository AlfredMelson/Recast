import Box from '@mui/material/Box'
import { useRecoilState, useRecoilValue } from 'recoil'
import { SxButton } from '../../components/sx/'
import { processedDataIdsAtom, treeViewExpansionAtom } from '../../recoil/tree-view/atom'

export function Navigation() {
  const processedDataIds = useRecoilValue(processedDataIdsAtom)

  const [treeViewExpansion, setTreeViewExpansion] = useRecoilState(treeViewExpansionAtom)

  const handleCollapse = () => {
    setTreeViewExpansion([])
  }
  const handleExpand = () => {
    setTreeViewExpansion(processedDataIds)
  }

  return (
    <Box sx={{ mt: 1 }}>
      <SxButton disabled={treeViewExpansion.length === 0} onClick={handleCollapse}>
        {treeViewExpansion.length !== 0 && 'Collapse all'}
      </SxButton>
      <SxButton onClick={handleExpand}>{'Expand all'}</SxButton>
    </Box>
  )
}
