import heroVideo from '../assets/entervideo _2.mp4'
import { WHATSAPP_URL, WhatsAppIcon } from './WhatsAppButton'
import HeroLeadForm from './HeroLeadForm'
import { track } from '../lib/track'

export default function HeroSection() {
  return (
    <section
      className="relative flex items-start lg:items-center lg:min-h-[90vh] overflow-hidden pt-28 sm:pt-24 lg:pt-28"
      style={{ background: 'linear-gradient(135deg, #E7C78A22 0%, #E7C78A44 100%)', backgroundColor: '#FAF8F4' }}
    >
      {/* Hero video — muted autoplay, fades into the background on large screens */}
      <video
        src={heroVideo}
        autoPlay
        muted
        loop
        playsInline
        aria-label="ברנדה מוקפת בתינוקות בסדנת התפתחות"
        className="hidden lg:block absolute inset-y-0 left-0 h-full w-[44%] object-cover"
        style={{ WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 32%)', maskImage: 'linear-gradient(to right, transparent 0%, black 32%)' }}
      />

      <div className="max-w-5xl mx-auto px-6 sm:px-10 w-full pt-4 pb-12 lg:py-20">
        <div className="max-w-xl">
          {/* Kicker — place + warmth */}
          <p className="text-sm font-bold mb-4" style={{ color: '#A35C3D' }}>
            בית עוטף ומלטף ברמת גן · לך ולבייבי 🤍
          </p>

          {/* Headline — the hook, with a hand-drawn underline accent */}
          <h1 className="text-3xl sm:text-5xl font-black leading-snug mb-8" style={{ color: '#A35C3D' }}>
            בעולם מוצף עצות,
            <br />
            הקול הכי חשוב הוא{' '}
            <span className="relative inline-block whitespace-nowrap">
              שלך
              <svg
                aria-hidden
                viewBox="0 0 200 14"
                preserveAspectRatio="none"
                className="absolute -bottom-2 right-0 left-0 w-full h-3"
              >
                <path d="M4 9 C 55 3, 140 3, 196 8" fill="none" stroke="#E7C78A" strokeWidth="6" strokeLinecap="round" />
              </svg>
            </span>
          </h1>

          {/* Sub — promise: intuition + community */}
          <p className="text-base font-semibold mb-8 leading-relaxed" style={{ color: '#818267', maxWidth: '460px' }}>
            במימו את מתחברת חזרה לאינטואיציה שלך - יחד עם אמהות שעוברות בדיוק את מה שאת עוברת.
          </p>

          {/* Trust strip — social proof, each point on its own line */}
          <div className="flex flex-col gap-2 mb-8 text-sm font-semibold" style={{ color: '#3A352E' }}>
            <span className="inline-flex items-center gap-1">
              <span style={{ color: '#2E8B57' }}>✓</span> מלווה התפתחותית מוסמכת
            </span>
            <span className="inline-flex items-center gap-1">
              <span style={{ color: '#2E8B57' }}>✓</span> +100 אמהות
            </span>
            <span className="inline-flex items-center gap-1">
              <span style={{ color: '#E7C78A', letterSpacing: '1px' }}>★★★★★</span>
            </span>
          </div>

          {/* Offer card — gift + early-registration discount, above the fold */}
          <div
            className="max-w-sm rounded-3xl p-5 mb-8"
            style={{ background: '#FFFDF8', border: '1.5px dashed #A35C3D' }}
          >
            <p className="font-black text-[15px] mb-3" style={{ color: '#8A4B30' }}>🎁 מצטרפות החודש מקבלות:</p>
            <ul className="flex flex-col gap-2.5 text-sm" style={{ color: '#3A352E' }}>
              <li><span style={{ color: '#A35C3D', fontWeight: 800 }}>✓</span> <b>מתנת מימו</b> מפנקת</li>
              <li><span style={{ color: '#A35C3D', fontWeight: 800 }}>✓</span> <b>מחיר מלטף</b> למוקדמות</li>
              <li><span style={{ color: '#A35C3D', fontWeight: 800 }}>✓</span> <b>מקומות מוגבלים</b></li>
            </ul>
          </div>

          {/* CTAs — lead form primary, WhatsApp secondary, scroll link tertiary */}
          <div className="max-w-sm">
            <HeroLeadForm />

            {/* Scarcity — real limited spots */}
            <div className="mt-3 flex items-center gap-2 text-[13px] font-bold" style={{ color: '#8A4B30' }}>
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-60" style={{ background: '#E0533F' }} />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5" style={{ background: '#E0533F' }} />
              </span>
              נותרו 3 מקומות לקבוצת החודש
            </div>

            {/* Secondary — WhatsApp, visually lighter than the primary form CTA */}
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => track('whatsapp_click', { location: 'hero' })}
              className="mt-4 flex items-center justify-center gap-2 w-full font-bold text-sm px-5 py-3 rounded-full transition-colors hover:bg-beige/40"
              style={{ background: '#fff', color: '#3A352E', border: '1.5px solid #DCD4C8' }}
            >
              <span className="inline-flex items-center justify-center w-6 h-6 rounded-full" style={{ background: '#25D366', color: '#fff' }}>
                <WhatsAppIcon className="w-3.5 h-3.5" />
              </span>
              מעדיפה לשאול קודם? דברי איתי בוואטסאפ
            </a>

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

          {/* Mobile hero video — shown on phones/tablets, hidden on desktop (where the faded side video takes over) */}
          <div className="lg:hidden mt-10 rounded-3xl overflow-hidden shadow-lg">
            <video
              src={heroVideo}
              autoPlay
              muted
              loop
              playsInline
              aria-label="ברנדה מוקפת בתינוקות בסדנת התפתחות"
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
