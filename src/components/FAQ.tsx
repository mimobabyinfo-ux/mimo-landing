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
    q: 'אני בהריון - הסדנאות מתאימות לי?',
    a: 'בוקר של מימו פתוח גם לנשים בהריון. לשאר הסדנאות מצטרפים אחרי הלידה, ואשמח לשמור לכן מקום במחזור הקרוב.',
  },
  {
    q: 'כמה זה עולה?',
    a: 'המחירים מופיעים באתר לצד כל סדנה, באופן שקוף. עיסוי תינוקות 450 ₪, סדנאות התפתחותיות 800 ₪, ליווי פרטני 400 ₪ לשעה, ובוקר של מימו 150 ₪.',
  },
  {
    q: 'כמה אמהות יש בקבוצה ומה משך כל מפגש?',
    a: 'קבוצה קטנה של עד 8 אמהות, עם יחס אישי לכל אחת. כל מפגש נמשך שעה וחצי (בסדנת עיסוי תינוקות - שעה ורבע).',
  },
  {
    q: 'אפשר להגיע עם מלווה נוסף?',
    a: 'בטח! אפשר להגיע עם בן זוג, אמא או כל מלווה אחר שתרצו - רק עדכנו אותי מראש כדי שאדאג שיהיה מקום נוח לכולם.',
  },
  {
    q: 'צריך להביא משהו מיוחד?',
    a: 'רק טטרה גדולה, אתכן והבייבי כמובן 🤍 כל שאר הציוד - מזרנים, פופים, כדורי פיזיו ואביזרים - כבר מחכה לכן בסטודיו, וגם קפה ונשנושים ממני.',
  },
  {
    q: 'מה אם התינוק שלי בוכה, רעב או נרדם במהלך המפגש?',
    a: 'טבעי ומובן לגמרי! עוצרות, מאכילות, מרגיעות - וממשיכים בקצב שלהם. הסדנאות בנויות בדיוק בשביל זה.',
  },
  {
    q: 'מה אם אפספס מפגש?',
    a: 'קורה, וזה בסדר! כל מפגש מסוכם בקבוצת הוואטסאפ של הסדנה, וניתן להשלים את המפגש החסר עם קבוצה אחרת.',
  },
  {
    q: 'מה ההבדל בין סדנה לליווי פרטני?',
    a: 'הסדנאות מתקיימות בסטודיו בקבוצה קטנה, לאורך כמה מפגשים ולפי שלבי ההתפתחות. הליווי הפרטני הוא מפגש אישי אצלכן בבית, שמותאם בדיוק לתינוק/ת שלכן. אפשר גם לשלב בין השניים.',
  },
  {
    q: 'איך נרשמים?',
    a: 'הכי פשוט - בוואטסאפ. כתבו לי ואתאם אתכן הכול אישית.',
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

        {/* Primary action - WhatsApp */}
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
