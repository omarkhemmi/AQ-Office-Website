import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { 
  ClipboardList, 
  FileText, 
  Award, 
  GraduationCap, 
  BarChart3, 
  ArrowRight 
} from 'lucide-react'
import { Button } from '@/components/ui/button'

type Page = 'home' | 'about' | 'team' | 'quality' | 'effectiveness' | 'accreditations' | 'services' | 'resources' | 'news' | 'contact'

interface ServicesProps {
  onNavigate: (page: Page) => void
}

const services = [
  {
    icon: ClipboardList,
    title: 'Enquêtes & Évaluations',
    description: 'Conception, lancement et analyse des enquêtes de satisfaction et d\'évaluation des programmes.',
    color: 'bg-blue-500',
  },
  {
    icon: FileText,
    title: 'Procédures Qualité',
    description: 'Développement et mise à jour des procédures et politiques qualité institutionnelles.',
    color: 'bg-green-500',
  },
  {
    icon: Award,
    title: 'Appui aux Accréditations',
    description: 'Accompagnement complet dans les démarches d\'accréditation nationale et internationale.',
    color: 'bg-um6p-red',
  },
  {
    icon: GraduationCap,
    title: 'Formations & Sensibilisation',
    description: 'Programmes de formation sur la qualité académique et les bonnes pratiques.',
    color: 'bg-purple-500',
  },
  {
    icon: BarChart3,
    title: 'Analyse & Reporting',
    description: 'Analyse des données qualité et production de rapports décisionnels.',
    color: 'bg-orange-500',
  },
]

export default function Services({ onNavigate }: ServicesProps) {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' })

  return (
    <section ref={sectionRef} className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-um6p-red font-medium text-sm tracking-wider uppercase">
            Nos Services
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-3 mb-4">
            Comment Pouvons-Nous Vous Aider ?
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Le Bureau Assurance Qualité offre un ensemble de services pour 
            accompagner les facultés et les programmes dans leur démarche qualité.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
              className="bg-white rounded-xl p-6 shadow-card hover:shadow-card-hover transition-all cursor-pointer group"
            >
              <div className={`w-14 h-14 ${service.color} rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform`}>
                <service.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-um6p-red transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                {service.description}
              </p>
              <div className="flex items-center text-um6p-red text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                En savoir plus
                <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
              </div>
            </motion.div>
          ))}

          {/* CTA Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="bg-um6p-navy rounded-xl p-6 flex flex-col justify-center items-center text-center"
          >
            <h3 className="text-xl font-semibold text-white mb-3">
              Besoin d'Assistance ?
            </h3>
            <p className="text-gray-400 text-sm mb-6">
              Notre équipe est à votre disposition pour répondre à vos questions 
              et vous accompagner dans vos projets qualité.
            </p>
            <Button
              onClick={() => onNavigate('contact')}
              className="bg-um6p-red hover:bg-um6p-red-dark text-white"
            >
              Contactez-nous
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </motion.div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="text-center"
        >
          <Button
            onClick={() => onNavigate('services')}
            variant="outline"
            className="border-um6p-red text-um6p-red hover:bg-um6p-red hover:text-white"
          >
            Voir tous nos services
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
