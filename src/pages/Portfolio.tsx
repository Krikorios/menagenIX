import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { ExternalLink, Github, Shield, Brain, Cloud, Settings, Award, Database } from 'lucide-react'
import { Link } from 'react-router-dom'

const Portfolio = () => {
  const [heroRef, heroInView] = useInView({ threshold: 0.1 })
  const [projectsRef, projectsInView] = useInView({ threshold: 0.1 })

  const projects = [
    {
      title: 'Baladiyat Lebanon',
      description: 'Comprehensive municipal management platform with AI-powered capabilities, serving Lebanese municipalities with complete digital transformation.',
      image: '/api/placeholder/600/400',
      tags: ['Full-Stack Development', 'AI Integration', 'Municipal Software', 'React', 'Node.js', 'PostgreSQL'],
      features: [
        '37 Municipal Forms - 100% Digital Coverage',
        'AI-Powered Multilingual Assistant',
        'Real-time Analytics Dashboard',
        'Multi-role Authentication System',
        'Arabic RTL Support'
      ],
      tech: ['React', 'TypeScript', 'Express.js', 'PostgreSQL', 'Drizzle ORM', 'Ollama AI'],
      category: 'Government Solutions',
      icon: Settings
    },
    {
      title: 'WWAPR AI Terminal',
      description: 'Advanced AI-powered terminal interface with Ollama integration, providing intelligent assistance and master-grade deployment guidance.',
      image: '/api/placeholder/600/400',
      tags: ['AI Development', 'Terminal Interface', 'DevOps Tools', 'TypeScript', 'Ollama'],
      features: [
        'Intelligent AI Integration with 45+ Models',
        'Context-aware Response Generation',
        'Professional Logging System',
        'Git Integration & State Management',
        'Master-grade Deployment Strategies'
      ],
      tech: ['TypeScript', 'Node.js', 'Ollama', 'Git API', 'Commander.js'],
      category: 'AI & Automation',
      icon: Brain
    },
    {
      title: 'DevForge AI Development Environment',
      description: 'AI-powered development environment built with Electron, featuring advanced tooling and intelligent code assistance.',
      image: '/api/placeholder/600/400',
      tags: ['Electron App', 'AI Development', 'IDE', 'React', 'Desktop Application'],
      features: [
        'AI-Powered Code Assistance',
        'Multi-platform Desktop Application',
        'Advanced Terminal Integration',
        'Real-time Collaboration Features',
        'Plugin Architecture'
      ],
      tech: ['Electron', 'React', 'TypeScript', 'OpenAI', 'Anthropic', 'SQLite'],
      category: 'Development Tools',
      icon: Cloud
    },
    {
      title: 'PersonalPulse Analytics Platform',
      description: 'Comprehensive personal analytics platform with advanced authentication, real-time data processing, and payment integration.',
      image: '/api/placeholder/600/400',
      tags: ['Analytics Platform', 'Real-time Data', 'Payment Integration', 'Authentication'],
      features: [
        'Advanced Authentication System',
        'Real-time Data Analytics',
        'Stripe Payment Integration',
        'Comprehensive User Management',
        'Performance Monitoring'
      ],
      tech: ['React', 'Node.js', 'PostgreSQL', 'Stripe', 'Redis', 'WebSockets'],
      category: 'Analytics & Data',
      icon: Database
    },
    {
      title: 'Enterprise Security Framework',
      description: 'Comprehensive cybersecurity framework implementing ISO 27001 standards with automated threat detection and response.',
      image: '/api/placeholder/600/400',
      tags: ['Cybersecurity', 'ISO 27001', 'Threat Detection', 'Compliance'],
      features: [
        'ISO 27001 Compliance Framework',
        'Automated Threat Detection',
        'Incident Response System',
        'Security Audit Tools',
        'Risk Management Dashboard'
      ],
      tech: ['Security Tools', 'SIEM', 'Python', 'Security APIs', 'Compliance Tools'],
      category: 'Cybersecurity',
      icon: Shield
    },
    {
      title: 'AI Video Generation Platform',
      description: 'Advanced video generation and editing platform with natural language processing and AI-powered automation.',
      image: '/api/placeholder/600/400',
      tags: ['AI Video Processing', 'Flask', 'Machine Learning', 'Automation'],
      features: [
        'Natural Language Video Commands',
        'AI-Powered Video Generation',
        'Real-time Progress Tracking',
        'Advanced Editing Capabilities',
        'Multi-format Support'
      ],
      tech: ['Python', 'Flask', 'TensorFlow', 'OpenCV', 'FFmpeg'],
      category: 'AI & Media',
      icon: Brain
    }
  ]

  const stats = [
    { number: '50+', label: 'Projects Completed' },
    { number: '25,000+', label: 'Lines of Code' },
    { number: '100%', label: 'Client Satisfaction' },
    { number: '6', label: 'Technology Domains' }
  ]

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section ref={heroRef} className="section gradient-bg text-white">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Our Project
              <span className="text-accent-400 block">Portfolio</span>
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8 leading-relaxed">
              Showcasing our expertise through real-world implementations across cybersecurity, 
              AI, DevOps, and enterprise solutions.
            </p>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16"
          >
            {stats.map((stat, index) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl md:text-4xl font-bold mb-2 text-accent-400">
                  {stat.number}
                </div>
                <div className="text-blue-100">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section ref={projectsRef} className="section bg-white">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={projectsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
              Featured Projects
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Each project demonstrates our commitment to excellence and innovation 
              across diverse technology domains.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                animate={projectsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="card overflow-hidden group hover:shadow-2xl transition-all duration-300"
              >
                {/* Project Image */}
                <div className="relative h-48 bg-gradient-to-br from-primary-500 to-secondary-600 overflow-hidden">
                  <div className="absolute inset-0 bg-black/20"></div>
                  <div className="absolute top-4 left-4 flex items-center space-x-2">
                    <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center backdrop-blur-sm">
                      <project.icon className="w-6 h-6 text-white" />
                    </div>
                    <span className="text-white font-medium">{project.category}</span>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-3 text-gray-900">{project.title}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{project.description}</p>

                  {/* Features */}
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold mb-3 text-gray-900">Key Features:</h4>
                    <ul className="space-y-2">
                      {project.features.slice(0, 3).map((feature) => (
                        <li key={feature} className="flex items-start space-x-2 text-sm text-gray-700">
                          <div className="w-1.5 h-1.5 bg-accent-500 rounded-full mt-2 flex-shrink-0"></div>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tech Stack */}
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold mb-3 text-gray-900">Technologies:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-gray-100 rounded-full text-xs font-medium text-gray-700"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex space-x-3">
                    <button className="flex-1 btn btn-primary text-sm">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      View Details
                    </button>
                    <button className="btn btn-secondary text-sm">
                      <Github className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section gradient-bg text-white">
        <div className="container">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Start Your Project?
            </h2>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              Let's collaborate to bring your vision to life with our proven expertise 
              and innovative approach to technology solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="btn bg-accent-500 text-white hover:bg-accent-600 text-lg px-8 py-4">
                Start Your Project
              </Link>
              <Link to="/services" className="btn bg-white/10 text-white border-2 border-white/30 hover:bg-white/20 text-lg px-8 py-4">
                Explore Services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Portfolio

