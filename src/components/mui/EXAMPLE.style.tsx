import { alpha, styled } from '@mui/material/styles'
import TreeItem, { TreeItemProps, treeItemClasses } from '@mui/lab/TreeItem'
import { TransitionComponent } from '../animation/TransitionComponent'

/**
 * @EXAMPLE
 */
export const ExampleSx = styled((props: TreeItemProps) => (
  <TreeItem {...props} TransitionComponent={TransitionComponent} />
))(({ theme }) => ({
  [`& .${treeItemClasses.iconContainer}`]: {
    '& .close': {
      opacity: 0.3,
    },
  },
  [`& .${treeItemClasses.label}`]: {
    ...theme.typography.body2,
  },
  [`& .${treeItemClasses.group}`]: {
    marginLeft: 15,
    paddingLeft: 18,
    borderLeft: `1px dashed ${alpha(theme.palette.text.primary, 0.4)}`,
  },
}))
