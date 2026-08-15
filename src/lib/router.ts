// Which page are we on? Deliberately tiny — no router dependency, because the
// whole site is three static entry points served by the same SPA bundle.
//
// /            → the main landing page
// /lp?w=...    → the campaign page (one component, two variants)
// /course      → the digital course page
//
// `vercel.json` rewrites every path without a dot (and not under /api) to
// index.html, so a click from an ad straight to /lp?w=discoverers reaches this
// bundle instead of 404ing — no such file exists on disk. Anything we don't
// recognise falls back to the home page rather than rendering nothing.
//
// Note for future edits: vercel.json is validated against a strict schema.
// Extra keys inside a rewrite object (even "comment") fail the whole build.

export type Page = 'home' | 'lp' | 'course'

function normalise(pathname: string): string {
  // strip a trailing slash so "/course/" and "/course" behave the same
  const p = pathname.replace(/\/+$/, '')
  return p === '' ? '/' : p.toLowerCase()
}

export function currentPage(pathname: string = window.location.pathname): Page {
  switch (normalise(pathname)) {
    case '/lp':
      return 'lp'
    case '/course':
      return 'course'
    default:
      return 'home'
  }
}
