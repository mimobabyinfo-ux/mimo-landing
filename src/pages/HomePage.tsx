import { useState } from 'react'
import Shell from '../components/shared/Shell'
import StickyBar from '../components/shared/StickyBar'
import LeadForm from '../components/shared/LeadForm'
import FaqAccordion from '../components/shared/FaqAccordion'
import NextCohortChip, { useNextCohort } from '../components/shared/NextCohortChip'
import { track } from '../lib/track'
import { REGISTER } from '../lib/registerLinks'

import logoMimo from '../assets/logo-mimo.png'
import heroBrenda from '../assets/hero-brenda-babies.jpg'
import aboutBrenda from '../assets/about-brenda.jpg'
import mimoGoose from '../assets/mimo-goose.png'
import gallery1 from '../assets/gallery-1.jpg'
import gallery2 from '../assets/gallery-2.jpg'
import gallery3 from '../assets/gallery-3.jpg'
import gallery4 from '../assets/gallery-4.jpg'
import gallery5 from '../assets/gallery-5.jpg'
import dadBaby from '../assets/dad-baby.jpg'
import recommendationVideo from '../assets/recomentation.MP4?url'
import recommendationPoster from '../assets/recomentation-poster.jpg'
import waShot3 from '../assets/testimonial-wa-3.jpg'
import waShot4 from '../assets/testimonial-wa-4.jpg'
import waShot5 from '../assets/testimonial-wa-5.jpg'
import waShot6 from '../assets/testimonial-wa-6.jpeg'
import waShot7 from '../assets/testimonial-wa-7.jpg'
import waShot8 from '../assets/testimonial-wa-8.jpg'
import prodMarakas from '../assets/marakas.jpeg'
import prodRasanEtz from '../assets/rasanmeech.png'
import prodRasanSratim from '../assets/rasanimsratim.png'
import prodPof from '../assets/pof.jpeg'
import prodArnabi from '../assets/arnabimimo.jpeg'
import prodTik from '../assets/tikmimo.jpeg'

const WA = 'https://wa.me/972533041277'
const WA_GENERAL = `${WA}?text=${encodeURIComponent('היי ברנדה! הגעתי דרך האתר ואשמח לשמוע פרטים על הסדנאות')}`
const WA_PROMO = `${WA}?text=${encodeURIComponent('היי ברנדה! אנחנו חברות שרוצות להירשם יחד לסדנה ולקבל את ההנחה')}`
const WA_ORDER = `${WA}?text=${encodeURIComponent('היי ברנדה! הגעתי דרך האתר ואשמח להזמין מוצר משלים')}`
const MAPS_URL =
  'https://www.google.com/maps/search/?api=1&query=' + encodeURIComponent('אבא אחימאיר 10, רמת גן')

type Workshop = {
  title: string
  age: string
  meta: string
  price: string
  priceNote: string
  bullets: string[]
  link: string
  description: string
}

const WORKSHOPS: Workshop[] = [
  {
    title: 'סדנת עטופים · ליווי התפתחותי',
    age: 'מלידה עד 3.5 חודשים',
    meta: '5 מפגשים של שעה וחצי · קבוצה של עד 8 אמהות',
    price: '800 ₪',
    priceNote: 'לכל הסדנה',
    link: REGISTER.swaddled,
    bullets: [
      'הסתגלות הדרגתית מהרחם אל העולם',
      'עידוד שכיבה על הבטן וחיזוק השרירים',
      'כלים להרגעה, הרפיה והקלה על גזים',
      'קבוצת וואטסאפ עם סיכומים ומתנה בסיום',
    ],
    description: `מה נלמד ונחווה:
• ניצול חלונות ערות
• חיבור ותקשורת דרך מגע, קול ומבט
• חשיפה למרקמים וחוויות תחושתיות
• שימוש בפוף, מנשא בד וכדור פיזיו
• שיווי משקל ותנועה במרחב

כולל קבוצת וואטסאפ עם סיכומים וליווי בין המפגשים, זמן בגינה הירוקה של מימו עם קפה ונשנושים, ומתנה אישית בסיום.
הסטודיו: אבא אחימאיר 10, רמת גן (שיכון ותיקים).`,
  },
  {
    title: 'סדנת מגלים · ליווי התפתחותי',
    age: 'מגיל 3/3.5 עד 6 חודשים',
    meta: '5 מפגשים של שעה וחצי · קבוצה של עד 8 אמהות',
    price: '800 ₪',
    priceNote: 'לכל הסדנה',
    link: REGISTER.discoverers,
    bullets: [
      'גיל 4 חודשים המופלא והשינויים שמגיעים איתו',
      'התהפכות מהבטן לגב ומהגב לבטן',
      'הכנת הגוף לקראת זחילה',
      'קבוצת וואטסאפ עם סיכומים ומתנה בסיום',
    ],
    description: `מה נלמד ונחווה:
• עידוד שכיבה על הבטן וחיזוק חגורת הכתפיים
• חשיבות קו האמצע וחצייתו
• גילוי כפות הידיים והרגליים ומודעות לגוף
• העברות משקל, שיווי משקל ותנועה במרחב
• מרקמים, משחקי תקשורת וחוויות תחושתיות
• שימוש בפוף, כדור פיזיו ואביזרים מהבית
• כלים להרגעה, הרפיה וזמן איכות משותף

זמן בשבילך בגינה הירוקה של מימו, עם קפה ונשנושים מפנקים ממני, ומתנה אישית בסיום הסדנה.
הסטודיו: אבא אחימאיר 10, רמת גן.`,
  },
  {
    title: 'סדנת עיסוי תינוקות',
    age: 'מלידה עד טרום זחילה',
    meta: '3 מפגשים של שעה ורבע · קבוצה של עד 7 אמהות',
    price: '450 ₪',
    priceNote: 'לכל הסדנה',
    link: REGISTER.massage,
    bullets: [
      'לימוד עיסוי תינוקות צעד אחר צעד',
      'עזרה במצבים של גזים, כאבי בטן וקושי להירדם',
      'כלים פשוטים שתומכים בהתפתחות של הבייבי',
      'בונוס: ספר הליווי הדיגיטלי של מימו',
    ],
    description: `מה כוללת הסדנה:
• עיסוי בצורה נעימה ובטוחה לאזורים שונים בגוף: רגליים, ידיים, בטן, בית חזה, גב, עורף, טוסיק ופנים
• קבוצת וואטסאפ עם סיכומים וליווי בין המפגשים
• זמן בגינה הירוקה של מימו עם קפה ונשנושים
• מתנה אישית בסיום

בונוס מיוחד למשתתפות: "ספר הליווי הדיגיטלי של מימו", הסברים, שלבי העיסוי וסרטונים שבהם אני מדגימה, כדי שתוכלי לחזור לזה גם בבית.
הסטודיו: אבא אחימאיר 10, רמת גן (שיכון ותיקים).`,
  },
]

