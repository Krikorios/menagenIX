import { Link } from 'react-router-dom'
import { Shield, Mail, Phone, MapPin, Linkedin, Twitter, Github } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const services = [
    'Cybersecurity',
    'AI Implementation',
    'DevOps Solutions',
    'IT Support',
    'ISO 27001 Compliance',
    'Cloud Services'
  ]

  const company = [
    { name: 'About Us', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'Contact', href: '/contact' }
  ]

  const contact = [
    { icon: Phone, text: '+961 71 117 808', href: 'tel:+96171117808' },
    { icon: Phone, text: '+961 79 189 495', href: 'tel:+96179189495' },
    { icon: MapPin, text: 'Mansourieh, Lebanon', href: '#' }
  ]

  const social = [
    { icon: Linkedin, href: 'https://linkedin.com/company/menagenix', label: 'LinkedIn' },
    { icon: Twitter, href: 'https://twitter.com/menagenix', label: 'Twitter' },
    { icon: Github, href: 'https://github.com/menagenix', label: 'GitHub' }
  ]

  return (
    <footer className="bg-secondary-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 gradient-bg rounded-lg flex items-center justify-center">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold">Menagenix</span>
            </Link>
            <p className="text-gray-300 mb-6 text-sm leading-relaxed">
              Leading provider of enterprise technology solutions, specializing in cybersecurity, 
              AI implementation, DevOps, and compliance services. Empowering businesses with 
              cutting-edge technology solutions.
            </p>
            <div className="flex space-x-4">
              {social.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-secondary-800 rounded-lg flex items-center justify-center hover:bg-primary-600 transition-colors duration-200"
                  aria-label={item.label}
                >
                  <item.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <Link
                    to="/services"
                    className="text-gray-300 hover:text-primary-400 transition-colors duration-200 text-sm"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-3">
              {company.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.href}
                    className="text-gray-300 hover:text-primary-400 transition-colors duration-200 text-sm"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-3">
              {contact.map((item, index) => (
                <li key={index}>
                  <a
                    href={item.href}
                    className="flex items-center space-x-3 text-gray-300 hover:text-primary-400 transition-colors duration-200 text-sm"
                  >
                    <item.icon className="w-4 h-4 flex-shrink-0" />
                    <span>{item.text}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-secondary-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © {currentYear} Menagenix. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors duration-200">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors duration-200">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors duration-200">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

