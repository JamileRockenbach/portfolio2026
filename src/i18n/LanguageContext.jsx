import { createContext, useContext, useEffect, useState } from 'react'
import { translations } from './translations'

const LanguageContext = createContext(null)

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(() => localStorage.getItem('lang') || 'pt')

  useEffect(() => {
    localStorage.setItem('lang', lang)
    document.documentElement.lang = lang === 'pt' ? 'pt-BR' : 'en'
  }, [lang])

  const toggleLang = () => setLang((prev) => (prev === 'pt' ? 'en' : 'pt'))

  return (
    <LanguageContext.Provider value={{ lang, setLang, toggleLang, t: translations[lang] }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('useLanguage precisa estar dentro de <LanguageProvider>')
  return ctx
}
