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

/**
 * Append the stored first-touch attribution to an outbound URL, so the ad
 * identity survives the hop to the app (mimo-baby.co.il). Never throws.
 */
export function withAttribution(url: string): string {
  try {
    const a = getAttribution()
    const u = new URL(url)
    const pairs: Array<[string, string | null]> = [
      ['utm_source', a.utm_source],
      ['utm_medium', a.utm_medium],
      ['utm_campaign', a.utm_campaign],
      ['utm_content', a.utm_content],
      ['utm_term', a.utm_term],
      ['fbclid', a.fbclid],
    ]
    for (const [k, v] of pairs) if (v && !u.searchParams.has(k)) u.searchParams.set(k, v)
    return u.toString()
  } catch {
    return url
  }
}

/**
 * Call once on boot. Rewrites, at click time, every <a> that leads to the app
 * so it carries the stored utm_* / fbclid. Covers current and future links
 * (register buttons, sticky bars, price cards) without touching each page.
 */
export function initOutboundAttribution(): void {
  try {
    document.addEventListener(
      'click',
      (e) => {
        const el = (e.target as Element | null)?.closest?.('a[href]')
        if (!el) return
        const href = el.getAttribute('href') ?? ''
        if (!href.startsWith('https://mimo-baby.co.il')) return
        el.setAttribute('href', withAttribution(href))
      },
      true,
    )
  } catch {
    // attribution must never break the page
  }
}
