import { useEffect, useRef, useState, type ReactNode } from 'react'

// Start already-visible (no animation) when motion can't/shouldn't run, so content
// is never left hidden: SSR, no IntersectionObserver, or prefers-reduced-motion.
function startVisible(): boolean {
  if (typeof window === 'undefined') return true
  if (typeof IntersectionObserver === 'undefined') return true
  if (window.matchMedia?.('(prefers-reduced-motion: reduce)').matches) return true
  return false
}

type RevealProps = {
  children: ReactNode
  delay?: number // ms — used to stagger items within a group
  className?: string
}

export default function Reveal({ children, delay = 0, className }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(startVisible)

  useEffect(() => {
    if (visible) return
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setVisible(true)
            observer.disconnect()
            break
          }
        }
      },
      { threshold: 0.18 },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [visible])

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'none' : 'translateY(20px)',
        transition: `opacity 550ms ease-out ${delay}ms, transform 550ms ease-out ${delay}ms`,
      }}
    >
      {children}
    </div>
  )
}
