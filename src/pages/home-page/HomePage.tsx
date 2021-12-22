import * as React from 'react'
import Box from '@mui/material/Box'
import Hero from '../../components/home/Hero'
import HeroEnd from '../../components/home/HeroEnd'
import { AppFooter } from '../../layout'

const ValueProposition = React.lazy(() => import('../../components/home/ValueProposition'))

const Testimonials = React.lazy(() => import('../../components/home/Testimonials'))

export function HomePage() {
  return (
    <Box>
      <Hero />
      <ValueProposition />
      <Testimonials />
      <HeroEnd />
      <AppFooter />
    </Box>
  )
}
