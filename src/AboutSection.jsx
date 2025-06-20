import React from 'react';
import './AboutSection.css';
import ProfileCard from './components/ProfileCard';

const AboutSection = () => {
  return (
    <section className="about-section">
      <div className="dynamic-background"></div>
      
      <div className="about-container">
        <div className="about-header">
          <h1>Conheça Sua Nutricionista</h1>
          <div className="header-divider"></div>
          <p>Uma jornada dedicada à sua saúde e bem-estar</p>
        </div>
        
        <div className="profile-container">
          <ProfileCard />
          
          <div className="about-content">
            <div className="interactive-card">
              <div className="card-icon">❤️</div>
              <h2>Minha Filosofia</h2>
              <p>Acredito que nutrição é sobre equilíbrio, não restrição. Meu trabalho combina ciência nutricional com compreensão das necessidades individuais para criar planos sustentáveis que se adaptam à sua vida.</p>
            </div>
            
            <div className="interactive-card">
              <div className="card-icon">🌿</div>
              <h2>Minha Abordagem</h2>
              <p>Utilizo uma metodologia centrada no paciente, considerando seu histórico médico, preferências alimentares, rotina e objetivos pessoais. Juntos, construímos hábitos que transformam saúde em prazer.</p>
            </div>
            
            <div className="cta-container">
              <button className="cta-button">Agendar Consulta</button>
              <button className="secondary-button">Ver Credenciais</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection; 