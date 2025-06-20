import React, { useState, useRef, useEffect } from 'react';
import './InteractiveCard.css';

const InteractiveCard = ({ icon, title, shortText, fullText }) => {
  const [expanded, setExpanded] = useState(false);
  const [visible, setVisible] = useState(false);
  const cardRef = useRef(null);

  useEffect(() => {
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.2 }
    );
    if (cardRef.current) observer.observe(cardRef.current);
    return () => observer.disconnect();
  }, []);

  const handleToggle = (e) => {
    e.stopPropagation();
    setExpanded((v) => !v);
  };

  return (
    <div
      ref={cardRef}
      className={`interactive-card${expanded ? ' expanded' : ''}${visible ? ' visible' : ''}`}
      tabIndex={0}
    >
      <div className="card-header">
        <span className="card-icon" aria-hidden>{icon}</span>
        <span className="card-title">{title}</span>
      </div>
      <div className="card-text">
        {expanded ? fullText : shortText}
      </div>
      <button className="card-toggle" tabIndex={-1} aria-label={expanded ? 'Mostrar menos' : 'Leia mais'} onClick={handleToggle}>
        {expanded ? 'Mostrar menos' : 'Leia mais'}
      </button>
    </div>
  );
};

export default InteractiveCard; 