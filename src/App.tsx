import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import ProblemSolution from './components/ProblemSolution'
import Workshops from './components/Workshops'
import Services from './components/Services'
import Pricing from './components/Pricing'
import Testimonials from './components/Testimonials'
import AppBonus from './components/AppBonus'
import BottomCTA from './components/BottomCTA'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen" dir="rtl">
      <Navbar />
      <main>
        <HeroSection />
        <ProblemSolution />
        <Workshops />
        <Services />
        <Testimonials />
        <Pricing />
        <AppBonus />
        <BottomCTA />
      </main>
      <Footer />
    </div>
  )
}
