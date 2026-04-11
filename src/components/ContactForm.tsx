import { useState } from 'react'

export default function ContactForm() {
  const [form, setForm] = useState({ firstName: '', lastName: '', phone: '', email: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Replace with your actual form submission (e.g. Formspree, EmailJS, etc.)
    const wa = `https://wa.me/972559904274?text=${encodeURIComponent(
      `שם: ${form.firstName} ${form.lastName}\nטלפון: ${form.phone}\nאימייל: ${form.email}\nהערות: ${form.message}`
    )}`
    window.open(wa, '_blank')
    setSent(true)
  }

  return (
    <section id="contact" className="py-20 px-6 sm:px-10" style={{ background: '#F5EBD0' }}>
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">

        {/* Left — decorative */}
        <div className="hidden md:flex flex-col gap-4 items-start">
          <div className="w-16 h-16 rounded-2xl" style={{ background: '#E9C46A55' }} />
          <div className="w-10 h-10 rounded-xl" style={{ background: '#b5d5d544' }} />
          <p className="text-4xl font-black leading-tight mt-4" style={{ color: '#4A3F35' }}>
            נשמח<br />לשמוע<br />ממך 💛
          </p>
        </div>

        {/* Right — form */}
        <div>
          <h2 className="text-2xl font-black mb-6 text-center md:text-right" style={{ color: '#4A3F35' }}>
            השאירי פרטים ואחזור אליך
          </h2>

          {sent ? (
            <div className="text-center py-12">
              <p className="text-4xl mb-3">💛</p>
              <p className="font-bold text-lg" style={{ color: '#4A3F35' }}>תודה! נחזור אליך בקרוב.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div className="grid grid-cols-2 gap-3">
                <input
                  required
                  placeholder="שם פרטי *"
                  value={form.firstName}
                  onChange={e => setForm({ ...form, firstName: e.target.value })}
                  className="px-4 py-3 rounded-2xl border text-sm outline-none focus:ring-2"
                  style={{ background: '#fff', borderColor: '#D0C4B0', color: '#4A3F35' }}
                />
                <input
                  required
                  placeholder="שם משפחה *"
                  value={form.lastName}
                  onChange={e => setForm({ ...form, lastName: e.target.value })}
                  className="px-4 py-3 rounded-2xl border text-sm outline-none focus:ring-2"
                  style={{ background: '#fff', borderColor: '#D0C4B0', color: '#4A3F35' }}
                />
              </div>
              <input
                required
                placeholder="טלפון *"
                type="tel"
                value={form.phone}
                onChange={e => setForm({ ...form, phone: e.target.value })}
                className="px-4 py-3 rounded-2xl border text-sm outline-none"
                style={{ background: '#fff', borderColor: '#D0C4B0', color: '#4A3F35' }}
              />
              <input
                placeholder="דואר אלקטרוני *"
                type="email"
                value={form.email}
                onChange={e => setForm({ ...form, email: e.target.value })}
                className="px-4 py-3 rounded-2xl border text-sm outline-none"
                style={{ background: '#fff', borderColor: '#D0C4B0', color: '#4A3F35' }}
              />
              <textarea
                placeholder="הערות"
                rows={3}
                value={form.message}
                onChange={e => setForm({ ...form, message: e.target.value })}
                className="px-4 py-3 rounded-2xl border text-sm outline-none resize-none"
                style={{ background: '#fff', borderColor: '#D0C4B0', color: '#4A3F35' }}
              />
              <button
                type="submit"
                className="font-black text-sm px-8 py-3.5 rounded-full transition-colors self-end"
                style={{ background: '#4A3F35', color: '#fff' }}
              >
                שלחי
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
