import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import ProblemSolution from './components/ProblemSolution'
import Workshops from './components/Workshops'
import Products from './components/Products'
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
        <Products />
        <Testimonials />
        <AppBonus />
        <BottomCTA />
      </main>
      <Footer />
    </div>
  )
}
