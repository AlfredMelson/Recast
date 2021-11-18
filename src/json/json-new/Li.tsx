interface LiProps {
  className: any
  style: any
  id: any
  children: any
}
export const Li = ({ className, style, id, children }: LiProps) => {
  return (
    <li id={id} className={className} style={style}>
      {children}
    </li>
  )
}
