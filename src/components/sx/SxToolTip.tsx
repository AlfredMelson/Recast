import Tooltip from '@mui/material/Tooltip'

interface SxToolTipProps {
  children: React.ReactElement
  tooltipTitle?: string
  disabled?: boolean
}

export function SxToolTip({ tooltipTitle, children, disabled }: SxToolTipProps) {
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
