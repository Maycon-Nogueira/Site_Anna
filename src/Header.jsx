import React, { useEffect, useRef } from 'react';
import './Header.css';

const Header = () => {
  const headerRef = useRef(null);

  useEffect(() => {
    const header = headerRef.current;
    if (!header) return;

    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      // Lógica para ocultar/mostrar no scroll
      if (window.scrollY > lastScrollY && window.scrollY > 150) {
        header.classList.add('hide');
      } else {
        header.classList.remove('hide');
      }
      lastScrollY = window.scrollY;

      // Lógica para mudar a cor
      const scrollPosition = window.scrollY;
      const sobreMimSection = document.getElementById('sobre-mim');
      const avaliacoesSection = document.getElementById('avaliacoes');
      
      header.classList.remove('header-transparent', 'header-pink', 'header-green');

      if (avaliacoesSection && scrollPosition >= avaliacoesSection.offsetTop - 100) {
        header.classList.add('header-green');
      } else if (sobreMimSection && scrollPosition >= sobreMimSection.offsetTop - 100) {
        header.classList.add('header-pink');
      } else {
        header.classList.add('header-transparent');
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Executa uma vez no carregamento para definir a cor inicial

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header ref={headerRef} className="header">
      <nav className="nav nav-left">
        <a href="#sobre-mim">Sobre Mim</a>
        <a href="#beneficios">Benefícios</a>
      </nav>
      <div className="logo-container">
        <a href="#hero">
          <img src="/logo.png" alt="Logo" className="logo grande" />
        </a>
      </div>
      <nav className="nav nav-right">
        <a href="#jornada">Jornada</a>
        <a href="#avaliacoes">Avaliações</a>
      </nav>
      <a href="https://wa.me/5511979977839" target="_blank" rel="noopener noreferrer" className="agendar-btn">Agendar</a>
    </header>
  );
};

export default Header; 