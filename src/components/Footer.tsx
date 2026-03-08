import { motion } from 'framer-motion'
import { Facebook, Instagram, Linkedin, Twitter, Youtube, ArrowUp } from 'lucide-react'

type Page = 'home' | 'about' | 'team' | 'quality' | 'effectiveness' | 'accreditations' | 'services' | 'resources' | 'news' | 'contact'

interface FooterProps {
  onNavigate: (page: Page) => void
}

const footerLinks = {
  about: [
    { label: 'À propos de l\'AQ', page: 'about' as Page },
    { label: 'Notre équipe', page: 'team' as Page },
    { label: 'Gouvernance', page: 'about' as Page },
  ],
  services: [
    { label: 'Cadre qualité', page: 'quality' as Page },
    { label: 'Accréditations', page: 'accreditations' as Page },
    { label: 'Services', page: 'services' as Page },
    { label: 'Ressources', page: 'resources' as Page },
  ],
  media: [
    { label: 'Actualités', page: 'news' as Page },
    { label: 'Événements', page: 'news' as Page },
    { label: 'Publications', page: 'resources' as Page },
  ],
  contact: [
    { label: 'Nous contacter', page: 'contact' as Page },
    { label: 'Demander un rendez-vous', page: 'contact' as Page },
  ],
}

const socialLinks = [
  { icon: Facebook, href: '#', label: 'Facebook' },
  { icon: Instagram, href: '#', label: 'Instagram' },
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Youtube, href: '#', label: 'YouTube' },
]

export default function Footer({ onNavigate }: FooterProps) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="bg-um6p-navy text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Logo & Description */}
          <div className="lg:col-span-1">
            <motion.button
              onClick={() => onNavigate('home')}
              className="flex items-center space-x-3 mb-4"
              whileHover={{ scale: 1.02 }}
            >
              <img 
                src="/images/logo.jpg" 
                alt="UM6P Academic Quality Office" 
                className="h-14 w-auto"
              />
            </motion.button>
            <p className="text-gray-400 text-sm leading-relaxed">
              Promouvoir l'excellence académique par la qualité, la donnée et l'amélioration continue.
            </p>
          </div>

          {/* About Links */}
          <div>
            <h3 className="text-um6p-red font-semibold mb-4">À propos de nous</h3>
            <ul className="space-y-2">
              {footerLinks.about.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => onNavigate(link.page)}
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h3 className="text-um6p-red font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => onNavigate(link.page)}
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Media Links */}
          <div>
            <h3 className="text-um6p-red font-semibold mb-4">Médias</h3>
            <ul className="space-y-2">
              {footerLinks.media.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => onNavigate(link.page)}
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Links */}
          <div>
            <h3 className="text-um6p-red font-semibold mb-4">Contact</h3>
            <ul className="space-y-2">
              {footerLinks.contact.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => onNavigate(link.page)}
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            {/* Copyright */}
            <div className="flex items-center space-x-4">
              <span className="text-gray-400 text-sm">
                © 2026 Université Mohammed VI Polytechnique
              </span>
              <span className="hidden md:inline text-gray-600">|</span>
              <span className="hidden md:inline text-gray-400 text-sm">
                Bureau Assurance Qualité
              </span>
            </div>

            {/* Social Links */}
            <div className="flex items-center space-x-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="text-gray-400 hover:text-white transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>

            {/* Legal Links */}
            <div className="flex items-center space-x-4 text-sm">
              <button className="text-gray-400 hover:text-white transition-colors">
                Confidentialité
              </button>
              <button className="text-gray-400 hover:text-white transition-colors">
                Accessibilité
              </button>
              <button className="text-gray-400 hover:text-white transition-colors">
                Mentions légales
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <motion.button
        onClick={scrollToTop}
        className="fixed bottom-24 right-6 z-30 w-12 h-12 bg-um6p-red hover:bg-um6p-red-dark text-white rounded-full shadow-lg flex items-center justify-center transition-colors"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <ArrowUp className="w-5 h-5" />
      </motion.button>
    </footer>
  )
}
