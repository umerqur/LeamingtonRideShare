import { useState } from 'react'

export default function HowItWorks() {
  const [activeTab, setActiveTab] = useState<'riders' | 'drivers'>('riders')

  const riderSteps = [
    {
      number: '01',
      title: 'Request your ride',
      description: 'Enter your pickup and destination. See the price upfront before you book.'
    },
    {
      number: '02',
      title: 'Get matched with a driver',
      description: 'See your driver details and track them as they arrive at your location.'
    },
    {
      number: '03',
      title: 'Enjoy your ride',
      description: 'Relax while your approved driver takes you safely to your destination.'
    }
  ]

  const driverSteps = [
    {
      number: '01',
      title: 'Apply to drive',
      description: 'Submit your application with driver license and vehicle information.'
    },
    {
      number: '02',
      title: 'Get approved',
      description: 'Pass background screening and vehicle inspection to start driving.'
    },
    {
      number: '03',
      title: 'Start earning',
      description: 'Accept ride requests, earn transparent fares, and get paid weekly.'
    }
  ]

  const steps = activeTab === 'riders' ? riderSteps : driverSteps

  return (
    <section id="how-it-works" className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            How it works
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Getting started is simple, whether you're riding or driving
          </p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex rounded-lg border border-gray-200 p-1 bg-gray-50">
            <button
              onClick={() => setActiveTab('riders')}
              className={`px-6 py-3 text-sm font-semibold rounded-md transition-all ${
                activeTab === 'riders'
                  ? 'bg-white text-primary-600 shadow-sm'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              For Riders
            </button>
            <button
              onClick={() => setActiveTab('drivers')}
              className={`px-6 py-3 text-sm font-semibold rounded-md transition-all ${
                activeTab === 'drivers'
                  ? 'bg-white text-primary-600 shadow-sm'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              For Drivers
            </button>
          </div>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Connector line (hidden on mobile, shown on md+) */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-8 left-1/2 w-full h-0.5 bg-gradient-to-r from-primary-200 to-transparent" />
              )}

              <div className="relative bg-white">
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary-600 text-white text-2xl font-bold mb-4 shadow-lg">
                    {step.number}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
