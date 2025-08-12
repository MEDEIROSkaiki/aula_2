import React from 'react';
import './HeroSection.css';

function HeroSection({ onLoginClick }) {
  return (
    <div className="hero">
      <h1>Bem-vindo à Kaiki Shop</h1>
      <p>Os melhores produtos você encontra aqui!</p>
    </div>
  );
}

export default HeroSection;