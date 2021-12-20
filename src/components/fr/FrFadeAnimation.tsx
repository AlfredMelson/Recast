import { motion, AnimatePresence } from 'framer-motion'
import * as React from 'react'

/**
 * @checklist
 * @typescript (Y)
 * @testing ()
 *
 * @name FrFadeAnimation
 * @description styles mounting & unmonuting with fade animation
 * @param {AnimatePresence} framer-motion AnimatePresence
 * @param {motion} framer-motion motion
 * @return
 */

type FrFadeAnimationAlias = {
  children: React.ReactNode
  enabled?: boolean
}

export const FrFadeAnimation = ({ children, enabled = true }: FrFadeAnimationAlias) => {
  const animations = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
  }

  const transitions = {
    ease: 'easeInOut',
    duration: 1,
  }

  return (
    <AnimatePresence exitBeforeEnter>
      {enabled && (
        <motion.div
          variants={animations}
          initial='initial'
          animate='animate'
          exit='exit'
          transition={transitions}>
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  )
}
