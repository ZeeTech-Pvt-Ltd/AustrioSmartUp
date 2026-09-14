import Hero from '../components/Hero'
import Steps from '../components/Steps'
import WhyUs from '../components/WhyUs'
import Compatibility from '../components/Compatibility'
import Testimonials from '../components/Testimonials'
import FinalCta from '../components/FinalCta'
import Faq from '../components/Faq'

export default function Home() {
  return (
    <main>
      <Hero />
      <Steps />
      <WhyUs />
      <Compatibility />
      <Testimonials />
      <FinalCta />
      <Faq />
    </main>
  )
}
