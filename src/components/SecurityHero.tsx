// Enhanced Security Hero Component
import { motion } from 'framer-motion'
import { Shield, Lock, Eye } from 'lucide-react'

const SecurityHero = () => {
  return (
    <div className="relative">
      {/* Security Threat Counter (Live Demo) */}
      <div className="absolute top-4 right-4 bg-red-900/80 text-white px-4 py-2 rounded-lg border border-red-500">
        <div className="flex items-center space-x-2">
          <div className="w-2 h-2 bg-red-400 rounded-full animate-pulse"></div>
          <span className="text-sm">Live Threat Monitor: <span className="font-mono">42,847</span> attacks blocked today</span>
        </div>
      </div>

      {/* Main Hero Content */}
      <div className="text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="mb-8"
        >
          <div className="inline-flex items-center px-6 py-3 bg-red-100 border border-red-300 rounded-full">
            <Shield className="w-5 h-5 text-red-600 mr-2" />
            <span className="text-red-800 font-semibold">CYBERSECURITY EXPERTS</span>
            <Lock className="w-5 h-5 text-red-600 ml-2" />
          </div>
        </motion.div>

        <h1 className="text-5xl md:text-7xl font-bold mb-6">
          <span className="text-gray-900">Protect Your</span>
          <br />
          <span className="bg-gradient-to-r from-red-600 to-blue-600 bg-clip-text text-transparent">
            Digital Assets
          </span>
        </h1>

        <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
          Enterprise cybersecurity solutions with AI-powered threat detection, 
          ISO 27001 compliance, and 24/7 security monitoring for Lebanese businesses.
        </p>

        {/* Security Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-red-600">
            <Shield className="w-8 h-8 text-red-600 mb-3" />
            <h3 className="font-bold text-lg mb-2">Threat Detection</h3>
            <p className="text-gray-600">AI-powered real-time monitoring</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-blue-600">
            <Lock className="w-8 h-8 text-blue-600 mb-3" />
            <h3 className="font-bold text-lg mb-2">ISO 27001</h3>
            <p className="text-gray-600">Certified compliance frameworks</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-green-600">
            <Eye className="w-8 h-8 text-green-600 mb-3" />
            <h3 className="font-bold text-lg mb-2">24/7 Monitoring</h3>
            <p className="text-gray-600">Continuous security oversight</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SecurityHero