const EXTRAS = [
  {
    title: 'ליווי פרטני בבית',
    short: 'מפגש של שעה אצלך בבית, אני מגיעה אלייך',
    price: '400 ₪',
    link: REGISTER.private,
  },
  { title: 'מפגש אבות', short: 'מרחב מיוחד לאבות טריים', price: '150 ₪', link: REGISTER.dads },
  { title: 'מתנת לידה', short: 'הפינוק המושלם לחברה שזה עתה ילדה', price: 'בתיאום', link: WA_GENERAL },
]

const COURSE_LESSONS = [
  { title: 'ברוכה הבאה', kind: 'לקריאה' },
  { title: 'לפני שמתחילות', kind: 'לקריאה' },
  { title: 'עיסוי רגליים ומפרקים', kind: '1 סרטון' },
  { title: 'עיסוי בטן והקלה על גזים', kind: '1 סרטון' },
  { title: 'עיסוי ידיים ומפרקים', kind: '1 סרטון' },
  { title: 'עיסוי בית החזה', kind: '1 סרטון' },
  { title: 'עיסוי גב, עורף וטוסיק', kind: '1 סרטון' },
  { title: 'עיסוי פנים', kind: '1 סרטון' },
]

const STEPS = [
  {
    num: '01',
    title: 'בוחרות את ההתאמה',
    body: 'בוחרות יחד את הליווי שמתאים לכן ולשלב של הבייבי: סדנה קבוצתית או ליווי פרטני בבית.',
  },
  {
    num: '02',
    title: 'נפגשות ולומדות',
    body: 'מפגשים אינטימיים בקבוצה קטנה, עם יחס אישי, מקום לשאלות ותרגול מעשי, בקצב שלכן, בלי לחץ.',
  },
  {
    num: '03',
    title: 'ממשיכות יחד',
    body: 'קבוצת וואטסאפ עם סיכומים וליווי בין המפגשים, קהילה תומכת ומתנה אישית בסיום. אתן לא לבד בדרך.',
  },
]

const SHOTS = [waShot3, waShot4, waShot5, waShot6, waShot7, waShot8]

// See CampaignPage: anything set over a photo gets a shadow so contrast never
// depends on which part of the picture happens to be behind it.
const ON_PHOTO_SHADOW = '0 1px 14px rgba(58,53,46,0.9)'

const PRODUCTS = [
  { image: prodMarakas, title: 'מרקס ערמונים', desc: 'גירוי שמיעתי עדין לחיזוק האחיזה והקשב', price: '₪60' },
  { image: prodRasanEtz, title: 'רעשן מעץ', desc: 'רעשן טבעי לאחיזה ראשונית ומשחק חושי', price: '₪30' },
  { image: prodRasanSratim, title: 'רעשן עם סרטים', desc: 'צבעים ומרקמים לעידוד התבוננות ומעקב', price: '₪20' },
  { image: prodPof, title: 'פוף 110/80', desc: 'מרחב רך ובטוח לשכיבה על הבטן ולמשחק', price: '₪270' },
  { image: prodArnabi, title: 'ארנבי של מימו', desc: 'בובת ארנב רכה ומלטפת, חבר ראשון לבייבי', price: '₪40' },
  { image: prodTik, title: 'תיק חיתולים של מימו', desc: 'תיק נוח ומרווח ליציאות עם התינוק', price: '₪60' },
]

const FAQS = [
  {
    q: 'מאיזה גיל מתאימות הסדנאות?',
    a: 'יש סדנאות מגיל לידה: עטופים (לידה עד 3.5 חודשים), עיסוי תינוקות (לידה עד טרום זחילה), ומגלים (3 עד 6 חודשים). לא בטוחה מה מתאים לכן? כתבו לי ונמצא יחד.',
  },
  { q: 'איפה הסדנאות מתקיימות?', a: 'בסטודיו של מימו, אבא אחימאיר 10, רמת גן (שיכון ותיקים).' },
  {
    q: 'כמה אמהות יש בקבוצה ומה משך כל מפגש?',
    a: 'קבוצה קטנה של עד 8 אמהות, עם יחס אישי לכל אחת. כל מפגש נמשך שעה וחצי (בסדנת עיסוי תינוקות, שעה ורבע).',
  },
  {
    q: 'מה אם התינוק שלי בוכה, רעב או נרדם במהלך המפגש?',
    a: 'טבעי ומובן לגמרי! עוצרות, מאכילות, מרגיעות, וממשיכים בקצב שלהם. הסדנאות בנויות בדיוק בשביל זה.',
  },
  {
    q: 'צריך להביא משהו מיוחד?',
    a: 'רק טטרה גדולה, אתכן והבייבי כמובן. כל שאר הציוד, מזרנים, פופים, כדורי פיזיו ואביזרים, כבר מחכה לכן בסטודיו, וגם קפה ונשנושים ממני.',
  },
  {
    q: 'מה אם אפספס מפגש?',
    a: 'קורה, וזה בסדר! כל מפגש מסוכם בקבוצת הוואטסאפ של הסדנה, וניתן להשלים עד שני מפגשים עם קבוצה אחרת, על בסיס מקום פנוי.',
  },
  {
    q: 'מה ההבדל בין סדנה לליווי פרטני?',
    a: 'הסדנאות מתקיימות בסטודיו בקבוצה קטנה, לאורך כמה מפגשים ולפי שלבי ההתפתחות. הליווי הפרטני הוא מפגש אישי אצלכן בבית, שמותאם בדיוק לתינוק/ת שלכן. אפשר גם לשלב בין השניים.',
  },
  {
    q: 'אני בהריון, הסדנאות מתאימות לי?',
    a: 'בוקר של מימו פתוח גם לנשים בהריון. לשאר הסדנאות מצטרפים אחרי הלידה, ואשמח לשמור לכן מקום במחזור הקרוב.',
  },
]

