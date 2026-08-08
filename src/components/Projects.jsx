import { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { projects, projectCategories, translateTag } from '../data/content'
import { useLanguage } from '../i18n/LanguageContext'
import { useSpotlight } from '../hooks/useSpotlight'
import { useReveal, revealClass } from '../hooks/useReveal'

function ArrowIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...props}>
      <path d="M9 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function ProjectCard({ project, lang }) {
  const spotlight = useSpotlight()
  return (
    <Link
      to={`/projetos/${project.slug}`}
      {...spotlight}
      className={`${spotlight.className} snap-center shrink-0 w-[78%] sm:w-[46%] lg:w-[31%] group rounded-xl overflow-hidden border border-border bg-surface hover:border-purple-500 hover:shadow-glow hover:-translate-y-1 transition-all duration-300`}
    >
      <div className="aspect-video overflow-hidden bg-surface2">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>
      <div className="p-4 sm:p-5">
        <h3 className="project-title font-display font-semibold text-sm sm:text-base">{project.title}</h3>
        <p className="text-xs sm:text-sm text-text-secondary mt-2 leading-relaxed line-clamp-3">
          {project.description[lang]}
        </p>
        <div className="flex flex-wrap gap-2 mt-4">
          {project.tags.map((tag) => (
            <span key={tag} className="text-[10px] sm:text-[11px] px-2 py-1 rounded-full bg-surface2 text-text-muted">
              {translateTag(tag, lang)}
            </span>
          ))}
        </div>
      </div>
    </Link>
  )
}

export default function Projects() {
  const { lang, t } = useLanguage()
  const [ref, visible] = useReveal()
  const [active, setActive] = useState('todos')
  const trackRef = useRef(null)

  const filtered =
    active === 'todos'
      ? projects
      : projects.filter((p) => (Array.isArray(p.category) ? p.category.includes(active) : p.category === active))

  const scroll = (dir) => {
    const el = trackRef.current
    if (!el) return
    const card = el.querySelector('a')
    const amount = card ? card.getBoundingClientRect().width + 24 : 320
    el.scrollBy({ left: dir * amount, behavior: 'smooth' })
  }

  return (
    <section id="projetos" className="py-24 border-t border-border">
      <div ref={ref} className={revealClass(visible)}>
        <div className="max-w-6xl mx-auto px-6 flex items-end justify-between gap-4">
          <div>
            <p className="text-sm text-purple-400 font-medium mb-2">{t.projects.eyebrow}</p>
            <h2 className="font-display text-3xl font-semibold">{t.projects.heading}</h2>
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

        <div className="max-w-6xl mx-auto px-6 flex flex-wrap gap-2 mt-8 mb-8">
          {projectCategories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setActive(cat.key)}
              className={`text-xs px-4 py-2 rounded-full border transition-all duration-300 ${
                active === cat.key
                  ? 'bg-purple-500 border-purple-500 text-white shadow-glow'
                  : 'border-border text-text-secondary hover:border-purple-500 hover:text-purple-300'
              }`}
            >
              {cat.label[lang]}
            </button>
          ))}
        </div>

        <div
          ref={trackRef}
          className="flex gap-4 sm:gap-6 overflow-x-auto snap-x snap-mandatory pb-4 px-6 max-w-6xl mx-auto [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
        >
          {filtered.map((project) => (
            <ProjectCard key={project.title} project={project} lang={lang} />
          ))}
        </div>
      </div>
    </section>
  )
}
