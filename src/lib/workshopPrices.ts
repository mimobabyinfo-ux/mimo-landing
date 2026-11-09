import { useEffect, useState } from 'react'
import { supabase } from './supabase'
import { REGISTER } from './registerLinks'

// Prices come from the app (workshops.price) so the page can never drift
// from what the app charges. Brenda 9.11.26, after hoo.be still showed 800
// instead of 949. One RPC call per page load, for every workshop in
// REGISTER, through `get_public_workshop_prices` (SECURITY DEFINER, returns
// only id, price and public_registration of active workshops).
//
// The prices written in the page stay as the fallback: shown on first paint
// and whenever the DB does not answer, so the page never renders empty.

export type PriceInfo = { price: number; publicRegistration: boolean }

let cache: Promise<Record<string, PriceInfo>> | null = null

function idFromLink(link: string): string | null {
  const m = link.match(/[?&]register=([0-9a-fA-F-]{36})/)
  return m ? m[1] : null
}

function loadAll(): Promise<Record<string, PriceInfo>> {
  if (cache) return cache
  const ids = Object.values(REGISTER).map(idFromLink).filter((x): x is string => !!x)
  cache = (async () => {
    if (!supabase) return {}
    const { data, error } = await supabase.rpc('get_public_workshop_prices', { p_workshop_ids: ids })
    if (error || !data) return {}
    const out: Record<string, PriceInfo> = {}
    for (const r of data as { id: string; price: number | string | null; public_registration: boolean }[]) {
      if (r.price == null) continue
      out[r.id] = { price: Number(r.price), publicRegistration: r.public_registration }
    }
    return out
  })()
  return cache
}

/** Live price info for a register link, or undefined until it arrives. */
export function usePriceInfo(registerLink: string): PriceInfo | undefined {
  const [info, setInfo] = useState<PriceInfo | undefined>(undefined)
  useEffect(() => {
    const id = idFromLink(registerLink)
    if (!id) return
    let cancelled = false
    loadAll().then(all => { if (!cancelled) setInfo(all[id]) })
    return () => { cancelled = true }
  }, [registerLink])
  return info
}

/** "949 ₪" from the DB, or the fallback written in the page. */
export function priceText(info: PriceInfo | undefined, fallback: string): string {
  return info ? `${info.price.toLocaleString('he-IL')} ₪` : fallback
}
