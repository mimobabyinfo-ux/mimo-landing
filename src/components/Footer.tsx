import logoMimo from '../assets/logo-mimo.png'

export default function Footer() {
  return (
    <footer className="py-12 px-4 sm:px-6" style={{ background: '#3A352E', color: '#DCD4C8' }}>
      <div className="max-w-5xl mx-auto">
        <div className="grid sm:grid-cols-3 gap-8 mb-10">
          {/* Brand */}
          <div className="flex flex-col gap-3">
            <div className="inline-flex self-start rounded-2xl px-4 py-2.5" style={{ background: '#FAF8F4' }}>
              <img src={logoMimo} alt="Mimo" className="h-9 w-auto" />
            </div>
            <p className="text-sm leading-relaxed" style={{ color: '#C6BDA0' }}>
              ליווי התפתחותי, סדנאות ומפגשים לאמהות ולתינוקות — מהסטודיו של מימו ברמת גן.
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-col gap-2">
            <p className="font-bold text-sm mb-1" style={{ color: '#FAF8F4' }}>ניווט</p>
            {[
              { label: 'אודות', href: '#about' },
              { label: 'סדנאות ומחירים', href: '#services' },
              { label: 'המלצות', href: '#testimonials' },
              { label: 'צרו קשר', href: '#contact' },
            ].map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm transition-colors hover:text-[#E7C78A]"
                style={{ color: '#C6BDA0' }}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Contact */}
          <div className="flex flex-col gap-2">
            <p className="font-bold text-sm mb-1" style={{ color: '#FAF8F4' }}>יצירת קשר</p>
            <a
              href="https://wa.me/972559904274"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm transition-colors hover:text-[#E7C78A]"
              style={{ color: '#C6BDA0' }}
            >
              וואטסאפ: 055-9904274
            </a>
            <p className="text-sm" style={{ color: '#C6BDA0' }}>אבא אחימאיר 10, רמת גן</p>

            {/* Social links — Mimo colors */}
            <div className="flex items-center gap-3 mt-3">
              <a
                href="https://www.instagram.com/mimo.brenlevin/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="מימו באינסטגרם"
                className="inline-flex items-center justify-center w-10 h-10 rounded-full transition-transform hover:scale-110"
                style={{ background: '#E7C78A', color: '#3A352E' }}
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5" aria-hidden>
                  <path d="M12 2.2c3.2 0 3.6 0 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.06.41 2.23.06 1.25.07 1.65.07 4.85s0 3.6-.07 4.85c-.05 1.17-.25 1.8-.41 2.23a3.7 3.7 0 0 1-.9 1.38c-.42.42-.82.68-1.38.9-.42.16-1.06.36-2.23.41-1.25.06-1.65.07-4.85.07s-3.6 0-4.85-.07c-1.17-.05-1.8-.25-2.23-.41a3.7 3.7 0 0 1-1.38-.9 3.7 3.7 0 0 1-.9-1.38c-.16-.42-.36-1.06-.41-2.23C2.2 15.6 2.2 15.2 2.2 12s0-3.6.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.06-.36 2.23-.41C8.4 2.2 8.8 2.2 12 2.2Zm0 1.8c-3.14 0-3.51.01-4.75.07-.9.04-1.38.19-1.7.32-.43.16-.74.36-1.06.68-.32.32-.52.63-.68 1.06-.13.32-.28.8-.32 1.7-.06 1.24-.07 1.61-.07 4.75s.01 3.51.07 4.75c.04.9.19 1.38.32 1.7.16.43.36.74.68 1.06.32.32.63.52 1.06.68.32.13.8.28 1.7.32 1.24.06 1.61.07 4.75.07s3.51-.01 4.75-.07c.9-.04 1.38-.19 1.7-.32.43-.16.74-.36 1.06-.68.32-.32.52-.63.68-1.06.13-.32.28-.8.32-1.7.06-1.24.07-1.61.07-4.75s-.01-3.51-.07-4.75c-.04-.9-.19-1.38-.32-1.7a2.85 2.85 0 0 0-.68-1.06 2.85 2.85 0 0 0-1.06-.68c-.32-.13-.8-.28-1.7-.32C15.51 4.01 15.14 4 12 4Zm0 3.06A4.94 4.94 0 1 1 12 16.94 4.94 4.94 0 0 1 12 7.06Zm0 1.8a3.14 3.14 0 1 0 0 6.28 3.14 3.14 0 0 0 0-6.28Zm5.15-.93a1.15 1.15 0 1 1-2.3 0 1.15 1.15 0 0 1 2.3 0Z"/>
                </svg>
              </a>
              <a
                href="https://www.facebook.com/mimo.brenlevin"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="מימו בפייסבוק"
                className="inline-flex items-center justify-center w-10 h-10 rounded-full transition-transform hover:scale-110"
                style={{ background: '#E7C78A', color: '#3A352E' }}
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5" aria-hidden>
                  <path d="M14 8.5V7c0-.7.5-1 1-1h1.5V3.2L14.3 3c-2.3 0-3.8 1.4-3.8 3.8v1.7H8v2.8h2.5V21h3.2v-9.7h2.4l.4-2.8H14Z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div
          className="border-t pt-6 flex flex-col sm:flex-row justify-between items-center gap-2 text-xs"
          style={{ borderColor: '#5A5247', color: '#A39A88' }}
        >
          <p>© 2026 מימו. כל הזכויות שמורות.</p>
          <p>עשוי עם 💛 לאמהות</p>
        </div>
      </div>
    </footer>
  )
}
