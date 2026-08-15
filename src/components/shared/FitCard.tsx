// "זה בשבילך אם" / "זה לא בשבילך אם".
// Qualifying and disqualifying in the same card is deliberate: saying who the
// workshop is NOT for is what makes the rest of the list believable.
export default function FitCard({
  forYou,
  notForYou,
}: {
  forYou: string[]
  notForYou: string[]
}) {
  return (
    <div
      className="flex flex-col gap-3 rounded-[28px] p-[22px]"
      style={{ background: '#FFFDF8', border: '1px solid #E6DFD3' }}
    >
      <p className="m-0 font-display text-[21px] font-bold" style={{ color: '#6E7157' }}>
        זה בשבילך אם
      </p>
      {forYou.map((f) => (
        <div key={f} className="flex items-start gap-2.5">
          <span
            className="inline-flex shrink-0 items-center justify-center rounded-full text-sm font-extrabold"
            style={{ width: 24, height: 24, background: '#8182671f', color: '#6E7157' }}
          >
            ✓
          </span>
          <span className="text-base leading-[1.55]" style={{ color: '#3A352E' }}>
            {f}
          </span>
        </div>
      ))}

      <span className="my-1.5 block h-px" style={{ background: '#EDE6DA' }} />

      <p className="m-0 font-display text-[21px] font-bold" style={{ color: '#A35C3D' }}>
        זה לא בשבילך אם
      </p>
      {notForYou.map((n) => (
        <div key={n} className="flex items-start gap-2.5">
          <span
            className="inline-flex shrink-0 items-center justify-center rounded-full text-sm font-extrabold"
            style={{ width: 24, height: 24, background: '#EADBDD', color: '#A35C3D' }}
          >
            ✕
          </span>
          <span className="text-base leading-[1.55]" style={{ color: '#5F5A4E' }}>
            {n}
          </span>
        </div>
      ))}
    </div>
  )
}
