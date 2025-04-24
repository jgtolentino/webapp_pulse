// src/components/BrandLogo.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/real_logo.svg';

const BrandLogo = () => {
  return (
    <Link to="/" className="flex items-center space-x-2">
      <img
        src={Logo}
        alt="InsightPulseAI logo"
        className="h-10 w-auto"
        style={{ maxHeight: '40px' }}
      />
      <span className="sr-only">InsightPulseAI</span>
    </Link>
  );
};

export default BrandLogo;