import { useEffect, useState } from 'react'
import Reveal from './Reveal'
import MoreServices from './MoreServices'
import { fetchNextCohorts, type NextCohortInfo } from '../lib/nextCohorts'
import { track } from '../lib/track'
import { REGISTER } from '../lib/registerLinks'

// "חברה מביאה חברה" — both friends get 10% off when signing up together.
const PROMO_MESSAGE = 'היי ברנדה! אנחנו חברות שרוצות להירשם יחד לסדנה ולקבל את ההנחה 💛'
const PROMO_URL = `https://wa.me/972533041277?text=${encodeURIComponent(PROMO_MESSAGE)}`

type Workshop = {
  title: string
  age: string
  meta: string
  price: string
  priceNote: string
  bullets: string[]
  link: string
  description: string
}

const workshops: Workshop[] = [
  {
    title: 'סדנת עטופים · ליווי התפתחותי',
    age: 'מלידה עד 3.5 חודשים',
    meta: '5 מפגשים של שעה וחצי · קבוצה של עד 8 אמהות',
    price: '800 ₪',
    priceNote: 'לכל הסדנה',
    bullets: [
      'הסתגלות הדרגתית מהרחם אל העולם',
      'עידוד שכיבה על הבטן וחיזוק השרירים',
      'כלים להרגעה, הרפיה והקלה על גזים',
      'קבוצת וואטסאפ עם סיכומים ומתנה בסיום',
    ],
    link: REGISTER.swaddled,
    description: `מה נלמד ונחווה:
• ניצול חלונות ערות
• חיבור ותקשורת דרך מגע, קול ומבט
• חשיפה למרקמים וחוויות תחושתיות
• שימוש בפוף, מנשא בד וכדור פיזיו
• שיווי משקל ותנועה במרחב

כולל קבוצת וואטסאפ עם סיכומים וליווי בין המפגשים, זמן בגינה הירוקה של מימו עם קפה ונשנושים, ומתנה אישית בסיום.
הסטודיו: אבא אחימאיר 10, רמת גן (שיכון ותיקים).`,
  },
  {
    title: 'סדנת מגלים · ליווי התפתחותי',
    age: 'מגיל 3/3.5 עד 6 חודשים',
    meta: '5 מפגשים של שעה וחצי · קבוצה של עד 8 אמהות',
    price: '800 ₪',
    priceNote: 'לכל הסדנה',
    bullets: [
      'גיל 4 חודשים המופלא והשינויים שמגיעים איתו',
      'התהפכות מהבטן לגב ומהגב לבטן',
      'הכנת הגוף לקראת זחילה',
      'קבוצת וואטסאפ עם סיכומים ומתנה בסיום',
    ],
    link: REGISTER.discoverers,
    description: `מה נלמד ונחווה:
• עידוד שכיבה על הבטן וחיזוק חגורת הכתפיים
• חשיבות קו האמצע וחצייתו
• גילוי כפות הידיים והרגליים ומודעות לגוף
• העברות משקל, שיווי משקל ותנועה במרחב
• מרקמים, משחקי תקשורת וחוויות תחושתיות
• שימוש בפוף, כדור פיזיו ואביזרים מהבית
• כלים להרגעה, הרפיה וזמן איכות משותף

זמן בשבילך בגינה הירוקה של מימו, עם קפה ונשנושים מפנקים ממני, ומתנה אישית בסיום הסדנה.
הסטודיו: אבא אחימאיר 10, רמת גן.`,
  },
  {
    title: 'סדנת עיסוי תינוקות',
    age: 'מלידה עד טרום זחילה',
    meta: '3 מפגשים של שעה ורבע · קבוצה של עד 7 אמהות',
    price: '450 ₪',
    priceNote: 'לכל הסדנה',
    bullets: [
      'לימוד עיסוי תינוקות צעד אחר צעד',
      'עזרה במצבים של גזים, כאבי בטן וקושי להירדם',
      'כלים פשוטים שתומכים בהתפתחות של הבייבי',
      'בונוס: ספר הליווי הדיגיטלי של מימו',
    ],
    link: REGISTER.massage,
    description: `מה כוללת הסדנה:
• עיסוי בצורה נעימה ובטוחה לאזורים שונים בגוף: רגליים, ידיים, בטן, בית חזה, גב, עורף, טוסיק ופנים
• קבוצת וואטסאפ עם סיכומים וליווי בין המפגשים
• זמן בגינה הירוקה של מימו עם קפה ונשנושים
• מתנה אישית בסיום

בונוס מיוחד למשתתפות: "ספר הליווי הדיגיטלי של מימו" - הסברים, שלבי העיסוי וסרטונים שבהם אני מדגימה, כדי שתוכלי לחזור לזה גם בבית.
הסטודיו: אבא אחימאיר 10, רמת גן (שיכון ותיקים).`,
  },
]

// Extract the app workshop-id out of a register link so the nearest-cohort
// lookup can key on it.
function workshopIdFromLink(link: string): string | null {
  const m = link.match(/[?&]register=([0-9a-f-]{36})/)
  return m ? m[1] : null
}

// One-line live status chip: nearest cohort date + availability, straight
// from the app's DB. When there's no live data, the quiet static cue shows.
function NextCohortChip({ info }: { info: NextCohortInfo | undefined }) {
  if (!info) {
    return (
      <span
        className="inline-block text-xs font-semibold px-2.5 py-0.5 rounded-full"
        style={{ background: '#E7C78A33', color: '#A35C3D' }}
      >
        מקומות מוגבלים
      </span>
    )
  }
  let text: string
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
    text = `המחזור הקרוב: ${when} · ${spots}`
  } else if (info.kind === 'nearest-full') {
    text = `המחזור הקרוב מלא · מחזור חדש נפתח ב-${info.nextOpenDate}`
  } else {
    text = 'המחזורים הקרובים מלאים · דברי איתי ונמצא פתרון'
  }
  return (
    <span
      className="inline-block text-xs font-bold px-2.5 py-0.5 rounded-full"
      style={{ background: '#E7C78A33', color: '#A35C3D' }}
    >
      {text}
    </span>
  )
}

