import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { 
  Award, 
  CheckCircle2, 
  Clock, 
  Target,
  TrendingUp,
  Calendar,
  FileText
} from 'lucide-react'
import { Button } from '@/components/ui/button'

const accreditations = [
  {
    id: 'abet',
    name: 'ABET',
    fullName: 'Accreditation Board for Engineering and Technology',
    description: 'Accréditation internationale pour les programmes d\'ingénierie et de technologie. ABET est reconnue mondialement comme la référence en matière d\'accréditation des programmes techniques.',
    status: 'in-progress',
    progress: 75,
    startDate: '2023-01-15',
    targetDate: '2026-06-30',
    programs: ['Génie Civil', 'Génie Informatique', 'Génie Électrique'],
    achievements: [
      'Auto-évaluation complète réalisée',
      'Documentation des programmes finalisée',
      'Premier audit externe effectué',
    ],
    nextSteps: [
      'Préparation au audit final',
      'Mise en place des actions correctives',
      'Soumission du rapport final',
    ],
    color: 'bg-blue-600',
  },
  {
    id: 'iso21001',
    name: 'ISO 21001',
    fullName: 'Management Systems for Educational Organizations',
    description: 'Certification internationale du système de management de l\'éducation. Cette norme vise à améliorer les processus éducatifs et à répondre aux besoins des apprenants.',
    status: 'in-progress',
    progress: 60,
    startDate: '2023-06-01',
    targetDate: '2026-12-31',
    programs: ['Tous les programmes'],
    achievements: [
      'Analyse des écarts réalisée',
      'Manuel qualité ISO 21001 élaboré',
      'Formation des équipes effectuée',
    ],
    nextSteps: [
      'Implémentation des processus',
      'Audit interne',
      'Audit de certification',
    ],
    color: 'bg-green-600',
  },
  {
    id: 'aacsb',
    name: 'AACSB',
    fullName: 'Association to Advance Collegiate Schools of Business',
    description: 'Accréditation prestigieuse pour les écoles de commerce et les programmes de management. Seulement 5% des écoles de commerce mondiales détiennent cette accréditation.',
    status: 'planned',
    progress: 30,
    startDate: '2024-09-01',
    targetDate: '2028-06-30',
    programs: ['Management', 'Finance', 'Marketing'],
    achievements: [
      'Étude de faisabilité réalisée',
      'Comité de pilotage constitué',
      'Plan d\'action élaboré',
    ],
    nextSteps: [
      'Préparation de la candidature initiale',
      'Alignement des programmes',
      'Développement de la recherche',
    ],
    color: 'bg-purple-600',
  },
  {
    id: 'eaquals',
    name: 'EAQUALS',
    fullName: 'Evaluation and Accreditation of Quality Language Services',
    description: 'Accréditation internationale pour les programmes de langues. EAQUALS garantit la qualité de l\'enseignement des langues étrangères.',
    status: 'planned',
    progress: 20,
    startDate: '2024-01-15',
    targetDate: '2027-06-30',
    programs: ['Langues Étrangères', 'Français', 'Anglais'],
    achievements: [
      'Benchmarking avec institutions accréditées',
      'Analyse des pratiques actuelles',
    ],
    nextSteps: [
      'Formation des enseignants',
      'Développement des ressources',
      'Préparation de la candidature',
    ],
    color: 'bg-orange-500',
  },
]

const completedProjects = [
  {
    name: 'Audit Interne Qualité 2024',
    date: '2024-12-15',
    impact: 'Identification de 15 axes d\'amélioration',
  },
  {
    name: 'Mise en place du Système d\'Évaluation',
    date: '2024-09-30',
    impact: '95% de taux de participation',
  },
  {
    name: 'Formation des Référents Qualité',
    date: '2024-06-20',
    impact: '50 référents formés',
  },
]

