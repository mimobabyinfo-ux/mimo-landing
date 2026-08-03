import { useState } from 'react'
import logoMimo from '../assets/logo-mimo.png'

const links = [
  { label: 'סדנאות', href: '#services' },
  { label: 'המלצות', href: '#testimonials' },
  { label: 'מי אני', href: '#about' },
  { label: 'שאלות', href: '#faq' },
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 inset-x-0 z-50">
      <div
        className="backdrop-blur-md border-b"
        style={{ background: 'rgba(250,248,244,0.92)', borderColor: '#E6DFD3' }}
      >
        <nav className="max-w-[1080px] mx-auto px-4 sm:px-5 h-16 flex items-center justify-between gap-3">
          {/* Logo */}
          <a href="#top" className="flex items-center shrink-0">
            <img src={logoMimo} alt="Mimo" width={2250} height={1458} className="h-9 w-auto block" />
          </a>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-[26px] text-sm font-semibold" style={{ color: '#3A352E' }}>
            {links.map((l) => (
              <a key={l.href} href={l.href} className="no-underline hover:text-terra transition-colors" style={{ color: '#3A352E' }}>
                {l.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-2">
            {/* CTA — visible on ALL screen sizes, incl. next to the mobile hamburger */}
            <a
              href="#lead"
              className="font-bold text-sm px-4 sm:px-5 py-2.5 rounded-full no-underline whitespace-nowrap"
              style={{ background: '#A35C3D', color: '#fff' }}
            >
              השאירי פרטים
            </a>

            {/* Mobile hamburger */}
            <button
              className="md:hidden p-2 rounded-xl bg-transparent border-0 cursor-pointer"
              style={{ color: '#3A352E' }}
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="תפריט"
              aria-expanded={menuOpen}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {menuOpen
                  ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                }
              </svg>
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          className="md:hidden border-t px-4 py-4 flex flex-col gap-4"
          style={{ background: '#FAF8F4', borderColor: '#E6DFD3' }}
        >
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="font-semibold text-sm no-underline"
              style={{ color: '#3A352E' }}
              onClick={() => setMenuOpen(false)}
            >
              {l.label}
            </a>
          ))}
        </div>
      )}
    </header>
  )
}
