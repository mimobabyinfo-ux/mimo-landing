import { supabase } from './supabase'

export type Lead = {
  first_name: string
  last_name: string
  phone: string
  email: string
  notes: string
}

// Shared lead pipeline used by BOTH the Hero mini-form and the main ContactForm.
// Priority: save the lead to Supabase. Bonus: trigger the Resend email (never blocks success).
export async function submitLead(lead: Lead): Promise<{ ok: boolean }> {
  if (!supabase) return { ok: false }

  const { error } = await supabase.from('leads').insert(lead)
  if (error) return { ok: false }

  try {
    await fetch('/api/lead', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        firstName: lead.first_name,
        lastName: lead.last_name,
        phone: lead.phone,
        email: lead.email,
        notes: lead.notes,
      }),
    })
  } catch {
    // ignore — the lead is already saved, the email is a bonus
  }

  return { ok: true }
}
