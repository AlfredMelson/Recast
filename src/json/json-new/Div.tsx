interface DivProps {
  className: any
  style: any
  id: any
  children: any
}

export const Div = ({ className, style, id, children }: DivProps) => {
  return (
    <div id={id} className={className} style={style}>
      {children}
    </div>
  )
}
