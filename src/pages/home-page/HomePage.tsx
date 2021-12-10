import * as React from 'react'
import { AnimatePresence } from 'framer-motion'
import Hero from '../../components/home/Hero'
import HeroEnd from '../../components/home/HeroEnd'
import { AppFooter } from '../../layout'

const ValueProposition = React.lazy(() => import('../../components/home/ValueProposition'))

const Testimonials = React.lazy(() => import('../../components/home/Testimonials'))

export function HomePage() {
  return (
    <AnimatePresence exitBeforeEnter initial={false}>
      <Hero />
      <ValueProposition />
      <Testimonials />
      <HeroEnd />
      <AppFooter />
    </AnimatePresence>
  )
}
