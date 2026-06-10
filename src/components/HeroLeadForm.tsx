import { useState } from 'react'
import { submitLead } from '../lib/submitLead'

type Errors = { firstName?: string; phone?: string; email?: string }
type Status = 'idle' | 'submitting' | 'sent' | 'error'

const inputStyle = { background: '#fff', color: '#3A352E' }
const inputClass =
  'w-full px-4 py-2.5 rounded-2xl text-sm outline-none border-0 focus:ring-2 focus:ring-[#E7C78A]'
const errorColor = '#FFE2D9'

export default function HeroLeadForm() {
  const [form, setForm] = useState({ firstName: '', phone: '', email: '' })
  const [errors, setErrors] = useState<Errors>({})
  const [status, setStatus] = useState<Status>('idle')

  const validate = (): boolean => {
    const e: Errors = {}
    if (!form.firstName.trim()) e.firstName = 'נא למלא שם פרטי'
    if (!/^[0-9+\-\s()]{9,}$/.test(form.phone.trim())) e.phone = 'נא למלא מספר טלפון תקין'
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) e.email = 'נא למלא כתובת אימייל תקינה'
    setErrors(e)
    return Object.keys(e).length === 0
  }

  const handleSubmit = async (ev: React.FormEvent) => {
    ev.preventDefault()
    if (!validate()) return
    setStatus('submitting')

    const { ok } = await submitLead({
      first_name: form.firstName.trim(),
      last_name: '',
      phone: form.phone.trim(),
      email: form.email.trim(),
      notes: '',
    })

    if (!ok) {
      setStatus('error')
      return
    }

    setStatus('sent')
    setForm({ firstName: '', phone: '', email: '' })
    setErrors({})
  }

  const update = (field: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement>) =>
    setForm({ ...form, [field]: e.target.value })

  return (
    <div className="rounded-3xl p-6 shadow-xl" style={{ background: '#A35C3D' }}>
      {status === 'sent' ? (
        <div className="text-center py-6">
          <p className="text-3xl mb-2">🤍</p>
          <p className="font-bold text-sm leading-relaxed" style={{ color: '#FFFFFF' }}>
            תודה! קיבלתי את הפרטים ואחזור אלייך בהקדם 🤍
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col gap-2.5" noValidate>
          {/* Badge */}
          <span
            className="self-start text-xs font-bold px-3 py-1 rounded-full"
            style={{ background: '#E7C78A', color: '#3A352E' }}
          >
            שיחת היכרות · בלי התחייבות
          </span>

          {/* Heading + value proposition */}
          <div className="mb-1">
            <p className="font-black text-lg leading-snug" style={{ color: '#FFFFFF' }}>
              לא בטוחה מה הכי מתאים לך ולבייבי?
            </p>
            <p className="text-sm mt-1.5 leading-relaxed" style={{ color: '#F4E9DF' }}>
              שיחה קצרה ונעימה, שבה תרגישי שיש למי לפנות — ושאת לא לבד בדרך הזו.
            </p>
          </div>

          {status === 'error' && (
            <p className="text-xs leading-relaxed" style={{ color: errorColor }}>
              אופס, משהו השתבש — אפשר לנסות שוב, או לדבר איתי בוואטסאפ.
            </p>
          )}

          <div>
            <input
              placeholder="שם פרטי"
              value={form.firstName}
              onChange={update('firstName')}
              aria-invalid={!!errors.firstName}
              className={inputClass}
              style={inputStyle}
            />
            {errors.firstName && <p className="text-xs mt-1 pr-1" style={{ color: errorColor }}>{errors.firstName}</p>}
          </div>

          <div>
            <input
              placeholder="טלפון"
              type="tel"
              value={form.phone}
              onChange={update('phone')}
              aria-invalid={!!errors.phone}
              className={inputClass}
              style={inputStyle}
            />
            {errors.phone && <p className="text-xs mt-1 pr-1" style={{ color: errorColor }}>{errors.phone}</p>}
          </div>

          <div>
            <input
              placeholder="דואר אלקטרוני"
              type="email"
              value={form.email}
              onChange={update('email')}
              aria-invalid={!!errors.email}
              className={inputClass}
              style={inputStyle}
            />
            {errors.email && <p className="text-xs mt-1 pr-1" style={{ color: errorColor }}>{errors.email}</p>}
          </div>

          <button
            type="submit"
            disabled={status === 'submitting'}
            className="w-full font-black text-base px-6 py-4 rounded-full transition-all duration-200 hover:scale-[1.02] disabled:opacity-60 mt-1 shadow-md"
            style={{ background: '#E7C78A', color: '#3A352E' }}
          >
            {status === 'submitting' ? 'שולחת...' : 'בואי נדבר 🤍'}
          </button>
        </form>
      )}
    </div>
  )
}
