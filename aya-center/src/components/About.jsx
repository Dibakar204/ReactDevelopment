import { Link } from 'react-router-dom'
import './About.css'
import './SectionCta.css'

const values = [
  {
    icon: '🪷',
    title: 'Rooted in Tradition',
    text: 'Classical Ayurvedic texts guide every protocol we offer.',
  },
  {
    icon: '✨',
    title: 'Personalized Care',
    text: 'Your unique constitution shapes each treatment plan.',
  },
  {
    icon: '🌱',
    title: 'Natural Healing',
    text: 'Organic herbs, oils, and time-tested therapies only.',
  },
]

export default function About({ hideHeader = false, compact = false, viewAllTo }) {
  return (
    <section className="about" id="about">
      <div className="container about__grid">
        <div className="about__media">
          <div className="about__frame">
            <div className="about__image-placeholder">
              <span>ॐ</span>
              <p>Sanctuary of stillness</p>
            </div>
          </div>
          <div className="about__badge">
            <span>Certified</span>
            <strong>Ayurvedic Practitioners</strong>
          </div>
        </div>

        <div className="about__content">
          {!hideHeader && (
            <>
              <span className="section-label">About Us</span>
              <h2 className="section-title">
                Where ancient wisdom meets modern wellness
              </h2>
            </>
          )}
          <p className="section-desc about__lead">
            Aya Center is a serene retreat dedicated to the timeless science of
            Ayurveda. Founded in 2010, we help guests uncover their natural state
            of balance through consultation, detox, and restorative therapies.
          </p>
          <p className="about__text">
            Our practitioners combine decades of clinical experience with a warm,
            nurturing environment — so every visit feels like coming home to yourself.
            From first-time visitors to long-term wellness members, everyone receives
            care shaped by their unique dosha and seasonal needs.
          </p>
          {!compact && (
            <p className="about__text">
              Today we welcome guests from across the region for day visits, weekend
              retreats, and extended Panchakarma programs — all held in tranquil
              treatment rooms surrounded by herb gardens and quiet meditation spaces.
            </p>
          )}

          {!compact && (
            <ul className="about__values">
              {values.map((item) => (
                <li key={item.title} className="about__value">
                  <span className="about__value-icon" aria-hidden="true">{item.icon}</span>
                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                  </div>
                </li>
              ))}
            </ul>
          )}

          {compact && (
            <ul className="about__values about__values--compact">
              {values.map((item) => (
                <li key={item.title}>
                  <span aria-hidden="true">{item.icon}</span>
                  <span>{item.title}</span>
                </li>
              ))}
            </ul>
          )}

          {viewAllTo && (
            <div className="section-cta about__cta">
              <Link to={viewAllTo} className="btn btn-primary">
                Learn more about us
              </Link>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
