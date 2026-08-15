import { useEffect, useRef, useState, type ReactNode } from 'react'
import { submitLead } from '../../lib/submitLead'
import { track } from '../../lib/track'
import { WhatsAppIcon } from '../WhatsAppButton'

// The one lead form, shared by all pages. Name + phone only: every extra field
// costs submissions, and Brenda calls back personally anyway.
//
// On success we hand off to /thank-you.html, which is where the Meta Pixel
// "Lead" event fires. Do not move that event in here.

type Props = {
  /** Sent as form_submit{location}. Also decides whether the view/start events fire. */
  location: string
  /** home | swaddled | discoverers | course — stored on the lead row. */
  pageVariant: string
  waUrl: string
  submitLabel: string
  /** Wording of the WhatsApp escape hatch under the form; differs per page. */
  waLabel?: string
  /** Everything above the fields: kicker, heading, sub. */
  header?: ReactNode
  /** Fire hero_form_view / hero_form_start for the page's primary form. */
  isPrimary?: boolean
}

type Errors = { fullName?: string; phone?: string }
type Status = 'idle' | 'submitting' | 'error'

const inputStyle: React.CSSProperties = {
  background: '#fff',
  color: '#3A352E',
  border: '1px solid #DCD4C8',
  borderRadius: 16,
  padding: 16,
  // 16px minimum, or iPhone zooms into the field on focus.
  fontSize: 16,
  width: '100%',
}

export default function LeadForm({
  location,
  pageVariant,
  waUrl,
  submitLabel,
  waLabel = 'או שנדבר בוואטסאפ',
  header,
  isPrimary = false,
}: Props) {
  const [form, setForm] = useState({ fullName: '', phone: '' })
  const [errors, setErrors] = useState<Errors>({})
  const [status, setStatus] = useState<Status>('idle')
  const rootRef = useRef<HTMLDivElement>(null)
  const startedRef = useRef(false)

  // hero_form_view — once, when the primary form first scrolls into view.
  useEffect(() => {
    if (!isPrimary) return
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
  }, [isPrimary])

  // hero_form_start — first focus on any field.
  const handleFocus = () => {
    if (startedRef.current) return
    startedRef.current = true
    if (isPrimary) track('hero_form_start')
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
      pageVariant,
    })
    if (!ok) {
      setStatus('error')
      return
    }

    track('form_submit', { location })

    // The thank-you page fires the Meta Pixel Lead event.
    window.location.href = '/thank-you.html'
  }

  const update =
    (field: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement>) => {
      setForm({ ...form, [field]: e.target.value })
      if (errors[field]) setErrors({ ...errors, [field]: undefined })
    }

  return (
    <div ref={rootRef} className="rounded-[26px] p-[22px]" style={{ background: '#FFFDF8' }}>
      <form onSubmit={handleSubmit} className="flex flex-col gap-[13px]" noValidate>
        {header}

        {status === 'error' && (
          <p className="m-0 text-sm leading-relaxed" style={{ color: '#B4462E' }}>
            אופס, משהו השתבש. אפשר לנסות שוב, או{' '}
            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold underline"
              style={{ color: '#B4462E' }}
              data-wa-location={`${location}-error`}
            >
              לדבר איתי בוואטסאפ
            </a>
            .
          </p>
        )}

        <div className="flex flex-col gap-1.5">
          <input
            placeholder="שם מלא"
            value={form.fullName}
            onChange={update('fullName')}
            onFocus={handleFocus}
            aria-invalid={!!errors.fullName}
            aria-label="שם מלא"
            autoComplete="name"
            style={inputStyle}
          />
          {errors.fullName && (
            <span className="pr-1 text-[13.5px] font-bold" style={{ color: '#B4462E' }}>
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
            aria-label="טלפון"
            autoComplete="tel"
            style={inputStyle}
          />
          {errors.phone && (
            <span className="pr-1 text-[13.5px] font-bold" style={{ color: '#B4462E' }}>
              {errors.phone}
            </span>
          )}
        </div>

        <button
          type="submit"
          disabled={status === 'submitting'}
          className="w-full cursor-pointer rounded-full border-0 text-lg font-extrabold disabled:opacity-60"
          style={{ background: '#A35C3D', color: '#fff', padding: 18, minHeight: 58 }}
        >
          {status === 'submitting' ? 'שולחת...' : submitLabel}
        </button>

        <p className="m-0 text-center text-[13px]" style={{ color: '#818267' }}>
          אני חוזרת אלייך אישית, בלי דיוור ובלי ספאם
        </p>

        <span className="block h-px" style={{ background: '#EDE6DA' }} />

        <a
          href={waUrl}
          target="_blank"
          rel="noopener noreferrer"
          data-wa-location={`${location}-form`}
          className="flex items-center justify-center gap-2.5 text-[15px] font-bold no-underline"
          style={{ color: '#3A352E', minHeight: 44 }}
        >
          <span
            className="inline-flex shrink-0 items-center justify-center rounded-full"
            style={{ width: 24, height: 24, background: '#25D366', color: '#fff' }}
          >
            <WhatsAppIcon className="h-[13px] w-[13px]" />
          </span>
          {waLabel}
        </a>
      </form>
    </div>
  )
}
