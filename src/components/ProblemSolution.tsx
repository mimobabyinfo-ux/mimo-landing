const pain = [
  { emoji: '😰', text: 'לא בטוחה שהתפתחות התינוק תקינה לגילו?' },
  { emoji: '🌀', text: 'מוצפת במידע סותר מגוגל, טיקטוק ואחיות?' },
  { emoji: '😴', text: 'לילות ארוכים בלי שיטה ובלי אף אחד שיסביר למה?' },
  { emoji: '🤯', text: 'מרגישה לבד במסע הזה — גם אם את מוקפת באנשים?' },
]

export default function ProblemSolution() {
  return (
    <section className="bg-beige-100 py-20 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto">

        <div className="text-center mb-14">
          <p className="text-mustard-500 font-bold text-sm mb-2 tracking-wide uppercase">את לא לבד</p>
          <h2 className="text-3xl sm:text-4xl font-black text-beige-900">
            אמהות לא מגיעות עם ספר הוראות
          </h2>
          <p className="text-beige-500 mt-3 text-base max-w-lg mx-auto">
            אבל אנחנו כן מגיעות — עם הכלים, הידע, והתמיכה שאת צריכה.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-stretch">
          {/* Pain points */}
          <div className="flex flex-col gap-3">
            <p className="text-beige-400 font-semibold text-sm mb-1 flex items-center gap-2">
              <span className="w-5 h-5 rounded-full bg-beige-200 flex items-center justify-center text-xs">✕</span>
              בלי מימו
            </p>
            {pain.map(({ emoji, text }) => (
              <div
                key={text}
                className="flex items-center gap-3 bg-white rounded-3xl px-5 py-4 border border-beige-200 shadow-sm"
              >
                <span className="text-2xl shrink-0">{emoji}</span>
                <p className="text-beige-700 font-medium text-sm leading-snug">{text}</p>
              </div>
            ))}
          </div>

          {/* Solution */}
          <div className="bg-mustard-400 rounded-4xl p-8 text-white flex flex-col gap-5 shadow-xl shadow-mustard-100">
            <p className="font-bold text-sm opacity-75 flex items-center gap-2">
              <span className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center text-xs">✓</span>
              עם מימו
            </p>

            <div className="flex flex-col gap-5">
              {[
                {
                  emoji: '🎓',
                  title: 'מומחית לצידך',
                  body: 'סדנאות קבוצתיות וליווי פרטני עם מומחיות מוסמכות להתפתחות תינוקות.',
                },
                {
                  emoji: '📅',
                  title: 'מותאם לגיל התינוק',
                  body: 'תכנים, כלים ותרגילים שמחכים לך בדיוק בשלב הנכון — לא מוקדם, לא מאוחר.',
                },
                {
                  emoji: '🤝',
                  title: 'קהילה שמבינה אותך',
                  body: 'קבוצות של אמהות בשלב דומה. כי הכי חזק ללמוד ביחד.',
                },
              ].map(({ emoji, title, body }) => (
                <div key={title} className="flex items-start gap-3">
                  <span className="text-2xl mt-0.5 shrink-0">{emoji}</span>
                  <div>
                    <p className="font-black text-base leading-tight">{title}</p>
                    <p className="opacity-85 text-sm mt-0.5 leading-snug">{body}</p>
                  </div>
                </div>
              ))}
            </div>

            <a
              href="#workshops"
              className="mt-2 bg-white text-mustard-600 font-black px-6 py-3.5 rounded-3xl text-center text-sm hover:bg-mustard-50 transition-colors shadow-sm"
            >
              ראי את הסדנאות שלנו ←
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
