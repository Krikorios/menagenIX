// Case Studies Component
import { CheckCircle } from 'lucide-react'

const CaseStudies = () => {
  const caseStudies = [
    {
      title: 'Municipal Government Security Overhaul',
      client: 'Lebanese Municipality Network',
      challenge: 'Legacy systems vulnerable to cyber attacks, no incident response plan',
      solution: 'Implemented comprehensive security framework with ISO 27001 compliance',
      results: [
        '100% reduction in successful cyber attacks',
        '99.9% system uptime achieved',
        'ISO 27001 certification obtained',
        '24/7 monitoring system deployed'
      ],
      metrics: {
        securityIncidents: '0',
        uptimeImprovement: '99.9%',
        complianceScore: '100%',
        responseTime: '< 15 min'
      }
    },
    {
      title: 'AI-Powered Threat Detection System',
      client: 'Financial Services Firm',
      challenge: 'Manual threat detection causing delayed responses to security incidents',
      solution: 'Deployed AI-powered threat detection with automated response capabilities',
      results: [
        '85% faster threat detection',
        'Automated response to 90% of threats',
        '50% reduction in false positives',
        'Real-time dashboard implementation'
      ],
      metrics: {
        detectionSpeed: '85% faster',
        automation: '90%',
        falsePositives: '-50%',
        threatsCaught: '847'
      }
    }
  ]

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Proven Security Success Stories</h2>
          <p className="text-xl text-gray-600">Real results from our cybersecurity implementations</p>
        </div>

        <div className="space-y-12">
          {caseStudies.map((study, index) => (
            <div key={index} className="bg-gray-50 rounded-lg p-8 shadow-lg">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-2xl font-bold mb-4 text-blue-900">{study.title}</h3>
                  <div className="mb-4">
                    <span className="text-sm font-semibold text-gray-500 uppercase tracking-wide">Client:</span>
                    <p className="text-lg text-gray-700">{study.client}</p>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="font-bold text-red-600 mb-2">Challenge:</h4>
                    <p className="text-gray-700">{study.challenge}</p>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="font-bold text-blue-600 mb-2">Solution:</h4>
                    <p className="text-gray-700">{study.solution}</p>
                  </div>

                  <div>
                    <h4 className="font-bold text-green-600 mb-3">Results:</h4>
                    <ul className="space-y-2">
                      {study.results.map((result, i) => (
                        <li key={i} className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700">{result}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="bg-white rounded-lg p-6 shadow-inner">
                  <h4 className="font-bold mb-6 text-center text-gray-800">Key Metrics</h4>
                  <div className="grid grid-cols-2 gap-4">
                    {Object.entries(study.metrics).map(([key, value], i) => (
                      <div key={i} className="text-center p-4 bg-blue-50 rounded-lg">
                        <div className="text-2xl font-bold text-blue-600 mb-1">{value}</div>
                        <div className="text-sm text-gray-600 capitalize">
                          {key.replace(/([A-Z])/g, ' $1').trim()}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default CaseStudies
