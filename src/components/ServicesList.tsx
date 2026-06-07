import { useState } from 'react'

// Studio address for all in-person services: אבא אחימאיר 10, רמת גן (שיכון ותיקים)
const WHATSAPP = 'https://wa.me/972559904274'
const REGISTER = {
  swaddled:    'https://mimo-baby.co.il?register=80472e20-8ee4-434e-b3f6-8c90af1f1fc1',
  discoverers: 'https://mimo-baby.co.il?register=3d2b2c93-da57-43e3-966b-de36dda973e7',
  massage:     'https://mimo-baby.co.il?register=0bfca0fd-95de-4a55-9668-f21bd9d17726',
  private:     'https://mimo-baby.co.il?register=5732a0ad-03c1-4061-9aba-5a939f745999',
  dads:        'https://mimo-baby.co.il?register=9f940856-16f0-43d0-b991-8470da8accc5',
  morning:     'https://mimo-baby.co.il?register=5e6088b9-fa34-4434-9bf1-6728655b56a9',
}

type Service = {
  title: string
  emoji: string
  short: string
  description: string
  link: string
  cta: string
  image?: string
  alt?: string
}

// NOTE: "ייעוץ שינה" and "ליווי לגנים" intentionally omitted until real content is ready.
const services: Service[] = [
  {
    title: 'מתנת לידה',
    emoji: '🎁',
    short: 'הפינוק המושלם לחברה שזה עתה ילדה',
    description: `הפינוק המושלם לחברה שזה עתה ילדה. אפשר להעניק כמתנה כל אחד מהשירותים של מימו: סדנת עיסוי תינוקות, סדנת ליווי התפתחותי (עטופים / מגלים) או מפגש ליווי פרטני בבית.
מתנה שנותנת ליולדת בדיוק את מה שהיא צריכה — תמיכה, ידע וזמן איכות עם הבייבי שלה.`,
    link: WHATSAPP,
    cta: '💬 לתיאום בוואטסאפ',
  },
  {
    title: 'סדנת עטופים · ליווי התפתחותי',
    emoji: '🐣',
    short: 'מלידה עד 3.5 חודשים · 5 מפגשים בקבוצה קטנה · 800 ₪',
    description: `5 מפגשים של שעה וחצי, פעם בשבוע, בקבוצה קטנה של עד 7 אמהות.
מתאים מגיל לידה עד 3/3.5 חודשים.

מה נלמד ונחווה:
• הסתגלות הדרגתית מהרחם אל העולם
• עידוד שכיבה נינוחה על הבטן וחיזוק השרירים
• ניצול חלונות ערות
• חיבור ותקשורת דרך מגע, קול ומבט
• חשיפה למרקמים וחוויות תחושתיות
• שימוש בפוף, מנשא בד וכדור פיזיו
• כלים להרגעה, הרפיה והקלה על אי-נוחות וגזים
• שיווי משקל ותנועה במרחב

כולל: קבוצת וואטסאפ עם סיכומים וליווי בין המפגשים, זמן בגינה הירוקה של מימו עם קפה ונשנושים, ומתנה אישית בסיום.
הסטודיו: אבא אחימאיר 10, רמת גן (שיכון ותיקים).`,
    link: REGISTER.swaddled,
    cta: 'להרשמה לסדנה',
  },
  {
    title: 'סדנת מגלים · ליווי התפתחותי',
    emoji: '🌱',
    short: 'מגיל 3 עד 6 חודשים · 5 מפגשים בקבוצה קטנה · 800 ₪',
    description: `5 מפגשים של שעה וחצי, פעם בשבוע, בקבוצה קטנה של עד 7 אמהות.
מתאים מגיל 3 עד 6 חודשים.
ימי חמישי: 18.6 | 25.6 | 2.7 | 9.7 | 16.7, בשעה 10:00–11:30.

מה נלמד ונעמיק יחד:
• גיל 4 חודשים המופלא
• התהפכות מהבטן לגב ומהגב לבטן
• עידוד שכיבה על הבטן וחיזוק השרירים
• חשיבות קו האמצע וחצייתו
• שליטה בתנועת הגפיים
• חשיפה למרקמים וחוויות תחושתיות
• שימוש בפוף וכדור פיזיו
• כלים להרגעה והרפיה
• שיווי משקל ותנועה במרחב

כולל: קבוצת וואטסאפ עם סיכומים וליווי בין המפגשים, זמן בגינה הירוקה של מימו עם קפה ונשנושים, ומתנה אישית בסיום.
הסטודיו: אבא אחימאיר 10, רמת גן (שיכון ותיקים).`,
    link: REGISTER.discoverers,
    cta: 'להרשמה לסדנה',
  },
  {
    title: 'סדנת עיסוי תינוקות',
    emoji: '🤲',
    short: 'מלידה עד טרום זחילה · 3 מפגשים אינטימיים · 450 ₪',
    description: `3 מפגשים אינטימיים של שעה ורבע, פעם בשבוע, בקבוצה קטנה של עד 7 אמהות.
מתאים מגיל לידה ועד טרום זחילה.

מה כוללת הסדנה:
• לימוד עיסוי תינוקות צעד אחר צעד, בצורה נעימה ובטוחה, לאזורים שונים בגוף: רגליים, ידיים, בטן, בית חזה, גב, עורף, טוסיק ופנים
• כלים פשוטים שתומכים בהתפתחות של הבייבי
• עיסוי שיכול לעזור במצבים של גזים, כאבי בטן, אי-נוחות וקושי להירגע ולהירדם
• קבוצת וואטסאפ עם סיכומים וליווי בין המפגשים
• זמן בגינה הירוקה של מימו עם קפה ונשנושים
• מתנה אישית בסיום

בונוס מיוחד למשתתפות: "ספר הליווי הדיגיטלי של מימו" — הסברים, שלבי העיסוי וסרטונים שבהם אני מדגימה, כדי שתוכלי לחזור לזה גם בבית.
הסטודיו: אבא אחימאיר 10, רמת גן (שיכון ותיקים).`,
    link: REGISTER.massage,
    cta: 'להרשמה לסדנה',
  },
  {
    title: 'ליווי פרטני',
    emoji: '🏡',
    short: 'מפגש פרטני אצלך בבית — אני מגיעה אלייך · 400 ₪ לשעה',
    description: `מפגש פרטני של שעה אצלך בבית — אני מגיעה אלייך. לפני המפגש אני שולחת שאלון התפתחות, שאותו אני קוראת מראש כדי להכיר טוב יותר את התינוק/ת ולהתאים את המפגש בצורה אישית ומדויקת.

במפגש משלבות:
• כלים לעזור לבייבי להירגע, לווסת את עצמו ולישון טוב יותר
• כלים לעבור את החודשים הראשונים של המציאות החדשה בצורה מיטבית
• כלים של ליווי התפתחותי: חיזוק, תנועה והבנת הצרכים של התינוק/ת
• מקום לאמא: נחיתה רכה לעולם`,
    link: REGISTER.private,
    cta: 'להרשמה ותיאום',
  },
  {
    title: 'מפגש אבות',
    emoji: '👨‍🍼',
    short: 'מרחב מיוחד לאבות טריים · 150 ₪',
    description: `מרחב מיוחד לאבות טריים. כי גם אבא עובר שינוי גדול עם הלידה, ומגיע לו מקום משלו.
נדבר על התפקיד של אבא בחודשים הראשונים, איך לתמוך בבת הזוג ובבייבי, ועל כלים מעשיים שיעזרו לך להרגיש בטוח ומחובר — באווירה רגועה ובגובה העיניים.
עלות: 150 ₪.`,
    link: REGISTER.dads,
    cta: 'להרשמה',
  },
  {
    title: 'בוקר של מימו · יום פתוח בסטודיו',
    emoji: '☕',
    short: 'בוקר של קהילה ומענה מקצועי · אחת לחודש · 150 ₪',
    description: `בוקר שכולו קהילה, פינוק ומענה מקצועי — מתאים לנשים בהריון ולאמהות לתינוקות בכל הגילאים.

מה מחכה לך:
• ליווי אישי ומענה לשאלות עם מומחיות בתחומן (הנקה, אוסטאופתיה לתינוקות ולנשים בהריון, וייעוץ שינה)
• מרחב רגוע לנשום, להתייעץ ולהתחבר לאמהות אחרות
• מתנה אישית ממני

מתקיים אחת לחודש בסטודיו של מימו, אבא אחימאיר 10, רמת גן.
המספר מוגבל כדי לשמור על מרחב אינטימי — ההרשמה מראש.`,
    link: REGISTER.morning,
    cta: 'להרשמה',
  },
]

