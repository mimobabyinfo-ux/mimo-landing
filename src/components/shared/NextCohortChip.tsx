import { useEffect, useState } from 'react'
import { fetchNextCohorts, type NextCohortInfo } from '../../lib/nextCohorts'

/** Pulls the workshop UUID out of a register link so we can ask the DB about it. */
export function workshopIdFromLink(link: string): string | null {
  const m = link.match(/[?&]register=([0-9a-fA-F-]{36})/)
  return m ? m[1] : null
}

/**
 * Nearest-cohort info for one workshop, straight from the app's DB.
 * Returns undefined until the fetch resolves, or if there's no live data.
 */
export function useNextCohort(registerLink: string): NextCohortInfo | undefined {
  const [info, setInfo] = useState<NextCohortInfo | undefined>(undefined)

  useEffect(() => {
    const id = workshopIdFromLink(registerLink)
    if (!id) return
    let cancelled = false
    fetchNextCohorts([id]).then((res) => {
      if (!cancelled) setInfo(res[id])
    })
    return () => {
      cancelled = true
    }
  }, [registerLink])

  return info
}

export function cohortText(info: NextCohortInfo | undefined): string {
  if (!info) return 'מקומות מוגבלים'
  if (info.kind === 'open') {
    const when = `${info.date}${info.time ? ` · ${info.time}` : ''}`
    const spots =
      info.spotsLeft == null
        ? 'ההרשמה פתוחה'
        : info.spotsLeft === 1
          ? 'מקום אחרון!'
          : info.spotsLeft <= 3
            ? `נותרו ${info.spotsLeft} מקומות`
            : 'ההרשמה פתוחה'
    return `המחזור הקרוב: ${when} · ${spots}`
  }
  if (info.kind === 'nearest-full') {
    return `המחזור הקרוב מלא · מחזור חדש נפתח ב-${info.nextOpenDate}`
  }
  return 'המחזורים הקרובים מלאים · דברי איתי ונמצא פתרון'
}

// The static "מקומות מוגבלים" is only a fallback for when the DB has nothing
// to say — a real date and a real number of spots do far more work.
export default function NextCohortChip({ info }: { info: NextCohortInfo | undefined }) {
  return (
    <span
      className="inline-block rounded-full px-3 py-1.5 text-[12.5px] font-bold"
      style={{ background: '#E7C78A33', color: '#A35C3D' }}
    >
      {cohortText(info)}
    </span>
  )
}
