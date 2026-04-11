export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-16">
      {/* Background blobs */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `
            radial-gradient(ellipse 60% 55% at 15% 25%, #F5EBD060 0%, transparent 65%),
            radial-gradient(ellipse 50% 60% at 85% 75%, #EDE4D540 0%, transparent 65%),
            #FAF8F5
          `,
        }}
      />

      <div className="relative z-10 max-w-5xl w-full mx-auto px-4 sm:px-6 py-16 lg:py-24 flex flex-col items-center text-center gap-7">

        {/* Trust pill */}
        <div className="inline-flex items-center gap-2 bg-mustard-50 border border-mustard-200 rounded-full px-4 py-1.5 text-mustard-700 text-xs font-bold">
          <span className="w-2 h-2 rounded-full bg-mustard-400 animate-pulse inline-block" />
          מעל 500 אמהות כבר בליווי מימו
        </div>

        {/* Main headline */}
        <h1 className="text-4xl sm:text-5xl lg:text-[3.75rem] font-black leading-tight text-beige-900 max-w-3xl text-balance">
          הבית של{' '}
          <span className="relative inline-block">
            <span className="relative z-10">אמא ותינוק</span>
            <span
              aria-hidden
              className="absolute inset-x-0 bottom-1.5 h-3.5 bg-mustard-200 -z-0 rounded-sm"
            />
          </span>
          <br />
          מהרגע הראשון
        </h1>

        {/* Sub-headline */}
        <p className="text-xl sm:text-2xl text-beige-600 leading-relaxed max-w-2xl">
          סדנאות התפתחות, ליווי פרטני ושינה — עם מקצועיות, אהבה והקשבה אמיתית.
          <br className="hidden sm:block" />
          <span className="font-semibold text-beige-700">כי את לא צריכה להתמודד עם זה לבד.</span>
        </p>

        {/* CTA row */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full sm:w-auto">
          <a
            href="#workshops"
            className="bg-mustard-400 hover:bg-mustard-500 active:scale-95 text-white font-black text-lg px-9 py-4 rounded-3xl shadow-lg shadow-mustard-200 transition-all duration-200 text-center"
          >
            לסדנאות שלנו ←
          </a>
          <a
            href="#services"
            className="border-2 border-beige-300 hover:border-mustard-300 text-beige-700 hover:text-mustard-600 font-bold text-base px-7 py-4 rounded-3xl transition-all duration-200 text-center"
          >
            כל השירותים
          </a>
        </div>

        {/* Social proof */}
        <div className="flex items-center gap-3 mt-1">
          <div className="flex -space-x-2 space-x-reverse">
            {['👩', '👩🏽', '👩🏻', '👩🏾', '👩🏿'].map((emoji, i) => (
              <div
                key={i}
                className="w-9 h-9 rounded-full bg-beige-200 border-2 border-beige-50 flex items-center justify-center text-sm"
              >
                {emoji}
              </div>
            ))}
          </div>
          <div className="text-sm text-beige-600 text-right">
            <span className="font-bold text-beige-800">⭐ 4.9</span>
            {' '}· אמהות מרוצות אומרות&nbsp;<span className="text-mustard-500 font-bold">"שינה את הכל"</span>
          </div>
        </div>

        {/* Feature quick-pills */}
        <div className="flex flex-wrap justify-center gap-2.5 mt-2">
          {[
            { emoji: '👶', label: 'סדנאות לפי גיל' },
            { emoji: '💆‍♀️', label: 'ליווי פרטני' },
            { emoji: '🌙', label: 'ייעוץ שינה' },
            { emoji: '🤱', label: 'עיסוי תינוקות' },
            { emoji: '📱', label: 'אפליקציה חינמית' },
          ].map(({ emoji, label }) => (
            <span
              key={label}
              className="bg-white border border-beige-200 text-beige-700 text-xs font-semibold px-3 py-1.5 rounded-full shadow-sm"
            >
              {emoji} {label}
            </span>
          ))}
        </div>
      </div>

      {/* Scroll hint */}
      <div className="relative z-10 pb-10 flex flex-col items-center gap-1 text-beige-300">
        <svg className="w-5 h-5 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </section>
  )
}
