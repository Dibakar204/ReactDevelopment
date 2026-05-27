import { isValidEmail, sendMail, escapeHtml } from '../email.js'

async function parseBody(req) {
  if (req.body) return req.body

  let raw = ''
  for await (const chunk of req) {
    raw += chunk
  }

  if (!raw) return {}

  try {
    return JSON.parse(raw)
  } catch {
    return {}
  }
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  try {
    const { name, email, phone, service, message, website } = await parseBody(req)

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
    console.error('Contact API error:', err?.message || err)
    res.status(500).json({ error: 'Failed to send message. Please try again later.' })
  }
}
