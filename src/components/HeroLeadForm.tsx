import { useState } from 'react'
import { submitLead } from '../lib/submitLead'

type Errors = { firstName?: string; phone?: string; email?: string }
type Status = 'idle' | 'submitting' | 'sent' | 'error'

const inputStyle = { background: '#fff', borderColor: '#C6BDA0', color: '#3A352E' }

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
    <div className="rounded-3xl p-5 shadow-md" style={{ background: '#fff' }}>
      {status === 'sent' ? (
        <div className="text-center py-6">
          <p className="text-3xl mb-2">🤍</p>
          <p className="font-bold text-sm leading-relaxed" style={{ color: '#3A352E' }}>
            תודה! קיבלתי את הפרטים ואחזור אלייך בהקדם 🤍
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col gap-2.5" noValidate>
          <p className="font-bold text-base mb-0.5" style={{ color: '#A35C3D' }}>
            השאירי פרטים ואחזור אלייך 🤍
          </p>

          {status === 'error' && (
            <p className="text-xs leading-relaxed" style={{ color: '#B4462E' }}>
              אופס, משהו השתבש — אפשר לנסות שוב, או לדבר איתי בוואטסאפ.
            </p>
          )}

          <div>
            <input
              placeholder="שם פרטי"
              value={form.firstName}
              onChange={update('firstName')}
              aria-invalid={!!errors.firstName}
              className="w-full px-4 py-2.5 rounded-2xl border text-sm outline-none focus:ring-2"
              style={inputStyle}
            />
            {errors.firstName && <p className="text-xs mt-1 pr-1" style={{ color: '#B4462E' }}>{errors.firstName}</p>}
          </div>

          <div>
            <input
              placeholder="טלפון"
              type="tel"
              value={form.phone}
              onChange={update('phone')}
              aria-invalid={!!errors.phone}
              className="w-full px-4 py-2.5 rounded-2xl border text-sm outline-none focus:ring-2"
              style={inputStyle}
            />
            {errors.phone && <p className="text-xs mt-1 pr-1" style={{ color: '#B4462E' }}>{errors.phone}</p>}
          </div>

          <div>
            <input
              placeholder="דואר אלקטרוני"
              type="email"
              value={form.email}
              onChange={update('email')}
              aria-invalid={!!errors.email}
              className="w-full px-4 py-2.5 rounded-2xl border text-sm outline-none focus:ring-2"
              style={inputStyle}
            />
            {errors.email && <p className="text-xs mt-1 pr-1" style={{ color: '#B4462E' }}>{errors.email}</p>}
          </div>

          <button
            type="submit"
            disabled={status === 'submitting'}
            className="font-black text-sm px-6 py-3 rounded-full transition-colors disabled:opacity-60 mt-0.5"
            style={{ background: '#A35C3D', color: '#fff' }}
          >
            {status === 'submitting' ? 'שולחת...' : 'שלחי'}
          </button>
        </form>
      )}
    </div>
  )
}
