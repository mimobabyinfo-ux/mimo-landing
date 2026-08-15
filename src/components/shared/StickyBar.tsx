import { track } from '../../lib/track'
import { WhatsAppIcon } from '../WhatsAppButton'

type Props = {
  /** Where the primary button goes: an anchor (#lead) or the register link. */
  href: string
  label: string
  waUrl: string
  /** External links open in a new tab; in-page anchors must not. */
  external?: boolean
}

// The fixed bar at the bottom of every page. 54px tall buttons, above the
// 44px minimum with room to spare, because this is the control people
// actually press on a phone.
export default function StickyBar({ href, label, waUrl, external = true }: Props) {
  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-[60] mx-auto flex max-w-[520px] items-center gap-2.5 px-3.5 py-2.5"
      style={{
        background: 'rgba(250,248,244,0.96)',
        backdropFilter: 'blur(10px)',
        WebkitBackdropFilter: 'blur(10px)',
        borderTop: '1px solid #E6DFD3',
      }}
    >
      <a
        href={href}
        {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
        onClick={() => track('sticky_cta_click')}
        className="flex flex-1 items-center justify-center rounded-full text-center text-base font-extrabold no-underline"
        style={{ background: '#A35C3D', color: '#fff', padding: '16px 10px', minHeight: 54 }}
      >
        {label}
      </a>
      <a
        href={waUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="וואטסאפ"
        data-wa-location="sticky"
        className="flex shrink-0 items-center justify-center rounded-full no-underline"
        style={{ width: 54, height: 54, background: '#25D366', color: '#fff' }}
      >
        <WhatsAppIcon className="h-[27px] w-[27px]" />
      </a>
    </div>
  )
}
