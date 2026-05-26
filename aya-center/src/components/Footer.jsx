import { useState } from 'react'
import { Link } from 'react-router-dom'
import { submitNewsletter } from '../api/forms'
import './Footer.css'
import './FormFeedback.css'

const footerLinks = {
  Explore: [
    { label: 'About', to: '/about' },
    { label: 'Services', to: '/services' },
    { label: 'Treatments', to: '/treatments' },
    { label: 'Guest Stories', to: '/stories' },
  ],
  Connect: [
    { label: 'Contact', to: '/contact' },
    { label: 'Book Now', to: '/contact' },
  ],
}

export default function Footer() {
  const year = new Date().getFullYear()
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState('idle')
  const [feedback, setFeedback] = useState('')

  const handleNewsletter = async (e) => {
    e.preventDefault()
    setStatus('loading')
    setFeedback('')

    try {
      await submitNewsletter(email)
      setStatus('success')
      setFeedback('Subscribed! Check your inbox soon.')
      setEmail('')
    } catch (err) {
      setStatus('error')
      setFeedback(err.message)
    }
  }

  return (
    <footer className="footer">
      <div className="container footer__top">
        <div className="footer__brand">
          <Link to="/" className="footer__logo">
            <span aria-hidden="true">🌿</span>
            <strong>Aya</strong> Center
          </Link>
          <p className="footer__tagline">
            Authentic Ayurveda for balance, vitality, and peace.
          </p>
          <div className="footer__social">
            <a href="#" aria-label="Instagram">IG</a>
            <a href="#" aria-label="Facebook">FB</a>
            <a href="#" aria-label="YouTube">YT</a>
          </div>
        </div>

        {Object.entries(footerLinks).map(([title, links]) => (
          <nav key={title} className="footer__nav">
            <h4>{title}</h4>
            <ul>
              {links.map((link) => (
                <li key={link.label}>
                  <Link to={link.to}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </nav>
        ))}

        <div className="footer__newsletter">
          <h4>Stay balanced</h4>
          <p>Seasonal wellness tips delivered monthly.</p>
          <form className="footer__form" onSubmit={handleNewsletter}>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email"
              aria-label="Email for newsletter"
              required
            />
            <button type="submit" className="btn btn-gold" disabled={status === 'loading'}>
              {status === 'loading' ? '…' : 'Subscribe'}
            </button>
          </form>
          {feedback && (
            <p
              className={`footer__feedback form-feedback form-feedback--${status === 'success' ? 'success' : 'error'}`}
              role="status"
            >
              {feedback}
            </p>
          )}
        </div>
      </div>

      <div className="container footer__bottom">
        <p>&copy; {year} Aya Center. All rights reserved.</p>
        <div className="footer__legal">
          <a href="#">Privacy</a>
          <a href="#">Terms</a>
        </div>
      </div>
    </footer>
  )
}
