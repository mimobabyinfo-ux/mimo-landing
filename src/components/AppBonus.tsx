const appFeatures = [
  { emoji: '📊', text: 'מעקב שינה, האכלה וחיתולים' },
  { emoji: '📅', text: 'ציר זמן יומי ויזואלי' },
  { emoji: '🏆', text: 'אבני דרך לפי גיל' },
  { emoji: '🎬', text: 'גישה לסדנאות דיגיטליות' },
  { emoji: '💡', text: 'טיפים יומיים מותאמי גיל' },
]

export default function AppBonus() {
  return (
    <section id="app" className="py-20 px-4 sm:px-6 bg-beige-50">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">

        {/* Text */}
        <div className="flex flex-col gap-6">
          <div>
            <p className="text-mustard-500 font-bold text-sm mb-2 tracking-wide uppercase">בונוס שמגיע עם הכל</p>
            <h2 className="text-3xl sm:text-4xl font-black text-beige-900">
              האפליקציה שתעשה
              <br />
              את החיים קלים יותר
            </h2>
          </div>

          <p className="text-beige-600 text-base leading-relaxed">
            כחלק מהמסע עם מימו, תקבלי גישה לאפליקציה שמרכזת הכל — מעקב יומי,
            ציר זמן ויזואלי וגישה לתכנים המקצועיים שלנו. <br />
            <span className="font-semibold text-beige-700">חינמית לגמרי.</span>
          </p>

          <ul className="flex flex-col gap-3">
            {appFeatures.map(({ emoji, text }) => (
              <li key={text} className="flex items-center gap-3">
                <span className="w-9 h-9 bg-mustard-50 rounded-xl flex items-center justify-center text-lg shrink-0">
                  {emoji}
                </span>
                <span className="text-beige-700 font-medium text-sm">{text}</span>
              </li>
            ))}
          </ul>

          <a
            href="/signup"
            className="self-start bg-beige-900 hover:bg-beige-800 text-white font-bold px-7 py-3.5 rounded-3xl text-sm transition-colors"
          >
            הורידי את האפליקציה — חינם
          </a>
        </div>

        {/* Phone mockup */}
        <div className="flex justify-center">
          <div className="relative w-56 sm:w-64">
            <div aria-hidden className="absolute inset-4 rounded-full bg-mustard-200 opacity-30 blur-3xl" />
            <div className="relative bg-beige-50 rounded-[3rem] border-4 border-beige-300 shadow-2xl overflow-hidden aspect-[9/19]">
              <div className="px-3 pt-6 flex flex-col gap-3">
                <div className="bg-mustard-400 rounded-3xl p-4 text-white">
                  <p className="text-xs font-semibold opacity-80">יום רביעי</p>
                  <p className="text-sm font-black mt-0.5">שלום, רוני ✨</p>
                  <p className="text-xs opacity-80 mt-1">נועה ישנה 6.5 שעות</p>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <div className="bg-beige-100 rounded-2xl p-3">
                    <p className="text-base font-black text-beige-800">💤 6.5h</p>
                    <p className="text-xs text-beige-500 mt-0.5">שינה</p>
                  </div>
                  <div className="bg-beige-100 rounded-2xl p-3">
                    <p className="text-base font-black text-beige-800">🍼 4x</p>
                    <p className="text-xs text-beige-500 mt-0.5">האכלות</p>
                  </div>
                </div>
                <div className="bg-white rounded-2xl p-3 border border-beige-200">
                  <p className="text-xs font-bold text-beige-700 mb-2">ציר הזמן</p>
                  {[
                    { time: '07:00', label: 'התעוררות', dot: 'bg-mustard-300' },
                    { time: '09:30', label: 'שינה', dot: 'bg-blue-200' },
                    { time: '11:00', label: 'סדנה 🎬', dot: 'bg-green-200' },
                  ].map((item) => (
                    <div key={item.time} className="flex items-center gap-2 mb-1">
                      <span className={`w-1.5 h-1.5 rounded-full ${item.dot} shrink-0`} />
                      <span className="text-xs text-beige-400 w-9 shrink-0">{item.time}</span>
                      <span className="text-xs text-beige-700">{item.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