const NAV = [
  { href: '#services', label: 'סדנאות' },
  { href: '#course', label: 'הקורס הדיגיטלי' },
  { href: '#testimonials', label: 'המלצות' },
  { href: '#about', label: 'מי אני' },
  { href: '#faq', label: 'שאלות' },
]

function WorkshopCard({ w }: { w: Workshop }) {
  const [open, setOpen] = useState(false)
  const cohort = useNextCohort(w.link)

  return (
    <div
      className="flex flex-col rounded-[28px] p-[22px]"
      style={{ background: '#FAF8F4', border: '1px solid #E6DFD3' }}
    >
      <div className="mb-2.5 flex flex-wrap gap-[7px]">
        <span
          className="rounded-full px-3 py-1.5 text-[12.5px] font-extrabold"
          style={{ color: '#A35C3D', background: '#E7C78A55' }}
        >
          {w.age}
        </span>
        <NextCohortChip info={cohort} />
      </div>

      <h3 className="m-0 font-display text-[23px] font-bold leading-[1.3]" style={{ color: '#3A352E' }}>
        {w.title}
      </h3>
      <p className="m-0 mt-1.5 text-[14.5px] leading-[1.55]" style={{ color: '#818267' }}>
        {w.meta}
      </p>

      <div className="mt-3.5 flex items-baseline gap-2">
        <span className="font-display text-[32px] font-black" style={{ color: '#A35C3D' }}>
          {w.price}
        </span>
        <span className="text-[13.5px]" style={{ color: '#818267' }}>
          {w.priceNote}
        </span>
      </div>

      <div className="mt-3.5 flex flex-col gap-[9px]">
        {w.bullets.map((b) => (
          <div
            key={b}
            className="flex items-start gap-2.5 text-[15px] leading-[1.5]"
            style={{ color: '#3A352E' }}
          >
            <span className="font-extrabold" style={{ color: '#A35C3D' }}>
              ✓
            </span>
            <span>{b}</span>
          </div>
        ))}
      </div>

      {open && (
        <p
          className="m-0 mt-3.5 whitespace-pre-line text-[14.5px] leading-[1.8]"
          style={{ color: '#5F5A4E' }}
        >
          {w.description}
        </p>
      )}

      <button
        type="button"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        className="mt-3 flex cursor-pointer items-center self-stretch whitespace-nowrap border-0 bg-transparent p-0 text-[14.5px] font-bold underline underline-offset-4"
        style={{ color: '#A35C3D', minHeight: 44, fontFamily: 'inherit' }}
      >
        {open ? 'פחות פרטים' : 'כל הפרטים על הסדנה'}
      </button>

      <a
        href={w.link}
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => track('workshop_register_click', { workshop: w.title })}
        className="mt-4 rounded-full text-center text-[17px] font-extrabold no-underline"
        style={{ background: '#A35C3D', color: '#fff', padding: 17, minHeight: 54 }}
      >
        להרשמה לסדנה
      </a>
    </div>
  )
}

