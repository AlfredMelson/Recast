interface ButtonProps {
  className: any
  style: any
  id: any
  children: any
}

export const Button = ({ className, style, id, children }: ButtonProps) => {
  return (
    <button id={id} className={className} style={style}>
      {children}
    </button>
  )
}
