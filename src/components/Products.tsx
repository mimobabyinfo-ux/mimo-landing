const products = [
  {
    emoji: '🐣',
    title: 'סדנת עיסוי תינוקות',
    subtitle: 'מגע שיוצר חיבור',
    info: ['4 מפגשים', 'שעה ורבע', 'רחוב אבא אחימאיר, רמת גן', 'לידה עד טרום זחילה'],
    features: [
      'לימוד עיסוי מלא להקלה על כאבי בטן וגזים',
      'חוברת הסברים וסרטוני עיסוי דיגיטליים במתנה',
      'זמן איכות לאמא: קפה, נשנושים ומתנה אישית',
    ],
    price: '500',
    cta: 'להרשמה והבטחת מקום',
    link: 'https://forms.gle/Vyuz7UGKMyJxNhg77',
    highlight: false,
    bg: 'bg-[#FDFBF7]',
    border: 'border-[#E9C46A]/40',
    tagBg: 'bg-[#E9C46A]/15 text-[#8a6f1e]',
  },
  {
    emoji: '🤍',
    title: "סדנת 'עטופים'",
    subtitle: 'ליווי התפתחותי מהלב',
    info: ['5 מפגשים', 'שעה וחצי', 'רחוב אבא אחימאיר, רמת גן', 'לידה עד טרום התהפכות'],
    features: [
      'כלים לעידוד שכיבה על הבטן, חיזוק והתמודדות עם בכי',
      'עבודה על ויסות, חשיפה למרקמים ושימוש נכון במנשא',
      'קבוצת וואטסאפ לסיכומים וסרטונים',
    ],
    price: '700',
    cta: 'אני רוצה להירשם',
    link: 'https://forms.gle/Vyuz7UGKMyJxNhg77',
    highlight: true,
    bg: 'bg-[#E9C46A]',
    border: 'border-[#E9C46A]',
    tagBg: 'bg-white/30 text-[#4A3F35]',
  },
  {
    emoji: '🎁',
    title: 'מפגש מתנת לידה',
    subtitle: 'נחיתה רכה לאמא ולבייבי',
    info: ['מפגש פרטני', 'שעה', 'בבית שלך', 'מותאם אישית'],
    features: [
      'שאלון התפתחות מקדים לפני המפגש',
      'כלים להרגעה ושינה טובה יותר',
      'מקום בטוח לאמא בעולם החדש',
    ],
    price: null,
    cta: 'לתיאום מפגש אישי',
    link: 'https://wa.me/972559904274',
    highlight: false,
    bg: 'bg-[#FDFBF7]',
    border: 'border-[#E9C46A]/40',
    tagBg: 'bg-[#E9C46A]/15 text-[#8a6f1e]',
    isWhatsApp: true,
  },
]

export default function Products() {
  return (
    <section id="services" className="py-20 px-4 sm:px-6" style={{ background: '#FDFBF7' }}>
      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <div className="text-center mb-14">
          <p className="font-bold text-sm mb-2 tracking-wide uppercase" style={{ color: '#E9C46A' }}>
            השירותים שלנו
          </p>
          <h2 className="text-3xl sm:text-4xl font-black" style={{ color: '#4A3F35' }}>
            בחרי את המסלול שלך
          </h2>
          <p className="mt-3 text-base max-w-lg mx-auto leading-relaxed" style={{ color: '#7a6a5a' }}>
            כל שירות תוכנן בקפידה — לאמא ולתינוק, ביחד.
          </p>
        </div>

        {/* Cards */}
        <div className="grid sm:grid-cols-3 gap-6 items-stretch">
          {products.map((p) => (
            <div
              key={p.title}
              className={`rounded-3xl border-2 p-7 flex flex-col gap-5 ${p.bg} ${p.border} ${
                p.highlight ? 'shadow-2xl scale-[1.02] sm:scale-105' : 'shadow-md'
              }`}
              style={{ boxShadow: p.highlight ? '0 20px 60px rgba(233,196,106,0.35)' : '0 4px 20px rgba(74,63,53,0.08)' }}
            >
              {/* Emoji + highlight badge */}
              <div className="flex items-start justify-between">
                <span className="text-4xl">{p.emoji}</span>
                {p.highlight && (
                  <span className="text-xs font-black bg-white text-[#8a6f1e] px-3 py-1 rounded-full shadow-sm">
                    ✨ הכי פופולרי
                  </span>
                )}
              </div>

              {/* Title */}
              <div>
                <h3
                  className="text-xl font-black leading-tight"
                  style={{ color: p.highlight ? '#4A3F35' : '#4A3F35' }}
                >
                  {p.title}
                </h3>
                <p
                  className="text-sm font-semibold mt-0.5"
                  style={{ color: p.highlight ? '#4A3F35cc' : '#8a6f1e' }}
                >
                  {p.subtitle}
                </p>
              </div>

              {/* Info pills */}
              <div className="flex flex-wrap gap-1.5">
                {p.info.map((item) => (
                  <span
                    key={item}
                    className={`text-xs font-semibold px-2.5 py-1 rounded-full ${p.tagBg}`}
                  >
                    {item}
                  </span>
                ))}
              </div>

              {/* Features */}
              <ul className="flex flex-col gap-2.5 flex-1">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5">
                    <span
                      className="mt-0.5 text-sm font-black shrink-0"
                      style={{ color: p.highlight ? '#4A3F35' : '#E9C46A' }}
                    >
                      ✓
                    </span>
                    <span
                      className="text-sm leading-snug"
                      style={{ color: p.highlight ? '#4A3F35dd' : '#5a4a3a' }}
                    >
                      {f}
                    </span>
                  </li>
                ))}
              </ul>

              {/* Price */}
              <div className="pt-2 border-t" style={{ borderColor: p.highlight ? 'rgba(74,63,53,0.2)' : '#E9C46A44' }}>
                {p.price ? (
                  <div className="flex items-end gap-1 mb-4">
                    <span
                      className="text-4xl font-black"
                      style={{ color: p.highlight ? '#4A3F35' : '#4A3F35' }}
                    >
                      ₪{p.price}
                    </span>
                    <span
                      className="text-sm mb-1.5"
                      style={{ color: p.highlight ? '#4A3F35aa' : '#8a7a6a' }}
                    >
                      לסדנה
                    </span>
                  </div>
                ) : (
                  <div className="mb-4">
                    <span
                      className="text-lg font-black"
                      style={{ color: '#4A3F35' }}
                    >
                      מחיר בהתאמה אישית
                    </span>
                  </div>
                )}

                <a
                  href={p.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 font-black text-sm px-6 py-3.5 rounded-2xl transition-all duration-200 active:scale-95 w-full"
                  style={
                    p.highlight
                      ? { background: '#4A3F35', color: '#fff', boxShadow: '0 4px 16px rgba(74,63,53,0.25)' }
                      : { background: '#E9C46A', color: '#4A3F35', boxShadow: '0 4px 16px rgba(233,196,106,0.4)' }
                  }
                >
                  {p.isWhatsApp && <span>💬</span>}
                  {p.cta}
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom note */}
        <p className="text-center text-sm mt-10" style={{ color: '#9a8a7a' }}>
          יש שאלות?{' '}
          <a
            href="https://wa.me/972559904274"
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold hover:underline"
            style={{ color: '#E9C46A' }}
          >
            שלחי לנו בוואטסאפ
          </a>{' '}
          — נשמח לעזור 💛
        </p>
      </div>
    </section>
  )
}
