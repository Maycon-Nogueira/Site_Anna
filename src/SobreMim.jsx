import React from 'react';
import WaveDivider from './WaveDivider';
import ProfileImage from './ProfileImage';
import InteractiveCard from './InteractiveCard';
import CTAButton from './CTAButton';
import './SobreMim.css';

const cards = [
  {
    icon: '🍎',
    title: 'Minha Filosofia',
    shortText: 'Acredito em nutrição sem restrições, focada em liberdade e prazer.',
    fullText: 'Acredito que a alimentação saudável é sinônimo de liberdade, não de restrição. Minha abordagem une ciência nutricional e comportamento humano para criar planos personalizados que se adaptam à sua rotina, gostos e objetivos.'
  },
  {
    icon: '📚',
    title: 'Minha Formação',
    shortText: 'Graduada pela Universidade Mackenzie, com especialização em comportamento alimentar.',
    fullText: 'Sou nutricionista formada pela Universidade Presbiteriana Mackenzie, com especialização em comportamento alimentar. Busco atualização constante para oferecer o melhor acompanhamento baseado em ciência.'
  },
  {
    icon: '🤝',
    title: 'Meu Compromisso',
    shortText: 'Respeito, ética e empatia em cada atendimento.',
    fullText: 'Trabalho para transformar sua relação com a comida em algo leve e sustentável – onde saúde e prazer caminham juntos. Seu bem-estar é minha prioridade. Vamos juntos construir hábitos que nutrem seu corpo e sua vida?'
  }
];

const handleConsultation = () => {
  window.open('https://wa.me/5511999999999', '_blank');
};

const SobreMim = () => (
  <section className="sobre-mim-novo" id="sobre">
    <WaveDivider color="#F8D7DA" />
    <div className="sobre-mim-content">
      <ProfileImage src="/foto_sobremim.jpeg" alt="Foto da Nutricionista" />
      <h2 className="sobre-mim-titulo">Minha Jornada</h2>
      <div className="sobre-mim-cards">
        {cards.map((card, i) => (
          <InteractiveCard key={i} {...card} />
        ))}
      </div>
      <CTAButton onClick={handleConsultation}>Agendar Consulta</CTAButton>
    </div>
    <WaveDivider color="#F8D7DA" flip />
  </section>
);

export default SobreMim; 