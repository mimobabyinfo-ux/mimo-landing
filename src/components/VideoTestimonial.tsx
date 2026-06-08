import videoSrc from '../assets/recomentation.MP4?url'

export default function VideoTestimonial() {
  return (
    <section className="py-20 px-6 sm:px-10" style={{ background: '#EADBDD' }}>
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-3xl font-black mb-8" style={{ color: '#A35C3D' }}>
          שמעו מהאמהות שלנו 🤍
        </h2>
        <div className="rounded-3xl overflow-hidden shadow-md" style={{ background: '#DCD4C8' }}>
          <video
            src={videoSrc}
            controls
            playsInline
            preload="metadata"
            className="w-full h-auto block"
          />
        </div>
      </div>
    </section>
  )
}
