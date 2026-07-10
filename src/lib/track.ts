// Lightweight, defensive analytics helper.
// Fires a Meta Pixel custom event when fbq is available; never throws.
// NOTE: the standard "Lead" event still fires on /thank-you.html after a successful submit.
declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void
    gtag?: (...args: unknown[]) => void
  }
}

export function track(event: string, params?: Record<string, unknown>) {
  try {
    if (typeof window !== 'undefined' && typeof window.fbq === 'function') {
      window.fbq('trackCustom', event, params || {})
    }
    if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
      window.gtag('event', event, params || {})
    }
  } catch {
    // analytics must never break the page
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
        track('whatsapp_click', { location })
      } catch {
        // analytics must never break the page
      }
    },
    true,
  )
}

export {}
