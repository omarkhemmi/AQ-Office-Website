import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Search, ChevronDown } from 'lucide-react'
import { Button } from '@/components/ui/button'

type Page = 'home' | 'about' | 'team' | 'quality' | 'effectiveness' | 'accreditations' | 'services' | 'resources' | 'news' | 'contact'

interface NavbarProps {
  currentPage: Page
  onNavigate: (page: Page) => void
}

const navItems: { label: string; page: Page }[] = [
  { label: 'Accueil', page: 'home' },
  { label: 'À propos', page: 'about' },
  { label: 'Équipe', page: 'team' },
  { label: 'Qualité Académique', page: 'quality' },
  { label: 'Efficacité Institutionnelle', page: 'effectiveness' },
  { label: 'Accréditations', page: 'accreditations' },
  { label: 'Services', page: 'services' },
  { label: 'Ressources', page: 'resources' },
  { label: 'Actualités', page: 'news' },
  { label: 'Contact', page: 'contact' },
]

export default function Navbar({ currentPage, onNavigate }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isLangDropdownOpen, setIsLangDropdownOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (page: Page) => {
    onNavigate(page)
    setIsMobileMenuOpen(false)
  }

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled ? 'bg-white shadow-md' : 'bg-white'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-[72px]">
            {/* Logo */}
            <motion.button
              onClick={() => handleNavClick('home')}
              className="flex items-center space-x-3 hover:opacity-80 transition-opacity"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <img 
                src="/images/logo.jpg" 
                alt="UM6P Academic Quality Office" 
                className="h-12 w-auto"
              />
            </motion.button>

            {/* Desktop Navigation */}
            <nav className="hidden xl:flex items-center space-x-1">
              {navItems.slice(0, 8).map((item) => (
                <motion.button
                  key={item.page}
                  onClick={() => handleNavClick(item.page)}
                  className={`relative px-3 py-2 text-sm font-medium transition-colors ${
                    currentPage === item.page
                      ? 'text-um6p-red'
                      : 'text-gray-700 hover:text-um6p-red'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {item.label}
                  {currentPage === item.page && (
                    <motion.div
                      layoutId="activeNav"
                      className="absolute bottom-0 left-3 right-3 h-0.5 bg-um6p-red"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </motion.button>
              ))}
            </nav>

            {/* Right Actions */}
            <div className="flex items-center space-x-3">
              {/* Language Selector */}
              <div className="relative hidden sm:block">
                <button
                  onClick={() => setIsLangDropdownOpen(!isLangDropdownOpen)}
                  className="flex items-center space-x-1 px-3 py-2 text-sm font-medium text-gray-700 hover:text-um6p-red transition-colors"
                >
                  <span>Fr</span>
                  <ChevronDown className="w-4 h-4" />
                </button>
                <AnimatePresence>
                  {isLangDropdownOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="absolute right-0 mt-2 w-24 bg-white rounded-lg shadow-lg border border-gray-100 py-1"
                    >
                      <button className="block w-full px-4 py-2 text-sm text-left text-um6p-red font-medium">
                        Français
                      </button>
                      <button className="block w-full px-4 py-2 text-sm text-left text-gray-700 hover:bg-gray-50">
                        English
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Search Button */}
              <button className="hidden sm:flex p-2 text-gray-700 hover:text-um6p-red transition-colors">
                <Search className="w-5 h-5" />
              </button>

              {/* CTA Button */}
              <Button
                onClick={() => handleNavClick('contact')}
                className="hidden md:flex bg-um6p-red hover:bg-um6p-red-dark text-white px-6"
              >
                Contact
              </Button>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="xl:hidden p-2 text-gray-700 hover:text-um6p-red transition-colors"
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-50 xl:hidden"
          >
            <div 
              className="absolute inset-0 bg-black/50"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            <motion.div
              className="absolute right-0 top-0 bottom-0 w-[280px] bg-white shadow-xl"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
            >
              <div className="flex items-center justify-between p-4 border-b">
                <span className="font-semibold text-lg">Menu</span>
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-2 text-gray-700 hover:text-um6p-red"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
              <nav className="p-4 space-y-1">
                {navItems.map((item, index) => (
                  <motion.button
                    key={item.page}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                    onClick={() => handleNavClick(item.page)}
                    className={`block w-full text-left px-4 py-3 rounded-lg transition-colors ${
                      currentPage === item.page
                        ? 'bg-um6p-red/10 text-um6p-red font-medium'
                        : 'text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    {item.label}
                  </motion.button>
                ))}
              </nav>
              <div className="absolute bottom-0 left-0 right-0 p-4 border-t">
                <Button
                  onClick={() => handleNavClick('contact')}
                  className="w-full bg-um6p-red hover:bg-um6p-red-dark text-white"
                >
                  Contactez-nous
                </Button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
