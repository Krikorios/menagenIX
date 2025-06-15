import { motion } from 'framer-motion'

interface LogoProps {
  className?: string
  size?: 'sm' | 'md' | 'lg' | 'xl'
  animated?: boolean
  showText?: boolean
}

const Logo = ({ 
  className = '', 
  size = 'md', 
  animated = true, 
  showText = true 
}: LogoProps) => {
  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-12 h-12',
    lg: 'w-16 h-16',
    xl: 'w-24 h-24'
  }

  const textSizeClasses = {
    sm: 'text-lg',
    md: 'text-2xl',
    lg: 'text-3xl',
    xl: 'text-4xl'
  }

  return (
    <div className={`flex items-center space-x-3 ${className}`}>
      <motion.div
        className={`relative ${sizeClasses[size]}`}
        initial={animated ? { scale: 0, rotate: -180 } : {}}
        animate={animated ? { scale: 1, rotate: 0 } : {}}
        transition={{ duration: 0.8, ease: "easeOut" }}
        whileHover={animated ? { scale: 1.05, rotate: 5 } : {}}
      >
        <svg
          viewBox="0 0 200 200"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
        >
          {/* Main Logo Structure based on your design */}
          <defs>
            <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#1e40af" />
              <stop offset="50%" stopColor="#3b82f6" />
              <stop offset="100%" stopColor="#60a5fa" />
            </linearGradient>
            
            <linearGradient id="logoGradientHover" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#d97706" />
              <stop offset="50%" stopColor="#f59e0b" />
              <stop offset="100%" stopColor="#fbbf24" />
            </linearGradient>
          </defs>
          
          {/* Top diamond */}
          <motion.path
            d="M100 20 L130 50 L100 80 L70 50 Z"
            fill="url(#logoGradient)"
            initial={animated ? { opacity: 0, y: -20 } : {}}
            animate={animated ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
          />
          
          {/* Top right diamond */}
          <motion.path
            d="M140 30 L170 45 L155 75 L125 60 Z"
            fill="url(#logoGradient)"
            initial={animated ? { opacity: 0, x: 20 } : {}}
            animate={animated ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          />
          
          {/* Left diamond */}
          <motion.path
            d="M30 80 L60 95 L45 125 L15 110 Z"
            fill="url(#logoGradient)"
            initial={animated ? { opacity: 0, x: -20 } : {}}
            animate={animated ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          />
          
          {/* Right diamond */}
          <motion.path
            d="M140 80 L170 95 L155 125 L125 110 Z"
            fill="url(#logoGradient)"
            initial={animated ? { opacity: 0, x: 20 } : {}}
            animate={animated ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          />
          
          {/* Bottom large triangle/diamond base */}
          <motion.path
            d="M40 140 L100 120 L160 140 L130 180 L70 180 Z"
            fill="url(#logoGradient)"
            initial={animated ? { opacity: 0, y: 20 } : {}}
            animate={animated ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
          />
          
          {/* Central connecting element */}
          <motion.path
            d="M85 90 L115 90 L110 120 L90 120 Z"
            fill="url(#logoGradient)"
            initial={animated ? { opacity: 0, scale: 0 } : {}}
            animate={animated ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.4, delay: 0.6 }}
          />
          
          {/* AI Enhancement dots */}
          <motion.circle
            cx="100"
            cy="100"
            r="3"
            fill="#10b981"
            initial={animated ? { scale: 0 } : {}}
            animate={animated ? { scale: [0, 1.2, 1] } : {}}
            transition={{ duration: 0.8, delay: 0.8, repeat: Infinity, repeatDelay: 3 }}
          />
          
          <motion.circle
            cx="85"
            cy="85"
            r="2"
            fill="#10b981"
            initial={animated ? { scale: 0 } : {}}
            animate={animated ? { scale: [0, 1.2, 1] } : {}}
            transition={{ duration: 0.8, delay: 1, repeat: Infinity, repeatDelay: 3 }}
          />
          
          <motion.circle
            cx="115"
            cy="115"
            r="2"
            fill="#10b981"
            initial={animated ? { scale: 0 } : {}}
            animate={animated ? { scale: [0, 1.2, 1] } : {}}
            transition={{ duration: 0.8, delay: 1.2, repeat: Infinity, repeatDelay: 3 }}
          />
        </svg>
        
        {/* Glow effect */}
        {animated && (
          <motion.div
            className="absolute inset-0 bg-blue-400/20 rounded-full blur-xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.6, 0.3]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        )}
      </motion.div>
      
      {showText && (
        <motion.div
          className="flex flex-col"
          initial={animated ? { opacity: 0, x: -20 } : {}}
          animate={animated ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <span className={`font-bold heading-arabic gradient-text ${textSizeClasses[size]}`}>
            Menagenix
          </span>
          {size !== 'sm' && (
            <span className="text-xs text-ai text-arabic-gold/70 tracking-wider font-medium">
              مناجينكس • AI EVOLVED
            </span>
          )}
        </motion.div>
      )}
    </div>
  )
}

export default Logo

