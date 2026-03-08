import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'
import { 
  BarChart3, 
  TrendingUp, 
  Users, 
  GraduationCap, 
  Star,
  Monitor,
  PieChart,
  LineChart
} from 'lucide-react'
import { 
  LineChart as ReLineChart, 
  Line, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  PieChart as RePieChart,
  Pie,
  Cell,
  Legend
} from 'recharts'

interface CounterProps {
  end: number
  suffix?: string
  prefix?: string
  duration?: number
}

function Counter({ end, suffix = '', prefix = '', duration = 2000 }: CounterProps) {
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

  return <span ref={ref}>{prefix}{count}{suffix}</span>
}

const kpis = [
  {
    icon: Users,
    value: 95,
    suffix: '%',
    label: 'Satisfaction Étudiants',
    description: 'Taux de satisfaction global',
    trend: '+3%',
    trendUp: true,
  },
  {
    icon: GraduationCap,
    value: 88,
    suffix: '%',
    label: 'Taux de Diplomation',
    description: 'Dans les délais prévus',
    trend: '+5%',
    trendUp: true,
  },
  {
    icon: TrendingUp,
    value: 92,
    suffix: '%',
    label: 'Insertion Professionnelle',
    description: 'Dans les 6 mois',
    trend: '+4%',
    trendUp: true,
  },
  {
    icon: Star,
    value: 4,
    suffix: '.2',
    label: 'Note Moyenne',
    description: 'Évaluation des enseignements',
    trend: '+0.3',
    trendUp: true,
  },
]

// Data for line chart - Student Satisfaction Evolution
const satisfactionData = [
  { year: '2021', satisfaction: 82 },
  { year: '2022', satisfaction: 86 },
  { year: '2023', satisfaction: 89 },
  { year: '2024', satisfaction: 92 },
  { year: '2025', satisfaction: 95 },
]

// Data for pie chart - Faculty Distribution
const facultyData = [
  { name: 'Sciences & Technologies', value: 35, color: '#D13B2C' },
  { name: 'Management', value: 25, color: '#1A1A2E' },
  { name: 'Sciences Humaines', value: 20, color: '#E67E22' },
  { name: 'Médecine & Santé', value: 15, color: '#27AE60' },
  { name: 'Agriculture', value: 5, color: '#9B59B6' },
]

const digitalTools = [
  {
    name: 'Canvas Analytics',
    description: 'Analyse des données d\'apprentissage sur la plateforme LMS',
    icon: Monitor,
    color: 'bg-blue-500',
  },
  {
    name: 'Survey Platform',
    description: 'Outils d\'enquête et de collecte de feedback',
    icon: PieChart,
    color: 'bg-green-500',
  },
  {
    name: 'Dashboard Qualité',
    description: 'Visualisation des indicateurs de performance',
    icon: BarChart3,
    color: 'bg-um6p-red',
  },
  {
    name: 'Reporting Tools',
    description: 'Génération automatique de rapports',
    icon: LineChart,
    color: 'bg-purple-500',
  },
]

