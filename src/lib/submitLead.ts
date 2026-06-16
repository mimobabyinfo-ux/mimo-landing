import { supabase } from './supabase'

export type Lead = {
  fullName: string
  phone: string
  email: string
  notes: string
}

// Shared lead pipeline used by BOTH the Hero mini-form and the main ContactForm.
// Priority: save the lead to Supabase. Bonus: notify (email + CRM webhook) — never blocks success.
export async function submitLead(lead: Lead): Promise<{ ok: boolean }> {
  if (!supabase) return { ok: false }

  const { error } = await supabase.from('leads').insert({
    first_name: lead.fullName,
    phone: lead.phone,
    email: lead.email,
    notes: lead.notes,
  })
  if (error) return { ok: false }

  // NOTE: the Meta Pixel "Lead" event is intentionally NOT fired here.
  // Per marketing, it fires on the dedicated thank-you page (/thank-you.html),
  // which the forms redirect to after a successful submit.

  try {
    await fetch('/api/lead', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        fullName: lead.fullName,
        phone: lead.phone,
        email: lead.email,
        notes: lead.notes,
      }),
    })
  } catch {
    // ignore — the lead is already saved, the notifications are a bonus
  }

  return { ok: true }
}
