const API_BASE = import.meta.env.VITE_API_URL || ''

async function postJson(path, body) {
  const res = await fetch(`${API_BASE}${path}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  })

  const data = await res.json().catch(() => ({}))

  if (!res.ok) {
    throw new Error(data.error || 'Something went wrong. Please try again.')
  }

  return data
}

export function submitContactForm(formData) {
  return postJson('/api/contact', formData)
}

export function submitNewsletter(email) {
  return postJson('/api/newsletter', { email })
}
