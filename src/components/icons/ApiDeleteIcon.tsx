import SvgIcon, { SvgIconProps } from '@mui/material/SvgIcon'

export function ApiDeleteIcon(props: SvgIconProps): JSX.Element {
  return (
    <SvgIcon style={{ width: 20, height: 20 }} {...props}>
      <path d='M16 9v10H8V9h8m-1.5-6h-5l-1 1H5v2h14V4h-3.5l-1-1zM18 7H6v12c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7z'></path>
    </SvgIcon>
  )
}