function WorkshopCard({
  w,
  cohortInfo,
}: {
  w: Workshop
  cohortInfo: NextCohortInfo | undefined
}) {
  const [open, setOpen] = useState(false)

  return (
    <div
      className="rounded-[26px] border overflow-hidden flex flex-col h-full"
      style={{ background: '#FFFDF8', borderColor: '#E6DFD3' }}
    >
      <div className="px-[22px] pt-[22px] flex flex-col items-start gap-1.5">
        <span
          className="inline-block text-xs font-extrabold px-[11px] py-[5px] rounded-full"
          style={{ color: '#A35C3D', background: '#E7C78A40' }}
        >
          {w.age}
        </span>
        <NextCohortChip info={cohortInfo} />
        <h3 className="m-0 mt-1.5 text-[21px] font-black" style={{ color: '#3A352E', lineHeight: 1.25 }}>
          {w.title}
        </h3>
        <p className="m-0 text-sm" style={{ color: '#818267', lineHeight: 1.55 }}>
          {w.meta}
        </p>
      </div>

      <div className="px-[22px] pt-4 flex items-baseline gap-2">
        <span className="text-[28px] font-black" style={{ color: '#A35C3D' }}>
          {w.price}
        </span>
        <span className="text-[13px]" style={{ color: '#818267' }}>
          {w.priceNote}
        </span>
      </div>

      <div className="px-[22px] pt-3.5 flex flex-col gap-2">
        {w.bullets.map((b) => (
          <div key={b} className="flex items-start gap-2 text-sm" style={{ color: '#3A352E', lineHeight: 1.5 }}>
            <span className="font-extrabold" style={{ color: '#A35C3D', lineHeight: 1.4 }}>
              ✓
            </span>
            <span>{b}</span>
          </div>
        ))}
      </div>

      {/* Full original copy — always accessible behind "כל הפרטים על הסדנה" */}
      {open && (
        <p
          className="m-0 mx-[22px] mt-3.5 text-[13.5px] whitespace-pre-line"
          style={{ color: '#5F5A4E', lineHeight: 1.7 }}
        >
          {w.description}
        </p>
      )}
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="mx-[22px] mt-3 self-start bg-transparent border-0 p-0 text-[13.5px] font-bold cursor-pointer underline underline-offset-4"
        style={{ color: '#A35C3D' }}
      >
        {open ? 'פחות פרטים' : 'כל הפרטים על הסדנה'}
      </button>

      <div className="mt-auto px-[22px] pt-5 pb-[22px]">
        <a
          href={w.link}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => track('workshop_register_click', { workshop: w.title })}
          className="block text-center font-extrabold text-[15px] rounded-full no-underline"
          style={{ background: '#A35C3D', color: '#fff', padding: '14px 18px' }}
        >
          להרשמה לסדנה
        </a>
      </div>
    </div>
  )
}

export default function Workshops() {
  // workshop_id → nearest-cohort info, fetched once on mount.
  const [nextCohorts, setNextCohorts] = useState<Record<string, NextCohortInfo>>({})

  useEffect(() => {
    const ids = workshops
      .map((w) => workshopIdFromLink(w.link))
      .filter((id): id is string => id != null)
    let cancelled = false
    fetchNextCohorts([...new Set(ids)]).then((res) => {
      if (!cancelled) setNextCohorts(res)
    })
    return () => {
      cancelled = true
    }
  }, [])

  return (
    <section id="services" className="px-5 py-[68px]" style={{ background: '#FAF8F4' }}>
      <div className="max-w-[1080px] mx-auto">
        <Reveal className="text-center mb-9">
          <h2 className="m-0 mb-2 text-[30px] sm:text-[34px] font-black" style={{ color: '#A35C3D' }}>
            איפה תוכלו לפגוש אותי
          </h2>
          <p className="m-0 text-[15px]" style={{ color: '#818267' }}>
            שלוש סדנאות לפי גיל הבייבי - וליווי אישי לכל שלב
          </p>
        </Reveal>

        {/* 3 open workshop cards — ages, prices and content visible without a click */}
        <div className="grid gap-[18px] items-stretch md:grid-cols-2 lg:grid-cols-3">
          {workshops.map((w) => {
            const wid = workshopIdFromLink(w.link)
            return <WorkshopCard key={w.title} w={w} cohortInfo={wid ? nextCohorts[wid] : undefined} />
          })}
        </div>

        {/* More services — quiet list */}
        <MoreServices />

        {/* חברה מביאה חברה — one strip, the only dashed border on the page */}
        <div
          className="mt-[18px] rounded-[22px] px-6 py-5 flex items-center justify-between gap-4 flex-wrap"
          style={{ background: '#E7C78A2e', border: '1px dashed #C9A76A' }}
        >
          <p className="m-0 text-[15.5px]" style={{ color: '#3A352E', lineHeight: 1.5 }}>
            <b style={{ color: '#A35C3D' }}>חברה מביאה חברה</b> · נרשמות יחד לאותה סדנה ומקבלות 10% הנחה כל אחת
          </p>
          <a
            href={PROMO_URL}
            target="_blank"
            rel="noopener noreferrer"
            data-wa-location="friend-promo"
            className="text-sm font-extrabold whitespace-nowrap no-underline"
            style={{ color: '#A35C3D' }}
          >
            אנחנו בעניין ←
          </a>
        </div>
      </div>
    </section>
  )
}
