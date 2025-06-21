import React from 'react';
import './Beneficios.css';

const beneficios = [
  {
    icon: (
      <svg viewBox="0 0 48 48" width="48" height="48" fill="none">
        <circle cx="24" cy="24" r="22" stroke="#e73089" strokeWidth="1.5" fill="none"/>
        <path d="M16 20h16M16 28h16M12 24h24" stroke="#fb5012" strokeWidth="1.5" strokeLinecap="round"/>
        <circle cx="24" cy="24" r="4" fill="#e73089"/>
      </svg>
    ),
    title: "Acompanhamento particular",
    desc: "Mais que uma simples dieta, você terá um acompanhamento que irá se alinhar com seus objetivos e atender suas particularidades."
  },
  {
    icon: (
      <svg viewBox="0 0 48 48" width="48" height="48" fill="none">
        <circle cx="24" cy="24" r="22" stroke="#e73089" strokeWidth="1.5" fill="none"/>
        <path d="M14 18h20M14 24h20M14 30h20" stroke="#fb5012" strokeWidth="1.5" strokeLinecap="round"/>
        <rect x="12" y="14" width="24" height="20" rx="2" stroke="#e73089" strokeWidth="1.5" fill="none"/>
      </svg>
    ),
    title: "Material informativo",
    desc: "Você receberá semanalmente um material cuidadosamente feito para ampliar seus conhecimentos, com um conteúdo confiável."
  },
  {
    icon: (
      <svg viewBox="0 0 48 48" width="48" height="48" fill="none">
        <circle cx="24" cy="24" r="22" stroke="#e73089" strokeWidth="1.5" fill="none"/>
        <path d="M24 12v8M24 28v8M16 24h-8M40 24h-8" stroke="#fb5012" strokeWidth="1.5" strokeLinecap="round"/>
        <circle cx="24" cy="24" r="6" fill="#e73089"/>
      </svg>
    ),
    title: "Disponibilidade integral",
    desc: "Através de um software e número profissional, você poderá acompanhar seu progresso e receber orientações de forma rápida e prática conforme suas necessidades."
  },
  {
    icon: (
      <svg viewBox="0 0 48 48" width="48" height="48" fill="none">
        <circle cx="24" cy="24" r="22" stroke="#e73089" strokeWidth="1.5" fill="none"/>
        <path d="M16 20l8 8 8-8M24 28v8" stroke="#fb5012" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="24" cy="16" r="3" fill="#e73089"/>
      </svg>
    ),
    title: "Plano de metas",
    desc: "Utilizando destes planos, você poderá alcançar seus objetivos de forma gradual e segura com uma profissional capacitada para te ajudar."
  },
  {
    icon: (
      <svg viewBox="0 0 48 48" width="48" height="48" fill="none">
        <circle cx="24" cy="24" r="22" stroke="#e73089" strokeWidth="1.5" fill="none"/>
        <path d="M16 28c2 2 6 4 8 4s6-2 8-4" stroke="#fb5012" strokeWidth="1.5" fill="none"/>
        <circle cx="18" cy="20" r="2" fill="#e73089"/>
        <circle cx="30" cy="20" r="2" fill="#e73089"/>
        <path d="M20 32l4 4 4-4" stroke="#e73089" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: "Reeducação alimentar",
    desc: "Compreendendo a forma correta de se lidar com os alimentos, você terá paz na relação com a comida e mais autoestima, sem pânico moral."
  },
  {
    icon: (
      <svg viewBox="0 0 48 48" width="48" height="48" fill="none">
        <circle cx="24" cy="24" r="22" stroke="#e73089" strokeWidth="1.5" fill="none"/>
        <rect x="16" y="16" width="16" height="16" rx="2" stroke="#fb5012" strokeWidth="1.5" fill="none"/>
        <path d="M20 20h8M20 24h8M20 28h4" stroke="#e73089" strokeWidth="1.5" strokeLinecap="round"/>
        <circle cx="18" cy="18" r="1" fill="#e73089"/>
        <circle cx="18" cy="22" r="1" fill="#e73089"/>
        <circle cx="18" cy="26" r="1" fill="#e73089"/>
      </svg>
    ),
    title: "Histórico centralizado",
    desc: "Através do software disponibilizado, você poderá acompanhar seu progresso de forma simples e organizada."
  }
];

export default function Beneficios() {
  return (
    <section className="beneficios-clean-section">
      <div className="beneficios-bg-clean" aria-hidden="true" />
      <div className="beneficios-clean-header">
        <h2>Benefícios do acompanhamento nutricional</h2>
        <div className="beneficios-clean-divider">
          <svg width="60" height="24" viewBox="0 0 60 24" fill="none">
            <path d="M2 22C10 10 50 10 58 22" stroke="#fb5012" strokeWidth="3" fill="none" strokeLinecap="round"/>
            <ellipse cx="30" cy="12" rx="6" ry="6" fill="#fb5012" opacity="0.12"/>
          </svg>
        </div>
        <p>Transformação Real, Resultados Duradouros</p>
      </div>
      <div className="beneficios-clean-grid">
        {beneficios.map((b, i) => (
          <div className="beneficio-clean-card" key={i} tabIndex={0}>
            <div className="beneficio-clean-icon">{b.icon}</div>
            <div className="beneficio-clean-title">{b.title}</div>
            <div className="beneficio-clean-desc">{b.desc}</div>
          </div>
        ))}
      </div>
      <div className="beneficios-clean-cta-wrap">
        <a href="#agendar" className="beneficios-clean-cta">
          Iniciar Minha Transformação
          <span className="cta-arrow">→</span>
        </a>
      </div>
    </section>
  );
} 