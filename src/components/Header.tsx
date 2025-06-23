import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, Shield, Cpu, Cloud, Settings, Phone, Zap } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import Logo from './Logo'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navigation = [
    { name: 'Home', href: '/', icon: Shield },
    { name: 'Services', href: '/services', icon: Settings },
    { name: 'Portfolio', href: '/portfolio', icon: Cloud },
    { name: 'About', href: '/about', icon: Cpu },
    { name: 'Contact', href: '/contact', icon: Phone },
  ]

  return (
    <header className={`fixed w-full top-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/98 backdrop-blur-md shadow-lg border-b border-gray-200/50' 
        : 'bg-white/95 backdrop-blur-sm shadow-md'
    }`}>
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="group flex-shrink-0">
            <Logo 
              size="sm" 
              animated={true} 
              showText={true} 
              useImage={true}
              className="hover:scale-105 transition-transform duration-300" 
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8 flex-1 justify-center">
            {navigation.map((item, index) => {
              const isActive = location.pathname === item.href
              return (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    to={item.href}
                    className={`relative flex items-center space-x-2 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-300 group ${
                      isActive 
                        ? 'text-arabic-gold bg-arabic-gold/10' 
                        : 'text-gray-600 hover:text-arabic-gold hover:bg-gray-50'
                    }`}
                  >
                    <item.icon className={`w-4 h-4 transition-transform duration-300 ${
                      isActive ? 'text-arabic-gold' : 'group-hover:scale-110'
                    }`} />
                    <span>{item.name}</span>
                    
                    {/* Active indicator dot */}
                    {isActive && (
                      <motion.div
                        className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-arabic-gold rounded-full"
                        layoutId="activeIndicator"
                        initial={false}
                        transition={{ type: "spring", bounce: 0.3, duration: 0.6 }}
                      />
                    )}
                  </Link>
                </motion.div>
              )
            })}
            
            {/* AI indicator */}
            <motion.div
              className="flex items-center space-x-1 px-2 py-1 bg-blue-50 rounded-full border border-blue-200"
              animate={{ 
                boxShadow: [
                  '0 0 5px rgba(59, 130, 246, 0.2)',
                  '0 0 10px rgba(16, 185, 129, 0.2)',
                  '0 0 5px rgba(59, 130, 246, 0.2)'
                ]
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Zap className="w-3 h-3 text-blue-600" />
              <span className="text-xs text-blue-700 font-medium">AI POWERED</span>
            </motion.div>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block flex-shrink-0">
            <Link 
              to="/contact" 
              className="inline-flex items-center px-5 py-2 bg-gradient-to-r from-orange-400 to-orange-500 text-white font-medium rounded-lg shadow hover:shadow-lg transition-all duration-300 hover:scale-105"
            >
              <span>Get Started • ابدأ الآن</span>
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg bg-gradient-to-r from-arabic-gold to-arabic-desert text-white shadow-lg hover:shadow-xl transition-all duration-300"
            aria-label="Toggle mobile menu"
          >
            <motion.div
              animate={{ rotate: isOpen ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </motion.div>
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden overflow-hidden"
            >
              <div className="py-4 space-y-2 border-t border-gray-200">
                {navigation.map((item) => {
                  const isActive = location.pathname === item.href
                  return (
                    <Link
                      key={item.name}
                      to={item.href}
                      onClick={() => setIsOpen(false)}
                      className={`flex items-center space-x-3 px-4 py-3 rounded-lg text-base font-semibold transition-all duration-300 ${
                        isActive 
                          ? 'text-white bg-gradient-to-r from-arabic-gold to-arabic-desert shadow-lg' 
                          : 'text-gray-700 hover:text-arabic-gold hover:bg-gray-100'
                      }`}
                    >
                      <item.icon className="w-5 h-5" />
                      <span>{item.name}</span>
                      {/* Mobile active indicator */}
                      {isActive && (
                        <div className="ml-auto w-2 h-2 bg-white rounded-full" />
                      )}
                    </Link>
                  )
                })}
                <div className="pt-4 border-t border-gray-200">
                  <Link
                    to="/contact"
                    onClick={() => setIsOpen(false)}
                    className="block w-full text-center px-6 py-3 bg-gradient-to-r from-arabic-gold to-arabic-desert text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    Get Started • ابدأ الآن
                  </Link>
                  
                  {/* Mobile AI indicator */}
                  <div className="flex items-center justify-center space-x-2 mt-4 px-3 py-2 bg-gradient-to-r from-blue-50 to-emerald-50 rounded-lg border border-blue-200">
                    <Zap className="w-4 h-4 text-blue-600" />
                    <span className="text-sm text-blue-700 font-medium">AI POWERED SOLUTIONS</span>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  )
}

export default Header

