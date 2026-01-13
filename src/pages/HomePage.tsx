import React, { useEffect } from 'react';
import Hero from '../components/home/Hero';
import Features from '../components/home/Features';
import Services from '../components/home/Services';

const HomePage: React.FC = () => {
  useEffect(() => {
    document.title = 'Stafford Group & Associates | Professional Debt Collection';
  }, []);

  return (
    <>
      <Hero />
      <Features />
      <Services />
    </>
  );
};

export default HomePage;