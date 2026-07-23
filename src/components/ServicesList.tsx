import { useEffect, useState } from 'react'
import { WhatsAppButton, WHATSAPP_URL } from './WhatsAppButton'
import Reveal from './Reveal'
import { fetchNextCohorts, type NextCohortInfo } from '../lib/nextCohorts'

// Studio address for all in-person services: אבא אחימאיר 10, רמת גן (שיכון ותיקים)
const REGISTER = {
  swaddled:    'https://mimo-baby.co.il?register=80472e20-8ee4-434e-b3f6-8c90af1f1fc1',
  discoverers: 'https://mimo-baby.co.il?register=3d2b2c93-da57-43e3-966b-de36dda973e7',
  massage:     'https://mimo-baby.co.il?register=0bfca0fd-95de-4a55-9668-f21bd9d17726',
  private:     'https://mimo-baby.co.il?register=5732a0ad-03c1-4061-9aba-5a939f745999',
  dads:        'https://mimo-baby.co.il?register=9f940856-16f0-43d0-b991-8470da8accc5',
  morning:     'https://mimo-baby.co.il?register=5e6088b9-fa34-4434-9bf1-6728655b56a9',
}

type Service = {
  title: string
  emoji: string
  short: string
  description: string
  link: string
  cta: string
  image?: string
  alt?: string
  limited?: boolean // shows the "small group / limited spots" cue
}

