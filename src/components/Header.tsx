import { useState } from 'react'

interface HeaderProps {
  onRequestRideClick: () => void
}

export default function Header({ onRequestRideClick }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="bg-charcoal-900 text-white sticky top-0 z-50 shadow-lg">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="/" className="flex items-center gap-3 hover:opacity-90 transition-opacity">
              <img
                src="https://www.leamington.ca/en/resourcesGeneral/Leamington-Logo.png"
                alt="City of Leamington"
                className="h-12 w-auto object-contain"
              />
              <span className="text-sm font-medium tracking-tight text-gray-300">
                Leamington RideShare
              </span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:gap-4">
            <button
              onClick={() => {/* Sign in logic */}}
              className="px-4 py-2 text-sm font-normal text-gray-400 hover:text-gray-300 transition-colors duration-300 focus:outline-none rounded-lg"
            >
              Sign in
            </button>
            <button
              onClick={onRequestRideClick}
              className="px-6 py-2.5 text-sm font-semibold bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 focus:ring-offset-charcoal-900 shadow-md"
            >
              Request a ride
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="inline-flex items-center justify-center rounded-lg p-2 text-white hover:bg-charcoal-800 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-500"
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
        <div className="md:hidden bg-charcoal-800 border-t border-charcoal-700">
          <div className="space-y-1 px-4 pb-3 pt-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false)
                /* Sign in logic */
              }}
              className="block w-full text-left px-3 py-2 text-base font-normal text-gray-400 hover:text-gray-300 rounded-lg transition-colors duration-300"
            >
              Sign in
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false)
                onRequestRideClick()
              }}
              className="block w-full text-center mt-2 px-3 py-2.5 text-base font-semibold bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors duration-300"
            >
              Request a ride
            </button>
          </div>
        </div>
      )}
    </header>
  )
}