export default function ServicesList() {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <section id="services" className="py-20 px-6 sm:px-10" style={{ background: '#FAF8F4' }}>
      <div className="max-w-4xl mx-auto">

        <h2 className="text-3xl font-black text-center mb-2" style={{ color: '#A35C3D' }}>
          איפה תוכלו לפגוש אותי
        </h2>
        <p className="text-center text-sm mb-12" style={{ color: '#818267' }}>
          לחצי על שירות לפרטים נוספים
        </p>

        <div className="flex flex-col">
          {services.map((s, i) => (
            <div
              key={s.title}
              className="border-b"
              style={{ borderColor: '#DCD4C8' }}
            >
              <button
                className="w-full py-6 flex items-center gap-4 text-right transition-colors"
                onClick={() => setOpen(open === i ? null : i)}
              >
                {/* Title */}
                <div className="flex-1 flex items-center gap-3">
                  <span className="text-xl">{s.emoji}</span>
                  <div className="text-right">
                    <p className="font-black text-lg" style={{ color: '#3A352E' }}>{s.title}</p>
                    <p className="text-sm mt-0.5" style={{ color: '#818267' }}>{s.short}</p>
                  </div>
                </div>

                {/* Checkmark icon */}
                <div
                  className="w-7 h-7 rounded-full border-2 flex items-center justify-center shrink-0 transition-all"
                  style={{
                    borderColor: open === i ? '#E7C78A' : '#C6BDA0',
                    background: open === i ? '#E7C78A' : 'transparent',
                  }}
                >
                  <svg className="w-3.5 h-3.5" viewBox="0 0 14 14" fill="none">
                    <path
                      d="M2 7l4 4 6-6"
                      stroke={open === i ? '#3A352E' : '#C6BDA0'}
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </button>

              {/* Expanded */}
              {open === i && (
                <div className="pb-6 pr-10 flex flex-col gap-4">
                  {s.image && (
                    <img
                      src={s.image}
                      alt={s.alt ?? s.title}
                      className="w-full max-w-sm rounded-2xl object-cover shadow-sm"
                      loading="lazy"
                    />
                  )}
                  <p
                    className="text-sm leading-relaxed whitespace-pre-line"
                    style={{ color: '#3A352E' }}
                  >
                    {s.description}
                  </p>
                  <a
                    href={s.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="self-start text-sm font-bold px-5 py-2.5 rounded-full transition-colors"
                    style={{ background: '#E7C78A', color: '#3A352E' }}
                  >
                    {s.cta}
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
