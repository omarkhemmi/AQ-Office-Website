import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { 
  Calendar, 
  ArrowRight, 
  User, 
  Tag,
  Clock,
  MapPin
} from 'lucide-react'
import { Button } from '@/components/ui/button'

type Category = 'all' | 'news' | 'events' | 'workshops'

const newsItems = [
  {
    id: 1,
    title: 'Lancement du nouveau cadre qualité institutionnel',
    excerpt: 'Le Bureau Assurance Qualité dévoile son nouveau cadre qualité pour l\'année académique 2025-2026, avec de nouveaux processus et outils.',
    content: 'Le Bureau Assurance Qualité est fier de présenter le nouveau cadre qualité institutionnel...',
    date: '2026-03-01',
    author: 'Équipe AQ',
    category: 'news',
    tags: ['Qualité', 'Innovation'],
    image: '/images/hero-campus.jpg',
    featured: true,
  },
  {
    id: 2,
    title: 'Atelier sur les indicateurs de performance',
    excerpt: 'Formation destinée aux coordinateurs de programmes sur l\'utilisation des KPIs pour l\'amélioration continue.',
    content: 'Cet atelier vise à former les coordinateurs de programmes...',
    date: '2026-02-25',
    author: 'Service Formation',
    category: 'workshops',
    tags: ['Formation', 'KPIs'],
    image: '/images/pergola.jpg',
    featured: false,
  },
  {
    id: 3,
    title: 'Rapport Annuel Qualité 2025 disponible',
    excerpt: 'Consultez le rapport complet sur les activités et réalisations du Bureau AQ pour l\'année 2025.',
    content: 'Le rapport annuel 2025 est maintenant disponible...',
    date: '2026-02-15',
    author: 'Direction AQ',
    category: 'news',
    tags: ['Rapport', 'Publication'],
    image: '/images/campus-aerial.jpg',
    featured: false,
  },
  {
    id: 4,
    title: 'Forum Qualité UM6P 2026',
    excerpt: 'Rejoignez-nous pour le premier Forum Qualité de l\'UM6P, une journée dédiée à l\'excellence académique.',
    content: 'Le Forum Qualité UM6P 2026 réunira tous les acteurs...',
    date: '2026-04-15',
    author: 'Équipe AQ',
    category: 'events',
    tags: ['Événement', 'Forum'],
    image: '/images/hero-campus.jpg',
    featured: false,
    location: 'Campus Benguerir',
    time: '09:00 - 17:00',
  },
  {
    id: 5,
    title: 'Atelier ABET pour les facultés',
    excerpt: 'Session de formation sur les exigences ABET et la préparation à l\'accréditation.',
    content: 'Cet atelier est destiné aux facultés préparant l\'accréditation ABET...',
    date: '2026-03-20',
    author: 'Service Accréditations',
    category: 'workshops',
    tags: ['ABET', 'Accréditation'],
    image: '/images/pergola.jpg',
    featured: false,
    location: 'Salle de conférence A',
    time: '14:00 - 16:00',
  },
  {
    id: 6,
    title: 'Mise à jour des procédures d\'évaluation',
    excerpt: 'Nouvelles procédures pour l\'évaluation des programmes et des enseignements.',
    content: 'Le Bureau AQ annonce la mise à jour des procédures...',
    date: '2026-02-10',
    author: 'Équipe AQ',
    category: 'news',
    tags: ['Procédures', 'Évaluation'],
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
    time: '09:00 - 17:00',
  },
  {
    id: 2,
    title: 'Atelier ABET pour les facultés',
    date: '2026-03-20',
    location: 'Salle de conférence A',
    time: '14:00 - 16:00',
  },
  {
    id: 3,
    title: 'Journée de la Qualité',
    date: '2026-05-15',
    location: 'Amphithéâtre principal',
    time: '10:00 - 16:00',
  },
]

const categories = [
  { id: 'all', label: 'Tous' },
  { id: 'news', label: 'Actualités' },
  { id: 'events', label: 'Événements' },
  { id: 'workshops', label: 'Ateliers' },
]

