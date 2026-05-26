import PageBanner from '../components/PageBanner'
import About from '../components/About'
import { banners } from '../data/banners'
import './PageExtras.css'

export default function AboutPage() {
  return (
    <>
      <PageBanner
        label="About"
        title="Our sanctuary of healing"
        description="Aya Center was founded to make authentic Ayurveda accessible, personal, and transformative."
        image={banners.about}
      />
      <About hideHeader />
      <section className="page-extras">
        <div className="container page-extras__grid">
          <article className="page-extras__card">
            <h3>Our mission</h3>
            <p>
              We guide each guest toward their natural state of balance through
              individualized care rooted in classical Ayurvedic principles.
            </p>
          </article>
          <article className="page-extras__card">
            <h3>Our space</h3>
            <p>
              Tranquil treatment rooms, an herbal pharmacy, and quiet gardens
              create an environment where deep rest and renewal can unfold.
            </p>
          </article>
          <article className="page-extras__card">
            <h3>Our team</h3>
            <p>
              Certified practitioners with decades of combined experience in
              pulse diagnosis, Panchakarma, and therapeutic bodywork.
            </p>
          </article>
        </div>
      </section>
    </>
  )
}
