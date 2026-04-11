export default function HeroSection() {
  return (
    <section
      className="relative min-h-[90vh] flex items-center overflow-hidden pt-16"
      style={{ background: 'linear-gradient(135deg, #E9C46A22 0%, #E9C46A44 100%)', backgroundColor: '#F5EBD0' }}
    >
      {/* Decorative blobs */}
      <div aria-hidden className="absolute top-12 left-8 flex flex-col gap-3 opacity-70">
        <div className="w-10 h-10 rounded-xl" style={{ background: '#E9C46A' }} />
        <div className="w-10 h-10 rounded-xl" style={{ background: '#b5d5d5' }} />
        <div className="w-10 h-10 rounded-xl" style={{ background: '#e8a090' }} />
      </div>
      <div aria-hidden className="absolute bottom-16 left-10 opacity-50 text-5xl select-none">🐣</div>

      <div className="max-w-5xl mx-auto px-6 sm:px-10 w-full py-20">
        <div className="max-w-xl">
          {/* Tag */}
          <p className="text-sm font-bold mb-4 tracking-widest uppercase" style={{ color: '#a07830' }}>
            מימו · ליווי התפתחותי
          </p>

          {/* Headline */}
          <h1 className="text-5xl sm:text-6xl font-black leading-tight mb-6" style={{ color: '#4A3F35' }}>
            צעד קטן
            <br />
            משנה עולם
          </h1>

          {/* Sub */}
          <p className="text-lg leading-relaxed mb-8" style={{ color: '#6a5a4a', maxWidth: '420px' }}>
            את בוכה, קולטת, הולכת, השאלה היא — איך?
            <br />
            באנו ללמד יחד את משאביות הדרך.
          </p>

          {/* CTA */}
          <a
            href="#contact"
            className="inline-block font-bold px-8 py-3.5 rounded-full border-2 transition-all duration-200 hover:scale-105"
            style={{ borderColor: '#4A3F35', color: '#4A3F35', background: 'transparent' }}
            onMouseEnter={e => {
              (e.currentTarget as HTMLAnchorElement).style.background = '#4A3F35'
              ;(e.currentTarget as HTMLAnchorElement).style.color = '#fff'
            }}
            onMouseLeave={e => {
              (e.currentTarget as HTMLAnchorElement).style.background = 'transparent'
              ;(e.currentTarget as HTMLAnchorElement).style.color = '#4A3F35'
            }}
          >
            באנו בזיר
          </a>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 inset-x-0" aria-hidden>
        <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path d="M0 60 C360 0 1080 0 1440 60 L1440 60 L0 60Z" fill="#FDFBF7"/>
        </svg>
      </div>
    </section>
  )
}
