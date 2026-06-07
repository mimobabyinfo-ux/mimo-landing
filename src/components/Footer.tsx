import logoMimo from '../assets/logo-mimo.png'

export default function Footer() {
  return (
    <footer className="py-12 px-4 sm:px-6" style={{ background: '#3A352E', color: '#DCD4C8' }}>
      <div className="max-w-5xl mx-auto">
        <div className="grid sm:grid-cols-3 gap-8 mb-10">
          {/* Brand */}
          <div className="flex flex-col gap-3">
            <img src={logoMimo} alt="Mimo" className="h-10 w-auto" />
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
