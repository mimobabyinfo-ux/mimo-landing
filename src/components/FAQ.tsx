import { useState } from 'react'

// 8 questions. Pricing question removed (prices are visible on the cards);
// "מלווה נוסף" and "איך נרשמים" moved to WhatsApp conversations.
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
    q: 'כמה אמהות יש בקבוצה ומה משך כל מפגש?',
    a: 'קבוצה קטנה של עד 8 אמהות, עם יחס אישי לכל אחת. כל מפגש נמשך שעה וחצי (בסדנת עיסוי תינוקות - שעה ורבע).',
  },
  {
    q: 'מה אם התינוק שלי בוכה, רעב או נרדם במהלך המפגש?',
    a: 'טבעי ומובן לגמרי! עוצרות, מאכילות, מרגיעות - וממשיכים בקצב שלהם. הסדנאות בנויות בדיוק בשביל זה.',
  },
  {
    q: 'צריך להביא משהו מיוחד?',
    a: 'רק טטרה גדולה, אתכן והבייבי כמובן 🤍 כל שאר הציוד - מזרנים, פופים, כדורי פיזיו ואביזרים - כבר מחכה לכן בסטודיו, וגם קפה ונשנושים ממני.',
  },
  {
    q: 'מה אם אפספס מפגש?',
    a: 'קורה, וזה בסדר! כל מפגש מסוכם בקבוצת הוואטסאפ של הסדנה, וניתן להשלים את המפגש החסר עם קבוצה אחרת - על בסיס מקום פנוי.',
  },
  {
    q: 'מה ההבדל בין סדנה לליווי פרטני?',
    a: 'הסדנאות מתקיימות בסטודיו בקבוצה קטנה, לאורך כמה מפגשים ולפי שלבי ההתפתחות. הליווי הפרטני הוא מפגש אישי אצלכן בבית, שמותאם בדיוק לתינוק/ת שלכן. אפשר גם לשלב בין השניים.',
  },
  {
    q: 'אני בהריון - הסדנאות מתאימות לי?',
    a: 'בוקר של מימו פתוח גם לנשים בהריון. לשאר הסדנאות מצטרפים אחרי הלידה, ואשמח לשמור לכן מקום במחזור הקרוב.',
  },
]

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <section id="faq" className="px-5 py-[68px]" style={{ background: '#FAF8F4' }}>
      <div className="max-w-[760px] mx-auto">
        <div className="text-center mb-[30px]">
          <h2 className="m-0 mb-2 text-[30px] sm:text-[34px] font-black" style={{ color: '#A35C3D' }}>
            שאלות נפוצות
          </h2>
          <p className="m-0 text-[15px]" style={{ color: '#818267' }}>
            כל מה שחשוב לדעת לפני שמתחילים
          </p>
        </div>

        <div className="flex flex-col gap-2.5">
          {faqs.map((item, i) => (
            <div
              key={item.q}
              className="rounded-[18px] border overflow-hidden"
              style={{ background: '#FFFDF8', borderColor: '#E6DFD3' }}
            >
              <button
                className="w-full flex items-center gap-3.5 text-right bg-transparent border-0 cursor-pointer px-5 py-[17px]"
                onClick={() => setOpen(open === i ? null : i)}
                aria-expanded={open === i}
              >
                <span className="flex-1 text-base font-bold" style={{ color: '#3A352E' }}>
                  {item.q}
                </span>
                <span className="text-[22px] leading-none shrink-0" style={{ color: '#A35C3D' }}>
                  {open === i ? '−' : '+'}
                </span>
              </button>
              {open === i && (
                <p className="m-0 px-5 pb-[18px] text-[15px]" style={{ color: '#5F5A4E', lineHeight: 1.7 }}>
                  {item.a}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
