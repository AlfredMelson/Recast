import TextField from '@mui/material/TextField'

type CTextFieldTypes = {
  size?: any
  variant?: any
  type?: any
  value?: any
  onChange?: any
  ref?: any
  onKeyDown?: any
  onKeyUp?: any
  style?: any
}

export function CTextField({
  size,
  variant,
  type,
  value,
  onChange,
  ref,
  onKeyDown,
  onKeyUp,
  style,
}: CTextFieldTypes) {
  return (
    <TextField
      fullWidth
      hiddenLabel
      size={size}
      variant={variant}
      type={type}
      value={value}
      onChange={onChange}
      ref={ref}
      onKeyDown={onKeyDown}
      onKeyUp={onKeyUp}
      sx={style}
    />
  )
}
