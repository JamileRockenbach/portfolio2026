import { profile } from '../data/content'
import { useLanguage } from '../i18n/LanguageContext'

export default function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="border-t border-border py-8">
      <p className="text-center text-sm text-text-muted">
        © {new Date().getFullYear()} {profile.fullName} | {t.footer.rights}
      </p>
    </footer>
  )
}