// NOTE: "ייעוץ שינה" and "ליווי לגנים" intentionally omitted until real content is ready.
const services: Service[] = [
  {
    title: 'מתנת לידה',
    emoji: '🎁',
    short: 'הפינוק המושלם לחברה שזה עתה ילדה',
    description: `הפינוק המושלם לחברה שזה עתה ילדה. אפשר להעניק כמתנה כל אחד מהשירותים של מימו: סדנת עיסוי תינוקות, סדנת ליווי התפתחותי (עטופים / מגלים) או מפגש ליווי פרטני בבית.
מתנה שנותנת ליולדת בדיוק את מה שהיא צריכה - תמיכה, ידע וזמן איכות עם הבייבי שלה.`,
    link: WHATSAPP_URL,
    cta: '💬 לתיאום בוואטסאפ',
  },
  {
    title: 'סדנת עטופים · ליווי התפתחותי',
    emoji: '🐣',
    short: 'מלידה עד 3.5 חודשים · 5 מפגשים בקבוצה קטנה · 800 ₪',
    description: `5 מפגשים של שעה וחצי, פעם בשבוע, בקבוצה קטנה של עד 8 אמהות.
מתאים מגיל לידה עד 3/3.5 חודשים.

מה נלמד ונחווה:
• הסתגלות הדרגתית מהרחם אל העולם
• עידוד שכיבה נינוחה על הבטן וחיזוק השרירים
• ניצול חלונות ערות
• חיבור ותקשורת דרך מגע, קול ומבט
• חשיפה למרקמים וחוויות תחושתיות
• שימוש בפוף, מנשא בד וכדור פיזיו
• כלים להרגעה, הרפיה והקלה על אי-נוחות וגזים
• שיווי משקל ותנועה במרחב

כולל: קבוצת וואטסאפ עם סיכומים וליווי בין המפגשים, זמן בגינה הירוקה של מימו עם קפה ונשנושים, ומתנה אישית בסיום.
הסטודיו: אבא אחימאיר 10, רמת גן (שיכון ותיקים).`,
    link: REGISTER.swaddled,
    cta: 'להרשמה לסדנה',
    limited: true,
  },
  {
    title: 'סדנת מגלים · ליווי התפתחותי',
    emoji: '🌱',
    short: 'מגיל 3 / 3.5 עד 6 חודשים · 5 מפגשים בקבוצה קטנה · 800 ₪',
    description: `5 מפגשים של שעה וחצי, פעם בשבוע
בקבוצה קטנה של עד 8 אימהות, עם יחס אישי, מקום לשאלות ותרגול 🤍
📍 רחוב אבא אחימאיר 10, רמת גן
👶 מגיל 3 / 3,5 עד 6 חודשים

✅ גיל 4 חודשים המופלא והשינויים שמגיעים איתו
✅ התהפכות מהבטן לגב
✅ התהפכות מהגב לבטן
✅ עידוד שכיבה על הבטן וחיזוק חגורת הכתפיים
✅ חשיבות קו האמצע וחצייתו
✅ גילוי כפות הידיים והרגליים ומודעות לגוף
✅ העברות משקל, שיווי משקל ותנועה במרחב
✅ מרקמים, משחקי תקשורת וחוויות תחושתיות
✅ הכנת הגוף לקראת זחילה
✅ שימוש בפוף, כדור פיזיו ואביזרים מהבית
✅ כלים להרגעה, הרפיה וזמן איכות משותף

😎 קבוצת וואטסאפ עם סיכומים וליווי בין המפגשים
🌿 זמן בשבילך בגינה הירוקה של מימו, עם קפה ונשנושים מפנקים ממני
🎁 מתנה אישית בסיום הסדנה`,
    link: REGISTER.discoverers,
    cta: 'להרשמה לסדנה',
    limited: true,
  },
  {
    title: 'סדנת עיסוי תינוקות',
    emoji: '🤲',
    short: 'מלידה עד טרום זחילה · 3 מפגשים אינטימיים · 450 ₪',
    description: `3 מפגשים אינטימיים של שעה ורבע, פעם בשבוע, בקבוצה קטנה של עד 7 אמהות.
מתאים מגיל לידה ועד טרום זחילה.

מה כוללת הסדנה:
• לימוד עיסוי תינוקות צעד אחר צעד, בצורה נעימה ובטוחה, לאזורים שונים בגוף: רגליים, ידיים, בטן, בית חזה, גב, עורף, טוסיק ופנים
• כלים פשוטים שתומכים בהתפתחות של הבייבי
• עיסוי שיכול לעזור במצבים של גזים, כאבי בטן, אי-נוחות וקושי להירגע ולהירדם
• קבוצת וואטסאפ עם סיכומים וליווי בין המפגשים
• זמן בגינה הירוקה של מימו עם קפה ונשנושים
• מתנה אישית בסיום

בונוס מיוחד למשתתפות: "ספר הליווי הדיגיטלי של מימו" - הסברים, שלבי העיסוי וסרטונים שבהם אני מדגימה, כדי שתוכלי לחזור לזה גם בבית.
הסטודיו: אבא אחימאיר 10, רמת גן (שיכון ותיקים).`,
    link: REGISTER.massage,
    cta: 'להרשמה לסדנה',
    limited: true,
  },
  {
    title: 'ליווי פרטני',
    emoji: '🏡',
    short: 'מפגש פרטני אצלך בבית - אני מגיעה אלייך · 400 ₪ לשעה',
    description: `מפגש פרטני של שעה אצלך בבית - אני מגיעה אלייך. לפני המפגש אני שולחת שאלון התפתחות, שאותו אני קוראת מראש כדי להכיר טוב יותר את התינוק/ת ולהתאים את המפגש בצורה אישית ומדויקת.

במפגש משלבות:
• כלים לעזור לבייבי להירגע, לווסת את עצמו ולישון טוב יותר
• כלים לעבור את החודשים הראשונים של המציאות החדשה בצורה מיטבית
• כלים של ליווי התפתחותי: חיזוק, תנועה והבנת הצרכים של התינוק/ת
• מקום לאמא: נחיתה רכה לעולם`,
    link: REGISTER.private,
    cta: 'להרשמה ותיאום',
  },
  {
    title: 'מפגש אבות',
    emoji: '👨‍🍼',
    short: 'מרחב מיוחד לאבות טריים · 150 ₪',
    description: `מרחב מיוחד לאבות טריים. כי גם אבא עובר שינוי גדול עם הלידה, ומגיע לו מקום משלו.
נדבר על התפקיד של אבא בחודשים הראשונים, איך לתמוך בבת הזוג ובבייבי, ועל כלים מעשיים שיעזרו לך להרגיש בטוח ומחובר - באווירה רגועה ובגובה העיניים.
עלות: 150 ₪.`,
    link: REGISTER.dads,
    cta: 'להרשמה',
  },
  {
    title: 'בוקר של מימו · יום פתוח בסטודיו',
    emoji: '☕',
    short: 'בוקר של קהילה ומענה מקצועי · אחת לחודש · 150 ₪',
    description: `בוקר שכולו קהילה, פינוק ומענה מקצועי - מתאים לנשים בהריון ולאמהות לתינוקות בכל הגילאים.

מה מחכה לך:
• ליווי אישי ומענה לשאלות עם מומחיות בתחומן (הנקה, אוסטאופתיה לתינוקות ולנשים בהריון, וייעוץ שינה)
• מרחב רגוע לנשום, להתייעץ ולהתחבר לאמהות אחרות
• מתנה אישית ממני

מתקיים אחת לחודש בסטודיו של מימו, אבא אחימאיר 10, רמת גן.
המספר מוגבל כדי לשמור על מרחב אינטימי - ההרשמה מראש.`,
    link: REGISTER.morning,
    cta: 'להרשמה',
  },
]

// Extract the app workshop-id out of a register link so the nearest-cohort
// lookup can key on it. WhatsApp links (no register=) return null.
function workshopIdFromLink(link: string): string | null {
  const m = link.match(/[?&]register=([0-9a-f-]{36})/)
  return m ? m[1] : null
}

