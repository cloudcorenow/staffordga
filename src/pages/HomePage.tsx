import React, { useEffect } from 'react';
import Hero from '../components/home/Hero';
import Features from '../components/home/Features';
import Services from '../components/home/Services';
import Stats from '../components/home/Stats';
import CTA from '../components/home/CTA';

const HomePage: React.FC = () => {
  useEffect(() => {
    document.title = 'Stafford Group & Associates | Professional Debt Collection';
  }, []);

  return (
    <>
      <Hero />
      <Features />
      <Services />
      <Stats />
      <CTA />
    </>
  );
};

export default HomePage;