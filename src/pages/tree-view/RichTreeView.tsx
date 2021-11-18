import SvgIcon, { SvgIconProps } from '@mui/material/SvgIcon'
import { alpha, styled } from '@mui/material/styles'
import TreeView from '@mui/lab/TreeView'
import TreeItem, { TreeItemProps, treeItemClasses } from '@mui/lab/TreeItem'
import Collapse from '@mui/material/Collapse'
// web.cjs is required for IE11 support
import { useSpring, animated } from 'react-spring'
import { TransitionProps } from '@mui/material/transitions'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import * as React from 'react'
import { useRecoilValue, useSetRecoilState } from 'recoil'
import bracketText from '../../data/unbracketText.json'
import { processedDataIdsAtom, processedUserDataAtom } from '../../recoil/tree-view/atom'
import { DestObjects, GetNestedChildren } from './TreeViewProcess'

function MinusSquare(props: SvgIconProps) {
  return (
    <SvgIcon fontSize='inherit' style={{ width: 14, height: 14 }} {...props}>
      {/* tslint:disable-next-line: max-line-length */}
      <path d='M22.047 22.074v0 0-20.147 0h-20.12v0 20.147 0h20.12zM22.047 24h-20.12q-.803 0-1.365-.562t-.562-1.365v-20.147q0-.776.562-1.351t1.365-.575h20.147q.776 0 1.351.575t.575 1.351v20.147q0 .803-.575 1.365t-1.378.562v0zM17.873 11.023h-11.826q-.375 0-.669.281t-.294.682v0q0 .401.294 .682t.669.281h11.826q.375 0 .669-.281t.294-.682v0q0-.401-.294-.682t-.669-.281z' />
    </SvgIcon>
  )
}

function PlusSquare(props: SvgIconProps) {
  return (
    <SvgIcon fontSize='inherit' style={{ width: 14, height: 14 }} {...props}>
      {/* tslint:disable-next-line: max-line-length */}
      <path d='M22.047 22.074v0 0-20.147 0h-20.12v0 20.147 0h20.12zM22.047 24h-20.12q-.803 0-1.365-.562t-.562-1.365v-20.147q0-.776.562-1.351t1.365-.575h20.147q.776 0 1.351.575t.575 1.351v20.147q0 .803-.575 1.365t-1.378.562v0zM17.873 12.977h-4.923v4.896q0 .401-.281.682t-.682.281v0q-.375 0-.669-.281t-.294-.682v-4.896h-4.923q-.401 0-.682-.294t-.281-.669v0q0-.401.281-.682t.682-.281h4.923v-4.896q0-.401.294-.682t.669-.281v0q.401 0 .682.281t.281.682v4.896h4.923q.401 0 .682.281t.281.682v0q0 .375-.281.669t-.682.294z' />
    </SvgIcon>
  )
}

function CloseSquare(props: SvgIconProps) {
  return (
    <SvgIcon className='close' fontSize='inherit' style={{ width: 14, height: 14 }} {...props}>
      {/* tslint:disable-next-line: max-line-length */}
      <path d='M22.047 22.074v0 0-20.147 0h-20.12v0 20.147 0h20.12zM22.047 24h-20.12q-.803 0-1.365-.562t-.562-1.365v-20.147q0-.776.562-1.351t1.365-.575h20.147q.776 0 1.351.575t.575 1.351v20.147q0 .803-.575 1.365t-1.378.562v0z' />
    </SvgIcon>
  )
}

export function TransitionComponent(props: TransitionProps) {
  const style = useSpring({
    from: {
      opacity: 0,
      transform: 'translate3d(40px,0,0)',
    },
    to: {
      opacity: props.in ? 1 : 0,
      transform: `translate3d(${props.in ? 0 : 40}px,0,0)`,
    },
  })

  return (
    <animated.div style={style}>
      <Collapse {...props} />
    </animated.div>
  )
}

const StyledTreeItem = styled((props: TreeItemProps) => (
  <TreeItem {...props} TransitionComponent={TransitionComponent} />
))(({ theme }) => ({
  [`& .${treeItemClasses.iconContainer}`]: {
    '& .close': {
      opacity: 0.3,
    },
  },
  [`& .${treeItemClasses.group}`]: {
    marginLeft: 15,
    paddingLeft: 18,
    borderLeft: `1px dashed ${alpha(theme.palette.text.primary, 0.4)}`,
  },
}))

function TreeViewComponent() {
  const processedUserData = useRecoilValue(processedUserDataAtom)
  const processedDataIds = useRecoilValue(processedDataIdsAtom)

  const [expansion, setExpansion] = React.useState<string[]>([])

  const handleToggle = (_event: React.SyntheticEvent, nodeIds: string[]) => {
    setExpansion(nodeIds)
  }

  const handleCollapse = () => {
    setExpansion([])
  }
  const handleExpand = () => {
    setExpansion(processedDataIds)
  }

  const renderTree = nodes => (
    <StyledTreeItem key={nodes.id} nodeId={nodes.id} label={nodes.name}>
      {Array.isArray(nodes.children) ? nodes.children.map(node => renderTree(node)) : null}
    </StyledTreeItem>
  )

  return (
    <Box>
      <Box sx={{ mb: 1 }}>
        <Button onClick={handleCollapse} sx={{ minWidth: '110px' }}>
          {expansion.length !== 0 && 'Collapse all'}
        </Button>
        <Button onClick={handleExpand} sx={{ minWidth: '110px' }}>
          {'Expand all'}
        </Button>
      </Box>
      <TreeView
        defaultExpanded={['1']}
        expanded={expansion}
        onNodeToggle={handleToggle}
        defaultCollapseIcon={<MinusSquare />}
        defaultExpandIcon={<PlusSquare />}
        defaultEndIcon={<CloseSquare />}>
        {renderTree(processedUserData)}
      </TreeView>
    </Box>
  )
}

export function RichTreeView() {
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [setProcessedDataIds, setProcessedUserData])

  return <TreeViewComponent />
}
