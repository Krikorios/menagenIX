import { motion } from 'framer-motion'

interface ArabicPatternProps {
  className?: string
  animate?: boolean
}

const ArabicPattern = ({ className = '', animate = true }: ArabicPatternProps) => {
  return (
    <div className={`absolute inset-0 overflow-hidden ${className}`}>
      {/* Main geometric pattern */}
      <motion.div
        className="absolute inset-0 opacity-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.1 }}
        transition={{ duration: 2 }}
      >
        <svg
          className="w-full h-full"
          viewBox="0 0 400 400"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Islamic geometric star pattern */}
          <defs>
            <pattern id="islamicStar" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
              <g transform="translate(50,50)">
                {/* 8-pointed star */}
                <motion.path
                  d="M0,-30 L8,-8 L30,0 L8,8 L0,30 L-8,8 L-30,0 L-8,-8 Z"
                  fill="currentColor"
                  className="text-arabic-gold"
                  initial={{ scale: 0, rotate: 0 }}
                  animate={{ 
                    scale: animate ? [0, 1, 0.9, 1] : 1, 
                    rotate: animate ? [0, 180, 360] : 0 
                  }}
                  transition={{ 
                    duration: 8, 
                    repeat: animate ? Infinity : 0, 
                    ease: "easeInOut" 
                  }}
                />
                {/* Inner star */}
                <motion.circle
                  cx="0"
                  cy="0"
                  r="12"
                  fill="currentColor"
                  className="text-accent-500"
                  initial={{ scale: 0 }}
                  animate={{ scale: animate ? [0, 1, 0.8, 1] : 1 }}
                  transition={{ 
                    duration: 6, 
                    repeat: animate ? Infinity : 0, 
                    ease: "easeInOut" 
                  }}
                />
              </g>
            </pattern>
            
            <pattern id="arabicGrid" x="0" y="0" width="50" height="50" patternUnits="userSpaceOnUse">
              <rect width="50" height="50" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-arabic-gold" opacity="0.3"/>
              <circle cx="25" cy="25" r="2" fill="currentColor" className="text-accent-500" opacity="0.5"/>
            </pattern>
          </defs>
          
          <rect width="100%" height="100%" fill="url(#islamicStar)" />
          <rect width="100%" height="100%" fill="url(#arabicGrid)" />
        </svg>
      </motion.div>
      
      {/* Floating geometric elements */}
      {animate && (
        <>
          <motion.div
            className="absolute top-20 left-20 w-16 h-16 opacity-20"
            animate={{
              y: [-10, 10, -10],
              rotate: [0, 180, 360],
              scale: [1, 1.1, 1]
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M32 4 L44 20 L60 20 L50 32 L60 44 L44 44 L32 60 L20 44 L4 44 L14 32 L4 20 L20 20 Z"
                fill="currentColor"
                className="text-arabic-gold"
              />
              <circle cx="32" cy="32" r="8" fill="currentColor" className="text-accent-500" />
            </svg>
          </motion.div>
          
          <motion.div
            className="absolute bottom-20 right-20 w-12 h-12 opacity-15"
            animate={{
              y: [10, -10, 10],
              rotate: [360, 180, 0],
              scale: [1, 0.9, 1]
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M24 2 L30 14 L42 14 L33 22 L36 34 L24 28 L12 34 L15 22 L6 14 L18 14 Z"
                fill="currentColor"
                className="text-secondary-500"
              />
            </svg>
          </motion.div>
          
          <motion.div
            className="absolute top-1/2 left-10 w-8 h-8 opacity-25"
            animate={{
              x: [-5, 5, -5],
              rotate: [0, 90, 180, 270, 360]
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "linear"
            }}
          >
            <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="8" y="8" width="16" height="16" fill="currentColor" className="text-accent-600" transform="rotate(45 16 16)" />
              <circle cx="16" cy="16" r="4" fill="currentColor" className="text-arabic-gold" />
            </svg>
          </motion.div>
        </>
      )}
    </div>
  )
}

export default ArabicPattern

