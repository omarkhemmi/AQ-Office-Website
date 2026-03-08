import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Calendar, ArrowRight, User } from 'lucide-react'
import { Button } from '@/components/ui/button'

type Page = 'home' | 'about' | 'team' | 'quality' | 'effectiveness' | 'accreditations' | 'services' | 'resources' | 'news' | 'contact'

interface NewsProps {
  onNavigate: (page: Page) => void
}

const newsItems = [
  {
    id: 1,
    title: 'Lancement du nouveau cadre qualité institutionnel',
    excerpt: 'Le Bureau Assurance Qualité dévoile son nouveau cadre qualité pour l\'année académique 2025-2026.',
    date: '2026-03-01',
    author: 'Équipe AQ',
    category: 'Annonce',
    image: '/images/hero-campus.jpg',
    featured: true,
  },
  {
    id: 2,
    title: 'Atelier sur les indicateurs de performance',
    excerpt: 'Formation destinée aux coordinateurs de programmes sur l\'utilisation des KPIs.',
    date: '2026-02-25',
    author: 'Service Formation',
    category: 'Événement',
    image: '/images/pergola.jpg',
    featured: false,
  },
  {
    id: 3,
    title: 'Rapport Annuel Qualité 2025 disponible',
    excerpt: 'Consultez le rapport complet sur les activités et réalisations du Bureau AQ.',
    date: '2026-02-15',
    author: 'Direction AQ',
    category: 'Publication',
    image: '/images/campus-aerial.jpg',
    featured: false,
  },
]

const upcomingEvents = [
  {
    id: 1,
    title: 'Forum Qualité UM6P 2026',
    date: '2026-04-15',
    location: 'Campus Benguerir',
  },
  {
    id: 2,
    title: 'Atelier ABET pour les facultés',
    date: '2026-03-20',
    location: 'Salle de conférence A',
  },
]

export default function News({ onNavigate }: NewsProps) {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' })

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return new Intl.DateTimeFormat('fr-FR', { 
      day: 'numeric', 
      month: 'long', 
      year: 'numeric' 
    }).format(date)
  }

  return (
    <section ref={sectionRef} className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end md:justify-between mb-12"
        >
          <div>
            <span className="text-um6p-red font-medium text-sm tracking-wider uppercase">
              Actualités
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-3">
              Dernières Nouvelles
            </h2>
          </div>
          <Button
            onClick={() => onNavigate('news')}
            variant="outline"
            className="mt-4 md:mt-0 border-um6p-red text-um6p-red hover:bg-um6p-red hover:text-white"
          >
            Toutes les actualités
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Featured News */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-2"
          >
            <div className="bg-white rounded-xl overflow-hidden shadow-card hover:shadow-card-hover transition-shadow group cursor-pointer">
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={newsItems[0].image} 
                  alt={newsItems[0].title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-um6p-red text-white text-xs font-medium px-3 py-1 rounded-full">
                    {newsItems[0].category}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center text-sm text-gray-500 mb-3">
                  <Calendar className="w-4 h-4 mr-1" />
                  {formatDate(newsItems[0].date)}
                  <span className="mx-2">•</span>
                  <User className="w-4 h-4 mr-1" />
                  {newsItems[0].author}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-um6p-red transition-colors">
                  {newsItems[0].title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {newsItems[0].excerpt}
                </p>
                <button className="flex items-center text-um6p-red font-medium group/btn">
                  Lire la suite
                  <ArrowRight className="w-4 h-4 ml-1 group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </motion.div>

          {/* Side Content */}
          <div className="space-y-6">
            {/* Recent News List */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white rounded-xl p-6 shadow-card"
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Articles récents
              </h3>
              <div className="space-y-4">
                {newsItems.slice(1).map((item) => (
                  <div 
                    key={item.id}
                    className="flex space-x-4 group cursor-pointer"
                  >
                    <div className="w-20 h-20 flex-shrink-0 rounded-lg overflow-hidden">
                      <img 
                        src={item.image} 
                        alt={item.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform"
                      />
                    </div>
                    <div className="flex-1">
                      <span className="text-xs text-um6p-red font-medium">
                        {item.category}
                      </span>
                      <h4 className="text-sm font-semibold text-gray-900 group-hover:text-um6p-red transition-colors line-clamp-2">
                        {item.title}
                      </h4>
                      <p className="text-xs text-gray-500 mt-1">
                        {formatDate(item.date)}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Upcoming Events */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-um6p-navy rounded-xl p-6 text-white"
            >
              <h3 className="text-lg font-semibold mb-4">
                Événements à venir
              </h3>
              <div className="space-y-4">
                {upcomingEvents.map((event) => (
                  <div 
                    key={event.id}
                    className="flex items-start space-x-3 pb-3 border-b border-white/10 last:border-0 last:pb-0"
                  >
                    <div className="w-12 h-12 bg-um6p-red rounded-lg flex flex-col items-center justify-center flex-shrink-0">
                      <span className="text-xs font-medium">
                        {new Date(event.date).toLocaleDateString('fr-FR', { month: 'short' })}
                      </span>
                      <span className="text-lg font-bold">
                        {new Date(event.date).getDate()}
                      </span>
                    </div>
                    <div>
                      <h4 className="text-sm font-medium">{event.title}</h4>
                      <p className="text-xs text-gray-400">{event.location}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
