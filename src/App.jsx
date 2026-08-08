import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { LanguageProvider } from './i18n/LanguageContext'
import { ThemeProvider } from './theme/ThemeContext'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Marquee from './components/Marquee'
import Skills from './components/Skills'
import Projects from './components/Projects'
import ProjectDetail from './components/ProjectDetail'
import Certificates from './components/Certificates'
import Experience from './components/Experience'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ScrollToHash from './components/ScrollToHash'

function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Marquee />
      <Skills />
      <Projects />
      <Certificates />
      <Experience />
      <Contact />
    </>
  )
}

export default function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <BrowserRouter>
          <ScrollToHash />
          <div className="min-h-screen bg-base">
            <Header />
            <main>
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/projetos/:slug" element={<ProjectDetail />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </BrowserRouter>
      </LanguageProvider>
    </ThemeProvider>
  )
}
