import { useState } from 'react'

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const faqs = [
    {
      question: 'How do I request a ride?',
      answer: 'Sign up for early access, and once we launch, you can request rides through our app. Enter your pickup and destination, confirm your fare, and get matched with an approved driver.'
    },
    {
      question: 'Are all drivers screened?',
      answer: 'Yes. Every driver goes through background checks and vehicle inspections before being approved to drive on our platform. Safety is our top priority.'
    },
    {
      question: 'What are the costs?',
      answer: 'Pricing is transparent and shown upfront before you book. Rates are competitive and designed to be fair for both riders and drivers. No hidden fees or surge pricing.'
    },
    {
      question: 'How do I become a driver?',
      answer: 'Apply through our platform with your driver license and vehicle information. After passing our screening process and vehicle inspection, you can start accepting rides and earning.'
    },
    {
      question: 'What if I have an issue during a ride?',
      answer: 'We provide 24/7 support for all users. Contact us through the app or support line, and our team will help resolve any issues or disputes quickly and fairly.'
    }
  ]

  return (
    <section id="faq" className="bg-gray-50 py-20 sm:py-28">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Frequently asked questions
          </h2>
          <p className="text-lg text-gray-600">
            Everything you need to know about Leamington Ride Share
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden transition-all hover:shadow-md"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-inset"
              >
                <span className="text-lg font-semibold text-gray-900">
                  {faq.question}
                </span>
                <svg
                  className={`w-5 h-5 text-primary-600 transition-transform flex-shrink-0 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {openIndex === index && (
                <div className="px-6 pb-5">
                  <p className="text-gray-600 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
