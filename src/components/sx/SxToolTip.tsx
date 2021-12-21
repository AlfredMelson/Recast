import Tooltip from '@mui/material/Tooltip'

type SxToolTipAlias = {
  children: React.ReactElement
  tooltipTitle?: string
  disabled?: boolean
}

export function SxToolTip({ tooltipTitle, children, disabled }: SxToolTipAlias) {
  return (
    <Tooltip
      title={tooltipTitle}
      disableFocusListener={disabled}
      disableHoverListener={disabled}
      disableInteractive={disabled}
      disableTouchListener={disabled}>
      {children}
    </Tooltip>
  )
}
