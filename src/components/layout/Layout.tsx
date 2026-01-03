import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import Header from './Header';
import Footer from './Footer';
import ScrollToTop from '../common/ScrollToTop';

const Layout: React.FC = () => {
  const location = useLocation();
  
  return (
    <div className="flex flex-col min-h-screen">
      <ScrollToTop />
      <Header />
      <motion.main 
        key={location.pathname}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.3 }}
        className="flex-grow"
      >
        <Outlet />
      </motion.main>
      <Footer />
    </div>
  );
};

export default Layout;