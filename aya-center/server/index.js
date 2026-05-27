import express from 'express'
import cors from 'cors'
import { isValidEmail, sendMail, escapeHtml } from '../email.js'

const app = express()
const PORT = process.env.PORT || 3001

app.use(cors({ origin: true }))
app.use(express.json())

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

async function sendMail({ subject, html, replyTo }) {
  if (!transporter) {
    throw new Error('Email server is not configured. Add SMTP credentials to .env')
  }

  await transporter.sendMail({
    from: `"Aya Center Website" <${SMTP_USER}>`,
    to: MAIL_TO,
    replyTo: replyTo || SMTP_USER,
    subject,
    html,
  })
}

app.get('/api/health', (_req, res) => {
  res.json({ ok: true, emailConfigured: Boolean(transporter) })
})

app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, phone, service, message, website } = req.body

    if (website) {
      return res.json({ success: true })
    }

    if (!name?.trim() || !email?.trim() || !isValidEmail(email)) {
      return res.status(400).json({ error: 'Please provide a valid name and email.' })
    }

    const serviceLabel = service || 'Not specified'

    await sendMail({
      subject: `[Aya Center] Appointment request from ${name.trim()}`,
      replyTo: email.trim(),
      html: `
        <h2>New appointment request</h2>
        <p><strong>Name:</strong> ${escapeHtml(name.trim())}</p>
        <p><strong>Email:</strong> ${escapeHtml(email.trim())}</p>
        <p><strong>Phone:</strong> ${escapeHtml(phone?.trim() || '—')}</p>
        <p><strong>Service:</strong> ${escapeHtml(serviceLabel)}</p>
        <p><strong>Message:</strong></p>
        <p>${escapeHtml(message?.trim() || '—').replace(/\n/g, '<br>')}</p>
        <hr>
        <p style="color:#888;font-size:12px;">Sent from Aya Center contact form</p>
      `,
    })

    res.json({ success: true })
  } catch (err) {
    console.error('Contact form error:', err.message)
    if (process.env.NODE_ENV !== 'production') {
      console.error(err)
    }
    const hint = err.message?.includes('not configured')
      ? 'Email is not configured. Stop the server, then run npm run dev again.'
      : 'Failed to send message. Please try again later.'
    res.status(500).json({ error: hint })
  }
})

app.post('/api/newsletter', async (req, res) => {
  try {
    const { email, website } = req.body

    if (website) {
      return res.json({ success: true })
    }

    if (!email?.trim() || !isValidEmail(email)) {
      return res.status(400).json({ error: 'Please provide a valid email address.' })
    }

    await sendMail({
      subject: `[Aya Center] Newsletter signup`,
      replyTo: email.trim(),
      html: `
        <h2>New newsletter subscription</h2>
        <p><strong>Email:</strong> ${escapeHtml(email.trim())}</p>
        <hr>
        <p style="color:#888;font-size:12px;">Sent from Aya Center footer form</p>
      `,
    })

    res.json({ success: true })
  } catch (err) {
    console.error('Newsletter form error:', err.message)
    res.status(500).json({ error: 'Failed to subscribe. Please try again later.' })
  }
})

function escapeHtml(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
}

app.listen(PORT, async () => {
  console.log(`Aya Center API running at http://localhost:${PORT}`)
  console.log(`Emails will be sent to: ${MAIL_TO}`)

  if (transporter) {
    try {
      await transporter.verify()
      console.log('✓ Gmail SMTP connected successfully')
    } catch (err) {
      console.error('✗ Gmail SMTP connection failed:', err.message)
      console.error('  Check SMTP_PASS in .env (use a Gmail App Password, not your login password).')
    }
  }
})
