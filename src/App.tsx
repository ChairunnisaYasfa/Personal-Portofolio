import { lazy, Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'
import { DarkModeProvider, useDarkMode } from './contexts/DarkModeContext'
import { useThemeColors } from './hooks/useThemeColors'
import { colors } from './styles/colors'
import Navigation from './components/section/Navigation'
import About from './components/section/About'
import { divider } from './assets'
import './App.css'

// Lazy load project pages - add your project page imports here
// Example: const MyProject = lazy(() => import('./pages/projects/MyProject'))
const Contact = lazy(() => import('./pages/Contact'))
const Resume = lazy(() => import('./pages/Resume'))

// Lazy load below-the-fold components for better initial load
const Projects = lazy(() => import('./components/section/Projects'))
const Experience = lazy(() => import('./components/section/Experience'))
const Skills = lazy(() => import('./components/section/Skills'))
const Certifications = lazy(() => import('./components/section/Certifications'))
const Footer = lazy(() => import('./components/Footer'))

function HomePage() {
  const { isDarkMode } = useDarkMode();
  const themeColors = useThemeColors();

  return (
    <>
      <About />
      <Suspense fallback={<div className="h-screen flex items-center justify-center">Loading...</div>}>
        <Projects />
      </Suspense>
      <Suspense fallback={<div className="h-64 flex items-center justify-center">Loading...</div>}>
        <Experience />
      </Suspense>
      {/* Divider with gradient transitions */}
      <div className="w-full py-8 relative" style={{
        background: isDarkMode ? themeColors.background.gradientEnd : colors.white,
        transition: 'background 0.3s ease-in-out'
      }}>
        {/* Top gradient overlay to blend with Experience section */}
        <div
          className="absolute top-0 left-0 right-0 pointer-events-none"
          style={{
            height: '60px',
            background: isDarkMode
              ? `linear-gradient(180deg, ${themeColors.background.gradientEnd} 0%, transparent 100%)`
              : `linear-gradient(180deg, ${colors.white} 0%, transparent 100%)`,
            zIndex: 1
          }}
        />
        {/* Bottom gradient overlay to blend with Skills section */}
        <div 
          className="absolute bottom-0 left-0 right-0 pointer-events-none"
          style={{
            height: '200px',
            background: isDarkMode 
              ? `linear-gradient(180deg, transparent 0%, ${themeColors.background.gradientEnd} 100%)`
              : `linear-gradient(180deg, transparent 0%, ${themeColors.colors.pink[25]} 100%)`,
            zIndex: 1
          }}
        />
        <img
          src={divider}
          alt="Section divider"
          className="w-full h-auto relative"
          style={{
            zIndex: 2,
            filter: isDarkMode ? 'invert(1) hue-rotate(180deg)' : 'none',
            opacity: isDarkMode ? 0.7 : 1
          }}
          width="1200"
          height="100"
          loading="lazy"
        />
      </div>
      <Suspense fallback={<div className="h-screen flex items-center justify-center">Loading...</div>}>
        <Skills />
      </Suspense>
      <Suspense fallback={<div className="h-64 flex items-center justify-center">Loading...</div>}>
        <Certifications />
      </Suspense>
    </>
  )
}

function AppContent() {
  const { isDarkMode } = useDarkMode();

  return (
    <>
      <Navigation />
      <div
        className="app min-h-screen flex flex-col transition-colors duration-300"
        style={{
          background: isDarkMode
            ? 'radial-gradient(circle at 15% 6%, rgba(234, 190, 195, 0.1) 0%, transparent 42%), radial-gradient(circle at 85% 10%, rgba(253, 213, 223, 0.08) 0%, transparent 45%), #0A0F1B'
            : 'radial-gradient(circle at 12% 8%, rgba(253, 213, 223, 0.38) 0%, transparent 45%), radial-gradient(circle at 88% 12%, rgba(255, 221, 204, 0.34) 0%, transparent 48%), radial-gradient(circle at 50% 100%, rgba(250, 232, 237, 0.45) 0%, transparent 55%), #FFF9FA'
        }}
      >
        <a href="#main-content" className="skip-link">Skip to main content</a>
        <main id="main-content" className="main-content flex-1 flex flex-col">
          <Suspense fallback={<div className="flex items-center justify-center flex-1 min-h-screen">Loading...</div>}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/resume" element={<Resume />} />
              <Route path="/resume.pdf" element={<Resume />} />
              {/* Add your project routes here */}
              {/* Example: <Route path="/projects/my-project" element={<MyProject />} /> */}
            </Routes>
          </Suspense>
        </main>
        <Suspense fallback={<div className="h-32 flex items-center justify-center">Loading...</div>}>
          <Footer />
        </Suspense>
      </div>
    </>
  )
}

function App() {
  return (
    <DarkModeProvider>
      <AppContent />
    </DarkModeProvider>
  )
}

export default App