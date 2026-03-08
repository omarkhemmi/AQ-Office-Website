import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MessageCircle, Send, ChevronDown, Bot, User } from 'lucide-react'

interface Message {
  id: string
  type: 'user' | 'bot'
  content: string
  timestamp: Date
}

const quickQuestions = [
  'Qu\'est-ce que le Bureau Assurance Qualité ?',
  'Comment accéder aux rapports qualité ?',
  'Quelles sont les accréditations en cours ?',
  'Comment contacter l\'équipe AQ ?',
]

const botResponses: Record<string, string> = {
  'Qu\'est-ce que le Bureau Assurance Qualité ?': 
    'Le Bureau Assurance Qualité (BAQ) de l\'UM6P est chargé de promouvoir l\'excellence académique à travers la mise en place de cadres qualité, l\'accompagnement aux accréditations, et l\'amélioration continue des programmes.',
  'Comment accéder aux rapports qualité ?':
    'Vous pouvez accéder à tous nos rapports qualité, y compris le Rapport Annuel Qualité, dans la section Ressources de notre site web.',
  'Quelles sont les accréditations en cours ?':
    'L\'UM6P travaille actuellement sur plusieurs accréditations : ABET pour les programmes d\'ingénierie, ISO 21001 pour le management de l\'éducation, AACSB pour les programmes de management, et EAQUALS pour les langues.',
  'Comment contacter l\'équipe AQ ?':
    'Vous pouvez nous contacter via le formulaire dans la section Contact, par email à quality@um6p.ma, ou en demandant un rendez-vous directement sur notre site.',
}

const defaultResponse = 'Je suis désolé, je n\'ai pas compris votre question. Voici quelques sujets sur lesquels je peux vous aider : mission du BAQ, accréditations, rapports qualité, ou contact. N\'hésitez pas à utiliser les questions suggérées !'

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 'welcome',
      type: 'bot',
      content: 'Bonjour ! Je suis votre assistant virtuel du Bureau Assurance Qualité. Comment puis-je vous aider aujourd\'hui ?',
      timestamp: new Date(),
    },
  ])
  const [inputValue, setInputValue] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const handleSendMessage = (content: string) => {
    if (!content.trim()) return

    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      type: 'user',
      content,
      timestamp: new Date(),
    }
    setMessages((prev) => [...prev, userMessage])
    setInputValue('')
    setIsTyping(true)

    // Simulate bot response
    setTimeout(() => {
      const response = botResponses[content] || defaultResponse
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        type: 'bot',
        content: response,
        timestamp: new Date(),
      }
      setMessages((prev) => [...prev, botMessage])
      setIsTyping(false)
    }, 1500)
  }

  const handleQuickQuestion = (question: string) => {
    handleSendMessage(question)
  }

  return (
    <>
      {/* Chat Button */}
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsOpen(true)}
            className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-um6p-orange hover:bg-um6p-red text-white rounded-full shadow-lg flex items-center justify-center transition-colors"
          >
            <MessageCircle className="w-6 h-6" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="fixed bottom-6 right-6 z-50 w-[380px] max-w-[calc(100vw-48px)] bg-white rounded-2xl shadow-2xl overflow-hidden"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-um6p-orange to-um6p-red p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                    <Bot className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold">Assistant AQ</h3>
                    <p className="text-white/80 text-xs">En ligne</p>
                  </div>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-white/80 hover:text-white transition-colors"
                >
                  <ChevronDown className="w-6 h-6" />
                </button>
              </div>
            </div>

            {/* Messages */}
            <div className="h-[320px] overflow-y-auto p-4 space-y-4 bg-gray-50">
              {messages.map((message) => (
                <motion.div
                  key={message.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[80%] flex items-start space-x-2 ${
                      message.type === 'user' ? 'flex-row-reverse space-x-reverse' : ''
                    }`}
                  >
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                        message.type === 'user'
                          ? 'bg-um6p-red'
                          : 'bg-um6p-orange'
                      }`}
                    >
                      {message.type === 'user' ? (
                        <User className="w-4 h-4 text-white" />
                      ) : (
                        <Bot className="w-4 h-4 text-white" />
                      )}
                    </div>
                    <div
                      className={`p-3 rounded-2xl text-sm ${
                        message.type === 'user'
                          ? 'bg-um6p-red text-white rounded-br-none'
                          : 'bg-white text-gray-800 shadow-sm rounded-bl-none'
                      }`}
                    >
                      {message.content}
                    </div>
                  </div>
                </motion.div>
              ))}
              
              {isTyping && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex justify-start"
                >
                  <div className="flex items-center space-x-2">
                    <div className="w-8 h-8 rounded-full bg-um6p-orange flex items-center justify-center">
                      <Bot className="w-4 h-4 text-white" />
                    </div>
                    <div className="bg-white p-3 rounded-2xl rounded-bl-none shadow-sm">
                      <div className="flex space-x-1">
                        <motion.div
                          animate={{ y: [0, -4, 0] }}
                          transition={{ repeat: Infinity, duration: 0.5, delay: 0 }}
                          className="w-2 h-2 bg-gray-400 rounded-full"
                        />
                        <motion.div
                          animate={{ y: [0, -4, 0] }}
                          transition={{ repeat: Infinity, duration: 0.5, delay: 0.15 }}
                          className="w-2 h-2 bg-gray-400 rounded-full"
                        />
                        <motion.div
                          animate={{ y: [0, -4, 0] }}
                          transition={{ repeat: Infinity, duration: 0.5, delay: 0.3 }}
                          className="w-2 h-2 bg-gray-400 rounded-full"
                        />
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Quick Questions */}
            {messages.length < 3 && (
              <div className="px-4 py-2 bg-gray-50 border-t">
                <p className="text-xs text-gray-500 mb-2">Questions suggérées :</p>
                <div className="flex flex-wrap gap-2">
                  {quickQuestions.map((question) => (
                    <button
                      key={question}
                      onClick={() => handleQuickQuestion(question)}
                      className="text-xs bg-white border border-gray-200 text-gray-700 px-3 py-1.5 rounded-full hover:bg-um6p-red hover:text-white hover:border-um6p-red transition-colors"
                    >
                      {question}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Input */}
            <div className="p-4 bg-white border-t">
              <div className="flex items-center space-x-2">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSendMessage(inputValue)}
                  placeholder="Écrivez votre message..."
                  className="flex-1 px-4 py-2 border border-gray-200 rounded-full text-sm focus:outline-none focus:border-um6p-red focus:ring-1 focus:ring-um6p-red"
                />
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => handleSendMessage(inputValue)}
                  disabled={!inputValue.trim()}
                  className="w-10 h-10 bg-um6p-red text-white rounded-full flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  <Send className="w-4 h-4" />
                </motion.button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
