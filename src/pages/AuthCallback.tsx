import { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { supabase } from '../lib/supabaseClient'
import { getProfile, routeByRole } from '../lib/auth'

function parseHashParams(hash: string) {
  const raw = hash.startsWith('#') ? hash.slice(1) : hash
  const params = new URLSearchParams(raw)
  return {
    access_token: params.get('access_token'),
    refresh_token: params.get('refresh_token'),
    error: params.get('error'),
    error_description: params.get('error_description'),
  }
}

export default function AuthCallback() {
  const navigate = useNavigate()
  const startedRef = useRef(false)
  const [error, setError] = useState<string | null>(null)
  const [debug, setDebug] = useState<string | null>(null)

  useEffect(() => {
    if (startedRef.current) return
    startedRef.current = true

    let alive = true

    const run = async () => {
      try {
        const url = new URL(window.location.href)
        const search = url.searchParams
        const token_hash = search.get('token_hash')
        const type = search.get('type')
        const code = search.get('code')

        const hashInfo = parseHashParams(window.location.hash)

        console.log('AuthCallback start', {
          has_token_hash: Boolean(token_hash && type),
          has_code: Boolean(code),
          has_hash_access_token: Boolean(hashInfo.access_token),
        })

        if (hashInfo.error) {
          throw new Error(`${hashInfo.error}: ${hashInfo.error_description || ''}`.trim())
        }

        if (token_hash && type) {
          console.log('verifyOtp flow')
          const { error } = await supabase.auth.verifyOtp({
            token_hash,
            type: type as any,
          })
          if (error) throw error
        } else if (code) {
          console.log('exchangeCodeForSession flow')
          const { error } = await supabase.auth.exchangeCodeForSession(code)
          if (error) throw error
        } else if (hashInfo.access_token && hashInfo.refresh_token) {
          console.log('setSession from hash flow')
          const { error } = await supabase.auth.setSession({
            access_token: hashInfo.access_token,
            refresh_token: hashInfo.refresh_token,
          })
          if (error) throw error
        }

        if (window.location.hash) {
          window.history.replaceState({}, document.title, window.location.pathname + window.location.search)
        }

        const { data, error: sessionError } = await supabase.auth.getSession()
        if (sessionError) throw sessionError

        const session = data.session
        if (!session?.user?.id) {
          throw new Error('No session after auth callback')
        }

        console.log('Session user id', session.user.id)

        const profile = await getProfile(session.user.id)
        if (!profile?.role) {
          throw new Error('Profile row not found or role missing')
        }

        console.log('Profile role', profile.role)

        const target = routeByRole(profile.role)
        if (!alive) return
        navigate(target, { replace: true })
      } catch (e: any) {
        console.error('AuthCallback error', e)
        const msg = e?.message || String(e)
        if (!alive) return
        setDebug(msg)
        setError('An error occurred during sign in. Please try again.')
      }
    }

    run()

    return () => {
      alive = false
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

            {debug ? (
              <p className="mt-3 text-xs text-gray-500 break-words">
                {debug}
              </p>
            ) : null}
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
