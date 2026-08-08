import { Link, useParams } from 'react-router-dom'
import { projects, translateTag } from '../data/content'
import { useLanguage } from '../i18n/LanguageContext'
import { useCursorGlow } from '../hooks/useCursorGlow'

function ArrowIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...props}>
      <path d="M15 6l-6 6 6 6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}
function ExternalIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...props}>
      <path d="M7 17 17 7M9 7h8v8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}
function GithubIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M12 .5C5.73.5.98 5.24.98 11.52c0 5.02 3.26 9.28 7.78 10.78.57.1.78-.25.78-.55v-2.1c-3.17.69-3.84-1.42-3.84-1.42-.52-1.31-1.26-1.66-1.26-1.66-1.03-.7.08-.69.08-.69 1.14.08 1.74 1.17 1.74 1.17 1.01 1.73 2.65 1.23 3.3.94.1-.73.4-1.23.72-1.51-2.53-.29-5.19-1.27-5.19-5.63 0-1.24.44-2.26 1.17-3.06-.12-.29-.51-1.45.11-3.02 0 0 .96-.31 3.15 1.17a10.9 10.9 0 0 1 5.74 0c2.19-1.48 3.15-1.17 3.15-1.17.62 1.57.23 2.73.11 3.02.73.8 1.17 1.82 1.17 3.06 0 4.37-2.66 5.34-5.2 5.62.41.36.77 1.06.77 2.14v3.17c0 .3.2.66.79.55 4.52-1.5 7.77-5.76 7.77-10.78C23.02 5.24 18.27.5 12 .5Z" />
    </svg>
  )
}

export default function ProjectDetail() {
  const { slug } = useParams()
  const { lang, t } = useLanguage()
  const project = projects.find((p) => p.slug === slug)
  const glow = useCursorGlow()

  if (!project) {
    return (
      <section {...glow} className={`${glow.className} relative pt-32 pb-24 min-h-[60vh] flex flex-col items-center justify-center gap-6 text-center px-6`}>
        <p className="text-text-secondary">{t.projects.notFound}</p>
        <Link
          to="/#projetos"
          className="inline-flex items-center gap-2 text-sm px-4 py-2 rounded-full border border-border text-text-secondary hover:border-purple-500 hover:text-purple-300 transition-all duration-300"
        >
          <ArrowIcon className="w-4 h-4" />
          {t.projects.back}
        </Link>
      </section>
    )
  }

  const isGithub = project.link?.includes('github.com')
  const linkLabel = project.linkLabel ? project.linkLabel[lang] : t.projects.viewOnGithub

  return (
    <section {...glow} className={`${glow.className} relative pt-20 sm:pt-24 pb-24`}>
      <div className="max-w-3xl mx-auto px-6">
        <Link
          to="/#projetos"
          className="inline-flex items-center gap-2 text-sm text-text-secondary hover:text-purple-300 transition-colors duration-300 mb-8"
        >
          <ArrowIcon className="w-4 h-4" />
          {t.projects.back}
        </Link>

        <div className="text-center">
          <h1 className="font-display text-2xl sm:text-3xl font-semibold text-text-primary">{project.title}</h1>

          <div className="relative w-full max-w-sm sm:max-w-md mx-auto mt-8 mb-8">
            <div
              className="absolute inset-3 rounded-[2rem] bg-gradient-to-br from-purple-500/40 to-transparent blur-2xl"
              aria-hidden="true"
            />
            <div className="relative rounded-[1.5rem] overflow-hidden border-2 border-border shadow-glow-lg bg-surface2 aspect-video">
              <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-2">
            {project.tags.map((tag) => (
              <span key={tag} className="text-xs px-3 py-1 rounded-full bg-surface2 text-text-muted">
                {translateTag(tag, lang)}
              </span>
            ))}
          </div>

          <p className="project-detail-text text-sm sm:text-base leading-relaxed mt-6 max-w-2xl mx-auto whitespace-pre-line">
            {(project.longDescription ? project.longDescription[lang] : project.description[lang])}
          </p>

          <div className="flex flex-wrap justify-center gap-3 mt-10">
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-sm font-medium px-5 py-2.5 rounded-full bg-purple-500 text-white hover:bg-purple-400 hover:shadow-glow transition-all duration-300"
              >
                {isGithub ? <GithubIcon className="w-4 h-4" /> : <ExternalIcon className="w-4 h-4" />}
                {linkLabel}
              </a>
            )}
            {project.siteUrl && (
              <a
                href={project.siteUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-sm font-medium px-5 py-2.5 rounded-full border border-border text-text-secondary hover:border-purple-500 hover:text-purple-300 transition-all duration-300"
              >
                <ExternalIcon className="w-4 h-4" />
                {t.projects.visitSite}
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
