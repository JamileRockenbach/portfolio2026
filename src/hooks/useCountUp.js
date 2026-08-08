import { useEffect, useRef, useState } from 'react'

export function useCountUp(target, duration = 900) {
  const ref = useRef(null)
  const [count, setCount] = useState(0)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    let started = false
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) {
          started = true
          const start = performance.now()
          const tick = (now) => {
            const progress = Math.min((now - start) / duration, 1)
            const eased = 1 - Math.pow(1 - progress, 3)
            setCount(Math.round(eased * target))
            if (progress < 1) requestAnimationFrame(tick)
          }
          requestAnimationFrame(tick)
          observer.disconnect()
        }
      },
      { threshold: 0.4 },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [target, duration])

  return [ref, count]
}
