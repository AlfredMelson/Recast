import Paper from '@mui/material/Paper'
import { styled, SxProps } from '@mui/material'
import * as React from 'react'

/**
 * @name PaperSxStyle
 * @description styles API Tab Panel
 * @param {Tabs} mui Tabs
 * @param {styled} mui styled
 * @param {theme} MuiBrandingTheme
 * @return styled API Tab Panel
 */
const PaperSxStyle = styled(Paper)(({ theme }) => ({
  borderRadius: '0 0 4px 4px',
  paddingTop: theme.spacing(3),
  paddingLeft: theme.spacing(5),
  paddingBottom: theme.spacing(4),
  background: theme.palette.mode === 'dark' ? '#0D0D0D' : '#ffffff',
  maxHeight: '76vh',
  overflowX: 'hidden',
  overflowY: 'scroll',
}))

/**
 * @name PaperSx
 * @description styles API Tab Panel background motion
 * @param {motion} framer-motion motion
 * @param {children} React.ReactNode
 * @param {paddingLeft} mui theme.spacing()
 * @return styled API Tab Panel background motion
 */
type PaperSxAlias = {
  children: React.ReactNode
  sx?: SxProps
  onClick?: React.MouseEventHandler
}

export const PaperSx = ({ children, onClick, ...props }: PaperSxAlias) => {
  return (
    <PaperSxStyle onClick={onClick} {...props}>
      {children}
    </PaperSxStyle>
  )
}
