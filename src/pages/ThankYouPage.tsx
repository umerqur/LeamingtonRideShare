import { Link } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function ThankYouPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header onRequestRideClick={() => {}} />
      <main className="flex-1 flex items-center justify-center bg-gradient-to-br from-primary-50 to-charcoal-50 px-4 py-16">
        <div className="max-w-2xl w-full text-center">
          <div className="bg-white rounded-2xl shadow-2xl p-8 sm:p-12 border border-primary-100">
            {/* Success Icon */}
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center">
                <svg
                  className="w-12 h-12 text-green-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
            </div>

            {/* Heading */}
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              You're on the list!
            </h1>

            {/* Message */}
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Thank you for joining the Leamington RideShare waitlist. We'll keep you updated on our launch progress and let you know as soon as we're ready to serve you.
            </p>

            {/* What's Next Section */}
            <div className="bg-primary-50 rounded-lg p-6 mb-8 text-left">
              <h2 className="text-lg font-semibold text-gray-900 mb-3">
                What happens next?
              </h2>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-primary-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>We'll send you updates on our pilot program launch</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-primary-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>You'll get early access before the general public</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-primary-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Exclusive benefits for early supporters</span>
                </li>
              </ul>
            </div>

            {/* CTA Button */}
            <Link
              to="/"
              className="inline-block px-8 py-4 text-base font-semibold bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-all focus:outline-none focus:ring-4 focus:ring-primary-500/50 shadow-lg hover:shadow-xl"
            >
              Return to homepage
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
