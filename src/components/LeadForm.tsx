import { useEffect, useRef, useState } from 'react'
import { submitLead } from '../lib/submitLead'
import { track } from '../lib/track'
import { WHATSAPP_URL, WhatsAppIcon } from './WhatsAppButton'

// The ONE lead form on the page — name + phone only.
// variant only changes the header block; the pipeline is identical.
type Props = { variant: 'hero' | 'section' }

type Errors = { fullName?: string; phone?: string }
type Status = 'idle' | 'submitting' | 'error'

const inputClass =
  'w-full box-border rounded-2xl border outline-none focus:ring-2 focus:ring-duck'
const inputStyle: React.CSSProperties = {
  background: '#fff',
  color: '#3A352E',
  borderColor: '#DCD4C8',
  borderRadius: 16,
  padding: '14px 16px',
  // 16px minimum — anything smaller makes iPhone zoom into the field.
  fontSize: 16,
}

export default function LeadForm({ variant }: Props) {
  const [form, setForm] = useState({ fullName: '', phone: '' })
  const [errors, setErrors] = useState<Errors>({})
  const [status, setStatus] = useState<Status>('idle')
  const rootRef = useRef<HTMLDivElement>(null)
  const startedRef = useRef(false)

  // hero_form_view — fires once when the hero form first scrolls into view.
  useEffect(() => {
    if (variant !== 'hero') return
    const el = rootRef.current
    if (!el || typeof IntersectionObserver === 'undefined') {
      track('hero_form_view')
      return
    }
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          track('hero_form_view')
          observer.disconnect()
        }
      },
      { threshold: 0.4 },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [variant])

  // hero_form_start — first focus on any field.
  const handleFocus = () => {
    if (startedRef.current) return
    startedRef.current = true
    if (variant === 'hero') track('hero_form_start')
  }

  const validate = (): boolean => {
    const e: Errors = {}
    if (!form.fullName.trim()) e.fullName = 'נא למלא שם מלא'
    if (!/^[0-9+\-\s()]{9,}$/.test(form.phone.trim())) e.phone = 'נא למלא מספר טלפון תקין'
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
      email: '',
      notes: '',
    })
    if (!ok) {
      setStatus('error')
      return
    }

    track('form_submit', { location: variant })

    // Hand off to the dedicated thank-you page, which fires the Meta Pixel Lead event.
    window.location.href = '/thank-you.html'
  }

  const update =
    (field: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement>) => {
      setForm({ ...form, [field]: e.target.value })
      // Errors reset while typing
      if (errors[field]) setErrors({ ...errors, [field]: undefined })
    }

  return (
    <div
      ref={rootRef}
      className="rounded-[26px] border p-6"
      style={{
        background: '#FFFDF8',
        borderColor: '#E6DFD3',
        boxShadow: '0 10px 34px rgba(58,53,46,0.09)',
      }}
    >
      <form onSubmit={handleSubmit} className="flex flex-col gap-3.5" noValidate>
        {variant === 'hero' && (
          <div className="flex flex-col gap-1.5">
            <span
              className="self-start text-xs font-extrabold px-3 py-1 rounded-full"
              style={{ background: '#E7C78A', color: '#3A352E' }}
            >
              שיחת היכרות · בלי התחייבות
            </span>
            <p className="font-black text-[21px] leading-snug mt-1.5" style={{ color: '#A35C3D' }}>
              לא בטוחה מה הכי מתאים לך ולבייבי?
            </p>
            <p className="text-[14.5px] leading-relaxed" style={{ color: '#5F5A4E' }}>
              שיחה קצרה ונעימה, שבה תרגישי שיש למי לפנות - ושאת לא לבד בדרך הזו.
            </p>
          </div>
        )}

        {status === 'error' && (
          <p className="text-sm leading-relaxed" style={{ color: '#B4462E' }}>
            אופס, משהו השתבש - אפשר לנסות שוב, או{' '}
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="underline font-bold"
              style={{ color: '#B4462E' }}
            >
              לדבר איתי בוואטסאפ
            </a>
            .
          </p>
        )}

        <div className="flex flex-col gap-2.5">
          <div className="flex flex-col gap-1.5">
            <input
              placeholder="שם מלא"
              value={form.fullName}
              onChange={update('fullName')}
              onFocus={handleFocus}
              aria-invalid={!!errors.fullName}
              autoComplete="name"
              className={inputClass}
              style={inputStyle}
            />
            {errors.fullName && (
              <span className="text-[12.5px] font-semibold pr-1" style={{ color: '#B4462E' }}>
                {errors.fullName}
              </span>
            )}
          </div>
          <div className="flex flex-col gap-1.5">
            <input
              placeholder="טלפון"
              type="tel"
              inputMode="tel"
              value={form.phone}
              onChange={update('phone')}
              onFocus={handleFocus}
              aria-invalid={!!errors.phone}
              autoComplete="tel"
              className={inputClass}
              style={inputStyle}
            />
            {errors.phone && (
              <span className="text-[12.5px] font-semibold pr-1" style={{ color: '#B4462E' }}>
                {errors.phone}
              </span>
            )}
          </div>
        </div>

        <button
          type="submit"
          disabled={status === 'submitting'}
          className="w-full font-black text-[17px] border-0 rounded-full cursor-pointer disabled:opacity-60"
          style={{ background: '#A35C3D', color: '#fff', padding: 17 }}
        >
          {status === 'submitting' ? 'שולחת...' : 'בואי נדבר'}
        </button>

        <p className="m-0 text-[12.5px] leading-relaxed text-center" style={{ color: '#818267' }}>
          אני חוזרת אלייך אישית, בלי דיוור ובלי ספאם
        </p>

        <div style={{ height: 1, background: '#EDE6DA' }} />

        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          data-wa-location={variant === 'hero' ? 'hero-form' : 'section-form'}
          className="flex items-center justify-center gap-2 text-[14.5px] font-bold no-underline"
          style={{ color: '#3A352E' }}
        >
          <span
            className="inline-flex items-center justify-center rounded-full"
            style={{ width: 22, height: 22, background: '#25D366', color: '#fff' }}
          >
            <WhatsAppIcon className="w-3 h-3" />
          </span>
          מעדיפה לשאול קודם? דברי איתי בוואטסאפ
        </a>
      </form>
    </div>
  )
}
