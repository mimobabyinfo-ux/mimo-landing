// The botanical elements from the brand book, ported from the Mimo app
// (`src/components/MimoLeaf.tsx` there) so the landing and the app decorate
// pages from the same set. PNGs live in `public/brand/`, 108KB for all ten.
//
// Why leaves and not a duck: the Mimo mark is a PAIR, a mother goose and a
// duckling. A lone duck scattered around reads as a second, thinner logo.
// The leaves carry the brand without competing with the mark.
//
// House rules, learned the hard way:
//   1. Always pass a `rotate`. The sprigs were drawn at one angle and
//      repeating it makes a page look stamped.
//   2. Decoration sits BEHIND content and never under a line of text.
//      These pages exist to collect leads; nothing decorative may cost
//      a word of legibility.
//   3. At most one goose per screen.

export type LeafVariant = 'sand-1' | 'sand-2' | 'blush' | 'clay' | 'sky-1' | 'sky-2'
export type BerryVariant = 'blush' | 'clay' | 'moss' | 'sky'

type Props = {
  variant?: LeafVariant
  size?: number
  /** Rotation in degrees. Vary it per placement. */
  rotate?: number
  flip?: boolean
  className?: string
  style?: React.CSSProperties
}

export default function MimoLeaf({
  variant = 'sand-1',
  size = 96,
  rotate = 0,
  flip = false,
  className,
  style,
}: Props) {
  const transform = [rotate ? `rotate(${rotate}deg)` : '', flip ? 'scaleX(-1)' : '']
    .filter(Boolean)
    .join(' ')

  return (
    <img
      src={`/brand/leaf-${variant}.png`}
      alt=""
      aria-hidden="true"
      draggable={false}
      loading="lazy"
      className={className}
      style={{
        width: size,
        height: 'auto',
        transform: transform || undefined,
        userSelect: 'none',
        pointerEvents: 'none',
        ...style,
      }}
    />
  )
}

/** The small three-dot berry cluster. Good as a full stop between sections. */
export function MimoBerries({
  variant = 'moss',
  size = 18,
  className,
  style,
}: {
  variant?: BerryVariant
  size?: number
  className?: string
  style?: React.CSSProperties
}) {
  return (
    <img
      src={`/brand/berry-${variant}.png`}
      alt=""
      aria-hidden="true"
      draggable={false}
      loading="lazy"
      className={className}
      style={{ width: size, height: 'auto', userSelect: 'none', pointerEvents: 'none', ...style }}
    />
  )
}
