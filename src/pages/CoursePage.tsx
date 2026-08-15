import { useEffect } from 'react'
import Shell from '../components/shared/Shell'
import StickyBar from '../components/shared/StickyBar'
import FaqAccordion from '../components/shared/FaqAccordion'
import FitCard from '../components/shared/FitCard'
import { track, setTrackingVariant } from '../lib/track'
import { REGISTER } from '../lib/registerLinks'

import logoMimo from '../assets/logo-mimo.png'
import aboutBrenda from '../assets/about-brenda.jpg'
import mimoGoose from '../assets/mimo-goose.png'
import gallery2 from '../assets/gallery-2.jpg'

const BUY = REGISTER.course
const WA = `https://wa.me/972533041277?text=${encodeURIComponent(
  'היי ברנדה! יש לי שאלה על הקורס הדיגיטלי של עיסוי תינוקות',
)}`

// NOTE: this page deliberately has NO testimonials section. Every testimonial
// we hold is from a mother who attended an in-person workshop, not a buyer of
// the digital course — showing them here would be misleading. When real
// course testimonials exist, add a dedicated section.

type Lesson = { title: string; kind: string; read?: boolean }

const LESSONS: Lesson[] = [
  { title: 'ברוכה הבאה', kind: 'לקריאה', read: true },
  { title: 'לפני שמתחילות', kind: 'לקריאה', read: true },
  { title: 'עיסוי רגליים ומפרקים', kind: '1 סרטון' },
  { title: 'עיסוי בטן והקלה על גזים', kind: '1 סרטון' },
  { title: 'עיסוי ידיים ומפרקים', kind: '1 סרטון' },
  { title: 'עיסוי בית החזה', kind: '1 סרטון' },
  { title: 'עיסוי גב, עורף וטוסיק', kind: '1 סרטון' },
  { title: 'עיסוי פנים', kind: '1 סרטון' },
  { title: 'לסיום', kind: 'לקריאה', read: true },
]

const FAQS = [
  {
    q: 'מאיזה גיל אפשר להתחיל?',
    a: 'מגיל לידה. הקורס בנוי לתינוקות מלידה ועד 6 חודשים, ומראה איך להתאים את המגע לגיל ולמצב של הבייבי.',
  },
  {
    q: 'צריך שמן או ציוד מיוחד?',
    a: 'לא. מספיק מקום רך, חדר חמים ושמן צמחי פשוט. בשיעור "לפני שמתחילות" אני מסבירה בדיוק מה כן ומה לא.',
  },
  {
    q: 'כמה זמן זה לוקח?',
    a: 'כל סרטון הוא כמה דקות. אפשר לצפות בהכל בערב אחד, או ללמוד תנועה אחת בכל פעם ולתרגל אותה.',
  },
  {
    q: 'עשיתי כבר את הסדנה הפרונטלית, שווה לי?',
    a: 'אם השתתפת בסדנה, את כבר יודעת את התוכן. הקורס נועד למי שלא יכולה להגיע לסטודיו.',
  },
]

const FOR_YOU = [
  'הבייבי שלך מגיל לידה ועד 6 חודשים',
  'את רוצה כלי שאפשר להתחיל להשתמש בו כבר הערב',
  'גזים, אי נוחות או קושי להירגע ולהירדם מוכרים לך',
  'אין לך אפשרות להגיע לסדנה, או שזה יקר לך כרגע',
]

const NOT_FOR_YOU = [
  'את מחפשת אבחון או טיפול רפואי, לזה יש רופא',
  'כבר השתתפת בסדנת העיסוי הפרונטלית שלי',
]

function BookIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden className="block h-[15px] w-[15px]">
      <path d="M12 6.2C10.4 5 8.4 4.4 6.2 4.4c-.9 0-1.8.1-2.6.3-.4.1-.6.4-.6.8v11.3c0 .5.5.9 1 .8.7-.2 1.4-.2 2.2-.2 2 0 3.9.6 5.3 1.7.3.2.7.2 1 0 1.4-1.1 3.3-1.7 5.3-1.7.8 0 1.5.1 2.2.2.5.1 1-.3 1-.8V5.5c0-.4-.2-.7-.6-.8-.8-.2-1.7-.3-2.6-.3-2.2 0-4.2.6-5.8 1.8Zm0 2v9.1c-1.5-.8-3.2-1.2-5-1.2-.6 0-1.1 0-1.7.1V6.1c.5-.1 1-.1 1.5-.1 1.9 0 3.7.7 5.2 2Z" />
    </svg>
  )
}

function PlayIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden className="block h-[13px] w-[13px]">
      <path d="M8 5.6c0-.8.9-1.3 1.6-.9l8.2 5.1c.6.4.6 1.3 0 1.7l-8.2 5.1c-.7.4-1.6-.1-1.6-.9V5.6Z" />
    </svg>
  )
}

