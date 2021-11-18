import Box from '@mui/material/Box'
import Hero from '../../components/home/Hero'
import References, { CORE_CUSTOMERS } from '../../components/home/References'
import ValueProposition from '../../components/home/ValueProposition'
import Testimonials from '../../components/home/Testimonials'
import Sponsors from '../../components/home/Sponsors'
import HeroEnd from '../../components/home/HeroEnd'
import { AppFooter } from '../../layout'

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
