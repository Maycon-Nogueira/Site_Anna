import React, { useState } from 'react';
import './AboutSection.css';
import ProfileCard from './components/ProfileCard';

const AboutSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

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
              <button className="secondary-button" onClick={openModal}>Ver Credenciais</button>
            </div>
          </div>
        </div>
      </div>

      {/* Modal de Credenciais */}
      {isModalOpen && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal}>×</button>
            <div className="modal-header">
              <h2>Credenciais Profissionais</h2>
              <div className="modal-divider"></div>
            </div>
            <div className="modal-body">
              <div className="credential-item">
                <h3>Formação Acadêmica</h3>
                <p>Bacharelado em Nutrição - Universidade Presbiteriana Mackenzie</p>
              </div>
              <div className="credential-item">
                <h3>Registro Profissional</h3>
                <p>CRN-3: 12345 - Conselho Regional de Nutricionistas</p>
              </div>
              <div className="credential-item">
                <h3>Especializações</h3>
                <ul>
                  <li>Nutrição Clínica e Comportamental</li>
                  <li>Nutrição Esportiva</li>
                  <li>Nutrição Funcional</li>
                </ul>
              </div>
              <div className="credential-item">
                <h3>Experiência</h3>
                <p>5+ anos de experiência em consultório particular e atendimento personalizado</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default AboutSection; 