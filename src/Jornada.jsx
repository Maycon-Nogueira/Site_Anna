import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FiFileText,
  FiClipboard,
  FiVideo,
  FiList,
  FiSmartphone,
  FiAward,
  FiChevronDown,
  FiPaperclip,
  FiHeart,
  FiLock
} from 'react-icons/fi';
import './Jornada.css';

const journeySteps = [
  {
    icon: <FiFileText />,
    title: "Escolha Seu Plano",
    description: "Opções mensal, trimestral ou semestral, adaptadas aos seus objetivos específicos.",
    benefit: "Flexibilidade para se adequar ao seu ritmo e orçamento.",
  },
  {
    icon: <FiClipboard />,
    title: "Questionário Detalhado",
    description: "Histórico de saúde completo, preferências alimentares e rotina diária.",
    benefit: "Base sólida para um plano 100% personalizado.",
  },
  {
    icon: <FiVideo />,
    title: "Consulta Inicial",
    description: "Análise profunda e individualizada para definirmos metas realistas juntos.",
    benefit: "Clareza total sobre o ponto de partida e onde queremos chegar.",
  },
  {
    icon: <FiList />,
    title: "Planejamento Personalizado",
    description: "Cardápio adaptado ao seu gosto, com lista de compras e guia de preparos.",
    benefit: "Receba receitas exclusivas e deliciosas para seu perfil.",
  },
  {
    icon: <FiSmartphone />,
    title: "Acompanhamento Diário",
    description: "Suporte contínuo via app para registro de refeições e esclarecimento de dúvidas.",
    benefit: "Você nunca se sentirá sozinho(a) na sua jornada.",
  },
  {
    icon: <FiAward />,
    title: "Retornos Estratégicos",
    description: "Ajustes mensais ou quinzenais para otimizar os resultados e celebrar conquistas.",
    benefit: "Evolução constante e motivação para seguir em frente.",
  },
];

const JourneyStep = ({ step, index, onToggle, isActive }) => (
  <motion.div
    className={`journey-step ${isActive ? 'active' : ''}`}
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.5 }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    onClick={() => onToggle(index)}
  >
    <div className="step-header">
      <div className="step-icon-container">
        <div className="step-number">{index + 1}</div>
        {step.icon}
      </div>
      <h3 className="step-title">{step.title}</h3>
      <FiChevronDown className="step-arrow" />
    </div>
    <AnimatePresence>
      {isActive && (
        <motion.div
          className="step-content"
          initial={{ height: 0, opacity: 0, marginTop: 0 }}
          animate={{ height: 'auto', opacity: 1, marginTop: '16px' }}
          exit={{ height: 0, opacity: 0, marginTop: 0 }}
          transition={{ duration: 0.4, ease: 'easeInOut' }}
        >
          <p className="step-description">{step.description}</p>
          <p className="step-benefit">
            <FiHeart />
            {step.benefit}
          </p>
        </motion.div>
      )}
    </AnimatePresence>
  </motion.div>
);

const Jornada = () => {
  const [activeStep, setActiveStep] = useState(null);

  const handleToggle = (index) => {
    setActiveStep(activeStep === index ? null : index);
  };

  return (
    <section id="jornada" className="jornada-section">
      <div className="jornada-container">
        <motion.div
          className="jornada-header"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
        >
          <h2>Sua Jornada Rumo à Saúde Plena</h2>
          <p className="jornada-subtitle">
            Entenda como funciona o acompanhamento nutricional, passo a passo.
          </p>
        </motion.div>

        <div className="journey-path">
          {journeySteps.map((step, index) => (
            <JourneyStep
              key={index}
              step={step}
              index={index}
              isActive={activeStep === index}
              onToggle={handleToggle}
            />
          ))}
        </div>
        
        <div className="journey-centerpiece">
          <div className="centerpiece-icon">
            <img src="/borboleta.png" alt="Sua Transformação" />
          </div>
          <h4>Sua Transformação</h4>
        </div>

        <motion.div
          className="jornada-cta"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <h3>Pronto para Iniciar Sua Jornada?</h3>
          <p>Dê o primeiro passo para uma vida mais saudável e equilibrada.</p>
          <form className="cta-form">
            <div className="form-group select-group">
               <FiPaperclip />
              <select defaultValue="">
                <option value="" disabled>Escolha um plano</option>
                <option value="mensal">Plano Mensal</option>
                <option value="trimestral">Plano Trimestral</option>
                <option value="semestral">Plano Semestral</option>
              </select>
            </div>
            <a href="https://wa.me/5511979977839" target="_blank" rel="noopener noreferrer" className="cta-button">
              Agendar Consulta Inicial
            </a>
          </form>
          <div className="form-footer">
            <FiLock /> Seus dados estão protegidos pela LGPD.
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Jornada; 