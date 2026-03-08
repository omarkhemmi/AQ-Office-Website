import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Target, Eye, Users, Building2, CheckCircle2 } from 'lucide-react'

const strategicObjectives = [
  {
    title: 'Excellence Académique',
    description: 'Assurer la qualité et la pertinence de tous les programmes académiques.',
    icon: Target,
  },
  {
    title: 'Amélioration Continue',
    description: 'Mettre en place des mécanismes d\'évaluation et d\'amélioration permanente.',
    icon: CheckCircle2,
  },
  {
    title: 'Accompagnement',
    description: 'Soutenir les facultés dans leurs démarches qualité et accréditation.',
    icon: Users,
  },
  {
    title: 'Gouvernance',
    description: 'Établir une gouvernance qualité efficace et transparente.',
    icon: Building2,
  },
]

const governanceStructure = [
  { role: 'Président', name: 'Direction Générale', description: 'Supervision stratégique' },
  { role: 'Responsable', name: 'Bureau Assurance Qualité', description: 'Coordination opérationnelle' },
  { role: 'Membres', name: 'Référents Qualité Facultés', description: 'Implémentation locale' },
  { role: 'Partenaires', name: 'Comités de Programme', description: 'Évaluation continue' },
]

export default function About() {
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
              À Propos du Bureau Assurance Qualité
            </h1>
            <p className="text-white/90 text-lg max-w-2xl mx-auto">
              Découvrez notre mission, notre vision et notre engagement 
              pour l'excellence académique à l'UM6P.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Who We Are */}
      <section ref={sectionRef} className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <span className="text-um6p-red font-medium text-sm tracking-wider uppercase">
                Qui Sommes-Nous
              </span>
              <h2 className="text-3xl font-bold text-gray-900 mt-3 mb-6">
                Le Pilier de l'Excellence Académique
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Le Bureau Assurance Qualité (BAQ) de l'Université Mohammed VI 
                  Polytechnique est l'entité chargée de garantir la qualité et 
                  l'excellence de l'ensemble des programmes académiques de l'institution.
                </p>
                <p>
                  Créé en parallèle du développement de l'université, le BAQ 
                  accompagne les facultés et les programmes dans leurs démarches 
                  d'amélioration continue et d'accréditation internationale.
                </p>
                <p>
                  Notre équipe pluridisciplinaire combine expertise académique et 
                  maîtrise des standards internationaux pour offrir un accompagnement 
                  de qualité à l'ensemble de la communauté universitaire.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="aspect-video rounded-2xl overflow-hidden shadow-xl">
                <img 
                  src="/images/hero-campus.jpg" 
                  alt="UM6P Campus"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-um6p-red text-white p-6 rounded-xl shadow-lg">
                <p className="text-3xl font-bold">2016</p>
                <p className="text-white/80 text-sm">Année de création</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-um6p-navy rounded-2xl p-8 text-white"
            >
              <div className="w-14 h-14 bg-um6p-red rounded-xl flex items-center justify-center mb-6">
                <Target className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Notre Mission</h3>
              <p className="text-gray-300 leading-relaxed">
                Établir et maintenir un système de management de la qualité robuste 
                qui assure l'excellence académique, favorise l'amélioration continue 
                des programmes, et prépare l'université aux accréditations 
                internationales les plus prestigieuses.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-um6p-red rounded-2xl p-8 text-white"
            >
              <div className="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center mb-6">
                <Eye className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Notre Vision</h3>
              <p className="text-white/90 leading-relaxed">
                Devenir une référence régionale et internationale en matière d'assurance 
                qualité académique, reconnue pour l'excellence de nos processus, 
                la qualité de nos programmes de formation, et l'innovation dans 
                nos approches d'évaluation.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Strategic Objectives */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <span className="text-um6p-red font-medium text-sm tracking-wider uppercase">
              Nos Objectifs
            </span>
            <h2 className="text-3xl font-bold text-gray-900 mt-3">
              Objectifs Stratégiques
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {strategicObjectives.map((objective, index) => (
              <motion.div
                key={objective.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gray-50 rounded-xl p-6 hover:shadow-card-hover transition-all"
              >
                <div className="w-12 h-12 bg-um6p-red/10 rounded-lg flex items-center justify-center mb-4">
                  <objective.icon className="w-6 h-6 text-um6p-red" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {objective.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {objective.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Governance */}
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
              Organisation
            </span>
            <h2 className="text-3xl font-bold text-gray-900 mt-3">
              Gouvernance & Rattachement
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {governanceStructure.map((item, index) => (
              <motion.div
                key={item.role}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-card text-center"
              >
                <div className="w-12 h-12 bg-um6p-red text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold">
                  {index + 1}
                </div>
                <p className="text-um6p-red text-sm font-medium mb-1">{item.role}</p>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.name}</h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
