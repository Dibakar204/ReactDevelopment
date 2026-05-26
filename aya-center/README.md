# Aya Center — Ayurveda & Wellness

A modern marketing site for an Ayurvedic wellness center, built with **React**, **Vite**, and a small **Express** API for form emails.

## Getting started

```bash
cd aya-center
npm install
```

### Email setup (required for forms)

Form submissions are sent to your Gmail via the API server.

1. Copy `.env.example` to `.env` in the project root.
2. Enable **2-Step Verification** on your Google account.
3. Create a **Gmail App Password**: [Google App Passwords](https://myaccount.google.com/apppasswords) → choose “Mail” → generate a 16-character password.
4. Edit `.env`:

```env
SMTP_USER=dibakar.sarkar.402@gmail.com
SMTP_PASS=xxxx xxxx xxxx xxxx
MAIL_TO=dibakar.sarkar.402@gmail.com
PORT=3001
```

5. Start the app (runs both the website and email API):

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173). Submit the contact or newsletter form — you should receive an email at `MAIL_TO`.

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Frontend + email API |
| `npm run dev:client` | Vite only |
| `npm run dev:server` | Email API only |
| `npm run build` | Production frontend build |
| `npm run preview` | Preview production build |

## Routes

| Path | Page |
|------|------|
| `/` | Home |
| `/about` | About |
| `/services` | Services |
| `/treatments` | Treatments |
| `/stories` | Guest stories |
| `/contact` | Contact |

## Forms

| Form | Endpoint | Email subject |
|------|----------|---------------|
| Contact (appointment) | `POST /api/contact` | `[Aya Center] Appointment request from …` |
| Newsletter (footer) | `POST /api/newsletter` | `[Aya Center] Newsletter signup` |

## Project structure

```
server/         # Express + Nodemailer (Gmail)
src/
  api/          # Form fetch helpers
  components/
  pages/
  layouts/
```

## Production deployment

Deploy the **frontend** (`dist/`) and the **API** (`server/`) separately. Set the same env vars on your host (Render, Railway, etc.) and point the frontend at the API with:

```env
VITE_API_URL=https://your-api.example.com
```

## Design

- Palette: forest green, sage, cream, gold accents
- Fonts: Cormorant Garamond (headings), Outfit (body)
- Fully responsive with mobile navigation
