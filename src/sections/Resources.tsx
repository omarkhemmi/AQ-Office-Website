import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { 
  FileText, 
  Download, 
  Search,
  Filter,
  BookOpen,
  Clipboard,
  BarChart3,
  ExternalLink
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

type Category = 'all' | 'policies' | 'templates' | 'reports' | 'publications'

const resources = [
  {
    id: 1,
    title: 'Politique Qualité UM6P 2025',
    category: 'policies',
    type: 'PDF',
    size: '2.4 MB',
    date: '2025-01-15',
    description: 'Politique qualité institutionnelle de l\'UM6P',
  },
  {
    id: 2,
    title: 'Manuel Qualité',
    category: 'policies',
    type: 'PDF',
    size: '5.1 MB',
    date: '2025-01-10',
    description: 'Manuel complet du système de management qualité',
  },
  {
    id: 3,
    title: 'Template Rapport Programme',
    category: 'templates',
    type: 'DOCX',
    size: '850 KB',
    date: '2024-12-20',
    description: 'Template pour les rapports de révision de programme',
  },
  {
    id: 4,
    title: 'Template Évaluation Cours',
    category: 'templates',
    type: 'XLSX',
    size: '420 KB',
    date: '2024-12-15',
    description: 'Template d\'analyse des évaluations des cours',
  },
  {
    id: 5,
    title: 'Rapport Annuel Qualité 2024',
    category: 'reports',
    type: 'PDF',
    size: '8.5 MB',
    date: '2024-12-01',
    description: 'Rapport annuel des activités du Bureau AQ',
  },
  {
    id: 6,
    title: 'Analyse Satisfaction 2024',
    category: 'reports',
    type: 'PDF',
    size: '4.2 MB',
    date: '2024-11-15',
    description: 'Rapport d\'analyse des enquêtes de satisfaction',
  },
  {
    id: 7,
    title: 'Guide ABET pour les Programmes',
    category: 'publications',
    type: 'PDF',
    size: '3.8 MB',
    date: '2024-10-20',
    description: 'Guide pratique pour la préparation ABET',
  },
  {
    id: 8,
    title: 'Best Practices Qualité',
    category: 'publications',
    type: 'PDF',
    size: '2.1 MB',
    date: '2024-09-30',
    description: 'Recueil des meilleures pratiques en assurance qualité',
  },
]

const categories = [
  { id: 'all', label: 'Tous', icon: FileText },
  { id: 'policies', label: 'Politiques', icon: BookOpen },
  { id: 'templates', label: 'Templates', icon: Clipboard },
  { id: 'reports', label: 'Rapports', icon: BarChart3 },
  { id: 'publications', label: 'Publications', icon: FileText },
]

export default function Resources() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' })
  const [activeCategory, setActiveCategory] = useState<Category>('all')
  const [searchQuery, setSearchQuery] = useState('')

  const filteredResources = resources.filter((resource) => {
    const matchesCategory = activeCategory === 'all' || resource.category === activeCategory
    const matchesSearch = resource.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         resource.description.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

  return (
    <div className="pt-[72px]">
      {/* Page Header - RED BACKGROUND */}
      <section className="bg-gradient-to-r from-um6p-red to-um6p-red-dark py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center text-white"
          >
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">
              Ressources
            </h1>
            <p className="text-white/80 text-lg max-w-2xl mx-auto">
              Accédez à nos documents, templates et publications
            </p>
          </motion.div>
        </div>
      </section>

      {/* Resources Content */}
      <section ref={sectionRef} className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Search and Filter */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <div className="flex flex-col md:flex-row gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <Input
                  type="text"
                  placeholder="Rechercher une ressource..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>
              <div className="flex items-center space-x-2 text-gray-500">
                <Filter className="w-5 h-5" />
                <span className="text-sm">Filtrer par :</span>
              </div>
            </div>
          </motion.div>

          {/* Category Tabs */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex flex-wrap gap-2 mb-8"
          >
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id as Category)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeCategory === category.id
                    ? 'bg-um6p-red text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                <category.icon className="w-4 h-4" />
                <span>{category.label}</span>
              </button>
            ))}
          </motion.div>

          {/* Resources Grid */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filteredResources.map((resource, index) => (
              <motion.div
                key={resource.id}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.05 }}
                className="bg-gray-50 rounded-xl p-6 hover:shadow-card-hover transition-all group"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 bg-um6p-red/10 rounded-lg flex items-center justify-center">
                    <FileText className="w-6 h-6 text-um6p-red" />
                  </div>
                  <span className="text-xs bg-gray-200 text-gray-600 px-2 py-1 rounded">
                    {resource.type}
                  </span>
                </div>

                <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-um6p-red transition-colors">
                  {resource.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  {resource.description}
                </p>

                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <span>{resource.size}</span>
                  <span>{resource.date}</span>
                </div>

                <Button
                  variant="outline"
                  className="w-full border-um6p-red text-um6p-red hover:bg-um6p-red hover:text-white"
                >
                  <Download className="w-4 h-4 mr-2" />
                  Télécharger
                </Button>
              </motion.div>
            ))}
          </motion.div>

          {filteredResources.length === 0 && (
            <div className="text-center py-12">
              <FileText className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <p className="text-gray-500">Aucune ressource trouvée</p>
            </div>
          )}
        </div>
      </section>

      {/* Annual Report Highlight */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-um6p-red rounded-2xl p-8 md:p-12 text-white"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <span className="text-white/80 text-sm font-medium uppercase tracking-wider">
                  Publication Annuelle
                </span>
                <h2 className="text-3xl font-bold mt-2 mb-4">
                  Rapport Annuel Qualité 2024
                </h2>
                <p className="text-white/80 mb-6">
                  Découvrez l'ensemble des activités, réalisations et indicateurs 
                  du Bureau Assurance Qualité pour l'année 2024.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button className="bg-white text-um6p-red hover:bg-gray-100">
                    <Download className="w-4 h-4 mr-2" />
                    Télécharger le PDF
                  </Button>
                  <Button variant="outline" className="border-white text-white hover:bg-white/10">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Consulter en ligne
                  </Button>
                </div>
              </div>
              <div className="flex justify-center">
                <div className="w-48 h-64 bg-white/20 rounded-lg flex items-center justify-center">
                  <FileText className="w-24 h-24 text-white/40" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
