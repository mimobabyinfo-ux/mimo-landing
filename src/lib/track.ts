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

export {}
