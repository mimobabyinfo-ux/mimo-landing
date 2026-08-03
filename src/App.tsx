import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import Empathy from './components/Empathy'
import Workshops from './components/Workshops'
import HowItWorks from './components/HowItWorks'
import Testimonials from './components/Testimonials'
import About from './components/About'
import FAQ from './components/FAQ'
import ContactSection from './components/ContactSection'
import Products from './components/Products'
import Footer from './components/Footer'
import Reveal from './components/Reveal'
import StickyCTA from './components/StickyCTA'

export default function App() {
  return (
    // padding-bottom clears the fixed StickyCTA bar
    <div className="min-h-screen" dir="rtl" style={{ paddingBottom: 76 }}>
      <Navbar />
      <main>
        <HeroSection />
        <Empathy />
        <Workshops />
        <HowItWorks />
        <Testimonials />
        <Reveal><About /></Reveal>
        <Reveal><FAQ /></Reveal>
        <ContactSection />
        <Reveal><Products /></Reveal>
      </main>
      <Footer />
      <StickyCTA />
    </div>
  )
}
