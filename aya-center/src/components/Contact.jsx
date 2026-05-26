import { useState } from 'react'
import { submitContactForm } from '../api/forms'
import './Contact.css'
import './FormFeedback.css'

const initialForm = {
  name: '',
  email: '',
  phone: '',
  service: '',
  message: '',
}

export default function Contact({ hideHeader = false }) {
  const [form, setForm] = useState(initialForm)
  const [status, setStatus] = useState('idle')
  const [feedback, setFeedback] = useState('')

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('loading')
    setFeedback('')

    try {
      await submitContactForm({
        name: form.name,
        email: form.email,
        phone: form.phone,
        service: form.service,
        message: form.message,
        website: '',
      })
      setStatus('success')
      setFeedback('Thank you! Your request has been sent. We will reply soon.')
      setForm(initialForm)
      e.target.reset()
    } catch (err) {
      setStatus('error')
      setFeedback(err.message)
    }
  }

  return (
    <section className="contact">
      <div className="container contact__grid">
        <div className="contact__info">
          {!hideHeader && (
            <>
              <span className="section-label">Visit Us</span>
              <h2 className="section-title">Begin your healing journey</h2>
              <p className="section-desc">
                Book a consultation or reach out with questions. We respond within
                one business day.
              </p>
            </>
          )}

          <ul className="contact__details">
            <li>
              <span className="contact__icon" aria-hidden="true">📍</span>
              <div>
                <strong>Location</strong>
                <p>124 Serenity Lane, Wellness District</p>
              </div>
            </li>
            <li>
              <span className="contact__icon" aria-hidden="true">📞</span>
              <div>
                <strong>Phone</strong>
                <p>+1 (555) 234-AYUR</p>
              </div>
            </li>
            <li>
              <span className="contact__icon" aria-hidden="true">✉️</span>
              <div>
                <strong>Email</strong>
                <p>dibakar.sarkar.402@gmail.com</p>
              </div>
            </li>
            <li>
              <span className="contact__icon" aria-hidden="true">🕐</span>
              <div>
                <strong>Hours</strong>
                <p>Mon – Sat: 8am – 7pm · Sun: 9am – 4pm</p>
              </div>
            </li>
          </ul>
        </div>

        <form className="contact__form" onSubmit={handleSubmit}>
          <h3>Request an appointment</h3>
          <div className="form-honeypot" aria-hidden="true">
            <input type="text" name="website" tabIndex={-1} autoComplete="off" />
          </div>
          <div className="contact__fields">
            <label>
              <span>Full name</span>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Your name"
                required
              />
            </label>
            <label>
              <span>Email</span>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="you@email.com"
                required
              />
            </label>
            <label>
              <span>Phone</span>
              <input
                type="tel"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                placeholder="+1 (555) 000-0000"
              />
            </label>
            <label className="contact__full">
              <span>Service of interest</span>
              <select name="service" value={form.service} onChange={handleChange} required>
                <option value="" disabled>Select a service</option>
                <option value="consultation">Dosha Consultation</option>
                <option value="massage">Therapeutic Massage</option>
                <option value="panchakarma">Panchakarma Detox</option>
                <option value="yoga">Yoga & Pranayama</option>
                <option value="other">Other / Not sure</option>
              </select>
            </label>
            <label className="contact__full">
              <span>Message</span>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                rows={4}
                placeholder="Tell us about your wellness goals..."
              />
            </label>
          </div>
          <button
            type="submit"
            className="btn btn-primary contact__submit"
            disabled={status === 'loading'}
          >
            {status === 'loading' ? 'Sending…' : 'Send Request'}
          </button>
          {feedback && (
            <p
              className={`form-feedback form-feedback--${status === 'success' ? 'success' : 'error'}`}
              role="status"
            >
              {feedback}
            </p>
          )}
        </form>
      </div>
    </section>
  )
}
