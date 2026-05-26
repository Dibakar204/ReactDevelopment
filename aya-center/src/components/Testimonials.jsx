import { Link } from 'react-router-dom'
import { testimonials } from '../data/testimonials'
import './Testimonials.css'
import './SectionCta.css'

export default function Testimonials({ hideHeader = false, limit, viewAllTo }) {
  const items = limit ? testimonials.slice(0, limit) : testimonials

  return (
    <section className="testimonials">
      <div className="container">
        {!hideHeader && (
          <header className="testimonials__header">
            <span className="section-label">Guest Stories</span>
            <h2 className="section-title">Healing journeys shared</h2>
          </header>
        )}

        <ul className={`testimonials__grid ${limit && limit < 3 ? 'testimonials__grid--limited' : ''}`}>
          {items.map((item) => (
            <li key={item.name} className="testimonial-card">
              <div className="testimonial-card__stars" aria-label={`${item.rating} out of 5 stars`}>
                {'★'.repeat(item.rating)}
              </div>
              <blockquote className="testimonial-card__quote">
                &ldquo;{item.quote}&rdquo;
              </blockquote>
              <footer className="testimonial-card__author">
                <div className="testimonial-card__avatar" aria-hidden="true">
                  {item.name.charAt(0)}
                </div>
                <div>
                  <cite>{item.name}</cite>
                  <span>{item.role}</span>
                </div>
              </footer>
            </li>
          ))}
        </ul>

        {viewAllTo && (
          <div className="section-cta">
            <Link to={viewAllTo} className="btn btn-outline">
              Read more stories
            </Link>
          </div>
        )}
      </div>
    </section>
  )
}
