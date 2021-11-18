interface MUITreeViewMetaTypes {
  title?: any
  length?: any
  count?: any
}

export default function MUITreeViewMeta({ title, length, count }: MUITreeViewMetaTypes) {
  return (
    <span>
      {title}
      {length}
      {count}
    </span>
  )
}
