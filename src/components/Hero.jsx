import { profile } from '../data/content'
import { useLanguage } from '../i18n/LanguageContext'
import { useSpotlight } from '../hooks/useSpotlight'
import { useCursorGlow } from '../hooks/useCursorGlow'
import { useCountUp } from '../hooks/useCountUp'

function ReactMark({ className }) {
  return (
    <svg viewBox="0 0 40 40" className={className} fill="none">
      <circle cx="20" cy="20" r="3.2" fill="currentColor" />
      <g stroke="currentColor" strokeWidth="1.6">
        <ellipse cx="20" cy="20" rx="16" ry="6.4" />
        <ellipse cx="20" cy="20" rx="16" ry="6.4" transform="rotate(60 20 20)" />
        <ellipse cx="20" cy="20" rx="16" ry="6.4" transform="rotate(120 20 20)" />
      </g>
    </svg>
  )
}

function GitMark({ className, ...rest }) {
  return (
    <svg viewBox="0 0 40 40" className={className} fill="none" {...rest}>
      <g stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
        <path d="M13 12v10a5 5 0 0 0 5 5h2" />
        <circle cx="13" cy="9" r="3" />
        <circle cx="13" cy="30" r="3" />
        <circle cx="27" cy="24" r="3" />
      </g>
    </svg>
  )
}

function StatCard({ stat, label }) {
  const [ref, count] = useCountUp(stat.target)
  return (
    <div
      ref={ref}
      className="px-4 py-3 rounded-xl border border-border bg-surface hover:border-purple-500 hover:shadow-glow transition-all duration-300"
    >
      <p className="font-display text-xl font-semibold text-text-primary">
        {count}
        {stat.suffix}
      </p>
      <p className="text-[11px] text-text-muted mt-0.5">{label}</p>
    </div>
  )
}

export default function Hero() {
  const { lang, t } = useLanguage()
  const spotlight = useSpotlight()
  const glow = useCursorGlow()

  return (
    <section
      id="top"
      {...glow}
      className={`${glow.className} relative overflow-hidden pt-24 pb-24 md:pt-28 md:pb-32`}
    >
      <div
        className="absolute inset-0 bg-grid-dots bg-grid opacity-40 [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,black,transparent)]"
        aria-hidden="true"
      />

      <div className="relative max-w-6xl mx-auto px-6 grid md:grid-cols-[1.1fr_0.9fr] gap-14 items-center">
        <div>
          <p className="text-sm text-purple-400 font-medium mb-4">{t.hero.greeting}</p>
          <h1 className="font-display text-4xl md:text-6xl font-semibold leading-[1.05] text-balance">
            {profile.name}
          </h1>
          <p className="mt-4 text-xl md:text-2xl text-purple-300 font-display">
            {profile.role[lang]}
          </p>

          <div className="flex flex-wrap gap-1.5 mt-6">
            {profile.tags.map((tag) => (
              <span
                key={tag}
                className="text-[10px] sm:text-xs px-2 py-1.5 rounded-lg border border-border text-text-secondary bg-surface hover:border-purple-500 hover:text-purple-300 transition-colors whitespace-nowrap"
              >
                {tag}
              </span>
            ))}
          </div>

          <p className="mt-6 text-text-secondary max-w-lg leading-relaxed">
            {profile.bio[lang][0]}
          </p>

          <div className="flex flex-wrap items-center gap-4 mt-8">
            <a
              href="#projetos"
              {...spotlight}
              className={`${spotlight.className} px-5 py-3 rounded-full bg-purple-500 text-white font-medium text-sm hover:bg-purple-400 hover:shadow-glow-lg transition-all duration-300 hover:-translate-y-0.5`}
            >
              {t.hero.ctaProjects}
            </a>
            <a
              href={profile.cvUrl}
              {...spotlight}
              className={`${spotlight.className} px-5 py-3 rounded-full border border-border text-text-primary text-sm font-medium hover:border-purple-500 hover:shadow-glow transition-all duration-300 hover:-translate-y-0.5`}
            >
              {t.hero.ctaCV}
            </a>
          </div>

          {/* disponibilidade freelancer */}
          <div className="relative flex items-center gap-3 mt-8 pl-4">
            <span className="absolute left-0 top-0 bottom-0 w-1 rounded-full bg-orange-500 animate-blink-bar" aria-hidden="true" />
            <div>
              <p className="text-xs text-text-muted">{t.hero.freelance.label}</p>
              <p className="text-sm font-semibold text-text-primary tracking-wide uppercase mt-0.5">
                {t.hero.freelance.status}
              </p>
            </div>
          </div>

          <div className="flex flex-wrap gap-3 mt-8">
            {profile.stats.map((stat) => (
              <StatCard key={stat.key} stat={stat} label={t.hero.statLabels[stat.key]} />
            ))}
          </div>
        </div>

        {/* foto quadrada com bordas arredondadas e elementos flutuantes -- assinatura visual */}
        <div className="group relative mx-auto w-64 h-64 md:w-80 md:h-80">
          <div className="absolute inset-3 rounded-[2rem] bg-gradient-to-br from-purple-500/40 to-transparent blur-2xl" aria-hidden="true" />
          <div className="relative w-full h-full overflow-hidden rounded-[2rem] border-2 border-border shadow-glow-lg">
            <img
              src={profile.photo}
              alt={`Foto de ${profile.fullName}`}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
          </div>
          <span className="absolute bottom-3 right-3 flex items-center gap-2 bg-surface/90 backdrop-blur px-3 py-1.5 rounded-full border border-border text-[10px] sm:text-xs text-text-secondary whitespace-nowrap">
            <span className="w-2 h-2 rounded-full bg-purple-400" />
            {profile.location[lang]}
          </span>

          {/* elementos flutuantes de tech ao redor da foto */}
          <ReactMark
            className="hidden sm:block absolute -top-9 -right-6 w-11 h-11 text-purple-400 animate-float drop-shadow-[0_0_10px_rgba(168,85,247,0.6)]"
            aria-hidden="true"
          />
          <span
            className="absolute -top-9 left-6 font-display text-3xl font-semibold text-purple-400/80 animate-float-slow drop-shadow-[0_0_10px_rgba(168,85,247,0.5)]"
            style={{ animationDelay: '1.2s' }}
            aria-hidden="true"
          >
            {'{ }'}
          </span>
          <span
            className="absolute bottom-6 -left-9 font-display text-2xl font-semibold text-purple-300 animate-float drop-shadow-[0_0_10px_rgba(168,85,247,0.5)]"
            style={{ animationDelay: '2.4s' }}
            aria-hidden="true"
          >
            #
          </span>
          <GitMark
            className="w-10 h-10 text-purple-400 absolute -bottom-4 -right-4 animate-float drop-shadow-[0_0_10px_rgba(168,85,247,0.6)]"
            style={{ animationDelay: '0.6s' }}
            aria-hidden="true"
          />
        </div>
      </div>
    </section>
  )
}