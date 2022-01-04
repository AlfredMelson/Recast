import Box from '@mui/material/Box'
import { useRecoilState, useRecoilValue } from 'recoil'
import { ButtonSxUserJsonDataToggle } from '../../components/mui'
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
    <Box sx={{ mt: 10 }}>
      <ButtonSxUserJsonDataToggle
        disabled={treeViewExpansion.length === 0}
        onClick={handleCollapse}>
        {treeViewExpansion.length !== 0 && 'Collapse all'}
      </ButtonSxUserJsonDataToggle>
      <ButtonSxUserJsonDataToggle onClick={handleExpand}>{'Expand all'}</ButtonSxUserJsonDataToggle>
    </Box>
  )
}
