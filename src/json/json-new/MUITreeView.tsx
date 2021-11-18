import TreeItem from '@mui/lab/TreeItem'

interface MUITreeViewTypes {
  label: string
  nodeId: number
  dataLevel: number
  style?: any
}

export default function MUITreeView({ label, nodeId, dataLevel, style }: MUITreeViewTypes) {
  return <TreeItem label={label} nodeId={`${nodeId}`} data-level={dataLevel} sx={style} />
}
