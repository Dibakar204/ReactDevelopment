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
    const { email, website } = await parseBody(req)

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
    console.error('Newsletter API error:', err?.message || err)
    res.status(500).json({ error: 'Failed to subscribe. Please try again later.' })
  }
}
