import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { 
  ClipboardList, 
  FileText, 
  Award, 
  GraduationCap, 
  BarChart3,
  ArrowRight,
  CheckCircle2,
  Phone,
  Mail,
  Clock
} from 'lucide-react'
import { Button } from '@/components/ui/button'

const services = [
  {
    id: 'surveys',
    icon: ClipboardList,
    title: 'Lancement & Gestion d\'Enquêtes',
    shortDesc: 'Conception, déploiement et analyse des enquêtes de satisfaction.',
    fullDesc: `Notre service d'enquêtes vous accompagne dans toutes les étapes de la collecte 
    de feedback : conception des questionnaires, déploiement auprès des cibles, 
    collecte des réponses, et analyse des résultats.`,
    features: [
      'Enquêtes de satisfaction étudiants',
      'Évaluation des enseignements',
      'Enquêtes employeurs',
      'Analyse statistique des résultats',
      'Rapports personnalisés',
    ],
    process: ['Demande', 'Conception', 'Déploiement', 'Analyse', 'Rapport'],
    color: 'bg-blue-500',
  },
  {
    id: 'procedures',
    icon: FileText,
    title: 'Développement de Procédures Qualité',
    shortDesc: 'Rédaction et mise à jour des procédures et politiques qualité.',
    fullDesc: `Nous vous aidons à élaborer, documenter et maintenir vos procédures qualité 
    conformément aux standards internationaux et aux meilleures pratiques académiques.`,
    features: [
      'Rédaction de procédures',
      'Mise à jour documentaire',
      'Cartographie des processus',
      'Formation aux procédures',
      'Audit interne',
    ],
    process: ['Analyse', 'Rédaction', 'Validation', 'Publication', 'Formation'],
    color: 'bg-green-500',
  },
  {
    id: 'accreditation',
    icon: Award,
    title: 'Appui aux Accréditations',
    shortDesc: 'Accompagnement complet dans les démarches d\'accréditation.',
    fullDesc: `Bénéficiez d'un accompagnement expert pour vos démarches d'accréditation 
    nationale et internationale, de la préparation à l'audit final.`,
    features: [
      'Analyse des écarts',
      'Préparation documentation',
      'Formation des équipes',
      'Simulations d\'audit',
      'Suivi post-audit',
    ],
    process: ['Diagnostic', 'Planification', 'Préparation', 'Audit', 'Suivi'],
    color: 'bg-um6p-red',
  },
  {
    id: 'training',
    icon: GraduationCap,
    title: 'Formations & Sensibilisation',
    shortDesc: 'Programmes de formation sur la qualité académique.',
    fullDesc: `Découvrez nos programmes de formation destinés à tous les acteurs de la 
    communauté universitaire pour développer la culture qualité.`,
    features: [
      'Formation aux référentiels',
      'Ateliers pratiques',
      'Webinaires',
      'Certifications internes',
      'Coaching personnalisé',
    ],
    process: ['Besoins', 'Conception', 'Animation', 'Évaluation', 'Certification'],
    color: 'bg-purple-500',
  },
  {
    id: 'analytics',
    icon: BarChart3,
    title: 'Analyse & Reporting',
    shortDesc: 'Analyse des données qualité et production de rapports.',
    fullDesc: `Transformez vos données en insights actionnables grâce à nos services 
    d'analyse et de reporting personnalisés.`,
    features: [
      'Tableaux de bord',
      'Analyses statistiques',
      'Rapports annuels',
      'Benchmarking',
      'Prédictions',
    ],
    process: ['Collecte', 'Traitement', 'Analyse', 'Visualisation', 'Présentation'],
    color: 'bg-orange-500',
  },
]

export default function ServicesPage() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' })

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
              Nos Services
            </h1>
            <p className="text-white/90 text-lg max-w-2xl mx-auto">
              Un accompagnement complet pour votre démarche qualité
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services List */}
      <section ref={sectionRef} className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gray-50 rounded-2xl overflow-hidden"
              >
                <div className="grid grid-cols-1 lg:grid-cols-3">
                  {/* Service Header */}
                  <div className={`${service.color} p-8 text-white`}>
                    <service.icon className="w-12 h-12 mb-4" />
                    <h2 className="text-2xl font-bold mb-2">{service.title}</h2>
                    <p className="text-white/80">{service.shortDesc}</p>
                  </div>

                  {/* Service Details */}
                  <div className="lg:col-span-2 p-8">
                    <p className="text-gray-600 mb-6">{service.fullDesc}</p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {/* Features */}
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-3 flex items-center">
                          <CheckCircle2 className="w-5 h-5 text-um6p-red mr-2" />
                          Ce que nous offrons
                        </h3>
                        <ul className="space-y-2">
                          {service.features.map((feature, i) => (
                            <li key={i} className="flex items-start text-sm text-gray-600">
                              <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-1.5 mr-2 flex-shrink-0" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Process */}
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-3 flex items-center">
                          <Clock className="w-5 h-5 text-um6p-red mr-2" />
                          Notre Processus
                        </h3>
                        <div className="flex flex-wrap gap-2">
                          {service.process.map((step, i) => (
                            <div key={i} className="flex items-center">
                              <span className="bg-white border border-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm">
                                {step}
                              </span>
                              {i < service.process.length - 1 && (
                                <ArrowRight className="w-4 h-4 text-gray-400 mx-1" />
                              )}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="mt-6 pt-6 border-t flex items-center justify-between">
                      <div className="flex items-center space-x-4 text-sm text-gray-500">
                        <span className="flex items-center">
                          <Clock className="w-4 h-4 mr-1" />
                          Délai : 2-4 semaines
                        </span>
                      </div>
                      <Button className="bg-um6p-red hover:bg-um6p-red-dark text-white">
                        Demander ce service
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-um6p-navy rounded-2xl p-8 md:p-12 text-center text-white"
          >
            <h2 className="text-3xl font-bold mb-4">
              Besoin d'un Service Personnalisé ?
            </h2>
            <p className="text-white/80 max-w-2xl mx-auto mb-8">
              Notre équipe est à votre disposition pour étudier vos besoins spécifiques 
              et vous proposer une solution adaptée.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button className="bg-um6p-red hover:bg-um6p-red-dark text-white px-8">
                <Mail className="w-4 h-4 mr-2" />
                Nous contacter
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-white/10">
                <Phone className="w-4 h-4 mr-2" />
                +212 525 073 100
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