export default function Effectiveness() {
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
              Efficacité Institutionnelle
            </h1>
            <p className="text-white/80 text-lg max-w-2xl mx-auto">
              Données, indicateurs et outils pour une prise de décision éclairée
            </p>
          </motion.div>
        </div>
      </section>

      {/* KPIs Dashboard */}
      <section ref={sectionRef} className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <span className="text-um6p-red font-medium text-sm tracking-wider uppercase">
              Tableaux de Bord
            </span>
            <h2 className="text-3xl font-bold text-gray-900 mt-3">
              Indicateurs Clés de Performance
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {kpis.map((kpi, index) => (
              <motion.div
                key={kpi.label}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
                className="bg-gray-50 rounded-xl p-6 hover:shadow-card-hover transition-shadow"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-um6p-red/10 rounded-lg flex items-center justify-center">
                    <kpi.icon className="w-6 h-6 text-um6p-red" />
                  </div>
                  <div className={`flex items-center text-sm font-medium ${
                    kpi.trendUp ? 'text-green-600' : 'text-red-600'
                  }`}>
                    <TrendingUp className="w-4 h-4 mr-1" />
                    {kpi.trend}
                  </div>
                </div>
                <p className="text-3xl font-bold text-gray-900 mb-1">
                  <Counter end={kpi.value} suffix={kpi.suffix} />
                </p>
                <p className="font-medium text-gray-900 mb-1">{kpi.label}</p>
                <p className="text-gray-500 text-sm">{kpi.description}</p>
              </motion.div>
            ))}
          </div>

          {/* REAL CHARTS */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-6"
          >
            {/* Line Chart - Student Satisfaction Evolution */}
            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Évolution de la Satisfaction Étudiants
              </h3>
              <div className="aspect-video bg-white rounded-lg p-4">
                <ResponsiveContainer width="100%" height="100%">
                  <ReLineChart data={satisfactionData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                    <XAxis 
                      dataKey="year" 
                      stroke="#6b7280"
                      fontSize={12}
                    />
                    <YAxis 
                      stroke="#6b7280"
                      fontSize={12}
                      domain={[75, 100]}
                      tickFormatter={(value) => `${value}%`}
                    />
                    <Tooltip 
                      contentStyle={{ 
                        backgroundColor: '#fff', 
                        border: '1px solid #e5e7eb',
                        borderRadius: '8px',
                        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
                      }}
                      formatter={(value: number) => [`${value}%`, 'Satisfaction']}
                    />
                    <Line 
                      type="monotone" 
                      dataKey="satisfaction" 
                      stroke="#D13B2C" 
                      strokeWidth={3}
                      dot={{ fill: '#D13B2C', strokeWidth: 2, r: 6 }}
                      activeDot={{ r: 8, fill: '#D13B2C' }}
                    />
                  </ReLineChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Pie Chart - Faculty Distribution */}
            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Répartition par Faculté
              </h3>
              <div className="aspect-video bg-white rounded-lg p-4">
                <ResponsiveContainer width="100%" height="100%">
                  <RePieChart>
                    <Pie
                      data={facultyData}
                      cx="50%"
                      cy="50%"
                      innerRadius={60}
                      outerRadius={100}
                      paddingAngle={2}
                      dataKey="value"
                    >
                      {facultyData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip 
                      contentStyle={{ 
                        backgroundColor: '#fff', 
                        border: '1px solid #e5e7eb',
                        borderRadius: '8px',
                        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
                      }}
                      formatter={(value: number, name: string) => [`${value}%`, name]}
                    />
                    <Legend 
                      verticalAlign="bottom" 
                      height={36}
                      iconType="circle"
                      wrapperStyle={{ fontSize: '12px' }}
                    />
                  </RePieChart>
                </ResponsiveContainer>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Student Course Evaluation */}
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
              Évaluation
            </span>
            <h2 className="text-3xl font-bold text-gray-900 mt-3">
              Évaluation des Cours par les Étudiants
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0 }}
              className="lg:col-span-2 bg-white rounded-xl p-6 shadow-card"
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Résultats du Semestre en Cours
              </h3>
              <div className="space-y-4">
                {[
                  { label: 'Qualité des contenus', score: 4.3 },
                  { label: 'Pédagogie', score: 4.5 },
                  { label: 'Interaction', score: 4.1 },
                  { label: 'Ressources', score: 4.4 },
                  { label: 'Organisation', score: 4.2 },
                ].map((item) => (
                  <div key={item.label}>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-gray-700">{item.label}</span>
                      <span className="font-medium text-gray-900">{item.score}/5</span>
                    </div>
                    <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${(item.score / 5) * 100}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.3 }}
                        className="h-full bg-um6p-red rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="space-y-4"
            >
              <div className="bg-um6p-red text-white rounded-xl p-6">
                <p className="text-4xl font-bold mb-2">12,450</p>
                <p className="text-white/80">Évaluations collectées</p>
              </div>
              <div className="bg-um6p-navy text-white rounded-xl p-6">
                <p className="text-4xl font-bold mb-2">87%</p>
                <p className="text-white/80">Taux de participation</p>
              </div>
              <div className="bg-green-600 text-white rounded-xl p-6">
                <p className="text-4xl font-bold mb-2">4.3</p>
                <p className="text-white/80">Note moyenne globale</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Digital Tools */}
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
              Outils Numériques
            </span>
            <h2 className="text-3xl font-bold text-gray-900 mt-3">
              Plateformes et Outils d'Analyse
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {digitalTools.map((tool, index) => (
              <motion.div
                key={tool.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gray-50 rounded-xl p-6 hover:shadow-card-hover transition-all group"
              >
                <div className={`w-14 h-14 ${tool.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <tool.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {tool.name}
                </h3>
                <p className="text-gray-600 text-sm">
                  {tool.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
