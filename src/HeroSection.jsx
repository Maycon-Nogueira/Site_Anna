import React, { useEffect, useRef } from 'react';
import './HeroSection.css';

const HeroSection = () => {
  const waveRef = useRef(null);

  // Animação orgânica da onda
  useEffect(() => {
    let frame = 0;
    let animationId;
    const animateWave = () => {
      const amplitude = 30;
      const frequency = 0.012;
      const basePath = [
        { x: 0, y: 180 },
        { x: 240, y: 80 },
        { x: 480, y: 300 },
        { x: 720, y: 120 },
        { x: 960, y: -20 },
        { x: 1200, y: 250 },
        { x: 1440, y: 100 }
      ];
      const t = frame * frequency;
      const path = basePath.map((point, i) => {
        // Onda orgânica: cada ponto oscila com fase diferente
        const offset = Math.sin(t + i) * amplitude * (i % 2 === 0 ? 1 : 0.6);
        return { x: point.x, y: point.y + offset };
      });
      const d = `M${path[0].x},${path[0].y} C${path[1].x},${path[1].y} ${path[2].x},${path[2].y} ${path[3].x},${path[3].y} C${path[4].x},${path[4].y} ${path[5].x},${path[5].y} ${path[6].x},${path[6].y} L1440,300 L0,300 Z`;
      if (waveRef.current) {
        waveRef.current.setAttribute('d', d);
      }
      frame++;
      animationId = requestAnimationFrame(animateWave);
    };
    animateWave();
    return () => cancelAnimationFrame(animationId);
  }, []);

  return (
    <section className="hero-section">
      <div className="hero-bg" />
      <div className="hero-content">
        <h1>ANNA CASTRO</h1>
        <div className="subtitle-group">
          <h2>nutricionista</h2>
          <p className="crn">CRN/3: 901278/P</p>
        </div>
        <div className="cta-group">
          <a href="#agendar" className="agendar-btn">Agendar consulta</a>
        </div>
      </div>
      <div className="hero-wave">
        <svg preserveAspectRatio="none" viewBox="0 0 1440 300" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path ref={waveRef} d="M0,180 C240,80 480,300 720,120 C960,-20 1200,250 1440,100 L1440,300 L0,300 Z" fill="#F8D7DA" />
        </svg>
        {/* Frutas animadas, bem distribuídas */}
        <img src="/morango.png" className="fruta fruta1" alt="Morango" />
        <img src="/kiwi.png" className="fruta fruta2" alt="Kiwi" />
        <img src="/kiwi_cortado.png" className="fruta fruta3" alt="Kiwi cortado" />
        <img src="/morango.png" className="fruta fruta4" alt="Morango" />
        <img src="/kiwi_cortado.png" className="fruta fruta5" alt="Kiwi cortado" />
        <img src="/morango.png" className="fruta fruta6" alt="Morango" />
        <img src="/morango.png" className="fruta fruta7" alt="Morango" />
        <img src="/kiwi.png" className="fruta fruta8" alt="Kiwi" />
      </div>
    </section>
  );
};

export default HeroSection; 