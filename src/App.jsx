import Header from './Header'
import HeroSection from './HeroSection'
import AboutSection from './AboutSection'
import Beneficios from './Beneficios'
import Valores from './Valores'
import Avaliacoes from './Avaliacoes'
import Footer from './Footer'
import './App.css'

function App() {
  return (
    <>
      <Header />
      <HeroSection />
      <AboutSection />
      <Beneficios />
      <Valores />
      <Avaliacoes />
      <Footer />
      {/* Botão flutuante do WhatsApp */}
      <a
        href="https://wa.me/SEUNUMEROAQUI"
        className="whatsapp-float"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Fale conosco no WhatsApp"
      >
        <img src="/whatsapp.png" alt="WhatsApp" />
      </a>
    </>
  )
}

export default App
