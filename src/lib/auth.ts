import { supabase } from './supabaseClient'
import type { User } from '@supabase/supabase-js'

export interface Profile {
  id: string
  role: 'admin' | 'driver' | 'rider'
  email: string
}

export async function getCurrentUser(): Promise<User | null> {
  const { data: { session } } = await supabase.auth.getSession()
  return session?.user || null
}

export async function getProfile(userId: string): Promise<Profile | null> {
  const { data, error } = await supabase
    .from('profiles')
    .select('id, role, email')
    .eq('id', userId)
    .single()

  if (error) {
    console.error('Error fetching profile:', error)
    return null
  }

  return data
}

export function routeByRole(role: string): string {
  switch (role) {
    case 'admin':
      return '/admin'
    case 'driver':
      return '/driver'
    case 'rider':
      return '/rider'
    default:
      return '/'
  }
}