export default function HomePage() {
  return (
    <Shell>
      <header
        className="sticky top-0 z-50"
        style={{
          background: 'rgba(250,248,244,0.94)',
          backdropFilter: 'blur(12px)',
          WebkitBackdropFilter: 'blur(12px)',
          borderBottom: '1px solid #EDE6DA',
        }}
      >
        <div className="flex items-center justify-between gap-3 px-[18px] py-2.5">
          {/* 44px tall even though the logo is 38px, so the tap target obeys the rule */}
          <a href="#top" className="flex items-center" style={{ minHeight: 44 }}>
            <img src={logoMimo} alt="Mimo" className="block h-[38px] w-auto" />
          </a>
          <a
            href="#lead"
            className="flex items-center whitespace-nowrap rounded-full px-5 text-[15px] font-bold no-underline"
            style={{ background: '#A35C3D', color: '#fff', minHeight: 46 }}
          >
            השאירי פרטים
          </a>
        </div>
        <div
          className="flex gap-2 overflow-x-auto px-[18px] pb-2.5"
          style={{ scrollbarWidth: 'none' }}
        >
          {NAV.map((n) => (
            <a
              key={n.href}
              href={n.href}
              className="flex shrink-0 items-center rounded-full px-4 text-sm font-semibold no-underline"
              style={{
                color: '#5F5A4E',
                background: '#FFFDF8',
                border: '1px solid #EDE6DA',
                minHeight: 44,
              }}
            >
              {n.label}
            </a>
          ))}
        </div>
      </header>

      {/* Hero */}
      <section id="top" className="px-4 pt-3.5">
        <div className="relative overflow-hidden rounded-[34px]" style={{ background: '#EADBDD' }}>
          <img
            src={heroBrenda}
            alt="ברנדה מוקפת בתינוקות בסדנת התפתחות"
            className="block w-full"
            style={{ aspectRatio: '4 / 3.4', objectFit: 'cover', objectPosition: 'center 55%' }}
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                'linear-gradient(0deg, rgba(58,53,46,0.86) 0%, rgba(58,53,46,0.42) 38%, rgba(58,53,46,0) 66%)',
            }}
          />
          <div className="absolute inset-x-0 bottom-0 flex flex-col gap-3 px-[22px] py-6">
            <span
              className="self-start rounded-full px-[13px] py-1.5 text-[12.5px] font-bold"
              style={{ color: '#3A352E', background: '#E7C78A', letterSpacing: '.3px' }}
            >
              בית עוטף ומלטף · רמת גן
            </span>
            {/* The design says 36px, but that was set in a serif. Varela Round runs
                wider, and anything above 30px breaks "הקול הכי חשוב הוא שלך" onto a
                third line that climbs out of the dark part of the gradient. */}
            <h1
              className="m-0 font-display text-[30px] font-bold leading-[1.15] min-[420px]:text-[34px]"
              style={{ color: '#FFFDF8', textShadow: ON_PHOTO_SHADOW }}
            >
              בעולם מוצף עצות,
              <br />
              הקול הכי חשוב <span style={{ color: '#E7C78A' }}>הוא שלך</span>
            </h1>
          </div>
        </div>
      </section>

      <section className="flex flex-col gap-3.5 px-4 pt-5">
        <p className="m-0 text-[18px] leading-[1.7]" style={{ color: '#3A352E', textWrap: 'pretty' }}>
          במימו את מתחברת חזרה לאינטואיציה שלך, יחד עם אמהות שעוברות בדיוק את מה שאת עוברת.
        </p>
        <div className="flex flex-wrap gap-2">
          {['מלווה התפתחותית מוסמכת', '+200 אמהות', 'קבוצות של עד 8'].map((c) => (
            <span
              key={c}
              className="rounded-full px-3.5 py-2 text-[13px] font-semibold"
              style={{ background: '#FFFDF8', border: '1px solid #E6DFD3', color: '#3A352E' }}
            >
              {c}
            </span>
          ))}
        </div>
        <div className="mt-0.5 flex flex-col gap-2.5">
          <a
            href="#lead"
            className="rounded-full text-center text-[18px] font-extrabold no-underline"
            style={{ background: '#A35C3D', color: '#fff', padding: 18, minHeight: 56 }}
          >
            בואי נדבר · שיחה בלי התחייבות
          </a>
          <a
            href="#services"
            className="rounded-full text-center text-[17px] font-bold no-underline"
            style={{
              background: '#FFFDF8',
              border: '1px solid #E6DFD3',
              color: '#3A352E',
              padding: 16,
              minHeight: 52,
            }}
          >
            לסדנאות ולמחירים
          </a>
        </div>
        <div
          className="flex items-center gap-3.5 rounded-[24px] px-[18px] py-3.5"
          style={{ background: '#EADBDD' }}
        >
          <img
            src={aboutBrenda}
            alt="ברנדה"
            className="block shrink-0 rounded-full"
            style={{ width: 50, height: 50, objectFit: 'cover', objectPosition: 'center 30%' }}
          />
          <p className="m-0 text-[14.5px] leading-[1.55]" style={{ color: '#3A352E' }}>
            אני ברנדה, מלווה התפתחותית ומדריכת עיסוי תינוקות. <b>אחזור אלייך אישית.</b>
          </p>
        </div>
      </section>

      {/* Empathy */}
      <section className="flex flex-col items-center gap-3.5 px-[22px] pb-12 pt-14 text-center">
        <img src={mimoGoose} alt="" className="block h-auto w-[84px]" style={{ opacity: 0.9 }} />
        <span className="font-script text-[19px] leading-none" style={{ color: '#818267' }}>
          רגע, נשימה
        </span>
        <h2 className="m-0 font-display text-[30px] font-bold leading-[1.25]" style={{ color: '#A35C3D' }}>
          הימים הראשונים מתוקים, וגם מטלטלים
        </h2>
        <p className="m-0 text-[17px] leading-[1.8]" style={{ color: '#3A352E', textWrap: 'pretty' }}>
          המון אהבה, ולצידה המון שאלות, מעט שינה, והרגשה שאת לבד מול הכל. כל אמא מכירה את זה, ואת
          באמת לא לבד. במימו את מקבלת כלים, יד מלווה והרבה מימו, בשבילך ובשביל הבייבי.
        </p>
      </section>

      {/* Group band */}
      <section className="px-4 pb-2">
        <div className="relative overflow-hidden rounded-[32px]" style={{ background: '#EADBDD' }}>
          <img
            src={gallery1}
            alt="תינוקות בקבוצה סביב מזרן חושי בסדנה של מימו"
            loading="lazy"
            className="block w-full"
            style={{ aspectRatio: '4 / 3', objectFit: 'cover' }}
          />
          <div
            className="absolute inset-0"
            style={{
              background: 'linear-gradient(0deg, rgba(58,53,46,0.78) 0%, rgba(58,53,46,0) 52%)',
            }}
          />
          <div className="absolute inset-x-0 bottom-0 flex flex-col gap-1.5 p-[22px]">
            <span
              className="font-script text-[22px] leading-[1.1]"
              style={{ color: '#E7C78A', textShadow: ON_PHOTO_SHADOW }}
            >
              קבוצה קטנה, יחס אישי
            </span>
            <span
              className="text-[15.5px] leading-[1.5]"
              style={{ color: '#FFFDF8', textShadow: ON_PHOTO_SHADOW }}
            >
              עד 8 אמהות במפגש, בסטודיו של מימו ברמת גן
            </span>
          </div>
        </div>
      </section>

      {/* Workshops */}
      <section
        id="services"
        className="px-4 pb-12 pt-10"
        style={{
          background: '#FFFDF8',
          borderTop: '1px solid #EDE6DA',
          borderBottom: '1px solid #EDE6DA',
        }}
      >
        <div className="mb-[26px] flex flex-col items-center gap-2 text-center">
          <span className="font-script text-[18px] leading-none" style={{ color: '#818267' }}>
            בואי נכיר
          </span>
          <h2 className="m-0 font-display text-[29px] font-bold" style={{ color: '#A35C3D' }}>
            איפה תוכלו לפגוש אותי
          </h2>
          <p className="m-0 text-base" style={{ color: '#818267' }}>
            שלוש סדנאות לפי גיל הבייבי, וליווי אישי לכל שלב
          </p>
        </div>

        <div className="flex flex-col gap-4">
          {WORKSHOPS.map((w) => (
            <WorkshopCard key={w.title} w={w} />
          ))}
        </div>

        <div
          className="mt-[18px] rounded-[28px] p-[22px]"
          style={{ background: '#FAF8F4', border: '1px solid #E6DFD3' }}
        >
          <p className="m-0 mb-3.5 text-base font-extrabold" style={{ color: '#3A352E' }}>
            ליווי אישי ומפגשים נוספים
          </p>
          <div className="flex flex-col gap-2.5">
            {EXTRAS.map((e) => (
              <a
                key={e.title}
                href={e.link}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => track('workshop_register_click', { workshop: e.title })}
                className="flex items-center justify-between gap-3.5 rounded-[20px] px-[17px] py-[15px] no-underline"
                style={{ background: '#FFFDF8', border: '1px solid #EDE6DA', minHeight: 56 }}
              >
                <span className="flex flex-col gap-[3px]">
                  <span className="text-[15.5px] font-extrabold" style={{ color: '#3A352E' }}>
                    {e.title}
                  </span>
                  <span className="text-[13px]" style={{ color: '#818267' }}>
                    {e.short}
                  </span>
                </span>
                <span
                  className="whitespace-nowrap text-[15.5px] font-black"
                  style={{ color: '#A35C3D' }}
                >
                  {e.price}
                </span>
              </a>
            ))}
          </div>
        </div>

        <div
          className="mt-4 flex flex-col gap-3 rounded-[24px] p-5"
          style={{ background: '#E7C78A2e', border: '1px dashed #C9A76A' }}
        >
          <p className="m-0 text-base leading-[1.55]" style={{ color: '#3A352E' }}>
            <b style={{ color: '#A35C3D' }}>חברה מביאה חברה</b> · נרשמות יחד לאותה סדנה ומקבלות 10%
            הנחה כל אחת
          </p>
          <a
            href={WA_PROMO}
            target="_blank"
            rel="noopener noreferrer"
            data-wa-location="friend-promo"
            className="flex items-center text-[15px] font-extrabold no-underline"
            style={{ color: '#A35C3D', minHeight: 44 }}
          >
            אנחנו בעניין ←
          </a>
        </div>
      </section>

      {/* Digital course */}
      <section id="course" className="px-4 py-12" style={{ background: '#EADBDD' }}>
        <div className="flex flex-col items-start gap-3.5">
          <span
            className="rounded-full px-3.5 py-[7px] text-[12.5px] font-extrabold"
            style={{ background: '#FFFDF8', color: '#A35C3D' }}
          >
            מגיל לידה ועד 6 חודשים · מהבית
          </span>
          <h2
            className="m-0 font-display text-[30px] font-bold leading-[1.22]"
            style={{ color: '#A35C3D' }}
          >
            עיסוי תינוקות · הקורס הדיגיטלי של מימו
          </h2>
          <p className="m-0 text-[17px] leading-[1.75]" style={{ color: '#3A352E' }}>
            גזים, אי נוחות וקושי להירגע ולהירדם. יש משהו שאת יכולה לעשות עם הידיים שלך. 12 שיעורים
            ו-6 סרטונים שבהם אני מדגימה כל תנועה, צעד אחר צעד.
          </p>
          <div className="flex flex-wrap gap-2">
            {['גישה מיידית', 'מהטלפון', 'שלך לתמיד'].map((c) => (
              <span
                key={c}
                className="rounded-full px-3.5 py-2 text-[13.5px] font-semibold"
                style={{ background: '#FFFDF8', color: '#3A352E' }}
              >
                {c}
              </span>
            ))}
          </div>

          <div
            className="mt-1 flex w-full flex-col gap-[9px] rounded-[26px] p-5"
            style={{ background: '#FFFDF8' }}
          >
            <div className="mb-1 flex items-baseline justify-between gap-2.5">
              <h3 className="m-0 font-display text-[21px] font-bold" style={{ color: '#3A352E' }}>
                מה יש בפנים
              </h3>
              <span className="text-[12.5px] font-bold" style={{ color: '#A35C3D' }}>
                12 שיעורים · 6 סרטונים
              </span>
            </div>
            {COURSE_LESSONS.map((l) => (
              <div
                key={l.title}
                className="flex items-center justify-between gap-3 rounded-[15px] px-[15px] py-3"
                style={{ background: '#FAF8F4' }}
              >
                <span className="text-[15px] font-semibold" style={{ color: '#3A352E' }}>
                  {l.title}
                </span>
                <span className="whitespace-nowrap text-[12.5px]" style={{ color: '#818267' }}>
                  {l.kind}
                </span>
              </div>
            ))}
          </div>

          <a
            href="/course"
            onClick={() => track('workshop_register_click', { workshop: 'course' })}
            className="mt-1 w-full rounded-full text-center text-[18px] font-extrabold no-underline"
            style={{ background: '#E7C78A', color: '#3A352E', padding: 18, minHeight: 56 }}
          >
            לרכישה · 97 ₪ ←
          </a>
          <span className="self-center text-sm" style={{ color: '#5F5A4E' }}>
            תשלום אחד. בלי מנוי, בלי תאריך תפוגה.
          </span>
        </div>
      </section>

      {/* How it works */}
      <section className="px-[22px] py-[52px]">
        <div className="mb-[30px] flex flex-col items-center gap-2 text-center">
          <h2 className="m-0 font-display text-[29px] font-bold" style={{ color: '#A35C3D' }}>
            כל תינוק הוא עולם ומלואו
          </h2>
          <p className="m-0 text-[16.5px] leading-[1.6]" style={{ color: '#3A352E' }}>
            כל אמא ובייבי הם עולם בפני עצמו, ולכן הליווי אצלנו אישי, רגוע ומותאם בדיוק לכן.
          </p>
        </div>
        <div className="flex flex-col gap-6">
          {STEPS.map((s) => (
            <div key={s.num} className="flex items-start gap-4">
              <span
                className="shrink-0 font-display text-[30px] leading-none"
                style={{ color: '#E7C78A' }}
              >
                {s.num}
              </span>
              <div className="flex flex-col gap-1.5">
                <h3 className="m-0 font-display text-xl font-bold" style={{ color: '#3A352E' }}>
                  {s.title}
                </h3>
                <p className="m-0 text-[15.5px] leading-[1.7]" style={{ color: '#5F5A4E' }}>
                  {s.body}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section
        id="testimonials"
        className="py-12"
        style={{
          background: '#FFFDF8',
          borderTop: '1px solid #EDE6DA',
          borderBottom: '1px solid #EDE6DA',
        }}
      >
        <div className="mb-[22px] flex flex-col items-center gap-2 px-[22px] text-center">
          <span className="font-script text-[18px] leading-none" style={{ color: '#818267' }}>
            תודה שסיפרתן
          </span>
          <h2 className="m-0 font-display text-[29px] font-bold" style={{ color: '#A35C3D' }}>
            משפחות מספרות
          </h2>
          <p className="m-0 text-base" style={{ color: '#818267' }}>
            הודעות אמיתיות מאמהות שסיימו סדנה במימו
          </p>
        </div>
        <div className="mb-5 px-4">
          <div
            className="overflow-hidden rounded-[26px]"
            style={{ border: '1px solid #E6DFD3', background: '#EADBDD' }}
          >
            <video
              src={recommendationVideo}
              poster={recommendationPoster}
              controls
              playsInline
              preload="metadata"
              aria-label="המלצת וידאו מאמא במימו"
              className="block h-auto w-full"
            />
          </div>
        </div>
        <div
          className="flex gap-3 overflow-x-auto px-4 pb-2"
          style={{ scrollSnapType: 'x mandatory' }}
        >
          {SHOTS.map((s, i) => (
            <div
              key={s}
              className="shrink-0 self-start overflow-hidden rounded-[20px]"
              style={{
                width: 270,
                border: '1px solid #E6DFD3',
                background: '#fff',
                scrollSnapAlign: 'center',
              }}
            >
              <img
                src={s}
                alt={`המלצה מאמא במימו, צילום מסך מוואטסאפ ${i + 1}`}
                loading="lazy"
                className="block h-auto w-full"
              />
            </div>
          ))}
        </div>
        <p className="m-0 mt-2.5 text-center text-[13.5px] font-semibold" style={{ color: '#818267' }}>
          החליקי לעוד המלצות ←
        </p>
      </section>

      {/* About */}
      <section id="about" className="px-4 py-[52px]">
        <div className="mb-[18px] flex items-center gap-4">
          <img
            src={aboutBrenda}
            alt="ברנדה, מלווה התפתחותית ומדריכת עיסוי תינוקות"
            loading="lazy"
            className="block shrink-0 rounded-full"
            style={{ width: 104, height: 104, objectFit: 'cover', objectPosition: 'center 30%' }}
          />
          <div className="flex flex-col">
            <span className="font-script text-[20px] leading-[1.1]" style={{ color: '#818267' }}>
              היי,
            </span>
            <h2 className="m-0 font-display text-[34px] font-bold" style={{ color: '#A35C3D' }}>
              אני ברנדה
            </h2>
          </div>
        </div>
        <div className="flex flex-col gap-3.5">
          <p className="m-0 text-[14.5px] font-bold leading-[1.6]" style={{ color: '#818267' }}>
            מלווה התפתחותית מוסמכת · מדריכת עיסוי תינוקות · בהכשרה להדרכת הורים, ייעוץ שינה וגמילה
            מחיתולים
          </p>
          <p className="m-0 text-[17px] leading-[1.85]" style={{ color: '#3A352E' }}>
            נולדתי בארגנטינה, גרתי רוב חיי במדריד, והיום אני כאן ומלווה אמהות ותינוקות מהסטודיו שלי
            ברמת גן. כל החיים חיפשתי את הייעוד שלי, ומצאתי אותו ברגע שגיליתי את עולם ההתפתחות והמגע
            של תינוקות.
          </p>
          <p className="m-0 text-[17px] leading-[1.85]" style={{ color: '#3A352E' }}>
            אני מאמינה שכל אמא צריכה מעטפת תומכת, במיוחד בחודשים הראשונים שאחרי הלידה, תקופה כל כך
            מטלטלת. אני כאן כדי לתת לכן את הכלים, את ההקשבה ואת ה"מימו" הזה: לדעת שמישהי מקשיבה,
            מבינה ועונה על כל שאלה או דאגה.
          </p>
          <p
            className="m-0 rounded-[22px] p-5 text-[17px] leading-[1.85]"
            style={{ background: '#EADBDD', color: '#3A352E' }}
          >
            "מימו" (Mimo) בספרדית פירושו "ליטוף", וזו בדיוק המהות של המרחב שלנו: לתת לכן ולבייביז
            שלכן מלא מימו, דרך מגע, תנועה, תיווך, הבנה ותמיכה.
          </p>
          <div className="grid grid-cols-2 gap-2.5">
            {[
              { src: gallery2, alt: 'תינוק על הבטן בליווי הידיים של ברנדה' },
              { src: gallery4, alt: 'תינוק בתנוחת תינוק שמח' },
              { src: gallery3, alt: 'אמא ותינוק על כדור הפיזיו בסדנה' },
              { src: dadBaby, alt: 'אבא עם תינוק במפגש אבות' },
            ].map((g) => (
              <img
                key={g.src}
                src={g.src}
                alt={g.alt}
                loading="lazy"
                className="block w-full rounded-[18px]"
                style={{ aspectRatio: '3 / 4', objectFit: 'cover' }}
              />
            ))}
          </div>
          <img
            src={gallery5}
            alt="ברנדה עם תינוק בשכיבה על הבטן"
            loading="lazy"
            className="block w-full rounded-[22px]"
            style={{ aspectRatio: '4 / 3', objectFit: 'cover', objectPosition: 'center 30%' }}
          />
        </div>
      </section>

      {/* FAQ */}
      <section
        id="faq"
        className="px-4 py-12"
        style={{ background: '#FFFDF8', borderTop: '1px solid #EDE6DA' }}
      >
        <div className="mb-[22px] flex flex-col items-center gap-2 text-center">
          <span className="font-script text-[18px] leading-none" style={{ color: '#818267' }}>
            כל מה ששאלתן
          </span>
          <h2 className="m-0 font-display text-[29px] font-bold" style={{ color: '#A35C3D' }}>
            שאלות נפוצות
          </h2>
          <p className="m-0 text-base" style={{ color: '#818267' }}>
            כל מה שחשוב לדעת לפני שמתחילים
          </p>
        </div>
        <FaqAccordion items={FAQS} cardBg="#FAF8F4" />
      </section>

      {/* Lead */}
      <section id="lead" className="px-4 py-[52px]" style={{ background: '#A35C3D' }}>
        <div className="mb-[22px] flex flex-col gap-4">
          <h2
            className="m-0 font-display text-[34px] font-bold leading-[1.2]"
            style={{ color: '#FFFDF8' }}
          >
            נשמח לשמוע ממך
          </h2>
          <p className="m-0 text-[17px] leading-[1.75]" style={{ color: '#F0DCCF' }}>
            השאירי שם וטלפון ואחזור אלייך אישית, נדבר על הבייבי ונמצא יחד את הליווי שמתאים לכן. בלי
            התחייבות.
          </p>
        </div>
        <LeadForm
          location="home"
          pageVariant="home"
          waUrl={WA_GENERAL}
          submitLabel="בואי נדבר"
          waLabel="מעדיפה לשאול קודם? דברי איתי בוואטסאפ"
          isPrimary
          header={
            <div className="flex flex-col gap-1.5">
              <span
                className="self-start rounded-full px-[13px] py-1.5 text-[12.5px] font-extrabold"
                style={{ background: '#E7C78A', color: '#3A352E' }}
              >
                שיחת היכרות · בלי התחייבות
              </span>
              <p
                className="m-0 mt-1 font-display text-[22px] font-bold leading-[1.3]"
                style={{ color: '#A35C3D' }}
              >
                לא בטוחה מה הכי מתאים לך ולבייבי?
              </p>
              <p className="m-0 text-[15px] leading-[1.6]" style={{ color: '#5F5A4E' }}>
                שיחה קצרה ונעימה, שבה תרגישי שיש למי לפנות, ושאת לא לבד בדרך הזו.
              </p>
            </div>
          }
        />
        <div className="mt-5 flex flex-col gap-2 text-[15.5px]" style={{ color: '#F0DCCF' }}>
          <span>אבא אחימאיר 10, רמת גן (שיכון ותיקים)</span>
          <a
            href={WA_GENERAL}
            target="_blank"
            rel="noopener noreferrer"
            data-wa-location="lead-address"
            className="flex items-center font-bold no-underline"
            style={{ color: '#FFFDF8', minHeight: 44 }}
          >
            וואטסאפ · 053-3041277
          </a>
        </div>
      </section>

      {/* Products */}
      <section id="products" className="px-4 py-[52px]">
        <div className="mb-[26px] flex flex-col items-center gap-2 text-center">
          <h2 className="m-0 font-display text-[28px] font-bold" style={{ color: '#A35C3D' }}>
            מוצרים משלימים של מימו
          </h2>
          <p className="m-0 text-[15.5px] leading-[1.6]" style={{ color: '#818267' }}>
            אביזרי התפתחות שאני אוהבת ומשתמשת בהם בסדנאות, עכשיו גם אצלכם בבית
          </p>
        </div>
        <div className="grid grid-cols-2 gap-3.5">
          {PRODUCTS.map((p) => (
            <div
              key={p.title}
              className="flex flex-col overflow-hidden rounded-[24px]"
              style={{ background: '#FFFDF8', border: '1px solid #E6DFD3' }}
            >
              <div
                className="flex items-center justify-center p-3.5"
                style={{ height: 140, background: '#fff' }}
              >
                <img
                  src={p.image}
                  alt={p.title}
                  loading="lazy"
                  className="block max-h-full max-w-full"
                  style={{ objectFit: 'contain' }}
                />
              </div>
              <div className="flex flex-1 flex-col gap-[5px] px-[15px] pb-4 pt-3">
                <h3 className="m-0 text-[15.5px] font-extrabold leading-[1.25]" style={{ color: '#3A352E' }}>
                  {p.title}
                </h3>
                <p className="m-0 text-[12.5px] leading-[1.45]" style={{ color: '#818267' }}>
                  {p.desc}
                </p>
                <p
                  className="m-0 mt-auto pt-2 font-display text-[18px] font-black"
                  style={{ color: '#A35C3D' }}
                >
                  {p.price}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div
          className="mt-5 flex flex-col items-center gap-3.5 rounded-[24px] p-[22px] text-center"
          style={{ background: '#E7C78A1f', border: '1px solid #E7C78A55' }}
        >
          <p className="m-0 text-[15.5px] font-semibold leading-[1.6]" style={{ color: '#3A352E' }}>
            ניתן להזמין ולאסוף את המוצרים בסדנאות ובמפגשים של מימו
          </p>
          <a
            href={WA_ORDER}
            target="_blank"
            rel="noopener noreferrer"
            data-wa-location="products"
            className="flex items-center rounded-full px-7 text-base font-bold no-underline"
            style={{ background: '#A35C3D', color: '#fff', minHeight: 50 }}
          >
            להזמנה בוואטסאפ
          </a>
        </div>
      </section>

      <footer className="px-5 py-11" style={{ background: '#3A352E', color: '#C6BDA0' }}>
        <div className="flex flex-col gap-[26px]">
          <div className="flex flex-col gap-3">
            <span
              className="self-start rounded-[18px] px-[18px] py-2.5"
              style={{ background: '#FAF8F4' }}
            >
              <img src={logoMimo} alt="Mimo" className="block h-8 w-auto" />
            </span>
            <p className="m-0 text-[14.5px] leading-[1.7]" style={{ color: '#C6BDA0' }}>
              ליווי התפתחותי, סדנאות ומפגשים לאמהות ולתינוקות, מהסטודיו של מימו ברמת גן.
            </p>
          </div>

          <div className="flex flex-col gap-2.5">
            <p className="m-0 mb-0.5 text-[15px] font-bold" style={{ color: '#FAF8F4' }}>
              יצירת קשר
            </p>
            <a
              href={WA_GENERAL}
              target="_blank"
              rel="noopener noreferrer"
              data-wa-location="footer"
              className="flex items-center text-[15px] no-underline"
              style={{ color: '#C6BDA0', minHeight: 44 }}
            >
              וואטסאפ: 053-3041277
            </a>
            <a
              href="tel:+972533041277"
              className="flex items-center text-[15px] no-underline"
              style={{ color: '#C6BDA0', minHeight: 44 }}
            >
              טלפון: 053-3041277
            </a>
            <a
              href="mailto:mimobaby.info@gmail.com"
              className="flex items-center text-[15px] no-underline"
              style={{ color: '#C6BDA0', minHeight: 44 }}
            >
              mimobaby.info@gmail.com
            </a>
            <span className="text-[15px]">אבא אחימאיר 10, רמת גן</span>
            <a
              href={MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-[15px] font-bold underline underline-offset-4"
              style={{ color: '#E7C78A', minHeight: 44 }}
            >
              לניווט לסטודיו ←
            </a>
            <div className="mt-2.5 flex items-center gap-3">
              <a
                href="https://www.instagram.com/mimo.brenlevin/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="מימו באינסטגרם"
                className="inline-flex items-center justify-center rounded-full no-underline"
                style={{ width: 46, height: 46, background: '#E7C78A', color: '#3A352E' }}
              >
                <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden className="block h-[21px] w-[21px]">
                  <path d="M12 2.2c3.2 0 3.6 0 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.06.41 2.23.06 1.25.07 1.65.07 4.85s0 3.6-.07 4.85c-.05 1.17-.25 1.8-.41 2.23a3.7 3.7 0 0 1-.9 1.38c-.42.42-.82.68-1.38.9-.42.16-1.06.36-2.23.41-1.25.06-1.65.07-4.85.07s-3.6 0-4.85-.07c-1.17-.05-1.8-.25-2.23-.41a3.7 3.7 0 0 1-1.38-.9 3.7 3.7 0 0 1-.9-1.38c-.16-.42-.36-1.06-.41-2.23C2.2 15.6 2.2 15.2 2.2 12s0-3.6.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.06-.36 2.23-.41C8.4 2.2 8.8 2.2 12 2.2Zm0 1.8c-3.14 0-3.51.01-4.75.07-.9.04-1.38.19-1.7.32-.43.16-.74.36-1.06.68-.32.32-.52.63-.68 1.06-.13.32-.28.8-.32 1.7-.06 1.24-.07 1.61-.07 4.75s.01 3.51.07 4.75c.04.9.19 1.38.32 1.7.16.43.36.74.68 1.06.32.32.63.52 1.06.68.32.13.8.28 1.7.32 1.24.06 1.61.07 4.75.07s3.51-.01 4.75-.07c.9-.04 1.38-.19 1.7-.32.43-.16.74-.36 1.06-.68.32-.32.52-.63.68-1.06.13-.32.28-.8.32-1.7.06-1.24.07-1.61.07-4.75s-.01-3.51-.07-4.75c-.04-.9-.19-1.38-.32-1.7a2.85 2.85 0 0 0-.68-1.06 2.85 2.85 0 0 0-1.06-.68c-.32-.13-.8-.28-1.7-.32C15.51 4.01 15.14 4 12 4Zm0 3.06A4.94 4.94 0 1 1 12 16.94 4.94 4.94 0 0 1 12 7.06Zm0 1.8a3.14 3.14 0 1 0 0 6.28 3.14 3.14 0 0 0 0-6.28Zm5.15-.93a1.15 1.15 0 1 1-2.3 0 1.15 1.15 0 0 1 2.3 0Z" />
                </svg>
              </a>
              <a
                href="https://www.facebook.com/mimo.brenlevin"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="מימו בפייסבוק"
                className="inline-flex items-center justify-center rounded-full no-underline"
                style={{ width: 46, height: 46, background: '#E7C78A', color: '#3A352E' }}
              >
                <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden className="block h-[21px] w-[21px]">
                  <path d="M14 8.5V7c0-.7.5-1 1-1h1.5V3.2L14.3 3c-2.3 0-3.8 1.4-3.8 3.8v1.7H8v2.8h2.5V21h3.2v-9.7h2.4l.4-2.8H14Z" />
                </svg>
              </a>
            </div>
          </div>

          <div className="flex flex-wrap gap-3.5">
            {[
              { href: '#services', label: 'סדנאות' },
              { href: '/course', label: 'הקורס הדיגיטלי' },
              { href: '#testimonials', label: 'המלצות' },
              { href: '#about', label: 'אודות' },
              { href: '#products', label: 'מוצרים' },
            ].map((l) => (
              <a
                key={l.label}
                href={l.href}
                className="flex items-center text-[14.5px] no-underline"
                style={{ color: '#C6BDA0', minHeight: 44 }}
              >
                {l.label}
              </a>
            ))}
          </div>

          <img src={mimoGoose} alt="" className="block h-auto w-[72px]" style={{ opacity: 0.55 }} />

          <div
            className="flex flex-col gap-1.5 pt-4 text-[12.5px]"
            style={{ borderTop: '1px solid #5A5247', color: '#A39A88' }}
          >
            <p className="m-0">© 2026 מימו. כל הזכויות שמורות.</p>
            <p className="m-0">עשוי עם מימו לאמהות</p>
          </div>
        </div>
      </footer>

      <StickyBar
        href="#lead"
        external={false}
        label="השאירי פרטים ואחזור אלייך"
        waUrl={WA_GENERAL}
      />
    </Shell>
  )
}