export default function AccreditationsPage() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' })
  const [selectedAcc, setSelectedAcc] = useState(accreditations[0])

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
              Accréditations & Projets
            </h1>
            <p className="text-white/90 text-lg max-w-2xl mx-auto">
              Nos démarches d'accréditation internationale pour la reconnaissance 
              de l'excellence académique
            </p>
          </motion.div>
        </div>
      </section>

      {/* Accreditations Overview */}
      <section ref={sectionRef} className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <span className="text-um6p-red font-medium text-sm tracking-wider uppercase">
              Initiatives
            </span>
            <h2 className="text-3xl font-bold text-gray-900 mt-3">
              Nos Projets d'Accréditation
            </h2>
          </motion.div>

          {/* Accreditation Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {accreditations.map((acc, index) => (
              <motion.div
                key={acc.id}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
                onClick={() => setSelectedAcc(acc)}
                className={`bg-gray-50 rounded-xl p-6 cursor-pointer transition-all ${
                  selectedAcc.id === acc.id ? 'ring-2 ring-um6p-red' : 'hover:shadow-card-hover'
                }`}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className={`w-14 h-14 ${acc.color} rounded-xl flex items-center justify-center text-white font-bold text-xl`}>
                    {acc.name[0]}
                  </div>
                  <div className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${
                    acc.status === 'in-progress' 
                      ? 'bg-um6p-red/10 text-um6p-red' 
                      : 'bg-gray-200 text-gray-600'
                  }`}>
                    {acc.status === 'in-progress' ? (
                      <>
                        <Clock className="w-3 h-3 mr-1" />
                        En cours
                      </>
                    ) : (
                      <>
                        <Target className="w-3 h-3 mr-1" />
                        Planifié
                      </>
                    )}
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-1">{acc.name}</h3>
                <p className="text-gray-500 text-sm mb-3">{acc.fullName}</p>
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">{acc.description}</p>

                <div className="mb-2">
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-gray-600">Progression</span>
                    <span className="font-medium text-gray-900">{acc.progress}%</span>
                  </div>
                  <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={isInView ? { width: `${acc.progress}%` } : {}}
                      transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                      className={`h-full ${acc.color} rounded-full`}
                    />
                  </div>
                </div>

                <div className="flex items-center text-sm text-gray-500 mt-3">
                  <Calendar className="w-4 h-4 mr-1" />
                  Objectif : {acc.targetDate}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Selected Accreditation Details */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="bg-gray-50 rounded-2xl p-8"
          >
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center space-x-4">
                <div className={`w-16 h-16 ${selectedAcc.color} rounded-xl flex items-center justify-center text-white font-bold text-2xl`}>
                  {selectedAcc.name[0]}
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">{selectedAcc.name}</h3>
                  <p className="text-gray-500">{selectedAcc.fullName}</p>
                </div>
              </div>
              <Button variant="outline" className="border-um6p-red text-um6p-red hover:bg-um6p-red hover:text-white">
                <FileText className="w-4 h-4 mr-2" />
                Documentation
              </Button>
            </div>

            <p className="text-gray-600 mb-6">{selectedAcc.description}</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                  <CheckCircle2 className="w-5 h-5 text-green-600 mr-2" />
                  Réalisations
                </h4>
                <ul className="space-y-2">
                  {selectedAcc.achievements.map((achievement, i) => (
                    <li key={i} className="flex items-start text-sm text-gray-600">
                      <span className="w-1.5 h-1.5 bg-green-600 rounded-full mt-1.5 mr-2 flex-shrink-0" />
                      {achievement}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                  <Target className="w-5 h-5 text-um6p-red mr-2" />
                  Prochaines Étapes
                </h4>
                <ul className="space-y-2">
                  {selectedAcc.nextSteps.map((step, i) => (
                    <li key={i} className="flex items-start text-sm text-gray-600">
                      <span className="w-1.5 h-1.5 bg-um6p-red rounded-full mt-1.5 mr-2 flex-shrink-0" />
                      {step}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-6 pt-6 border-t">
              <h4 className="font-semibold text-gray-900 mb-3">Programmes concernés</h4>
              <div className="flex flex-wrap gap-2">
                {selectedAcc.programs.map((program) => (
                  <span 
                    key={program}
                    className="bg-white text-gray-700 px-3 py-1 rounded-full text-sm border"
                  >
                    {program}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Impact Indicators */}
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
              Impact
            </span>
            <h2 className="text-3xl font-bold text-gray-900 mt-3">
              Indicateurs d'Impact
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0 }}
              className="bg-um6p-red text-white rounded-xl p-6 text-center"
            >
              <Award className="w-10 h-10 mx-auto mb-4" />
              <p className="text-4xl font-bold mb-2">4</p>
              <p className="text-white/80">Accréditations en cours</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-um6p-navy text-white rounded-xl p-6 text-center"
            >
              <TrendingUp className="w-10 h-10 mx-auto mb-4" />
              <p className="text-4xl font-bold mb-2">50+</p>
              <p className="text-white/80">Programmes concernés</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-green-600 text-white rounded-xl p-6 text-center"
            >
              <CheckCircle2 className="w-10 h-10 mx-auto mb-4" />
              <p className="text-4xl font-bold mb-2">15</p>
              <p className="text-white/80">Projets complétés</p>
            </motion.div>
          </div>

          {/* Completed Projects */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3 className="text-xl font-semibold text-gray-900 mb-6">
              Projets Récemment Complétés
            </h3>
            <div className="bg-white rounded-xl shadow-card overflow-hidden">
              {completedProjects.map((project, index) => (
                <div 
                  key={project.name}
                  className={`flex items-center justify-between p-6 ${
                    index !== completedProjects.length - 1 ? 'border-b' : ''
                  }`}
                >
                  <div>
                    <h4 className="font-semibold text-gray-900">{project.name}</h4>
                    <p className="text-sm text-gray-500">{project.impact}</p>
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <Calendar className="w-4 h-4 mr-1" />
                    {project.date}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
