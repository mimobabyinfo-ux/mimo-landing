import { supabase } from './supabase'
import { getAttribution } from './attribution'

export type Lead = {
  fullName: string
  phone: string
  email: string
  notes: string
  /** Which page the form was on: home | swaddled | discoverers | course. */
  pageVariant?: string
}

// Shared lead pipeline used by every form on every page.
// Priority: save the lead to Supabase. Bonus: notify (email + CRM webhook) — never blocks success.
export async function submitLead(lead: Lead): Promise<{ ok: boolean }> {
  if (!supabase) return { ok: false }

  const attribution = getAttribution()

  const { error } = await supabase.from('leads').insert({
    first_name: lead.fullName,
    phone: lead.phone,
    email: lead.email,
    notes: lead.notes,
    // Ad attribution — nullable columns, so an organic visitor just stores nulls.
    page_variant: lead.pageVariant ?? null,
    utm_source: attribution.utm_source,
    utm_medium: attribution.utm_medium,
    utm_campaign: attribution.utm_campaign,
    utm_content: attribution.utm_content,
    utm_term: attribution.utm_term,
    fbclid: attribution.fbclid,
    landing_path: attribution.landing_path,
    referrer: attribution.referrer,
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
        pageVariant: lead.pageVariant ?? '',
        ...attribution,
      }),
    })
  } catch {
    // ignore — the lead is already saved, the notifications are a bonus
  }

  return { ok: true }
}
