import { useState } from 'react'
import { supabase } from '../lib/supabaseClient'

interface SignInModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function SignInModal({ isOpen, onClose }: SignInModalProps) {
  const [email, setEmail] = useState('')
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState('')

  if (!isOpen) return null

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    console.log('Sign in request starting for email:', email)
    setLoading(true)
    setError('')
    setSuccess(false)

    try {
      const { error } = await supabase.auth.signInWithOtp({
        email,
        options: {
          emailRedirectTo: window.location.origin
        }
      })

      if (error) {
        console.error('Sign in error:', error)
        setError(error.message)
      } else {
        console.log('Magic link sent successfully to:', email)
        setSuccess(true)
        setEmail('')
      }
    } catch (err) {
      console.error('Unexpected error during sign in:', err)
      setError('An unexpected error occurred. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  const handleClose = () => {
    setEmail('')
    setError('')
    setSuccess(false)
    setLoading(false)
    onClose()
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4">
      <div className="bg-white rounded-lg shadow-xl max-w-md w-full p-6 relative">
        {/* Close button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
          aria-label="Close modal"
        >
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Modal content */}
        <div className="mt-2">
          <h2 className="text-2xl font-bold text-[#004987] mb-2">Sign in</h2>
          <p className="text-gray-600 mb-6 text-sm">
            Enter your email to receive a magic link
          </p>

          {!success ? (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email address
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  disabled={loading}
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#004987] focus:border-transparent disabled:bg-gray-100 disabled:cursor-not-allowed"
                  placeholder="you@example.com"
                />
              </div>

              {error && (
                <div className="text-red-600 text-sm bg-red-50 p-3 rounded-lg">
                  {error}
                </div>
              )}

              <button
                type="submit"
                disabled={loading || !email}
                className="w-full px-6 py-2.5 text-sm font-semibold bg-[#004987] text-white rounded-lg hover:bg-[#004E7D] transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-[#004987] focus:ring-offset-2 shadow-md disabled:bg-gray-400 disabled:cursor-not-allowed"
              >
                {loading ? 'Sending...' : 'Send magic link'}
              </button>
            </form>
          ) : (
            <div className="space-y-4">
              <div className="text-green-600 bg-green-50 p-4 rounded-lg">
                <div className="flex items-start">
                  <svg className="h-5 w-5 mt-0.5 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <p className="font-semibold mb-1">Check your email for a sign in link</p>
                    <p className="text-sm text-green-700">
                      We've sent a magic link to your email. Click the link to sign in.
                    </p>
                  </div>
                </div>
              </div>
              <button
                onClick={handleClose}
                className="w-full px-6 py-2.5 text-sm font-semibold bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors duration-300 focus:outline-none"
              >
                Close
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
