import dotenv from 'dotenv'
import nodemailer from 'nodemailer'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
dotenv.config({ path: path.resolve(__dirname, '.env') })

const MAIL_TO = process.env.MAIL_TO || 'dibakar.sarkar.402@gmail.com'
const SMTP_USER = process.env.SMTP_USER?.trim()
const SMTP_PASS = process.env.SMTP_PASS?.replace(/\s/g, '')

const transporter =
  SMTP_USER && SMTP_PASS
    ? nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        auth: {
          user: SMTP_USER,
          pass: SMTP_PASS,
        },
      })
    : null

export function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

export function escapeHtml(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
}

export async function sendMail({ subject, html, replyTo }) {
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

export { MAIL_TO }
