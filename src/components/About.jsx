import { profile } from '../data/content'
import { useLanguage } from '../i18n/LanguageContext'
import { useReveal, revealClass } from '../hooks/useReveal'
import { useCursorGlow } from '../hooks/useCursorGlow'

export default function About() {
  const { lang, t } = useLanguage()
  const [ref, visible] = useReveal()
  const glow = useCursorGlow()

  return (
    <section id="sobre" {...glow} className={`${glow.className} relative py-24 border-t border-border`}>
      <div ref={ref} className={`relative max-w-6xl mx-auto px-6 grid md:grid-cols-[0.4fr_0.6fr] gap-12 ${revealClass(visible)}`}>
        <div>
          <p className="text-sm text-purple-400 font-medium mb-2">{t.about.eyebrow}</p>
          <h2 className="font-display text-3xl font-semibold">
            {t.about.heading} {profile.name.split(' ')[0]}
          </h2>
        </div>

        <div className="space-y-5">
          {profile.bio[lang].map((paragraph, i) => (
            <p key={i} className="text-text-secondary leading-relaxed">
              {paragraph}
            </p>
          ))}

          <blockquote className="mt-8 border-l-2 border-purple-500 pl-5 py-1 font-display text-lg text-text-primary italic">
            "{profile.quote[lang]}"
          </blockquote>
        </div>
      </div>
    </section>
  )
}
