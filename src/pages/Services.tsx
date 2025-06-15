import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { 
  Shield, 
  Brain, 
  Cloud, 
  Settings, 
  Award, 
  Database,
  CheckCircle,
  ArrowRight,
  Zap,
  Lock,
  Monitor,
  Users,
  Clock,
  TrendingUp
} from 'lucide-react'
import { Link } from 'react-router-dom'

const Services = () => {
  const [heroRef, heroInView] = useInView({ threshold: 0.1 })
  const [servicesRef, servicesInView] = useInView({ threshold: 0.1 })
  const [processRef, processInView] = useInView({ threshold: 0.1 })

  const services = [
    {
      icon: Shield,
      title: 'Cybersecurity Solutions',
      description: 'Comprehensive security frameworks designed to protect your organization from evolving threats.',
      features: [
        'Vulnerability Assessment & Penetration Testing',
        'Security Architecture Design',
        'Incident Response & Forensics',
        'Security Awareness Training',
        'Compliance Management (SOC 2, HIPAA, PCI DSS)',
        'Threat Intelligence & Monitoring'
      ],
      technologies: ['SIEM', 'EDR', 'SOAR', 'WAF', 'IDS/IPS'],
      color: 'text-red-600',
      bg: 'bg-red-50',
      border: 'border-red-200'
    },
    {
      icon: Brain,
      title: 'AI Implementation',
      description: 'Custom AI solutions that transform your business processes and decision-making capabilities.',
      features: [
        'Machine Learning Model Development',
        'Natural Language Processing',
        'Computer Vision Solutions',
        'Process Automation & RPA',
        'Predictive Analytics',
        'AI Strategy & Consulting'
      ],
      technologies: ['TensorFlow', 'PyTorch', 'Ollama', 'OpenAI', 'Hugging Face'],
      color: 'text-purple-600',
      bg: 'bg-purple-50',
      border: 'border-purple-200'
    },
    {
      icon: Cloud,
      title: 'DevOps & Cloud Services',
      description: 'Streamlined development pipelines and cloud infrastructure for scalable, reliable applications.',
      features: [
        'CI/CD Pipeline Implementation',
        'Infrastructure as Code (IaC)',
        'Container Orchestration',
        'Cloud Migration & Optimization',
        'Monitoring & Observability',
        'Disaster Recovery Planning'
      ],
      technologies: ['Docker', 'Kubernetes', 'Terraform', 'Ansible', 'Jenkins'],
      color: 'text-blue-600',
      bg: 'bg-blue-50',
      border: 'border-blue-200'
    },
    {
      icon: Settings,
      title: 'IT Support & Infrastructure',
      description: 'Comprehensive IT support services ensuring your technology infrastructure runs smoothly.',
      features: [
        '24/7 Technical Support',
        'Network Design & Administration',
        'Server Management & Virtualization',
        'Backup & Recovery Solutions',
        'Hardware Procurement & Setup',
        'Performance Optimization'
      ],
      technologies: ['VMware', 'Hyper-V', 'Active Directory', 'DNS/DHCP', 'VPN'],
      color: 'text-green-600',
      bg: 'bg-green-50',
      border: 'border-green-200'
    },
    {
      icon: Award,
      title: 'ISO 27001 Compliance',
      description: 'Information Security Management System implementation and compliance consulting.',
      features: [
        'Gap Analysis & Risk Assessment',
        'ISMS Policy Development',
        'Implementation Support',
        'Internal Audit Preparation',
        'Certification Support',
        'Continuous Improvement'
      ],
      technologies: ['Risk Management', 'Policy Frameworks', 'Audit Tools', 'BCMS'],
      color: 'text-orange-600',
      bg: 'bg-orange-50',
      border: 'border-orange-200'
    },
    {
      icon: Database,
      title: 'Data Management & Analytics',
      description: 'Comprehensive data solutions from architecture design to advanced analytics.',
      features: [
        'Database Design & Optimization',
        'Data Warehouse Implementation',
        'Business Intelligence Solutions',
        'Real-time Analytics',
        'Data Migration & Integration',
        'Performance Tuning'
      ],
      technologies: ['PostgreSQL', 'MongoDB', 'Redis', 'Elasticsearch', 'Power BI'],
      color: 'text-indigo-600',
      bg: 'bg-indigo-50',
      border: 'border-indigo-200'
    }
  ]

  const process = [
    {
      step: '01',
      title: 'Discovery & Assessment',
      description: 'We analyze your current infrastructure, identify pain points, and understand your business objectives.',
      icon: Users
    },
    {
      step: '02',
      title: 'Strategy & Planning',
      description: 'Develop a comprehensive roadmap with clear milestones, timelines, and success metrics.',
      icon: TrendingUp
    },
    {
      step: '03',
      title: 'Implementation',
      description: 'Execute the plan with our expert team, ensuring minimal disruption to your operations.',
      icon: Settings
    },
    {
      step: '04',
      title: 'Monitoring & Support',
      description: 'Continuous monitoring, optimization, and ongoing support to ensure long-term success.',
      icon: Monitor
    }
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
              Enterprise Technology
              <span className="text-accent-400 block">Services</span>
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8 leading-relaxed">
              Comprehensive technology solutions designed to accelerate your digital transformation
              and drive business growth through innovation.
            </p>
            <Link to="/contact" className="btn bg-accent-500 text-white hover:bg-accent-600 text-lg px-8 py-4">
              Start Your Project
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section ref={servicesRef} className="section bg-white">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={servicesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
              Our Service Portfolio
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From cybersecurity to AI implementation, we provide end-to-end technology solutions
              that drive innovation and ensure business continuity.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                animate={servicesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className={`card p-8 ${service.bg} ${service.border} border-2 hover:shadow-2xl transition-all duration-300 group`}
              >
                <div className="flex items-start space-x-4 mb-6">
                  <div className={`w-16 h-16 rounded-lg bg-white flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-md`}>
                    <service.icon className={`w-8 h-8 ${service.color}`} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-2 text-gray-900">{service.title}</h3>
                    <p className="text-gray-700 leading-relaxed">{service.description}</p>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="text-lg font-semibold mb-3 text-gray-900">Key Features:</h4>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-start space-x-2 text-sm text-gray-700">
                        <CheckCircle className="w-4 h-4 text-accent-500 flex-shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-lg font-semibold mb-3 text-gray-900">Technologies:</h4>
                  <div className="flex flex-wrap gap-2">
                    {service.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-white rounded-full text-xs font-medium text-gray-700 shadow-sm border border-gray-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section ref={processRef} className="section bg-gray-50">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={processInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              Our Proven Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A systematic approach to delivering exceptional results through careful planning,
              expert execution, and continuous optimization.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 30 }}
                animate={processInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="text-center group"
              >
                <div className="relative mb-6">
                  <div className="w-20 h-20 mx-auto gradient-bg rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <step.icon className="w-10 h-10 text-white" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-accent-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-sm">{step.step}</span>
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-4 text-gray-900">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed">{step.description}</p>
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
              Ready to Get Started?
            </h2>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              Let's discuss your technology challenges and create a customized solution
              that drives your business forward.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="btn bg-accent-500 text-white hover:bg-accent-600 text-lg px-8 py-4">
                Schedule Consultation
              </Link>
              <Link to="/portfolio" className="btn bg-white/10 text-white border-2 border-white/30 hover:bg-white/20 text-lg px-8 py-4">
                View Case Studies
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Services

