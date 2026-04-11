import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import About from './components/About'
import HowItWorks from './components/HowItWorks'
import Testimonials from './components/Testimonials'
import ServicesList from './components/ServicesList'
import Gallery from './components/Gallery'
import ContactForm from './components/ContactForm'
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
          <About />
          <HowItWorks />
          <Testimonials />
          <ServicesList />
          <Gallery />
          <ContactForm />
        </main>
        <Footer />
      </div>
    </div>
  )
}
