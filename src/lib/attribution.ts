// Ad attribution: which ad brought which lead.
//
// Meta appends utm_* to the landing URL. Those params are only on the FIRST
// URL a visitor lands on — if she scrolls, opens the FAQ and only then fills
// the form, the params are still in the address bar, but if she navigates
// between our pages they are gone. So we snapshot them into sessionStorage on
// first load and read that snapshot at submit time.

const KEY = 'mimo_attribution'

export type Attribution = {
  utm_source: string | null
  utm_medium: string | null
  utm_campaign: string | null
  utm_content: string | null
  utm_term: string | null
  /** Meta's click id, present on most ad clicks even when utm_* are missing. */
  fbclid: string | null
  /** Which of our pages she landed on, e.g. "/lp?w=discoverers". */
  landing_path: string | null
  referrer: string | null
}

const EMPTY: Attribution = {
  utm_source: null,
  utm_medium: null,
  utm_campaign: null,
  utm_content: null,
  utm_term: null,
  fbclid: null,
  landing_path: null,
  referrer: null,
}

function read(params: URLSearchParams, key: string): string | null {
  const v = params.get(key)
  if (!v) return null
  // Keep the column sane if someone hand-crafts a monstrous URL.
  return v.slice(0, 200)
}

/**
 * Call once on boot. Stores the first-touch params for the rest of the session.
 * Never throws: private-mode Safari can make sessionStorage unavailable.
 */
export function captureAttribution(): void {
  try {
    const params = new URLSearchParams(window.location.search)
    const incoming: Attribution = {
      utm_source: read(params, 'utm_source'),
      utm_medium: read(params, 'utm_medium'),
      utm_campaign: read(params, 'utm_campaign'),
      utm_content: read(params, 'utm_content'),
      utm_term: read(params, 'utm_term'),
      fbclid: read(params, 'fbclid'),
      landing_path: (window.location.pathname + window.location.search).slice(0, 200),
      referrer: document.referrer ? document.referrer.slice(0, 200) : null,
    }

    const hasAnyParam =
      incoming.utm_source ||
      incoming.utm_medium ||
      incoming.utm_campaign ||
      incoming.utm_content ||
      incoming.utm_term ||
      incoming.fbclid

    // First touch wins: don't let an internal navigation blank out the ad that
    // actually brought her. Only overwrite when this load carries real params.
    const stored = sessionStorage.getItem(KEY)
    if (stored && !hasAnyParam) return

    sessionStorage.setItem(KEY, JSON.stringify(incoming))
  } catch {
    // attribution must never break the page
  }
}

export function getAttribution(): Attribution {
  try {
    const raw = sessionStorage.getItem(KEY)
    if (!raw) return EMPTY
    return { ...EMPTY, ...(JSON.parse(raw) as Partial<Attribution>) }
  } catch {
    return EMPTY
  }
}
