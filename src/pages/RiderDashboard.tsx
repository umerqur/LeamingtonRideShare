import { useNavigate } from 'react-router-dom'
import { supabase } from '../lib/supabaseClient'

export default function RiderDashboard() {
  const navigate = useNavigate()

  const handleSignOut = async () => {
    await supabase.auth.signOut()
    navigate('/')
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-lg shadow-md p-8">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-3xl font-bold text-[#004987]">Rider Dashboard</h1>
            <button
              onClick={handleSignOut}
              className="px-6 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors"
            >
              Sign out
            </button>
          </div>

          <div className="text-center py-12">
            <svg className="h-24 w-24 mx-auto mb-6 text-[#004987]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Welcome, Rider!</h2>
            <p className="text-gray-600 max-w-md mx-auto">
              Your rider dashboard is ready. Soon you'll be able to request rides, view your ride history, and manage your account from here.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
