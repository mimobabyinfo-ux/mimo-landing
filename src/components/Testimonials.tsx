import { useState } from 'react'
import { WhatsAppButton } from './WhatsAppButton'

type Testimonial = {
  name: string
  detail: string
  text: string
  rating: number
  photo?: string // optional round client photo; falls back to an initial circle
}

// Testimonials. First names are placeholders — swap in the real ones when available.
const testimonials: Testimonial[] = [
  {
    name: 'מאיה',
    detail: 'בוגרת סדנה',
    text: 'בחיים לא חשבתי שאתחבר לסדנאות, ובסוף הכי נהנינו! למדנו ממך כל כך הרבה, הכרנו אמהות מהממות וילדים מהממים עוד יותר. והכי חשוב — האנרגיה שלך מדבקת והולכת איתנו כל היום. תודה על הזמן והפינוק ביחד.',
    rating: 5,
  },
  {
    name: 'עדי',
    detail: 'בוגרת סדנת עיסוי תינוקות',
    text: 'היה לנו ממש כיף ונגמר מהר מדי. זכינו בקבוצת אמהות ותינוקות מתוקים ובמדריכה מספר אחת. תודה על המקצועיות, הידע, ובעיקר האכפתיות והעטיפה שלך.',
    rating: 5,
  },
  {
    name: 'רוני',
    detail: 'ליווי פרטני',
    text: 'תודה על שעה וחצי של אהבה ולמידה. היה כל כך כיף ולמדנו המון, ואני בטוחה שהכלים שנתת לנו יעזרו לנו מאוד. רואים ומרגישים שאת עוסקת במה שאת הכי אוהבת — ונותנת את כל הלב והנשמה.',
    rating: 5,
  },
  {
    name: 'ליאת',
    detail: 'אמא טרייה',
    text: 'ילדתי לפני שלושה שבועות, ואת לא מבינה כמה התוכן שלך עזר לי. אתמול היה יום קשה — ובאמת שזה עזר לי.',
    rating: 5,
  },
]

export default function Testimonials() {
  const [current, setCurrent] = useState(0)

  return (
    <section id="testimonials" className="py-20 px-6 sm:px-10" style={{ background: '#C3CDD2' }}>
      <div className="max-w-3xl mx-auto">

        <h2 className="text-3xl font-black text-center mb-10" style={{ color: '#A35C3D' }}>
          משפחות מספרות
        </h2>

        {/* Card */}
        <div className="bg-white rounded-3xl p-8 shadow-sm relative min-h-[200px]">
          {/* Big quote mark */}
          <div
            className="absolute top-4 left-6 text-8xl font-black leading-none opacity-10 select-none"
            style={{ color: '#A35C3D' }}
          >
            "
          </div>

          {/* Reviewer */}
          <div className="flex items-center gap-3 mb-4">
            {testimonials[current].photo ? (
              <img
                src={testimonials[current].photo}
                alt={testimonials[current].name}
                className="w-10 h-10 rounded-full object-cover shrink-0"
                loading="lazy"
              />
            ) : (
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center font-black text-sm shrink-0"
                style={{ background: '#E7C78A', color: '#3A352E' }}
              >
                {testimonials[current].name[0]}
              </div>
            )}
            <div>
              <p className="font-bold text-sm" style={{ color: '#3A352E' }}>{testimonials[current].name}</p>
              <p className="text-xs" style={{ color: '#818267' }}>{testimonials[current].detail}</p>
            </div>
            <div className="mr-auto flex gap-0.5">
              {Array.from({ length: testimonials[current].rating }).map((_, i) => (
                <span key={i} className="text-base" style={{ color: '#E7C78A' }}>★</span>
              ))}
            </div>
          </div>

          <p className="text-sm leading-relaxed relative z-10" style={{ color: '#3A352E' }}>
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
                background: i === current ? '#A35C3D' : '#C6BDA0',
              }}
              aria-label={`ביקורת ${i + 1}`}
            />
          ))}
        </div>

        {/* Primary action — WhatsApp */}
        <div className="flex justify-center mt-10">
          <WhatsAppButton />
        </div>
      </div>
    </section>
  )
}
