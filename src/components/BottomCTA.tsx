export default function BottomCTA() {
  return (
    <section id="contact" className="py-20 px-4 sm:px-6 bg-beige-900">
      <div className="max-w-3xl mx-auto text-center flex flex-col items-center gap-7">

        <div>
          <p className="text-mustard-300 font-bold text-sm mb-3 tracking-wide uppercase">מוכנה להתחיל?</p>
          <h2 className="text-3xl sm:text-4xl font-black text-white leading-tight">
            אל תחמיצי את ההזדמנות
            <br />
            לתת לכן את הכי טוב
          </h2>
          <p className="text-beige-400 mt-4 text-base max-w-xl mx-auto leading-relaxed">
            כל יום הוא רגע חדש — ורגעים עוברים מהר. הצטרפי לאלפי האמהות שכבר מלוות את ההתפתחות של התינוק שלהן עם מימו.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
          <a
            href="#workshops"
            className="bg-mustard-400 hover:bg-mustard-500 text-white font-black text-lg px-9 py-4 rounded-3xl shadow-lg shadow-mustard-900 transition-colors text-center"
          >
            לסדנאות שלנו ←
          </a>
          <a
            href="https://wa.me/972500000000"
            className="border-2 border-beige-600 hover:border-mustard-400 text-beige-300 hover:text-mustard-300 font-bold text-base px-7 py-4 rounded-3xl transition-colors text-center"
          >
            💬 שלחי לנו ב-WhatsApp
          </a>
        </div>

        <p className="text-beige-500 text-xs">
          ללא התחייבות · ניצור איתך קשר תוך 24 שעות
        </p>
      </div>
    </section>
  )
}
