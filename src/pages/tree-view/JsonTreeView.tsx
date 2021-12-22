import TreeView from '@mui/lab/TreeView'
import * as React from 'react'
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil'
import bracketText from '../../data/unbracketText.json'
import {
  processedDataIdsAtom,
  processedUserDataAtom,
  treeViewExpansionAtom,
} from '../../recoil/tree-view/atom'
import { CloseSquare, MinusSquare, PlusSquare } from '../../components/icons'
import { TreeItemSx } from '../../components/mui/TreeItem.style'
import { FadeAnimation } from '../../components/framer-motion/Fade.animation'
import { PaperSxTreeview } from '../../components/mui'
import { DestObjects, GetNestedChildren } from './treeViewProcess'

function TreeViewComponent() {
  const processedUserData = useRecoilValue(processedUserDataAtom)

  const [treeViewExpansion, setTreeViewExpansion] = useRecoilState(treeViewExpansionAtom)

  const handleToggle = (_event: React.SyntheticEvent, nodeIds: string[]) => {
    setTreeViewExpansion(nodeIds)
  }

  const renderTree = nodes => (
    <TreeItemSx key={nodes.id} nodeId={nodes.id} label={nodes.name} sx={{ fontSize: '12px' }}>
      {Array.isArray(nodes.children) ? nodes.children.map(node => renderTree(node)) : null}
    </TreeItemSx>
  )

  return (
    <FadeAnimation>
      <PaperSxTreeview>
        <TreeView
          defaultExpanded={['1']}
          expanded={treeViewExpansion}
          onNodeToggle={handleToggle}
          defaultCollapseIcon={<MinusSquare />}
          defaultExpandIcon={<PlusSquare />}
          defaultEndIcon={<CloseSquare />}>
          {renderTree(processedUserData)}
        </TreeView>
      </PaperSxTreeview>
    </FadeAnimation>
  )
}

export function JsonTreeView() {
  const setProcessedUserData = useSetRecoilState(processedUserDataAtom)
  const setProcessedDataIds = useSetRecoilState(processedDataIdsAtom)

  React.useEffect(() => {
    async function getDataProcessed() {
      const initProcessing = DestObjects(bracketText)
      const objResults = initProcessing.objOutput
      const idResults = initProcessing.expandedId

      setProcessedDataIds(idResults)

      const nestProcessed = GetNestedChildren(objResults, undefined)

      try {
        const nestedAddOn = {
          id: '1',
          name: 'Parent', // change to name of file
          children: nestProcessed,
        }
        setProcessedUserData(nestedAddOn)
      } catch (error) {
        console.error(error)
      }
    }
    getDataProcessed()
  }, [setProcessedDataIds, setProcessedUserData])

  return <TreeViewComponent />
}
