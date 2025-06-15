import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, Shield, Cpu, Cloud, Settings, Phone, Sparkles, Zap } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

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
        ? 'glass-arabic shadow-2xl backdrop-blur-md border-b border-arabic-gold/20' 
        : 'bg-transparent'
    }`}>
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="relative">
              <div className="w-12 h-12 gradient-arabic rounded-arabic flex items-center justify-center group-hover:scale-105 transition-all duration-300 shadow-lg glow-gold">
                <Shield className="w-7 h-7 text-white" />
                {/* AI sparkle effect */}
                <motion.div
                  className="absolute -top-1 -right-1 w-4 h-4 bg-accent-500 rounded-full flex items-center justify-center"
                  animate={{ scale: [1, 1.2, 1], rotate: [0, 180, 360] }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  <Sparkles className="w-2 h-2 text-white" />
                </motion.div>
              </div>
              {/* Geometric decoration */}
              <div className="absolute -inset-2 opacity-30">
                <svg className="w-full h-full" viewBox="0 0 64 64">
                  <path d="M32 8 L40 24 L56 24 L44 36 L48 52 L32 44 L16 52 L20 36 L8 24 L24 24 Z" 
                        fill="none" stroke="currentColor" strokeWidth="1" className="text-arabic-gold" />
                </svg>
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-bold heading-arabic gradient-text">Menagenix</span>
              <span className="text-xs text-ai text-arabic-gold/70 tracking-wider">مناجينكس • AI EVOLVED</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
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
                    className={`relative flex items-center space-x-2 px-4 py-3 rounded-arabic text-sm font-semibold transition-all duration-300 group ${
                      isActive 
                        ? 'text-white bg-gradient-arabic shadow-lg glow-gold' 
                        : 'text-arabic-midnight hover:text-arabic-gold hover:bg-arabic-sand/30'
                    }`}
                  >
                    <item.icon className={`w-4 h-4 transition-transform duration-300 ${
                      isActive ? 'text-white' : 'group-hover:scale-110'
                    }`} />
                    <span className="heading-arabic">{item.name}</span>
                    
                    {/* Arabic ornament */}
                    {isActive && (
                      <motion.div
                        className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-accent-400 rounded-full"
                        layoutId="activeIndicator"
                        initial={false}
                        transition={{ type: "spring", bounce: 0.3, duration: 0.6 }}
                      />
                    )}
                    
                    {/* Hover effect */}
                    <div className="absolute inset-0 rounded-arabic border border-arabic-gold/0 group-hover:border-arabic-gold/30 transition-all duration-300" />
                  </Link>
                </motion.div>
              )
            })}
            
            {/* AI indicator */}
            <motion.div
              className="flex items-center space-x-1 px-3 py-1 bg-gradient-to-r from-secondary-600/10 to-accent-600/10 rounded-full border border-secondary-600/20"
              animate={{ 
                boxShadow: [
                  '0 0 10px rgba(30, 64, 175, 0.3)',
                  '0 0 20px rgba(5, 150, 105, 0.3)',
                  '0 0 10px rgba(30, 64, 175, 0.3)'
                ]
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Zap className="w-3 h-3 text-secondary-600" />
              <span className="text-xs text-ai text-secondary-700 font-medium">AI POWERED</span>
            </motion.div>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Link to="/contact" className="btn btn-primary relative overflow-hidden group">
              <span className="relative z-10">ابدأ الآن • Get Started</span>
              {/* Arabic decorative border */}
              <div className="absolute inset-0 border-2 border-arabic-gold/30 rounded-arabic group-hover:border-arabic-gold/60 transition-all duration-300" />
              {/* Shimmer effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-3 rounded-arabic bg-gradient-arabic text-white shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden group"
            aria-label="Toggle mobile menu"
          >
            <motion.div
              animate={{ rotate: isOpen ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </motion.div>
            {/* Arabic geometric decoration */}
            <div className="absolute inset-0 border border-arabic-gold/30 rounded-arabic group-hover:border-arabic-gold/60 transition-all duration-300" />
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
              <div className="py-4 space-y-2 border-t border-gray-200/20">
                {navigation.map((item) => {
                  const isActive = location.pathname === item.href
                  return (
                    <Link
                      key={item.name}
                      to={item.href}
                      onClick={() => setIsOpen(false)}
                      className={`flex items-center space-x-3 px-4 py-4 rounded-arabic text-base font-semibold transition-all duration-300 relative overflow-hidden ${
                        isActive 
                          ? 'text-white bg-gradient-arabic shadow-lg' 
                          : 'text-arabic-midnight hover:text-arabic-gold hover:bg-arabic-sand/50'
                      }`}
                    >
                      <item.icon className="w-5 h-5" />
                      <span className="heading-arabic">{item.name}</span>
                      {/* Mobile active indicator */}
                      {isActive && (
                        <div className="absolute right-3 top-1/2 transform -translate-y-1/2 w-2 h-2 bg-accent-400 rounded-full" />
                      )}
                    </Link>
                  )
                })}
                <div className="pt-6 border-t border-arabic-gold/20">
                  <Link
                    to="/contact"
                    onClick={() => setIsOpen(false)}
                    className="btn btn-primary w-full text-center relative overflow-hidden group"
                  >
                    <span className="relative z-10">ابدأ الآن • Get Started</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                  </Link>
                  
                  {/* Mobile AI indicator */}
                  <div className="flex items-center justify-center space-x-2 mt-4 px-3 py-2 bg-gradient-to-r from-secondary-600/10 to-accent-600/10 rounded-arabic border border-secondary-600/20">
                    <Zap className="w-4 h-4 text-secondary-600" />
                    <span className="text-sm text-ai text-secondary-700 font-medium">AI POWERED SOLUTIONS</span>
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

