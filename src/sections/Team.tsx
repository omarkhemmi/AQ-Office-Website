import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Mail, Linkedin, Award, BookOpen, BarChart3 } from 'lucide-react'

const teamMembers = [
  {
    name: 'M.BOUABID Ali',
    role: 'Progras Lead du l institut des Sciences de l Education (ISE) , Academic Quality',
    expertise: ['Management Qualité', 'Accréditations', 'Gouvernance'],
    email: 'ali.bouabid@um6p.ma',
    image: '/images/team.png',
  },
  {
    name: 'Mme. SKALLI Dounia',
    role: 'Program manager',
    expertise: ['ABET', 'ISO 21001', 'Évaluation Programmes'],
    email: 'dounia.skalli@um6p.ma',
    image: '/images/team.png',
  },
  {
    name: 'Mme. ALAMI KASRI Meryem',
    role: 'Analyste Données & Reporting',
    expertise: ['Analytics', 'Tableaux de Bord', 'Enquêtes'],
    email: 'meryem.alami@um6p.ma',
    image: '/images/team.png',
  },
  {
    name: 'M. KHEMMI Omar',
    role: 'Chargé de Formation & Sensibilisation',
    expertise: ['Formation', 'Documentation', 'Processus'],
    email: 'k.idrissi@um6p.ma',
    image: '/images/team.png',
  },
]

export default function Team() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' })

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
              Notre Équipe
            </h1>
            <p className="text-white/80 text-lg max-w-2xl mx-auto">
              Les experts derrière l'excellence académique de l'UM6P
            </p>
          </motion.div>
        </div>
      </section>

      {/* Organizational Chart */}
      <section ref={sectionRef} className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <span className="text-um6p-red font-medium text-sm tracking-wider uppercase">
              Structure
            </span>
            <h2 className="text-3xl font-bold text-gray-900 mt-3">
              Organigramme du Bureau AQ
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-gray-50 rounded-2xl p-8 mb-16"
          >
            <div className="aspect-video bg-white rounded-xl overflow-hidden shadow-card flex items-center justify-center">
              <div className="text-center p-8">
                <div className="w-20 h-20 bg-um6p-red/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-10 h-10 text-um6p-red" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Organigramme du Bureau Assurance Qualité
                </h3>
                <p className="text-gray-600 mb-4">
                  Structure organisationnelle et hiérarchie du Bureau AQ
                </p>
                <img 
                  src="/images/team.png" 
                  alt="Organigramme"
                  className="max-w-full max-h-64 object-contain mx-auto rounded-lg"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Team Members */}
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
              Membres
            </span>
            <h2 className="text-3xl font-bold text-gray-900 mt-3">
              L'Équipe de Qualité Office
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl overflow-hidden shadow-card hover:shadow-card-hover transition-all group"
              >
                <div className="aspect-square overflow-hidden bg-gray-100">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">
                    {member.name}
                  </h3>
                  <p className="text-um6p-red text-sm font-medium mb-3">
                    {member.role}
                  </p>
                  
                  <div className="mb-4">
                    <p className="text-xs text-gray-500 mb-2">Expertise :</p>
                    <div className="flex flex-wrap gap-1">
                      {member.expertise.map((skill) => (
                        <span 
                          key={skill}
                          className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center space-x-3 pt-4 border-t">
                    <a 
                      href={`mailto:${member.email}`}
                      className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-um6p-red hover:text-white transition-colors"
                    >
                      <Mail className="w-4 h-4" />
                    </a>
                    <a 
                      href="#"
                      className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-um6p-red hover:text-white transition-colors"
                    >
                      <Linkedin className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
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
              Valeurs
            </span>
            <h2 className="text-3xl font-bold text-gray-900 mt-3">
              Nos Valeurs Fondamentales
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-um6p-red/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-um6p-red" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Excellence</h3>
              <p className="text-gray-600">
                Nous visons l'excellence dans tous nos processus et nos livrables.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-um6p-red/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen className="w-8 h-8 text-um6p-red" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Transparence</h3>
              <p className="text-gray-600">
                Nous agissons avec intégrité et transparence dans toutes nos démarches.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-um6p-red/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <BarChart3 className="w-8 h-8 text-um6p-red" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Innovation</h3>
              <p className="text-gray-600">
                Nous adoptons des approches innovantes pour l'amélioration continue.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}
