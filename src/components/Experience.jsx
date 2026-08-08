import { experiences } from '../data/content'
import { useLanguage } from '../i18n/LanguageContext'
import { useSpotlight } from '../hooks/useSpotlight'
import { useReveal, revealClass } from '../hooks/useReveal'
import { useCursorGlow } from '../hooks/useCursorGlow'

function BriefcaseIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" {...props}>
      <rect x="3" y="7" width="18" height="13" rx="2" />
      <path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M3 12h18" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function ExperienceCard({ exp, lang, t }) {
  const spotlight = useSpotlight()
  return (
    <div
      {...spotlight}
      className={`${spotlight.className} relative flex flex-col sm:flex-row sm:items-start gap-5 p-6 rounded-xl border border-border bg-surface hover:border-purple-500 hover:shadow-glow transition-all duration-300`}
    >
      <div className="w-11 h-11 shrink-0 flex items-center justify-center rounded-full bg-surface2 text-purple-400">
        <BriefcaseIcon className="w-5 h-5" />
      </div>

      <div className="flex-1">
        <div className="flex flex-wrap items-center gap-3">
          <h3 className="font-display text-lg font-semibold text-text-primary">{exp.role[lang]}</h3>
          {exp.current && (
            <span className="text-[10px] uppercase tracking-wide px-2.5 py-1 rounded-full bg-purple-500/15 text-purple-300 border border-purple-500/40">
              {t.experience.current}
            </span>
          )}
        </div>
        <p className="text-sm text-purple-300 mt-1">{exp.company}</p>
        <p className="text-xs text-text-muted mt-1">{exp.period[lang]}</p>
        <p className="text-sm text-text-secondary leading-relaxed mt-3">{exp.description[lang]}</p>
      </div>
    </div>
  )
}

export default function Experience() {
  const { lang, t } = useLanguage()
  const [ref, visible] = useReveal()
  const glow = useCursorGlow()

  return (
    <section id="experiencia" {...glow} className={`${glow.className} relative py-24 border-t border-border`}>
      <div ref={ref} className={`relative max-w-6xl mx-auto px-6 ${revealClass(visible)}`}>
        <p className="text-sm text-purple-400 font-medium mb-2">{t.experience.eyebrow}</p>
        <h2 className="font-display text-3xl font-semibold mb-12">{t.experience.heading}</h2>

        <div className="space-y-5 max-w-3xl">
          {experiences.map((exp) => (
            <ExperienceCard key={exp.company + exp.role.pt} exp={exp} lang={lang} t={t} />
          ))}
        </div>
      </div>
    </section>
  )
}
