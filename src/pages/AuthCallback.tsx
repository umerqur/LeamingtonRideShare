import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { supabase } from '../lib/supabaseClient'
import { getCurrentUser, getProfile, routeByRole } from '../lib/auth'

export default function AuthCallback() {
  const navigate = useNavigate()
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const handleAuthCallback = async () => {
      try {
        // Step 1: Parse hash tokens
        const hash = window.location.hash

        if (hash && hash.includes('access_token=')) {
          console.log('auth callback hash found: yes')

          // Parse hash parameters
          const hashParams = new URLSearchParams(hash.substring(1))
          const access_token = hashParams.get('access_token')
          const refresh_token = hashParams.get('refresh_token')

          if (access_token && refresh_token) {
            // Set session with hash tokens
            await supabase.auth.setSession({
              access_token,
              refresh_token
            })

            // Clear the URL hash
            window.history.replaceState({}, document.title, window.location.pathname + window.location.search)
          }
        } else {
          console.log('auth callback hash found: no')
        }

        // Step 2: Get session normally
        const { data: { session } } = await supabase.auth.getSession()

        if (!session) {
          console.log('No session found, redirecting to home')
          navigate('/')
          return
        }

        console.log('session user id:', session.user.id)

        // Step 3: Fetch profile role from public.profiles
        const { data: profile, error } = await supabase
          .from('profiles')
          .select('id, role, email')
          .eq('id', session.user.id)
          .single()

        if (error || !profile || !profile.role) {
          console.error('No profile or role found for user')
          setError('Unable to load user profile. Please contact support.')
          navigate('/')
          return
        }

        console.log('profile role:', profile.role)

        // Step 4: Route by role
        let targetRoute
        if (profile.role === 'admin') {
          targetRoute = '/admin'
        } else if (profile.role === 'driver') {
          targetRoute = '/driver'
        } else {
          targetRoute = '/rider'
        }

        console.log('Routing to:', targetRoute)
        navigate(targetRoute, { replace: true })
      } catch (err) {
        console.error('Error during auth callback:', err)
        setError('An error occurred during sign in. Please try again.')
      }
    }

    handleAuthCallback()

    // Listen for auth state changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      async (event, session) => {
        console.log('Auth state changed:', event)

        if (event === 'SIGNED_IN' && session?.user) {
          const profile = await getProfile(session.user.id)
          if (profile?.role) {
            const targetRoute = routeByRole(profile.role)
            navigate(targetRoute, { replace: true })
          }
        }
      }
    )

    return () => {
      subscription.unsubscribe()
    }
  }, [navigate])

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="max-w-md w-full p-8 bg-white rounded-lg shadow-lg">
          <div className="text-red-600 mb-4">
            <svg className="h-12 w-12 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
            <p className="text-center font-semibold">{error}</p>
          </div>
          <button
            onClick={() => navigate('/')}
            className="w-full px-6 py-3 bg-[#004987] text-white rounded-lg hover:bg-[#004E7D] transition-colors"
          >
            Return to Home
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center">
        <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-[#004987] mb-4"></div>
        <p className="text-lg font-semibold text-gray-700">Signing you in...</p>
      </div>
    </div>
  )
}
