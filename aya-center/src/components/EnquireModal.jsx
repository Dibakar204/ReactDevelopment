import { useEffect, useState } from 'react'
import { submitContactForm } from '../api/forms'
import './EnquireModal.css'
import './FormFeedback.css'

const initialForm = {
  name: '',
  email: '',
  phone: '',
  message: '',
}

export default function EnquireModal({ isOpen, onClose }) {
  const [form, setForm] = useState(initialForm)
  const [status, setStatus] = useState('idle')
  const [feedback, setFeedback] = useState('')

  useEffect(() => {
    if (!isOpen) return

    const onKey = (e) => {
      if (e.key === 'Escape') onClose()
    }

    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKey)

    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
    }
  }, [isOpen, onClose])

  useEffect(() => {
    if (!isOpen) {
      setForm(initialForm)
      setStatus('idle')
      setFeedback('')
    }
  }, [isOpen])

  if (!isOpen) return null

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
        service: 'General enquiry',
        message: form.message,
        website: '',
      })
      setStatus('success')
      setFeedback('Thank you! We will get back to you soon.')
      setForm(initialForm)
      setTimeout(() => onClose(), 2000)
    } catch (err) {
      setStatus('error')
      setFeedback(err.message)
    }
  }

  return (
    <div className="enquire-modal" role="presentation">
      <button
        type="button"
        className="enquire-modal__backdrop"
        aria-label="Close enquiry form"
        onClick={onClose}
      />
      <div
        className="enquire-modal__dialog"
        role="dialog"
        aria-modal="true"
        aria-labelledby="enquire-modal-title"
      >
        <button
          type="button"
          className="enquire-modal__close"
          aria-label="Close"
          onClick={onClose}
        >
          ×
        </button>

        <div className="enquire-modal__header">
          <span className="section-label">Get in touch</span>
          <h2 id="enquire-modal-title">Enquire now</h2>
          <p>Share your details and we&apos;ll respond within one business day.</p>
        </div>

        <form className="enquire-modal__form" onSubmit={handleSubmit}>
          <div className="form-honeypot" aria-hidden="true">
            <input type="text" name="website" tabIndex={-1} autoComplete="off" />
          </div>
          <label>
            <span>Full name</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Your name"
              required
              autoFocus
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
          <label>
            <span>Message</span>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              rows={3}
              placeholder="How can we help you?"
            />
          </label>
          <button
            type="submit"
            className="btn btn-primary enquire-modal__submit"
            disabled={status === 'loading'}
          >
            {status === 'loading' ? 'Sending…' : 'Send enquiry'}
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
    </div>
  )
}
