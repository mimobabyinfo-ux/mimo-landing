const plans = [
  {
    name: 'סדנה קבוצתית',
    price: '1,090',
    period: 'לסדנה (5 מפגשים)',
    highlight: false,
    description: 'הכי פופולרי. קבוצה קטנה של אמהות + תינוקות בשלב דומה.',
    features: [
      '5 מפגשי סדנה (75 דק׳ כל אחד)',
      'עד 8 זוגות אמא-תינוק',
      'חומרי לימוד דיגיטליים',
      'קבוצת וואטסאפ ליווי',
      'הנחה לרשומות לאפליקציה',
    ],
    cta: 'הרשמי לסדנה',
    ctaStyle: 'bg-beige-800 hover:bg-beige-900 text-white',
  },
  {
    name: 'ליווי פרטני',
    price: 'מ-350',
    period: 'למפגש',
    highlight: true,
    description: 'מפגש אישי בבית שלך, מותאם לצרכים הספציפיים של התינוק שלך.',
    features: [
      'מפגש 90 דקות בבית שלך',
      'אבחון התפתחותי מקיף',
      'תוכנית אישית לאחר המפגש',
      'מענה וואטסאפ שבועיים לאחר',
      'גישה מלאה לאפליקציה חינמית',
    ],
    cta: 'לתיאום פגישה',
    ctaStyle: 'bg-mustard-400 hover:bg-mustard-500 text-white shadow-lg shadow-mustard-200',
  },
  {
    name: 'אפליקציית מימו',
    price: 'חינם',
    period: 'תמיד',
    highlight: false,
    description: 'מעקב יומי, תזכורות וגישה לתוכן מקצועי — ישר מהטלפון.',
    features: [
      'מעקב שינה ואכילה',
      'ציר זמן יומי חכם',
      'תוכן מקצועי וטיפים',
      'אבני דרך לפי גיל',
      'גישה לסדנאות (בתשלום)',
    ],
    cta: 'הורידי בחינם',
    ctaStyle: 'bg-beige-100 hover:bg-beige-200 text-beige-800 border border-beige-300',
  },
]

export default function Pricing() {
  return (
    <section id="pricing" className="py-20 px-4 sm:px-6 bg-beige-50">
      <div className="max-w-5xl mx-auto">

        <div className="text-center mb-14">
          <p className="text-mustard-500 font-bold text-sm mb-2 tracking-wide uppercase">מחירים ותוכניות</p>
          <h2 className="text-3xl sm:text-4xl font-black text-beige-900">
            שקוף, פשוט, בלי הפתעות
          </h2>
          <p className="text-beige-500 mt-3 text-base max-w-lg mx-auto">
            בחרי את הדרך שמתאימה לך.
          </p>
        </div>

        <div className="grid sm:grid-cols-3 gap-6 items-start">
          {plans.map((p) => (
            <div
              key={p.name}
              className={`rounded-4xl p-7 flex flex-col gap-5 border ${
                p.highlight
                  ? 'bg-mustard-400 border-mustard-300 text-white shadow-xl shadow-mustard-100 scale-[1.02] sm:scale-105'
                  : 'bg-white border-beige-200 shadow-sm'
              }`}
            >
              {p.highlight && (
                <span className="text-xs font-black bg-white text-mustard-600 px-3 py-1 rounded-full self-start">
                  ✨ הכי מומלץ
                </span>
              )}

              <div>
                <p className={`text-sm font-bold mb-1 ${p.highlight ? 'text-white/75' : 'text-beige-500'}`}>
                  {p.name}
                </p>
                <div className="flex items-end gap-1">
                  <span className={`text-4xl font-black ${p.highlight ? 'text-white' : 'text-beige-900'}`}>
                    ₪{p.price}
                  </span>
                  <span className={`text-sm mb-1.5 ${p.highlight ? 'text-white/70' : 'text-beige-400'}`}>
                    {p.period}
                  </span>
                </div>
                <p className={`text-sm mt-2 leading-snug ${p.highlight ? 'text-white/85' : 'text-beige-500'}`}>
                  {p.description}
                </p>
              </div>

              <ul className="flex flex-col gap-2.5 flex-1">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-sm">
                    <span className={`mt-0.5 text-base leading-none ${p.highlight ? 'text-white' : 'text-mustard-400'}`}>
                      ✓
                    </span>
                    <span className={p.highlight ? 'text-white/90' : 'text-beige-700'}>{f}</span>
                  </li>
                ))}
              </ul>

              <a
                href={p.name === 'אפליקציית מימו' ? '/signup' : '#contact'}
                className={`font-black text-sm px-6 py-3.5 rounded-3xl text-center transition-colors ${p.ctaStyle}`}
              >
                {p.cta}
              </a>
            </div>
          ))}
        </div>

        <p className="text-center text-beige-400 text-xs mt-8">
          יש שאלות? <a href="#contact" className="text-mustard-500 font-bold hover:underline">דברי איתנו</a> — ניזמי אנחנו.
        </p>
      </div>
    </section>
  )
}
