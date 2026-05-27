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
                <p>Jagadishpur, Chamrail, Howrah, West Bengal 711114, India</p>
              </div>
            </li>
            <li>
              <span className="contact__icon" aria-hidden="true">📞</span>
              <div>
                <strong>Phone</strong>
                <p>+91 8910645639</p>
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
                <p>Mon – Sat: 10am – 5pm · Sun: off</p>
              </div>
            </li>
          </ul>
          <div className="contact__map" style={{marginTop:30}}>
            <iframe
              title="Aya Center Location"
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d192.08983547379506!2d88.29754078100454!3d22.63994705045624!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sen!2sin!4v1779868216599!5m2!1sen!2sin"
              frameBorder="0"
              allowFullScreen=""
              width="100%"
              height="250"
              zoom="-50"
            />
          </div>
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
