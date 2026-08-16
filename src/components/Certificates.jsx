import { useRef } from 'react'
import { certificates, linkedinUrl } from '../data/content'
import { useLanguage } from '../i18n/LanguageContext'
import { useSpotlight } from '../hooks/useSpotlight'
import { useReveal, revealClass } from '../hooks/useReveal'

function MedalIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" {...props}>
      <circle cx="12" cy="9" r="5" />
      <path d="M9 13.5 7 21l5-2.5L17 21l-2-7.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}
function ArrowIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...props}>
      <path d="M9 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function CertCard({ cert, lang }) {
  const spotlight = useSpotlight()
  const { t } = useLanguage()
  const Wrapper = cert.link ? 'a' : 'div'
  return (
    <Wrapper
      {...(cert.link ? { href: cert.link, target: '_blank', rel: 'noreferrer' } : {})}
      {...spotlight}
      className={`${spotlight.className} snap-center shrink-0 w-[78%] sm:w-[46%] lg:w-[31%] flex flex-col justify-between p-6 rounded-xl border border-border bg-surface hover:border-purple-500 hover:shadow-glow transition-all duration-300`}
    >
      <div>
        <div className="w-9 h-9 flex items-center justify-center rounded-lg bg-surface2 text-purple-400 mb-4">
          <MedalIcon className="w-4 h-4" />
        </div>
        <p className="text-[11px] tracking-[0.15em] uppercase text-text-muted mb-2">{cert.issuer}</p>
        <h3 className="font-display text-base font-semibold text-text-primary leading-snug">{cert.title[lang]}</h3>
        {cert.id && <p className="text-[11px] text-text-muted mt-2 break-all">ID: {cert.id}</p>}
      </div>

      <div className="flex items-center justify-between mt-6">
        <span className="text-xs italic text-text-muted">{cert.year}</span>
        <span className="text-xs text-purple-400 flex items-center gap-1">
          {t.certificates.view}
          <svg viewBox="0 0 24 24" className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M7 17 17 7M9 7h8v8" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
      </div>
    </Wrapper>
  )
}

export default function Certificates() {
  const { lang, t } = useLanguage()
  const [ref, visible] = useReveal()
  const trackRef = useRef(null)

  const scroll = (dir) => {
    const el = trackRef.current
    if (!el) return
    const card = el.querySelector('a, div[class*="snap-center"]')
    const amount = card ? card.getBoundingClientRect().width + 16 : 320
    el.scrollBy({ left: dir * amount, behavior: 'smooth' })
  }

  return (
    <section id="certificados" className="py-24 bg-surface border-t border-border">
      <div ref={ref} className={revealClass(visible)}>
        <div className="max-w-6xl mx-auto px-6 flex items-end justify-between gap-4">
          <div>
            <p className="text-sm text-purple-400 font-medium mb-2">{t.certificates.eyebrow}</p>
            <h2 className="font-display text-3xl font-semibold">{t.certificates.heading}</h2>
          </div>
          <div className="hidden sm:flex gap-2 mb-1">
            <button
              onClick={() => scroll(-1)}
              aria-label="Anterior"
              className="w-9 h-9 flex items-center justify-center rounded-full border border-border text-text-secondary hover:border-purple-500 hover:text-purple-400 hover:shadow-glow transition-all duration-300"
            >
              <ArrowIcon className="w-4 h-4 rotate-180" />
            </button>
            <button
              onClick={() => scroll(1)}
              aria-label="Próximo"
              className="w-9 h-9 flex items-center justify-center rounded-full border border-border text-text-secondary hover:border-purple-500 hover:text-purple-400 hover:shadow-glow transition-all duration-300"
            >
              <ArrowIcon className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div
          ref={trackRef}
          className="mt-10 flex gap-4 sm:gap-6 overflow-x-auto snap-x snap-mandatory pb-4 px-6 max-w-6xl mx-auto [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
        >
          {certificates.map((cert) => (
            <CertCard key={cert.title.pt} cert={cert} lang={lang} />
          ))}
        </div>

        <p className="text-center text-xs text-text-muted mt-6 tracking-wide">
          {t.certificates.more}{' '}
          <a href={linkedinUrl} target="_blank" rel="noreferrer" className="text-purple-400 hover:text-purple-300 underline underline-offset-4">
            LinkedIn
          </a>
        </p>
      </div>
    </section>
  )
}