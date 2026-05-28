import { Link } from 'react-router-dom'
import { banners } from '../data/banners'
import bedriddenPatientIcon from '../assets/Bedridden-Patient.png'
import elderlyCareIcon from '../assets/Elderly-Care.png'
import icuTrainedAyaIcon from '../assets/ICU-Trained-Aya.png'
import postOperativeCareIcon from '../assets/Post-Operative.png'
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
          <p className="hero__eyebrow">Trusted Aya & Care Giving Center</p>
          <h1 className="hero__title">
            Compassionate Aya Care
            <br />
            <em>for every individual support.</em>
          </h1>
          <p className="hero__text">
            Trusted care for babies, mothers, and families — offering compassionate support, guidance, and holistic help for every stage of life. Nurturing wellness with experience, empathy, and dedication.
          </p>
          <div className="hero__actions">
            <Link to="/contact" className="btn btn-primary">
              Schedule a Visit
            </Link>
            <Link to="/services" className="btn btn-outline">
              Explore Services
            </Link>
          </div>
          {/* <dl className="hero__stats">
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
          </dl> */}
          <div className="service_icons">
            <ul>
              <li>
                <img src={elderlyCareIcon} alt="Elderly Care Icon" />
                <span>Elderly Care</span>
              </li>
              <li>
                <img src={bedriddenPatientIcon} alt="Bedridden Patient Icon" />
                <span>Bedridden Patient</span>
              </li>
              <li>
                <img src={icuTrainedAyaIcon} alt="ICU Trained Aya Icon" />
                <span>ICU Trained Aya</span>
              </li>   
              <li>
                <img src={postOperativeCareIcon} alt="Post-Operative Care Icon" />
                <span>Post-Operative</span>
              </li>   
            </ul>
          </div>
        </div>

        <div className="hero__visual">
          <div className="hero__card hero__card--main">
            
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
