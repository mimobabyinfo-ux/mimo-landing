import gallery1 from '../assets/gallery-1.jpg'
import gallery2 from '../assets/gallery-2.jpg'
import gallery3 from '../assets/gallery-3.jpg'
import gallery4 from '../assets/gallery-4.jpg'
import gallery5 from '../assets/gallery-5.jpg'
import gallery6 from '../assets/gallery-6.jpg'
import dadBaby from '../assets/dad-baby.jpg'

const photos = [
  { src: gallery1, alt: 'תינוקות מתכנסים סביב שטיח פונפונים לבן בסדנה', tall: false },
  { src: gallery2, alt: 'תינוק על הבטן בליווי הידיים של ברנדה', tall: true },
  { src: gallery3, alt: 'אמא ותינוק על כדור הפיזיו בסדנה', tall: true },
  { src: gallery4, alt: 'תינוק בתנוחת "תינוק שמח" עם עיניים גדולות', tall: false },
  { src: dadBaby, alt: 'אבא עם תינוק ומטפחת תחושתית ירוקה במפגש אבות', tall: true },
  { src: gallery5, alt: 'אמא מחייכת עם תינוק על הבטן בסדנה', tall: false },
  { src: gallery6, alt: 'תינוק מושיט יד אל שטיח פונפונים צבעוני', tall: true },
]

export default function Gallery() {
  return (
    <section className="py-16 px-6 sm:px-10" style={{ background: '#FAF8F4' }}>
      <div className="max-w-3xl mx-auto">

        {/* Masonry-style 2-col grid */}
        <div className="columns-2 gap-3">
          {photos.map((p, i) => (
            <div
              key={i}
              className="mb-3 rounded-2xl overflow-hidden"
              style={{ background: '#DCD4C8' }}
            >
              <img
                src={p.src}
                alt={p.alt}
                loading="lazy"
                className="w-full object-cover"
                style={{ height: p.tall ? '260px' : '180px' }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
