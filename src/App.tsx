import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Chatbot from './components/Chatbot'
import Hero from './sections/Hero'
import Mission from './sections/Mission'
import Services from './sections/Services'
import Accreditations from './sections/Accreditations'
import News from './sections/News'
import CTASection from './sections/CTASection'
import About from './sections/About'
import Team from './sections/Team'
import Quality from './sections/Quality'
import Effectiveness from './sections/Effectiveness'
import AccreditationsPage from './sections/AccreditationsPage'
import ServicesPage from './sections/ServicesPage'
import Resources from './sections/Resources'
import NewsPage from './sections/NewsPage'
import Contact from './sections/Contact'
import './App.css'

type Page = 'home' | 'about' | 'team' | 'quality' | 'effectiveness' | 'accreditations' | 'services' | 'resources' | 'news' | 'contact'

function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home')
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Simulate initial load
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 500)
    return () => clearTimeout(timer)
  }, [])

  const navigateTo = (page: Page) => {
    setCurrentPage(page)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return (
          <>
            <Hero onNavigate={navigateTo} />
            <Mission />
            <Services onNavigate={navigateTo} />
            <Accreditations />
            <News onNavigate={navigateTo} />
            <CTASection onNavigate={navigateTo} />
          </>
        )
      case 'about':
        return <About />
      case 'team':
        return <Team />
      case 'quality':
        return <Quality />
      case 'effectiveness':
        return <Effectiveness />
      case 'accreditations':
        return <AccreditationsPage />
      case 'services':
        return <ServicesPage />
      case 'resources':
        return <Resources />
      case 'news':
        return <NewsPage />
      case 'contact':
        return <Contact />
      default:
        return <Hero onNavigate={navigateTo} />
    }
  }

  return (
    <AnimatePresence mode="wait">
      {isLoading ? (
        <motion.div
          key="loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-white"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="text-center"
          >
            <img 
              src="/images/logo.jpg" 
              alt="UM6P Academic Quality Office" 
              className="h-16 w-auto mx-auto mb-4"
            />
            <motion.div
              className="w-48 h-1 bg-gray-200 rounded-full overflow-hidden mx-auto"
            >
              <motion.div
                className="h-full bg-um6p-red"
                initial={{ width: 0 }}
                animate={{ width: '100%' }}
                transition={{ duration: 0.5, ease: 'easeInOut' }}
              />
            </motion.div>
          </motion.div>
        </motion.div>
      ) : (
        <motion.div
          key="app"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
          className="min-h-screen flex flex-col"
        >
          <Navbar currentPage={currentPage} onNavigate={navigateTo} />
          <main className="flex-1">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentPage}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                {renderPage()}
              </motion.div>
            </AnimatePresence>
          </main>
          <Footer onNavigate={navigateTo} />
          <Chatbot />
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default App
