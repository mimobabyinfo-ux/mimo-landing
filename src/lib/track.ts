import { getAttribution } from './attribution'

// Lightweight, defensive analytics helper.
// Fires a Meta Pixel custom event when fbq is available; never throws.
// NOTE: the standard "Lead" event still fires on /thank-you.html after a successful submit.
declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void
    gtag?: (...args: unknown[]) => void
  }
}

// Which page fired the event: 'home' | 'swaddled' | 'discoverers' | 'course'.
// Set once on boot so every event carries it without each call site repeating
// itself. That's what lets the reports compare conversion between the two ages.
let pageVariant = 'home'

// Guard so React StrictMode's double-mount (and any re-render) can't double-count.
let viewContentFired = false

export function setTrackingVariant(variant: string) {
  pageVariant = variant
  // Fire the STANDARD ViewContent event once per page load.
  // Why this matters: the ad campaigns optimise toward ViewContent, and until
  // now the site never fired it — so Meta was optimising toward an event with
  // zero instances and had nothing to learn from. PageView alone is not enough.
  if (!viewContentFired) {
    viewContentFired = true
    trackStandard('ViewContent', { content_name: variant })
  }
}

// Standard Meta Pixel events (ViewContent, InitiateCheckout, Purchase...).
// Distinct from track() below, which sends CUSTOM events via trackCustom.
// Meta can only optimise delivery toward STANDARD events, so anything we want
// the campaigns to bid on has to go through here.
export function trackStandard(event: string, params?: Record<string, unknown>) {
  try {
    const payload = { variant: pageVariant, ...(params || {}) }
    if (typeof window !== 'undefined' && typeof window.fbq === 'function') {
      window.fbq('track', event, payload)
    }
    if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
      window.gtag('event', event, payload)
    }
  } catch {
    // analytics must never break the page
  }
}

export function track(event: string, params?: Record<string, unknown>) {
  try {
    const payload = { variant: pageVariant, ...(params || {}) }
    if (typeof window !== 'undefined' && typeof window.fbq === 'function') {
      window.fbq('trackCustom', event, payload)
    }
    if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
      window.gtag('event', event, payload)
    }
  } catch {
    // analytics must never break the page
  }
}

// Which ad brought her, as a short tag to append to the WhatsApp message.
// Empty for organic visitors, so their message stays exactly as written.
function adTag(): string {
  const a = getAttribution()
  const name = a.utm_content || a.utm_campaign
  if (name) return name.slice(0, 80)
  if (a.fbclid) return 'מודעה בתשלום'
  return ''
}

// Stamp the ad name into the prefilled WhatsApp text, so a lead who taps the
// button instead of filling the form is still attributable in the CRM.
// The tag is APPENDED — the existing "הגעתי דרך האתר" phrase must stay intact
// because the More Than workflow triggers on it with a "contains" match.
const AD_SEPARATOR = ' · מקור: '
function stampWhatsAppLink(link: HTMLAnchorElement): void {
  try {
    const tag = adTag()
    if (!tag) return
    const url = new URL(link.href)
    const text = url.searchParams.get('text') || ''
    if (text.includes(AD_SEPARATOR)) return // already stamped, e.g. a second click
    url.searchParams.set('text', text + AD_SEPARATOR + tag)
    link.href = url.toString()
  } catch {
    // a broken tag must never break the link to Brenda
  }
}

// Global, delegation-based tracking for EVERY WhatsApp link on the page.
// One document-level listener (capture phase) catches clicks on any <a href*="wa.me">,
// including links added later — no need to wire onClick per component.
// Links open in a new tab (target="_blank"), so the pixel request always has time to fire.
let waTrackingInitialized = false
export function initWhatsAppClickTracking() {
  if (waTrackingInitialized || typeof document === 'undefined') return
  waTrackingInitialized = true
  document.addEventListener(
    'click',
    (e) => {
      try {
        const target = e.target as Element | null
        const link = target?.closest?.('a[href*="wa.me"]') as HTMLAnchorElement | null
        if (!link) return
        // location: explicit data attribute > nearest section id > generic
        const explicit = link.closest('[data-wa-location]')?.getAttribute('data-wa-location')
        const section = link.closest('section[id], footer, header')
        const location =
          explicit ||
          (section?.id ? section.id : section?.tagName?.toLowerCase()) ||
          'page'
        // Rewrite the href before the browser follows it (capture phase).
        stampWhatsAppLink(link)
        track('whatsapp_click', { location })
      } catch {
        // analytics must never break the page
      }
    },
    true,
  )
}

export {}
