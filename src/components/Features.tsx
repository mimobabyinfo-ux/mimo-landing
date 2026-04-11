const features = [
  {
    id: 'journal',
    emoji: '📅',
    title: 'יומן חכם',
    subtitle: 'כמו Google Calendar לתינוק שלך',
    description: 'תיעוד שינה, האכלות, חיתולים ואבני דרך — בטאץ׳ אחד. ציר זמן ויזואלי שמציג את הרוטינה של היום בלי מאמץ.',
    color: 'bg-blue-50 border-blue-100',
    iconBg: 'bg-blue-100',
  },
  {
    id: 'workshops',
    emoji: '🎬',
    title: 'סדנאות Pro',
    subtitle: 'מומחים שמדברים אליך ישירות',
    description: 'סדנאות וידאו עם מיילדות, מומחיות שינה ותזונאיות. זמינות 24/7, בדיוק כשאת צריכה הכוונה.',
    color: 'bg-mustard-50 border-mustard-100',
    iconBg: 'bg-mustard-100',
  },
  {
    id: 'perks',
    emoji: '🎁',
    title: 'הטבות שותפים',
    subtitle: 'הנחות בלעדיות על מוצרי התינוק',
    description: 'דילים אקסקלוסיביים מחברות המובילות בישראל — ישירות דרך מימו. חוסכת זמן, חוסכת כסף.',
    color: 'bg-green-50 border-green-100',
    iconBg: 'bg-green-100',
  },
]

export default function Features() {
  return (
    <section id="features" className="py-20 px-4 sm:px-6 bg-beige-50">
      <div className="max-w-5xl mx-auto">

        <div className="text-center mb-14">
          <p className="text-mustard-500 font-bold text-sm mb-2 tracking-wide uppercase">מה תמצאי בפנים</p>
          <h2 className="text-3xl sm:text-4xl font-black text-beige-900">
            כל מה שצריכה, במקום אחד
          </h2>
        </div>

        <div className="grid sm:grid-cols-3 gap-6">
          {features.map((f) => (
            <div
              key={f.id}
              className={`rounded-4xl p-6 border flex flex-col gap-4 ${f.color}`}
            >
              <div className={`w-12 h-12 ${f.iconBg} rounded-2xl flex items-center justify-center text-2xl`}>
                {f.emoji}
              </div>
              <div>
                <h3 className="text-xl font-black text-beige-900">{f.title}</h3>
                <p className="text-mustard-600 text-xs font-bold mt-0.5">{f.subtitle}</p>
              </div>
              <p className="text-beige-600 text-sm leading-relaxed">{f.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
