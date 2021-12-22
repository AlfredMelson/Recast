import * as React from 'react'
import Hero from '../../components/home/Hero'
import HeroEnd from '../../components/home/HeroEnd'
import { AppFooter } from '../../layout'
import ValueProposition from '../../components/home/ValueProposition'
import Testimonials from '../../components/home/Testimonials'

export function HomePage() {
  return (
    <React.Fragment>
      <Hero />
      <ValueProposition />
      <Testimonials />
      <HeroEnd />
      <AppFooter />
    </React.Fragment>
  )
}
