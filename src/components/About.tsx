import aboutImg from '../assets/about-brenda.jpg'

export default function About() {
  return (
    <section id="about" className="py-24 px-6 sm:px-10" style={{ background: '#FAF8F4' }}>
      <div className="max-w-2xl mx-auto flex flex-col gap-6">

        {/* Intro — small round photo next to the name, aligned to the left */}
        <div className="flex flex-row-reverse items-center justify-end gap-5">
          <img
            src={aboutImg}
            alt="ברנדה מחזיקה תינוק קטן ליד החלון"
            className="w-24 h-24 sm:w-28 sm:h-28 rounded-full object-cover shadow-md shrink-0"
            style={{ objectPosition: 'center 30%' }}
            loading="lazy"
          />
          <div>
            <p className="text-2xl font-light" style={{ color: '#3A352E' }}>היי,</p>
            <h2 className="text-4xl font-black" style={{ color: '#A35C3D' }}>אני ברנדה</h2>
            <p className="text-sm sm:text-base font-semibold mt-1" style={{ color: '#818267' }}>
              מלווה התפתחותית ומדריכת עיסוי תינוקות
            </p>
          </div>
        </div>

        <p className="text-base leading-relaxed" style={{ color: '#3A352E' }}>
          היי, אני ברנדה — מלווה התפתחותית ומדריכת עיסוי תינוקות, ובימים אלו גם סטודנטית להדרכת הורים, ייעוץ שינה וגמילה מחיתולים. נולדתי בארגנטינה, גרתי רוב חיי במדריד, והיום אני כאן ומלווה אמהות ותינוקות מהסטודיו שלי ברמת גן.
        </p>
        <p className="text-base leading-relaxed" style={{ color: '#3A352E' }}>
          אני מאמינה שכל אמא צריכה מעטפת תומכת, במיוחד בחודשים הראשונים שאחרי הלידה — תקופה כל כך מטלטלת. אני כאן כדי לתת לכן את הכלים, את ההקשבה ואת ה"מימו" הזה: לדעת שמישהי מקשיבה, מבינה ועונה על כל שאלה או דאגה.
        </p>
        <p className="text-base leading-relaxed" style={{ color: '#3A352E' }}>
          "מימו" (Mimo) בספרדית פירושו "ליטוף", וזו בדיוק המהות של המרחב שלנו: לתת לכן ולבייביז שלכן מלא מימו — דרך מגע, תנועה, תיווך, הבנה ותמיכה.
        </p>

        <a
          href="#services"
          className="self-start font-bold text-sm mt-1 underline underline-offset-4"
          style={{ color: '#A35C3D' }}
        >
          לקרוא עוד ←
        </a>
      </div>
    </section>
  )
}
