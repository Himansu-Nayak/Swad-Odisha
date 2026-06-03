import React from 'react';
import heroAsset from '../assets/c2c54701e32b4d6e1ab653b1bba22bf0ca144a30.png';

export const Hero: React.FC = () => {
  return (
    <section id="home" style={{ backgroundColor: 'black', color: 'white', minHeight: '100vh', padding: '100px' }}>
      <h1 style={{ fontSize: '10vw' }}>SWAD ODISHA</h1>
      <img src={heroAsset} style={{ width: '200px' }} alt="Hero" />
    </section>
  );
};
