import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import { Link } from 'react-router-dom'
import { navItems } from '../data/content'
import { useLanguage } from '../i18n/LanguageContext'
import { useTheme } from '../theme/ThemeContext'

function SunIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...props}>
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" strokeLinecap="round" />
    </svg>
  )
}
function MoonIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...props}>
      <path d="M20 14.5A8.5 8.5 0 1 1 9.5 4a6.5 6.5 0 0 0 10.5 10.5Z" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export default function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { lang, toggleLang, t } = useLanguage()
  const { theme, toggleTheme } = useTheme()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        scrolled ? 'bg-base/80 backdrop-blur-md border-b border-border' : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between gap-4">
        <Link to="/#top" className="font-display font-semibold text-sm sm:text-base tracking-tight whitespace-nowrap text-header-brand">
          Jamile Rockenbach <span className="text-purple-500">|</span> {t.header.role}
        </Link>

        <nav className="hidden lg:flex items-center gap-2">
          {navItems.map((item) => (
            <Link
              key={item.href}
              to={`/${item.href}`}
              className="text-sm px-4 py-1.5 rounded-full border border-border text-text-secondary hover:text-text-primary hover:border-purple-500 hover:shadow-glow transition-all duration-300"
            >
              {t.nav[item.key]}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <button
            onClick={toggleTheme}
            className="w-9 h-9 flex items-center justify-center rounded-full border border-border text-text-secondary hover:border-purple-500 hover:text-purple-400 hover:shadow-glow transition-all duration-300"
            aria-label={theme === 'dark' ? t.theme.toggleToLight : t.theme.toggleToDark}
          >
            {theme === 'dark' ? <SunIcon className="w-4 h-4" /> : <MoonIcon className="w-4 h-4" />}
          </button>

          <button
            onClick={toggleLang}
            className="hidden sm:flex items-center gap-1 text-xs font-medium px-3 py-1.5 rounded-full border border-border text-text-secondary hover:border-purple-500 hover:text-text-primary hover:shadow-glow transition-all duration-300"
            aria-label="Trocar idioma / Switch language"
          >
            <span className={lang === 'pt' ? 'text-purple-400' : ''}>PT</span>
            <span className="text-text-muted">/</span>
            <span className={lang === 'en' ? 'text-purple-400' : ''}>EN</span>
          </button>

          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden w-9 h-9 flex items-center justify-center rounded-full border border-border"
            aria-label={open ? t.nav.sair : 'Abrir menu'}
            aria-expanded={open}
          >
            <span className="sr-only">Menu</span>
            <div className="w-4 flex flex-col gap-1">
              <span className={`h-px bg-text-primary transition-transform ${open ? 'rotate-45 translate-y-[3px]' : ''}`} />
              <span className={`h-px bg-text-primary transition-transform ${open ? '-rotate-45 -translate-y-[3px]' : ''}`} />
            </div>
          </button>
        </div>
      </div>

      {open &&
        createPortal(
          <div className="lg:hidden fixed inset-0 z-40 bg-base/97 backdrop-blur-xl flex flex-col pt-16 animate-[fadeIn_0.25s_ease]">
            <div
              className="absolute inset-0 bg-grid-dots bg-grid opacity-30 [mask-image:radial-gradient(ellipse_70%_60%_at_50%_20%,black,transparent)]"
              aria-hidden="true"
            />

            <nav className="relative flex-1 flex flex-col items-center justify-center gap-4 px-8">
              {navItems.map((item, i) => (
                <Link
                  key={item.href}
                  to={`/${item.href}`}
                  onClick={() => setOpen(false)}
                  className="w-full max-w-xs text-center text-lg font-display font-medium py-3.5 rounded-full border border-border text-text-primary hover:border-purple-500 hover:text-purple-300 hover:shadow-glow transition-all duration-300 animate-[fadeSlideUp_0.4s_ease_both]"
                  style={{ animationDelay: `${i * 60}ms` }}
                >
                  {t.nav[item.key]}
                </Link>
              ))}
            </nav>

            <div className="relative flex items-center justify-center gap-3 pb-14">
              <button
                onClick={toggleTheme}
                className="w-10 h-10 flex items-center justify-center rounded-full border border-border text-text-secondary"
                aria-label={theme === 'dark' ? t.theme.toggleToLight : t.theme.toggleToDark}
              >
                {theme === 'dark' ? <SunIcon className="w-4 h-4" /> : <MoonIcon className="w-4 h-4" />}
              </button>
              <button
                onClick={toggleLang}
                className="flex items-center gap-1 text-sm font-medium px-4 py-2 rounded-full border border-border text-text-secondary"
              >
                <span className={lang === 'pt' ? 'text-purple-400' : ''}>PT</span>
                <span className="text-text-muted">/</span>
                <span className={lang === 'en' ? 'text-purple-400' : ''}>EN</span>
              </button>
            </div>
          </div>,
          document.body,
        )}
    </header>
  )
}