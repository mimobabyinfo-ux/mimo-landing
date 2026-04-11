export default function Footer() {
  return (
    <footer className="bg-beige-900 text-beige-300 py-12 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto">
        <div className="grid sm:grid-cols-3 gap-8 mb-10">
          {/* Brand */}
          <div className="flex flex-col gap-3">
            <img src="/mimo_logo.png" alt="Mimo" className="h-8 w-auto brightness-0 invert opacity-80" />
            <p className="text-sm text-beige-400 leading-relaxed">
              המלווה האישי שלך למסע האימהות.
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-col gap-2">
            <p className="text-beige-100 font-bold text-sm mb-1">ניווט</p>
            {['תכונות', 'סדנאות', 'הטבות', 'אודות'].map((link) => (
              <a key={link} href="#" className="text-sm text-beige-400 hover:text-mustard-300 transition-colors">
                {link}
              </a>
            ))}
          </div>

          {/* Legal */}
          <div className="flex flex-col gap-2">
            <p className="text-beige-100 font-bold text-sm mb-1">משפטי</p>
            {['תנאי שימוש', 'מדיניות פרטיות', 'צור קשר'].map((link) => (
              <a key={link} href="#" className="text-sm text-beige-400 hover:text-mustard-300 transition-colors">
                {link}
              </a>
            ))}
          </div>
        </div>

        <div className="border-t border-beige-700 pt-6 flex flex-col sm:flex-row justify-between items-center gap-2 text-xs text-beige-500">
          <p>© 2025 מימו. כל הזכויות שמורות.</p>
          <p>עשוי עם 💛 לאמהות ישראליות</p>
        </div>
      </div>
    </footer>
  )
}
