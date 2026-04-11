const workshops = [
  {
    age: '1–4 חודשים',
    name: 'גוזלות',
    emoji: '🐣',
    color: 'bg-yellow-50 border-yellow-200',
    tagColor: 'bg-yellow-100 text-yellow-700',
    description: 'החודשים הראשונים הם קסומים ומאתגרים. נלמד יחד איך לפתח קשר עמוק, לקרוא את הסימנים של התינוק ולתמוך בהתפתחות שלו בשלב הרגיש ביותר.',
    topics: ['קריאת סימני תינוק', 'קשר עין ותקשורת', 'שגרת שינה ראשונה', 'מוטוריקה בשכיבה'],
  },
  {
    age: '3.5–7 חודשים',
    name: 'מתגלגלות',
    emoji: '🐥',
    color: 'bg-orange-50 border-orange-200',
    tagColor: 'bg-orange-100 text-orange-700',
    description: 'שלב ההתפתחות המרתק ביותר — הגלגול, ישיבה ראשונה, ותחילת מזון מוצק. נעבור את זה יחד עם הרבה כיף, כלים מעשיים ותמיכה קבוצתית.',
    topics: ['גלגול וישיבה', 'היכנסות למזון מוצק', 'שינה עצמאית', 'תקשורת מוקדמת'],
  },
  {
    age: '6–10 חודשים',
    name: 'זוחלות',
    emoji: '🐛',
    color: 'bg-green-50 border-green-200',
    tagColor: 'bg-green-100 text-green-700',
    description: 'זחילה, עמידה ראשונה, ומאות שאלות חדשות. נלמד איך לעודד את ההתפתחות, לנהל את ה"לא" ולהתכונן לצעדים הראשונים.',
    topics: ['זחילה ועמידה', 'גבולות ובטיחות', 'שפה וקוגניציה', 'מוכנות ללכת'],
  },
]

export default function Workshops() {
  return (
    <section id="workshops" className="py-20 px-4 sm:px-6 bg-beige-50">
      <div className="max-w-5xl mx-auto">

        <div className="text-center mb-14">
          <p className="text-mustard-500 font-bold text-sm mb-2 tracking-wide uppercase">סדנאות התפתחות</p>
          <h2 className="text-3xl sm:text-4xl font-black text-beige-900">
            5 מפגשים שישנו את הכל
          </h2>
          <p className="text-beige-500 mt-4 text-base max-w-xl mx-auto leading-relaxed">
            סדנאות קבוצתיות קטנות (עד 8 זוגות), לפי גיל התינוק שלך.
            <br />
            כי כל שלב דורש מענה שונה.
          </p>
        </div>

        <div className="grid sm:grid-cols-3 gap-6">
          {workshops.map((w) => (
            <div key={w.name} className={`rounded-4xl border p-6 flex flex-col gap-4 ${w.color}`}>
              {/* Age tag */}
              <div className="flex items-center justify-between">
                <span className={`text-xs font-bold px-3 py-1 rounded-full ${w.tagColor}`}>
                  {w.age}
                </span>
                <span className="text-3xl">{w.emoji}</span>
              </div>

              {/* Name */}
              <h3 className="text-xl font-black text-beige-900">סדנת {w.name}</h3>

              {/* Description */}
              <p className="text-beige-600 text-sm leading-relaxed flex-1">{w.description}</p>

              {/* Topics */}
              <ul className="flex flex-col gap-1.5">
                {w.topics.map((t) => (
                  <li key={t} className="flex items-center gap-2 text-xs text-beige-700 font-medium">
                    <span className="w-1.5 h-1.5 rounded-full bg-mustard-400 shrink-0" />
                    {t}
                  </li>
                ))}
              </ul>

              <a
                href="#pricing"
                className="mt-1 bg-mustard-400 hover:bg-mustard-500 text-white font-bold text-sm px-5 py-3 rounded-2xl text-center transition-colors"
              >
                הרשמה לסדנה
              </a>
            </div>
          ))}
        </div>

        {/* 5 sessions badge */}
        <div className="mt-10 flex justify-center">
          <div className="bg-beige-100 rounded-3xl border border-beige-200 px-6 py-4 flex flex-wrap justify-center gap-6 text-sm text-beige-600 font-medium">
            <span>✅ 5 מפגשים</span>
            <span>✅ עד 8 זוגות בקבוצה</span>
            <span>✅ ליווי בין מפגשים</span>
            <span>✅ חומרי לימוד דיגיטליים</span>
          </div>
        </div>
      </div>
    </section>
  )
}
