const testimonials = [
  {
    name: 'רוני כ.',
    detail: 'אמא לנועה, 4 חודשים',
    text: 'הסדנה שינתה לי את הראש. סוף סוף מישהי שמסבירה לי *למה* נועה בוכה ב-3 בלילה — ומה לעשות. אחרי מפגש 2 כבר ראיתי שיפור אמיתי.',
    service: 'סדנת גוזלות',
  },
  {
    name: 'שירה מ.',
    detail: 'אמא לאדם, 6.5 חודשים',
    text: 'עשיתי ליווי פרטני אחרי שניסיתי כל שיטה שמצאתי בגוגל. שעה וחצי עם המומחית שלנו נתנו לי יותר מחודשיים של חיפושים עצמאיים.',
    service: 'ליווי פרטני',
  },
  {
    name: 'תמר ל.',
    detail: 'אמא למיה, 8 חודשים',
    text: 'הקבוצה היא משהו אחר. לפגוש אמהות שמתמודדות בדיוק עם אותם דברים — זה בפני עצמו שווה זהב. ועל כלים ההתפתחות אני לא מדברת כבר...',
    service: 'סדנת מתגלגלות',
  },
  {
    name: 'ליאת ר.',
    detail: 'אמא לאביגיל, 2 חודשים',
    text: 'אני אמא לראשון שלי ומימו הוא כמו חברה שמומחית לכל דבר. תמיד שם, תמיד עונה, תמיד תומכת — גם ב-3 בלילה דרך האפליקציה.',
    service: 'אפליקציה + סדנה',
  },
  {
    name: 'מיכל ה.',
    detail: 'אמא לרז ולנעם (תאומים!), 5 חודשים',
    text: 'עם תאומים חשבתי שאין כוח. הסדנה הייתה מקום בטוח שהכין אותי לכל מה שבא. הצוות של מימו ידע בדיוק מה אני עוברת.',
    service: 'ליווי פרטני',
  },
  {
    name: 'יעל צ.',
    detail: 'אמא לנתנאל, 7 חודשים',
    text: 'ייעוץ השינה החזיר אותי לאדם. אחרי 7 חודשים של שינה מקוטעת — 3 שבועות עם הגישה שלהם ונתנאל ישן 10 שעות רצוף.',
    service: 'ייעוץ שינה',
  },
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 px-4 sm:px-6 bg-beige-100">
      <div className="max-w-5xl mx-auto">

        <div className="text-center mb-14">
          <p className="text-mustard-500 font-bold text-sm mb-2 tracking-wide uppercase">מה אומרות האמהות</p>
          <h2 className="text-3xl sm:text-4xl font-black text-beige-900">
            הן כבר במסע. את מצטרפת?
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {testimonials.map((t) => (
            <div key={t.name} className="bg-white rounded-4xl p-6 border border-beige-200 shadow-sm flex flex-col gap-4">
              {/* Stars */}
              <div className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <span key={i} className="text-mustard-400 text-base">★</span>
                ))}
              </div>

              {/* Quote */}
              <p className="text-beige-700 text-sm leading-relaxed flex-1">
                &ldquo;{t.text}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center justify-between pt-3 border-t border-beige-100">
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-full bg-mustard-100 flex items-center justify-center text-base shrink-0">
                    👩
                  </div>
                  <div>
                    <p className="font-bold text-beige-800 text-sm leading-tight">{t.name}</p>
                    <p className="text-beige-400 text-xs">{t.detail}</p>
                  </div>
                </div>
                <span className="text-xs font-semibold text-mustard-500 bg-mustard-50 px-2 py-0.5 rounded-full shrink-0 mr-1">
                  {t.service}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
