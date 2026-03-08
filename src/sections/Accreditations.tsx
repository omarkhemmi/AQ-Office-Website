import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { CheckCircle2, Clock, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

const accreditations = [
  {
    name: 'ABET',
    fullName: 'Accreditation Board for Engineering and Technology',
    description: 'Accréditation pour les programmes d\'ingénierie et de technologie.',
    status: 'in-progress',
    progress: 75,
    color: 'bg-blue-600',
  },
  {
    name: 'ISO 21001',
    fullName: 'Management Systems for Educational Organizations',
    description: 'Certification du système de management de l\'éducation.',
    status: 'in-progress',
    progress: 60,
    color: 'bg-green-600',
  },
  {
    name: 'AACSB',
    fullName: 'Association to Advance Collegiate Schools of Business',
    description: 'Accréditation pour les programmes de management et de business.',
    status: 'planned',
    progress: 30,
    color: 'bg-purple-600',
  },
  {
    name: 'EAQUALS',
    fullName: 'Evaluation and Accreditation of Quality Language Services',
    description: 'Accréditation pour les programmes de langues.',
    status: 'planned',
    progress: 20,
    color: 'bg-orange-500',
  },
]

export default function Accreditations() {
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
            Accréditations
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-3 mb-4">
            Nos Projets d'Accréditation
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            L'UM6P s'engage dans des démarches d'accréditation internationale 
            pour garantir la qualité et la reconnaissance de ses programmes.
          </p>
        </motion.div>

        {/* Accreditations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {accreditations.map((acc, index) => (
            <motion.div
              key={acc.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
              className="bg-gray-50 rounded-xl p-6 hover:shadow-card-hover transition-all group"
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <div className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium mb-3 ${
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
                        <CheckCircle2 className="w-3 h-3 mr-1" />
                        Planifié
                      </>
                    )}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">{acc.name}</h3>
                  <p className="text-gray-500 text-sm">{acc.fullName}</p>
                </div>
                <div className={`w-12 h-12 ${acc.color} rounded-lg flex items-center justify-center text-white font-bold`}>
                  {acc.name[0]}
                </div>
              </div>
              
              <p className="text-gray-600 text-sm mb-4">
                {acc.description}
              </p>

              {/* Progress Bar */}
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
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center"
        >
          <Button
            variant="outline"
            className="border-um6p-red text-um6p-red hover:bg-um6p-red hover:text-white"
          >
            Découvrir tous nos projets
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
