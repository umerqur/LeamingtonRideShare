import { useState, FormEvent } from 'react'
import { useNavigate } from 'react-router-dom'

export default function LeadForm() {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    role: 'Rider'
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // Netlify Forms submission
      const formBody = new URLSearchParams({
        'form-name': 'early-access',
        ...formData
      }).toString()

      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: formBody
      })

      if (response.ok) {
        setShowSuccess(true)
        // Navigate to thank you page after 2 seconds
        setTimeout(() => {
          navigate('/thank-you')
        }, 2000)
      }
    } catch (error) {
      console.error('Form submission error:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="early-access" className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-primary-50 to-charcoal-50 rounded-2xl shadow-xl p-8 sm:p-12 border border-primary-100">
          {/* Section Header */}
          <div className="text-center mb-8">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Get early access
            </h2>
            <p className="text-lg text-gray-600">
              Be the first to know when we launch in Leamington
            </p>
          </div>

          {showSuccess ? (
            <div className="bg-green-50 border-2 border-green-500 rounded-lg p-6 text-center">
              <svg
                className="w-16 h-16 text-green-500 mx-auto mb-4"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <h3 className="text-xl font-semibold text-green-900 mb-2">
                Thanks for signing up!
              </h3>
              <p className="text-green-700">
                Redirecting you to the next page...
              </p>
            </div>
          ) : (
            <form
              name="early-access"
              method="POST"
              data-netlify="true"
              netlify-honeypot="bot-field"
              onSubmit={handleSubmit}
              className="space-y-6"
            >
              {/* Hidden fields for Netlify */}
              <input type="hidden" name="form-name" value="early-access" />
              <div hidden>
                <input name="bot-field" />
              </div>

              {/* Name Field */}
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-gray-900 mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                  placeholder="John Doe"
                />
              </div>

              {/* Email Field */}
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-900 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                  placeholder="john@example.com"
                />
              </div>

              {/* Role Dropdown */}
              <div>
                <label htmlFor="role" className="block text-sm font-semibold text-gray-900 mb-2">
                  I want to
                </label>
                <select
                  id="role"
                  name="role"
                  required
                  value={formData.role}
                  onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all bg-white"
                >
                  <option value="Rider">Request rides</option>
                  <option value="Driver">Drive and earn</option>
                  <option value="Both">Both ride and drive</option>
                </select>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-6 py-4 text-lg font-semibold bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-all focus:outline-none focus:ring-4 focus:ring-primary-500/50 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Submitting...' : 'Join the waitlist'}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
