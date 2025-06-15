import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { 
  Shield, 
  Brain, 
  Cloud, 
  Settings, 
  Award, 
  Phone, 
  CheckCircle, 
  ArrowRight,
  Zap,
  Lock,
  Cpu,
  Database,
  GitBranch,
  Monitor,
  Sparkles,
  Star,
  Globe,
  Network
} from 'lucide-react'
import { Link } from 'react-router-dom'
import ArabicPattern from '../components/ArabicPattern'

const Home = () => {
  const [heroRef, heroInView] = useInView({ threshold: 0.1 })
  const [servicesRef, servicesInView] = useInView({ threshold: 0.1 })
  const [statsRef, statsInView] = useInView({ threshold: 0.1 })
  const [ctaRef, ctaInView] = useInView({ threshold: 0.1 })

  const services = [
    {
      icon: Shield,
      title: 'Cybersecurity Solutions',
      titleAr: 'حلول الأمن السيبراني',
      description: 'Comprehensive security frameworks powered by AI threat detection and automated incident response to protect your digital assets in the evolving cyber landscape.',
      features: ['AI Threat Detection', 'Automated Security Audits', 'Smart Incident Response', 'ISO 27001 Compliance'],
      color: 'text-arabic-crimson',
      gradient: 'from-red-500 to-arabic-crimson'
    },
    {
      icon: Brain,
      title: 'AI Implementation',
      titleAr: 'تطبيق الذكاء الاصطناعي',
      description: 'Next-generation AI solutions including advanced machine learning models, intelligent automation, and predictive analytics that evolve with your business.',
      features: ['Neural Networks', 'Intelligent Automation', 'Predictive Analytics', 'Arabic NLP Processing'],
      color: 'text-secondary-600',
      gradient: 'from-secondary-500 to-accent-500'
    },
    {
      icon: Cloud,
      title: 'DevOps & Cloud Services',
      titleAr: 'خدمات التطوير والسحابة',
      description: 'AI-enhanced development pipelines, intelligent cloud infrastructure, and automated deployment solutions for scalable digital transformation.',
      features: ['Smart CI/CD Pipelines', 'AI-Driven Infrastructure', 'Auto-Scaling Solutions', 'Intelligent Monitoring'],
      color: 'text-arabic-sky',
      gradient: 'from-blue-500 to-arabic-sky'
    },
    {
      icon: Settings,
      title: 'IT Support & Infrastructure',
      titleAr: 'الدعم التقني والبنية التحتية',
      description: 'AI-powered IT support with predictive maintenance, intelligent system administration, and proactive infrastructure management.',
      features: ['24/7 AI Support', 'Predictive Maintenance', 'Smart Network Management', 'Automated Solutions'],
      color: 'text-accent-600',
      gradient: 'from-accent-500 to-arabic-oasis'
    },
    {
      icon: Award,
      title: 'ISO 27001 Compliance',
      titleAr: 'امتثال الايزو 27001',
      description: 'AI-assisted information security management systems with automated compliance monitoring and intelligent risk assessment.',
      features: ['AI Risk Assessment', 'Automated Policy Generation', 'Smart Implementation', 'Intelligent Audit Prep'],
      color: 'text-arabic-gold',
      gradient: 'from-arabic-gold to-arabic-desert'
    },
    {
      icon: Database,
      title: 'Data Management & Analytics',
      titleAr: 'إدارة البيانات والتحليلات',
      description: 'AI-powered data architecture with intelligent optimization, machine learning analytics, and automated insights generation.',
      features: ['AI Database Optimization', 'Intelligent Analytics', 'Automated Insights', 'Predictive Modeling'],
      color: 'text-arabic-turquoise',
      gradient: 'from-cyan-500 to-arabic-turquoise'
    }
  ]

  const stats = [
    { number: '50+', label: 'AI-Enhanced Projects', labelAr: 'مشاريع معززة بالذكاء الاصطناعي' },
    { number: '99.9%', label: 'AI Uptime Guaranteed', labelAr: 'وقت تشغيل مضمون' },
    { number: '24/7', label: 'AI-Powered Support', labelAr: 'دعم مدعوم بالذكاء الاصطناعي' },
    { number: '100%', label: 'Digital Transformation', labelAr: 'التحول الرقمي الكامل' }
  ]

  const technologies = [
    'React', 'TypeScript', 'Node.js', 'Python', 'PostgreSQL', 'Docker', 
    'Kubernetes', 'AWS', 'Azure', 'Terraform', 'Ansible', 'Ollama',
    'TensorFlow', 'PyTorch', 'OpenAI', 'LangChain', 'Redis', 'MongoDB'
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section ref={heroRef} className="gradient-bg min-h-screen flex items-center justify-center relative overflow-hidden">
        {/* Arabic Pattern Background */}
        <ArabicPattern className="opacity-30" />
        
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/10 to-black/20"></div>
        
        {/* AI Circuit Pattern */}
        <div className="absolute inset-0 ai-circuit opacity-20"></div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 1 }}
            className="text-center text-white"
          >
            {/* Arabic Greeting */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={heroInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="mb-6"
            >
              <span className="text-arabic text-xl md:text-2xl text-arabic-gold/80 font-light tracking-wide">
                مرحباً بكم في عصر جديد من التكنولوجيا
              </span>
            </motion.div>
            
            <motion.h1 
              className="text-5xl md:text-7xl font-bold mb-8 leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <span className="heading-arabic block mb-2">
                Enterprise Technology
              </span>
              <span className="gradient-text-ai text-6xl md:text-8xl">
                AI EVOLVED
              </span>
              <br />
              <span className="text-accent-400 text-4xl md:text-6xl">
                Solutions
              </span>
            </motion.h1>
            
            <motion.p 
              className="text-xl md:text-2xl mb-10 text-blue-100 max-w-4xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              Menagenix pioneers the fusion of <span className="text-arabic-gold font-semibold">Arabic excellence</span> with 
              <span className="text-ai gradient-text-ai"> AI innovation</span>, delivering next-generation 
              cybersecurity, intelligent automation, and digital transformation solutions.
            </motion.p>
            
            {/* AI Evolution Indicator */}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={heroInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex items-center justify-center space-x-3 mb-8"
            >
              <div className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-secondary-600/20 to-accent-600/20 rounded-full border border-secondary-400/30 backdrop-blur-sm">
                <Network className="w-5 h-5 text-secondary-400 animate-pulse" />
                <span className="text-ai text-sm font-medium">POWERED BY NEURAL INTELLIGENCE</span>
                <Sparkles className="w-4 h-4 text-accent-400 animate-bounce" />
              </div>
            </motion.div>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-6 justify-center items-center"
              initial={{ opacity: 0, y: 30 }}
              animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              <Link to="/contact" className="btn btn-primary text-lg px-10 py-5 group relative overflow-hidden">
                <span className="relative z-10 flex items-center">
                  <span className="text-arabic mr-2">ابدأ رحلتك</span>
                  <span className="mx-2">•</span>
                  Start Your Journey
                  <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
              </Link>
              
              <Link to="/services" className="btn btn-outline text-lg px-10 py-5 group">
                <span className="flex items-center">
                  <Brain className="w-5 h-5 mr-3 group-hover:rotate-12 transition-transform" />
                  Explore AI Solutions
                </span>
              </Link>
            </motion.div>
          </motion.div>
        </div>
        
        {/* Floating AI Elements */}
        <div className="absolute top-20 left-10 opacity-30">
          <motion.div
            animate={{ 
              y: [-15, 15, -15],
              rotate: [0, 180, 360],
              scale: [1, 1.1, 1]
            }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          >
            <div className="w-20 h-20 bg-gradient-to-r from-arabic-gold to-accent-500 rounded-full flex items-center justify-center glow-gold">
              <Shield className="w-10 h-10 text-white" />
            </div>
          </motion.div>
        </div>
        
        <div className="absolute bottom-20 right-10 opacity-25">
          <motion.div
            animate={{ 
              y: [15, -15, 15],
              rotate: [360, 180, 0],
              scale: [1, 0.9, 1]
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          >
            <div className="w-24 h-24 bg-gradient-to-r from-secondary-500 to-accent-500 rounded-full flex items-center justify-center neural-network">
              <Brain className="w-12 h-12 text-white" />
            </div>
          </motion.div>
        </div>
        
        {/* AI Neural Network Nodes */}
        <div className="absolute top-1/3 right-1/4 opacity-20">
          <motion.div
            animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.6, 0.2] }}
            transition={{ duration: 4, repeat: Infinity, delay: 1 }}
          >
            <div className="w-12 h-12 bg-accent-400 rounded-full glow-green" />
          </motion.div>
        </div>
        
        <div className="absolute bottom-1/3 left-1/4 opacity-20">
          <motion.div
            animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.5, 0.2] }}
            transition={{ duration: 5, repeat: Infinity, delay: 2 }}
          >
            <div className="w-8 h-8 bg-secondary-400 rounded-full glow-blue" />
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section ref={servicesRef} className="section bg-white">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={servicesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16 relative"
          >
            {/* Arabic Pattern Background */}
            <div className="absolute inset-0 geometric-pattern opacity-5"></div>
            
            <div className="relative z-10">
              <div className="mb-4">
                <span className="text-arabic text-lg text-arabic-gold/70 font-light tracking-wide">
                  خبرتنا التقنية المتقدمة
                </span>
              </div>
              
              <h2 className="text-4xl md:text-5xl font-bold mb-6 heading-arabic">
                <span className="gradient-text">Our AI-Powered</span>
                <br />
                <span className="gradient-text-ai">Expertise</span>
              </h2>
              
              <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                Comprehensive technology solutions powered by <span className="text-ai font-semibold">artificial intelligence</span> and 
                backed by years of experience across <span className="text-arabic-gold font-semibold">multiple domains</span>.
              </p>
              
              {/* AI Evolution Timeline */}
              <div className="flex items-center justify-center space-x-4 mt-8">
                <div className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-secondary-50 to-accent-50 rounded-full border border-secondary-200">
                  <Brain className="w-4 h-4 text-secondary-600" />
                  <span className="text-sm text-ai font-medium">NEURAL ENHANCED</span>
                </div>
                <div className="w-2 h-2 bg-arabic-gold rounded-full animate-pulse"></div>
                <div className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-accent-50 to-primary-50 rounded-full border border-accent-200">
                  <Zap className="w-4 h-4 text-accent-600" />
                  <span className="text-sm text-ai font-medium">AUTO ADAPTIVE</span>
                </div>
              </div>
            </div>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                animate={servicesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="card-arabic p-8 group hover:shadow-2xl hover:glow-gold transition-all duration-500 relative overflow-hidden"
              >
                {/* Arabic geometric decoration */}
                <div className="absolute top-0 right-0 w-20 h-20 opacity-10">
                  <svg viewBox="0 0 80 80" className="w-full h-full">
                    <path d="M40 10 L50 30 L70 30 L55 45 L60 65 L40 55 L20 65 L25 45 L10 30 L30 30 Z" 
                          fill="currentColor" className={service.color} />
                  </svg>
                </div>
                
                {/* Icon with gradient background */}
                <div className="relative mb-6">
                  <div className={`w-20 h-20 rounded-arabic bg-gradient-to-br ${service.gradient} flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg`}>
                    <service.icon className="w-10 h-10 text-white" />
                    {/* AI sparkle */}
                    <motion.div
                      className="absolute -top-1 -right-1 w-4 h-4 bg-accent-400 rounded-full flex items-center justify-center"
                      animate={{ scale: [1, 1.2, 1], rotate: [0, 180, 360] }}
                      transition={{ duration: 3, repeat: Infinity, delay: index * 0.5 }}
                    >
                      <Sparkles className="w-2 h-2 text-white" />
                    </motion.div>
                  </div>
                </div>
                
                {/* Title with Arabic */}
                <div className="mb-4 arabic-decoration">
                  <h3 className="text-xl font-bold text-gray-900 heading-arabic mb-1">{service.title}</h3>
                  <p className="text-sm text-arabic text-arabic-gold/70 font-light">{service.titleAr}</p>
                </div>
                
                <p className="text-gray-600 mb-6 leading-relaxed text-sm">{service.description}</p>
                
                {/* AI-enhanced features */}
                <ul className="space-y-3">
                  {service.features.map((feature, featureIndex) => (
                    <motion.li 
                      key={feature} 
                      className="flex items-center space-x-3 text-sm text-gray-700"
                      initial={{ opacity: 0, x: -10 }}
                      animate={servicesInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                      transition={{ duration: 0.5, delay: (index * 0.1) + (featureIndex * 0.1) }}
                    >
                      <div className="w-5 h-5 rounded-full bg-gradient-to-r from-accent-400 to-accent-600 flex items-center justify-center flex-shrink-0">
                        <CheckCircle className="w-3 h-3 text-white" />
                      </div>
                      <span className="group-hover:text-gray-900 transition-colors">{feature}</span>
                    </motion.li>
                  ))}
                </ul>
                
                {/* AI indicator */}
                <div className="mt-6 pt-4 border-t border-gray-100">
                  <div className="flex items-center space-x-2 text-xs text-secondary-600">
                    <Network className="w-3 h-3 animate-pulse" />
                    <span className="text-ai font-medium">AI ENHANCED</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section ref={statsRef} className="section gradient-bg">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={statsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={statsInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className=""
              >
                <div className="text-4xl md:text-5xl font-bold mb-2 text-accent-400">
                  {stat.number}
                </div>
                <div className="text-lg text-blue-100">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="section bg-gray-50">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
              Technologies We Master
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our expertise spans across modern technologies and frameworks, 
              ensuring we deliver cutting-edge solutions.
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4">
            {technologies.map((tech, index) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="px-6 py-3 bg-white rounded-full text-gray-700 font-medium shadow-md hover:shadow-lg transition-shadow duration-200 border border-gray-200"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section ref={ctaRef} className="section bg-secondary-900 text-white">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={ctaInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Let's discuss how Menagenix can accelerate your digital transformation 
              with our comprehensive technology solutions and expert consulting.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="btn bg-accent-500 text-white hover:bg-accent-600 text-lg px-8 py-4">
                <Phone className="w-5 h-5 mr-2" />
                Schedule Consultation
              </Link>
              <Link to="/portfolio" className="btn bg-white/10 text-white border-2 border-white/30 hover:bg-white/20 text-lg px-8 py-4">
                View Our Work
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Home

