const services = [
  {
    emoji: '🌙',
    title: 'ייעוץ שינה',
    description: 'תוכנית ייעוץ אישית שמלווה אותך שלב אחרי שלב עד שכולם ישנים טוב. בלי בכי, בלי לחץ — עם שיטה שמתאימה לתינוק ולמשפחה שלך.',
    cta: 'פרטים נוספים',
    tag: 'פופולרי',
    tagColor: 'bg-mustard-100 text-mustard-700',
  },
  {
    emoji: '🤱',
    title: 'ליווי פרטני',
    description: 'מפגש אחד על אחד בבית שלך — עם ציוד מותאם, עיניים מקצועיות ותשובות לכל השאלות שצברת. מותאם לגיל ולצרכים שלך בדיוק.',
    cta: 'לתיאום פגישה',
    tag: 'אישי',
    tagColor: 'bg-beige-100 text-beige-700',
  },
  {
    emoji: '🫶',
    title: 'עיסוי תינוקות',
    description: 'ללמוד איך לגעת בתינוק שלך בדרך שמחזקת קשר, מקלה על קוליק ועוזרת לשינה. מפגשים קבוצתיים בסביבה חמה ואינטימית.',
    cta: 'הצטרפות לקבוצה',
    tag: '',
    tagColor: '',
  },
]

export default function Services() {
  return (
    <section id="services" className="py-20 px-4 sm:px-6 bg-beige-100">
      <div className="max-w-5xl mx-auto">

        <div className="text-center mb-14">
          <p className="text-mustard-500 font-bold text-sm mb-2 tracking-wide uppercase">שירותים נוספים</p>
          <h2 className="text-3xl sm:text-4xl font-black text-beige-900">
            ליווי שמתאים לך
          </h2>
          <p className="text-beige-500 mt-3 text-base max-w-lg mx-auto">
            מעבר לסדנאות, יש לנו עוד דרכים להיות לצידך.
          </p>
        </div>

        <div className="grid sm:grid-cols-3 gap-6">
          {services.map((s) => (
            <div
              key={s.title}
              className="bg-white rounded-4xl border border-beige-200 shadow-sm p-6 flex flex-col gap-4"
            >
              <div className="flex items-start justify-between">
                <div className="w-12 h-12 bg-beige-100 rounded-2xl flex items-center justify-center text-2xl">
                  {s.emoji}
                </div>
                {s.tag && (
                  <span className={`text-xs font-bold px-2.5 py-1 rounded-full ${s.tagColor}`}>
                    {s.tag}
                  </span>
                )}
              </div>

              <div>
                <h3 className="text-xl font-black text-beige-900">{s.title}</h3>
              </div>

              <p className="text-beige-600 text-sm leading-relaxed flex-1">{s.description}</p>

              <a
                href="#contact"
                className="text-mustard-500 hover:text-mustard-600 font-bold text-sm flex items-center gap-1 transition-colors"
              >
                {s.cta} ←
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
