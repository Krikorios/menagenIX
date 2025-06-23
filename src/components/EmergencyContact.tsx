// Emergency Contact Component for Cybersecurity
import { Phone, AlertTriangle, Clock } from 'lucide-react'

const EmergencyContact = () => {
  return (
    <div className="bg-red-600 text-white py-4">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <AlertTriangle className="w-6 h-6 animate-pulse" />
            <span className="font-bold">SECURITY INCIDENT?</span>
            <span>Emergency Response Available 24/7</span>
          </div>
          <div className="flex items-center space-x-6">
            <a href="tel:+96171117808" className="flex items-center space-x-2 hover:text-red-200">
              <Phone className="w-5 h-5" />
              <span className="font-bold">+961 71 117 808</span>
            </a>
            <div className="flex items-center space-x-1">
              <Clock className="w-4 h-4" />
              <span className="text-sm">Avg. Response: 15 min</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EmergencyContact
