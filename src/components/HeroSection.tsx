import heroImg from '../assets/hero-brenda-babies.jpg'
import aboutImg from '../assets/about-brenda.jpg'
import LeadForm from './LeadForm'

export default function HeroSection() {
  return (
    <section id="top" className="px-5 pt-8 pb-14 sm:pt-11" style={{ background: '#FAF8F4' }}>
      <div className="max-w-[1080px] mx-auto grid gap-10 lg:gap-12 lg:grid-cols-2 items-center">
        {/* Column: copy + form */}
        <div className="flex flex-col gap-5 order-2 lg:order-1">
          {/* Kicker */}
          <p className="m-0 text-sm font-bold" style={{ color: '#818267', letterSpacing: '0.2px' }}>
            בית עוטף ומלטף ברמת גן · לך ולבייבי
          </p>

          {/* Headline — underline is a flat span, not an SVG */}
          <h1
            className="m-0 font-black text-[34px] sm:text-[44px] lg:text-[52px]"
            style={{ color: '#A35C3D', lineHeight: 1.12, letterSpacing: '-0.5px' }}
          >
            בעולם מוצף עצות,
            <br />
            הקול הכי חשוב הוא{' '}
            <span className="relative inline-block whitespace-nowrap">
              שלך
              <span
                aria-hidden
                className="absolute rounded-full"
                style={{ right: 2, left: 2, bottom: -2, height: 8, background: '#E7C78A' }}
              />
            </span>
          </h1>

          {/* Sub */}
          <p className="m-0 max-w-[470px] text-lg leading-relaxed" style={{ color: '#5F5A4E' }}>
            במימו את מתחברת חזרה לאינטואיציה שלך - יחד עם אמהות שעוברות בדיוק את מה שאת עוברת.
          </p>

          {/* Trust chips */}
          <div className="flex flex-wrap gap-2">
            {['מלווה התפתחותית מוסמכת', '+200 אמהות', 'קבוצות של עד 8'].map((chip) => (
              <span
                key={chip}
                className="text-[13px] font-semibold px-3.5 py-[7px] rounded-full border"
                style={{ color: '#3A352E', background: '#FFFDF8', borderColor: '#E6DFD3' }}
              >
                {chip}
              </span>
            ))}
          </div>

          {/* THE form — reachable within one scroll on mobile */}
          <div id="lead" style={{ scrollMarginTop: 100 }}>
            <LeadForm variant="hero" />
          </div>
        </div>

        {/* Column: photo + personal card */}
        <div className="flex flex-col gap-3.5 order-1 lg:order-2">
          <div
            className="relative rounded-[28px] overflow-hidden max-h-60 lg:max-h-none"
            style={{ background: '#EADBDD', aspectRatio: '4 / 3' }}
          >
            <img
              src={heroImg}
              alt="ברנדה מוקפת בתינוקות בסדנת התפתחות"
              width={1600}
              height={1200}
              fetchPriority="high"
              className="w-full h-full object-cover block"
              style={{ objectPosition: 'center 60%' }}
            />
          </div>
          <div
            className="hidden lg:flex items-center gap-3 rounded-[20px] border px-4 py-3.5"
            style={{ background: '#FFFDF8', borderColor: '#E6DFD3' }}
          >
            <img
              src={aboutImg}
              alt="ברנדה"
              width={1024}
              height={1024}
              className="rounded-full object-cover block shrink-0"
              style={{ width: 44, height: 44, objectPosition: 'center 30%' }}
            />
            <p className="m-0 text-[13.5px] leading-normal" style={{ color: '#5F5A4E' }}>
              אני ברנדה, מלווה התפתחותית ומדריכת עיסוי תינוקות. אחזור אלייך אישית.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