export default function CoursePage() {
  useEffect(() => {
    setTrackingVariant('course')
    document.title = 'עיסוי תינוקות | הקורס הדיגיטלי של מימו'
  }, [])

  const buy = (placement: string) => () =>
    track('workshop_register_click', { workshop: 'course', placement })

  return (
    <Shell>
      <div className="flex flex-col items-center gap-1 px-[18px] pb-3 pt-[18px]">
        <img src={logoMimo} alt="Mimo" className="block h-[42px] w-auto" />
        <span className="font-script text-[22px] leading-none" style={{ color: '#818267' }}>
          בית עוטף ומלטף
        </span>
      </div>

      <section className="px-4">
        <div className="overflow-hidden rounded-[32px]" style={{ background: '#EADBDD' }}>
          <img
            src={gallery2}
            alt="תינוק על הבטן בליווי הידיים של ברנדה"
            className="block w-full"
            style={{ aspectRatio: '5 / 4', objectFit: 'cover', objectPosition: 'center 40%' }}
          />
        </div>
      </section>

      <section className="flex flex-col gap-3.5 px-4 pt-5">
        <span
          className="self-center rounded-full px-[15px] py-[7px] text-[12.5px] font-extrabold"
          style={{ color: '#3A352E', background: '#E7C78A' }}
        >
          מגיל לידה ועד 6 חודשים
        </span>
        <h1
          className="m-0 text-center font-display text-[33px] font-bold leading-[1.22]"
          style={{ color: '#3A352E' }}
        >
          גזים, אי נוחות, וקושי להירגע ולהירדם
        </h1>
        <p className="m-0 text-center text-[17.5px] leading-[1.7]" style={{ color: '#5F5A4E' }}>
          יש משהו שאת יכולה לעשות עם הידיים שלך. אני אלמד אותך צעד אחר צעד: נעים, בטוח ומחבר.
        </p>
        <p className="m-0 text-center text-base font-extrabold" style={{ color: '#A35C3D' }}>
          עיסוי תינוקות · הקורס הדיגיטלי של מימו
        </p>
        <a
          href={BUY}
          target="_blank"
          rel="noopener noreferrer"
          onClick={buy('hero')}
          className="rounded-full text-center text-[19px] font-extrabold no-underline"
          style={{ background: '#E7C78A', color: '#3A352E', padding: 19, minHeight: 58 }}
        >
          לרכישה · 97 ₪ ←
        </a>
        <div className="flex flex-wrap justify-center gap-2">
          {['גישה מיידית', 'מהטלפון', 'שלך לתמיד'].map((c) => (
            <span
              key={c}
              className="rounded-full px-3.5 py-2 text-[13px] font-semibold"
              style={{ color: '#5F5A4E', background: '#FFFDF8', border: '1px solid #EDE6DA' }}
            >
              {c}
            </span>
          ))}
        </div>
      </section>

      {/* Empathy */}
      <section className="px-4 pt-[34px]">
        <div className="flex flex-col gap-3 rounded-[28px] p-6" style={{ background: '#EADBDD' }}>
          <p className="m-0 text-[17.5px] leading-[1.8]" style={{ color: '#3A352E' }}>
            את מכירה את הרגע הזה. הוא מכווץ את הרגליים, בוכה, ואת עומדת מעליו ולא יודעת מה לעשות.
          </p>
          <p className="m-0 text-[17.5px] leading-[1.8]" style={{ color: '#3A352E' }}>
            גוגל אומר לך חמישה דברים סותרים, והקבוצה בוואטסאפ עוד עשרה.
          </p>
          <p className="m-0 text-[17.5px] font-bold leading-[1.8]" style={{ color: '#3A352E' }}>
            ואת רק רוצה לדעת מה לעשות עכשיו, עם הידיים שלך.
          </p>
        </div>
      </section>

      {/* Curriculum */}
      <section className="px-4 pt-[34px]">
        <div
          className="flex flex-col gap-[9px] rounded-[28px] p-[22px]"
          style={{ background: '#FFFDF8', border: '1px solid #E6DFD3' }}
        >
          <div className="mb-1.5 flex items-baseline justify-between gap-2.5">
            <h2 className="m-0 font-display text-2xl font-bold" style={{ color: '#3A352E' }}>
              מה יש בפנים
            </h2>
            <span className="whitespace-nowrap text-[13px] font-extrabold" style={{ color: '#A35C3D' }}>
              12 שיעורים · 6 סרטונים
            </span>
          </div>
          {LESSONS.map((l) => (
            <div
              key={l.title}
              className="flex items-center gap-3 rounded-2xl px-[15px] py-3"
              style={{ background: '#FAF8F4' }}
            >
              <span
                className="inline-flex shrink-0 items-center justify-center rounded-full"
                style={{
                  width: 32,
                  height: 32,
                  background: l.read ? '#C3CDD2' : '#E7C78A',
                  color: '#3A352E',
                }}
              >
                {l.read ? <BookIcon /> : <PlayIcon />}
              </span>
              <span className="flex-1 text-[15.5px] font-semibold" style={{ color: '#3A352E' }}>
                {l.title}
              </span>
              <span className="whitespace-nowrap text-[12.5px]" style={{ color: '#818267' }}>
                {l.kind}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Fit */}
      <section className="px-4 pt-[34px]">
        <FitCard forYou={FOR_YOU} notForYou={NOT_FOR_YOU} />
      </section>

      {/* Who teaches */}
      <section className="px-4 pt-[34px]">
        <div
          className="rounded-[28px] p-[22px]"
          style={{ background: '#FFFDF8', border: '1px solid #E6DFD3' }}
        >
          <div className="mb-3.5 flex items-center gap-[15px]">
            <img
              src={aboutBrenda}
              alt="ברנדה, מדריכת עיסוי תינוקות"
              loading="lazy"
              className="block shrink-0 rounded-full"
              style={{ width: 88, height: 88, objectFit: 'cover', objectPosition: 'center 30%' }}
            />
            <div className="flex flex-col">
              <span className="font-script text-[25px] leading-[1.1]" style={{ color: '#818267' }}>
                מי מלמדת
              </span>
              <h2 className="m-0 font-display text-[28px] font-bold" style={{ color: '#A35C3D' }}>
                אני ברנדה
              </h2>
            </div>
          </div>
          <p className="m-0 mb-3 text-[16.5px] leading-[1.8]" style={{ color: '#3A352E' }}>
            מייסדת מימו, מלווה התפתחותית מוסמכת ומדריכת עיסוי תינוקות. אני מלמדת עיסוי תינוקות
            בסדנאות אינטימיות בקבוצות קטנות, בגינה הירוקה של מימו ברמת גן.
          </p>
          <p className="m-0 text-[16.5px] leading-[1.8]" style={{ color: '#3A352E' }}>
            הקורס הדיגיטלי הוא בדיוק אותו תוכן: אותו סדר, אותה שפה, אותן תנועות. רק שאת עושה אותו
            בבית, בקצב שלך, וחוזרת אליו מתי שבא לך.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-4 pt-[34px]">
        <FaqAccordion items={FAQS} />
      </section>

      {/* Close */}
      <section
        className="relative mt-9 overflow-hidden px-4 py-10"
        style={{ background: '#EADBDD' }}
      >
        <img
          src={mimoGoose}
          alt=""
          className="absolute h-auto w-[110px]"
          style={{ left: -14, bottom: -10, opacity: 0.45 }}
        />
        <div className="relative flex flex-col items-center gap-3.5 text-center">
          <h2
            className="m-0 font-display text-[32px] font-bold leading-[1.25]"
            style={{ color: '#A35C3D' }}
          >
            97 ₪. פעם אחת. שלך לתמיד.
          </h2>
          <p
            className="m-0 max-w-[380px] text-[16.5px] leading-[1.7]"
            style={{ color: '#3A352E' }}
          >
            בלי מנוי ובלי תאריך תפוגה. משאירה פרטים, משלמת, ונכנסת לקורס.
          </p>
          <a
            href={BUY}
            target="_blank"
            rel="noopener noreferrer"
            onClick={buy('close')}
            className="w-full rounded-full text-center text-[19px] font-extrabold no-underline"
            style={{ background: '#A35C3D', color: '#fff', padding: 19, minHeight: 58 }}
          >
            אני רוצה את הקורס ←
          </a>
          <span className="text-sm" style={{ color: '#5F5A4E' }}>
            מיד אחרי התשלום נשלח אלייך מייל עם קישור ישיר לקורס
          </span>
        </div>
      </section>

      <footer
        className="flex flex-col gap-2 px-5 py-[26px]"
        style={{ background: '#3A352E', color: '#C6BDA0' }}
      >
        <p className="m-0 text-[14.5px]">מימו · אבא אחימאיר 10, רמת גן</p>
        <a
          href={WA}
          target="_blank"
          rel="noopener noreferrer"
          data-wa-location="course-footer"
          className="flex items-center text-[14.5px] font-bold no-underline"
          style={{ color: '#E7C78A', minHeight: 44 }}
        >
          שאלה לפני שקונים? דברי איתי בוואטסאפ
        </a>
        <p className="m-0 mt-1.5 text-xs" style={{ color: '#A39A88' }}>
          © 2026 מימו
        </p>
      </footer>

      <StickyBar href={BUY} label="לרכישת הקורס · 97 ₪" waUrl={WA} />
    </Shell>
  )
}
