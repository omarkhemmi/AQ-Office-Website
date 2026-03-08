import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { ArrowRight, Mail, Phone, MapPin } from 'lucide-react'
import { Button } from '@/components/ui/button'

type Page = 'home' | 'about' | 'team' | 'quality' | 'effectiveness' | 'accreditations' | 'services' | 'resources' | 'news' | 'contact'

interface CTASectionProps {
  onNavigate: (page: Page) => void
}

export default function CTASection({ onNavigate }: CTASectionProps) {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' })

  return (
    <section ref={sectionRef} className="relative py-24 overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: 'url(/images/campus-aerial.jpg)' }}
      />
      <div className="absolute inset-0 bg-um6p-red/90" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
              Comment Pouvons-Nous Vous Aider ?
            </h2>
            <p className="text-white/90 text-lg mb-8 leading-relaxed">
              Notre équipe est à votre disposition pour répondre à vos questions, 
              vous accompagner dans vos projets qualité et vous guider dans vos 
              démarches d'accréditation.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button
                onClick={() => onNavigate('contact')}
                className="bg-white text-um6p-red hover:bg-gray-100 px-8 py-6 text-base font-medium"
              >
                Contactez-nous
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button
                onClick={() => onNavigate('services')}
                variant="outline"
                className="border-white text-white hover:bg-white/10 px-8 py-6 text-base font-medium"
              >
                Découvrir nos services
              </Button>
            </div>
          </motion.div>

          {/* Right Content - Contact Cards */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-4"
          >
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 flex items-center space-x-4">
              <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                <Mail className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="text-white/70 text-sm">Email</p>
                <p className="text-white font-medium">quality@um6p.ma</p>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 flex items-center space-x-4">
              <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                <Phone className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="text-white/70 text-sm">Téléphone</p>
                <p className="text-white font-medium">+212 525 073 100</p>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 flex items-center space-x-4">
              <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="text-white/70 text-sm">Adresse</p>
                <p className="text-white font-medium">Campus UM6P, Benguerir, Maroc</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
