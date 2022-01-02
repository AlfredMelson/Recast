import Paper, { PaperProps } from '@mui/material/Paper'
import { styled, SxProps } from '@mui/material'
import * as React from 'react'
import { BrandSwatch } from '../../style/BrandSwatch'

/**
 * @name PaperSxStyle
 * @description styles API Tab Panel
 * @param {Tabs} mui Tabs
 * @param {styled} mui styled
 * @param {theme} MuiBrandingTheme
 * @return styled API Tab Panel
 */
const PaperSxStyle = styled(Paper)(({ theme }) => ({
  borderRadius: '0 0 3px 3px',
  paddingTop: 30,
  paddingLeft: 50,
  paddingBottom: 40,
  background:
    theme.palette.mode === 'dark' ? BrandSwatch.Dark.Grey[800] : BrandSwatch.Light.Grey[200],
  maxHeight: '64vh',
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

/**
 * @name PaperSxTreeviewStyle
 * @description styles Treeview
 * @param {Tabs} mui Tabs
 * @param {styled} mui styled
 * @param {theme} MuiBrandingTheme
 * @return styled Treeview
 */
const PaperSxTreeviewStyle = styled(Paper)(({ theme }) => ({
  paddingTop: theme.spacing(30),
  paddingLeft: theme.spacing(50),
  paddingBottom: theme.spacing(40),
  bgcolor: theme.palette.mode === 'dark' ? BrandSwatch.Dark.Grey[800] : BrandSwatch.Light.Grey[200],
  maxHeight: '86vh',
  width: '100%',
  overflowX: 'hidden',
  overflowY: 'scroll',
}))

/**
 * @name PaperSxTreeview
 * @description styles API Tab Panel background motion
 * @param {motion} framer-motion motion
 * @param {children} React.ReactNode
 * @param {paddingLeft} mui theme.spacing()
 * @return styled API Tab Panel background motion
 */
type PaperSxTreeviewAlias = {
  children: React.ReactNode
  sx?: SxProps
  onClick?: React.MouseEventHandler
}

export const PaperSxTreeview = ({ children, onClick, ...props }: PaperSxTreeviewAlias) => {
  return (
    <PaperSxTreeviewStyle onClick={onClick} {...props}>
      {children}
    </PaperSxTreeviewStyle>
  )
}

/**
 * @name PaperSxApiSelectorStyle
 * @description styles API url selectors
 * @param {Tabs} mui Tabs
 * @param {styled} mui styled
 * @param {theme} MuiBrandingTheme
 * @return
 */

const PaperSxApiSelectorStyle = styled((props: PaperProps) => <Paper {...props} />)(
  ({ theme }) => ({
    height: 50,
    px: 10,
    display: 'flex',
    alignItems: 'center',
    backgroundColor:
      theme.palette.mode === 'dark' ? BrandSwatch.Dark.Grey[900] : BrandSwatch.Light.Grey[200],
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor:
      theme.palette.mode === 'dark' ? BrandSwatch.Dark.Grey[900] : BrandSwatch.Light.Grey[200],
    transition: theme.transitions.create(['all'], {
      duration: theme.transitions.duration.standard,
      easing: theme.transitions.easing.easeInOut,
    }),
    '&:hover ': {
      borderWidth: 1,
      borderStyle: 'solid',
      borderColor:
        theme.palette.mode === 'dark' ? BrandSwatch.Dark.Blue[600] : BrandSwatch.Light.Blue[400],
    },
  })
)

/**
 * @name PaperSxApiSelectorWrapper
 * @description styles API Tab Panel background motion
 * @param {motion} framer-motion motion
 * @param {children} React.ReactNode
 * @param {paddingLeft} mui theme.spacing()
 * @return styled API Tab Panel background motion
 */
type PaperSxApiSelectorWrapperAlias = {
  children: React.ReactNode
}

export const PaperSxApiSelectorWrapper = ({ children }: PaperSxApiSelectorWrapperAlias) => {
  return <PaperSxApiSelectorStyle>{children}</PaperSxApiSelectorStyle>
}
