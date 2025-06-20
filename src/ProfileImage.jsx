import React from 'react';
import './ProfileImage.css';

const ProfileImage = ({ src, alt }) => (
  <div className="profile-image-container">
    <img src={src} alt={alt} className="profile-image animate-float" />
  </div>
);

export default ProfileImage; 