import Tab from '@mui/material/Tab'
import { styled } from '@mui/material/styles'
import * as React from 'react'
import { motion } from 'framer-motion'
import { atom, useSetRecoilState } from 'recoil'

/**
 * @name apiTabSelectedAtom
 * @description state representing the full response returned from Axios api call
 * @param {}
 * @type {Object}
 * @return {Object} a writeable RecoilState object
 * @bug Objects stored in atoms will freeze in development mode when bugs are detected
 *
 * Hooks to manage state changes and notify components subscribing to re-render:
 * const [apiTabSelected, setApiTabSelected] = useRecoilState(apiTabSelectedAtom)
 * const setApiTabSelected  = useSetRecoilState(apiTabSelectedAtom)
 * const apiTabSelected  = useRecoilValue(apiTabSelectedAtom)
 * const resetApiTabSelected= useResetRecoilState(apiTabSelectedAtom)
 */
export const apiTabSelectedAtom = atom<string>({
  key: 'apiTabSelected',
  default: '0',
})

/**
 * @name TabSxStyle
 * @description styles API Tab
 * @param {Tab} mui Tab
 * @param {styled} mui styled
 * @param {theme} MuiBrandingTheme
 * @alias TabSxAlias
 * @return styled Tab
 */

type TabSxStyleAlias = {
  label: string
  disabled?: any
  icon?: JSX.Element
  iconPosition?: 'bottom' | 'top' | 'end' | 'start'
  onClick?: React.MouseEventHandler
}

export const TabSxStyle = styled(
  ({ label, disabled, onClick, icon, iconPosition, ...props }: TabSxStyleAlias) => (
    <Tab
      label={label}
      disabled={disabled}
      onClick={onClick}
      disableRipple
      icon={icon}
      iconPosition={iconPosition}
      {...props}
    />
  )
)(({ theme }) => ({
  ...theme.typography.body2,
  textTransform: 'none',
  minWidth: 130,
  height: 50,
  minHeight: 50,
  padding: theme.spacing(0, 10),
}))

/**
 * @name TabSx
 * @description styles API Tab Panel background motion
 * @param {motion} framer-motion motion
 * @param {children} React.ReactNode
 * @param {paddingLeft} mui
 * @return
 */

type TabSxAlias = {
  index: string
  label: string
  disabled?: any
  icon?: JSX.Element
  iconPosition?: 'bottom' | 'top' | 'end' | 'start'
  onClick?: React.MouseEventHandler
}

export const TabSx = ({
  index,
  label,
  disabled,
  onClick,
  icon,
  iconPosition,
  ...props
}: TabSxAlias) => {
  const setApiTabSelected = useSetRecoilState(apiTabSelectedAtom)
  return (
    <motion.div
      initial={{ x: 0 }}
      animate={{ x: 20, y: 1 }}
      whileHover={{ y: 0 }}
      // layoutId={key}
      onClick={() => setApiTabSelected(index)}>
      <TabSxStyle
        label={label}
        disabled={disabled}
        onClick={onClick}
        icon={icon}
        iconPosition={iconPosition}
        {...props}
      />
    </motion.div>
  )
}
