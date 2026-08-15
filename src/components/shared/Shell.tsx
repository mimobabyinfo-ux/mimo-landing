import type { ReactNode } from 'react'

// Every page is one centred column, max 520px wide.
// Nearly all traffic arrives from a phone, so the phone layout IS the layout;
// on a desktop the same column simply sits in the middle of the screen.
// `overflow-x-hidden` is the safety net against a stray wide child.
export default function Shell({ children }: { children: ReactNode }) {
  return (
    <div
      dir="rtl"
      className="relative mx-auto w-full max-w-[520px] overflow-x-hidden"
      style={{ background: '#FAF8F4', paddingBottom: 98 }}
    >
      {children}
    </div>
  )
}
