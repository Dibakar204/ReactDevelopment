import { Link } from 'react-router-dom'
import { banners } from '../data/banners'
import './Hero.css'

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero__bg" aria-hidden="true">
        <div
          className="hero__banner-image"
          style={{ backgroundImage: `url(${banners.home})` }}
        />
        <div className="hero__banner-overlay" />
        <div className="hero__orb hero__orb--1" />
        <div className="hero__orb hero__orb--2" />
        <div className="hero__pattern" />
      </div>

      <div className="container hero__grid">
        <div className="hero__content">
          <p className="hero__eyebrow">Authentic Ayurveda · Since 2010</p>
          <h1 className="hero__title">
            Restore balance.
            <br />
            <em>Renew your life.</em>
          </h1>
          <p className="hero__text">
            At Aya Center, ancient wisdom meets compassionate care. Personalized
            treatments for detox, rejuvenation, and lasting wellness.
          </p>
          <div className="hero__actions">
            <Link to="/contact" className="btn btn-primary">
              Schedule a Visit
            </Link>
            <Link to="/services" className="btn btn-outline">
              Explore Services
            </Link>
          </div>
          <dl className="hero__stats">
            <div>
              <dt>15+</dt>
              <dd>Years of healing</dd>
            </div>
            <div>
              <dt>8k+</dt>
              <dd>Happy guests</dd>
            </div>
            <div>
              <dt>40+</dt>
              <dd>Therapies offered</dd>
            </div>
          </dl>
        </div>

        <div className="hero__visual">
          <div className="hero__card hero__card--main">
            <div className="hero__card-inner">
              <span className="hero__card-icon">☸</span>
              <h3>Holistic Healing</h3>
              <p>Mind · Body · Spirit</p>
            </div>
          </div>
          <div className="hero__card hero__card--float">
            <span className="hero__float-label">Today&apos;s focus</span>
            <strong>Abhyanga</strong>
            <span>Warm oil massage</span>
          </div>
          <div className="hero__leaf" aria-hidden="true">🍃</div>
        </div>
      </div>

      <a href="#about" className="hero__scroll" aria-label="Scroll to about us">
        <span />
      </a>
    </section>
  )
}
