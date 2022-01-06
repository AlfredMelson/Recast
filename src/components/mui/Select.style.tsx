import Select, { SelectChangeEvent, SelectProps } from '@mui/material/Select'
import { alpha, Box, styled } from '@mui/material'
import * as React from 'react'
import { BrandSwatch } from '../../style/BrandSwatch'

/**
 * @name SelectSxStyle
 * @description styles API Tab Panel
 * @param {Tabs} mui Tabs
 * @param {styled} mui styled
 * @param {theme} MuiBrandingTheme
 * @return
 */

const SelectSxStyle = styled((props?: SelectProps) => (
  <Select autoWidth disableUnderline={true} {...props} />
))(({ theme }) => ({
  fontSize: 16,

  height: 50,
  paddingLeft: 20,
  display: 'flex',
  alignItems: 'center',
  backgroundColor:
    theme.palette.mode === 'dark'
      ? alpha(BrandSwatch.Dark.Grey[700], 0.4)
      : alpha(BrandSwatch.Light.Grey[200], 0.4),
  border: '1px solid',
  borderRadius: 3,
  // borderColor:
  //   theme.palette.mode === 'dark' ? BrandSwatch.Dark.Grey[900] : BrandSwatch.Light.Grey[200],
  borderColor: 'transparent',
  color: theme.palette.mode === 'dark' ? BrandSwatch.Dark.Grey[200] : BrandSwatch.Light.Grey[700],
  transition: theme.transitions.create(['all'], {
    duration: theme.transitions.duration.standard,
    easing: theme.transitions.easing.easeInOut,
  }),
  '&:hover, &.Mui-focused ': {
    color: theme.palette.mode === 'dark' ? BrandSwatch.Dark.Grey[50] : BrandSwatch.Light.Grey[900],
    backgroundColor:
      theme.palette.mode === 'dark' ? BrandSwatch.Dark.Grey[700] : BrandSwatch.Light.Grey[200],
    border: '1px solid transparent',
    borderRadius: 3,
  },
  '&.Mui-selected': {
    color: theme.palette.mode === 'dark' ? BrandSwatch.Dark.Grey[50] : BrandSwatch.Light.Grey[900],
    backgroundColor:
      theme.palette.mode === 'dark' ? BrandSwatch.Dark.Grey[900] : BrandSwatch.Light.Grey[200],
  },
}))

/**
 * @name SelectSx
 * @description styles API Tab Panel background motion
 * @param {motion} framer-motion motion
 * @param {children} React.ReactNode
 * @param {paddingLeft} mui
 * @return
 */

type SelectSxAlias = {
  id: string
  value: string
  children: React.ReactNode
  onChange?: (event: SelectChangeEvent<unknown>, child: React.ReactNode) => void
  props?: SelectProps
}

export const SelectSx = ({ id, value, onChange, children, ...props }: SelectSxAlias) => {
  return (
    <Box sx={{ m: 10 }}>
      <SelectSxStyle id={id} value={value} onChange={onChange} {...props}>
        {children}
      </SelectSxStyle>
    </Box>
  )
}
