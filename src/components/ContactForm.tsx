import { useState } from 'react'
import { submitLead } from '../lib/submitLead'

const WHATSAPP_FALLBACK = 'https://wa.me/972559904274'

type Errors = { fullName?: string; phone?: string; email?: string }
type Status = 'idle' | 'submitting' | 'sent' | 'error'

const inputStyle = { background: '#fff', borderColor: '#C6BDA0', color: '#3A352E' }

export default function ContactForm() {
  const [form, setForm] = useState({ fullName: '', phone: '', email: '', message: '' })
  const [errors, setErrors] = useState<Errors>({})
  const [status, setStatus] = useState<Status>('idle')

  const validate = (): boolean => {
    const e: Errors = {}
    if (!form.fullName.trim()) e.fullName = 'נא למלא שם מלא'
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
      fullName: form.fullName.trim(),
      phone: form.phone.trim(),
      email: form.email.trim(),
      notes: form.message.trim(),
    })
    if (!ok) {
      setStatus('error')
      return
    }

    // Hand off to the dedicated thank-you page, which fires the Meta Pixel Lead event.
    window.location.href = '/thank-you.html'
  }

  const update = (field: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm({ ...form, [field]: e.target.value })

  return (
    <section id="contact" className="py-20 px-6 sm:px-10" style={{ background: '#C6BDA0' }}>
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">

        {/* Left - decorative */}
        <div className="hidden md:flex flex-col gap-4 items-start">
          <div className="w-16 h-16 rounded-2xl" style={{ background: '#E7C78A88' }} />
          <div className="w-10 h-10 rounded-xl" style={{ background: '#C3CDD288' }} />
          <p className="text-4xl font-black leading-tight mt-4" style={{ color: '#A35C3D' }}>
            נשמח<br />לשמוע<br />ממך 💛
          </p>
        </div>

        {/* Right - form */}
        <div>
          <h2 className="text-2xl font-black mb-2 text-center md:text-right" style={{ color: '#A35C3D' }}>
            מעדיפה להשאיר פרטים?
          </h2>
          <p className="text-sm mb-6 text-center md:text-right leading-relaxed" style={{ color: '#3A352E' }}>
            הכי מהיר ליצור קשר זה בוואטסאפ - אבל אם נוח לך, השאירי פרטים כאן ואחזור אלייך.
          </p>

          {status === 'sent' ? (
            <div className="text-center py-12">
              <p className="text-4xl mb-3">🤍</p>
              <p className="font-bold text-lg" style={{ color: '#3A352E' }}>
                תודה! קיבלתי את הפרטים ואחזור אלייך בהקדם 🤍
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-4" noValidate>
              {status === 'error' && (
                <div
                  className="rounded-2xl px-4 py-3 text-sm leading-relaxed"
                  style={{ background: '#F3E0DA', color: '#A35C3D' }}
                >
                  אופס, משהו השתבש - אפשר{' '}
                  <button type="button" onClick={() => setStatus('idle')} className="underline font-bold">
                    לנסות שוב
                  </button>
                  , או{' '}
                  <a href={WHATSAPP_FALLBACK} target="_blank" rel="noopener noreferrer" className="underline font-bold">
                    לדבר איתי בוואטסאפ
                  </a>
                  .
                </div>
              )}

              <div>
                <input
                  placeholder="שם מלא *"
                  value={form.fullName}
                  onChange={update('fullName')}
                  aria-invalid={!!errors.fullName}
                  className="w-full px-4 py-3 rounded-2xl border text-sm outline-none focus:ring-2"
                  style={inputStyle}
                />
                {errors.fullName && <p className="text-xs mt-1 pr-1" style={{ color: '#B4462E' }}>{errors.fullName}</p>}
              </div>

              <div>
                <input
                  placeholder="טלפון *"
                  type="tel"
                  value={form.phone}
                  onChange={update('phone')}
                  aria-invalid={!!errors.phone}
                  className="w-full px-4 py-3 rounded-2xl border text-sm outline-none focus:ring-2"
                  style={inputStyle}
                />
                {errors.phone && <p className="text-xs mt-1 pr-1" style={{ color: '#B4462E' }}>{errors.phone}</p>}
              </div>

              <div>
                <input
                  placeholder="דואר אלקטרוני *"
                  type="email"
                  value={form.email}
                  onChange={update('email')}
                  aria-invalid={!!errors.email}
                  className="w-full px-4 py-3 rounded-2xl border text-sm outline-none focus:ring-2"
                  style={inputStyle}
                />
                {errors.email && <p className="text-xs mt-1 pr-1" style={{ color: '#B4462E' }}>{errors.email}</p>}
              </div>

              <textarea
                placeholder="הערות"
                rows={3}
                value={form.message}
                onChange={update('message')}
                className="w-full px-4 py-3 rounded-2xl border text-sm outline-none resize-none"
                style={inputStyle}
              />

              <button
                type="submit"
                disabled={status === 'submitting'}
                className="font-black text-sm px-8 py-3.5 rounded-full transition-colors self-end disabled:opacity-60"
                style={{ background: '#A35C3D', color: '#fff' }}
              >
                {status === 'submitting' ? 'שולחת...' : 'שלחי'}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
