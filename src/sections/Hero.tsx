import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, ChevronRight, BarChart3, Award, BookOpen } from 'lucide-react'
import { Button } from '@/components/ui/button'

type Page = 'home' | 'about' | 'team' | 'quality' | 'effectiveness' | 'accreditations' | 'services' | 'resources' | 'news' | 'contact'

interface HeroProps {
  onNavigate: (page: Page) => void
}

const heroSlides = [
  {
    id: 1,
    title: 'Excellence Académique',
    subtitle: 'Qualité & Innovation',
    description: 'Promouvoir l\'excellence académique par la qualité, la donnée et l\'amélioration continue.',
    image: '/images/hero-campus.jpg',
  },
  {
    id: 2,
    title: 'Accréditations Internationales',
    subtitle: 'Standards Mondiaux',
    description: 'Engagés dans des démarches d\'accréditation ABET, ISO 21001, AACSB et EAQUALS.',
    image: '/images/pergola.jpg',
  },
  {
    id: 3,
    title: 'Amélioration Continue',
    subtitle: 'Processus Qualité',
    description: 'Des processus robustes pour l\'évaluation et l\'amélioration permanente de nos programmes.',
    image: '/images/campus-aerial.jpg',
  },
]

const sidebarItems = [
  { id: 1, title: 'Cadre Qualité', description: 'Nos standards' },
  { id: 2, title: 'Accréditations', description: 'Projets en cours' },
  { id: 3, title: 'Tableaux de Bord', description: 'KPIs & Indicateurs' },
  { id: 4, title: 'Formations', description: 'Développement' },
]

export default function Hero({ onNavigate }: HeroProps) {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [activeSidebarItem, setActiveSidebarItem] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
    }, 6000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative min-h-screen pt-[72px] overflow-hidden">
      {/* Background Image with Overlay */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0"
        >
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${heroSlides[currentSlide].image})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-um6p-navy/90 via-um6p-navy/70 to-transparent" />
        </motion.div>
      </AnimatePresence>

      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 min-h-[calc(100vh-72px)] flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 w-full py-12">
          
          {/* Left Sidebar */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-4 hidden lg:block"
          >
            <div className="space-y-1">
              <motion.h2 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="text-white/60 text-sm font-medium tracking-wider uppercase mb-6"
              >
                Academic Quality Office
              </motion.h2>
              
              {sidebarItems.map((item, index) => (
                <motion.button
                  key={item.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  onClick={() => setActiveSidebarItem(index)}
                  className={`w-full text-left p-4 rounded-lg transition-all duration-300 group ${
                    activeSidebarItem === index 
                      ? 'bg-white/10 border-l-4 border-um6p-red' 
                      : 'hover:bg-white/5 border-l-4 border-transparent'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-um6p-red font-bold text-lg mr-2">{item.id}</span>
                      <span className="text-white font-medium">{item.title}</span>
                    </div>
                    <ChevronRight className={`w-5 h-5 text-white/50 transition-transform ${
                      activeSidebarItem === index ? 'translate-x-1' : ''
                    }`} />
                  </div>
                  <p className="text-white/60 text-sm mt-1 ml-6">{item.description}</p>
                </motion.button>
              ))}
            </div>
          </motion.div>

          {/* Main Content */}
          <div className="lg:col-span-8 flex flex-col justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.5 }}
                className="space-y-6"
              >
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="inline-flex items-center space-x-2 bg-um6p-red/20 backdrop-blur-sm px-4 py-2 rounded-full"
                >
                  <span className="w-2 h-2 bg-um6p-red rounded-full animate-pulse" />
                  <span className="text-um6p-red-light text-sm font-medium">
                    {heroSlides[currentSlide].subtitle}
                  </span>
                </motion.div>

                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight"
                >
                  {heroSlides[currentSlide].title}
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="text-lg sm:text-xl text-white/80 max-w-2xl leading-relaxed"
                >
                  {heroSlides[currentSlide].description}
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="flex flex-wrap gap-4 pt-4"
                >
                  <Button
                    onClick={() => onNavigate('quality')}
                    className="bg-um6p-red hover:bg-um6p-red-dark text-white px-8 py-6 text-base font-medium group"
                  >
                    Découvrir notre cadre qualité
                    <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
                  </Button>
                  <Button
                    onClick={() => onNavigate('accreditations')}
                    variant="outline"
                    className="border-white/30 text-white hover:bg-white/10 px-8 py-6 text-base font-medium"
                  >
                    <Award className="mr-2 w-5 h-5" />
                    Explorer les accréditations
                  </Button>
                </motion.div>

                {/* Quick Stats */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  className="flex flex-wrap gap-8 pt-8"
                >
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center">
                      <BookOpen className="w-6 h-6 text-um6p-red-light" />
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-white">50+</p>
                      <p className="text-white/60 text-sm">Programmes</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center">
                      <Award className="w-6 h-6 text-um6p-red-light" />
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-white">4</p>
                      <p className="text-white/60 text-sm">Accréditations</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center">
                      <BarChart3 className="w-6 h-6 text-um6p-red-light" />
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-white">95%</p>
                      <p className="text-white/60 text-sm">Satisfaction</p>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </AnimatePresence>

            {/* Slide Indicators */}
            <div className="flex space-x-2 mt-12">
              {heroSlides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`h-1 rounded-full transition-all duration-300 ${
                    currentSlide === index ? 'w-8 bg-um6p-red' : 'w-4 bg-white/30 hover:bg-white/50'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent z-20" />
    </section>
  )
}