// One-line live status chip: nearest cohort date + availability, straight
// from the app's DB. Renders nothing while loading / when the workshop has
// no upcoming cohorts, so the page looks identical until data arrives.
function NextCohortChip({ info }: { info: NextCohortInfo | undefined }) {
  if (!info) return null
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
    text = `🗓️ המחזור הקרוב: ${when} · ${spots}`
  } else if (info.kind === 'nearest-full') {
    text = `המחזור הקרוב מלא · מחזור חדש נפתח ב-${info.nextOpenDate}`
  } else {
    text = 'המחזורים הקרובים מלאים · דברי איתי ונמצא פתרון'
  }
  return (
    <span
      className="inline-block mt-1.5 text-xs font-bold px-2.5 py-0.5 rounded-full"
      style={{ background: '#E7C78A33', color: '#A35C3D' }}
    >
      {text}
    </span>
  )
}

export default function ServicesList() {
  const [open, setOpen] = useState<number | null>(null)
  // workshop_id → nearest-cohort info, fetched once on mount.
  const [nextCohorts, setNextCohorts] = useState<Record<string, NextCohortInfo>>({})

  useEffect(() => {
    const ids = services
      .map(s => workshopIdFromLink(s.link))
      .filter((id): id is string => id != null)
    let cancelled = false
    fetchNextCohorts([...new Set(ids)]).then(res => {
      if (!cancelled) setNextCohorts(res)
    })
    return () => { cancelled = true }
  }, [])

  return (
    <section id="services" className="py-20 px-6 sm:px-10" style={{ background: '#FAF8F4' }}>
      <div className="max-w-4xl mx-auto">

        <Reveal>
          <h2 className="text-3xl font-black text-center mb-2" style={{ color: '#A35C3D' }}>
            איפה תוכלו לפגוש אותי
          </h2>
          <p className="text-center text-sm mb-12" style={{ color: '#818267' }}>
            לחצי על שירות לפרטים נוספים
          </p>
        </Reveal>

        <div className="flex flex-col">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={i * 70}>
            <div
              className="border-b"
              style={{ borderColor: '#DCD4C8' }}
            >
              <button
                className="w-full py-6 flex items-center gap-4 text-right transition-colors"
                onClick={() => setOpen(open === i ? null : i)}
              >
                {/* Title */}
                <div className="flex-1 flex items-center gap-3">
                  <span className="text-xl">{s.emoji}</span>
                  <div className="text-right">
                    <p className="font-black text-lg" style={{ color: '#3A352E' }}>{s.title}</p>
                    <p className="text-sm mt-0.5" style={{ color: '#818267' }}>{s.short}</p>
                    {/* Live nearest-cohort line when the app has upcoming
                        cohorts for this workshop; otherwise the static
                        "limited spots" cue as before. */}
                    {(() => {
                      const wid = workshopIdFromLink(s.link)
                      const info = wid ? nextCohorts[wid] : undefined
                      if (info) return <NextCohortChip info={info} />
                      return s.limited ? (
                        <span
                          className="inline-block mt-1.5 text-xs font-semibold px-2.5 py-0.5 rounded-full"
                          style={{ background: '#E7C78A33', color: '#A35C3D' }}
                        >
                          מקומות מוגבלים
                        </span>
                      ) : null
                    })()}
                  </div>
                </div>

                {/* Checkmark icon */}
                <div
                  className="w-7 h-7 rounded-full border-2 flex items-center justify-center shrink-0 transition-all"
                  style={{
                    borderColor: open === i ? '#E7C78A' : '#C6BDA0',
                    background: open === i ? '#E7C78A' : 'transparent',
                  }}
                >
                  <svg className="w-3.5 h-3.5" viewBox="0 0 14 14" fill="none">
                    <path
                      d="M2 7l4 4 6-6"
                      stroke={open === i ? '#3A352E' : '#C6BDA0'}
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </button>

              {/* Expanded */}
              {open === i && (
                <div className="pb-6 pr-10 flex flex-col gap-4">
                  {s.limited && (
                    <div className="flex flex-wrap gap-2">
                      <span
                        className="text-xs font-semibold px-3 py-1 rounded-full"
                        style={{ background: '#EADBDD', color: '#A35C3D' }}
                      >
                        קבוצה קטנה · המקומות מוגבלים
                      </span>
                    </div>
                  )}
                  {s.image && (
                    <img
                      src={s.image}
                      alt={s.alt ?? s.title}
                      className="w-full max-w-sm rounded-2xl object-cover shadow-sm"
                      loading="lazy"
                    />
                  )}
                  <p
                    className="text-sm leading-relaxed whitespace-pre-line"
                    style={{ color: '#3A352E' }}
                  >
                    {s.description}
                  </p>
                  <a
                    href={s.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="self-start text-sm font-bold px-5 py-2.5 rounded-full transition-colors"
                    style={{ background: '#E7C78A', color: '#3A352E' }}
                  >
                    {s.cta}
                  </a>
                </div>
              )}
            </div>
            </Reveal>
          ))}
        </div>

        {/* Primary action - WhatsApp */}
        <div className="flex flex-col items-center gap-3 mt-12 text-center">
          <p className="text-sm" style={{ color: '#818267' }}>
            לא בטוחה מה הכי מתאים לכן? בואו נמצא יחד
          </p>
          <WhatsAppButton />
        </div>
      </div>
    </section>
  )
}
