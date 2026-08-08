import { useLanguage } from '../i18n/LanguageContext'

export default function Marquee() {
  const { t } = useLanguage()
  const phrase = t.marquee.text
  const set = Array.from({ length: 4 })

  return (
    <div className="marquee-band relative overflow-hidden py-5 bg-purple-600 -rotate-1 scale-[1.03]">
      <div className="marquee-track">
        {[0, 1].map((group) => (
          <div key={group} className="flex items-center shrink-0">
            {set.map((_, i) => (
              <span
                key={i}
                className="flex items-center shrink-0 px-6 font-display text-base sm:text-lg font-semibold text-white whitespace-nowrap"
              >
                {phrase}
                <span className="mx-6 text-purple-200" aria-hidden="true">
                  ★
                </span>
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}
