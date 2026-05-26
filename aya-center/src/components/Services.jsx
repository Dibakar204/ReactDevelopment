import { Link } from 'react-router-dom'
import { services } from '../data/services'
import './Services.css'
import './SectionCta.css'

export default function Services({ hideHeader = false, limit, viewAllTo }) {
  const items = limit ? services.slice(0, limit) : services

  return (
    <section className="services">
      <div className="container">
        {!hideHeader && (
          <header className="services__header">
            <div>
              <span className="section-label">Our Services</span>
              <h2 className="section-title">Paths to wholeness</h2>
            </div>
            <p className="section-desc services__intro">
              Each offering is designed to harmonize your doshas and support lasting
              vitality — whether you seek a single session or a full retreat.
            </p>
          </header>
        )}

        <ul className={`services__grid ${limit ? 'services__grid--limited' : ''}`}>
          {items.map((service) => (
            <li key={service.title} className="service-card">
              <span className="service-card__tag">{service.tag}</span>
              <span className="service-card__icon" aria-hidden="true">{service.icon}</span>
              <h3 className="service-card__title">{service.title}</h3>
              <p className="service-card__desc">{service.desc}</p>
              <Link to={viewAllTo || '/services'} className="service-card__link">
                Learn more
                <span aria-hidden="true">→</span>
              </Link>
            </li>
          ))}
        </ul>

        {viewAllTo && (
          <div className="section-cta">
            <Link to={viewAllTo} className="btn btn-outline">
              View all services
            </Link>
          </div>
        )}
      </div>
    </section>
  )
}
