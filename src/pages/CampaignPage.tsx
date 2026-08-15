import { useEffect } from 'react'
import Shell from '../components/shared/Shell'
import StickyBar from '../components/shared/StickyBar'
import LeadForm from '../components/shared/LeadForm'
import FaqAccordion from '../components/shared/FaqAccordion'
import FitCard from '../components/shared/FitCard'
import { useNextCohort, cohortText } from '../components/shared/NextCohortChip'
import { track, setTrackingVariant } from '../lib/track'
import { VARIANTS, CAMPAIGN_FAQ, variantFromSearch } from '../lib/workshopVariants'

import logoMimo from '../assets/logo-mimo.png'
import aboutBrenda from '../assets/about-brenda.jpg'
import mimoGoose from '../assets/mimo-goose.png'
import recommendationVideo from '../assets/recomentation.MP4?url'
import recommendationPoster from '../assets/recomentation-poster.jpg'
import waShot3 from '../assets/testimonial-wa-3.jpg'
import waShot4 from '../assets/testimonial-wa-4.jpg'
import waShot6 from '../assets/testimonial-wa-6.jpeg'
import waShot8 from '../assets/testimonial-wa-8.jpg'

const SHOTS = [waShot3, waShot4, waShot6, waShot8]

// Text laid over a photograph can't rely on the gradient alone: these are real
// photos of a bright studio, and a pale duck-yellow kicker landing on a pale
// floor mat drops to ~2.3:1. The shadow costs nothing and holds everywhere.
const ON_PHOTO_SHADOW = '0 1px 14px rgba(58,53,46,0.9)'

