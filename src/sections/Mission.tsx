import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'
import { Target, Eye, TrendingUp, Users } from 'lucide-react'

interface CounterProps {
  end: number
  suffix?: string
  duration?: number
}

function Counter({ end, suffix = '', duration = 2000 }: CounterProps) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  useEffect(() => {
    if (isInView) {
      let startTime: number
      const animate = (currentTime: number) => {
        if (!startTime) startTime = currentTime
        const progress = Math.min((currentTime - startTime) / duration, 1)
        setCount(Math.floor(progress * end))
        if (progress < 1) {
          requestAnimationFrame(animate)
        }
      }
      requestAnimationFrame(animate)
    }
  }, [isInView, end, duration])

  return <span ref={ref}>{count}{suffix}</span>
}

const stats = [
  { icon: Users, value: 50, suffix: '+', label: 'Programmes évalués' },
  { icon: TrendingUp, value: 95, suffix: '%', label: 'Taux de satisfaction' },
  { icon: Target, value: 12, suffix: '', label: 'Processus qualité' },
  { icon: Eye, value: 4, suffix: '', label: 'Accréditations visées' },
]

const objectives = [
  {
    title: 'Excellence Académique',
    description: 'Assurer la qualité et la pertinence de nos programmes académiques aux standards internationaux.',
  },
  {
    title: 'Amélioration Continue',
    description: 'Mettre en place des processus d\'évaluation et d\'amélioration permanente de la performance.',
  },
  {
    title: 'Accompagnement',
    description: 'Soutenir les facultés et les programmes dans leurs démarches d\'accréditation.',
  },
]

export default function Mission() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' })

  return (
    <section ref={sectionRef} className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-um6p-red font-medium text-sm tracking-wider uppercase">
            Notre Mission
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-3 mb-4">
            Promouvoir l'Excellence Académique
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Le Bureau Assurance Qualité de l'UM6P s'engage à garantir la qualité 
            et l'excellence de nos programmes à travers des processus rigoureux 
            et une amélioration continue.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              className="bg-gray-50 rounded-xl p-6 text-center hover:shadow-card-hover transition-shadow"
            >
              <div className="w-12 h-12 bg-um6p-red/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <stat.icon className="w-6 h-6 text-um6p-red" />
              </div>
              <p className="text-3xl font-bold text-gray-900 mb-1">
                <Counter end={stat.value} suffix={stat.suffix} />
              </p>
              <p className="text-gray-600 text-sm">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Mission & Vision Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-um6p-navy rounded-2xl p-8 text-white"
          >
            <div className="w-14 h-14 bg-um6p-red rounded-xl flex items-center justify-center mb-6">
              <Target className="w-7 h-7" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Notre Mission</h3>
            <p className="text-gray-300 leading-relaxed">
              Établir et maintenir un système de management de la qualité robuste 
              qui assure l'excellence académique, favorise l'amélioration continue 
              et prépare l'université aux accréditations internationales les plus 
              prestigieuses.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="bg-um6p-red rounded-2xl p-8 text-white"
          >
            <div className="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center mb-6">
              <Eye className="w-7 h-7" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Notre Vision</h3>
            <p className="text-white/90 leading-relaxed">
              Devenir une référence régionale et internationale en matière d'assurance 
              qualité académique, reconnue pour l'excellence de nos processus et 
              la qualité de nos programmes de formation.
            </p>
          </motion.div>
        </div>

        {/* Objectives */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">
            Nos Objectifs Stratégiques
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {objectives.map((objective, index) => (
              <motion.div
                key={objective.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-card-hover transition-all hover:border-um6p-red/30"
              >
                <div className="w-10 h-10 bg-um6p-red text-white rounded-lg flex items-center justify-center font-bold mb-4">
                  {index + 1}
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">
                  {objective.title}
                </h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {objective.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
