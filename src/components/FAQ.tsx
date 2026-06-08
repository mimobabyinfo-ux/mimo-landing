import { useState } from 'react'
import { WhatsAppButton } from './WhatsAppButton'

const faqs = [
  {
    q: 'מאיזה גיל מתאימות הסדנאות?',
    a: 'יש סדנאות מגיל לידה: עטופים (לידה עד 3.5 חודשים), עיסוי תינוקות (לידה עד טרום זחילה), ומגלים (3 עד 6 חודשים). לא בטוחה מה מתאים לכן? כתבו לי ונמצא יחד.',
  },
  {
    q: 'איפה הסדנאות מתקיימות?',
    a: 'בסטודיו של מימו, אבא אחימאיר 10, רמת גן (שיכון ותיקים).',
  },
  {
    q: 'אני בהריון — הסדנאות מתאימות לי?',
    a: 'בוקר של מימו פתוח גם לנשים בהריון. לשאר הסדנאות מצטרפים אחרי הלידה, ואשמח לשמור לכן מקום במחזור הקרוב.',
  },
  {
    q: 'כמה זה עולה?',
    a: 'המחירים מופיעים באתר לצד כל סדנה, באופן שקוף. עיסוי תינוקות 450 ₪, סדנאות התפתחותיות 800 ₪, ליווי פרטני 400 ₪ לשעה, ובוקר של מימו 150 ₪.',
  },
  {
    q: 'איך נרשמים?',
    a: 'הכי פשוט — בוואטסאפ. כתבו לי ואתאם אתכן הכול אישית.',
  },
]

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <section id="faq" className="py-20 px-6 sm:px-10" style={{ background: '#EADBDD' }}>
      <div className="max-w-3xl mx-auto">

        <h2 className="text-3xl font-black text-center mb-2" style={{ color: '#A35C3D' }}>
          שאלות נפוצות
        </h2>
        <p className="text-center text-sm mb-12" style={{ color: '#818267' }}>
          כל מה שחשוב לדעת לפני שמתחילים
        </p>

        <div className="flex flex-col">
          {faqs.map((item, i) => (
            <div key={item.q} className="border-b" style={{ borderColor: '#D8C4C8' }}>
              <button
                className="w-full py-5 flex items-center gap-4 text-right"
                onClick={() => setOpen(open === i ? null : i)}
              >
                <p className="flex-1 font-bold text-base" style={{ color: '#3A352E' }}>{item.q}</p>
                <span
                  className="text-2xl leading-none shrink-0 transition-transform duration-200"
                  style={{ color: '#A35C3D', transform: open === i ? 'rotate(45deg)' : 'none' }}
                >
                  +
                </span>
              </button>

              {open === i && (
                <p className="pb-5 text-sm leading-relaxed" style={{ color: '#5a4a3a' }}>
                  {item.a}
                </p>
              )}
            </div>
          ))}
        </div>

        {/* Primary action — WhatsApp */}
        <div className="flex flex-col items-center gap-3 mt-12 text-center">
          <p className="text-sm" style={{ color: '#818267' }}>
            עוד שאלה? אני כאן
          </p>
          <WhatsAppButton />
        </div>
      </div>
    </section>
  )
}
