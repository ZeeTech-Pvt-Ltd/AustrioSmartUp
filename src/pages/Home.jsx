import Hero from '../components/Hero'
import WhatIs from '../components/WhatIs'
import Steps from '../components/Steps'
import Experience from '../components/Experience'
import Priorities from '../components/Priorities'
import BannerCta from '../components/BannerCta'
import Testimonials from '../components/Testimonials'
import Portfolio from '../components/Portfolio'
import FinalCta from '../components/FinalCta'
import Faq from '../components/Faq'

export default function Home() {
  return (
    <main>
      <Hero />
      <WhatIs />
      <Steps />
      <Experience />
      <Priorities />
      <BannerCta />
      <Testimonials />
      <Portfolio />
      <FinalCta />
      <Faq />
    </main>
  )
}
