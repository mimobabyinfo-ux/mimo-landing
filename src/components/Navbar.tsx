import { useState } from 'react'
import logoMimo from '../assets/logo-mimo.png'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-cream/90 backdrop-blur-md border-b border-beige">
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="flex items-center gap-2">
          <img src={logoMimo} alt="Mimo" className="h-9 w-auto" />
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8 text-sm font-semibold text-ink">
          <a href="#services" className="hover:text-terra transition-colors">סדנאות</a>
          <a href="#services" className="hover:text-terra transition-colors">מחירים</a>
          <a href="#testimonials" className="hover:text-terra transition-colors">המלצות</a>
        </div>

        {/* CTA */}
        <div className="hidden md:block">
          <a
            href="#contact"
            className="bg-terra hover:opacity-90 text-white font-bold px-5 py-2.5 rounded-2xl transition-opacity text-sm shadow-sm"
          >
            דברו איתי
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2 rounded-xl text-ink"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="תפריט"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {menuOpen
              ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            }
          </svg>
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-cream border-t border-beige px-4 py-4 flex flex-col gap-4">
          <a href="#services" className="text-ink font-semibold text-sm" onClick={() => setMenuOpen(false)}>סדנאות</a>
          <a href="#services" className="text-ink font-semibold text-sm" onClick={() => setMenuOpen(false)}>מחירים</a>
          <a href="#testimonials" className="text-ink font-semibold text-sm" onClick={() => setMenuOpen(false)}>המלצות</a>
          <a
            href="#contact"
            className="bg-terra text-white font-bold px-5 py-3 rounded-2xl text-center text-sm"
            onClick={() => setMenuOpen(false)}
          >
            דברו איתי
          </a>
        </div>
      )}
    </header>
  )
}
