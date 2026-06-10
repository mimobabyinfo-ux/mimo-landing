import heroImg from '../assets/hero-brenda-babies.jpg'
import { WhatsAppButton } from './WhatsAppButton'
import HeroLeadForm from './HeroLeadForm'

export default function HeroSection() {
  return (
    <section
      className="relative min-h-[90vh] flex items-center overflow-hidden pt-16"
      style={{ background: 'linear-gradient(135deg, #E7C78A22 0%, #E7C78A44 100%)', backgroundColor: '#FAF8F4' }}
    >
      {/* Hero photo — fades into the background on large screens */}
      <img
        src={heroImg}
        alt="ברנדה מוקפת בתינוקות בסדנת התפתחות"
        className="hidden lg:block absolute inset-y-0 left-0 h-full w-[44%] object-cover"
        style={{ WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 32%)', maskImage: 'linear-gradient(to right, transparent 0%, black 32%)' }}
      />

      {/* Decorative blobs */}
      <div aria-hidden className="absolute top-12 left-8 flex flex-col gap-3 opacity-70">
        <div className="w-10 h-10 rounded-xl" style={{ background: '#E7C78A' }} />
        <div className="w-10 h-10 rounded-xl" style={{ background: '#C3CDD2' }} />
        <div className="w-10 h-10 rounded-xl" style={{ background: '#A35C3D' }} />
      </div>
      <div aria-hidden className="absolute bottom-16 left-10 opacity-50 text-5xl select-none">🐣</div>

      <div className="max-w-5xl mx-auto px-6 sm:px-10 w-full py-20">
        <div className="max-w-xl">
          {/* Tag */}
          <p className="text-sm font-bold mb-4 tracking-widest uppercase" style={{ color: '#A35C3D' }}>
            מימו · ליווי התפתחותי
          </p>

          {/* Headline */}
          <h1 className="text-3xl sm:text-5xl font-black leading-tight mb-5" style={{ color: '#A35C3D' }}>
            בית עוטף ומלטף
            <br />
            לך ולבייבי שלך
          </h1>

          {/* Sub — single concrete what/where line */}
          <p className="text-base font-semibold mb-8 leading-relaxed" style={{ color: '#818267', maxWidth: '460px' }}>
            סדנאות ליווי התפתחותי ועיסוי תינוקות, מלידה עד 6 חודשים · בסטודיו של מימו ברמת גן
          </p>

          {/* CTAs — lead form primary, WhatsApp secondary, scroll link tertiary */}
          <div className="max-w-sm">
            <HeroLeadForm />

            {/* Secondary — WhatsApp */}
            <div className="mt-4 flex flex-wrap items-center gap-x-3 gap-y-2">
              <span className="text-sm" style={{ color: '#818267' }}>מעדיפה לדבר עכשיו?</span>
              <WhatsAppButton />
            </div>

            {/* Tertiary — scroll to services */}
            <div className="mt-3">
              <a
                href="#services"
                className="text-sm font-bold underline underline-offset-4"
                style={{ color: '#A35C3D' }}
              >
                לכל הסדנאות ←
              </a>
            </div>
          </div>

          {/* Mobile hero photo — shown on phones/tablets, hidden on desktop (where the faded side image takes over) */}
          <div className="lg:hidden mt-10 rounded-3xl overflow-hidden shadow-lg">
            <img
              src={heroImg}
              alt="ברנדה מוקפת בתינוקות בסדנת התפתחות"
              className="w-full h-64 sm:h-80 object-cover"
            />
          </div>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 inset-x-0" aria-hidden>
        <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path d="M0 60 C360 0 1080 0 1440 60 L1440 60 L0 60Z" fill="#FAF8F4"/>
        </svg>
      </div>
    </section>
  )
}
