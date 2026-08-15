import { REGISTER } from './registerLinks'
import swaddledHero from '../assets/lp-swaddled-hero.jpg'
import discoverersHero from '../assets/lp-discoverers-hero.jpg'
import groupCircle from '../assets/lp-group-circle.jpg'
import windowMoms from '../assets/lp-window-moms.jpg'

// Everything that differs between the two campaign landing pages lives here.
// The page itself (`src/pages/CampaignPage.tsx`) is variant-agnostic: it reads
// one object out of this file and renders it. Copy comes from the approved
// design reference `design-refs/Mimo Landing v2.dc.html`.

export type Variant = 'swaddled' | 'discoverers'

export type WorkshopVariant = {
  /** Value sent with every tracking event from this page. */
  trackingId: Variant
  workshopName: string
  ageLabel: string
  headline: string
  sub: string
  price: string
  /** Price per person when two friends sign up together (10% off). */
  friendPrice: string
  meta: string
  ctaLabel: string
  stickyLabel: string
  heroImage: string
  heroAlt: string
  bandImage: string
  bandAlt: string
  bandText: string
  takeawayTitle: string
  bullets: string[]
  forYou: string[]
  notForYou: string[]
  closeTitle: string
  closeSub: string
  waText: string
  registerLink: string
}

export const VARIANTS: Record<Variant, WorkshopVariant> = {
  swaddled: {
    trackingId: 'swaddled',
    workshopName: 'סדנת עטופים',
    ageLabel: 'מלידה עד 3.5 חודשים',
    headline: 'החודשים הראשונים, בלי לנחש',
    sub: 'סדנת עטופים היא 5 מפגשים בקבוצה קטנה ברמת גן, שבהם תלמדי להרגיע, להקל על גזים ולחזק את הגוף הקטן שלו. ותפגשי אמהות שעוברות בדיוק את מה שאת עוברת.',
    price: '800 ₪',
    friendPrice: '720 ₪',
    meta: '5 מפגשים של שעה וחצי',
    ctaLabel: 'לשמור לי מקום בסדנה',
    stickyLabel: 'לשמור לי מקום',
    heroImage: swaddledHero,
    heroAlt: 'תינוקות בפופים במפגש של סדנת עטופים',
    bandImage: groupCircle,
    bandAlt: 'אמהות ותינוקות במעגל בסטודיו של מימו',
    bandText: 'קבוצה קטנה, יחס אישי',
    takeawayTitle: 'מה תיקחי איתך מסדנת עטופים',
    bullets: [
      'הסתגלות הדרגתית מהרחם אל העולם, בקצב שלו',
      'עידוד שכיבה על הבטן וחיזוק השרירים בלי מאבקים',
      'כלים להרגעה, להרפיה ולהקלה על גזים, שעובדים גם ב-3 לפנות בוקר',
      'שימוש בפוף, במנשא בד ובכדור פיזיו נכון לגיל',
    ],
    forYou: [
      'הבייבי שלך מלידה ועד 3.5 חודשים',
      'את רוצה להבין מה הוא צריך, ולא לנחש מול גוגל',
      'גזים, בכי וקושי להירדם מוכרים לך מדי',
      'את מחפשת אמהות שמבינות אותך, לא עוד קבוצת פייסבוק',
    ],
    notForYou: [
      'את מחפשת אבחון או טיפול רפואי, לזה יש רופא',
      'הבייבי שלך מעל 4 חודשים, אז סדנת מגלים מתאימה יותר',
    ],
    closeTitle: 'לא בטוחה שזה מתאים לכם?',
    closeSub: 'השאירי שם וטלפון, אחזור אלייך אישית, נדבר על הבייבי ונחליט יחד. בלי התחייבות.',
    waText: 'היי ברנדה! הגעתי מהאתר ואשמח לשמוע על סדנת עטופים',
    registerLink: REGISTER.swaddled,
  },
  discoverers: {
    trackingId: 'discoverers',
    workshopName: 'סדנת מגלים',
    ageLabel: 'מגיל 3 עד 6 חודשים',
    headline: 'גיל 4 חודשים, והכל משתנה',
    sub: 'סדנת מגלים היא 5 מפגשים בקבוצה קטנה ברמת גן, שילוו אותך בהתהפכות, בהכנת הגוף לזחילה ובקפיצת ההתפתחות הגדולה של הגיל הזה.',
    price: '800 ₪',
    friendPrice: '720 ₪',
    meta: '5 מפגשים של שעה וחצי',
    ctaLabel: 'לשמור לי מקום בסדנה',
    stickyLabel: 'לשמור לי מקום',
    heroImage: discoverersHero,
    heroAlt: 'תינוקות על הבטן ליד החלון במפגש של סדנת מגלים',
    bandImage: windowMoms,
    bandAlt: 'אמהות ותינוקות ליד החלון בסטודיו של מימו',
    bandText: 'רגעים קטנים שנשארים איתך',
    takeawayTitle: 'מה תיקחי איתך מסדנת מגלים',
    bullets: [
      'גיל 4 חודשים המופלא, וכל השינויים שמגיעים איתו',
      'התהפכות מהבטן לגב ומהגב לבטן',
      'הכנת הגוף לקראת זחילה, שלב אחרי שלב',
      'מרקמים, משחקי תקשורת וחוויות תחושתיות בבית',
    ],
    forYou: [
      'הבייבי שלך בין 3 ל-6 חודשים',
      'את מרגישה שהוא מוכן לעוד, ולא בטוחה איך לתמוך בו',
      'ההתהפכות, קו האמצע והזחילה נשמעים לך כמו סינית',
      'את רוצה זמן איכות אמיתי איתו, לא עוד מסך',
    ],
    notForYou: [
      'את מחפשת אבחון או טיפול רפואי, לזה יש רופא',
      'הבייבי שלך מתחת ל-3 חודשים, אז סדנת עטופים מתאימה יותר',
    ],
    closeTitle: 'לא בטוחה שזה מתאים לכם?',
    closeSub: 'השאירי שם וטלפון, אחזור אלייך אישית, נדבר על הבייבי ונחליט יחד. בלי התחייבות.',
    waText: 'היי ברנדה! הגעתי מהאתר ואשמח לשמוע על סדנת מגלים',
    registerLink: REGISTER.discoverers,
  },
}

