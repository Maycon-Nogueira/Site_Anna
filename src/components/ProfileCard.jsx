import React from 'react';
import './ProfileCard.css';

const ProfileCard = () => {
  return (
    <div className="profile-card">
      <div className="profile-image-container">
        <div className="image-frame">
          <div className="profile-image"></div>
        </div>
        <div className="profile-badge">Nutricionista</div>
      </div>
      
      <div className="profile-info">
        <h2>Dra. Anna Castro</h2>
        <p className="specialty">Especialista em Nutrição Comportamental</p>
        
        <div className="profile-stats">
          <div className="stat-item">
            <div className="stat-value">10+</div>
            <div className="stat-label">Anos de Experiência</div>
          </div>
          <div className="stat-item">
            <div className="stat-value">500+</div>
            <div className="stat-label">Pacientes Atendidos</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard; 