import React, { useEffect, useRef } from 'react';
import './Header.css';

const Header = () => {
  const headerRef = useRef(null);
  let lastScrollY = window.scrollY;

  useEffect(() => {
    const handleScroll = () => {
      if (!headerRef.current) return;
      if (window.scrollY > lastScrollY) {
        headerRef.current.classList.add('hide');
      } else {
        headerRef.current.classList.remove('hide');
      }
      lastScrollY = window.scrollY;
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header ref={headerRef} className="header">
      <nav className="nav nav-left">
        <a href="#sobre">Sobre mim</a>
        <a href="#beneficios">Benefícios</a>
      </nav>
      <div className="logo-container">
        <img src="/logo.png" alt="Logo" className="logo grande" />
      </div>
      <nav className="nav nav-right">
        <a href="#valores">Valores</a>
        <a href="#avaliacoes">Avaliações</a>
      </nav>
      <a href="#agendar" className="agendar-btn">Agendar</a>
    </header>
  );
};

export default Header; 