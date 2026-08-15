import { useState } from 'react'

export type FaqItem = { q: string; a: string }

// One question open at a time. The whole row is the button (56px tall),
// so there is no small tap target anywhere in here.
export default function FaqAccordion({
  items,
  cardBg = '#FFFDF8',
}: {
  items: FaqItem[]
  cardBg?: string
}) {
  const [open, setOpen] = useState(-1)

  return (
    <div className="flex flex-col gap-2.5">
      {items.map((f, i) => {
        const isOpen = open === i
        return (
          <div
            key={f.q}
            className="overflow-hidden rounded-[20px]"
            style={{ background: cardBg, border: '1px solid #E6DFD3' }}
          >
            <button
              type="button"
              onClick={() => setOpen(isOpen ? -1 : i)}
              aria-expanded={isOpen}
              className="flex w-full cursor-pointer items-center gap-3.5 border-0 bg-transparent p-[17px] text-right"
              style={{ minHeight: 56, fontFamily: 'inherit' }}
            >
              <span className="flex-1 text-[16.5px] font-bold" style={{ color: '#3A352E' }}>
                {f.q}
              </span>
              <span className="text-2xl leading-none" style={{ color: '#A35C3D' }}>
                {isOpen ? '−' : '+'}
              </span>
            </button>
            {isOpen && (
              <p
                className="m-0 px-[17px] pb-[18px] text-[15.5px] leading-[1.75]"
                style={{ color: '#5F5A4E' }}
              >
                {f.a}
              </p>
            )}
          </div>
        )
      })}
    </div>
  )
}
