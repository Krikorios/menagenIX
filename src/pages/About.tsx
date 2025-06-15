import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Shield, Brain, Cloud, Settings, Award, Users, Target, Zap } from 'lucide-react'
import { Link } from 'react-router-dom'

const About = () => {
  const [heroRef, heroInView] = useInView({ threshold: 0.1 })
  const [valuesRef, valuesInView] = useInView({ threshold: 0.1 })
  const [expertiseRef, expertiseInView] = useInView({ threshold: 0.1 })

  const values = [
    {
      icon: Shield,
      title: 'Security First',
      description: 'We prioritize security in every solution, implementing robust frameworks and compliance standards to protect your business.'
    },
    {
      icon: Brain,
      title: 'Innovation Driven',
      description: 'Leveraging cutting-edge AI and emerging technologies to create solutions that give you a competitive advantage.'
    },
    {
      icon: Users,
      title: 'Client Focused',
      description: 'Your success is our mission. We work closely with you to understand your needs and deliver tailored solutions.'
    },
    {
      icon: Target,
      title: 'Results Oriented',
      description: 'We measure success by your outcomes, focusing on deliverable results that drive real business value.'
    }
  ]

  const expertise = [
    {
      area: 'Cybersecurity',
      description: 'Comprehensive security frameworks, threat assessment, and ISO 27001 compliance implementation.',
      years: '5+',
      projects: '25+'
    },
    {
      area: 'AI Implementation',
      description: 'Machine learning, natural language processing, and intelligent automation solutions.',
      years: '4+',
      projects: '15+'
    },
    {
      area: 'DevOps & Cloud',
      description: 'Infrastructure automation, CI/CD pipelines, and cloud architecture design.',
      years: '6+',
      projects: '30+'
    },
    {
      area: 'Enterprise Solutions',
      description: 'Full-stack development, system integration, and digital transformation projects.',
      years: '7+',
      projects: '40+'
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
              About
              <span className="text-accent-400 block">Menagenix</span>
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8 leading-relaxed">
              We are a technology consulting firm specializing in cybersecurity, AI implementation, 
              DevOps, and enterprise solutions. Our mission is to accelerate your digital transformation 
              through innovative technology solutions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section bg-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold mb-6 gradient-text">Our Mission</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                To empower businesses through innovative technology solutions that enhance security, 
                efficiency, and growth. We believe in making complex technology accessible and 
                delivering measurable results that drive business success.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Our team combines deep technical expertise with practical business understanding 
                to create solutions that not only meet your current needs but also prepare you 
                for future challenges and opportunities.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="grid grid-cols-2 gap-6"
            >
              <div className="card p-6 text-center">
                <div className="text-3xl font-bold text-primary-600 mb-2">50+</div>
                <div className="text-gray-600">Projects Delivered</div>
              </div>
              <div className="card p-6 text-center">
                <div className="text-3xl font-bold text-primary-600 mb-2">100%</div>
                <div className="text-gray-600">Client Satisfaction</div>
              </div>
              <div className="card p-6 text-center">
                <div className="text-3xl font-bold text-primary-600 mb-2">24/7</div>
                <div className="text-gray-600">Support Available</div>
              </div>
              <div className="card p-6 text-center">
                <div className="text-3xl font-bold text-primary-600 mb-2">6</div>
                <div className="text-gray-600">Technology Domains</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section ref={valuesRef} className="section bg-gray-50">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={valuesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide every decision we make and every solution we deliver.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                animate={valuesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="text-center group"
              >
                <div className="w-20 h-20 mx-auto mb-6 gradient-bg rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <value.icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-gray-900">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Expertise */}
      <section ref={expertiseRef} className="section bg-white">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={expertiseInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
              Our Expertise
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Deep knowledge and proven experience across multiple technology domains.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {expertise.map((item, index) => (
              <motion.div
                key={item.area}
                initial={{ opacity: 0, y: 30 }}
                animate={expertiseInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="card p-8 hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-bold text-gray-900">{item.area}</h3>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-primary-600">{item.years}</div>
                    <div className="text-sm text-gray-500">Experience</div>
                  </div>
                </div>
                <p className="text-gray-600 mb-4 leading-relaxed">{item.description}</p>
                <div className="flex justify-between items-center pt-4 border-t border-gray-100">
                  <span className="text-sm font-medium text-gray-700">Projects Completed</span>
                  <span className="text-lg font-bold text-accent-600">{item.projects}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section gradient-bg text-white">
        <div className="container">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Work Together?
            </h2>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              Let's discuss how Menagenix can help accelerate your digital transformation 
              with our proven expertise and innovative approach.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="btn bg-accent-500 text-white hover:bg-accent-600 text-lg px-8 py-4">
                Get In Touch
              </Link>
              <Link to="/services" className="btn bg-white/10 text-white border-2 border-white/30 hover:bg-white/20 text-lg px-8 py-4">
                View Services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About

