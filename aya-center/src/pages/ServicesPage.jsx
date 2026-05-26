import { Link } from 'react-router-dom'
import PageBanner from '../components/PageBanner'
import Services from '../components/Services'
import { banners } from '../data/banners'
import './PageExtras.css'

export default function ServicesPage() {
  return (
    <>
      <PageBanner
        label="Services"
        title="Paths to wholeness"
        description="From first consultation to intensive detox — every program is tailored to your constitution."
        image={banners.services}
      />
      <Services hideHeader />
      <section className="page-extras page-extras--cream">
        <div className="container">
          <h2 className="page-extras__title">Not sure where to start?</h2>
          <p className="page-extras__lead">
            A Dosha consultation is the foundation of your Ayurvedic journey. We
            assess your unique mind-body type and recommend the right services.
          </p>
          <Link to="/contact" className="btn btn-primary">
            Book a Consultation
          </Link>
        </div>
      </section>
    </>
  )
}