/** Shared FAQ for both campaign pages. */
export const CAMPAIGN_FAQ: { q: string; a: string }[] = [
  {
    q: 'איפה הסדנה מתקיימת?',
    a: 'בסטודיו של מימו, אבא אחימאיר 10, רמת גן (שיכון ותיקים). יש חניה באזור וגינה ירוקה שאפשר לשבת בה אחרי המפגש.',
  },
  {
    q: 'מה אם הבייבי בוכה, רעב או נרדם?',
    a: 'טבעי לגמרי. עוצרות, מאכילות, מרגיעות וממשיכות בקצב שלו. הסדנה בנויה בדיוק בשביל זה.',
  },
  {
    q: 'צריך להביא משהו?',
    a: 'רק טטרה גדולה, אותך והבייבי. מזרנים, פופים, כדורי פיזיו ואביזרים מחכים בסטודיו, וגם קפה ונשנושים ממני.',
  },
  {
    q: 'מה אם אפספס מפגש?',
    a: 'קורה, וזה בסדר. כל מפגש מסוכם בקבוצת הוואטסאפ, ואפשר להשלים עד שני מפגשים עם קבוצה אחרת, על בסיס מקום פנוי.',
  },
]

/** Reads ?w= off the URL. Anything unknown falls back to swaddled, never throws. */
export function variantFromSearch(search: string = window.location.search): Variant {
  let raw: string | null = null
  try {
    raw = new URLSearchParams(search).get('w')
  } catch {
    raw = null
  }
  return raw === 'discoverers' ? 'discoverers' : 'swaddled'
}
