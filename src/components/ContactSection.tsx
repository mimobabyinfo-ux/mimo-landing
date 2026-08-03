import LeadForm from './LeadForm'

// The conversion section — the second (and last) appearance of the ONE lead form.
export default function ContactSection() {
  return (
    <section id="contact" className="px-5 py-[68px]" style={{ background: '#A35C3D' }}>
      <div className="max-w-[1000px] mx-auto grid gap-11 md:grid-cols-2 items-center">
        <div className="flex flex-col gap-[18px]">
          <h2 className="m-0 text-[34px] sm:text-[40px] font-black" style={{ color: '#FFFDF8', lineHeight: 1.15 }}>
            נשמח לשמוע ממך
          </h2>
          <p className="m-0 max-w-[380px] text-[17px]" style={{ color: '#F0DCCF', lineHeight: 1.7 }}>
            השאירי שם וטלפון ואחזור אלייך אישית, נדבר על הבייבי ונמצא יחד את הליווי שמתאים לכן. בלי התחייבות.
          </p>
          <div className="flex flex-col gap-2.5 text-[15px]" style={{ color: '#FFFDF8' }}>
            <span>אבא אחימאיר 10, רמת גן (שיכון ותיקים)</span>
            <a
              href="https://wa.me/972533041277"
              target="_blank"
              rel="noopener noreferrer"
              data-wa-location="contact-section"
              className="font-bold no-underline"
              style={{ color: '#FFFDF8' }}
            >
              וואטסאפ · 053-3041277
            </a>
          </div>
        </div>

        <LeadForm variant="section" />
      </div>
    </section>
  )
}
