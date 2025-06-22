import React from 'react';
import { FiMail, FiInstagram, FiLinkedin, FiPhone, FiChevronRight, FiLock } from 'react-icons/fi';
import './Footer.css';

const Footer = () => {
  const quickLinks = [
    { name: 'Sobre Mim', href: '#sobre-mim' },
    { name: 'Benefícios', href: '#beneficios' },
    { name: 'Como Funciona', href: '#jornada' },
    { name: 'Depoimentos', href: '#avaliacoes' },
    { name: 'Contato', href: '#contato' },
  ];

  const socialLinks = [
    {
      icon: <FiPhone />,
      text: '(11) 97997-7839',
      href: 'https://wa.me/5511979977839',
    },
    {
      icon: <FiInstagram />,
      text: '@annacastroz',
      href: 'https://www.instagram.com/annacastroz/',
    },
    {
      icon: <FiMail />,
      text: 'contato@nutriannacastro.com.br',
      href: 'mailto:contato@nutriannacastro.com.br',
    },
    {
      icon: <FiLinkedin />,
      text: 'Dra. Anna Castro',
      href: 'https://linkedin.com/in/anna-castro-nutri',
    },
  ];

  return (
    <footer id="contato" className="footer">
      <div className="footer-container">
        <div className="footer-content">
          {/* Coluna 1: Logo e Slogan */}
          <div className="footer-column">
            <a href="#hero">
              <img src="/logo.png" alt="Anna Castro Nutricionista" className="footer-logo" />
            </a>
            <p className="footer-slogan">
              Nutrição que transforma vidas, online para todo Brasil.
            </p>
            <div className="footer-seal">
              Atendimento 100% Online
            </div>
          </div>

          {/* Coluna 2: Links Rápidos */}
          <div className="footer-column">
            <h4 className="footer-title">Navegação</h4>
            <ul className="quick-links">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.href}>
                    <FiChevronRight />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Coluna 3: Contatos */}
          <div className="footer-column">
            <h4 className="footer-title">Contato</h4>
            <ul className="contact-links">
              {socialLinks.map((link) => (
                <li key={link.text}>
                  <a href={link.href} target="_blank" rel="noopener noreferrer">
                    {link.icon}
                    <span>{link.text}</span>
                  </a>
                </li>
              ))}
            </ul>
             <p className="crn-text">CRN-3 00000</p>
          </div>

          {/* Coluna 4: Newsletter */}
          <div className="footer-column">
            <h4 className="footer-title">Receba dicas exclusivas</h4>
            <form className="newsletter-form">
              <input type="email" placeholder="Seu melhor e-mail" />
              <button type="submit">Inscrever</button>
            </form>
            <p className="newsletter-disclaimer">
              Sem spam, apenas conteúdo útil e relevante para sua saúde.
            </p>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="copyright">
            © {new Date().getFullYear()} Nutri Anna Castro - Todos os direitos reservados.
          </p>
          <div className="footer-legal-links">
             <a href="/politica-de-privacidade"><FiLock size={12}/> Política de Privacidade</a>
            <a href="/termos-de-uso">Termos de Uso</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 