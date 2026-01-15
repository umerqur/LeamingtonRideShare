import { useEffect, useState, ReactNode } from 'react'
import { Navigate } from 'react-router-dom'
import { getCurrentUser, getProfile } from '../lib/auth'

interface ProtectedRouteProps {
  children: ReactNode
  allowRoles: string[]
}

export default function ProtectedRoute({ children, allowRoles }: ProtectedRouteProps) {
  const [loading, setLoading] = useState(true)
  const [authorized, setAuthorized] = useState(false)

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const user = await getCurrentUser()

        if (!user) {
          console.log('No user session, redirecting to home')
          setAuthorized(false)
          setLoading(false)
          return
        }

        const profile = await getProfile(user.id)

        if (!profile || !profile.role) {
          console.log('No profile or role found, redirecting to home')
          setAuthorized(false)
          setLoading(false)
          return
        }

        const hasAccess = allowRoles.includes(profile.role)
        console.log(`User role: ${profile.role}, allowed roles: ${allowRoles}, has access: ${hasAccess}`)

        setAuthorized(hasAccess)
        setLoading(false)
      } catch (error) {
        console.error('Error checking authorization:', error)
        setAuthorized(false)
        setLoading(false)
      }
    }

    checkAuth()
  }, [allowRoles])

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-[#004987] mb-4"></div>
          <p className="text-lg font-semibold text-gray-700">Loading...</p>
        </div>
      </div>
    )
  }

  if (!authorized) {
    return <Navigate to="/" replace />
  }

  return <>{children}</>
}
