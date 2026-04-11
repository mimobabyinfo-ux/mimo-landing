import { useState } from 'react'

const testimonials = [
  {
    name: 'עמית כהן',
    detail: '10 ביקורות',
    text: 'טל פשוט מדהימה, חינכית, מקסימה, פרגמטית, מקצוע איטיים את הדרך לנהל ולהדביר איפה חדשות, להדביר אימהות חדשות בחרות מסרטוטים, ולהדביר בחינות חרושות בחרות מסוטוס!!!!!',
    rating: 5,
  },
  {
    name: 'רוני כ.',
    detail: 'אמא לנועה, 4 חודשים',
    text: 'הסדנה שינתה לי את הראש. סוף סוף מישהי שמסבירה לי למה נועה בוכה ב-3 בלילה — ומה לעשות. אחרי מפגש 2 כבר ראיתי שיפור אמיתי.',
    rating: 5,
  },
  {
    name: 'שירה מ.',
    detail: 'אמא לאדם, 6.5 חודשים',
    text: 'עשיתי ליווי פרטני אחרי שניסיתי כל שיטה שמצאתי בגוגל. שעה וחצי עם המומחית שלנו נתנו לי יותר מחודשיים של חיפושים עצמאיים.',
    rating: 5,
  },
  {
    name: 'תמר ל.',
    detail: 'אמא למיה, 8 חודשים',
    text: 'הקבוצה היא משהו אחר. לפגוש אמהות שמתמודדות בדיוק עם אותם דברים — זה בפני עצמו שווה זהב.',
    rating: 5,
  },
  {
    name: 'יעל צ.',
    detail: 'אמא לנתנאל, 7 חודשים',
    text: 'ייעוץ השינה החזיר אותי לאדם. אחרי 7 חודשים של שינה מקוטעת — 3 שבועות עם הגישה שלהם ונתנאל ישן 10 שעות רצוף.',
    rating: 5,
  },
]

export default function Testimonials() {
  const [current, setCurrent] = useState(0)

  return (
    <section id="testimonials" className="py-20 px-6 sm:px-10" style={{ background: '#d8eaea' }}>
      <div className="max-w-3xl mx-auto">

        <h2 className="text-3xl font-black text-center mb-10" style={{ color: '#4A3F35' }}>
          משפחות מספרות
        </h2>

        {/* Card */}
        <div className="bg-white rounded-3xl p-8 shadow-sm relative min-h-[200px]">
          {/* Big quote mark */}
          <div
            className="absolute top-4 left-6 text-8xl font-black leading-none opacity-10 select-none"
            style={{ color: '#4A3F35' }}
          >
            "
          </div>

          {/* Reviewer */}
          <div className="flex items-center gap-3 mb-4">
            <div
              className="w-10 h-10 rounded-full flex items-center justify-center font-black text-white text-sm"
              style={{ background: '#E9C46A' }}
            >
              {testimonials[current].name[0]}
            </div>
            <div>
              <p className="font-bold text-sm" style={{ color: '#4A3F35' }}>{testimonials[current].name}</p>
              <p className="text-xs" style={{ color: '#9a8a7a' }}>{testimonials[current].detail}</p>
            </div>
            <div className="mr-auto flex gap-0.5">
              {Array.from({ length: testimonials[current].rating }).map((_, i) => (
                <span key={i} className="text-base" style={{ color: '#E9C46A' }}>★</span>
              ))}
            </div>
          </div>

          <p className="text-sm leading-relaxed relative z-10" style={{ color: '#5a4a3a' }}>
            "{testimonials[current].text}"
          </p>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-6">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className="rounded-full transition-all duration-200"
              style={{
                width: i === current ? '24px' : '8px',
                height: '8px',
                background: i === current ? '#4A3F35' : '#a09080',
              }}
              aria-label={`ביקורת ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
