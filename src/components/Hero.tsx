interface HeroProps {
  onRequestRideClick: () => void
  onBecomeDriverClick: () => void
}

export default function Hero({ onRequestRideClick, onBecomeDriverClick }: HeroProps) {
  return (
    <section className="relative bg-gradient-to-br from-charcoal-900 via-primary-900 to-charcoal-800 text-white overflow-hidden">
      {/* Subtle road pattern overlay */}
      <div className="absolute inset-0 opacity-20">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="roadPattern" x="0" y="0" width="200" height="200" patternUnits="userSpaceOnUse">
              {/* Horizontal road lines */}
              <line x1="0" y1="50" x2="200" y2="50" stroke="white" strokeWidth="2" strokeDasharray="20,15" opacity="0.3"/>
              <line x1="0" y1="150" x2="200" y2="150" stroke="white" strokeWidth="2" strokeDasharray="20,15" opacity="0.3"/>
              {/* Vertical subtle paths */}
              <line x1="70" y1="0" x2="70" y2="200" stroke="white" strokeWidth="1" opacity="0.15"/>
              <line x1="130" y1="0" x2="130" y2="200" stroke="white" strokeWidth="1" opacity="0.15"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#roadPattern)"/>
        </svg>
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 sm:py-28 lg:py-36">
        <div className="text-center">
          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
            Safe local rides in Leamington
          </h1>

          {/* Subheadline */}
          <p className="text-lg sm:text-xl lg:text-2xl text-gray-200 mb-10 max-w-3xl mx-auto leading-relaxed">
            Approved drivers. Transparent pricing. City friendly support.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={onRequestRideClick}
              className="w-full sm:w-auto px-8 py-4 text-base sm:text-lg font-semibold bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors duration-300 focus:outline-none focus:ring-4 focus:ring-primary-500/50 shadow-xl"
            >
              Request a ride
            </button>
            <button
              onClick={onBecomeDriverClick}
              className="w-full sm:w-auto px-8 py-4 text-base sm:text-lg font-semibold bg-white/10 text-white border-2 border-white/30 rounded-lg hover:bg-white/20 hover:border-white/50 transition-colors duration-300 focus:outline-none focus:ring-4 focus:ring-white/30 backdrop-blur-sm"
            >
              Become a driver
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
