import React from 'react';
import './CTAButton.css';

const CTAButton = ({ onClick, children }) => (
  <button className="cta-btn animate-pulse-slow" onClick={onClick}>
    {children}
  </button>
);

export default CTAButton; 