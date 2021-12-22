import Box from '@mui/material/Box'
import { useRecoilState, useRecoilValue } from 'recoil'
import { ButtonSxDataToggle } from '../../components/mui'
import { processedDataIdsAtom, treeViewExpansionAtom } from '../../recoil/tree-view/atom'

export function CollapseDataToggle() {
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
      <ButtonSxDataToggle disabled={treeViewExpansion.length === 0} onClick={handleCollapse}>
        {treeViewExpansion.length !== 0 && 'Collapse all'}
      </ButtonSxDataToggle>
      <ButtonSxDataToggle onClick={handleExpand}>{'Expand all'}</ButtonSxDataToggle>
    </Box>
  )
}
