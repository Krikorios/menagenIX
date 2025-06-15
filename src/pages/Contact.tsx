import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Mail, Phone, MapPin, Send, Clock, MessageSquare } from 'lucide-react'
import { useState } from 'react'

const Contact = () => {
  const [heroRef, heroInView] = useInView({ threshold: 0.1 })
  const [formRef, formInView] = useInView({ threshold: 0.1 })
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: '',
    message: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    // Create mailto link with form data
    const subject = encodeURIComponent(`New Contact Form Submission - ${formData.service || 'General Inquiry'}`)
    const body = encodeURIComponent(`
Name: ${formData.name}
Email: ${formData.email}
Company: ${formData.company || 'Not specified'}
Service of Interest: ${formData.service || 'Not specified'}

Message:
${formData.message}

---
Sent from Menagenix Contact Form
    `)
    
    // Open email client with pre-filled information
    window.location.href = `mailto:g.haddaditw@gmail.com?subject=${subject}&body=${body}`
    
    // Reset form after sending
    setFormData({
      name: '',
      email: '',
      company: '',
      service: '',
      message: ''
    })
    
    // Show success message (you could add a toast notification here)
    alert('Thank you! Your message has been prepared. Please send the email from your email client.')
  }

  const contactInfo = [
    {
      icon: Phone,
      title: 'Call Us - Main',
      content: '+961 71 117 808',
      description: 'Primary contact line - Available 24/7',
      action: 'tel:+96171117808'
    },
    {
      icon: Phone,
      title: 'Call Us - Secondary',
      content: '+961 79 189 495',
      description: 'Alternative contact line - Business hours',
      action: 'tel:+96179189495'
    },
    {
      icon: MapPin,
      title: 'Our Location',
      content: 'Mansourieh, Lebanon',
      description: 'Middle East technology hub with global reach',
      action: '#'
    }
  ]

  const services = [
    'Cybersecurity Solutions',
    'AI Implementation',
    'DevOps & Cloud Services',
    'IT Support & Infrastructure',
    'ISO 27001 Compliance',
    'Data Management & Analytics',
    'Other'
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
              Get In
              <span className="text-accent-400 block">Touch</span>
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8 leading-relaxed">
              Ready to transform your business with cutting-edge technology solutions? 
              Let's discuss your project and create a customized strategy for success.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="section bg-white">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {contactInfo.map((info, index) => (
              <motion.a
                key={info.title}
                href={info.action}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="card p-8 text-center group hover:shadow-xl transition-all duration-300 block"
              >
                <div className="w-16 h-16 mx-auto mb-6 gradient-bg rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <info.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-gray-900">{info.title}</h3>
                <p className="text-lg font-medium text-primary-600 mb-2">{info.content}</p>
                <p className="text-gray-600 text-sm">{info.description}</p>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section ref={formRef} className="section bg-gray-50">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={formInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold mb-6 gradient-text">Send Us a Message</h2>
              <p className="text-lg text-gray-600 mb-8">
                Fill out the form below and we'll get back to you within 24 hours to discuss your project.
              </p>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors duration-200"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors duration-200"
                      placeholder="your.email@company.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                      Company
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors duration-200"
                      placeholder="Your company name"
                    />
                  </div>
                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                      Service of Interest
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors duration-200"
                    >
                      <option value="">Select a service</option>
                      {services.map((service) => (
                        <option key={service} value={service}>{service}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors duration-200 resize-none"
                    placeholder="Tell us about your project, goals, and any specific requirements..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full btn btn-primary text-lg py-4"
                >
                  <Send className="w-5 h-5 mr-2" />
                  Send Message
                </button>
              </form>
            </motion.div>

            {/* Information */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={formInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-8"
            >
              <div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900">Why Choose Menagenix?</h3>
                <ul className="space-y-4">
                  <li className="flex items-start space-x-3">
                    <div className="w-6 h-6 rounded-full bg-accent-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Expert Team</h4>
                      <p className="text-gray-600">Deep expertise across cybersecurity, AI, DevOps, and enterprise solutions.</p>
                    </div>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-6 h-6 rounded-full bg-accent-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Proven Track Record</h4>
                      <p className="text-gray-600">50+ successful projects with 100% client satisfaction rate.</p>
                    </div>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-6 h-6 rounded-full bg-accent-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">24/7 Support</h4>
                      <p className="text-gray-600">Continuous support and monitoring for all implemented solutions.</p>
                    </div>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-6 h-6 rounded-full bg-accent-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Cutting-Edge Technology</h4>
                      <p className="text-gray-600">Latest tools and frameworks to ensure future-proof solutions.</p>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="card p-6 bg-gradient-to-br from-primary-50 to-accent-50 border border-primary-200">
                <div className="flex items-center space-x-3 mb-4">
                  <Clock className="w-6 h-6 text-primary-600" />
                  <h4 className="text-lg font-semibold text-gray-900">Response Time</h4>
                </div>
                <p className="text-gray-700 mb-2">
                  <strong>Initial Response:</strong> Within 2 hours during business hours
                </p>
                <p className="text-gray-700 mb-2">
                  <strong>Detailed Proposal:</strong> Within 48 hours
                </p>
                <p className="text-gray-700">
                  <strong>Project Kickoff:</strong> Within 1-2 weeks of agreement
                </p>
              </div>

              <div className="card p-6 bg-gradient-to-br from-accent-50 to-primary-50 border border-accent-200">
                <div className="flex items-center space-x-3 mb-4">
                  <MessageSquare className="w-6 h-6 text-accent-600" />
                  <h4 className="text-lg font-semibold text-gray-900">What Happens Next?</h4>
                </div>
                <ol className="space-y-2 text-gray-700">
                  <li className="flex items-start space-x-2">
                    <span className="w-5 h-5 rounded-full bg-accent-500 text-white text-xs flex items-center justify-center flex-shrink-0 mt-0.5">1</span>
                    <span>We'll review your message and respond within 2 hours</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="w-5 h-5 rounded-full bg-accent-500 text-white text-xs flex items-center justify-center flex-shrink-0 mt-0.5">2</span>
                    <span>Schedule a consultation call to discuss your needs</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="w-5 h-5 rounded-full bg-accent-500 text-white text-xs flex items-center justify-center flex-shrink-0 mt-0.5">3</span>
                    <span>Receive a detailed proposal with timeline and pricing</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="w-5 h-5 rounded-full bg-accent-500 text-white text-xs flex items-center justify-center flex-shrink-0 mt-0.5">4</span>
                    <span>Begin your digital transformation journey</span>
                  </li>
                </ol>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact

