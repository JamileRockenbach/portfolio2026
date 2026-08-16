import { useEffect, useState } from 'react'
import { useLanguage } from '../i18n/LanguageContext'

export default function Preloader() {
  const { t } = useLanguage()
  const [mounted, setMounted] = useState(true)
  const [fading, setFading] = useState(false)

  useEffect(() => {
    document.body.style.overflow = 'hidden'
    const fadeTimer = setTimeout(() => setFading(true), 1500)
    const unmountTimer = setTimeout(() => {
      setMounted(false)
      document.body.style.overflow = ''
    }, 1750)
    return () => {
      clearTimeout(fadeTimer)
      clearTimeout(unmountTimer)
      document.body.style.overflow = ''
    }
  }, [])

  if (!mounted) return null

  return (
    <div
      className={`fixed inset-0 z-[100] bg-base flex flex-col items-center justify-center gap-5 transition-opacity duration-500 ease-out ${
        fading ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
      role="status"
      aria-live="polite"
    >
      <div className="w-48 sm:w-64 h-px bg-gradient-to-r from-transparent via-purple-400 to-transparent origin-center preloader-line" />
      <div className="flex items-center gap-3">
        <span className="w-2 h-2 rounded-full bg-purple-400 preloader-dot" />
        <span className="font-mono text-xs sm:text-sm tracking-[0.35em] text-text-secondary uppercase">
          {t.preloader.label}
        </span>
      </div>
    </div>
  )
}
