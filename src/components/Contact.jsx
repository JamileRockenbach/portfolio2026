import { contact } from '../data/content'
import { useLanguage } from '../i18n/LanguageContext'
import { useSpotlight } from '../hooks/useSpotlight'
import { useReveal, revealClass } from '../hooks/useReveal'
import { useCursorGlow } from '../hooks/useCursorGlow'

function ContactLink({ link }) {
  const spotlight = useSpotlight()
  return (
    <a
      href={link.href}
      target="_blank"
      rel="noreferrer"
      {...spotlight}
      className={`${spotlight.className} flex items-center justify-between p-5 rounded-xl bg-surface border border-border hover:border-purple-500 hover:shadow-glow hover:-translate-y-1 transition-all duration-300`}
    >
      <div>
        <p className="text-xs text-text-muted">{link.label}</p>
        <p className="text-sm text-text-primary mt-1">{link.value}</p>
      </div>
      <span className="text-purple-400 transition-transform group-hover:translate-x-1" aria-hidden="true">
        →
      </span>
    </a>
  )
}

export default function Contact() {
  const { lang, t } = useLanguage()
  const [ref, visible] = useReveal()
  const glow = useCursorGlow()

  const links = [
    { label: 'E-mail', href: `mailto:${contact.email}`, value: contact.email },
    { label: 'GitHub', href: contact.github, value: 'github.com/JamileRockenbach' },
    { label: 'LinkedIn', href: contact.linkedin, value: 'in/jamile-rockenbach-ferreira' },
    { label: 'Instagram', href: contact.instagram, value: '@jami_r.f' },
  ]

  return (
    <section id="contato" {...glow} className={`${glow.className} relative py-24 border-t border-border`}>
      <div ref={ref} className={`relative max-w-6xl mx-auto px-6 ${revealClass(visible)}`}>
        <p className="text-sm text-purple-400 font-medium mb-2">{t.contact.eyebrow}</p>
        <h2 className="font-display text-3xl font-semibold mb-3">{t.contact.heading}</h2>
        <p className="text-text-secondary max-w-md mb-12">{contact.subtitle[lang]}</p>

        <div className="grid sm:grid-cols-2 gap-4">
          {links.map((link) => (
            <ContactLink key={link.label} link={link} />
          ))}
        </div>
      </div>
    </section>
  )
}
