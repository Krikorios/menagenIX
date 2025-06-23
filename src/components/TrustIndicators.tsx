// Trust Indicators Component
import { Shield, Award, Star } from 'lucide-react'

const TrustIndicators = () => {
  const certifications = [
    { name: 'ISO 27001 Lead Implementer', issuer: 'PECB', year: '2024' },
    { name: 'Certified Ethical Hacker', issuer: 'EC-Council', year: '2024' },
    { name: 'AWS Security Specialty', issuer: 'Amazon', year: '2024' },
    { name: 'CompTIA Security+', issuer: 'CompTIA', year: '2023' }
  ]

  const testimonials = [
    {
      company: 'Baladiyat Lebanon',
      role: 'IT Director',
      text: 'Menagenix transformed our municipal operations with their comprehensive cybersecurity framework. Zero security incidents since implementation.',
      rating: 5
    },
    {
      company: 'Lebanese Financial Institution',
      role: 'CISO',
      text: 'Their AI-powered threat detection reduced our incident response time by 85%. Professional and reliable.',
      rating: 5
    }
  ]

  const stats = [
    { number: '100+', label: 'Systems Secured' },
    { number: '99.9%', label: 'Uptime Achieved' },
    { number: '0', label: 'Data Breaches' },
    { number: '< 15min', label: 'Response Time' }
  ]

  const partnerships = [
    { name: 'Microsoft Partner', level: 'Gold' },
    { name: 'AWS Partner', level: 'Advanced' },
    { name: 'ISO 27001', level: 'Certified' },
    { name: 'PECB', level: 'Authorized' }
  ]

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Trusted by Leading Organizations</h2>
        
        {/* Security Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">{stat.number}</div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Certifications */}
        <div className="bg-white rounded-lg p-8 shadow-lg mb-12">
          <h3 className="text-2xl font-bold mb-6 flex items-center">
            <Award className="w-6 h-6 mr-2 text-yellow-500" />
            Professional Certifications
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {certifications.map((cert, index) => (
              <div key={index} className="border rounded-lg p-4 text-center">
                <Shield className="w-8 h-8 mx-auto text-blue-600 mb-2" />
                <div className="font-semibold text-sm">{cert.name}</div>
                <div className="text-xs text-gray-600">{cert.issuer} • {cert.year}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Client Testimonials */}
        <div className="bg-white rounded-lg p-8 shadow-lg mb-12">
          <h3 className="text-2xl font-bold mb-6">Client Success Stories</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="border-l-4 border-blue-600 pl-6">
                <div className="flex items-center mb-2">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 italic mb-3">"{testimonial.text}"</p>
                <div className="text-sm">
                  <strong>{testimonial.company}</strong> - {testimonial.role}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Industry Partnerships */}
        <div className="bg-gradient-to-r from-blue-50 to-gray-50 rounded-lg p-8">
          <h3 className="text-2xl font-bold mb-6 text-center">Trusted Partnerships</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {partnerships.map((partner, index) => (
              <div key={index} className="text-center p-4 bg-white rounded-lg shadow">
                <div className="font-semibold text-blue-600">{partner.name}</div>
                <div className="text-sm text-gray-600">{partner.level}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default TrustIndicators
