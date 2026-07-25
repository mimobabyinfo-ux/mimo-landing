import { WhatsAppIcon } from './WhatsAppButton'

// "חברה מביאה חברה" — both friends get 10% off when signing up together.
const PROMO_MESSAGE = 'היי ברנדה! אנחנו חברות שרוצות להירשם יחד לסדנה ולקבל את ההנחה 🤍'
const PROMO_URL = `https://wa.me/972533041277?text=${encodeURIComponent(PROMO_MESSAGE)}`

export default function FriendPromo() {
  return (
    <section id="promo" className="py-20 px-6 sm:px-10" style={{ background: '#FAF8F4' }}>
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-black text-center mb-2" style={{ color: '#A35C3D' }}>
          מבצע במיוחד בשבילך
        </h2>
        <p className="text-center text-sm mb-10" style={{ color: '#818267' }}>
          כי הכי כיף להתחיל משהו חדש - ביחד
        </p>

        <div
          className="rounded-3xl p-8 sm:p-10 text-center shadow-sm"
          style={{ background: '#EADBDD' }}
        >
          <p className="text-2xl font-black mb-4" style={{ color: '#A35C3D' }}>
            חברה מביאה חברה - ושתיכן מרוויחות! 🤍
          </p>

          <p className="text-base leading-relaxed mb-2" style={{ color: '#3A352E' }}>
            אין כמו לעבור את המסע הזה יחד.
          </p>
          <p className="text-base leading-relaxed mb-2" style={{ color: '#3A352E' }}>
            הצטרפו יחד לאותה הסדנה - וכל אחת מכן תקבל{' '}
            <span className="font-black" style={{ color: '#A35C3D' }}>10% הנחה!</span>
          </p>
          <p className="text-sm leading-relaxed mb-8" style={{ color: '#5a4a3a' }}>
            מה יותר טוב מזמן איכות עם הבייבי, חברות חדשות וכלים חשובים להתפתחות - כפול שתיים 🤍
          </p>

          <a
            href={PROMO_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-bold px-7 py-3.5 rounded-full transition-all duration-200 hover:scale-105 shadow-sm"
            style={{ background: '#A35C3D', color: '#fff' }}
          >
            <WhatsAppIcon />
            אנחנו בעניין
          </a>
        </div>
      </div>
    </section>
  )
}
