export default function AppPreview() {
  return (
    <section id="preview" className="py-20 px-4 sm:px-6 bg-beige-50 overflow-hidden">
      <div className="max-w-5xl mx-auto">

        <div className="text-center mb-14">
          <p className="text-mustard-500 font-bold text-sm mb-2 tracking-wide uppercase">תציצי פנימה</p>
          <h2 className="text-3xl sm:text-4xl font-black text-beige-900">
            פשוט, חכם, ויפה
          </h2>
          <p className="text-beige-600 mt-4 text-lg max-w-xl mx-auto">
            עיצוב נקי שמרגיש כמו לנשום — כי את כבר מספיק עסוקה.
          </p>
        </div>

        {/* Placeholder for app screenshots — replace with real images */}
        <div className="flex justify-center gap-6 flex-wrap">
          {[
            { label: 'יומן יומי', bg: 'bg-beige-100' },
            { label: 'ציר זמן', bg: 'bg-mustard-50' },
            { label: 'סדנאות', bg: 'bg-blue-50' },
          ].map((screen) => (
            <div
              key={screen.label}
              className={`${screen.bg} rounded-[2.5rem] border-2 border-beige-200 w-48 sm:w-56 aspect-[9/19] flex flex-col items-center justify-center gap-3 shadow-lg`}
            >
              <span className="text-4xl">📱</span>
              <span className="text-sm font-bold text-beige-500">{screen.label}</span>
              <span className="text-xs text-beige-400">Screenshot בקרוב</span>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="/signup"
            className="inline-block bg-mustard-400 hover:bg-mustard-500 text-white font-black text-lg px-10 py-4 rounded-3xl shadow-lg shadow-mustard-200 transition-all duration-200"
          >
            רוצה לנסות? התחילי חינם →
          </a>
        </div>
      </div>
    </section>
  )
}
