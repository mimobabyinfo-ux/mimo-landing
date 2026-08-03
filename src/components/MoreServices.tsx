import { WHATSAPP_URL } from './WhatsAppButton'
import { REGISTER } from '../lib/registerLinks'

// The quieter offerings — one card with a simple list, prices visible.
const extras = [
  {
    title: 'ליווי פרטני בבית',
    short: 'מפגש של שעה אצלך בבית - אני מגיעה אלייך',
    price: '400 ₪',
    link: REGISTER.private,
  },
  {
    title: 'מפגש אבות',
    short: 'מרחב מיוחד לאבות טריים',
    price: '150 ₪',
    link: REGISTER.dads,
  },
  {
    title: 'מתנת לידה',
    short: 'הפינוק המושלם לחברה שזה עתה ילדה',
    price: 'בתיאום',
    link: WHATSAPP_URL,
  },
]

export default function MoreServices() {
  return (
    <div
      className="mt-[34px] rounded-[26px] border p-[26px]"
      style={{ background: '#FFFDF8', borderColor: '#E6DFD3' }}
    >
      <p className="m-0 mb-[18px] text-[15px] font-extrabold" style={{ color: '#3A352E' }}>
        ליווי אישי ומפגשים נוספים
      </p>
      <div className="grid gap-2.5 sm:grid-cols-2 lg:grid-cols-3">
        {extras.map((e) => (
          <a
            key={e.title}
            href={e.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between gap-3.5 no-underline rounded-[18px] border px-4 py-3.5"
            style={{ background: '#FAF8F4', borderColor: '#EDE6DA' }}
          >
            <span className="flex flex-col gap-[3px]">
              <span className="text-[15px] font-extrabold" style={{ color: '#3A352E' }}>
                {e.title}
              </span>
              <span className="text-[13px]" style={{ color: '#818267' }}>
                {e.short}
              </span>
            </span>
            <span className="text-[15px] font-black whitespace-nowrap" style={{ color: '#A35C3D' }}>
              {e.price}
            </span>
          </a>
        ))}
      </div>
    </div>
  )
}
