// Replace placeholder items with real image paths once you have photos
const photos = [
  { id: 1, tall: false },
  { id: 2, tall: true },
  { id: 3, tall: true },
  { id: 4, tall: false },
  { id: 5, tall: false },
  { id: 6, tall: true },
  { id: 7, tall: true },
  { id: 8, tall: false },
]

const colors = ['#EDE4D5', '#E9C46A33', '#d8eaea', '#F5EBD0', '#EDE4D5', '#E9C46A22', '#d8eaea', '#F5EBD0']

export default function Gallery() {
  return (
    <section className="py-16 px-6 sm:px-10" style={{ background: '#FDFBF7' }}>
      <div className="max-w-3xl mx-auto">

        {/* Masonry-style 2-col grid */}
        <div className="columns-2 gap-3">
          {photos.map((p, i) => (
            <div
              key={p.id}
              className="mb-3 rounded-2xl overflow-hidden flex items-center justify-center"
              style={{
                background: colors[i % colors.length],
                height: p.tall ? '220px' : '150px',
              }}
            >
              <span className="text-4xl opacity-30">📸</span>
            </div>
          ))}
        </div>

        <p className="text-center text-xs mt-6" style={{ color: '#b0a090' }}>
          * תמונות אמיתיות יתווספו בקרוב
        </p>
      </div>
    </section>
  )
}
