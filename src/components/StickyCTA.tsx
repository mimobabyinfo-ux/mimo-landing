import { track } from '../lib/track'
import { WHATSAPP_URL, WhatsAppIcon } from './WhatsAppButton'

// Fixed bottom bar — all resolutions. Primary: the lead form. Secondary: WhatsApp.
export default function StickyCTA() {
  return (
    <div
      className="fixed bottom-0 inset-x-0 z-[60] flex items-center gap-2.5 px-4 py-2.5 border-t"
      style={{
        background: 'rgba(250,248,244,0.96)',
        backdropFilter: 'blur(10px)',
        WebkitBackdropFilter: 'blur(10px)',
        borderColor: '#E6DFD3',
      }}
    >
      <a
        href="#lead"
        onClick={() => track('sticky_cta_click')}
        className="flex-1 text-center font-extrabold text-base rounded-full no-underline"
        style={{ background: '#A35C3D', color: '#fff', padding: 15, minHeight: 52 }}
      >
        השאירי פרטים ואחזור אלייך
      </a>
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="וואטסאפ"
        data-wa-location="sticky-bar"
        className="shrink-0 rounded-full flex items-center justify-center"
        style={{ width: 52, height: 52, background: '#25D366', color: '#fff' }}
      >
        <WhatsAppIcon className="w-[26px] h-[26px]" />
      </a>
    </div>
  )
}
