import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { 
  ChevronDown, 
  FileText, 
  Download, 
  CheckCircle2,
  BookOpen,
  RefreshCw,
  ClipboardCheck
} from 'lucide-react'
import { Button } from '@/components/ui/button'

const qualityFramework = [
  {
    id: 'program-review',
    title: 'Révision des Programmes',
    icon: BookOpen,
    content: `La révision des programmes est un processus systématique d'évaluation 
    et d'amélioration de nos offres de formation. Ce processus comprend :
    
    • Évaluation périodique des programmes (tous les 3-5 ans)
    • Analyse des données d'emploi des diplômés
    • Consultation des parties prenantes (étudiants, employeurs, corps professoral)
    • Benchmarking avec des programmes internationaux similaires
    • Mise à jour des contenus et des compétences visées`,
  },
  {
    id: 'learning-outcomes',
    title: 'Learning Outcomes',
    icon: CheckCircle2,
    content: `Les learning outcomes définissent les compétences et connaissances 
    que les étudiants doivent acquérir à l'issue de leur formation :
    
    • Définition claire des compétences par programme
    • Alignement avec les standards internationaux
    • Cartographie des compétences par cours
    • Évaluation continue des acquis
    • Amélioration basée sur les résultats`,
  },
  {
    id: 'continuous-improvement',
    title: 'Amélioration Continue',
    icon: RefreshCw,
    content: `L'amélioration continue est au cœur de notre approche qualité :
    
    • Cycle PDCA (Plan-Do-Check-Act) pour tous les processus
    • Analyse régulière des indicateurs de performance
    • Mise en place d'actions correctives et préventives
    • Suivi des progrès et évaluation de l'efficacité
    • Documentation et partage des bonnes pratiques`,
  },
  {
    id: 'teaching-evaluation',
    title: 'Évaluation des Enseignements',
    icon: ClipboardCheck,
    content: `L'évaluation des enseignements permet d'assurer la qualité pédagogique :
    
    • Enquêtes de satisfaction étudiants (fin de chaque semestre)
    • Évaluation par les pairs
    • Analyse des résultats académiques
    • Accompagnement au développement pédagogique
    • Reconnaissance de l'excellence enseignante`,
  },
]

const documents = [
  { name: 'Politique Qualité UM6P', type: 'PDF', size: '2.4 MB', date: '2025-01-15' },
  { name: 'Manuel Qualité', type: 'PDF', size: '5.1 MB', date: '2025-01-10' },
  { name: 'Procédure Révision Programmes', type: 'PDF', size: '1.8 MB', date: '2024-12-20' },
  { name: 'Guide Learning Outcomes', type: 'PDF', size: '3.2 MB', date: '2024-11-30' },
  { name: 'Procédure Évaluation Enseignements', type: 'PDF', size: '2.1 MB', date: '2024-11-15' },
]

export default function Quality() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' })
  const [openAccordion, setOpenAccordion] = useState<string | null>('program-review')

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
              Qualité Académique
            </h1>
            <p className="text-white/90 text-lg max-w-2xl mx-auto">
              Notre cadre qualité pour l'excellence académique
            </p>
          </motion.div>
        </div>
      </section>

      {/* Quality Framework */}
      <section ref={sectionRef} className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <span className="text-um6p-red font-medium text-sm tracking-wider uppercase">
              Cadre Qualité
            </span>
            <h2 className="text-3xl font-bold text-gray-900 mt-3">
              Notre Cadre d'Assurance Qualité
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Accordion */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-4"
            >
              {qualityFramework.map((item) => (
                <div
                  key={item.id}
                  className="border border-gray-200 rounded-xl overflow-hidden"
                >
                  <button
                    onClick={() => setOpenAccordion(openAccordion === item.id ? null : item.id)}
                    className={`w-full flex items-center justify-between p-5 text-left transition-colors ${
                      openAccordion === item.id ? 'bg-um6p-red text-white' : 'bg-white hover:bg-gray-50'
                    }`}
                  >
                    <div className="flex items-center space-x-3">
                      <item.icon className={`w-5 h-5 ${openAccordion === item.id ? 'text-white' : 'text-um6p-red'}`} />
                      <span className="font-semibold">{item.title}</span>
                    </div>
                    <ChevronDown 
                      className={`w-5 h-5 transition-transform ${
                        openAccordion === item.id ? 'rotate-180' : ''
                      }`} 
                    />
                  </button>
                  <motion.div
                    initial={false}
                    animate={{ 
                      height: openAccordion === item.id ? 'auto' : 0,
                      opacity: openAccordion === item.id ? 1 : 0
                    }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="p-5 bg-gray-50">
                      <p className="text-gray-600 whitespace-pre-line">
                        {item.content}
                      </p>
                    </div>
                  </motion.div>
                </div>
              ))}
            </motion.div>

            {/* Visual */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-gray-50 rounded-2xl p-8"
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-6">
                Cycle d'Amélioration Continue
              </h3>
              <div className="relative">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-um6p-red text-white p-6 rounded-xl text-center">
                    <div className="text-3xl font-bold mb-2">PLAN</div>
                    <p className="text-sm text-white/80">Planifier les objectifs et processus</p>
                  </div>
                  <div className="bg-um6p-navy text-white p-6 rounded-xl text-center">
                    <div className="text-3xl font-bold mb-2">DO</div>
                    <p className="text-sm text-white/80">Mettre en œuvre les processus</p>
                  </div>
                  <div className="bg-um6p-orange text-white p-6 rounded-xl text-center">
                    <div className="text-3xl font-bold mb-2">CHECK</div>
                    <p className="text-sm text-white/80">Surveiller et mesurer les résultats</p>
                  </div>
                  <div className="bg-green-600 text-white p-6 rounded-xl text-center">
                    <div className="text-3xl font-bold mb-2">ACT</div>
                    <p className="text-sm text-white/80">Agir pour améliorer continuellement</p>
                  </div>
                </div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg">
                    <RefreshCw className="w-8 h-8 text-um6p-red" />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Documents */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <span className="text-um6p-red font-medium text-sm tracking-wider uppercase">
              Documents
            </span>
            <h2 className="text-3xl font-bold text-gray-900 mt-3">
              Politiques et Référentiels
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white rounded-xl shadow-card overflow-hidden"
          >
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Document</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Type</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Taille</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Date</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {documents.map((doc) => (
                    <tr key={doc.name} className="hover:bg-gray-50">
                      <td className="px-6 py-4">
                        <div className="flex items-center space-x-3">
                          <FileText className="w-5 h-5 text-um6p-red" />
                          <span className="font-medium text-gray-900">{doc.name}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">
                          {doc.type}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-600">{doc.size}</td>
                      <td className="px-6 py-4 text-sm text-gray-600">{doc.date}</td>
                      <td className="px-6 py-4">
                        <Button
                          variant="outline"
                          size="sm"
                          className="border-um6p-red text-um6p-red hover:bg-um6p-red hover:text-white"
                        >
                          <Download className="w-4 h-4 mr-1" />
                          Télécharger
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
