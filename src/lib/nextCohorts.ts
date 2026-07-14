import { supabase } from './supabase'

// Nearest-cohort info for the landing page. Pulls upcoming cohorts from
// the app's Supabase (same project) via the public RPC `get_public_cohorts`
// (SECURITY DEFINER; returns only active, future cohorts with effective
// capacity + current registration count). The landing shows ONE line per
// workshop — the nearest cohort with room; if the nearest is full, the
// next open one; if everything is full, a "full" state.

type PublicCohortRow = {
  id: string
  workshop_id: string
  start_date: string        // YYYY-MM-DD
  start_time: string | null // HH:MM:SS
  label: string | null
  capacity: number | null
  registered_count: number
}

export type NextCohortInfo =
  // Nearest cohort has room. spotsLeft is null when capacity is unlimited.
  | { kind: 'open'; date: string; time: string | null; spotsLeft: number | null }
  // Nearest cohort is full, but a later one has room.
  | { kind: 'nearest-full'; nextOpenDate: string }
  // Cohorts exist but all are full.
  | { kind: 'all-full' }

function ddmm(dateStr: string): string {
  const [, m, d] = dateStr.split('-')
  return `${parseInt(d, 10)}.${parseInt(m, 10)}`
}

export async function fetchNextCohorts(
  workshopIds: string[],
): Promise<Record<string, NextCohortInfo>> {
  if (!supabase || workshopIds.length === 0) return {}
  const { data, error } = await supabase.rpc('get_public_cohorts', {
    p_workshop_ids: workshopIds,
  })
  if (error || !data) return {}

  const byWorkshop = new Map<string, PublicCohortRow[]>()
  for (const row of data as PublicCohortRow[]) {
    const list = byWorkshop.get(row.workshop_id)
    if (list) list.push(row)
    else byWorkshop.set(row.workshop_id, [row])
  }

  const result: Record<string, NextCohortInfo> = {}
  for (const [wid, rows] of byWorkshop) {
    // RPC returns rows ordered by start_date, start_time.
    const firstOpen = rows.find(
      r => r.capacity == null || r.registered_count < r.capacity,
    )
    if (!firstOpen) {
      result[wid] = { kind: 'all-full' }
    } else if (firstOpen === rows[0]) {
      result[wid] = {
        kind: 'open',
        date: ddmm(firstOpen.start_date),
        time: firstOpen.start_time ? firstOpen.start_time.slice(0, 5) : null,
        spotsLeft:
          firstOpen.capacity != null
            ? firstOpen.capacity - firstOpen.registered_count
            : null,
      }
    } else {
      result[wid] = { kind: 'nearest-full', nextOpenDate: ddmm(firstOpen.start_date) }
    }
  }
  return result
}
