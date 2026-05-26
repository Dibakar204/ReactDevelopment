import { Link } from 'react-router-dom'
import PageBanner from '../components/PageBanner'
import Testimonials from '../components/Testimonials'
import { banners } from '../data/banners'
import './PageExtras.css'

export default function StoriesPage() {
  return (
    <>
      <PageBanner
        label="Guest Stories"
        title="Healing journeys shared"
        description="Hear from guests who found balance, clarity, and renewal at Aya Center."
        image={banners.stories}
      />
      <Testimonials hideHeader />
      <section className="page-extras page-extras--center">
        <div className="container">
          <p className="page-extras__lead">
            Your story could be next. Begin with a consultation and discover what
            Ayurveda can offer you.
          </p>
          <Link to="/contact" className="btn btn-gold">
            Start Your Journey
          </Link>
        </div>
      </section>
    </>
  )
}
