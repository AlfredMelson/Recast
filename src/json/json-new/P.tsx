interface PProps {
  className: any
  style: any
  id: any
  children: any
}
export const P = ({ className, style, id, children }: PProps) => {
  return (
    <p id={id} className={className} style={style}>
      {children}
    </p>
  )
}
