import type { VercelRequest, VercelResponse } from '@vercel/node'

// CRM webhook. Prefer the More Than (GoHighLevel) inbound-webhook when configured;
// fall back to the legacy Make.com hook only if the More Than URL isn't set.
// Set MORE_THAN_WEBHOOK_URL in the Vercel env to the workflow's Inbound Webhook URL.
const CRM_WEBHOOK_URL =
  process.env.MORE_THAN_WEBHOOK_URL ||
  'https://services.leadconnectorhq.com/hooks/zcdg19h82AGIAbya6T0r/webhook-trigger/95621202-05c6-46c1-9abe-333618e519c5'

// Minimal HTML escaping so submitted text can't break the email markup.
function esc(value: unknown): string {
  return String(value ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
}

type Lead = {
  fullName: string
  phone: string
  email: string
  notes: string
  submittedAt: string
}

// Email notification via Resend. Returns 'sent' | 'skipped' | 'failed'.
async function sendEmail(lead: Lead): Promise<'sent' | 'skipped' | 'failed'> {
  const apiKey = process.env.RESEND_API_KEY
  const to = process.env.LEADS_EMAIL
  if (!apiKey || !to) return 'skipped'

  const html = `
    <div dir="rtl" style="font-family: Arial, 'Helvetica Neue', sans-serif; line-height: 1.7; color: #3A352E;">
      <h2 style="color: #A35C3D; margin-bottom: 16px;">ליד חדש מהאתר 🤍</h2>
      <p><strong>שם מלא:</strong> ${esc(lead.fullName) || '—'}</p>
      <p><strong>טלפון:</strong> ${esc(lead.phone) || '—'}</p>
      <p><strong>אימייל:</strong> ${esc(lead.email) || '—'}</p>
      <p><strong>הערות:</strong> ${esc(lead.notes) || '—'}</p>
      <hr style="border: none; border-top: 1px solid #DCD4C8; margin: 20px 0;" />
      <p style="color: #818267; font-size: 13px;">נשלח: ${esc(lead.submittedAt)}</p>
    </div>
  `

  try {
    const r = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: { Authorization: `Bearer ${apiKey}`, 'Content-Type': 'application/json' },
      body: JSON.stringify({ from: 'onboarding@resend.dev', to, subject: 'ליד חדש מהאתר 🤍', html }),
    })
    return r.ok ? 'sent' : 'failed'
  } catch {
    return 'failed'
  }
}

// Forward the lead to the Make.com (CRM) webhook. Returns 'sent' | 'failed'.
async function sendToCrm(lead: Lead): Promise<'sent' | 'failed'> {
  try {
    // Send the raw contact fields (first_name/phone/email) so the More Than
    // inbound webhook can create/update the contact directly, plus the original
    // camelCase fields for backward compatibility with the Make hook.
    const r = await fetch(CRM_WEBHOOK_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        first_name: lead.fullName,
        full_name: lead.fullName,
        phone: lead.phone,
        email: lead.email,
        notes: lead.notes,
        fullName: lead.fullName,
        submittedAt: lead.submittedAt,
        source: 'mimo-landing',
        tag: 'ליד מהאתר',
      }),
    })
    return r.ok ? 'sent' : 'failed'
  } catch {
    return 'failed'
  }
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST')
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const body = (req.body ?? {}) as Record<string, string>
  const lead: Lead = {
    fullName: body.fullName ?? '',
    phone: body.phone ?? '',
    email: body.email ?? '',
    notes: body.notes ?? '',
    submittedAt: new Date().toLocaleString('he-IL', { timeZone: 'Asia/Jerusalem' }),
  }

  // Fire both notifications independently — one failing never blocks the other.
  const [email, crm] = await Promise.all([sendEmail(lead), sendToCrm(lead)])

  return res.status(200).json({ ok: true, email, crm })
}
