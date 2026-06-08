import logoMimo from './assets/logo-mimo.png'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import About from './components/About'
import HowItWorks from './components/HowItWorks'
import Testimonials from './components/Testimonials'
import ServicesList from './components/ServicesList'
import Gallery from './components/Gallery'
import FAQ from './components/FAQ'
import ContactForm from './components/ContactForm'
import Footer from './components/Footer'
import { WhatsAppFloating } from './components/WhatsAppButton'

export default function App() {
  return (
    <div className="min-h-screen relative" dir="rtl">
      {/* Logo watermark */}
      <div
        aria-hidden
        style={{
          position: 'fixed',
          inset: 0,
          backgroundImage: `url(${logoMimo})`,
          backgroundRepeat: 'repeat',
          backgroundSize: '320px auto',
          opacity: 0.04,
          pointerEvents: 'none',
          zIndex: 0,
        }}
      />
      <div className="relative z-10">
        <Navbar />
        <main>
          <HeroSection />
          <About />
          <HowItWorks />
          <Testimonials />
          <ServicesList />
          <Gallery />
          <FAQ />
          <ContactForm />
        </main>
        <Footer />
      </div>

      {/* Floating WhatsApp — mobile only */}
      <WhatsAppFloating />
    </div>
  )
}
