import type { ReactNode } from 'react'

type Testimonial = {
  name: string
  detail: string
  text: string
  rating: number
  highlights?: string[] // strongest phrases, emphasized for scanners
  photo?: string // optional round client photo; falls back to an initial circle
}

// Some names are placeholders; "עדי אלגזר" is a real review.
const testimonials: Testimonial[] = [
  {
    name: 'עדי',
    detail: 'בוגרת סדנת עיסוי תינוקות',
    rating: 5,
    highlights: ['הקל על הגזים'],
    text: 'וואו, העיסויים היו מושלמים! עיסוי הבטן ממש הקל על הגזים, ואני עושה את זה כל יום. תודה תודה תודה, אין כמוך — כל כך שמחה שבאתי לסדנה שלך!',
  },
  {
    name: 'מאיה',
    detail: 'בוגרת סדנה',
    rating: 5,
    highlights: ['האנרגיה שלך מדבקת'],
    text: 'בחיים לא חשבתי שאתחבר לסדנאות, ובסוף הכי נהנינו! למדנו ממך כל כך הרבה, הכרנו אמהות מהממות וילדים מהממים עוד יותר. והכי חשוב — האנרגיה שלך מדבקת והולכת איתנו כל היום. תודה על הזמן והפינוק ביחד.',
  },
  {
    name: 'רוני',
    detail: 'ליווי פרטני',
    rating: 5,
    highlights: ['כל הלב והנשמה'],
    text: 'תודה על שעה וחצי של אהבה ולמידה. היה כל כך כיף ולמדנו המון, ואני בטוחה שהכלים שנתת לנו יעזרו לנו מאוד. רואים ומרגישים שאת עוסקת במה שאת הכי אוהבת — ונותנת את כל הלב והנשמה.',
  },
  {
    name: 'ליאת',
    detail: 'אמא טרייה',
    rating: 5,
    highlights: ['התוכן שלך עזר לי'],
    text: 'ילדתי לפני שלושה שבועות, ואת לא מבינה כמה התוכן שלך עזר לי. אתמול היה יום קשה — ובאמת שזה עזר לי.',
  },
  {
    name: 'הילה',
    detail: 'בוגרת סדנת עיסוי תינוקות',
    rating: 5,
    highlights: ['מדריכה מספר אחת'],
    text: 'היה לנו ממש כיף ונגמר מהר מדי. זכינו בקבוצת אמהות ותינוקות מתוקים ובמדריכה מספר אחת. תודה על המקצועיות, הידע, ובעיקר האכפתיות והעטיפה שלך.',
  },
]

function withHighlights(text: string, phrases: string[] = []): ReactNode {
  if (!phrases.length) return text
  const escaped = phrases.map(p => p.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'))
  const re = new RegExp(`(${escaped.join('|')})`, 'g')
  return text.split(re).map((part, i) =>
    phrases.includes(part)
      ? <strong key={i} className="font-bold" style={{ color: '#A35C3D' }}>{part}</strong>
      : <span key={i}>{part}</span>
  )
}

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 px-6 sm:px-10" style={{ background: '#C3CDD2' }}>
      <div className="max-w-5xl mx-auto">

        <h2 className="text-3xl font-black text-center mb-10" style={{ color: '#A35C3D' }}>
          משפחות מספרות
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {testimonials.map((t) => (
            <div key={t.name} className="bg-white rounded-3xl p-6 shadow-sm flex flex-col gap-4">
              {/* Stars */}
              <div className="flex gap-0.5">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <span key={i} className="text-base" style={{ color: '#E7C78A' }}>★</span>
                ))}
              </div>

              {/* Text */}
              <p className="text-sm leading-relaxed flex-1" style={{ color: '#3A352E' }}>
                "{withHighlights(t.text, t.highlights)}"
              </p>

              {/* Reviewer */}
              <div className="flex items-center gap-3">
                {t.photo ? (
                  <img
                    src={t.photo}
                    alt={t.name}
                    className="w-10 h-10 rounded-full object-cover shrink-0"
                    loading="lazy"
                  />
                ) : (
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center font-black text-sm shrink-0"
                    style={{ background: '#E7C78A', color: '#3A352E' }}
                  >
                    {t.name[0]}
                  </div>
                )}
                <div className="min-w-0">
                  <p className="font-bold text-sm" style={{ color: '#3A352E' }}>{t.name}</p>
                  <p className="text-xs" style={{ color: '#818267' }}>{t.detail}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
