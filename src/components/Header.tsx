import { useState } from 'react'
import SignInModal from './SignInModal'

interface HeaderProps {
  onRequestRideClick: () => void
}

export default function Header({ onRequestRideClick }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [signInModalOpen, setSignInModalOpen] = useState(false)

  const handleSignInClick = () => {
    console.log('Sign in modal opening')
    setSignInModalOpen(true)
  }

  return (
    <header className="bg-[#F5F7FA] sticky top-0 z-50 shadow-sm border-t-[3px] border-t-[#F9A01E] border-b border-b-[#E5E7EB]">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0 pl-2">
            <a href="/" className="flex items-center hover:opacity-90 transition-opacity">
              <img
                src="https://www.leamington.ca/en/resourcesGeneral/Leamington-Logo.png"
                alt="City of Leamington"
                className="h-11 w-auto object-contain"
              />
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:gap-4">
            <button
              onClick={handleSignInClick}
              className="px-4 py-2 text-sm font-normal text-[#004987] hover:underline hover:decoration-[#F9A01E] hover:decoration-2 hover:underline-offset-4 transition-all duration-300 focus:outline-none rounded-lg"
            >
              Sign in
            </button>
            <button
              onClick={onRequestRideClick}
              className="px-6 py-2.5 text-sm font-semibold bg-[#004987] text-white rounded-lg hover:bg-[#004E7D] transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-[#004987] focus:ring-offset-2 shadow-md"
            >
              Request a ride
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="inline-flex items-center justify-center rounded-lg p-2 text-[#004987] hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#004987]"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className={`${mobileMenuOpen ? 'hidden' : 'block'} h-6 w-6`}
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
              <svg
                className={`${mobileMenuOpen ? 'block' : 'hidden'} h-6 w-6`}
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-[#E5E7EB]">
          <div className="space-y-1 px-4 pb-3 pt-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false)
                handleSignInClick()
              }}
              className="block w-full text-left px-3 py-2 text-base font-normal text-[#004987] hover:bg-gray-50 rounded-lg transition-colors duration-300"
            >
              Sign in
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false)
                onRequestRideClick()
              }}
              className="block w-full text-center mt-2 px-3 py-2.5 text-base font-semibold bg-[#004987] text-white rounded-lg hover:bg-[#004E7D] transition-colors duration-300"
            >
              Request a ride
            </button>
          </div>
        </div>
      )}

      {/* Sign In Modal */}
      <SignInModal
        isOpen={signInModalOpen}
        onClose={() => setSignInModalOpen(false)}
      />
    </header>
  )
}
