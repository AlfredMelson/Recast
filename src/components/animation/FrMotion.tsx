import { motion } from 'framer-motion'
import * as React from 'react'

/**
 * @name FrMotionPaper
 * @description styles API Tab Panel background motion
 * @param {motion} framer-motion motion
 * @return styled API Tab Panel background motion
 */
type FrMotionPaperAlias = {
  children: React.ReactNode
}

export const FrMotionPaper = ({ children }: FrMotionPaperAlias) => {
  return (
    <motion.div animate={{ y: 0, opacity: 1 }} transition={{ ease: 'easeOut', duration: 2 }}>
      {children}
    </motion.div>
  )
}
