import Box from '@mui/material/Box'
import * as React from 'react'
import References, { CORE_CUSTOMERS } from '../../components/home/References'
import HeroEnd from '../../components/home/HeroEnd'
import { AppFooter } from '../../layout'
// import Hero from '../../components/home/Hero'
// import ValueProposition from '../../components/home/ValueProposition'
// import Testimonials from '../../components/home/Testimonials'
// import Sponsors from '../../components/home/Sponsors'

const Hero = React.lazy(() => import('../../components/home/Hero'))
const ValueProposition = React.lazy(() => import('../../components/home/ValueProposition'))
const Testimonials = React.lazy(() => import('../../components/home/Testimonials'))
const Sponsors = React.lazy(() => import('../../components/home/Sponsors'))

export function HomePage() {
  return (
    <Box>
      <Hero />
      <References companies={CORE_CUSTOMERS} />
      <ValueProposition />
      <Testimonials />
      <Sponsors />
      <HeroEnd />
      <AppFooter />
    </Box>
  )
}