// One page, two workshops. Everything that differs lives in workshopVariants.ts;
// nothing below this line knows which variant it is rendering.
export default function CampaignPage() {
  const key = variantFromSearch()
  const v = VARIANTS[key]
  const cohort = useNextCohort(v.registerLink)
  const waUrl = `https://wa.me/972533041277?text=${encodeURIComponent(v.waText)}`

  useEffect(() => {
    setTrackingVariant(v.trackingId)
    document.title = `${v.workshopName} | מימו, ${v.ageLabel}`
  }, [v])

  return (
    <Shell>
      <div className="flex items-center justify-between gap-3 px-[18px] py-3">
        <img src={logoMimo} alt="Mimo" className="block h-[38px] w-auto" />
        <span className="text-[13.5px] font-semibold" style={{ color: '#818267' }}>
          אבא אחימאיר 10, רמת גן
        </span>
      </div>

      {/* Hero */}
      <section className="px-4">
        <div className="relative overflow-hidden rounded-[32px]" style={{ background: '#EADBDD' }}>
          <img
            src={v.heroImage}
            alt={v.heroAlt}
            className="block w-full"
            style={{ aspectRatio: '1 / 1', objectFit: 'cover', objectPosition: 'center 45%' }}
          />
          {/* The design's stops assume a 430px screen, where the headline is one line.
              At 390px it wraps and the kicker climbs into the clear part of the
              gradient, so the dark band is stretched a little further up. */}
          <div
            className="absolute inset-0"
            style={{
              background:
                'linear-gradient(0deg, rgba(58,53,46,0.9) 0%, rgba(58,53,46,0.45) 52%, rgba(58,53,46,0) 80%)',
            }}
          />
          <div className="absolute inset-x-0 bottom-0 flex flex-col gap-[11px] p-[22px]">
            <div className="flex flex-wrap items-center gap-2.5">
              <span
                className="font-script text-[27px] leading-[1.2]"
                style={{ color: '#E7C78A', textShadow: ON_PHOTO_SHADOW }}
              >
                {v.workshopName}
              </span>
              <span
                className="rounded-full px-3.5 py-[7px] text-[12.5px] font-extrabold"
                style={{ color: '#3A352E', background: '#E7C78A' }}
              >
                {v.ageLabel}
              </span>
            </div>
            <h1
              className="m-0 font-display text-[34px] font-bold leading-[1.18]"
              style={{ color: '#FFFDF8' }}
            >
              {v.headline}
            </h1>
          </div>
        </div>
      </section>

      {/* Offer */}
      <section className="flex flex-col gap-3.5 px-4 pt-[18px]">
        <p className="m-0 text-[17.5px] leading-[1.7]" style={{ color: '#3A352E', textWrap: 'pretty' }}>
          {v.sub}
        </p>

        <div
          className="flex flex-col gap-3 rounded-[26px] p-5"
          style={{ background: '#FFFDF8', border: '1px solid #E6DFD3' }}
        >
          <p className="m-0 text-[15px] font-bold" style={{ color: '#3A352E' }}>
            {v.workshopName}
          </p>

          <div className="flex items-baseline gap-2.5">
            <span
              className="font-display text-[38px] font-black leading-none"
              style={{ color: '#A35C3D' }}
            >
              {v.price}
            </span>
            <span className="text-sm" style={{ color: '#818267' }}>
              {v.meta}
            </span>
          </div>

          {/* Live nearest cohort, straight from the app's DB. */}
          <span
            className="self-start rounded-full px-3 py-1.5 text-[12.5px] font-bold"
            style={{ background: '#E7C78A33', color: '#A35C3D' }}
          >
            {cohortText(cohort)}
          </span>

          {/* Stacked, not side by side: at 390px the two halves collided. */}
          <div
            className="flex flex-col gap-1 rounded-2xl px-3.5 py-3"
            style={{ background: '#E7C78A33' }}
          >
            <span
              className="font-script text-[23px] leading-[1.25]"
              style={{ color: '#A35C3D' }}
            >
              חברה מביאה חברה
            </span>
            <span className="text-sm leading-[1.4]" style={{ color: '#3A352E' }}>
              נרשמות יחד? <b>{v.friendPrice} לכל אחת</b>
            </span>
          </div>

          <a
            href={v.registerLink}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => track('workshop_register_click', { workshop: v.workshopName })}
            className="rounded-full text-center text-[18px] font-extrabold no-underline"
            style={{ background: '#A35C3D', color: '#fff', padding: 18, minHeight: 58 }}
          >
            {v.ctaLabel}
          </a>

          <div className="flex flex-wrap justify-center gap-[7px]">
            {['קבוצה של עד 8 אמהות', '+200 אמהות', 'מלווה מוסמכת'].map((c) => (
              <span
                key={c}
                className="rounded-full px-3 py-1.5 text-[12.5px] font-semibold"
                style={{ color: '#5F5A4E', background: '#FAF8F4', border: '1px solid #EDE6DA' }}
              >
                {c}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="pt-[34px]">
        <p
          className="m-0 mb-3.5 px-5 font-display text-[22px] font-bold"
          style={{ color: '#A35C3D' }}
        >
          אמהות שהיו כאן לפניך
        </p>
        <div className="px-4 pb-3.5">
          <div
            className="overflow-hidden rounded-[24px]"
            style={{ border: '1px solid #E6DFD3', background: '#EADBDD' }}
          >
            <video
              src={recommendationVideo}
              poster={recommendationPoster}
              controls
              playsInline
              preload="metadata"
              aria-label="המלצת וידאו מאמא במימו"
              className="block h-auto w-full"
            />
          </div>
        </div>
        <div
          className="flex gap-3 overflow-x-auto px-4 pb-1.5"
          style={{ scrollSnapType: 'x mandatory' }}
        >
          {SHOTS.map((s, i) => (
            <div
              key={s}
              className="shrink-0 self-start overflow-hidden rounded-[18px]"
              style={{
                width: 265,
                border: '1px solid #E6DFD3',
                background: '#fff',
                scrollSnapAlign: 'center',
              }}
            >
              <img
                src={s}
                alt={`הודעת תודה מאמא שסיימה סדנה במימו ${i + 1}`}
                loading="lazy"
                className="block h-auto w-full"
              />
            </div>
          ))}
        </div>
        <p className="m-0 mt-2 text-center text-[13px] font-semibold" style={{ color: '#818267' }}>
          החליקי לעוד ←
        </p>
      </section>

      {/* Fit */}
      <section className="px-4 pt-[38px]">
        <FitCard forYou={v.forYou} notForYou={v.notForYou} />
      </section>

      {/* Takeaway */}
      <section className="px-4 pt-[38px]">
        <div className="flex flex-col gap-3.5 rounded-[28px] p-6" style={{ background: '#EADBDD' }}>
          <div className="flex items-center justify-between gap-3">
            <p className="m-0 font-display text-2xl font-bold" style={{ color: '#A35C3D' }}>
              {v.takeawayTitle}
            </p>
            <img
              src={mimoGoose}
              alt=""
              className="block h-auto w-[58px] shrink-0"
              style={{ opacity: 0.9 }}
            />
          </div>
          {v.bullets.map((b) => (
            <div key={b} className="flex items-start gap-3">
              <span
                className="mt-2 shrink-0 rounded-full"
                style={{ width: 8, height: 8, background: '#A35C3D' }}
              />
              <span className="text-[16.5px] leading-[1.6]" style={{ color: '#3A352E' }}>
                {b}
              </span>
            </div>
          ))}
          <div className="mt-1 flex flex-wrap gap-2">
            {['קבוצת וואטסאפ עם סיכומים', 'קפה ונשנושים בגינה', 'מתנה אישית בסיום'].map((c) => (
              <span
                key={c}
                className="rounded-full px-3.5 py-2 text-[13px] font-semibold"
                style={{ color: '#3A352E', background: '#FFFDF8' }}
              >
                {c}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Band */}
      <section className="px-4 pt-8">
        <div className="relative overflow-hidden rounded-[28px]" style={{ background: '#EADBDD' }}>
          <img
            src={v.bandImage}
            alt={v.bandAlt}
            loading="lazy"
            className="block w-full"
            style={{ aspectRatio: '4 / 3', objectFit: 'cover' }}
          />
          <div
            className="absolute inset-0"
            style={{
              background: 'linear-gradient(0deg, rgba(58,53,46,0.76) 0%, rgba(58,53,46,0) 52%)',
            }}
          />
          <div className="absolute inset-x-0 bottom-0 p-5">
            <span
              className="font-script text-[28px] leading-[1.15]"
              style={{ color: '#E7C78A', textShadow: ON_PHOTO_SHADOW }}
            >
              {v.bandText}
            </span>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="px-4 pt-[38px]">
        <div className="mb-3.5 flex items-center gap-[15px]">
          <img
            src={aboutBrenda}
            alt="ברנדה, מלווה התפתחותית ומדריכת עיסוי תינוקות"
            loading="lazy"
            className="block shrink-0 rounded-full"
            style={{ width: 92, height: 92, objectFit: 'cover', objectPosition: 'center 30%' }}
          />
          <div className="flex flex-col">
            <span className="font-script text-[26px] leading-[1.1]" style={{ color: '#818267' }}>
              היי,
            </span>
            <h2 className="m-0 font-display text-[30px] font-bold" style={{ color: '#A35C3D' }}>
              אני ברנדה
            </h2>
          </div>
        </div>
        <p className="m-0 mb-3 text-sm font-bold leading-[1.55]" style={{ color: '#818267' }}>
          מלווה התפתחותית מוסמכת · מדריכת עיסוי תינוקות
        </p>
        <p className="m-0 text-[17px] leading-[1.8]" style={{ color: '#3A352E' }}>
          נולדתי בארגנטינה, גרתי רוב חיי במדריד, והיום אני מלווה אמהות ותינוקות מהסטודיו שלי ברמת גן.
          "מימו" בספרדית זה "ליטוף", וזו בדיוק המהות של המרחב הזה: לתת לך ולבייבי מלא מימו, דרך מגע,
          תנועה, הבנה ותמיכה.
        </p>
      </section>

      {/* FAQ */}
      <section className="px-4 pt-[38px]">
        <FaqAccordion items={CAMPAIGN_FAQ} />
      </section>

      {/* Close */}
      <section id="lead" className="mt-[38px] px-4 py-11" style={{ background: '#A35C3D' }}>
        <h2
          className="m-0 mb-2.5 font-display text-[30px] font-bold leading-[1.2]"
          style={{ color: '#FFFDF8' }}
        >
          {v.closeTitle}
        </h2>
        <p className="m-0 mb-5 text-[16.5px] leading-[1.7]" style={{ color: '#F0DCCF' }}>
          {v.closeSub}
        </p>
        <LeadForm
          location={`lp-${v.trackingId}`}
          pageVariant={v.trackingId}
          waUrl={waUrl}
          submitLabel="אני רוצה שתחזרי אליי"
          isPrimary
          header={
            <p
              className="m-0 font-display text-[21px] font-bold leading-[1.3]"
              style={{ color: '#A35C3D' }}
            >
              רוצה לשמוע קודם? השאירי פרטים
            </p>
          }
        />
      </section>

      <footer
        className="flex flex-col gap-2 px-5 py-7"
        style={{ background: '#3A352E', color: '#C6BDA0' }}
      >
        <p className="m-0 text-[14.5px]">הסטודיו של מימו · אבא אחימאיר 10, רמת גן (שיכון ותיקים)</p>
        <a
          href="tel:+972533041277"
          className="flex items-center text-[14.5px] font-bold no-underline"
          style={{ color: '#E7C78A', minHeight: 44 }}
        >
          053-3041277
        </a>
        <p className="m-0 mt-1.5 text-xs" style={{ color: '#A39A88' }}>
          © 2026 מימו
        </p>
      </footer>

      <StickyBar href={v.registerLink} label={v.stickyLabel} waUrl={waUrl} />
    </Shell>
  )
}
