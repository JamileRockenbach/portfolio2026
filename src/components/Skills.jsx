import { skills } from '../data/content'
import { useLanguage } from '../i18n/LanguageContext'
import { useSpotlight } from '../hooks/useSpotlight'
import { useReveal, revealClass } from '../hooks/useReveal'

function SkillCard({ skill }) {
  const spotlight = useSpotlight()
  return (
    <div
      {...spotlight}
      className={`${spotlight.className} group flex flex-col items-center gap-3 p-5 rounded-xl bg-surface2 border border-border hover:border-purple-500 hover:shadow-glow hover:-translate-y-1 transition-all duration-300`}
    >
      <img
        src={skill.icon}
        alt={skill.name}
        className="skill-icon w-8 h-8"
      />
      <span className="text-xs text-text-secondary text-center">{skill.name}</span>
    </div>
  )
}

export default function Skills() {
  const { t } = useLanguage()
  const [ref, visible] = useReveal()

  return (
    <section id="skills" className="py-24 bg-surface border-t border-border">
      <div ref={ref} className={`max-w-6xl mx-auto px-6 ${revealClass(visible)}`}>
        <p className="text-sm text-purple-400 font-medium mb-2">{t.skills.eyebrow}</p>
        <h2 className="font-display text-3xl font-semibold mb-12">{t.skills.heading}</h2>

        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4">
          {skills.map((skill) => (
            <SkillCard key={skill.name} skill={skill} />
          ))}
        </div>
      </div>
    </section>
  )
}
