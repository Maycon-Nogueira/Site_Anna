import Header from './Header'
import HeroSection from './HeroSection'
import AboutSection from './AboutSection'
import Beneficios from './Beneficios'
import Jornada from './Jornada'
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
      <Jornada />
      <Avaliacoes />
      <Footer />
      {/* Botão flutuante do WhatsApp */}
      <a
        href="https://wa.me/5511979977839"
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
