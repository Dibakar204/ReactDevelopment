import { Link } from 'react-router-dom'
import PageBanner from '../components/PageBanner'
import { treatments } from '../data/treatments'
import { banners } from '../data/banners'
import './TreatmentsPage.css'
import './PageExtras.css'

export default function TreatmentsPage() {
  return (
    <>
      <PageBanner
        label="Treatments"
        title="Therapies that transform"
        description="Time-honored rituals performed by trained therapists in our tranquil treatment rooms."
        image={banners.treatments}
      />

      <section className="treatments-page">
        <div className="container">
          <p className="treatments-page__intro">
            Each therapy is performed with organic oils and herbs, tailored to your
            dosha and current season. Select a treatment below to book your session.
          </p>

          <ul className="treatments-page__grid">
            {treatments.map((item) => (
              <li key={item.name} className="treatment-card">
                {item.tag && (
                  <span className="treatment-card__tag">{item.tag}</span>
                )}
                <span className="treatment-card__icon" aria-hidden="true">
                  {item.icon}
                </span>
                <h2 className="treatment-card__name">{item.name}</h2>
                <p className="treatment-card__desc">{item.description}</p>
                <div className="treatment-card__meta">
                  <span className="treatment-card__duration">{item.duration}</span>
                  <span className="treatment-card__price">{item.price}</span>
                </div>
                <Link
                  to="/contact"
                  className="btn btn-outline treatment-card__book"
                >
                  Book session
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="treatments-page__footer page-extras page-extras--cream">
        <div className="container treatments-page__footer-inner">
          <div className="treatments-page__footer-text">
            <h2 className="page-extras__title">Not sure which therapy fits you?</h2>
            <p className="page-extras__lead">
              Our practitioners will recommend the ideal treatment based on your
              constitution, goals, and any areas of imbalance.
            </p>
          </div>
          <Link to="/contact" className="btn btn-primary">
            Speak with a Practitioner
          </Link>
        </div>
      </section>
    </>
  )
}
