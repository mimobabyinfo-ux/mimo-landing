import marakas from '../assets/marakas.jpeg'
import rasanMeech from '../assets/rasanmeech.png'
import rasanSratim from '../assets/rasanimsratim.png'
import pof from '../assets/pof.jpeg'
import Reveal from './Reveal'

// Dedicated WhatsApp message for product orders (separate from the workshops CTA).
const ORDER_MESSAGE = 'היי ברנדה! הגעתי דרך האתר ואשמח להזמין מוצר משלים 🤍'
const ORDER_URL = `https://wa.me/972559904274?text=${encodeURIComponent(ORDER_MESSAGE)}`

type Product = {
  image: string
  title: string
  desc: string
  price: string
}

const products: Product[] = [
  {
    image: marakas,
    title: 'מרקס ערמונים',
    desc: 'גירוי שמיעתי עדין לחיזוק האחיזה והקשב',
    price: '60',
  },
  {
    image: rasanMeech,
    title: 'רעשן מעץ',
    desc: 'רעשן טבעי לאחיזה ראשונית ומשחק חושי',
    price: '30',
  },
  {
    image: rasanSratim,
    title: 'רעשן עם סרטים',
    desc: 'צבעים ומרקמים לעידוד התבוננות ומעקב',
    price: '20',
  },
  {
    image: pof,
    title: 'פוף 110/80',
    desc: 'מרחב רך ובטוח לשכיבה על הבטן ולמשחק',
    price: '270',
  },
]

export default function Products() {
  return (
    <section id="products" className="py-20 px-6 sm:px-10" style={{ background: '#FDFBF7' }}>
      <div className="max-w-4xl mx-auto">

        <Reveal>
          <h2 className="text-3xl font-black text-center mb-2" style={{ color: '#A35C3D' }}>
            מוצרים משלימים של מימו
          </h2>
          <p className="text-center text-sm mb-12 max-w-md mx-auto leading-relaxed" style={{ color: '#818267' }}>
            אביזרי התפתחות שאני אוהבת ומשתמשת בהם בסדנאות — עכשיו גם אצלכם בבית
          </p>
        </Reveal>

        {/* Product grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
          {products.map((p, i) => (
            <Reveal key={p.title} delay={i * 70} className="h-full">
              <div
                className="h-full rounded-3xl overflow-hidden flex flex-col"
                style={{ background: '#fff', boxShadow: '0 4px 20px rgba(74,63,53,0.08)' }}
              >
                <div className="h-44 flex items-center justify-center p-4" style={{ background: '#fff' }}>
                  <img
                    src={p.image}
                    alt={p.title}
                    className="max-w-full max-h-full object-contain"
                    loading="lazy"
                  />
                </div>
                <div className="px-4 pb-4 pt-1 flex flex-col gap-1.5 flex-1">
                  <h3 className="font-black text-base leading-tight" style={{ color: '#3A352E' }}>
                    {p.title}
                  </h3>
                  <p className="text-xs leading-snug" style={{ color: '#818267' }}>
                    {p.desc}
                  </p>
                  <p className="text-lg font-black mt-auto pt-2" style={{ color: '#A35C3D' }}>
                    ₪{p.price}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Pickup note + order CTA */}
        <Reveal>
          <div
            className="mt-10 rounded-3xl px-6 py-7 flex flex-col items-center gap-4 text-center"
            style={{ background: '#E7C78A1f', border: '1px solid #E7C78A55' }}
          >
            <p className="text-sm font-semibold leading-relaxed max-w-md" style={{ color: '#3A352E' }}>
              📦 ניתן להזמין ולאסוף את המוצרים בסדנאות ובמפגשים של מימו
            </p>
            <a
              href={ORDER_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-bold px-7 py-3.5 rounded-full transition-all duration-200 hover:scale-105 shadow-sm"
              style={{ background: '#A35C3D', color: '#fff' }}
            >
              💬 להזמנה בוואטסאפ
            </a>
          </div>
        </Reveal>

      </div>
    </section>
  )
}
