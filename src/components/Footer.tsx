export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-charcoal-900 text-gray-300">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand Column */}
          <div className="md:col-span-2">
            <h3 className="text-xl font-bold text-white mb-4">
              Leamington Ride Share
            </h3>
            <p className="text-sm text-gray-400 mb-4 max-w-md">
              Safe local rides in Leamington. Approved drivers, transparent pricing, and city friendly support.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-4 uppercase tracking-wider">
              Quick Links
            </h4>
            <ul className="space-y-3">
              <li>
                <a href="#how-it-works" className="text-sm hover:text-primary-400 transition-colors">
                  How it works
                </a>
              </li>
              <li>
                <a href="#faq" className="text-sm hover:text-primary-400 transition-colors">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#early-access" className="text-sm hover:text-primary-400 transition-colors">
                  Get early access
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-4 uppercase tracking-wider">
              Legal
            </h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-sm hover:text-primary-400 transition-colors">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="text-sm hover:text-primary-400 transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-sm hover:text-primary-400 transition-colors">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-charcoal-800">
          <p className="text-center text-sm text-gray-400">
            © {currentYear} Leamington Ride Share. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
