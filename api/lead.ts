import type { VercelRequest, VercelResponse } from '@vercel/node'

// Minimal HTML escaping so submitted text can't break the email markup.
function esc(value: unknown): string {
  return String(value ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST')
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const apiKey = process.env.RESEND_API_KEY
  const to = process.env.LEADS_EMAIL
  if (!apiKey || !to) {
    return res.status(500).json({ error: 'Email is not configured (missing RESEND_API_KEY or LEADS_EMAIL)' })
  }

  const { firstName, lastName, phone, email, notes } = (req.body ?? {}) as Record<string, string>

  const submittedAt = new Date().toLocaleString('he-IL', { timeZone: 'Asia/Jerusalem' })

  const html = `
    <div dir="rtl" style="font-family: Arial, 'Helvetica Neue', sans-serif; line-height: 1.7; color: #3A352E;">
      <h2 style="color: #A35C3D; margin-bottom: 16px;">ליד חדש מהאתר 🤍</h2>
      <p><strong>שם פרטי:</strong> ${esc(firstName) || '—'}</p>
      <p><strong>שם משפחה:</strong> ${esc(lastName) || '—'}</p>
      <p><strong>טלפון:</strong> ${esc(phone) || '—'}</p>
      <p><strong>אימייל:</strong> ${esc(email) || '—'}</p>
      <p><strong>הערות:</strong> ${esc(notes) || '—'}</p>
      <hr style="border: none; border-top: 1px solid #DCD4C8; margin: 20px 0;" />
      <p style="color: #818267; font-size: 13px;">נשלח: ${esc(submittedAt)}</p>
    </div>
  `

  try {
    const r = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'onboarding@resend.dev',
        to,
        subject: 'ליד חדש מהאתר 🤍',
        html,
      }),
    })

    if (!r.ok) {
      const detail = await r.text()
      return res.status(502).json({ error: 'Email send failed', detail })
    }

    return res.status(200).json({ ok: true })
  } catch (err) {
    return res.status(502).json({ error: 'Email send failed', detail: String(err) })
  }
}
