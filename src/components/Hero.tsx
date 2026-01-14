interface HeroProps {
  onRequestRideClick: () => void
  onBecomeDriverClick: () => void
}

export default function Hero({ onRequestRideClick, onBecomeDriverClick }: HeroProps) {
  return (
    <section className="relative bg-primary-800 text-white overflow-hidden">
      {/* Subtle diagonal accent */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-br from-accent-500/5 to-transparent transform translate-x-1/4 -translate-y-1/4 rotate-12"></div>
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 sm:py-28 lg:py-36">
        <div className="text-center">
          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
            Safe local rides in Leamington
          </h1>

          {/* Subheadline */}
          <p className="text-lg sm:text-xl lg:text-2xl text-gray-200 mb-3 max-w-3xl mx-auto leading-relaxed">
            Approved drivers. Transparent pricing. City friendly support.
          </p>

          {/* Municipality line */}
          <p className="text-base sm:text-lg text-gray-300 mb-10 max-w-3xl mx-auto">
            A local transportation pilot for the Municipality of Leamington
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6">
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

          {/* Trust positioning */}
          <p className="text-sm text-gray-300/90 max-w-2xl mx-auto">
            Designed for residents. Operated locally. Supported by the municipality.
          </p>
        </div>
      </div>
    </section>
  )
}