export default function NewsPage() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' })
  const [activeCategory, setActiveCategory] = useState<Category>('all')

  const filteredNews = newsItems.filter((item) => 
    activeCategory === 'all' || item.category === activeCategory
  )

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return new Intl.DateTimeFormat('fr-FR', { 
      day: 'numeric', 
      month: 'long', 
      year: 'numeric' 
    }).format(date)
  }

  return (
    <div className="pt-[72px]">
      {/* Page Header */}
      <section className="bg-gradient-to-r from-um6p-red to-um6p-red-dark py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center text-white"
          >
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">
              Actualités & Événements
            </h1>
            <p className="text-white/90 text-lg max-w-2xl mx-auto">
              Restez informés des dernières nouvelles et événements du Bureau AQ
            </p>
          </motion.div>
        </div>
      </section>

      {/* News Content */}
      <section ref={sectionRef} className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Tabs */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="flex flex-wrap gap-2 mb-12 justify-center"
          >
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id as Category)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeCategory === category.id
                    ? 'bg-um6p-red text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category.label}
              </button>
            ))}
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main News Grid */}
            <div className="lg:col-span-2">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {filteredNews.map((item, index) => (
                  <motion.article
                    key={item.id}
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.1 + index * 0.05 }}
                    className="bg-gray-50 rounded-xl overflow-hidden hover:shadow-card-hover transition-shadow group cursor-pointer"
                  >
                    <div className="aspect-video overflow-hidden">
                      <img 
                        src={item.image} 
                        alt={item.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-xs bg-um6p-red/10 text-um6p-red px-2 py-1 rounded-full font-medium">
                          {categories.find(c => c.id === item.category)?.label}
                        </span>
                        <div className="flex items-center text-xs text-gray-500">
                          <Calendar className="w-3 h-3 mr-1" />
                          {formatDate(item.date)}
                        </div>
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-um6p-red transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                        {item.excerpt}
                      </p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center text-xs text-gray-500">
                          <User className="w-3 h-3 mr-1" />
                          {item.author}
                        </div>
                        <button className="flex items-center text-um6p-red text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                          Lire plus
                          <ArrowRight className="w-4 h-4 ml-1" />
                        </button>
                      </div>
                      {item.location && (
                        <div className="flex items-center mt-3 text-xs text-gray-500">
                          <MapPin className="w-3 h-3 mr-1" />
                          {item.location}
                          <Clock className="w-3 h-3 ml-3 mr-1" />
                          {item.time}
                        </div>
                      )}
                    </div>
                  </motion.article>
                ))}
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Upcoming Events */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="bg-um6p-navy rounded-xl p-6 text-white"
              >
                <h3 className="text-lg font-semibold mb-4">
                  Événements à Venir
                </h3>
                <div className="space-y-4">
                  {upcomingEvents.map((event) => (
                    <div 
                      key={event.id}
                      className="flex items-start space-x-3 pb-4 border-b border-white/10 last:border-0 last:pb-0"
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
                        <p className="text-xs text-gray-400">{event.time}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Tags */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="bg-gray-50 rounded-xl p-6"
              >
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Tags Populaires
                </h3>
                <div className="flex flex-wrap gap-2">
                  {['Qualité', 'Accréditation', 'Formation', 'ABET', 'Rapport', 'Événement'].map((tag) => (
                    <span 
                      key={tag}
                      className="bg-white border border-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm hover:bg-um6p-red hover:text-white hover:border-um6p-red transition-colors cursor-pointer"
                    >
                      <Tag className="w-3 h-3 inline mr-1" />
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>

              {/* Newsletter */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="bg-um6p-red rounded-xl p-6 text-white"
              >
                <h3 className="text-lg font-semibold mb-2">
                  Restez Informé
                </h3>
                <p className="text-white/80 text-sm mb-4">
                  Inscrivez-vous à notre newsletter pour recevoir les dernières actualités.
                </p>
                <div className="flex gap-2">
                  <input 
                    type="email" 
                    placeholder="Votre email"
                    className="flex-1 px-4 py-2 rounded-lg text-gray-900 text-sm"
                  />
                  <Button className="bg-white text-um6p-red hover:bg-gray-100">
                    S'inscrire
                  </Button>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
