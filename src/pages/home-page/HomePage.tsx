import * as React from 'react'
import Box from '@mui/material/Box'
import Hero from '../../components/home/Hero'
// import References, { CORE_CUSTOMERS } from '../../components/home/References'
import HeroEnd from '../../components/home/HeroEnd'
import { AppFooter } from '../../layout'

const ValueProposition = React.lazy(() => import('../../components/home/ValueProposition'))
const Testimonials = React.lazy(() => import('../../components/home/Testimonials'))
// const Sponsors = React.lazy(() => import('../../components/home/Sponsors'))

export function HomePage() {
  return (
    <Box>
      <Hero />
      {/* <References companies={CORE_CUSTOMERS} /> */}
      <ValueProposition />
      <Testimonials />
      {/* <Sponsors /> */}
      <HeroEnd />
      <AppFooter />
    </Box>
  )
}
