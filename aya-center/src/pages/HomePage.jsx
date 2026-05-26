import Hero from '../components/Hero'
import About from '../components/About'
import Services from '../components/Services'
import Testimonials from '../components/Testimonials'

export default function HomePage() {
  return (
    <>
      <Hero />
      <About compact viewAllTo="/about" />
      <Services limit={3} viewAllTo="/services" />
      <Testimonials viewAllTo="/stories" />
    </>
  )
}
