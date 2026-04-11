export default function About() {
  return (
    <section id="about" className="py-24 px-6 sm:px-10" style={{ background: '#FDFBF7' }}>
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16 items-center">

        {/* Text — right side (RTL = appears on right) */}
        <div className="flex flex-col gap-5 order-2 md:order-1">
          <div>
            <p className="text-2xl font-light" style={{ color: '#4A3F35' }}>היי,</p>
            <h2 className="text-4xl font-black" style={{ color: '#4A3F35' }}>אני מימו</h2>
            <p className="text-base font-semibold mt-1" style={{ color: '#E9C46A' }}>
              מדריכת התפתחות תינוקות ויועצת שינה מוסמכת
            </p>
          </div>

          <p className="text-base leading-relaxed" style={{ color: '#5a4a3a' }}>
            אני מאמינה שכל אמא יודעת הכי טוב מה טוב לתינוק שלה — היא רק צריכה את הכלים הנכונים והמקום הבטוח לגלות את זה.
          </p>
          <p className="text-base leading-relaxed" style={{ color: '#5a4a3a' }}>
            עברתי את המסע הזה בעצמי, ויצאתי עם הלב פתוח ויד מושטת לכל אמא שנמצאת בדיוק שם.
            אני כאן כדי להיות הליווי שהייתי רוצה שיהיה לי.
          </p>
          <p className="text-base leading-relaxed" style={{ color: '#5a4a3a' }}>
            הסדנאות והמפגשים שלי מבוססים על שנות הכשרה וניסיון אישי — עם הרבה אהבה, הקשבה ומקצועיות.
          </p>

          <a
            href="#services"
            className="self-start font-bold text-sm mt-2 underline underline-offset-4"
            style={{ color: '#E9C46A' }}
          >
            לקרוא עוד ←
          </a>
        </div>

        {/* Photo — left side */}
        <div className="order-1 md:order-2 flex justify-center">
          <div
            className="w-72 h-80 sm:w-80 sm:h-96 rounded-3xl overflow-hidden shadow-xl"
            style={{ background: '#EDE4D5' }}
          >
            {/* Placeholder — replace with real founder photo */}
            <div className="w-full h-full flex flex-col items-center justify-center gap-3" style={{ color: '#a09080' }}>
              <span className="text-6xl">👩</span>
              <p className="text-sm font-medium">תמונה של המייסדת</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
