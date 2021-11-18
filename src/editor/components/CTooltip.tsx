import { styled } from '@mui/material/styles'
import Typography from '@mui/material/Typography'
import * as React from 'react'
import Divider from '@mui/material/Divider'
import { Tooltip, tooltipClasses, TooltipProps } from '@mui/material'

const ExpandedTooltip = styled(({ ...props }: TooltipProps) => <Tooltip color='' {...props} />)(
  () => ({
    [`& .${tooltipClasses.tooltip}`]: {
      backgroundColor: '#ffffff',
      color: 'rgba(0, 0, 0, 0.87)',
      maxWidth: 500,
      // border: '1px solid #dadde9',
    },
  })
)

type CTooltipTypes = {
  heading: string
  body: string
  footer: string
  children: any
}

export function CTooltip({ heading, body, footer, children }: CTooltipTypes) {
  return (
    <ExpandedTooltip
      title={
        <React.Fragment>
          <Typography variant='h6' color='inherit'>
            {heading}
          </Typography>
          <Divider />
          <Typography variant='body1' color='inherit'>
            {body}
          </Typography>

          <Divider />
          <Typography variant='caption' color='inherit'>
            {footer}
          </Typography>
        </React.Fragment>
      }
    >
      {children}
    </ExpandedTooltip>
  )
}
