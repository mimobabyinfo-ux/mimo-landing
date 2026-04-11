import { useState } from 'react'

const services = [
  {
    title: 'מתנה ללידה',
    emoji: '🎁',
    short: 'מפגש פרטני בבית שלך — נחיתה רכה לאמא ולבייבי',
    description: `מפגש אישי של שעה בבית היולדת, מותאם אישית לפי שאלון התפתחות מקדים.
כלים להרגעה, שינה טובה יותר ומקום בטוח לאמא בעולם החדש.`,
    link: 'https://wa.me/972559904274',
    cta: '💬 לתיאום בוואטסאפ',
  },
  {
    title: 'סדנאות',
    emoji: '🐣',
    short: 'סדנת עיסוי תינוקות וסדנת עטופים — קבוצות קטנות, ליווי גדול',
    description: `סדנת עיסוי תינוקות (4 מפגשים, ₪500) — לימוד עיסוי מלא, הקלה על כאבי בטן וגזים, חוברת ועיסוי דיגיטליים במתנה.
סדנת 'עטופים' (5 מפגשים, ₪700) — כלים לעידוד שכיבה, ויסות וחשיפה למרקמים. כולל קבוצת וואטסאפ לסיכומים.
שתי הסדנאות מתקיימות ברחוב אבא אחימאיר, רמת גן.`,
    link: 'https://forms.gle/Vyuz7UGKMyJxNhg77',
    cta: 'להרשמה לסדנה',
  },
  {
    title: 'ליווי אישי',
    emoji: '🤍',
    short: 'מפגש אחד על אחד — מותאם לתינוק ולאמא שלך',
    description: `מפגש פרטני בבית שלך עם אבחון התפתחותי מקיף, תוכנית אישית לאחר המפגש ומענה וואטסאפ לשבועיים לאחר.
כי לפעמים את צריכה עיניים מקצועיות שרואות בדיוק אותך.`,
    link: 'https://wa.me/972559904274',
    cta: '💬 לתיאום בוואטסאפ',
  },
  {
    title: 'ייעוץ שינה',
    emoji: '🌙',
    short: 'תוכנית אישית שמחזירה את השינה לכולם',
    description: `תוכנית ייעוץ שינה מותאמת אישית — ללא בכי, ללא לחץ, עם שיטה שמתאימה לתינוק ולמשפחה שלך.
כולל מעקב צמוד עד שכולם ישנים טוב.`,
    link: 'https://wa.me/972559904274',
    cta: '💬 לתיאום בוואטסאפ',
  },
  {
    title: 'ליווי התפתחותי לגנים',
    emoji: '🌱',
    short: 'ליווי מקצועי לצוותי גנים וגננות',
    description: `הכשרה והדרכה לגננות וצוותי חינוך — כלים מעשיים לזיהוי ועידוד התפתחות תקינה בגיל הרך.
מותאם לגן הספציפי, בשפה פשוטה וברורה.`,
    link: 'https://wa.me/972559904274',
    cta: '💬 ליצירת קשר',
  },
]

export default function ServicesList() {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <section id="services" className="py-20 px-6 sm:px-10" style={{ background: '#FDFBF7' }}>
      <div className="max-w-4xl mx-auto">

        <h2 className="text-3xl font-black text-center mb-2" style={{ color: '#4A3F35' }}>
          איפה תוכלו לפגוש אותי
        </h2>
        <p className="text-center text-sm mb-12" style={{ color: '#9a8a7a' }}>
          לחצי על שירות לפרטים נוספים
        </p>

        <div className="flex flex-col">
          {services.map((s, i) => (
            <div
              key={s.title}
              className="border-b"
              style={{ borderColor: '#EDE4D5' }}
            >
              <button
                className="w-full py-6 flex items-center gap-4 text-right transition-colors"
                onClick={() => setOpen(open === i ? null : i)}
              >
                {/* Title */}
                <div className="flex-1 flex items-center gap-3">
                  <span className="text-xl">{s.emoji}</span>
                  <div className="text-right">
                    <p className="font-black text-lg" style={{ color: '#4A3F35' }}>{s.title}</p>
                    <p className="text-sm mt-0.5" style={{ color: '#9a8a7a' }}>{s.short}</p>
                  </div>
                </div>

                {/* Checkmark icon */}
                <div
                  className="w-7 h-7 rounded-full border-2 flex items-center justify-center shrink-0 transition-all"
                  style={{
                    borderColor: open === i ? '#E9C46A' : '#D0C4B0',
                    background: open === i ? '#E9C46A' : 'transparent',
                  }}
                >
                  <svg className="w-3.5 h-3.5" viewBox="0 0 14 14" fill="none">
                    <path
                      d="M2 7l4 4 6-6"
                      stroke={open === i ? '#fff' : '#D0C4B0'}
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
                  <p
                    className="text-sm leading-relaxed whitespace-pre-line"
                    style={{ color: '#5a4a3a' }}
                  >
                    {s.description}
                  </p>
                  <a
                    href={s.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="self-start text-sm font-bold px-5 py-2.5 rounded-full transition-colors"
                    style={{ background: '#E9C46A', color: '#4A3F35' }}
                  >
                    {s.cta}
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
