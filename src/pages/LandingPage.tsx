import Header from '../components/Header'
import Hero from '../components/Hero'
import TrustRow from '../components/TrustRow'
import HowItWorks from '../components/HowItWorks'
import FAQ from '../components/FAQ'
import LeadForm from '../components/LeadForm'
import Footer from '../components/Footer'

export default function LandingPage() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  const handleRequestRideClick = () => {
    scrollToSection('early-access')
  }

  const handleBecomeDriverClick = () => {
    scrollToSection('early-access')
  }

  return (
    <div className="min-h-screen">
      <Header onRequestRideClick={handleRequestRideClick} />
      <main>
        <Hero
          onRequestRideClick={handleRequestRideClick}
          onBecomeDriverClick={handleBecomeDriverClick}
        />
        <TrustRow />
        <HowItWorks />
        <FAQ />
        <LeadForm />
      </main>
      <Footer />
    </div>
  )
}
