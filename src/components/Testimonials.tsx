import Reveal from './Reveal'
import videoSrc from '../assets/recomentation.MP4?url'
import videoPoster from '../assets/recomentation-poster.jpg'
import wa3 from '../assets/testimonial-wa-3.jpg'
import wa4 from '../assets/testimonial-wa-4.jpg'
import wa5 from '../assets/testimonial-wa-5.jpg'
import wa6 from '../assets/testimonial-wa-6.jpeg'
import wa7 from '../assets/testimonial-wa-7.jpg'
import wa8 from '../assets/testimonial-wa-8.jpg'

// 6 screenshots, straight (no tilts), in white bordered cards.
const screenshots = [
  { src: wa3, w: 915, h: 474 },
  { src: wa4, w: 906, h: 492 },
  { src: wa5, w: 941, h: 367 },
  { src: wa6, w: 767, h: 703 },
  { src: wa7, w: 978, h: 541 },
  { src: wa8, w: 1020, h: 539 },
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="px-5 py-[68px]" style={{ background: '#FAF8F4' }}>
      <div className="max-w-[1080px] mx-auto">
        <Reveal className="text-center mb-8">
          <h2 className="m-0 mb-2 text-[30px] sm:text-[34px] font-black" style={{ color: '#A35C3D' }}>
            משפחות מספרות
          </h2>
          <p className="m-0 text-[15px]" style={{ color: '#818267' }}>
            הודעות אמיתיות מאמהות שסיימו סדנה במימו
          </p>
        </Reveal>

        {/* Video testimonial — above the screenshots, loads metadata only */}
        <div
          className="max-w-[560px] mx-auto mb-8 rounded-3xl overflow-hidden border"
          style={{ borderColor: '#E6DFD3', background: '#EADBDD' }}
        >
          <video
            src={videoSrc}
            poster={videoPoster}
            controls
            playsInline
            preload="metadata"
            className="w-full h-auto block"
            aria-label="המלצת וידאו מאמא במימו"
          />
        </div>

        {/* WhatsApp screenshots — mobile: horizontal swipe row (keeps the page short) */}
        <div className="md:hidden">
          <div
            className="flex gap-3 overflow-x-auto pb-2 -mx-5 px-5"
            style={{ scrollSnapType: 'x mandatory', WebkitOverflowScrolling: 'touch' }}
          >
            {screenshots.map((s, i) => (
              <div
                key={i}
                className="w-[280px] shrink-0 rounded-[20px] overflow-hidden border self-start"
                style={{ borderColor: '#E6DFD3', background: '#fff', scrollSnapAlign: 'center' }}
              >
                <img
                  src={s.src}
                  alt="המלצה מאמא במימו - צילום מסך מוואטסאפ"
                  width={s.w}
                  height={s.h}
                  loading="lazy"
                  className="w-full h-auto block"
                />
              </div>
            ))}
          </div>
          <p className="m-0 mt-2 text-center text-[13px] font-semibold" style={{ color: '#818267' }}>
            החליקי לעוד המלצות ←
          </p>
        </div>

        {/* Desktop: masonry columns */}
        <div className="hidden md:block" style={{ columnWidth: 280, columnGap: 14 }}>
          {screenshots.map((s, i) => (
            <Reveal key={i} delay={i * 60} className="mb-3.5 break-inside-avoid">
              <div
                className="rounded-[20px] overflow-hidden border"
                style={{ borderColor: '#E6DFD3', background: '#fff' }}
              >
                <img
                  src={s.src}
                  alt="המלצה מאמא במימו - צילום מסך מוואטסאפ"
                  width={s.w}
                  height={s.h}
                  loading="lazy"
                  className="w-full h-auto block"
                />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
