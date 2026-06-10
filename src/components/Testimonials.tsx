import Reveal from './Reveal'
import wa1 from '../assets/testimonial-wa-1.jpg'
import wa2 from '../assets/testimonial-wa-2.jpg'
import wa3 from '../assets/testimonial-wa-3.jpg'
import wa4 from '../assets/testimonial-wa-4.jpg'
import wa5 from '../assets/testimonial-wa-5.jpg'

// Hebrew screenshots lead; the Spanish one (wa1) is placed last.
const screenshots = [
  { src: wa2, alt: 'המלצה מאמא במימו — צילום מסך מוואטסאפ' },
  { src: wa3, alt: 'המלצה מאמא במימו — צילום מסך מוואטסאפ' },
  { src: wa4, alt: 'המלצה מאמא במימו — צילום מסך מוואטסאפ' },
  { src: wa5, alt: 'המלצה מאמא במימו — צילום מסך מוואטסאפ' },
  { src: wa1, alt: 'המלצה מאמא במימו — צילום מסך מוואטסאפ' },
]

// Gentle alternating tilts (desktop only — md:). On mobile the notes stay straight
// and full-width so the screenshot text is comfortably readable. Static class
// strings so Tailwind's JIT picks them up.
const tiltClasses = ['md:-rotate-3', 'md:rotate-2', 'md:-rotate-2', 'md:rotate-3', 'md:-rotate-2']

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 px-6 sm:px-10 overflow-hidden" style={{ background: '#C3CDD2' }}>
      <div className="max-w-4xl mx-auto">

        <Reveal>
          <h2 className="text-3xl font-black text-center mb-12" style={{ color: '#A35C3D' }}>
            משפחות מספרות
          </h2>
        </Reveal>

        {/* WhatsApp screenshots — tilted, clustered collage (natural aspect ratio, never cropped) */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-3">
          {screenshots.map((s, i) => (
            <Reveal key={i} delay={i * 70} className="mb-4 break-inside-avoid">
              <div
                className={`rounded-2xl shadow-lg overflow-hidden transition-transform duration-300 md:hover:rotate-0 md:hover:scale-[1.02] ${tiltClasses[i % tiltClasses.length]}`}
              >
                <img
                  src={s.src}
                  alt={s.alt}
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
