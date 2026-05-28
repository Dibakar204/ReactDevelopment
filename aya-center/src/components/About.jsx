import { Link } from 'react-router-dom'
import './About.css'
import './SectionCta.css'
import aboutImg from '../assets/aboutImage.png'

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
              {/* <span>ॐ</span>
              <p>Sanctuary of stillness</p> */}
            </div>
          </div>
          <div className="about__badge">
            <span>Bringing trusted </span>
            <strong>Nannies & Support Staff</strong>
          </div>
        </div>

        <div className="about__content">
          {!hideHeader && (
            <>
              <span className="section-label">About Us</span>
              <h2 className="section-title">
                Journey of Caregiving Excellence.
              </h2>
            </>
          )}
          <p className="section-desc about__lead">
            For years, our Aya Center has been a trusted source of compassionate caregiving, 
            offering dedicated support to babies, mothers, families, and those in need of 
            reliable household help. Rooted in tradition and care, we have built strong 
            relationships offline, ensuring every family receives personalized attention 
            and trusted assistance.
          </p>
          <p className="about__text">
            From this year, we are proud to extend our services online — making it easier for 
            families to connect with experienced caregivers, nannies, and support staff from 
            the comfort of their homes. Whether you need nurturing care for your child, support 
            for new mothers, or dependable household help, our Aya Center is committed to providing 
            holistic assistance that blends cultural values with modern convenience.
          </p>
          {!compact && (
            <p className="about__text">
              We believe caregiving is more than a service — it is a bond of trust, empathy, and 
              dedication. Our mission is to bring peace of mind to families by offering reliable, 
              professional, and heartfelt support both offline and online.
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
              {/* {values.map((item) => (
                <li key={item.title}>
                  <span aria-hidden="true">{item.icon}</span>
                  <span>{item.title}</span>
                </li>
              ))} */}
              <li>
                <i>“Bringing trusted caregiving from offline roots to an online future — dedicated to babies, mothers, families, and holistic support.”</i>
              </li>
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
