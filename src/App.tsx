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
    <div className="min-h-screen relative" dir="rtl">
      {/* Logo watermark */}
      <div
        aria-hidden
        style={{
          position: 'fixed',
          inset: 0,
          backgroundImage: 'url(/mimo_logo.png)',
          backgroundRepeat: 'repeat',
          backgroundSize: '320px auto',
          opacity: 0.03,
          pointerEvents: 'none',
          zIndex: 0,
        }}
      />
      <div className="relative z-10">
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
    </div>
  )
}
