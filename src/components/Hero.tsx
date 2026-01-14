interface HeroProps {
  onRequestRideClick: () => void
  onBecomeDriverClick: () => void
}

export default function Hero({ onRequestRideClick, onBecomeDriverClick }: HeroProps) {
  return (
    <section className="relative bg-gradient-to-br from-charcoal-900 via-primary-900 to-charcoal-800 text-white overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjA1IiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-40"></div>

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
              className="w-full sm:w-auto px-8 py-4 text-base sm:text-lg font-semibold bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-all focus:outline-none focus:ring-4 focus:ring-primary-500/50 shadow-xl hover:shadow-2xl hover:scale-105 transform"
            >
              Request a ride
            </button>
            <button
              onClick={onBecomeDriverClick}
              className="w-full sm:w-auto px-8 py-4 text-base sm:text-lg font-semibold bg-white/10 text-white border-2 border-white/30 rounded-lg hover:bg-white/20 hover:border-white/50 transition-all focus:outline-none focus:ring-4 focus:ring-white/30 backdrop-blur-sm"
            >
              Become a driver
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
